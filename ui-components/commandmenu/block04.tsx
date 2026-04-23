'use client';

import * as React from 'react';
import {
  RiArrowDownLine,
  RiArrowRightSLine,
  RiArrowRightUpLine,
  RiArrowUpLine,
  RiCornerDownLeftLine,
  RiSearch2Line,
} from '@remixicon/react';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as CommandMenu from '@/components/ui/command-menu';
import * as CompactButton from '@/components/ui/compact-button';
import * as Kbd from '@/components/ui/kbd';
import * as LinkButton from '@/components/ui/link-button';
import { cn } from '@/utils/cn';

function VerticalDivider({ className }: { className?: string }) {
  return (
    <div className={`relative hidden h-full w-0 md:block ${className || ''}`}>
      <div className='absolute left-0 top-0 h-full w-px bg-stroke-soft-200' />
    </div>
  );
}

function HorizontalDivider({ className }: { className?: string }) {
  return (
    <div className={`relative block h-0 w-full md:hidden ${className || ''}`}>
      <div className='absolute left-0 top-0 h-px w-full bg-stroke-soft-200' />
    </div>
  );
}

export default function BlockCommandMenu() {
  const [open, setOpen] = React.useState(true);

  const categories = [
    'Onboarding',
    'Reviews',
    'Hiring',
    'Benefits',
    'Learning',
  ];

  const tools = [
    {
      title: 'Monday.com',
      icon: 'https://alignui.com/images/major-brands/monday.svg',
    },
    { title: 'Loom', icon: 'https://alignui.com/images/major-brands/loom.svg' },
    {
      title: 'Asana',
      icon: 'https://alignui.com/images/major-brands/asana.svg',
    },
  ];

  const employees = [
    {
      name: 'James Brown',
      avatar: 'https://alignui.com/images/avatar/illustration/james.png',
    },
    {
      name: 'Sophia Williams',
      avatar: 'https://alignui.com/images/avatar/illustration/sophia.png',
    },
    {
      name: 'Laura Perez',
      avatar: 'https://alignui.com/images/avatar/illustration/laura.png',
    },
  ];

  const teams = [
    {
      name: 'Aurora Solutions',
      icon: 'https://alignui.com/images/logo/aurora.svg',
    },
    {
      name: 'Pulse Medical',
      icon: 'https://alignui.com/images/logo/pulse.svg',
    },
    {
      name: 'Synergy HR',
      icon: 'https://alignui.com/images/logo/synergy.svg',
    },
  ];

  const locations = [
    {
      country: 'United States',
      flag: 'https://alignui.com/flags/US.svg',
    },
    {
      country: 'Spain',
      flag: 'https://alignui.com/flags/ES.svg',
    },
    {
      country: 'Italy',
      flag: 'https://alignui.com/flags/IT.svg',
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
        className='rounded-12 relative flex h-auto max-h-[640px] w-full max-w-[632px] origin-top flex-col overflow-hidden bg-bg-white-0 !shadow-custom-md'
      >
        {/* Search Input */}
        <div className='group/cmd-input flex h-14 items-center gap-3 border-b border-stroke-soft-200 px-5'>
          <RiSearch2Line
            className={cn(
              'size-5 shrink-0 text-text-soft-400',
              'transition duration-200 ease-out',
              // focus within
              'group-focus-within/cmd-input:text-primary-base',
            )}
          />
          <CommandMenu.Input placeholder='Search HR tools or press...' />
          <Kbd.Root>⌘K</Kbd.Root>
        </div>

        {/* Recent Categories */}
        <div className='flex flex-col gap-2 px-5 py-4'>
          <div className='text-label-sm text-text-soft-400'>Recent</div>
          <div className='flex flex-wrap gap-2'>
            {categories.map((category) => (
              <Button.Root
                key={category}
                variant='neutral'
                mode='lighter'
                size='xxsmall'
              >
                {category}
              </Button.Root>
            ))}
          </div>
        </div>

        <CommandMenu.List>
          {/* Tools & Apps ve Employees */}
          <div className='flex flex-col md:h-[164px] md:flex-row'>
            <div className='flex-1 p-2.5'>
              <div className='flex items-center justify-between px-2.5 py-2'>
                <span className='text-label-sm text-text-soft-400'>
                  Tools & Apps
                </span>
                <RiArrowRightUpLine className='size-4 text-text-soft-400' />
              </div>
              <CommandMenu.Group className='p-0'>
                {tools.map((tool) => (
                  <CommandMenu.Item
                    key={tool.title}
                    value={tool.title}
                    role='option'
                    className={cn(
                      'group/cmd-item',
                      'flex items-center justify-between gap-2.5 px-2.5 py-2',
                      'outline-none',
                    )}
                  >
                    <div className='flex items-center gap-2.5'>
                      <Avatar.Root size='20'>
                        <Avatar.Image
                          src={tool.icon}
                          alt={tool.title}
                          className='bg-bg-white-0'
                        />
                      </Avatar.Root>
                      <span className='text-label-sm text-text-sub-600'>
                        {tool.title}
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
                      <RiArrowRightSLine className='size-4 text-text-sub-600' />
                    </CompactButton.Root>
                  </CommandMenu.Item>
                ))}
              </CommandMenu.Group>
            </div>

            <VerticalDivider />
            <HorizontalDivider />

            <div className='flex-1 p-2.5'>
              <div className='flex items-center justify-between px-2.5 py-2'>
                <span className='text-label-sm text-text-soft-400'>
                  Employees
                </span>
                <RiArrowRightUpLine className='size-4 text-text-soft-400' />
              </div>
              <CommandMenu.Group className='p-0'>
                {employees.map((employee) => (
                  <CommandMenu.Item
                    key={employee.name}
                    value={employee.name}
                    role='option'
                    className={cn(
                      'group/cmd-item',
                      'flex items-center justify-between gap-2.5 px-2.5 py-2',
                      'outline-none',
                    )}
                  >
                    <div className='flex items-center gap-2.5'>
                      <Avatar.Root size='20'>
                        <Avatar.Image src={employee.avatar} />
                        <Avatar.Indicator>
                          <Avatar.Status status='online' />
                        </Avatar.Indicator>
                      </Avatar.Root>
                      <span className='text-label-sm text-text-sub-600'>
                        {employee.name}
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
                      <RiArrowRightSLine className='size-4 text-text-sub-600' />
                    </CompactButton.Root>
                  </CommandMenu.Item>
                ))}
              </CommandMenu.Group>
            </div>
          </div>

          <div className='flex flex-col md:h-[164px] md:flex-row'>
            <div className='flex-1 p-2.5'>
              <div className='flex items-center justify-between px-2.5 py-2'>
                <span className='text-label-sm text-text-soft-400'>Teams</span>
                <RiArrowRightUpLine className='size-4 text-text-soft-400' />
              </div>
              <CommandMenu.Group className='p-0'>
                {teams.map((team) => (
                  <CommandMenu.Item
                    key={team.name}
                    value={team.name}
                    role='option'
                    className={cn(
                      'group/cmd-item',
                      'flex items-center justify-between gap-2.5 px-2.5 py-2',
                      'outline-none',
                    )}
                  >
                    <div className='flex items-center gap-2.5'>
                      <Avatar.Root size='20'>
                        <Avatar.Image src={team.icon} />
                      </Avatar.Root>
                      <span className='text-label-sm text-text-sub-600'>
                        {team.name}
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
                      <RiArrowRightSLine className='size-4 text-text-sub-600' />
                    </CompactButton.Root>
                  </CommandMenu.Item>
                ))}
              </CommandMenu.Group>
            </div>

            <VerticalDivider />
            <HorizontalDivider />

            <div className='flex-1 p-2.5'>
              <div className='flex items-center justify-between px-2.5 py-2'>
                <span className='text-label-sm text-text-soft-400'>
                  Locations
                </span>
                <RiArrowRightUpLine className='size-4 text-text-soft-400' />
              </div>
              <CommandMenu.Group className='p-0'>
                {locations.map((location) => (
                  <CommandMenu.Item
                    key={location.country}
                    value={location.country}
                    role='option'
                    className={cn(
                      'group/cmd-item',
                      'flex items-center justify-between gap-2.5 px-2.5 py-2',
                      'outline-none',
                    )}
                  >
                    <div className='flex items-center gap-2.5'>
                      <Avatar.Root size='20'>
                        <Avatar.Image
                          src={location.flag}
                          alt={`${location.country} flag`}
                          className='bg-bg-white-0'
                        />
                      </Avatar.Root>
                      <span className='text-label-sm text-text-sub-600'>
                        {location.country}
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
                      <RiArrowRightSLine className='size-4 text-text-sub-600' />
                    </CompactButton.Root>
                  </CommandMenu.Item>
                ))}
              </CommandMenu.Group>
            </div>
          </div>
        </CommandMenu.List>

        {/* Footer */}
        <CommandMenu.Footer className='border-t border-stroke-soft-200 px-5 py-4'>
          <div className='hidden gap-3 md:flex'>
            <div className='flex items-center gap-2'>
              <div className='flex gap-2'>
                <CommandMenu.FooterKeyBox className='ring-0'>
                  <RiArrowUpLine className='size-4 text-text-soft-400' />
                </CommandMenu.FooterKeyBox>
                <CommandMenu.FooterKeyBox className='ring-0'>
                  <RiArrowDownLine className='size-4 text-text-soft-400' />
                </CommandMenu.FooterKeyBox>
              </div>
              <span className='text-label-sm text-text-soft-400'>Navigate</span>
            </div>
            <div className='flex items-center gap-2'>
              <CommandMenu.FooterKeyBox className='ring-0'>
                <RiCornerDownLeftLine className='size-4 text-text-soft-400' />
              </CommandMenu.FooterKeyBox>
              <span className='text-label-sm text-text-soft-400'>Select</span>
            </div>
          </div>

          <div className='flex w-full items-center gap-1.5 text-right md:w-auto'>
            <span className='text-label-sm text-text-soft-400'>
              Any problem?
            </span>
            <LinkButton.Root size='small' variant='gray' underline>
              Contact
            </LinkButton.Root>
          </div>
        </CommandMenu.Footer>
      </CommandMenu.Dialog>
    </>
  );
}
