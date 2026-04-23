'use client';

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { RiAddLine, RiMore2Line, RiSubtractLine } from '@remixicon/react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Input from '@/components/ui/input';
import * as Table from '@/components/ui/table';
import { cn } from '@/utils/cn';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends unknown, TValue> {
    className?: string;
  }
}

function Divider() {
  return (
    <div className='relative h-0 w-full'>
      <div className='absolute left-0 top-0 h-px w-full bg-bg-soft-200' />
    </div>
  );
}

export function InputWithButton() {
  return (
    <div className='w-full max-w-[300px]'>
      <div className='flex flex-col gap-1'>
        <Input.Root>
          <Input.Wrapper>
            <Input.Input placeholder='james@alignui.com' />
          </Input.Wrapper>
          <button
            type='button'
            className={cn(
              'inline-flex items-center justify-center whitespace-nowrap rounded-none bg-bg-weak-50 px-3 py-2 text-label-sm text-text-sub-600 outline-none ring-1 ring-inset ring-transparent transition duration-200 ease-out',
              'hover:bg-bg-white-0 hover:text-text-strong-950',
              'focus-visible:bg-bg-white-0 focus-visible:text-text-strong-950 focus-visible:ring-transparent',
            )}
          >
            Send link
          </button>
        </Input.Root>
      </div>
    </div>
  );
}

const AccordionTitle = ({ title, count }: { title: string; count: number }) => (
  <div className='flex items-center gap-1'>
    <h2 className='text-label-sm text-text-strong-950'>{title}</h2>
    <span className='text-label-sm text-text-soft-400'>({count})</span>
  </div>
);

const data: Data[] = [
  {
    id: '1',
    date: '2024-01-15',
    type: 'Fleet Maintance',
    cost: 12000,
    actions: '',
  },
  {
    id: '2',
    date: '2024-02-28',
    type: 'Emergency Repair',
    cost: 3500,
    actions: '',
  },
  {
    id: '3',
    date: '2024-01-15',
    type: 'Fleet Maintance',
    cost: 12000,
    actions: '',
  },
];

type Data = {
  id: string;
  date: string;
  type: string;
  cost: number;
  actions: string;
};

type ColumnMetaType = {
  className?: string;
};

const columns: ColumnDef<Data, unknown>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox.Root
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox.Root
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: 'pr-0 w-0',
    } as ColumnMetaType,
  },
  {
    id: 'date',
    accessorKey: 'date',
    header: () => (
      <div className='text-paragraph-sm text-text-sub-600'>Date</div>
    ),
    cell: ({ row }) => (
      <div className='text-paragraph-sm text-text-strong-950'>
        {row.original.date}
      </div>
    ),
  },
  {
    id: 'type',
    accessorKey: 'type',
    header: () => (
      <div className='text-paragraph-sm text-text-sub-600'>Type</div>
    ),
    cell: ({ row }) => (
      <div className='whitespace-nowrap text-paragraph-sm text-text-sub-600'>
        {row.original.type}
      </div>
    ),
  },
  {
    id: 'cost',
    accessorKey: 'cost',
    header: () => (
      <div className='text-paragraph-sm text-text-sub-600'>Cost</div>
    ),
    cell: ({ row }) => (
      <div
        style={{ width: 181.67 }}
        className='whitespace-nowrap text-paragraph-sm text-text-sub-600'
      >
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(row.original.cost)}
      </div>
    ),
  },
  {
    id: 'actions',
    enableSorting: false,
    enableHiding: false,
    cell: ({ row }) => (
      <Button.Root
        variant='neutral'
        mode='ghost'
        size='xsmall'
        className='w-12'
      >
        <RiMore2Line className='size-5' />
      </Button.Root>
    ),
    meta: {
      className: 'w-12 p-0',
    },
  },
];

function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table.Root className='relative w-full max-w-[665px] [&>table]:min-w-[665px]'>
      <Table.Header className='whitespace-nowrap'>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Table.Head
                key={header.id}
                className={cn(
                  'py-1.5',
                  header.column.columnDef.meta?.className,
                )}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </Table.Head>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {table.getRowModel().rows?.length > 0 &&
          table.getRowModel().rows.map((row) => (
            <Table.Row
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
              className='h-12'
            >
              {row.getVisibleCells().map((cell) => (
                <Table.Cell
                  key={cell.id}
                  className={cn('h-12', cell.column.columnDef.meta?.className)}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  );
}

const PaymentAccordion = () => (
  <div className='flex w-full max-w-[725px] flex-col gap-4'>
    <div className='flex flex-col'>
      <div className='flex flex-col gap-2'>
        <AccordionTitle title='Account' count={2} />
        <Accordion.Root
          className='w-full rounded-xl bg-bg-white-0 ring-1 ring-stroke-soft-200'
          type='single'
          defaultValue='item-2'
          collapsible
        >
          <Accordion.Item
            value='item-1'
            className='rounded-xl transition-colors duration-200 hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
          >
            <Accordion.Trigger className='group flex w-full items-center justify-between p-3.5 text-left'>
              <div className='flex min-w-0 gap-3'>
                <RiAddLine className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:hidden' />
                <RiSubtractLine className='hidden size-5 shrink-0 text-text-soft-400 group-data-[state=open]:block' />
                <div className='flex min-w-0 gap-1'>
                  <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                    Corporate Accounts
                  </span>
                  <span className='truncate text-left text-label-sm text-text-soft-400'>
                    (156 Customers)
                  </span>
                </div>
              </div>
            </Accordion.Trigger>
            <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
              <div className='pb-4 pl-[46px] pr-[52px]'>
                <p className='text-paragraph-sm text-text-sub-600'>
                  Manage your corporate client portfolio efficiently. Track
                  account performance, monitor contract terms, and oversee
                  multiple business relationships in one centralized location.
                  Set custom pricing tiers, manage billing cycles, and generate
                  detailed reports for each corporate account.
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

        <Accordion.Root
          className='w-full rounded-xl bg-bg-white-0 ring-1 ring-stroke-soft-200'
          type='single'
          defaultValue='item-2'
          collapsible
        >
          <Accordion.Item
            value='item-2'
            className='rounded-xl transition-colors duration-200 hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
          >
            <Accordion.Trigger className='group flex w-full items-center justify-between p-3.5 text-left'>
              <div className='flex min-w-0 gap-3'>
                <RiAddLine className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:hidden' />
                <RiSubtractLine className='hidden size-5 shrink-0 text-text-soft-400 group-data-[state=open]:block' />
                <div className='flex min-w-0 gap-1'>
                  <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                    Individual Accounts
                  </span>
                  <span className='truncate text-left text-label-sm text-text-soft-400'>
                    (1,243 Accounts)
                  </span>
                </div>
              </div>
              <Badge.Root
                variant='lighter'
                color='gray'
                size='medium'
                className='ml-auto shrink-0'
              >
                Draft
              </Badge.Root>
            </Accordion.Trigger>
            <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
              <div className='flex flex-col pb-4 pl-[46px] pr-3.5'>
                <div className='flex flex-col gap-4'>
                  <Divider />
                  <div className='flex flex-col gap-6 sm:flex-row'>
                    <div className='flex min-w-0 flex-1 flex-col gap-1'>
                      <h4 className='truncate text-label-xs text-text-soft-400'>
                        Account Manager
                      </h4>
                      <span className='truncate text-label-sm text-text-strong-950'>
                        James Brown
                      </span>
                    </div>
                    <div className='flex min-w-0 flex-1 flex-col gap-1'>
                      <h4 className='truncate text-label-xs text-text-soft-400'>
                        Contract Value
                      </h4>
                      <span className='truncate text-label-sm text-text-strong-950'>
                        $250,000
                      </span>
                    </div>
                    <div className='flex min-w-0 flex-1 flex-col gap-1'>
                      <h4 className='truncate text-label-xs text-text-soft-400'>
                        Start Date
                      </h4>
                      <span className='truncate text-label-sm text-text-strong-950'>
                        2024-01-15
                      </span>
                    </div>
                    <div className='flex min-w-0 flex-1 flex-col gap-1'>
                      <h4 className='truncate text-label-xs text-text-soft-400'>
                        Member
                      </h4>
                      <span className='truncate text-label-sm text-text-strong-950'>
                        45
                      </span>
                    </div>
                  </div>
                  <Divider />
                  <h5 className='text-label-sm text-text-strong-950'>
                    Recent services
                  </h5>
                  <DataTable />
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>

    <div className='flex flex-col'>
      <div className='flex flex-col gap-2'>
        <AccordionTitle title='Recruitment Processes' count={2} />
        <Accordion.Root
          className='w-full rounded-xl bg-bg-white-0 ring-1 ring-stroke-soft-200'
          type='single'
          collapsible
        >
          <Accordion.Item
            value='item-1'
            className='rounded-xl transition-colors duration-200 hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
          >
            <Accordion.Trigger className='group flex w-full items-center gap-3 p-3.5 text-left'>
              <div className='relative size-5 shrink-0'>
                <RiAddLine className='size-5 text-text-soft-400 group-data-[state=open]:hidden' />
                <RiSubtractLine className='hidden size-5 text-text-soft-400 group-data-[state=open]:block' />
              </div>
              <div className='flex min-w-0 gap-1'>
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Active Positions
                </span>
                <span className='truncate text-left text-label-sm text-text-soft-400'>
                  (12 Positions)
                </span>
              </div>
            </Accordion.Trigger>
            <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
              <div className='pb-4 pl-[46px] pr-[52px]'>
                <p className='text-paragraph-sm text-text-sub-600'>
                  Browse and manage all current job openings in your
                  organization. Track application status, review candidate
                  profiles, and coordinate with hiring managers. Set position
                  requirements, salary ranges, and keep your recruitment
                  pipeline organized and efficient.
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

        <Accordion.Root
          className='w-full rounded-xl bg-bg-white-0 ring-1 ring-stroke-soft-200'
          type='single'
          collapsible
        >
          <Accordion.Item
            value='item-2'
            className='rounded-xl transition-colors duration-200 hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
          >
            <Accordion.Trigger className='group flex w-full items-center gap-3 p-3.5 text-left'>
              <div className='relative size-5 shrink-0'>
                <RiAddLine className='size-5 text-text-soft-400 group-data-[state=open]:hidden' />
                <RiSubtractLine className='hidden size-5 text-text-soft-400 group-data-[state=open]:block' />
              </div>
              <div className='flex min-w-0 gap-1'>
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Talent Pipeline
                </span>
                <span className='truncate text-left text-label-sm text-text-soft-400'>
                  (186 Candidates)
                </span>
              </div>
            </Accordion.Trigger>
            <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
              <div className='pb-4 pl-[46px] pr-[52px]'>
                <p className='text-paragraph-sm text-text-sub-600'>
                  Maintain a database of potential candidates for future
                  opportunities. Track candidate qualifications, experience, and
                  interactions. Build relationships with promising talent,
                  schedule interviews, and manage the entire recruitment
                  lifecycle from initial contact to job offer.
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  </div>
);

export default PaymentAccordion;
