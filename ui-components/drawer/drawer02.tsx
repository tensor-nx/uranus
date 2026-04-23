'use client';

import * as React from 'react';
import { RiAddLine, RiMore2Line, RiTimeLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Drawer from '@/components/ui/drawer';
import * as ProgressCircle from '@/components/ui/progress-circle';
const DashedDivider = ({ className }: { className?: string }) => {
  return (
    <div className='relative h-0 w-full text-stroke-soft-200' role='separator'>
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

type FollowUpAction = {
  color: string;
  title: string;
  assignee: string;
  date: string;
};

const followUpActions: FollowUpAction[] = [
  {
    color: 'bg-error-base',
    title: 'Weekly sales pipeline review',
    assignee: 'James Brown',
    date: 'Every Monday, 10:00 AM',
  },
  {
    color: 'bg-warning-base',
    title: 'Mid-quarter marketing campaign analysis',
    assignee: 'Sophia Williams',
    date: 'Nov 15, 2025',
  },
  {
    color: 'bg-away-base',
    title: 'Lead qualification process optimization',
    assignee: 'Wei Chen',
    date: 'Oct 31, 2025',
  },
  {
    color: 'bg-success-base',
    title: 'Customer feedback integration program',
    assignee: 'Laura Perez',
    date: 'Jan 18, 2025',
  },
];

export default function BlockDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex min-h-screen items-center justify-center bg-bg-white-0'>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            Open Goal
          </Button.Root>
        </Drawer.Trigger>

        <Drawer.Content className='absolute inset-y-0 mx-2 my-2 max-h-[calc(100%-16px)] w-[min(400px,calc(100%-16px))] rounded-20 shadow-custom-md'>
          <div className='flex h-full flex-col'>
            <Drawer.Header className='flex items-center justify-between p-5'>
              <Drawer.Title className='text-label-lg text-text-strong-950'>
                Goal
              </Drawer.Title>
            </Drawer.Header>

            <Divider.Root />

            <div className='flex-1 overflow-y-auto'>
              <div className='flex items-center gap-3.5 p-5'>
                <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
                  <RiTimeLine className='size-5 text-text-sub-600' />
                </div>
                <div className='space-y-1'>
                  <div className='text-label-sm text-text-sub-600'>
                    Archive Q4-2025 Revenue & Marketing Goals
                  </div>
                  <div className='text-label-sm text-text-soft-400'>
                    October 1 — December 31, 2025
                  </div>
                </div>
              </div>

              <Divider.Root variant='solid-text'>KEY RESULTS</Divider.Root>

              <div className='flex flex-col gap-5 p-5'>
                <div className='flex flex-col gap-5'>
                  <div className='flex items-center gap-5'>
                    <ProgressCircle.Root
                      value={44}
                      max={100}
                      size='48'
                      color='stroke-verified-base'
                    />
                    <div className='flex flex-1 flex-col gap-1'>
                      <div className='text-label-sm text-text-sub-600'>
                        Lead Conversion Rate
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <span className='text-title-h6 text-text-strong-950'>
                          18.5%
                        </span>
                        <div>
                          <span className='text-label-sm text-success-base'>
                            +2.1%
                          </span>
                          {'\n'}
                          <span className='text-label-sm text-text-sub-600'>
                            vs last week
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button.Root
                      variant='neutral'
                      mode='ghost'
                      size='xsmall'
                      className='size-5 rounded-md'
                    >
                      <Button.Icon
                        as={RiMore2Line}
                        className='size-[18px] text-text-sub-600'
                      />
                    </Button.Root>
                  </div>

                  <DashedDivider />

                  <div className='flex items-center gap-5'>
                    <ProgressCircle.Root
                      value={72}
                      max={100}
                      size='48'
                      color='stroke-away-base'
                    />
                    <div className='flex flex-1 flex-col gap-1'>
                      <div className='text-label-sm text-text-sub-600'>
                        Sales Pipeline Progress
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <span className='text-title-h6 text-text-strong-950'>
                          65%
                        </span>
                        <div>
                          <span className='text-label-sm text-error-base'>
                            -2%
                          </span>
                          {'\n'}
                          <span className='text-label-sm text-text-sub-600'>
                            vs last week
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button.Root
                      variant='neutral'
                      mode='ghost'
                      size='xsmall'
                      className='size-5 rounded-md'
                    >
                      <Button.Icon
                        as={RiMore2Line}
                        className='size-[18px] text-text-sub-600'
                      />
                    </Button.Root>
                  </div>
                </div>

                <Button.Root
                  variant='neutral'
                  mode='stroke'
                  className='w-full'
                  size='xsmall'
                >
                  <Button.Icon as={RiAddLine} />
                  New key result
                </Button.Root>
              </div>

              <Divider.Root variant='solid-text'>
                FOLLOW-UPS ACTIONS
              </Divider.Root>

              <div className='flex flex-col gap-4 p-5'>
                {followUpActions.map((action, index) => (
                  <React.Fragment key={index}>
                    <div className='flex items-start gap-3'>
                      <div className='flex size-5 items-center justify-center'>
                        <div
                          className={`size-2.5 rounded-full ${action.color}`}
                        />
                      </div>
                      <div className='space-y-1'>
                        <div className='text-label-sm text-text-strong-950'>
                          {action.title}
                        </div>
                        <div className='flex items-center gap-1'>
                          <span className='text-label-sm text-text-sub-600'>
                            {action.assignee}
                          </span>
                          <span className='text-label-sm text-text-soft-400'>
                            — {action.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    {index < followUpActions.length - 1 && <DashedDivider />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <Drawer.Footer className='flex justify-between gap-3 border-t'>
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='medium'
                className='flex-1'
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button.Root>
              <Button.Root
                variant='neutral'
                size='medium'
                className='flex-1'
                onClick={() => setOpen(false)}
              >
                Follow up
              </Button.Root>
            </Drawer.Footer>
          </div>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}
