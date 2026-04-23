'use client';

import * as React from 'react';
import {
  RiArrowRightSLine,
  RiBankLine,
  RiCalendarLine,
  RiMoneyDollarCircleLine,
  RiPriceTag3Line,
  RiSearch2Line,
  RiUser6Line,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Kbd from '@/components/ui/kbd';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import { cn } from '@/utils/cn';

// Constants
const FILTER_TYPES = [
  { icon: <RiCalendarLine />, label: 'Date' },
  { icon: <RiUser6Line />, label: 'Customers' },
  { icon: <RiMoneyDollarCircleLine />, label: 'Amount' },
  { icon: <RiPriceTag3Line />, label: 'Categories' },
  { icon: <RiBankLine />, label: 'Accounts' },
];

const ACCOUNTS = [
  { name: 'Credit' },
  { name: 'Treasury' },
  { name: 'Ops / Payroll' },
  { name: 'AP' },
  { name: 'AR' },
  { name: 'Checking' },
  { name: 'Savings' },
];

// Types
type FilterItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

type AccountItemProps = {
  name: string;
  selected: boolean;
  onSelect: () => void;
};

// UI Components
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

const AccountItem = ({ name, selected, onSelect }: AccountItemProps) => {
  const id = React.useId();

  return (
    <div className='flex items-center'>
      <div className='flex items-center gap-2'>
        <Checkbox.Root id={id} checked={selected} onCheckedChange={onSelect} />
        <Label.Root
          htmlFor={id}
          className='text-paragraph-sm text-text-strong-950'
        >
          {name}
        </Label.Root>
      </div>
    </div>
  );
};

// Custom hook
const useAccountFilter = () => {
  const [selectedAccounts, setSelectedAccounts] = React.useState<string[]>([
    'Ops / Payroll',
    'Checking',
  ]);

  const toggleAccount = (accountName: string) => {
    if (selectedAccounts.includes(accountName)) {
      setSelectedAccounts(
        selectedAccounts.filter((name) => name !== accountName),
      );
    } else {
      setSelectedAccounts([...selectedAccounts, accountName]);
    }
  };

  const selectAll = () => {
    setSelectedAccounts(ACCOUNTS.map((account) => account.name));
  };

  const clearSelection = () => {
    setSelectedAccounts([]);
  };

  return {
    selectedAccounts,
    toggleAccount,
    selectAll,
    clearSelection,
  };
};

// Main Component
export default function BlockFilter() {
  const [activeFilter, setActiveFilter] = React.useState('Accounts');
  const [searchQuery, setSearchQuery] = React.useState('');
  const { selectedAccounts, toggleAccount, selectAll, clearSelection } =
    useAccountFilter();

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredAccounts = ACCOUNTS.filter((account) =>
    account.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
          <div className='flex items-center justify-between border-b border-stroke-soft-200 px-5 py-4'>
            <div className='flex flex-row items-center gap-2'>
              <RiBankLine className='size-5 text-text-sub-600' />
              <h4 className='text-label-sm text-text-strong-950'>Accounts</h4>
            </div>
            <LinkButton.Root variant='gray' onClick={selectAll}>
              Select All
            </LinkButton.Root>
          </div>

          {/* Search Bar */}
          <div className='group/cmd-input flex h-11 items-center gap-2 border-b border-stroke-soft-200 px-5'>
            <RiSearch2Line
              className={cn(
                'size-5 shrink-0 text-text-soft-400',
                'transition duration-200 ease-out',
                'group-focus-within/cmd-input:text-primary-base',
              )}
            />
            <input
              type='text'
              className='h-full w-full flex-1 bg-transparent text-paragraph-sm text-text-strong-950 outline-none placeholder:text-text-sub-600'
              placeholder='Search...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Kbd.Root>⌘K</Kbd.Root>
          </div>

          {/* Account List */}
          <div className='flex max-h-[320px] flex-col gap-4 overflow-y-auto p-5'>
            {filteredAccounts.map((account) => (
              <AccountItem
                key={account.name}
                name={account.name}
                selected={selectedAccounts.includes(account.name)}
                onSelect={() => toggleAccount(account.name)}
              />
            ))}
            {filteredAccounts.length === 0 && (
              <div className='py-4 text-center text-paragraph-sm text-text-sub-600'>
                No results found
              </div>
            )}
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
