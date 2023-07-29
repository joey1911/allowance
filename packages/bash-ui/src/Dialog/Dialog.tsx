'use client'

import React from 'react';
import PropTypes from 'prop-types';
import {
  Root as DialogRoot,
  Trigger as DialogTrigger
} from '@radix-ui/react-dialog';
import {
  DialogTitle,
  DialogDescription,
  DialogContent,
} from './DialogBase';

export default function Dialog({
  /**
   * Open state
   */
  open,
  /**
   * Open change handler
   */
  openChangeHandler,
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
  open: boolean,
  openChangeHandler: (open: boolean) => void, // eslint-disable-line
  trigger: React.ReactNode,
  title: string,
  description: string,
  children: React.ReactNode
}) {
  return (
    <DialogRoot open={open} onOpenChange={openChangeHandler}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        {children}
      </DialogContent>
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