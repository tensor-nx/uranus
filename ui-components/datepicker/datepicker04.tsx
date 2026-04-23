'use client';

import * as React from 'react';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine,
  RiTimeLine,
} from '@remixicon/react';
import { format } from 'date-fns';
import type { DateRange } from 'react-day-picker';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as CompactButton from '@/components/ui/compact-button';
import * as DatepickerPrimivites from '@/components/ui/datepicker';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import { cn } from '@/utils/cn';

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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 16.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm1.116-3.041l.1-.408a1.709 1.709 0 01-.25.083 1.176 1.176 0 01-.308.048c-.193 0-.329-.032-.407-.095-.079-.064-.118-.184-.118-.359a3.514 3.514 0 01.118-.672l.373-1.318c.037-.121.062-.255.075-.4a3.73 3.73 0 00.02-.304.866.866 0 00-.292-.678c-.195-.174-.473-.26-.833-.26-.2 0-.412.035-.636.106-.224.07-.459.156-.704.256l-.1.409c.073-.028.16-.057.262-.087.101-.03.2-.045.297-.045.198 0 .331.034.4.1.07.066.105.185.105.354 0 .093-.01.197-.034.31a6.216 6.216 0 01-.084.36l-.374 1.325c-.033.14-.058.264-.073.374-.015.11-.022.22-.022.325 0 .272.1.496.301.673.201.177.483.265.846.265.236 0 .443-.03.621-.092s.417-.152.717-.27zM11.05 7.85a.772.772 0 00.26-.587.78.78 0 00-.26-.59.885.885 0 00-.628-.244.893.893 0 00-.63.244.778.778 0 00-.264.59c0 .23.088.426.263.587a.897.897 0 00.63.243.888.888 0 00.629-.243z'
        fill='currentColor'
      />
    </svg>
  );
}

function EventCalendar() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 15), // January 15, 2024
    to: new Date(2024, 0, 21), // January 21, 2024
  });
  const [participants, setParticipants] = React.useState<number>(10);
  const [openToAll, setOpenToAll] = React.useState<boolean>(true);

  return (
    <div className='h-fit w-[min(736px,calc(100vw-32px))] min-w-[280px] rounded-20 bg-bg-white-0 p-0 shadow-custom-sm'>
      {/* Header */}
      <div className='flex items-start justify-between px-5 py-4'>
        <div className='flex items-center gap-[14px]'>
          <div className='flex size-11 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
            <RiTimeLine className='size-6 text-text-sub-600' />
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='text-label-md text-text-strong-950'>
              Event Calendar
            </h2>
            <p className='text-paragraph-sm text-text-sub-600'>
              Schedule your team meetings and events easily
            </p>
          </div>
        </div>
        <CompactButton.Root variant='ghost' size='large'>
          <CompactButton.Icon>
            <RiCloseLine className='size-5' />
          </CompactButton.Icon>
        </CompactButton.Root>
      </div>

      <div className='flex w-full flex-col border-t border-stroke-soft-200 sm:flex-row'>
        {/* Calendar */}
        <div className='flex-1'>
          <DatepickerPrimivites.Calendar
            mode='range'
            selected={range}
            onSelect={setRange}
            defaultMonth={new Date(2024, 0)}
            numberOfMonths={1}
            weekStartsOn={1}
            showOutsideDays={false}
            classNames={{
              caption:
                'flex justify-center items-center relative h-9 px-3 py-2 rounded-full text-center w-full bg-bg-weak-50 mb-2',
              tbody: 'w-full',
              head: 'w-full',
              nav_button_previous:
                'top-1/2 -translate-y-1/2 left-1.5 !rounded-full',
              nav_button_next:
                'top-1/2 -translate-y-1/2 right-1.5 !rounded-full',
              day: cn(
                // base
                'flex aspect-square h-full w-full items-center justify-center rounded-full text-center text-label-sm text-text-sub-600 outline-none',
                'transition duration-200 ease-out',
                // hover
                'hover:bg-bg-weak-50 hover:text-text-strong-950',
                // selected
                'aria-[selected]:bg-primary-base aria-[selected]:text-static-white',
                // focus visible
                'focus:outline-none focus-visible:bg-bg-weak-50 focus-visible:text-text-strong-950',
              ),
              table:
                'w-full border-collapse flex justify-center items-center flex-col !mt-0',
              row: 'grid grid-flow-col auto-cols-fr w-full mt-2 gap-2',
              head_cell:
                'text-text-soft-400 text-label-sm uppercase size-10 flex items-center justify-center text-center select-none w-full',
              cell: cn(
                // base
                'group/cell relative h-10 w-full select-none p-0',
                // range
                '[&:has(.day-range-middle)]:bg-primary-alpha-10',
                // first range el
                '[&:has(.day-range-start):not(:has(.day-range-end))]:rounded-l-full [&:has(.day-range-start):not(:has(.day-range-end))]:bg-primary-alpha-10 [&:has(.day-range-start):not(:has(.day-range-end))]:before:block',
                // last range el
                '[&:has(.day-range-end):not(:has(.day-range-start))]:rounded-r-full [&:has(.day-range-end):not(:has(.day-range-start))]:bg-primary-alpha-10',
                // hide before if next sibling not selected
                '[&:not(:has(+_*_[type=button]))]:before:hidden',
                // merged bg
                'before:absolute before:inset-y-0 before:-right-2 before:hidden before:w-2 before:bg-primary-alpha-10',
                'last:[&:has(.day-range-middle)]:before:hidden',
                // middle
                '[&:has(.day-range-middle)]:before:block',
                // end specific
                '[&:has(.day-range-end)]:before:left-0 [&:has(.day-range-end)]:before:right-auto',
              ),
            }}
            components={{
              IconLeft: () => (
                <RiArrowLeftSLine className='size-5 !rounded-full' />
              ),
              IconRight: () => (
                <RiArrowRightSLine className='size-5 !rounded-full' />
              ),
            }}
          />
        </div>

        {/* Form Fields */}
        <div className='max-w-[368px] flex-1 border-t border-stroke-soft-200 sm:border-l sm:border-t-0'>
          {/* Date Inputs */}
          <div className='flex flex-col gap-3 p-5'>
            <div className='flex flex-col gap-1.5'>
              <Label.Root htmlFor='start-date'>
                Start date <Label.Asterisk />
              </Label.Root>
              <div>
                <Input.Root className='w-full'>
                  <Input.Wrapper>
                    <Input.Input
                      id='start-date'
                      type='text'
                      value={
                        range?.from ? format(range.from, 'yyyy-MM-dd') : ''
                      }
                      readOnly
                      className='text-label-sm text-text-sub-600'
                    />
                    <Input.Input
                      type='time'
                      defaultValue='09:00'
                      className='border-l border-stroke-soft-200 pl-4 text-label-sm text-text-sub-600 [&::-webkit-calendar-picker-indicator]:hidden'
                    />
                  </Input.Wrapper>
                </Input.Root>
              </div>
            </div>
            <div className='flex flex-col gap-1.5'>
              <Label.Root htmlFor='end-date'>
                End date <Label.Asterisk />
              </Label.Root>
              <div className='flex'>
                <Input.Root className='w-full'>
                  <Input.Wrapper>
                    <Input.Input
                      id='end-date'
                      type='text'
                      value={range?.to ? format(range.to, 'yyyy-MM-dd') : ''}
                      readOnly
                      className='text-label-sm text-text-sub-600'
                    />
                    <Input.Input
                      type='time'
                      defaultValue='09:00'
                      className='border-l border-stroke-soft-200 pl-4 text-label-sm text-text-sub-600 [&::-webkit-calendar-picker-indicator]:hidden'
                    />
                  </Input.Wrapper>
                </Input.Root>
              </div>
            </div>
          </div>

          {/* Maximum participants */}
          <div className='flex flex-col gap-4 border-t border-stroke-soft-200 p-5'>
            <div className='flex flex-col gap-1.5'>
              <Label.Root htmlFor='participants-inp'>
                Maximum participants
                <IconInfoCustom className='size-5 text-text-disabled-300' />
              </Label.Root>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Input
                    id='participants-inp'
                    type='number'
                    value={participants}
                    onChange={(e) => setParticipants(Number(e.target.value))}
                    required
                  />
                </Input.Wrapper>
              </Input.Root>
            </div>

            {/* Checkbox */}
            <div className='flex items-center gap-2'>
              <Checkbox.Root
                id='open-to-all'
                checked={openToAll}
                onCheckedChange={(checked) => setOpenToAll(checked as boolean)}
              />
              <Label.Root className='text-paragraph-sm' htmlFor='open-to-all'>
                Open to all departments
              </Label.Root>
            </div>
          </div>
        </div>
      </div>

      {/* Range Display and Actions */}
      <div className='flex flex-col items-center justify-between gap-4 border-t border-stroke-soft-200 p-4 pl-6 sm:flex-row'>
        <div>
          <span className='text-label-sm text-text-soft-400'>Range:</span>{' '}
          <span className='text-paragraph-sm text-text-sub-600'>
            {range?.from && format(range.from, 'MMMM dd, yyyy')} -{' '}
            {range?.to && format(range.to, 'MMMM dd, yyyy')}
          </span>
        </div>
        <div className='flex gap-4'>
          <Button.Root variant='neutral' mode='stroke' size='small'>
            Cancel
          </Button.Root>
          <Button.Root variant='primary' mode='filled' size='small'>
            Schedule meetings
          </Button.Root>
        </div>
      </div>
    </div>
  );
}

export default EventCalendar;
