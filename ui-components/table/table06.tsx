'use client';

import * as React from 'react';
import {
  RiArrowDownSFill,
  RiArrowDownSLine,
  RiArrowUpSFill,
  RiDeleteBin6Line,
  RiEdit2Line,
  RiExpandUpDownFill,
  RiFilter3Fill,
  RiSearch2Line,
  RiSortDesc,
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
import * as Kbd from '@/components/ui/kbd';
import * as SegmentedControl from '@/components/ui/segmented-control';
import * as Table from '@/components/ui/table';
type TransactionData = {
  id: string;
  date: string;
  product: string;
  clientCompany: string;
  amount: number;
};

const data: TransactionData[] = [
  {
    id: '#4170',
    date: '10/08/2023',
    product: 'Notion Monthly Subscription',
    clientCompany: 'Notion Labs Inc.',
    amount: -280.35,
  },
  {
    id: '#4169',
    date: '09/08/2023',
    product: 'Zoom Annual Plan Renewal',
    clientCompany: 'Zoom Video Communications',
    amount: -1599.0,
  },
  {
    id: '#4168',
    date: '08/08/2023',
    product: 'Marketing Consultation Services',
    clientCompany: 'Apex Financial',
    amount: 2301.2,
  },
  {
    id: '#4167',
    date: '07/08/2023',
    product: 'Web Development Project Payment',
    clientCompany: 'Orandis Technology',
    amount: -1245.35,
  },
  {
    id: '#4166',
    date: '06/08/2023',
    product: 'Software License Renewal',
    clientCompany: 'Solaris Energy',
    amount: 254.25,
  },
  {
    id: '#4165',
    date: '05/08/2023',
    product: 'Data Analytics Training Course Fee',
    clientCompany: 'Horizon Shift Tutoring',
    amount: -720.53,
  },
  {
    id: '#4164',
    date: '04/08/2023',
    product: 'Employee Checkup Payments',
    clientCompany: 'Pulse Healthcare',
    amount: -2123.53,
  },
  {
    id: '#4163',
    date: '03/08/2023',
    product: 'Freelance Writing Services',
    clientCompany: 'Catalyst Marketing',
    amount: 154.42,
  },
  {
    id: '#4162',
    date: '02/08/2023',
    product: 'Project Management Consultancy',
    clientCompany: 'Aurora Solutions',
    amount: 745.21,
  },
];

const getSortingIcon = (state: 'asc' | 'desc' | false) => {
  if (state === 'asc')
    return <RiArrowUpSFill className='size-5 text-text-soft-400' />;
  if (state === 'desc')
    return <RiArrowDownSFill className='size-5 text-text-soft-400' />;
  return <RiExpandUpDownFill className='size-5 text-text-soft-400' />;
};

export default function TransactionTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [filter, setFilter] = React.useState('all');
  const [rowSelection, setRowSelection] = React.useState({});

  const filteredData = React.useMemo(() => {
    if (filter === 'all') return data;
    return data.filter((item) =>
      filter === 'income' ? item.amount > 0 : item.amount < 0,
    );
  }, [filter]);

  const columns: ColumnDef<TransactionData>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox.Root
          checked={table.getIsAllPageRowsSelected()}
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
    },
    {
      id: 'id',
      accessorKey: 'id',
      header: ({ column }) => (
        <div className='flex w-[132px] items-center gap-0.5'>
          <span className='text-paragraph-sm text-text-sub-600'>ID</span>
          <button
            type='button'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {getSortingIcon(column.getIsSorted())}
          </button>
        </div>
      ),
      cell: ({ row }) => (
        <span className='text-label-sm text-text-strong-950'>
          {row.original.id}
        </span>
      ),
    },
    {
      id: 'date',
      accessorKey: 'date',
      header: ({ column }) => (
        <div className='flex w-[116px] items-center gap-0.5'>
          <span className='text-paragraph-sm text-text-sub-600'>Date</span>
          <button
            type='button'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {getSortingIcon(column.getIsSorted())}
          </button>
        </div>
      ),
      cell: ({ row }) => (
        <span className='text-paragraph-sm text-text-sub-600'>
          {row.original.date}
        </span>
      ),
    },
    {
      id: 'product',
      accessorKey: 'product',
      header: ({ column }) => (
        <div className='flex w-[296px] items-center gap-0.5'>
          <span className='text-paragraph-sm text-text-sub-600'>Product</span>
          <button
            type='button'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {getSortingIcon(column.getIsSorted())}
          </button>
        </div>
      ),
      cell: ({ row }) => (
        <span className='text-paragraph-sm text-text-sub-600'>
          {row.original.product}
        </span>
      ),
    },
    {
      id: 'clientCompany',
      accessorKey: 'clientCompany',
      header: ({ column }) => (
        <div className='flex w-[196px] items-center gap-0.5'>
          <span className='text-paragraph-sm text-text-sub-600'>
            Client / Company
          </span>
          <button
            type='button'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {getSortingIcon(column.getIsSorted())}
          </button>
        </div>
      ),
      cell: ({ row }) => (
        <span className='text-paragraph-sm text-text-sub-600'>
          {row.original.clientCompany}
        </span>
      ),
    },
    {
      id: 'amount',
      accessorKey: 'amount',
      header: ({ column }) => (
        <div className='flex w-[116px] items-center gap-0.5'>
          <span className='text-paragraph-sm text-text-sub-600'>Amount</span>
          <button
            type='button'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {getSortingIcon(column.getIsSorted())}
          </button>
        </div>
      ),
      cell: ({ row }) => (
        <span className='text-paragraph-sm text-text-strong-950'>
          {row.original.amount > 0 ? '+' : ''}
          {row.original.amount.toLocaleString('tr-TR', {
            style: 'currency',
            currency: 'USD',
          })}
        </span>
      ),
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => (
        <div className='flex items-center justify-between'>
          <Button.Root variant='neutral' mode='ghost' size='xsmall'>
            <Button.Icon as={RiDeleteBin6Line} />
          </Button.Root>
          <Button.Root variant='neutral' mode='ghost' size='xsmall'>
            <Button.Icon as={RiEdit2Line} />
          </Button.Root>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  });

  return (
    <div className='w-full max-w-[1104px]'>
      <div className='mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='w-full sm:w-[320px]'>
          <SegmentedControl.Root defaultValue='all' onValueChange={setFilter}>
            <SegmentedControl.List>
              <SegmentedControl.Trigger value='all'>
                All
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger value='income'>
                Income
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger value='outgoing'>
                Outgoing
              </SegmentedControl.Trigger>
            </SegmentedControl.List>
          </SegmentedControl.Root>
        </div>

        <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
          <Input.Root size='small' className='w-full sm:w-auto'>
            <Input.Wrapper>
              <Input.Icon as={RiSearch2Line} />
              <Input.Input placeholder='Ara...' />
              <Kbd.Root>⌘1</Kbd.Root>
            </Input.Wrapper>
          </Input.Root>
          <div className='flex w-full gap-3 sm:w-auto'>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='small'
              className='flex-1 sm:flex-initial'
            >
              <Button.Icon as={RiFilter3Fill} />
              <span>Filter</span>
            </Button.Root>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='small'
              className='flex-1 sm:flex-initial'
            >
              <Button.Icon as={RiSortDesc} className='text-text-soft-400' />
              <span className='text-paragraph-sm text-text-sub-600'>
                Sort by
              </span>
              <Button.Icon
                as={RiArrowDownSLine}
                className='text-text-soft-400'
              />
            </Button.Root>
          </div>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <Table.Root>
          <Table.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const customClass = header.id === 'select' ? 'pr-0' : '';

                  return (
                    <Table.Head key={header.id} className={customClass}>
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
                  <Table.Row data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => {
                      const customCellClass =
                        cell.column.id === 'select' ? 'pr-0' : '';

                      return (
                        <Table.Cell key={cell.id} className={customCellClass}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </Table.Cell>
                      );
                    })}
                  </Table.Row>
                  {i < arr.length - 1 && <Table.RowDivider />}
                </React.Fragment>
              ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}
