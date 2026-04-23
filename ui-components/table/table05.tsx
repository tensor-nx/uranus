'use client';

import * as React from 'react';
import {
  RiAlertFill,
  RiArrowDownSFill,
  RiArrowDownSLine,
  RiArrowUpSFill,
  RiCheckboxCircleFill,
  RiExpandUpDownFill,
  RiFilter3Fill,
  RiForbidFill,
  RiMore2Line,
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

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Input from '@/components/ui/input';
import * as Kbd from '@/components/ui/kbd';
import * as SegmentedControl from '@/components/ui/segmented-control';
import * as StatusBadge from '@/components/ui/status-badge';
import * as Table from '@/components/ui/table';
type PaymentData = {
  id: string;
  paymentPreference: {
    name: string;
    company: string;
    logo: string;
  };
  employee: {
    name: string;
    position: string;
    avatar: string;
    color: 'yellow' | 'blue' | 'sky' | 'purple' | 'red' | 'gray';
  };
  cardNumber: string;
  monthlySalary: number;
  status: 'Paid' | 'Pending' | 'Unpaid';
};

const data: PaymentData[] = [
  {
    id: '1',
    paymentPreference: {
      name: 'Visa',
      company: 'Visa Inc.',
      logo: 'https://alignui.com/images/banking-and-finance/visa.svg',
    },
    employee: {
      name: 'Nuray Aksoy',
      position: 'Product Manager',
      avatar: 'https://alignui.com/images/avatar/illustration/nuray.png',
      color: 'red',
    },
    cardNumber: '**** **** **** 1234',
    monthlySalary: 5550.63,
    status: 'Paid',
  },
  {
    id: '2',
    paymentPreference: {
      name: 'PayPal',
      company: 'PayPal Holdings, Inc.',
      logo: 'https://alignui.com/images/banking-and-finance/paypal.svg',
    },
    employee: {
      name: 'James Brown',
      position: 'Marketing Manager',
      avatar: 'https://alignui.com/images/avatar/illustration/james.png',
      color: 'gray',
    },
    cardNumber: '**** **** **** 2345',
    monthlySalary: 4420.35,
    status: 'Paid',
  },
  {
    id: '3',
    paymentPreference: {
      name: 'Mastercard',
      company: 'Mastercard Inc.',
      logo: 'https://alignui.com/images/banking-and-finance/mastercard.svg',
    },
    employee: {
      name: 'Sophia Williams',
      position: 'HR Assistant',
      avatar: 'https://alignui.com/images/avatar/illustration/sophia.png',
      color: 'yellow',
    },
    cardNumber: '**** **** **** 3456',
    monthlySalary: 2730.12,
    status: 'Pending',
  },
  {
    id: '4',
    paymentPreference: {
      name: 'Stripe',
      company: 'Stripe Inc.',
      logo: 'https://alignui.com/images/banking-and-finance/stripe.svg',
    },
    employee: {
      name: 'Emma Wright',
      position: 'Front-end Developer',
      avatar: 'https://alignui.com/images/avatar/illustration/emma.png',
      color: 'sky',
    },
    cardNumber: '**** **** **** 4567',
    monthlySalary: 3814.22,
    status: 'Paid',
  },
  {
    id: '5',
    paymentPreference: {
      name: 'Western Union',
      company: 'Wester Union Inc.',
      logo: 'https://alignui.com/images/banking-and-finance/western-union.svg',
    },
    employee: {
      name: 'Matthew Johnson',
      position: 'Data Software Engineer',
      avatar: 'https://alignui.com/images/avatar/illustration/matthew.png',
      color: 'purple',
    },
    cardNumber: '**** **** **** 6780',
    monthlySalary: 4251.53,
    status: 'Unpaid',
  },
  {
    id: '6',
    paymentPreference: {
      name: 'Wise',
      company: 'Wise Group Ltd.',
      logo: 'https://alignui.com/images/banking-and-finance/wise.svg',
    },
    employee: {
      name: 'Arthur Taylor',
      position: 'Entrepreneur',
      avatar: 'https://alignui.com/images/avatar/illustration/arthur.png',
      color: 'blue',
    },
    cardNumber: '**** **** **** 5676',
    monthlySalary: 6441.52,
    status: 'Pending',
  },
];

const getSortingIcon = (state: 'asc' | 'desc' | false) => {
  if (state === 'asc')
    return <RiArrowUpSFill className='size-5 text-text-soft-400' />;
  if (state === 'desc')
    return <RiArrowDownSFill className='size-5 text-text-soft-400' />;
  return <RiExpandUpDownFill className='size-5 text-text-soft-400' />;
};

const getStatusBadge = (status: 'Paid' | 'Pending' | 'Unpaid') => {
  const statusMap = {
    Paid: {
      status: 'completed' as const,
      icon: RiCheckboxCircleFill,
    },
    Pending: {
      status: 'pending' as const,
      icon: RiAlertFill,
    },
    Unpaid: {
      status: 'disabled' as const,
      icon: RiForbidFill,
    },
  } satisfies Record<
    string,
    { status: 'disabled' | 'completed' | 'pending' | 'failed'; icon: any }
  >;

  const config = statusMap[status];

  return (
    <StatusBadge.Root status={config.status}>
      <StatusBadge.Icon as={config.icon} />
      {status}
    </StatusBadge.Root>
  );
};

export default function PaymentTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [filter, setFilter] = React.useState('all');
  const [rowSelection, setRowSelection] = React.useState({});

  const filteredData = React.useMemo(() => {
    if (filter === 'all') return data;
    return data.filter((item) => item.status.toLowerCase() === filter);
  }, [filter]);

  const columns: ColumnDef<PaymentData>[] = [
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
      id: 'paymentPreference',
      accessorKey: 'paymentPreference.name',
      header: ({ column }) => (
        <div className='flex w-[224px] items-center gap-0.5'>
          <span className='text-paragraph-sm text-text-sub-600'>
            Payment Preference
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
        <div className='flex items-center gap-3'>
          <img
            src={row.original.paymentPreference.logo}
            alt=''
            className='size-8'
          />
          <div className='flex flex-col'>
            <span className='text-paragraph-sm text-text-strong-950'>
              {row.original.paymentPreference.name}
            </span>
            <span className='text-paragraph-xs text-text-sub-600'>
              {row.original.paymentPreference.company}
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'employee',
      accessorKey: 'employee.name',
      header: ({ column }) => (
        <div className='flex w-[216px] items-center gap-0.5'>
          <span className='text-paragraph-sm text-text-sub-600'>
            Employee Name
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
        <div className='flex items-center gap-3'>
          <Avatar.Root size='40' color={row.original.employee.color}>
            <Avatar.Image src={row.original.employee.avatar} />
          </Avatar.Root>
          <div className='flex flex-col'>
            <span className='text-paragraph-sm text-text-strong-950'>
              {row.original.employee.name}
            </span>
            <span className='text-paragraph-xs text-text-sub-600'>
              {row.original.employee.position}
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'cardNumber',
      accessorKey: 'cardNumber',
      header: ({ column }) => (
        <div className='flex w-[176px] items-center gap-0.5'>
          <span className='text-paragraph-sm text-text-sub-600'>
            Card Number
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
          {row.original.cardNumber}
        </span>
      ),
    },
    {
      id: 'monthlySalary',
      accessorKey: 'monthlySalary',
      header: ({ column }) => (
        <div className='flex w-[176px] items-center gap-0.5'>
          <span className='text-paragraph-sm text-text-sub-600'>
            Monthly Salary
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
        <span className='text-paragraph-sm text-text-strong-950'>
          $
          {row.original.monthlySalary.toLocaleString('en-US', {
            minimumFractionDigits: 2,
          })}
        </span>
      ),
    },
    {
      id: 'status',
      accessorKey: 'status',
      header: ({ column }) => (
        <div className='flex w-[96px] items-center gap-0.5'>
          <span className='text-paragraph-sm text-text-sub-600'>Status</span>
          <button
            type='button'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {getSortingIcon(column.getIsSorted())}
          </button>
        </div>
      ),
      cell: ({ row }) => getStatusBadge(row.original.status),
    },
    {
      id: 'actions',
      cell: () => (
        <Button.Root variant='neutral' mode='ghost' size='small'>
          <Button.Icon as={RiMore2Line} />
        </Button.Root>
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
              <SegmentedControl.Trigger value='paid'>
                Paid
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger value='unpaid'>
                Unpaid
              </SegmentedControl.Trigger>
            </SegmentedControl.List>
          </SegmentedControl.Root>
        </div>

        <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
          <Input.Root size='small' className='w-full sm:w-auto'>
            <Input.Wrapper>
              <Input.Icon as={RiSearch2Line} />
              <Input.Input placeholder='Search...' />
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
