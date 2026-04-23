'use client';

import * as React from 'react';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCalendarCheckLine,
  RiCalendarLine,
  RiCloseLine,
  RiForbidLine,
  RiSunLine,
  RiTimeLine,
} from '@remixicon/react';
import { format, isSameDay } from 'date-fns';
import type { DateRange } from 'react-day-picker';

import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as DatepickerPrimivites from '@/components/ui/datepicker';
import * as Popover from '@/components/ui/popover';
import { cn } from '@/utils/cn';
const presets = [
  {
    icon: RiSunLine,
    iconColor: 'text-away-base',
    label: 'Tomorrow',
    dateRange: {
      from: new Date(new Date().setDate(new Date().getDate() + 1)),
      to: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  },
  {
    icon: RiCalendarLine,
    iconColor: 'text-success-base',
    label: 'Later this week',
    dateRange: {
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 7)),
    },
  },
  {
    icon: RiCalendarCheckLine,
    iconColor: 'text-feature-base',
    label: 'Next week',
    dateRange: {
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 14)),
    },
  },
  {
    icon: RiForbidLine,
    iconColor: 'text-error-base',
    label: 'No date',
    dateRange: {
      from: new Date(),
      to: new Date(),
    },
  },
];

function PresetItem({
  className,
  isActive,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { isActive?: boolean }) {
  return (
    <button
      type='button'
      className={cn(
        'text-sm flex w-full items-center justify-between px-4 py-2 hover:bg-bg-weak-50',
        {
          'bg-bg-weak-50': isActive,
        },
        className,
      )}
      {...rest}
    />
  );
}

type DatepickerRangeProps = {
  value: DateRange | undefined;
  defaultValue?: DateRange | undefined;
  onChange?: (date: DateRange | undefined) => void;
  presets?: {
    label: string;
    dateRange: DateRange;
    icon: React.ElementType;
    iconColor: string;
  }[];
};

function DatepickerRange({
  value,
  defaultValue,
  onChange,
  presets,
}: DatepickerRangeProps) {
  const [open, setOpen] = React.useState(true);
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
    }
  }, [range]);

  React.useEffect(() => {
    if (!open) {
      setMonth(range?.from);
    }
  }, [open]);

  const handleCancel = () => {
    setRange(value ?? defaultValue ?? undefined);
  };

  const handleApply = () => {
    setRange(range);
    onChange?.(range);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      handleCancel();
    }
    setOpen(isOpen);
  };

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
    <Popover.Root open={open} onOpenChange={handleOpenChange}>
      <Popover.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke'>
          {range?.from ? format(range.from, 'dd MMMM, HH:mm') : 'Select a date'}
        </Button.Root>
      </Popover.Trigger>
      <Popover.Content
        unstyled
        className='w-[min(368px,calc(100vw-32px))] min-w-[280px] rounded-20 bg-bg-white-0 p-0 shadow-custom-sm'
      >
        <div className='flex w-full flex-col'>
          {/* Header */}
          <div className='flex items-center justify-between gap-2 border-b border-stroke-soft-200 px-4 py-3'>
            <div className='flex items-center gap-2'>
              <RiTimeLine className='size-5 shrink-0 text-text-soft-400' />
              <div className='text-label-sm text-text-sub-600'>
                {range?.from
                  ? format(range.from, 'dd MMMM, HH:mm a')
                  : 'Select a time'}
              </div>
            </div>
            <CompactButton.Root variant='ghost' onClick={() => setOpen(false)}>
              <CompactButton.Icon
                as={RiCloseLine}
                className='text-text-sub-600'
              />
            </CompactButton.Root>
          </div>

          {/* Presets */}
          <div className='flex flex-col gap-0.5 p-2'>
            {presets?.map((preset) => (
              <PresetItem
                key={preset.label}
                onClick={() => setRange(preset.dateRange)}
                isActive={areDatesEqual(range, preset.dateRange)}
                className='flex justify-between gap-2.5 rounded-lg px-3 py-2'
              >
                <div className='flex items-center gap-2.5'>
                  <preset.icon className={cn('size-5', preset.iconColor)} />
                  <span className='text-label-sm text-text-sub-600'>
                    {preset.label}
                  </span>
                </div>
                <span className='text-label-sm text-text-soft-400'>
                  {preset.label === 'Next week'
                    ? format(preset.dateRange.from!, 'EEE, dd MMMM')
                    : format(preset.dateRange.from!, 'EEEE')}
                </span>
              </PresetItem>
            ))}
          </div>

          {/* Calendar */}
          <div className='w-full border-t border-stroke-soft-200'>
            <DatepickerPrimivites.Calendar
              mode='single'
              month={month}
              onMonthChange={setMonth}
              selected={range?.from}
              onSelect={(date) =>
                setRange(date ? { from: date, to: date } : undefined)
              }
              numberOfMonths={1}
              initialFocus
              showOutsideDays={true}
              weekStartsOn={1}
              classNames={{
                caption_start: 'p-0 w-full',
                caption_end: 'p-0 w-full',
                nav_button_previous: 'top-1/2 -translate-y-1/2 left-3',
                months: 'flex divide-x divide-stroke-soft-200 w-full',
                nav_button_next: 'top-1/2 -translate-y-1/2 right-3',
                caption:
                  'flex justify-center items-center relative h-9 px-3 py-2 border-b border-stroke-soft-200 text-center w-full',
                table:
                  'w-full border-collapse flex justify-center items-center flex-col p-3 !mt-0',
                row: 'grid grid-flow-col auto-cols-fr w-full mt-2 gap-2',
                cell: cn('group/cell relative h-10 w-full select-none p-0'),
                day: cn(
                  'flex h-10 w-full items-center justify-center rounded-lg text-center text-label-sm text-text-sub-600 outline-none transition duration-200 ease-out hover:bg-bg-weak-50 hover:text-text-strong-950 focus:outline-none focus-visible:bg-bg-weak-50 focus-visible:text-text-strong-950 aria-[selected]:bg-primary-base aria-[selected]:text-static-white',
                ),
                day_today:
                  'after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-1 after:rounded-full after:bg-primary-base',
                tbody: 'w-full',
                head: 'w-full',
                head_cell:
                  'text-text-soft-400 text-label-sm uppercase size-10 flex items-center justify-center text-center select-none w-full',
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

          {/* Actions */}
          <div className='flex justify-end gap-4 border-t border-stroke-soft-200 p-4'>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='small'
              onClick={handleCancel}
              className='flex-1 rounded-10'
            >
              Cancel
            </Button.Root>
            <Button.Root
              variant='primary'
              mode='filled'
              size='small'
              onClick={handleApply}
              className='flex-1 rounded-10'
            >
              Apply
            </Button.Root>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

export default function BlockDatepicker() {
  const [range, setRange] = React.useState<DateRange | undefined>(undefined);

  return (
    <DatepickerRange value={range} onChange={setRange} presets={presets} />
  );
}
