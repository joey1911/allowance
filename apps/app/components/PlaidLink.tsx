'use client'

import React, {
  useCallback,
  useState
} from 'react';
import {
  usePlaidLink,
  PlaidLinkOnSuccess,
  PlaidLinkOnEvent,
  PlaidLinkOnExit,
  PlaidLinkOptions,
} from 'react-plaid-link';
import type { User } from '@supabase/auth-helpers-nextjs';
import { createFundingSourceViaPartner } from '@/actions/marqeta';

export default function PlaidLink({
  user
}: {
  user: User
}) {
  const [token, setToken] = useState<string | null>(null);

  // Get a link token
  React.useEffect(() => {
    const getLinkToken = async () => {
      const response = await fetch('/api/plaid/link-token', {
        method: 'GET'
      });
      const data = await response.json();

      if (data.status === 'OK') {
        setToken(data.linkToken);
      } else {
        // Need to do something since we can't link account...display an error?
      }
    };

    getLinkToken();
  }, []);

  /**
   * Adding a Funding source with Marqeta + Plaid
   * 
   * Step 1: Get a "Link Token" from Plaid using the Plaid Link component
   *         This will launch the Link flow to authenticate and add accounts
   * Step 2: Exchange the "Public Token" sent to onSuccess after completing
   *         the "Link flow" for an access token
   * Loop through selected accounts from "Link flow"
   *   Step 3: Create "Processor Token" from Plaid to send to Marqeta
   *   Step 4: Use "Processor Token" to add funding source to Marqeta
   */
  const onSuccess = useCallback<PlaidLinkOnSuccess>((publicToken, metadata) => {
    const getAccessToken = async () => {
      /**
       * This is Step 2.
       * 
       * We need to exchange the public token received from "Link" for a Plaid
       * access_token
       */
      const accessTokenResponse = await fetch(`/api/plaid/access-token?ptoken=${publicToken}`, {
        method: 'GET'
      });
      const accessTokenData = await accessTokenResponse.json();

      if (accessTokenData.status === 'OK') {
        const { accessToken } = accessTokenData.data;

        // Loop through selected accounts from the "Link flow"
        metadata.accounts.forEach(async (account) => {
          /**
           * This is Step 3.
           * 
           * We need to get a Plaid processor token which we'll pass to Marqeta to
           * create the funding source
           */
          const processorTokenResponse = await fetch('/api/plaid/processor-token', {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
              accessToken,
              accountId: account.id
            })
          });
          const processorTokenData = await processorTokenResponse.json();

          if (processorTokenData.status === 'OK') {
            const { processorToken } = processorTokenData.data;
            /**
             * This is Step 4.
             * 
             * We need to add the funding source to Marqeta via the ACH Partner API
             */
            // Currently, we don't have access to this. Not sure how to get it :| -- have an email out to Marqeta
            const createFundingSourceResponse = await createFundingSourceViaPartner(user.id, processorToken);
            console.log(createFundingSourceResponse);
          } else {
            // Need to display error that we couldn't get a processor token
          }
        });
      } else {
        // how do we handle this error?
      }
    };

    getAccessToken();
  }, []);

  const onEvent = useCallback<PlaidLinkOnEvent>((eventName, metadata) => {
    // log onEvent callbacks from Link
    // https://plaid.com/docs/link/web/#onevent
    console.log(eventName, metadata);
  }, []);

  const onExit = useCallback<PlaidLinkOnExit>((error, metadata) => {
    // log onExit callbacks from Link, handle errors
    // https://plaid.com/docs/link/web/#onexit
    console.log(error, metadata);
  }, []);

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
    onEvent,
    onExit,
  };

  const {
    open,
    ready,
    // error,
    // exit
  } = usePlaidLink(config);

  return (
    <button type="button" onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  )
};