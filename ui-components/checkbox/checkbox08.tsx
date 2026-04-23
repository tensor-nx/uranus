'use client';

import * as React from 'react';
import {
  RiArrowDownSFill,
  RiArrowDownSLine,
  RiArrowUpSFill,
  RiExpandUpDownFill,
  RiSearch2Line,
} from '@remixicon/react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Input from '@/components/ui/input';
import * as Table from '@/components/ui/table';
import { cn } from '@/utils/cn';
const data: Data[] = [
  {
    id: '1',
    name: 'Payroll deposit',
    amount: 3450,
    date: new Date('2024-03-15'),
  },
  {
    id: '2',
    name: 'Investment Return',
    amount: 1280.75,
    date: new Date('2024-03-14'),
  },
  {
    id: '3',
    name: 'Dividend Income',
    amount: 890.25,
    date: new Date('2024-03-13'),
  },
  {
    id: '4',
    name: 'Consulting Fee',
    amount: 2500,
    date: new Date('2024-03-12'),
  },
  {
    id: '5',
    name: 'Rental Income',
    amount: 1750,
    date: new Date('2024-03-11'),
  },
];

type Data = {
  id: string;
  name: string;
  amount: number;
  date: Date;
};

const columns: ColumnDef<Data>[] = [
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
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: () => <div>Name</div>,
    cell: ({ row }) => (
      <div className='text-paragraph-sm text-text-strong-950 group-data-[state=selected]/row:font-medium'>
        {row.original.name}
      </div>
    ),
  },
  {
    id: 'amount',
    accessorKey: 'amount',
    header: () => <div>Amount</div>,
    cell: ({ row }) => (
      <div className='text-paragraph-sm text-text-sub-600'>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(row.original.amount)}
      </div>
    ),
  },
  {
    id: 'date',
    accessorKey: 'date',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Date
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <div className='text-paragraph-sm text-text-sub-600'>
        {row.original.date.toLocaleDateString()}
      </div>
    ),
  },
];

const getSortingIcon = (state: 'asc' | 'desc' | false) => {
  if (state === 'asc')
    return <RiArrowUpSFill className='size-5 text-text-sub-600' />;
  if (state === 'desc')
    return <RiArrowDownSFill className='size-5 text-text-sub-600' />;
  return <RiExpandUpDownFill className='size-5 text-text-sub-600' />;
};

export default function BlockCheckbox() {
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
    initialState: {
      sorting: [
        {
          id: 'member',
          desc: true,
        },
      ],
    },
  });

  return (
    <div className='w-full max-w-[540px]'>
      <div>
        <div className='text-label-md text-text-strong-950'>
          Select Financial Transactions
        </div>
        <div className='mt-1 text-paragraph-sm text-text-sub-600'>
          View and manage your transaction history.
        </div>
      </div>

      <div className='mt-4 flex gap-3'>
        <Input.Root size='small' className='flex-1'>
          <Input.Wrapper>
            <Input.Icon as={RiSearch2Line} />
            <Input.Input type='text' placeholder='Search...' />
          </Input.Wrapper>
        </Input.Root>

        <Button.Root variant='neutral' mode='stroke' size='small'>
          All transacitions
          <Button.Icon as={RiArrowDownSLine} />
        </Button.Root>
      </div>

      <Table.Root className='mt-4'>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => {
                return (
                  <Table.Head
                    key={header.id}
                    className={cn({
                      'pr-0 w-0': i === 0,
                    })}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Table.Head>
                );
              })}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows?.length > 0 &&
            table.getRowModel().rows.map((row, i, arr) => (
              <React.Fragment key={row.id}>
                <Table.Row
                  data-state={row.getIsSelected() && 'selected'}
                  className='group/row'
                >
                  {row.getVisibleCells().map((cell, i2) => (
                    <Table.Cell
                      key={cell.id}
                      className={cn('h-12', {
                        'pr-0 w-0': i2 === 0,
                      })}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
                {i < arr.length - 1 && <Table.RowDivider />}
              </React.Fragment>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
