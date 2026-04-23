'use client';

import * as React from 'react';
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiHomeSmile2Line,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Dropdown from '@/components/ui/dropdown';

type BreadcrumbItem = {
  label: string;
  href: string;
  items?: BreadcrumbItem[];
};

export default function BlockBreadcrumbs() {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Products',
      href: '/products',
      items: [
        { label: 'Products', href: '/products' },
        { label: 'Books', href: '/products/books' },
        { label: 'Sports', href: '/products/sports' },
      ],
    },
    {
      label: 'Electronics',
      href: '/electronics',
      items: [
        { label: 'Electronics', href: '/electronics' },
        { label: 'House', href: '/electronics/house' },
        { label: 'Technology', href: '/electronics/technology' },
      ],
    },
  ];

  return (
    <nav className='flex items-center justify-center gap-2'>
      <a href='/' className='text-text-soft-400 hover:text-text-sub-600'>
        <RiHomeSmile2Line
          onClick={(e) => e.preventDefault()}
          className='size-4'
        />
      </a>

      {breadcrumbs.map((item, index) => (
        <React.Fragment key={item.href}>
          <span className='cursor-default text-label-xs text-text-soft-400'>
            /
          </span>

          {item.items ? (
            <Dropdown.Root>
              <Dropdown.Trigger asChild>
                <button
                  className='group flex items-center gap-1 text-label-xs text-text-soft-400 hover:text-text-sub-600'
                  onClick={(e) => e.preventDefault()}
                >
                  <span className='group-data-[state=open]:text-text-sub-600'>
                    {item.label}
                  </span>
                  <span className='rounded-full group-data-[state=open]:bg-bg-weak-50'>
                    <RiArrowDownSLine className='size-4 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
                  </span>
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content
                align='start'
                className='w-[148px] gap-0.5 rounded-[10px] p-1'
              >
                {item.items.map((subItem) => (
                  <Dropdown.Item key={subItem.href} asChild>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className='group relative flex w-full items-center justify-between rounded-[6px] py-1 pl-1.5 pr-1 hover:bg-bg-weak-50'
                    >
                      <span className='text-label-xs text-text-sub-600'>
                        {subItem.label}
                      </span>
                      <RiArrowRightSLine className='size-4 text-text-soft-400 opacity-0 transition-opacity group-hover:opacity-100' />
                    </button>
                  </Dropdown.Item>
                ))}
              </Dropdown.Content>
            </Dropdown.Root>
          ) : (
            <button
              onClick={(e) => e.preventDefault()}
              className='text-label-xs text-text-soft-400 hover:text-text-sub-600'
            >
              {item.label}
            </button>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
