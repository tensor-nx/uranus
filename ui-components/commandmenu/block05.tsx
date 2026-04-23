'use client';

import * as React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import {
  RiArrowRightSLine,
  RiBookletLine,
  RiDashboardLine,
  RiFocus3Line,
  RiFocusLine,
  RiGiftLine,
  RiGitForkLine,
  RiHandHeartLine,
  RiLayoutGridLine,
  RiLineChartLine,
  RiPieChartLine,
  RiSearch2Line,
  RiStarSmileLine,
} from '@remixicon/react';

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
  const [open, setOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('Dashboards');

  const categories = [
    {
      title: 'Benefits & Compensation',
      description: 'Employee benefits, salary, and rewards',
      count: '18',
      icon: <RiGiftLine className='size-5' />,
    },
    {
      title: 'Employee Development',
      description: 'Career growth and skill development',
      count: '24',
      icon: <RiPieChartLine className='size-5' />,
    },
    {
      title: 'Employee Relations',
      description: 'Workplace relationships and culture',
      count: '12',
      icon: <RiHandHeartLine className='size-5' />,
    },
    {
      title: 'Onboarding',
      description: 'New employee integration process',
      count: '36',
      icon: <RiFocus3Line className='size-5' />,
    },
    {
      title: 'Performance',
      description: 'Employee evaluation and metrics',
      count: '48',
      icon: <RiStarSmileLine className='size-5' />,
    },
    {
      title: 'Recruitment',
      description: 'Hiring and talent acquisition',
      count: '22',
      icon: <RiFocusLine className='size-5' />,
    },
    {
      title: 'Training',
      description: 'Learning and development programs',
      count: '16',
      icon: <RiBookletLine className='size-5' />,
    },
    {
      title: 'Workflows',
      description: 'Automated workflows and processes',
      count: '16',
      icon: <RiGitForkLine className='size-5' />,
    },
    {
      title: 'Analytics',
      description: 'Data analysis and reporting',
      count: '16',
      icon: <RiLineChartLine className='size-5' />,
    },
  ];

  const sidebarItems = [
    {
      title: 'Analytics',
      icon: <RiLineChartLine className='size-5' />,
    },
    {
      title: 'Categories',
      icon: <RiLayoutGridLine className='size-5' />,
    },
    {
      title: 'Dashboards',
      icon: <RiDashboardLine className='size-5' />,
    },
    {
      title: 'Workflows',
      icon: <RiGitForkLine className='size-5' />,
    },
  ];

  function IconInfoCustom(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        width={20}
        height={20}
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25ZM11.1158 13.2086L11.2156 12.8006C11.164 12.8249 11.0807 12.8526 10.9665 12.8841C10.852 12.9157 10.7489 12.9318 10.6583 12.9318C10.4654 12.9318 10.3295 12.9001 10.2507 12.8366C10.1724 12.773 10.1333 12.6534 10.1333 12.4783C10.1333 12.4089 10.1451 12.3054 10.1697 12.17C10.1936 12.0337 10.2211 11.9126 10.2516 11.8067L10.6242 10.4876C10.6607 10.3665 10.6857 10.2334 10.6992 10.0882C10.7129 9.94325 10.7193 9.84185 10.7193 9.78429C10.7193 9.50614 10.6218 9.28041 10.4268 9.10629C10.2317 8.93229 9.95393 8.84529 9.59396 8.84529C9.39365 8.84529 9.18188 8.88088 8.95776 8.95201C8.73363 9.02294 8.49933 9.1084 8.25421 9.2082L8.15415 9.6165C8.22719 9.58949 8.31419 9.56043 8.41598 9.53034C8.51732 9.50038 8.61674 9.48489 8.71347 9.48489C8.91096 9.48489 9.04399 9.51856 9.1137 9.58488C9.18342 9.65139 9.21844 9.7697 9.21844 9.93883C9.21844 10.0324 9.20736 10.1363 9.18438 10.2492C9.16172 10.3628 9.13342 10.483 9.10013 10.6098L8.72595 11.9342C8.69266 12.0734 8.66834 12.1979 8.65304 12.3084C8.63786 12.4189 8.63057 12.5272 8.63057 12.6326C8.63057 12.9048 8.73114 13.1292 8.93222 13.3063C9.13329 13.4826 9.41523 13.5714 9.77769 13.5714C10.0137 13.5714 10.2209 13.5406 10.3992 13.4785C10.5773 13.4167 10.8164 13.3268 11.1158 13.2086ZM11.0495 7.8502C11.2235 7.68882 11.3101 7.49254 11.3101 7.26272C11.3101 7.03341 11.2236 6.83675 11.0495 6.67331C10.8758 6.51032 10.6666 6.42857 10.4219 6.42857C10.1765 6.42857 9.96635 6.51013 9.79107 6.67331C9.61579 6.83675 9.52796 7.03334 9.52796 7.26272C9.52796 7.49254 9.61579 7.68875 9.79107 7.8502C9.96667 8.01217 10.1764 8.09321 10.4219 8.09321C10.6666 8.09321 10.8758 8.01217 11.0495 7.8502Z'
          fill='#D1D1D1'
        />
      </svg>
    );
  }

  return (
    <>
      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() => setOpen(true)}
      >
        Open Command Menu
      </Button.Root>

      <CommandMenu.Dialog open={open} onOpenChange={setOpen}>
        <div className='rounded-12 flex flex-col overflow-hidden bg-bg-white-0 shadow-custom-md md:flex-row'>
          {/* Sidebar  */}
          <div className='border-b border-stroke-soft-200 md:flex md:min-w-[220px] md:flex-col md:border-b-0 md:border-r'>
            <div className='flex gap-2 overflow-x-auto p-3 md:flex-col'>
              {sidebarItems.map((item) => (
                <div
                  key={item.title}
                  onClick={() => setActiveItem(item.title)}
                  className={cn(
                    'rounded-8 flex shrink-0 cursor-pointer items-center gap-2 rounded-10 p-2 text-left',
                    'transition-all duration-200 ease-out',
                    activeItem === item.title
                      ? 'text-primary-600 bg-bg-weak-50 font-medium'
                      : 'text-text-sub-500 hover:bg-bg-weak-50',
                  )}
                >
                  <span
                    className={cn(
                      'size-5',
                      activeItem === item.title
                        ? 'text-primary-base'
                        : 'text-text-soft-400',
                    )}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={cn(
                      'text-label-sm',
                      activeItem === item.title
                        ? 'text-text-strong-950'
                        : 'text-text-sub-600',
                    )}
                  >
                    {item.title}
                  </span>
                  {activeItem === item.title && (
                    <RiArrowRightSLine className='ml-auto size-[18px] text-text-sub-600' />
                  )}
                </div>
              ))}
            </div>

            <div className='mt-auto hidden p-5 md:block'>
              <button className='flex items-center gap-2 text-text-soft-400'>
                <IconInfoCustom className='size-5 text-text-disabled-300' />
                <span className='hidden text-label-sm text-text-soft-400 md:block'>
                  Search tips
                </span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className='flex w-full min-w-[320px] flex-1 flex-col md:w-[70%]'>
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
              <Kbd.Root className='hidden items-center justify-center text-text-soft-400 md:flex'>
                ⌘K
              </Kbd.Root>
            </div>

            {/* Categories List */}
            <div className='w-full pb-px pr-px'>
              <ScrollArea.Root
                type='auto'
                className='h-[524px] overflow-hidden'
              >
                <ScrollArea.Viewport className='h-full w-full'>
                  <CommandMenu.List className='flex w-full flex-1 flex-col'>
                    <CommandMenu.Group className='flex flex-col p-0'>
                      <div className='flex flex-col gap-2 py-2 pl-2 pr-[30px]'>
                        {categories.map((category) => (
                          <CommandMenu.Item
                            key={category.title}
                            value={category.title}
                            className={cn(
                              'group/cmd-item',
                              'flex w-full items-center gap-3 px-2.5 py-2',
                              'outline-none',
                              'transition-all duration-200 ease-out',
                            )}
                          >
                            <div
                              className={cn(
                                'flex size-9 shrink-0 items-center justify-center rounded-full bg-bg-weak-50 text-text-sub-600',
                                'group-hover/cmd-item:bg-bg-white-0 group-hover/cmd-item:shadow-custom-xs',
                                'group-data-[selected=true]/cmd-item:bg-bg-white-0 group-data-[selected=true]/cmd-item:shadow-custom-xs',
                                'transition-all duration-200 ease-in-out',
                              )}
                            >
                              {category.icon}
                            </div>
                            <div className='flex flex-1 flex-col gap-1'>
                              <div className='flex items-center gap-2'>
                                <span className='text-label-sm text-text-strong-950'>
                                  {category.title}
                                </span>
                                <span className='text-label-sm text-text-soft-400'>
                                  ({category.count})
                                </span>
                              </div>
                              <span className='text-paragraph-xs text-text-sub-600'>
                                {category.description}
                              </span>
                            </div>
                            <CompactButton.Root
                              variant='ghost'
                              size='medium'
                              className={cn(
                                'opacity-0',
                                'group-hover/cmd-item:opacity-100',
                                'group-data-[highlighted=true]/cmd-item:opacity-100',
                                'group-data-[selected=true]/cmd-item:opacity-100',
                                'transition-all duration-200 ease-in-out',
                              )}
                            >
                              <RiArrowRightSLine className='size-5 text-text-sub-600' />
                            </CompactButton.Root>
                          </CommandMenu.Item>
                        ))}
                      </div>
                    </CommandMenu.Group>
                  </CommandMenu.List>
                </ScrollArea.Viewport>
                <ScrollbarVertical />
              </ScrollArea.Root>
            </div>
          </div>
        </div>
      </CommandMenu.Dialog>
    </>
  );
}
