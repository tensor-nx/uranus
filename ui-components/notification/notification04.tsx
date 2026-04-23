'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import {
  RiFileAddLine,
  RiFilter3Line,
  RiNotification3Line,
  RiPieChartLine,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';
type Notification = {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  time: string;
  hasIndicator?: boolean;
  tag?: string;
};

const notifications: Notification[] = [
  {
    id: '1',
    icon: RiPieChartLine,
    title: 'Performance Review Due',
    description: '5 team members need Q4 evaluation',
    time: '15 minutes ago',
    hasIndicator: true,
  },
  {
    id: '2',
    icon: RiFileAddLine,
    title: 'Onboarding Status',
    description: 'New hire documentation pending for James',
    time: '1 hour ago',
    hasIndicator: true,
  },
];

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
          className='mx-4 h-[480px] w-screen max-w-[calc(100vw-36px)] rounded-3xl bg-bg-white-0 p-0 shadow-regular-md will-change-transform min-[480px]:max-w-[420px]'
          sideOffset={5}
        >
          <div className='relative z-10 flex items-center justify-between px-5 py-4'>
            <h5 className='text-label-md text-text-sub-600'>Notifications</h5>
            <CompactButton.Root
              size='large'
              variant='ghost'
              className='text-text-soft-400'
              tabIndex={-1}
            >
              <CompactButton.Icon as={RiFilter3Line} />
            </CompactButton.Root>
          </div>

          <Divider.Root />

          <div className='flex items-center justify-between gap-5 px-5 py-2.5'>
            <div className='flex items-center gap-5'>
              <LinkButton.Root variant='primary'>All</LinkButton.Root>
              <LinkButton.Root variant='gray'>Unread</LinkButton.Root>
            </div>
            <LinkButton.Root variant='gray'>Mark all as read</LinkButton.Root>
          </div>

          <Divider.Root />

          <div className='overflow-auto'>
            <div>
              {notifications.map((notification, index) => (
                <React.Fragment key={notification.id}>
                  {index > 0 && <Divider.Root />}
                  <div className='p-4'>
                    <div className='flex items-start gap-4'>
                      <div className='flex shrink-0 items-center justify-center text-text-soft-400'>
                        <notification.icon className='size-5' />
                      </div>
                      <div className='flex flex-col'>
                        <h5 className='text-label-sm text-text-strong-950'>
                          {notification.title}
                        </h5>
                        <span className='pt-1 text-paragraph-sm text-text-sub-600'>
                          {notification.description}
                        </span>
                        <span className='pt-2 text-label-xs text-text-soft-400'>
                          {notification.time}
                        </span>
                      </div>
                      {notification.hasIndicator && (
                        <div className='ml-auto flex size-4 items-center justify-center'>
                          <div className='size-1.5 shrink-0 rounded-full bg-primary-base' />
                        </div>
                      )}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
