'use client';

import * as React from 'react';

import * as Button from '@/components/ui/button';
import * as Modal from '@/components/ui/modal';
import * as Tag from '@/components/ui/tag';

export default function BlockModal() {
  const [open, setOpen] = React.useState(true);
  const tags = [
    'Mid-Range Budget',
    'Dual Camera',
    'iOS',
    '5G Capable',
    'Fingerprint Sensor',
  ];

  return (
    <Modal.Root defaultOpen open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke'>
          Open Modal
        </Button.Root>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header title='Explore Smartphones' />
        <Modal.Body>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Applied filters
            </div>
            <div className='mt-3 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <Tag.Root key={tag} variant='stroke'>
                  {tag}
                  <Tag.DismissButton />
                </Tag.Root>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
