'use client';

import * as React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import {
  RiAddCircleLine,
  RiArrowDownLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowUpLine,
  RiCalendarLine,
  RiFileTextLine,
  RiGroup2Line,
  RiHome5Line,
  RiSearch2Line,
  RiTimeLine,
} from '@remixicon/react';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as CommandMenu from '@/components/ui/command-menu';
import * as CompactButton from '@/components/ui/compact-button';
import * as Kbd from '@/components/ui/kbd';
import { cn } from '@/utils/cn';
const ScrollbarVertical = React.forwardRef<
  React.ComponentRef<typeof ScrollArea.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollArea.ScrollAreaScrollbar>
>(({ className, ...rest }, ref) => {
  return (
    <ScrollArea.Scrollbar
      ref={ref}
      className={cn(
        'relative z-30 flex w-5 touch-none select-none justify-center border-l border-stroke-soft-200 bg-bg-white-0 py-1.5',
        className,
      )}
      orientation='vertical'
      {...rest}
    >
      <ScrollArea.Thumb className='!w-1 shrink-0 rounded-full bg-stroke-soft-200' />
    </ScrollArea.Scrollbar>
  );
});
ScrollbarVertical.displayName = 'ScrollbarVertical';

export default function BlockCommandMenu() {
  const [open, setOpen] = React.useState(true);
  const [activeFilter, setActiveFilter] = React.useState(0);

  const filterOptions = [
    'All',
    'Training',
    'Interview',
    'Design task',
    'Review',
    'Onboarding',
  ];

  const meetings = [
    {
      name: 'James B.',
      time: '9 AM',
      duration: '30 min',
      avatar: 'https://alignui.com/images/avatar/illustration/james.png',
    },
    {
      name: 'Sophia W.',
      time: '10 AM',
      duration: '30 min',
      avatar: 'https://alignui.com/images/avatar/illustration/sophia.png',
    },
    {
      name: 'Arthur T.',
      time: '11 AM',
      duration: '30 min',
      avatar: 'https://alignui.com/images/avatar/illustration/arthur.png',
    },
    {
      name: 'Ravi P.',
      time: '12 PM',
      duration: '30 min',
      avatar: 'https://alignui.com/images/avatar/illustration/ravi.png',
    },
  ];

  const quickActions = [
    {
      title: 'Dashboard page',
      icon: RiHome5Line,
    },
    {
      title: 'Team page',
      icon: RiGroup2Line,
    },
    {
      title: 'Payroll page',
      icon: RiFileTextLine,
    },
    {
      title: 'Create new position',
      icon: RiCalendarLine,
    },
    {
      title: 'View attendance report',
      icon: RiAddCircleLine,
    },
    {
      title: 'Schedule meeting',
      icon: RiTimeLine,
    },
  ];

  return (
    <>
      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() => setOpen(true)}
      >
        Open Command Menu
      </Button.Root>

      <CommandMenu.Dialog
        open={open}
        onOpenChange={setOpen}
        className='h-auto w-full max-w-screen-sm'
      >
        <div className='flex min-w-0 flex-col rounded-xl bg-bg-white-0 shadow-custom-md'>
          {/* Search Input */}
          <div className='group/cmd-input flex h-14 min-w-0 items-center gap-2 border-b border-stroke-soft-200 px-5'>
            <RiSearch2Line className='size-5 shrink-0 text-text-soft-400 transition duration-200 ease-out group-focus-within/cmd-input:text-primary-base' />
            <CommandMenu.Input
              className='min-w-0 flex-1'
              placeholder='Search meetings, people, or type a command...'
            />
            <Kbd.Root className='hidden items-center justify-center text-text-soft-400 md:flex'>
              ⌘K
            </Kbd.Root>
          </div>

          {/* Filter Options */}
          <div className='flex min-w-0 gap-2 overflow-x-auto border-b border-stroke-soft-200 px-5 py-4'>
            {filterOptions.map((filter, index) => (
              <Button.Root
                key={filter}
                size='xxsmall'
                variant={activeFilter === index ? 'primary' : 'neutral'}
                mode={activeFilter === index ? 'lighter' : 'stroke'}
                onClick={() => setActiveFilter(index)}
                className='px-2.5 py-1'
              >
                {filter}
              </Button.Root>
            ))}
          </div>

          {/* Main Content */}
          <div className='flex min-w-0 flex-1 flex-col overflow-y-auto'>
            <CommandMenu.List className='w-full'>
              {/* Recent Meetings */}
              <CommandMenu.Group
                className='[cmdk-group-heading]]:p-5 flex w-full flex-col gap-3 p-5 [&>[cmdk-group-heading]]:mb-0 [&>[cmdk-group-heading]]:p-0'
                heading={
                  <div className='flex items-center justify-between'>
                    <div className='text-label-sm'>
                      <span className='text-text-soft-600'>
                        Recent meetings
                      </span>{' '}
                      <span className='text-text-soft-400'>(8)</span>
                    </div>
                    <div className='flex gap-1'>
                      <CompactButton.Root size='medium'>
                        <RiArrowLeftSLine className='size-4' />
                      </CompactButton.Root>
                      <CompactButton.Root size='medium'>
                        <RiArrowRightSLine className='size-4' />
                      </CompactButton.Root>
                    </div>
                  </div>
                }
              >
                <div className='no-scrollbar flex w-full gap-2.5 overflow-x-auto'>
                  {meetings.map((meeting) => (
                    <div
                      key={meeting.name}
                      className='flex min-w-[100px] flex-[1_0_auto] cursor-pointer flex-col items-center gap-3 rounded-xl border border-stroke-soft-200 p-3 transition-all'
                    >
                      <Avatar.Root size='40'>
                        <Avatar.Image src={meeting.avatar} alt={meeting.name} />
                        <Avatar.Indicator>
                          <Avatar.Status status='online' />
                        </Avatar.Indicator>
                      </Avatar.Root>
                      <div className='flex flex-col items-center gap-1'>
                        <div className='text-label-sm text-text-strong-950'>
                          {meeting.name}
                        </div>
                        <div className='text-label-xs'>
                          <span className='text-text-sub-600'>
                            {meeting.time}
                          </span>{' '}
                          <span className='text-text-soft-400'>-</span>{' '}
                          <span className='text-text-sub-600'>
                            {meeting.duration}
                          </span>
                        </div>
                      </div>
                      <Button.Root
                        variant='neutral'
                        mode='stroke'
                        size='xxsmall'
                        className='group-hover:border-primary-500 group-hover:text-primary-500 w-full'
                      >
                        Detail
                      </Button.Root>
                    </div>
                  ))}
                </div>
              </CommandMenu.Group>

              {/* Quick Actions */}
              <CommandMenu.Group
                className='w-full border-t border-stroke-soft-200 p-2.5 [&>[cmdk-group-heading]]:mb-0 [&>[cmdk-group-heading]]:p-0 [&>[cmdk-group-heading]]:px-2.5 [&>[cmdk-group-heading]]:py-2'
                heading={
                  <span className='text-label-sm'>
                    <span className='text-text-soft-600'>Quick actions</span>{' '}
                    <span className='text-text-soft-400'> (6)</span>
                  </span>
                }
              >
                <div className='grid w-full grid-cols-1'>
                  {quickActions.map((action) => (
                    <CommandMenu.Item
                      key={action.title}
                      className='group/cmd-item flex items-center justify-between gap-3 p-2.5 hover:bg-bg-weak-50'
                    >
                      <div className='flex items-center gap-2.5'>
                        <action.icon
                          className={cn(
                            'size-5 text-text-soft-400',
                            'transition-colors duration-200 ease-out',
                            'group-hover/cmd-item:text-text-sub-600',
                            'group-data-[selected=true]/cmd-item:text-text-sub-600',
                            'group-data-[highlighted=true]/cmd-item:text-text-sub-600',
                          )}
                        />
                        <span
                          className={cn(
                            'text-label-sm text-text-sub-600',
                            'transition-colors duration-200 ease-out',
                            'group-hover/cmd-item:text-text-strong-950',
                            'group-data-[selected=true]/cmd-item:text-text-strong-950',
                            'group-data-[highlighted=true]/cmd-item:text-text-strong-950',
                          )}
                        >
                          {action.title}
                        </span>
                      </div>
                      <CompactButton.Root
                        variant='white'
                        size='medium'
                        className={cn(
                          'opacity-0',
                          'group-hover/cmd-item:opacity-100',
                          'group-data-[highlighted=true]/cmd-item:opacity-100',
                          'group-data-[selected=true]/cmd-item:opacity-100',
                          'transition-opacity duration-200 ease-out',
                        )}
                      >
                        <RiArrowRightSLine className='size-5 text-text-sub-600' />
                      </CompactButton.Root>
                    </CommandMenu.Item>
                  ))}
                </div>
              </CommandMenu.Group>
            </CommandMenu.List>
          </div>

          {/* Footer */}
          <CommandMenu.Footer className='flex h-14 min-w-0 items-center justify-between border-t border-stroke-soft-200 bg-bg-weak-50 px-5 py-[18px] text-paragraph-xs text-text-sub-600'>
            <div className='hidden items-center gap-2 md:flex'>
              <span className='text-label-sm text-text-sub-600'>Use</span>
              <Kbd.Root className='flex size-5 items-center justify-center text-text-sub-600 shadow-custom-xs ring-0'>
                <RiArrowUpLine className='size-[18px] shrink-0' />
              </Kbd.Root>
              <Kbd.Root className='flex size-5 items-center justify-center text-text-sub-600 shadow-custom-xs ring-0'>
                <RiArrowDownLine className='size-[18px] shrink-0' />
              </Kbd.Root>
              <span className='text-label-sm text-text-sub-600'>
                to navigate
              </span>
            </div>
            <div className='hidden items-center gap-2 md:flex'>
              <span className='text-label-sm text-text-sub-600'>Type</span>
              <Kbd.Root className='flex size-5 items-center justify-center shadow-custom-xs ring-0'>
                <span className='flex size-4 shrink-0 items-center justify-center text-label-xs text-text-sub-600'>
                  /
                </span>
              </Kbd.Root>
              <span className='text-label-sm text-text-sub-600'>
                for commands
              </span>
            </div>
          </CommandMenu.Footer>
        </div>
      </CommandMenu.Dialog>
    </>
  );
}
