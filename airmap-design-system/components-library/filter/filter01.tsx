'use client';

import * as React from 'react';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiBankLine,
  RiCalendarLine,
  RiMoneyDollarCircleLine,
  RiPriceTag3Line,
  RiUser6Line,
} from '@remixicon/react';
import { Label as ReactAriaLabel } from 'react-aria-components';
import { type DateRange } from 'react-day-picker';

import * as Button from '@/components/ui/button';
import { inputVariants } from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import { cn } from '@/utils/cn';
const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const FILTER_TYPES = [
  { icon: <RiCalendarLine />, label: 'Date' },
  { icon: <RiUser6Line />, label: 'Customers' },
  { icon: <RiMoneyDollarCircleLine />, label: 'Amount' },
  { icon: <RiPriceTag3Line />, label: 'Categories' },
  { icon: <RiBankLine />, label: 'Accounts' },
];

type FilterItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

type MonthButtonProps = {
  month: string;
  monthIndex: number;
  year: number;
  onClick: (index: number) => void;
  className: string;
};

type DateSelectorProps = {
  label: string;
  selectedDate?: Date;
  year: number;
  onYearChange: (increment: number) => void;
  onMonthClick: (monthIndex: number) => void;
  getMonthClassName: (year: number, monthIndex: number) => string;
};

type DividerProps = {
  className?: string;
};

const FilterItem = ({ icon, label, active, onClick }: FilterItemProps) => (
  <button
    className={cn(
      'flex w-full items-center gap-2 rounded-lg p-2 text-left',
      'group relative transition-all duration-200 ease-out',
      active
        ? 'bg-bg-weak-50 font-medium text-stroke-strong-950'
        : 'text-text-sub-600 hover:bg-bg-weak-50',
    )}
    onClick={onClick}
  >
    <span
      className={cn(
        'flex size-5 items-center justify-center',
        active ? 'text-primary-base' : 'text-text-soft-400',
      )}
    >
      {icon}
    </span>
    <span className='text-label-sm'>{label}</span>
    {active && (
      <RiArrowRightSLine className='ml-auto hidden size-5 text-text-soft-400 md:block md:opacity-100' />
    )}
  </button>
);

const MonthButton = ({
  month,
  monthIndex,
  year,
  onClick,
  className,
}: MonthButtonProps) => (
  <button
    onClick={() => onClick(monthIndex)}
    className={cn(
      'flex h-8 w-full items-center justify-center rounded-md',
      'text-center text-label-sm font-medium outline-none transition duration-200 ease-out',
      className,
    )}
  >
    {month}
  </button>
);

const VerticalDivider = ({ className }: DividerProps) => (
  <div
    className={cn(
      'relative hidden bg-stroke-soft-200 md:block md:h-auto md:w-px',
      className,
    )}
  />
);

const HorizontalDivider = ({ className }: DividerProps) => (
  <div className={cn('relative block h-0 w-full', className)}>
    <div className='absolute left-0 top-0 h-px w-full bg-stroke-soft-200' />
  </div>
);

const MonthCalendar = ({
  year,
  onYearChange,
  onMonthClick,
  getMonthClassName,
}: {
  year: number;
  onYearChange: (increment: number) => void;
  onMonthClick: (monthIndex: number) => void;
  getMonthClassName: (year: number, monthIndex: number) => string;
}) => (
  <div className='flex-1'>
    <div className='flex h-5 items-center justify-between'>
      <button
        onClick={() => onYearChange(-1)}
        className='flex items-center justify-center rounded-full p-1 hover:bg-bg-weak-50'
      >
        <RiArrowLeftSLine className='size-5 text-text-sub-600' />
      </button>
      <span className='text-label-sm text-text-sub-600'>{year}</span>
      <button
        onClick={() => onYearChange(1)}
        className='flex items-center justify-center rounded-full p-1 hover:bg-bg-weak-50'
      >
        <RiArrowRightSLine className='size-5 text-text-sub-600' />
      </button>
    </div>

    <div className='py-4'>
      <HorizontalDivider />
    </div>

    <div className='grid grid-cols-3 gap-y-1'>
      {MONTH_NAMES.map((month, index) => (
        <MonthButton
          key={month}
          month={month}
          monthIndex={index}
          year={year}
          onClick={onMonthClick}
          className={getMonthClassName(year, index)}
        />
      ))}
    </div>
  </div>
);

const DateSelector = ({
  label,
  selectedDate,
  year,
  onYearChange,
  onMonthClick,
  getMonthClassName,
}: DateSelectorProps) => {
  const { root, wrapper } = inputVariants();

  return (
    <div className='flex flex-1 flex-col gap-4 p-5'>
      {/* Header */}
      <div className='flex flex-col gap-1'>
        <Label.Root asChild>
          <ReactAriaLabel className='block text-label-sm text-text-strong-950'>
            {label}
          </ReactAriaLabel>
        </Label.Root>
        <div className={root()}>
          <div
            className={wrapper({
              class: 'h-9 cursor-pointer',
            })}
          >
            <div className='flex h-full w-full items-center'>
              {selectedDate ? (
                <span className='text-paragraph-sm text-text-strong-950'>
                  {new Date(selectedDate).toLocaleDateString('en-US', {
                    month: 'short',
                  })}
                  {', '}
                  {new Date(selectedDate).getFullYear()}
                </span>
              ) : (
                <span className='text-paragraph-sm text-text-sub-600'>
                  MM / YYYY
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <MonthCalendar
        year={year}
        onYearChange={onYearChange}
        onMonthClick={onMonthClick}
        getMonthClassName={getMonthClassName}
      />
    </div>
  );
};

const useDateFilter = () => {
  const [range, setRange] = React.useState<DateRange>({
    from: new Date(2024, 4, 1),
    to: new Date(2025, 1, 1),
  });

  // Year values
  const [fromYear, setFromYear] = React.useState<number>(2024);
  const [toYear, setToYear] = React.useState<number>(2025);

  const selectMonth = (year: number, monthIndex: number) => {
    // If clicking on already selected month, deselect it
    if (
      (range.from &&
        range.from.getFullYear() === year &&
        range.from.getMonth() === monthIndex) ||
      (range.to &&
        range.to.getFullYear() === year &&
        range.to.getMonth() === monthIndex)
    ) {
      if (
        range.from &&
        range.from.getFullYear() === year &&
        range.from.getMonth() === monthIndex
      ) {
        setRange((prev) => ({
          ...prev,
          from: undefined,
        }));
      }
      if (
        range.to &&
        range.to.getFullYear() === year &&
        range.to.getMonth() === monthIndex
      ) {
        setRange((prev) => ({
          ...prev,
          to: undefined,
        }));
      }
      return;
    }

    // Set new date range
    if (!range.from || (range.from && range.to)) {
      // Start a new range
      setRange({
        from: new Date(year, monthIndex, 1),
        to: undefined,
      });
    } else if (range.from && !range.to) {
      // Complete the range
      const firstDate = range.from.getTime();
      const secondDate = new Date(year, monthIndex, 1).getTime();

      if (secondDate < firstDate) {
        setRange({
          from: new Date(year, monthIndex, 1),
          to: range.from,
        });
      } else {
        setRange({
          from: range.from,
          to: new Date(year, monthIndex, 1),
        });
      }
    }
  };

  const handleCalendarClick = (year: number, monthIndex: number) => {
    selectMonth(year, monthIndex);
  };

  const changeYear = (
    currentYear: number,
    setYearFn: React.Dispatch<React.SetStateAction<number>>,
    dateType: 'from' | 'to',
    increment: number,
  ) => {
    const newYear = currentYear + increment;
    setYearFn(newYear);

    const selectedDate = dateType === 'from' ? range.from : range.to;
    if (selectedDate && selectedDate.getFullYear() === currentYear) {
      const month = selectedDate.getMonth();
      setRange((prev) => ({
        ...prev,
        [dateType]: new Date(newYear, month, 1),
      }));
    }
  };

  const changeFromYear = (increment: number) => {
    changeYear(fromYear, setFromYear, 'from', increment);
  };

  const changeToYear = (increment: number) => {
    changeYear(toYear, setToYear, 'to', increment);
  };

  const handleClear = () => {
    const now = new Date();
    setFromYear(now.getFullYear());
    setToYear(now.getFullYear());
    setRange({
      from: now,
      to: now,
    });
  };

  const isMonthInRange = (year: number, month: number): boolean => {
    if (!range.from && !range.to) return false;

    if (range.from && !range.to) {
      return (
        range.from.getFullYear() === year && range.from.getMonth() === month
      );
    }

    if (!range.from && range.to) {
      return range.to.getFullYear() === year && range.to.getMonth() === month;
    }

    if (range.from && range.to) {
      const fromTime = new Date(
        range.from.getFullYear(),
        range.from.getMonth(),
        1,
      ).getTime();
      const toTime = new Date(
        range.to.getFullYear(),
        range.to.getMonth(),
        1,
      ).getTime();
      const currentTime = new Date(year, month, 1).getTime();

      return currentTime >= fromTime && currentTime <= toTime;
    }

    return false;
  };

  const getMonthClassName = (year: number, month: number): string => {
    const isFrom =
      range.from &&
      range.from.getFullYear() === year &&
      range.from.getMonth() === month;
    const isTo =
      range.to &&
      range.to.getFullYear() === year &&
      range.to.getMonth() === month;

    const isInRange = isMonthInRange(year, month);

    const columnIndex = month % 3;
    const isLeftEdge = columnIndex === 0;
    const isRightEdge = columnIndex === 2;

    const colorClasses =
      isFrom || isTo
        ? 'bg-information-light text-information-dark'
        : isInRange
          ? 'bg-information-lighter text-information-dark'
          : 'text-text-sub-600 hover:bg-bg-weak-50';

    let borderClasses = '';
    if (isFrom && isTo) {
      borderClasses = 'rounded-md';
    } else if (isFrom) {
      borderClasses = 'rounded-l-lg rounded-r-none';
    } else if (isTo) {
      borderClasses = 'rounded-r-lg rounded-l-none';
    } else if (isInRange) {
      borderClasses = isLeftEdge
        ? 'rounded-l-lg rounded-r-none'
        : isRightEdge
          ? 'rounded-r-lg rounded-l-none'
          : 'rounded-none';
    } else {
      borderClasses = 'rounded-md';
    }

    return `${colorClasses} ${borderClasses}`;
  };

  return {
    range,
    fromYear,
    toYear,
    changeFromYear,
    changeToYear,
    handleCalendarClick,
    handleClear,
    getMonthClassName,
  };
};

// Main Component
export default function BlockFilter() {
  const [activeFilter, setActiveFilter] = React.useState('Date');
  const {
    range,
    fromYear,
    toYear,
    changeFromYear,
    changeToYear,
    handleCalendarClick,
    handleClear,
    getMonthClassName,
  } = useDateFilter();

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className='w-[min(696px,calc(100vw-32px))] overflow-hidden rounded-20 bg-bg-white-0 shadow-custom-md'>
      <div className='flex flex-col md:flex-row'>
        {/* Sidebar */}
        <div className='w-full border-b border-stroke-soft-200 md:w-[224px] md:border-b-0 md:border-r'>
          <div className='flex flex-row gap-2 overflow-x-auto p-3 md:flex-col'>
            {FILTER_TYPES.map((item) => (
              <FilterItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                active={activeFilter === item.label}
                onClick={() => handleFilterClick(item.label)}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className='flex-1'>
          {/* Header */}
          <div className='px-5 py-4'>
            <div className='flex items-center gap-2'>
              <RiCalendarLine className='size-5 text-text-sub-600' />
              <h4 className='text-label-sm text-text-strong-950'>Date</h4>
            </div>
          </div>

          <HorizontalDivider />

          {/* Date Range Selector */}
          <div className='flex flex-col md:flex-row'>
            {/* From Calendar */}
            <DateSelector
              label='From'
              selectedDate={range.from}
              year={fromYear}
              onYearChange={changeFromYear}
              onMonthClick={(monthIndex) =>
                handleCalendarClick(fromYear, monthIndex)
              }
              getMonthClassName={getMonthClassName}
            />

            {/* Dividers */}
            <VerticalDivider />
            <HorizontalDivider className='md:hidden' />

            {/* To Calendar */}
            <DateSelector
              label='To'
              selectedDate={range.to}
              year={toYear}
              onYearChange={changeToYear}
              onMonthClick={(monthIndex) =>
                handleCalendarClick(toYear, monthIndex)
              }
              getMonthClassName={getMonthClassName}
            />
          </div>

          {/* Actions */}
          <div className='flex justify-between gap-4 border-t border-stroke-soft-200 px-5 py-4'>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='small'
              className='flex-1'
              onClick={handleClear}
            >
              Clear
            </Button.Root>
            <Button.Root
              variant='primary'
              mode='filled'
              size='small'
              className='flex-1'
            >
              Apply
            </Button.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
