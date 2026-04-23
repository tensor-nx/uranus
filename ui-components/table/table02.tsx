'use client';

import * as React from 'react';
import {
  RiArrowDownSFill,
  RiArrowDownSLine,
  RiArrowUpSFill,
  RiExpandUpDownFill,
  RiFilter3Fill,
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

import * as AvatarGroup from '@/components/ui/avatar-group';
import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Input from '@/components/ui/input';
import * as Kbd from '@/components/ui/kbd';
import * as ProgressBar from '@/components/ui/progress-bar';
import * as SegmentedControl from '@/components/ui/segmented-control';
import * as Table from '@/components/ui/table';

function IconCmd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='10'
      height='10'
      viewBox='0 0 10 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.90057 9.11932C1.55398 9.11932 1.2358 9.03409 0.946023 8.86364C0.65625 8.69034 0.426136 8.46023 0.255682 8.1733C0.0852273 7.88352 0 7.56534 0 7.21875C0 6.86932 0.0852273 6.55114 0.255682 6.2642C0.426136 5.97443 0.65625 5.7429 0.946023 5.5696C1.2358 5.39631 1.55398 5.30966 1.90057 5.30966H2.83807V3.80114H1.90057C1.55398 3.80114 1.2358 3.71591 0.946023 3.54545C0.65625 3.375 0.426136 3.14631 0.255682 2.85938C0.0852273 2.5696 0 2.25 0 1.90057C0 1.55114 0.0852273 1.23295 0.255682 0.946023C0.426136 0.659091 0.65625 0.430398 0.946023 0.259943C1.2358 0.0866477 1.55398 0 1.90057 0C2.25 0 2.56818 0.0866477 2.85511 0.259943C3.14489 0.430398 3.375 0.659091 3.54545 0.946023C3.71875 1.23295 3.8054 1.55114 3.8054 1.90057V2.82955H5.31818V1.90057C5.31818 1.55114 5.40341 1.23295 5.57386 0.946023C5.74432 0.659091 5.97301 0.430398 6.25994 0.259943C6.54972 0.0866477 6.86932 0 7.21875 0C7.56818 0 7.88636 0.0866477 8.1733 0.259943C8.46023 0.430398 8.68892 0.659091 8.85938 0.946023C9.02983 1.23295 9.11506 1.55114 9.11506 1.90057C9.11506 2.25 9.02983 2.5696 8.85938 2.85938C8.68892 3.14631 8.46023 3.375 8.1733 3.54545C7.88636 3.71591 7.56818 3.80114 7.21875 3.80114H6.28551V5.30966H7.21875C7.56818 5.30966 7.88636 5.39631 8.1733 5.5696C8.46023 5.7429 8.68892 5.97443 8.85938 6.2642C9.02983 6.55114 9.11506 6.86932 9.11506 7.21875C9.11506 7.56534 9.02983 7.88352 8.85938 8.1733C8.68892 8.46023 8.46023 8.69034 8.1733 8.86364C7.88636 9.03409 7.56818 9.11932 7.21875 9.11932C6.86932 9.11932 6.54972 9.03409 6.25994 8.86364C5.97301 8.69034 5.74432 8.46023 5.57386 8.1733C5.40341 7.88352 5.31818 7.56534 5.31818 7.21875V6.28125H3.8054V7.21875C3.8054 7.56534 3.71875 7.88352 3.54545 8.1733C3.375 8.46023 3.14489 8.69034 2.85511 8.86364C2.56818 9.03409 2.25 9.11932 1.90057 9.11932ZM1.90057 8.14773C2.07386 8.14773 2.23011 8.10653 2.36932 8.02415C2.51136 7.94176 2.625 7.82955 2.71023 7.6875C2.79545 7.54546 2.83807 7.3892 2.83807 7.21875V6.28125H1.90057C1.73011 6.28125 1.57386 6.32386 1.43182 6.40909C1.28977 6.49148 1.17614 6.60369 1.09091 6.74574C1.00852 6.88778 0.96733 7.04545 0.96733 7.21875C0.96733 7.3892 1.00852 7.54546 1.09091 7.6875C1.17614 7.82955 1.28977 7.94176 1.43182 8.02415C1.57386 8.10653 1.73011 8.14773 1.90057 8.14773ZM1.90057 2.82955H2.83807V1.90057C2.83807 1.72727 2.79545 1.57102 2.71023 1.43182C2.625 1.28977 2.51136 1.17756 2.36932 1.09517C2.23011 1.01278 2.07386 0.971591 1.90057 0.971591C1.73011 0.971591 1.57386 1.01278 1.43182 1.09517C1.28977 1.17756 1.17614 1.28977 1.09091 1.43182C1.00852 1.57102 0.96733 1.72727 0.96733 1.90057C0.96733 2.07386 1.00852 2.23153 1.09091 2.37358C1.17614 2.51278 1.28977 2.62358 1.43182 2.70597C1.57386 2.78835 1.73011 2.82955 1.90057 2.82955ZM6.28551 2.82955H7.21875C7.39205 2.82955 7.5483 2.78835 7.6875 2.70597C7.8267 2.62358 7.9375 2.51278 8.01989 2.37358C8.10511 2.23153 8.14773 2.07386 8.14773 1.90057C8.14773 1.72727 8.10511 1.57102 8.01989 1.43182C7.9375 1.28977 7.8267 1.17756 7.6875 1.09517C7.5483 1.01278 7.39205 0.971591 7.21875 0.971591C7.04545 0.971591 6.88778 1.01278 6.74574 1.09517C6.60369 1.17756 6.49148 1.28977 6.40909 1.43182C6.3267 1.57102 6.28551 1.72727 6.28551 1.90057V2.82955ZM7.21875 8.14773C7.39205 8.14773 7.5483 8.10653 7.6875 8.02415C7.8267 7.94176 7.9375 7.82955 8.01989 7.6875C8.10511 7.54546 8.14773 7.3892 8.14773 7.21875C8.14773 7.04545 8.10511 6.88778 8.01989 6.74574C7.9375 6.60369 7.8267 6.49148 7.6875 6.40909C7.5483 6.32386 7.39205 6.28125 7.21875 6.28125H6.28551V7.21875C6.28551 7.3892 6.3267 7.54546 6.40909 7.6875C6.49148 7.82955 6.60369 7.94176 6.74574 8.02415C6.88778 8.10653 7.04545 8.14773 7.21875 8.14773ZM3.8054 5.30966H5.31818V3.80114H3.8054V5.30966Z'
        fill='currentColor'
      />
    </svg>
  );
}

type Data = {
  id: string;
  company: {
    name: string;
    category: string;
    logo: string;
  };
  description: string;
  teamMembers: {
    avatars: string[];
    count?: number;
  };
  deadline: string;
  progress: number;
};

const data: Data[] = [
  {
    id: '1',
    company: {
      name: 'Spotify',
      category: 'Music & Podcast',
      logo: 'https://alignui.com/images/major-brands/spotify.svg',
    },
    description: 'Spotify mobile app UX enhancements and rebranding project.',
    teamMembers: {
      avatars: [
        'https://alignui.com/images/avatar/illustration/james.png',
        'https://alignui.com/images/avatar/illustration/sophia.png',
        'https://alignui.com/images/avatar/illustration/arthur.png',
        'https://alignui.com/images/avatar/illustration/emma.png',
      ],
      count: 9,
    },
    deadline: '29/09/2023',
    progress: 100,
  },
  {
    id: '2',
    company: {
      name: 'Opensea',
      category: 'NFT Marketplace',
      logo: 'https://alignui.com/images/major-brands/opensea.svg',
    },
    description: 'Mobile & Desktop App Design',
    teamMembers: {
      avatars: [
        'https://alignui.com/images/avatar/illustration/james.png',
        'https://alignui.com/images/avatar/illustration/sophia.png',
        'https://alignui.com/images/avatar/illustration/arthur.png',
        'https://alignui.com/images/avatar/illustration/emma.png',
      ],
      count: 4,
    },
    deadline: '02/11/2023',
    progress: 60,
  },
  {
    id: '3',
    company: {
      name: 'Zoom',
      category: 'Video Conferencing',
      logo: 'https://alignui.com/images/major-brands/zoom.svg',
    },
    description: 'Integration of advanced security features.',
    teamMembers: {
      avatars: [
        'https://alignui.com/images/avatar/illustration/james.png',
        'https://alignui.com/images/avatar/illustration/sophia.png',
        'https://alignui.com/images/avatar/illustration/arthur.png',
        'https://alignui.com/images/avatar/illustration/emma.png',
      ],
      count: 3,
    },
    deadline: '20/11/2023',
    progress: 45,
  },
  {
    id: '4',
    company: {
      name: 'Notion',
      category: 'Note-Taking and Organization',
      logo: 'https://alignui.com/images/major-brands/notion.svg',
    },
    description: 'Redesign of user interface and addition of new features.',
    teamMembers: {
      avatars: [
        'https://alignui.com/images/avatar/illustration/james.png',
        'https://alignui.com/images/avatar/illustration/sophia.png',
        'https://alignui.com/images/avatar/illustration/arthur.png',
        'https://alignui.com/images/avatar/illustration/emma.png',
      ],
      count: 1,
    },
    deadline: '05/01/2024',
    progress: 30,
  },
  {
    id: '5',
    company: {
      name: 'Skype',
      category: 'Video & Voice Communication',
      logo: 'https://alignui.com/images/major-brands/skype.svg',
    },
    description: 'Migration to a new infrastructure for improved performance.',
    teamMembers: {
      avatars: [
        'https://alignui.com/images/avatar/illustration/james.png',
        'https://alignui.com/images/avatar/illustration/sophia.png',
        'https://alignui.com/images/avatar/illustration/arthur.png',
        'https://alignui.com/images/avatar/illustration/emma.png',
      ],
      count: 6,
    },
    deadline: '20/03/2024',
    progress: 10,
  },
  {
    id: '6',
    company: {
      name: 'Slack',
      category: 'Team Collaboration',
      logo: 'https://alignui.com/images/major-brands/slack.svg',
    },
    description: 'Integration with third-party productivity tools.',
    teamMembers: {
      avatars: [
        'https://alignui.com/images/avatar/illustration/james.png',
        'https://alignui.com/images/avatar/illustration/sophia.png',
        'https://alignui.com/images/avatar/illustration/arthur.png',
        'https://alignui.com/images/avatar/illustration/emma.png',
      ],
      count: 2,
    },
    deadline: '15/06/2024',
    progress: 5,
  },
];

const getSortingIcon = (state: 'asc' | 'desc' | false) => {
  if (state === 'asc')
    return <RiArrowUpSFill className='size-5 text-text-soft-400' />;
  if (state === 'desc')
    return <RiArrowDownSFill className='size-5 text-text-soft-400' />;
  return <RiExpandUpDownFill className='size-5 text-text-soft-400' />;
};

const columns: ColumnDef<Data>[] = [
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
    id: 'company',
    accessorKey: 'company.name',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        <span className='text-paragraph-sm text-text-sub-600'>
          Company Name
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
      <div className='flex w-[214px] items-center gap-3'>
        <div className='flex size-10 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
          <img src={row.original.company.logo} alt='' className='size-7' />
        </div>
        <div className='flex min-w-0 flex-1 flex-col'>
          <span className='text-label-sm text-text-strong-950'>
            {row.original.company.name}
          </span>
          <span className='truncate text-paragraph-xs text-text-sub-600'>
            {row.original.company.category}
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'description',
    accessorKey: 'description',
    header: ({ column }) => (
      <div className='flex w-[276px] items-center gap-0.5'>
        <span className='text-paragraph-sm text-text-sub-600'>Description</span>
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <span className='line-clamp-2 whitespace-normal text-paragraph-sm text-text-strong-950'>
        {row.original.description}
      </span>
    ),
  },
  {
    id: 'teamMembers',
    accessorKey: 'teamMembers',
    header: ({ column }) => (
      <div className='flex w-[132px] items-center gap-0.5'>
        Team Members
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <AvatarGroup.Root size='24'>
        {row.original.teamMembers.avatars.map((avatar, index) => (
          <Avatar.Root key={index}>
            <Avatar.Image src={avatar} />
          </Avatar.Root>
        ))}
        {row.original.teamMembers.count && (
          <AvatarGroup.Overflow>
            +{row.original.teamMembers.count}
          </AvatarGroup.Overflow>
        )}
      </AvatarGroup.Root>
    ),
  },
  {
    id: 'deadline',
    accessorKey: 'deadline',
    header: ({ column }) => (
      <div className='flex w-[96px] items-center gap-0.5'>
        Deadline
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
        {row.original.deadline}
      </span>
    ),
  },
  {
    id: 'progress',
    accessorKey: 'progress',
    header: ({ column }) => (
      <div className='flex w-[172px] items-center gap-0.5'>
        Progress
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className='w-full max-w-48'>
        <div className='flex items-center gap-2'>
          <ProgressBar.Root value={row.original.progress} />
          <span className='text-paragraph-xs text-text-sub-600'>
            {row.original.progress}%
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => (
      <Button.Root variant='neutral' mode='ghost' size='xsmall'>
        <Button.Icon as={RiMore2Line} />
      </Button.Root>
    ),
  },
];

export default function TaskTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [filter, setFilter] = React.useState('all');
  const [rowSelection, setRowSelection] = React.useState({});

  const filteredData = React.useMemo(() => {
    if (filter === 'all') return data;

    return data.filter((item) => {
      if (filter === 'active') return item.progress > 0 && item.progress < 100;
      if (filter === 'completed') return item.progress === 100;
      return true;
    });
  }, [filter]);

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
              <SegmentedControl.Trigger value='active'>
                Ongoing
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger value='completed'>
                Completed
              </SegmentedControl.Trigger>
            </SegmentedControl.List>
          </SegmentedControl.Root>
        </div>

        <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
          <Input.Root size='small' className='w-full sm:w-auto'>
            <Input.Wrapper>
              <Input.Icon as={RiSearch2Line} />
              <Input.Input placeholder='Search tasks...' />
              <Kbd.Root>
                <IconCmd className='size-2.5' />1
              </Kbd.Root>
            </Input.Wrapper>
          </Input.Root>
          <div className='flex w-full gap-3 sm:w-auto'>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='small'
              className='flex-1 sm:flex-initial'
            >
              <Button.Icon as={RiFilter3Fill} className='text-text-sub-600' />
              <span className='text-paragraph-sm text-text-sub-600'>
                Filter
              </span>
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
