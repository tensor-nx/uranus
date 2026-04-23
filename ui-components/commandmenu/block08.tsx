'use client';

import * as React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import {
  RiArrowRightSLine,
  RiGlobalLine,
  RiMailLine,
  RiMap2Line,
  RiSearch2Line,
  RiSuitcaseLine,
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
const userDetailItems = [
  {
    icon: <RiMap2Line className='size-5 text-text-sub-600' />,
    label: 'Location',
    key: 'location',
  },
  {
    icon: <RiSuitcaseLine className='size-5 text-text-sub-600' />,
    label: 'Specialty',
    key: 'specialty',
  },
  {
    icon: <RiMailLine className='size-5 text-text-sub-600' />,
    label: 'Email Address',
    key: 'email',
  },
  {
    icon: <RiGlobalLine className='size-5 text-text-sub-600' />,
    label: 'Languages',
    key: 'languages',
  },
] as const;

export default function BlockCommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [activeUser, setActiveUser] = React.useState('Sophia Williams');

  const users = [
    {
      name: 'James Brown',
      avatar: 'https://alignui.com/images/avatar/memoji/james.png',
      color: 'gray' as const,
      role: 'Product Designer',
      location: 'London, UK',
      specialty: 'UI/UX, Product Design, Prototyping',
      email: 'james@alignui.com',
      languages: 'English, French',
    },
    {
      name: 'Sophia Williams',
      avatar: 'https://alignui.com/images/avatar/memoji/sophia.png',
      color: 'yellow' as const,
      role: 'Marketing Manager',
      location: 'Berlin, Germany',
      specialty: 'Marketing, SEO, Team Leader',
      email: 'sophia@alignui.com',
      languages: 'English, German, Spanish',
    },
    {
      name: 'Arthur Taylor',
      avatar: 'https://alignui.com/images/avatar/memoji/arthur.png',
      color: 'blue' as const,
      role: 'Frontend Developer',
      location: 'Paris, France',
      specialty: 'React, TypeScript, UI Development',
      email: 'arthur@alignui.com',
      languages: 'English, French',
    },
    {
      name: 'Emma Wright',
      avatar: 'https://alignui.com/images/avatar/memoji/emma.png',
      color: 'sky' as const,
      role: 'Content Strategist',
      location: 'New York, USA',
      specialty: 'Content Writing, SEO, Social Media',
      email: 'emma@alignui.com',
      languages: 'English, Spanish',
    },
    {
      name: 'Matthew Johnson',
      avatar: 'https://alignui.com/images/avatar/memoji/matthew.png',
      color: 'purple' as const,
      role: 'Backend Developer',
      location: 'Amsterdam, Netherlands',
      specialty: 'Node.js, Python, Database Design',
      email: 'matthew@alignui.com',
      languages: 'English, Dutch',
    },
    {
      name: 'Laura Perez',
      avatar: 'https://alignui.com/images/avatar/memoji/laura.png',
      color: 'red' as const,
      role: 'UX Researcher',
      location: 'Barcelona, Spain',
      specialty: 'User Research, Analytics, A/B Testing',
      email: 'laura@alignui.com',
      languages: 'English, Spanish, Catalan',
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
        className='max-w-[700px]'
      >
        <div className='rounded-12 flex flex-col overflow-hidden bg-bg-white-0 shadow-custom-md md:h-[440px]'>
          {/* Search Bar */}
          <div className='group/cmd-input flex h-14 w-full items-center gap-2 border-b border-stroke-soft-200 px-5'>
            <RiSearch2Line
              className={cn(
                'size-5 shrink-0 text-text-soft-400',
                'transition duration-200 ease-out',
                'group-focus-within/cmd-input:text-primary-base',
              )}
            />
            <CommandMenu.Input
              className='h-full w-full flex-1 bg-transparent outline-none placeholder:text-text-soft-400'
              placeholder='Search HR tools or press...'
            />
            <Kbd.Root className='hidden items-center justify-center text-text-soft-400 md:flex'>
              ⌘K
            </Kbd.Root>
          </div>

          {/* Main Content */}
          <div className='flex flex-1 flex-col overflow-auto'>
            {/* Sidebar and Content Container */}
            <div className='flex flex-1 flex-col md:flex-row'>
              {/* Left Sidebar */}
              <div className='w-full border-b border-stroke-soft-200 md:w-60 md:border-b-0 md:border-r'>
                <ScrollArea.Root className='w-full md:h-full' type='scroll'>
                  <ScrollArea.Viewport className='w-full'>
                    <div className='flex gap-1 overflow-x-auto p-2.5 md:flex-col'>
                      {users.map((user) => (
                        <div
                          key={user.name}
                          onClick={() => setActiveUser(user.name)}
                          className={cn(
                            'w-[200px] flex-shrink-0 md:w-auto',
                            'flex cursor-pointer items-center justify-between gap-2.5 rounded-lg px-2.5 py-2',
                            'group/cmd-item relative',
                            'transition-all duration-200 ease-out',
                            activeUser === user.name
                              ? 'bg-bg-weak-50'
                              : 'hover:bg-bg-weak-50',
                          )}
                        >
                          <div className='flex items-center gap-2.5'>
                            <Avatar.Root size='20' color={user?.color}>
                              <Avatar.Image src={user.avatar} alt={user.name} />
                              <Avatar.Indicator>
                                <Avatar.Status status='online' />
                              </Avatar.Indicator>
                            </Avatar.Root>
                            <span className='text-label-sm text-text-sub-600'>
                              {user.name}
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
                        </div>
                      ))}
                    </div>
                  </ScrollArea.Viewport>
                  <ScrollbarVertical className='hidden md:flex' />
                </ScrollArea.Root>
              </div>

              {/* Right Content */}
              <div className='flex w-full flex-1 flex-col'>
                {activeUser && (
                  <div>
                    {/* Top - Avatar and Name */}
                    <div className='flex items-center justify-between border-b border-stroke-soft-200 p-5'>
                      <div className='flex items-center gap-4'>
                        {(() => {
                          const user = users.find((u) => u.name === activeUser);
                          return (
                            <>
                              <Avatar.Root size='48' color={user?.color}>
                                <Avatar.Image
                                  src={user?.avatar}
                                  alt={user?.name}
                                />
                                <Avatar.Indicator>
                                  <Avatar.Status status='online' />
                                </Avatar.Indicator>
                              </Avatar.Root>
                              <div className='flex flex-col'>
                                <span className='text-label-medium text-text-strong-950'>
                                  {activeUser}
                                </span>
                                <span className='text-paragraph-sm text-text-sub-600'>
                                  {
                                    users.find((u) => u.name === activeUser)
                                      ?.role
                                  }
                                </span>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                      <Button.Root
                        variant='primary'
                        mode='lighter'
                        size='xsmall'
                      >
                        Message
                      </Button.Root>
                    </div>

                    {/* Details */}
                    <div className='flex flex-col gap-5 p-5'>
                      {userDetailItems.map((item) => (
                        <div key={item.key} className='flex items-center gap-3'>
                          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
                            {item.icon}
                          </div>
                          <div className='flex flex-col gap-1'>
                            <span className='text-label-sm text-text-soft-400'>
                              {item.label}
                            </span>
                            <span className='text-label-sm text-text-sub-600'>
                              {
                                users.find((u) => u.name === activeUser)?.[
                                  item.key
                                ]
                              }
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </CommandMenu.Dialog>
    </>
  );
}
