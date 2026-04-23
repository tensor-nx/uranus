'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import {
  RiCheckboxCircleFill,
  RiFilter3Line,
  RiFocus2Line,
  RiNotification3Line,
  RiSettings2Line,
} from '@remixicon/react';
import { cn } from '@/cn';

import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
type Notification = {
  id: string;
  icon: React.ComponentType<any>;
  iconColor: string;
  title: string;
  description: string;
  time: string;
  hasIndicator?: boolean;
  tag?: string;
};

const notifications: Notification[] = [
  {
    id: '1',
    icon: RiFocus2Line,
    iconColor: 'text-warning-base',
    tag: 'Marketing',
    title: "There's a drop in campaign performance",
    description:
      'Critical drop in conversion rates affecting Q4 targets requires immediate review and optimization of current marketing strategies.',
    time: '2 minutes ago',
    hasIndicator: true,
  },
];

const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn('relative h-0 w-full text-stroke-soft-200', className)}
      role='separator'
    >
      <div
        className='absolute left-0 h-px w-full'
        style={{
          background:
            'linear-gradient(90deg, currentColor 4px, transparent 4px) 50% 50% / 8px 1px repeat no-repeat',
        }}
      />
    </div>
  );
};

export default function BlockNotification() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke' className='relative'>
          <Button.Icon as={RiNotification3Line} />
          <div className='absolute right-2.5 top-2.5 size-2 rounded-full border-2 border-stroke-white-0 bg-primary-base shadow-regular-xs' />
        </Button.Root>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className='mx-4 w-screen max-w-[calc(100vw-36px)] rounded-3xl bg-bg-white-0 p-0 shadow-regular-md will-change-transform min-[480px]:max-w-[440px]'
          sideOffset={5}
        >
          <div className='relative z-10 flex items-center justify-between px-5 py-4'>
            <h5 className='text-label-md text-text-sub-600'>Notifications</h5>
            <div className='flex items-center gap-3'>
              <CompactButton.Root
                size='large'
                variant='ghost'
                className='text-text-soft-400'
                tabIndex={-1}
              >
                <CompactButton.Icon as={RiFilter3Line} />
              </CompactButton.Root>
              <CompactButton.Root
                size='large'
                variant='ghost'
                className='text-text-soft-400'
                tabIndex={-1}
              >
                <CompactButton.Icon as={RiCheckboxCircleFill} />
              </CompactButton.Root>
            </div>
          </div>

          <div className='overflow-auto'>
            <div className='px-4 pb-4 pt-3'>
              {notifications.map((notification) => (
                <div key={notification.id}>
                  <div className='flex items-start gap-3'>
                    <div className='flex size-4 shrink-0 items-center justify-center'>
                      {notification.hasIndicator && (
                        <div className='h-1.5 w-1.5 rounded-full bg-primary-base' />
                      )}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <div className='flex items-center gap-1.5'>
                        {notification.tag && (
                          <span className='text-label-sm text-text-soft-400'>
                            {notification.tag}
                          </span>
                        )}

                        <span className='text-label-sm text-text-soft-400'>
                          ·
                        </span>

                        <span className='text-label-sm text-text-soft-400'>
                          {notification.time}
                        </span>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <h5 className='text-label-md text-text-strong-950'>
                          {notification.title}
                        </h5>
                        <span className='text-paragraph-sm text-text-sub-600'>
                          {notification.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='px-4'>
            <Divider />
          </div>

          <div className='flex items-center justify-center p-4 text-label-sm text-text-sub-600'>
            <span className='text-label-sm text-text-sub-600'>
              No more notifications
            </span>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
