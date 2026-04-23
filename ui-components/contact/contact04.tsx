'use client';

import {
  RemixiconComponentType,
  RiCustomerServiceFill,
  RiMailFill,
  RiMap2Fill,
} from '@remixicon/react';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
const contactData: {
  id: string;
  href: string;
  icon: RemixiconComponentType;
  title: string;
  description: string;
  value: string;
  hasBorder: boolean;
}[] = [
  {
    id: 'contact1',
    href: 'mailto:hello@company.com',
    icon: RiMailFill,
    title: 'Support email',
    description: 'Our dedicated staff will assist you soon.',
    value: 'hello@company.com',
    hasBorder: true,
  },
  {
    id: 'contact2',
    href: 'https://maps.google.com',
    icon: RiCustomerServiceFill,
    title: 'Office address',
    description: 'You’re welcome anytime at our main hub.',
    value: '1290 Sunset Blvd, LA, 90026 / USA',
    hasBorder: true,
  },
  {
    id: 'contact3',
    href: 'tel:+19005550182',
    icon: RiMap2Fill,
    title: 'Contact phone',
    description: 'Weekdays from 9am to 6pm.',
    value: '+1 (900) 555-0182',
    hasBorder: false,
  },
];

export default function Contact04() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='mx-auto max-w-7xl px-6 lg:px-7'>
        <div className='mb-8 flex flex-col lg:mb-10 lg:items-center'>
          <Badge.Root
            variant='lighter'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 normal-case'
          >
            Reach our support
          </Badge.Root>
          <h3 className='text-title-h4 lg:text-title-h3 text-text-strong-950 mb-4 !font-[550]'>
            Let&apos;s build lasting connections together
          </h3>
          <p className='text-paragraph-md text-text-sub-600'>
            Teamwork, new ideas, and a passion for meaningful outcomes.
          </p>
        </div>
        <div className='border-stroke-soft-200 mx-auto mb-8 flex flex-col justify-center border-t border-b lg:mb-10 lg:flex-row lg:py-9'>
          {contactData.map((contact) => (
            <Link
              key={contact.id}
              href={contact.href}
              className={`group flex flex-1 flex-col py-6 lg:items-center lg:px-3 lg:py-0 xl:px-6 ${contact.hasBorder ? 'border-stroke-soft-200 border-b lg:border-r lg:border-b-0' : ''}`}
            >
              <i className='bg-blue-alpha-10 mb-6 flex size-12 items-center justify-center rounded-full'>
                <contact.icon className='text-primary-base size-6 transition-all duration-300' />
              </i>
              <div className='text-label-md text-text-strong-950 group-hover:text-primary-base mb-1 transition-all duration-300'>
                {contact.title}
              </div>
              <div className='text-paragraph-sm text-text-sub-600 mb-6 transition-all duration-300'>
                {contact.description}
              </div>
              <div className='text-label-md text-text-sub-600 transition-all duration-300'>
                {contact.value}
              </div>
            </Link>
          ))}
        </div>
        <div className='text-label-sm text-text-soft-400 mx-auto w-full lg:w-101 lg:text-center'>
          Empower your workflow with skilled teams delivering{' '}
          <span className='text-text-sub-600 text-label-sm justify-center text-center lg:flex'>
            value and fresh perspectives.
          </span>
        </div>
      </div>
    </div>
  );
}
