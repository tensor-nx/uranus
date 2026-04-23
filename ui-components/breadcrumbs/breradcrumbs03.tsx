'use client';

import * as React from 'react';
import { RiArrowRightSLine } from '@remixicon/react';

type BreadcrumbItem = {
  label: string;
  href: string;
};
const Separator = () => (
  <div className='relative flex size-1 items-center justify-center'>
    <div className='absolute inset-0 rounded-full border border-stroke-soft-200 bg-bg-white-0'></div>
  </div>
);

export default function BlockBreadcrumbs() {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
  ];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <nav className='flex items-center gap-2'>
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={item.href}>
          <a
            href={item.href}
            onClick={handleClick}
            className='rounded-full bg-bg-weak-50 px-2.5 py-1 text-label-xs text-text-sub-600 transition-colors hover:bg-primary-alpha-10 hover:text-primary-base'
          >
            {item.label}
          </a>
          {index < breadcrumbs.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </nav>
  );
}
