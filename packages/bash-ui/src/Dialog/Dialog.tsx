'use client'

import React from 'react';
import PropTypes from 'prop-types';
import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
  Portal as DialogPortal
} from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import {
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogCloseButton
} from './DialogBase';

export default function Dialog({
  /**
   * Trigger element to open dialog
   */
  trigger,
  /**
   * Dialog title
   */
  title,
  /**
   * Dialog description
   */
  description = '',
  /**
   * Component content
   */
  children
}: {
  trigger: React.ReactNode,
  title: string,
  description: string,
  children: React.ReactNode
}) {
  return (
    <DialogRoot>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          {children}
          <DialogCloseButton><Cross2Icon /></DialogCloseButton>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
};

Dialog.propTypes = {
  /**
   * Trigger element to open dialog
   */
  trigger: PropTypes.node.isRequired,
  /**
   * Dialog title
   */
  title: PropTypes.string.isRequired,
  /**
   * Dialog description
   */
  description: PropTypes.string, // eslint-disable-line react/require-default-props
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}