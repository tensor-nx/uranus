'use client';

import * as React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import { format, subDays, subMonths } from 'date-fns';
import { type DateRange } from 'react-day-picker';

import * as Button from '@/components/ui/button';
import * as DatepickerPrimivites from '@/components/ui/datepicker';
import { cn } from '@/utils/cn';
const presets = [
  {
    label: 'Today',
    dateRange: {
      from: new Date(),
      to: new Date(),
    },
  },
  {
    label: 'Last 7 days',
    dateRange: {
      from: subDays(new Date(), 7),
      to: new Date(),
    },
  },
  {
    label: 'Last 30 days',
    dateRange: {
      from: subDays(new Date(), 30),
      to: new Date(),
    },
  },
  {
    label: 'Last 3 months',
    dateRange: {
      from: subMonths(new Date(), 3),
      to: new Date(),
    },
  },
  {
    label: 'Last 12 months',
    dateRange: {
      from: subMonths(new Date(), 12),
      to: new Date(),
    },
  },
  {
    label: 'Month to date',
    dateRange: {
      from: new Date(new Date().setDate(1)),
      to: new Date(),
    },
  },
  {
    label: 'Year to date',
    dateRange: {
      from: new Date(new Date().setMonth(0, 1)),
      to: new Date(),
    },
  },
  {
    label: 'All time',
    dateRange: {
      from: new Date(2020, 0, 1), // Varsayılan başlangıç tarihi olarak 2020 yılını kullandım
      to: new Date(),
    },
  },
];

function PresetsContainer({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'w-[200px] space-y-2 border-r border-stroke-soft-200 px-4 py-5',
        className,
      )}
      {...rest}
    />
  );
}

const PresetItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isActive?: boolean;
  }
>(({ className, isActive, ...rest }, forwardedRef) => {
  return (
    <button
      ref={forwardedRef}
      type='button'
      className={cn(
        [
          // base
          'h-9 w-full rounded-lg px-3 text-left text-label-sm',
          'transition duration-200 ease-out',
          // text color - moved out of base
          isActive ? 'text-text-strong-950' : 'text-text-sub-600',
          // hover
          'hover:bg-bg-weak-50',
        ],
        {
          'bg-bg-weak-50': isActive,
        },
        className,
      )}
      {...rest}
    />
  );
});
PresetItem.displayName = 'PresetItem';

type DateRangePickerProps = {
  beforeDate: Date | undefined;
  afterDate: Date | undefined;
  onBeforeChange: (date: Date | undefined) => void;
  onAfterChange: (date: Date | undefined) => void;
  sliderValue: number;
  onSliderChange: (value: number) => void;
};

function DateRangePicker({
  beforeDate,
  afterDate,
  onBeforeChange,
  onAfterChange,
}: DateRangePickerProps) {
  const [localBeforeDate, setLocalBeforeDate] = React.useState(beforeDate);
  const [localAfterDate, setLocalAfterDate] = React.useState(afterDate);
  const [range, setRange] = React.useState<DateRange | undefined>(
    localAfterDate && localBeforeDate
      ? { from: localAfterDate, to: localBeforeDate }
      : undefined,
  );

  const handleRangeSelect = (selectedRange: DateRange | undefined) => {
    if (!selectedRange) return;
    setLocalAfterDate(selectedRange.from);
    setLocalBeforeDate(selectedRange.to);
    setRange(selectedRange);
  };

  const handleApply = () => {
    onBeforeChange(localBeforeDate);
    onAfterChange(localAfterDate);
  };

  const handleCancel = () => {
    setLocalBeforeDate(beforeDate);
    setLocalAfterDate(afterDate);
    setRange(
      afterDate && beforeDate ? { from: afterDate, to: beforeDate } : undefined,
    );
  };

  return (
    <div className='w-[min(936px,calc(100vw-32px))] rounded-20 bg-bg-white-0 shadow-custom-sm'>
      <div className='flex h-full flex-col md:flex-row'>
        {/* Presets */}
        <PresetsContainer className='w-full border-b md:w-[200px] md:border-b-0 md:border-r'>
          <div className='flex flex-row gap-2 overflow-x-auto md:flex-col md:overflow-x-visible'>
            {presets.map((preset) => (
              <PresetItem
                key={preset.label}
                onClick={() => {
                  setLocalAfterDate(preset.dateRange.from);
                  setLocalBeforeDate(preset.dateRange.to);
                  setRange(preset.dateRange);
                }}
                isActive={
                  localAfterDate?.getTime() ===
                    preset.dateRange.from.getTime() &&
                  localBeforeDate?.getTime() ===
                    preset.dateRange.to.getTime() &&
                  range?.from === preset.dateRange.from &&
                  range?.to === preset.dateRange.to
                }
                className='whitespace-nowrap md:whitespace-normal'
              >
                {preset.label}
              </PresetItem>
            ))}
          </div>
        </PresetsContainer>

        {/* Date Pickerlar */}
        <div className='flex-1'>
          <div className='flex w-full flex-col'>
            {/* Date Pickerlar ve Range Display */}
            <div className='flex w-full flex-col md:flex-row'>
              <div className='flex w-full flex-col md:flex-row'>
                <div className='flex-1'>
                  <DatepickerPrimivites.Calendar
                    mode='range'
                    selected={range}
                    onSelect={handleRangeSelect}
                    defaultMonth={localAfterDate}
                    numberOfMonths={1}
                    initialFocus
                    showOutsideDays={false}
                    weekStartsOn={1}
                    classNames={{
                      months: 'flex w-full',
                      caption_start: 'p-5 w-full',
                      caption_end: 'p-5 w-full',
                      table:
                        'w-full border-collapse flex justify-center items-center flex-col !mt-0',
                      row: 'grid grid-flow-col auto-cols-fr w-full mt-2 gap-2',
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
                      day: cn(
                        'flex h-10 w-full items-center justify-center rounded-lg text-center text-label-sm text-text-sub-600 outline-none transition duration-200 ease-out hover:bg-bg-weak-50 hover:text-text-strong-950 focus:outline-none focus-visible:bg-bg-weak-50 focus-visible:text-text-strong-950',
                        'aria-[selected]:bg-primary-base aria-[selected]:text-static-white',
                        'day-range-middle:text-primary-base',
                      ),
                      head_cell:
                        'text-text-soft-400 text-label-sm uppercase size-10 flex items-center justify-center text-center select-none w-full mt-2',
                      tbody: 'w-full',
                      head: 'w-full',
                    }}
                    components={{
                      IconLeft: () => (
                        <RiArrowLeftSLine className='size-5 text-text-sub-600' />
                      ),
                      IconRight: () => (
                        <RiArrowRightSLine className='size-5 text-text-sub-600' />
                      ),
                    }}
                  />
                </div>
                <div className='flex-1 border-stroke-soft-200 md:border-l'>
                  <DatepickerPrimivites.Calendar
                    mode='range'
                    selected={range}
                    onSelect={handleRangeSelect}
                    defaultMonth={localBeforeDate}
                    numberOfMonths={1}
                    initialFocus
                    showOutsideDays={false}
                    weekStartsOn={1}
                    classNames={{
                      months: 'flex w-full',
                      caption_start: 'p-5 w-full',
                      caption_end: 'p-5 w-full',
                      table:
                        'w-full border-collapse flex justify-center items-center flex-col !mt-0',
                      row: 'grid grid-flow-col auto-cols-fr w-full mt-2 gap-2',
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
                      day: cn(
                        'flex h-10 w-full items-center justify-center rounded-lg text-center text-label-sm text-text-sub-600 outline-none transition duration-200 ease-out hover:bg-bg-weak-50 hover:text-text-strong-950 focus:outline-none focus-visible:bg-bg-weak-50 focus-visible:text-text-strong-950',
                        'aria-[selected]:bg-primary-base aria-[selected]:text-static-white',
                        'day-range-middle:text-primary-base',
                      ),
                      head_cell:
                        'text-text-soft-400 text-label-sm uppercase size-10 flex items-center justify-center text-center select-none w-full mt-2',
                      tbody: 'w-full',
                      head: 'w-full',
                    }}
                    components={{
                      IconLeft: () => (
                        <RiArrowLeftSLine className='size-5 text-text-sub-600' />
                      ),
                      IconRight: () => (
                        <RiArrowRightSLine className='size-5 text-text-sub-600' />
                      ),
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className='flex flex-col items-center justify-between gap-3 border-t border-stroke-soft-200 p-4 md:flex-row'>
              <div>
                <span className='text-label-sm text-text-soft-400'>Range:</span>{' '}
                <span className='text-label-sm text-text-sub-600'>
                  {range?.from && range?.to
                    ? `${format(range.from, 'MMMM dd, yyyy')} - ${format(
                        range.to,
                        'MMMM dd, yyyy',
                      )}`
                    : 'Select a range'}
                </span>
              </div>
              <div className='flex gap-4'>
                <Button.Root
                  variant='neutral'
                  mode='stroke'
                  size='small'
                  onClick={handleCancel}
                >
                  Cancel
                </Button.Root>
                <Button.Root
                  variant='primary'
                  mode='filled'
                  size='small'
                  onClick={handleApply}
                >
                  Apply
                </Button.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlockDatepicker() {
  const [beforeDate, setBeforeDate] = React.useState<Date | undefined>(
    undefined,
  );
  const [afterDate, setAfterDate] = React.useState<Date | undefined>(undefined);
  const [sliderValue, setSliderValue] = React.useState(50);

  return (
    <DateRangePicker
      beforeDate={beforeDate}
      afterDate={afterDate}
      onBeforeChange={setBeforeDate}
      onAfterChange={setAfterDate}
      sliderValue={sliderValue}
      onSliderChange={setSliderValue}
    />
  );
}
