import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createAccessTokenFromPublicToken } from '@/actions/plaid';

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const publicToken = requestUrl.searchParams.get('ptoken');

  try {
    const response = await createAccessTokenFromPublicToken(publicToken);
  
    return NextResponse.json({
      status: 'OK',
      data: {
        accessToken: response.data.access_token,
        itemId: response.data.item_id
      }
    });
  } catch (error) {
    return NextResponse.json({
      status: 'Error',
      message: error.message
    });
  }
};