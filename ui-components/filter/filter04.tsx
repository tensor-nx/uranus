'use client';

import * as React from 'react';
import {
  RiArrowRightSLine,
  RiBankLine,
  RiCalendarLine,
  RiMoneyDollarCircleLine,
  RiPriceTag3Line,
  RiPriceTagLine,
  RiSearch2Line,
  RiUser6Line,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Kbd from '@/components/ui/kbd';
import * as Label from '@/components/ui/label';
import * as Radio from '@/components/ui/radio';
import { cn } from '@/utils/cn';
const FILTER_TYPES = [
  { icon: <RiCalendarLine />, label: 'Date' },
  { icon: <RiUser6Line />, label: 'Customers' },
  { icon: <RiMoneyDollarCircleLine />, label: 'Amount' },
  { icon: <RiPriceTag3Line />, label: 'Categories' },
  { icon: <RiBankLine />, label: 'Accounts' },
];

const CATEGORIES = [
  { id: 'advertising', label: 'Advertising' },
  { id: 'airlines', label: 'Airlines' },
  { id: 'alcohol', label: 'Alcohol and Bard' },
];

type FilterItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

type CategoryItemProps = {
  id: string;
  label: string;
  selected: boolean;
  onSelect: () => void;
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

const CategoryItem = ({ id, label, selected, onSelect }: CategoryItemProps) => {
  const checkboxId = React.useId();

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Checkbox.Root
          id={checkboxId}
          checked={selected}
          onCheckedChange={onSelect}
        />
        <Label.Root
          htmlFor={checkboxId}
          className='text-paragraph-sm text-text-strong-950'
        >
          {label}
        </Label.Root>
      </div>
    </div>
  );
};

const useCategoryFilter = () => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    [],
  );
  const [filterType, setFilterType] = React.useState<string>('all');

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId),
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const selectAll = () => {
    setSelectedCategories(CATEGORIES.map((category) => category.id));
  };

  const clearSelection = () => {
    setSelectedCategories([]);
  };

  return {
    selectedCategories,
    toggleCategory,
    selectAll,
    clearSelection,
    filterType,
    setFilterType,
  };
};

export default function BlockFilter() {
  const [activeFilter, setActiveFilter] = React.useState('Categories');
  const [searchQuery, setSearchQuery] = React.useState('');
  const {
    selectedCategories,
    toggleCategory,
    selectAll,
    clearSelection,
    filterType,
    setFilterType,
  } = useCategoryFilter();

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredCategories = CATEGORIES.filter((category) =>
    category.label.toLowerCase().includes(searchQuery.toLowerCase()),
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
              <RiPriceTagLine className='size-5 text-text-sub-600' />
              <h4 className='text-label-sm text-text-strong-950'>Categories</h4>
            </div>
          </div>

          {/* Main content area */}
          <div>
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

            {/* Filter Type */}
            <div className='p-5'>
              <Radio.Group
                className='flex flex-col gap-4'
                defaultValue='all'
                value={filterType}
                onValueChange={setFilterType}
              >
                <div className='flex items-center gap-2'>
                  <Radio.Item value='all' id='all-transactions' />
                  <Label.Root
                    htmlFor='all-transactions'
                    className='text-paragraph-sm'
                  >
                    All Transactions
                  </Label.Root>
                </div>
                <div className='flex items-center gap-2'>
                  <Radio.Item value='categorized' id='categorized' />
                  <Label.Root
                    htmlFor='categorized'
                    className='text-paragraph-sm'
                  >
                    Categorized
                  </Label.Root>
                </div>
                <div className='flex items-center gap-2'>
                  <Radio.Item value='uncategorized' id='uncategorized' />
                  <Label.Root
                    htmlFor='uncategorized'
                    className='text-paragraph-sm'
                  >
                    Uncategorized
                  </Label.Root>
                </div>
              </Radio.Group>
            </div>

            {/* Categories Divider */}
            <Divider.Root variant='solid-text'>CATEGORIES</Divider.Root>

            {/* Categories List */}
            <div className='p-5 gap-4 flex flex-col'>
              {filteredCategories.map((category) => (
                <CategoryItem
                  key={category.id}
                  id={category.id}
                  label={category.label}
                  selected={selectedCategories.includes(category.id)}
                  onSelect={() => toggleCategory(category.id)}
                />
              ))}
              {filteredCategories.length === 0 && (
                <div className='py-4 text-center text-paragraph-sm text-text-sub-600'>
                  No results found
                </div>
              )}
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
