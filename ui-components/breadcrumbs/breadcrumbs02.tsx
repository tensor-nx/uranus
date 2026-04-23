'use client';

import * as React from 'react';
import { RiArrowRightSLine, RiHomeSmile2Line } from '@remixicon/react';

import * as LinkButton from '@/components/ui/link-button';

type BreadcrumbItem = {
  label: string;
  href: string;
};

export default function BlockBreadcrumbs() {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Analytics', href: '/dashboard/analytics' },
    { label: 'Reports', href: '/dashboard/analytics/reports' },
  ];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <nav className='flex items-center gap-[6px] rounded-lg bg-bg-weak-50 px-2.5 py-2'>
      <a href='/' onClick={handleClick}>
        <RiHomeSmile2Line className='size-4 text-text-sub-600 hover:text-text-strong-950' />
      </a>
      {breadcrumbs.length > 0 && (
        <RiArrowRightSLine className='size-4 cursor-default text-text-soft-400' />
      )}

      {breadcrumbs.map((item, index) => (
        <React.Fragment key={item.href}>
          <LinkButton.Root
            asChild
            variant='gray'
            size='small'
            className='hover:text-text-strong-950'
            onClick={handleClick}
          >
            <a href={item.href}>{item.label}</a>
          </LinkButton.Root>
          {index < breadcrumbs.length - 1 && (
            <RiArrowRightSLine className='size-4 cursor-default text-text-soft-400' />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
