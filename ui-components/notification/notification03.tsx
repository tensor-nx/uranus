'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import {
  RiFocus3Line,
  RiNotification3Line,
  RiUser2Line,
  RiVerifiedBadgeLine,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
type Notification = {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  time: string;
};

const notifications: Notification[] = [
  {
    id: '1',
    icon: RiUser2Line,
    title: 'Your investment portfolio First Steps started.',
    time: '1:27 PM',
  },
  {
    id: '2',
    icon: RiVerifiedBadgeLine,
    title: 'Your risk assessment Profile Setup started.',
    time: '1:27 PM',
  },
  {
    id: '3',
    icon: RiFocus3Line,
    title: 'Your financial goals 2024 Planning started.',
    time: '1:27 PM',
  },
];

export default function BlockNotification() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke' className='relative'>
          <Button.Icon as={RiNotification3Line} />
          <div className='absolute right-2.5 top-2.5 size-2 rounded-full border-2 border-stroke-white-0 bg-primary-base shadow-regular-md' />
        </Button.Root>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align='start'
          alignOffset={-45}
          side='bottom'
          sideOffset={5}
          className='mx-4 w-[calc(100vw-32px)] max-w-[289px] rounded-2xl bg-bg-white-0 p-0 shadow-regular-md will-change-transform'
        >
          <Popover.Arrow asChild>
            <svg
              width='16'
              height='7'
              viewBox='0 0 16 7'
              style={{ transform: 'rotate(180deg)' }}
            >
              <path
                d='M5.17158 1.82842C6.73367 0.266327 9.26633 0.266331 10.8284 1.82843L16 7L-1.39876e-06 7L5.17158 1.82842Z'
                className='fill-bg-white-0'
              />
            </svg>
          </Popover.Arrow>
          <div className='h-fit w-full'>
            {notifications.map((notification) => (
              <div key={notification.id}>
                <div className='p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='flex size-6 shrink-0 items-center justify-center text-text-soft-400'>
                      <notification.icon size={20} />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h5 className='text-label-sm text-text-strong-950'>
                        {notification.title}
                      </h5>
                      <span className='text-label-xs text-text-soft-400'>
                        {notification.time}
                      </span>
                    </div>
                  </div>
                </div>
                <Divider.Root className='bg-stroke-soft-200' />
              </div>
            ))}
          </div>

          <div className='flex items-center justify-center px-5 py-3'>
            <span className='cursor-pointer text-label-sm text-text-sub-600'>
              See all notifications
            </span>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
