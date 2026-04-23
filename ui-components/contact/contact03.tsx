'use client';

import {
  RemixiconComponentType,
  RiCustomerServiceFill,
  RiMailFill,
  RiMap2Fill,
} from '@remixicon/react';
import Link from '@repo/registry/next-link-mock';
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
    description: 'Visit us at our headquarters.',
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

export default function Contact03() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='max-w-7xl mx-auto px-6 lg:px-7 flex flex-col justify-center lg:flex-row'>
        {contactData.map((contact) => (
          <Link
            key={contact.id}
            href={contact.href}
            className={`flex flex-col lg:items-center group flex-1 py-6 lg:py-0 lg:px-3 xl:px-6 ${contact.hasBorder ? 'border-b lg:border-b-0 lg:border-r border-stroke-soft-200' : ''}`}
          >
            <i className='size-12 bg-blue-alpha-10 rounded-full flex items-center justify-center mb-6'>
              <contact.icon className='text-primary-base size-6 transition-all duration-300' />
            </i>
            <div className='text-label-md text-text-strong-950 mb-1 transition-all duration-300 group-hover:text-primary-base'>
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
    </div>
  );
}
