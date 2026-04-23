'use client';

import * as React from 'react';
import * as DialogPrimitives from '@radix-ui/react-dialog';
import { RiInformationFill } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
import * as Modal from '@/components/ui/modal';

export default function BlockModal() {
  const [open, setOpen] = React.useState(true);

  return (
    <Modal.Root defaultOpen open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke'>
          Open Modal
        </Button.Root>
      </Modal.Trigger>
      <Modal.Content showClose={false} className='max-w-[440px]'>
        <Modal.Body>
          <div className='flex flex-col items-center gap-4'>
            <div className='flex size-10 shrink-0 items-center justify-center rounded-10 bg-information-lighter'>
              <RiInformationFill className='size-6 text-information-base' />
            </div>

            <div>
              <DialogPrimitives.Title className='text-center text-label-md text-text-strong-950'>
                New Feature Announcement
              </DialogPrimitives.Title>
              <DialogPrimitives.Description className='mt-1 text-center text-paragraph-sm text-text-sub-600'>
                We are excited to introduce a new feature that allows you to
                collaborate seamlessly with team members.
              </DialogPrimitives.Description>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <LinkButton.Root variant='gray' size='medium' underline>
            I&apos;m not interested
          </LinkButton.Root>
          <div className='flex gap-3'>
            <Button.Root variant='neutral' mode='stroke' size='small'>
              Cancel
            </Button.Root>
            <Button.Root size='small'>Learn More</Button.Root>
          </div>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}
