'use client';

import * as React from 'react';
import {
  RiArrowRightSLine,
  RiBankLine,
  RiCalendarLine,
  RiMoneyDollarCircleLine,
  RiPriceTag3Line,
  RiUser6Line,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import { cn } from '@/utils/cn';
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

const useAmountFilter = () => {
  const [directions, setDirections] = React.useState<string[]>(['any']);
  const [specificAmount, setSpecificAmount] = React.useState<string>('');
  const [minAmount, setMinAmount] = React.useState<string>('');
  const [maxAmount, setMaxAmount] = React.useState<string>('');

  const clearSelection = () => {
    setSpecificAmount('');
    setMinAmount('');
    setMaxAmount('');
    setDirections(['any']);
  };

  const toggleDirection = (value: string) => {
    setDirections((prev) => {
      if (prev.includes(value)) {
        return prev.filter((dir) => dir !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return {
    directions,
    setDirections,
    toggleDirection,
    specificAmount,
    setSpecificAmount,
    minAmount,
    setMinAmount,
    maxAmount,
    setMaxAmount,
    clearSelection,
  };
};

export default function BlockFilter() {
  const [activeFilter, setActiveFilter] = React.useState('Amount');
  const {
    directions,
    toggleDirection,
    specificAmount,
    setSpecificAmount,
    minAmount,
    setMinAmount,
    maxAmount,
    setMaxAmount,
    clearSelection,
  } = useAmountFilter();

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
          <div className='flex items-center justify-between px-5 py-4'>
            <div className='flex flex-row items-center gap-2'>
              <RiMoneyDollarCircleLine className='size-5 text-text-sub-600' />
              <h4 className='text-label-sm text-text-strong-950'>Amount</h4>
            </div>
          </div>

          {/* Main content area */}
          <div>
            <Divider.Root variant='solid-text'>DIRECTION</Divider.Root>
            {/* Direction */}
            <div className='flex flex-col gap-4 p-5'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox.Root
                    id='any-direction'
                    checked={directions.includes('any')}
                    onCheckedChange={() => toggleDirection('any')}
                  />
                  <Label.Root
                    htmlFor='any-direction'
                    className='text-paragraph-sm'
                  >
                    Any
                  </Label.Root>
                </div>
                <span className='text-text-soft-400 text-paragraph-xs'>
                  (Recipient)
                </span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox.Root
                    id='direction-in'
                    checked={directions.includes('in')}
                    onCheckedChange={() => toggleDirection('in')}
                  />
                  <Label.Root
                    htmlFor='direction-in'
                    className='text-paragraph-sm'
                  >
                    In (e.g. deposits, refunds)
                  </Label.Root>
                </div>
                <span className='text-text-soft-400 text-paragraph-xs'>
                  (Recipient)
                </span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox.Root
                    id='direction-out'
                    checked={directions.includes('out')}
                    onCheckedChange={() => toggleDirection('out')}
                  />
                  <Label.Root
                    htmlFor='direction-out'
                    className='text-paragraph-sm'
                  >
                    Out (e.g. purchases, charges)
                  </Label.Root>
                </div>
                <span className='text-text-soft-400 text-paragraph-xs'>
                  (Recipient)
                </span>
              </div>
            </div>

            <div className='p-5 flex flex-col gap-3 border-t border-stroke-soft-200'>
              {/* Specific Amount */}
              <div className='flex flex-col gap-1'>
                <Label.Root htmlFor='specific-amount'>
                  Specific Amount
                </Label.Root>
                <div className='flex items-center'>
                  <Input.Root>
                    <Input.Wrapper>
                      <span className='text-text-soft-400 text-paragraph-sm'>
                        $
                      </span>
                      <Input.Input
                        id='specific-amount'
                        type='text'
                        placeholder='0.00'
                        value={specificAmount}
                        onChange={(e) => setSpecificAmount(e.target.value)}
                      />
                    </Input.Wrapper>
                  </Input.Root>
                </div>
              </div>

              {/* At least... */}
              <div className='flex flex-col gap-1'>
                <Label.Root htmlFor='min-amount'>At least...</Label.Root>
                <div className='flex items-center'>
                  <Input.Root>
                    <Input.Wrapper>
                      <span className='text-text-soft-400 text-paragraph-sm'>
                        $
                      </span>
                      <Input.Input
                        id='min-amount'
                        type='text'
                        placeholder='0.00'
                        value={minAmount}
                        onChange={(e) => setMinAmount(e.target.value)}
                      />
                    </Input.Wrapper>
                  </Input.Root>
                </div>
              </div>

              {/* No more than... */}
              <div className='flex flex-col gap-1'>
                <Label.Root htmlFor='max-amount'>No more than...</Label.Root>
                <div className='flex items-center'>
                  <Input.Root>
                    <Input.Wrapper>
                      <span className='text-text-soft-400 text-paragraph-sm'>
                        $
                      </span>
                      <Input.Input
                        id='max-amount'
                        type='text'
                        placeholder='0.00'
                        value={maxAmount}
                        onChange={(e) => setMaxAmount(e.target.value)}
                      />
                    </Input.Wrapper>
                  </Input.Root>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className='mt-auto flex justify-between gap-4 border-t border-stroke-soft-200 px-5 py-4'>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='small'
              className='flex-1'
              onClick={clearSelection}
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
