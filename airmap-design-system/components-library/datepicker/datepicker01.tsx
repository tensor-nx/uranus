'use client';

import * as React from 'react';
import { format, isSameDay, subDays, subMonths } from 'date-fns';
import type { DateRange } from 'react-day-picker';

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
      from: new Date(new Date().setFullYear(new Date().getFullYear(), 0, 1)),
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
        'w-[200px] space-y-2 px-4 py-5 sm:border-r sm:border-stroke-soft-200',
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
          'h-9 w-full rounded-lg px-3 text-left text-label-sm text-text-sub-600',
          'transition duration-200 ease-out',
          // hover
          'hover:bg-bg-weak-50',
        ],
        {
          'bg-bg-weak-50 text-text-strong-950': isActive,
        },
        className,
      )}
      {...rest}
    />
  );
});
PresetItem.displayName = 'PresetItem';

type DatepickerRangeProps = {
  value: DateRange | undefined;
  defaultValue?: DateRange | undefined;
  onChange?: (date: DateRange | undefined) => void;
  presets?: {
    label: string;
    dateRange: DateRange;
  }[];
};

function DatepickerRange({
  value,
  defaultValue,
  onChange,
  presets,
}: DatepickerRangeProps) {
  const [range, setRange] = React.useState<DateRange | undefined>(
    value ?? defaultValue ?? undefined,
  );
  const [month, setMonth] = React.useState<Date | undefined>(range?.from);

  React.useEffect(() => {
    setRange(value ?? defaultValue ?? undefined);
  }, [value, defaultValue]);

  React.useEffect(() => {
    if (range) {
      setMonth(range.from);
      onChange?.(range);
    }
  }, [range]);

  const areDatesEqual = (
    date1: DateRange | undefined,
    date2: DateRange | undefined,
  ) => {
    return (
      date1?.from &&
      date2?.from &&
      date1?.to &&
      date2?.to &&
      isSameDay(date1.from, date2.from) &&
      isSameDay(date1.to, date2.to)
    );
  };

  return (
    <div className='m-4 inline-flex w-fit flex-col overflow-hidden rounded-20 bg-bg-white-0 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200 sm:w-[632px]'>
      <div className='flex h-full flex-col md:flex-row'>
        {presets && (
          <PresetsContainer className='w-full border-b md:w-[200px] md:border-b-0 md:border-r'>
            <div className='flex flex-row gap-2 overflow-x-auto md:flex-col md:overflow-x-visible'>
              {presets.map((preset) => (
                <PresetItem
                  key={preset.label}
                  onClick={() => setRange(preset.dateRange)}
                  isActive={areDatesEqual(range, preset.dateRange)}
                  className='whitespace-nowrap md:whitespace-normal'
                >
                  {preset.label}
                </PresetItem>
              ))}
            </div>
          </PresetsContainer>
        )}
        <div className='min-w-0 flex-1'>
          <div className='flex w-full flex-col'>
            <DatepickerPrimivites.Calendar
              mode='range'
              month={month}
              onMonthChange={setMonth}
              selected={range}
              onSelect={setRange}
              numberOfMonths={1}
              initialFocus
              showOutsideDays={false}
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
            />
            <div className='flex items-center justify-between gap-4 border-t border-stroke-soft-200 p-4 pl-6'>
              <div className='text-paragraph-sm text-text-sub-600'>
                Range:{' '}
                <span className='text-label-sm text-text-strong-950'>
                  {range?.from ? (
                    <>
                      {format(range.from, 'LLL dd, y')}
                      {range.to && <> - {format(range.to, 'LLL dd, y')}</>}
                    </>
                  ) : (
                    <span>Select a range</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlockDatepicker() {
  const [range, setRange] = React.useState<DateRange | undefined>(undefined);

  return (
    <DatepickerRange value={range} onChange={setRange} presets={presets} />
  );
}
