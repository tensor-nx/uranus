'use client';

import {
  RemixiconComponentType,
  RiCustomerServiceFill,
  RiMailFill,
  RiMap2Fill,
} from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
const contactData: {
  id: string;
  icon: RemixiconComponentType;
  title: string;
  value: string;
  description: string;
}[] = [
  {
    id: 'contact1',
    icon: RiMailFill,
    title: 'Support email',
    value: 'hello@company.com',
    description: 'Our dedicated staff will assist you soon.',
  },
  {
    id: 'contact2',
    icon: RiMap2Fill,
    title: 'Office address',
    value: '430 Madison Ave, NY, 10022',
    description: "You're welcome anytime at our main hub.",
  },
  {
    id: 'contact3',
    icon: RiCustomerServiceFill,
    title: 'Contact number',
    value: '+1 (900) 555-0182',
    description: 'Weekdays from 9am to 6pm.',
  },
];

export default function Contact05() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='mx-auto max-w-7xl px-6 md:px-7'>
        <div className='mb-8 flex flex-col items-start lg:mb-10 lg:items-center'>
          <Badge.Root
            variant='lighter'
            className='bg-bg-weak-50 text-label-sm text-text-sub-600 mb-3 h-7 w-fit rounded-[9px] px-2.5 normal-case'
          >
            Reach our support
          </Badge.Root>
          <h3 className='text-title-h4 text-text-strong-950 lg:text-title-h3 mb-4 font-[550]'>
            Let's move forward together
          </h3>
          <p className='text-paragraph-md text-text-sub-600'>
            Teamwork, shared goals, and reliable support for every step of your
            journey.
          </p>
        </div>

        <div className='mb-8 grid grid-cols-1 gap-3 lg:mb-10 lg:grid-cols-3 lg:gap-6'>
          {contactData.map((contact) => (
            <div
              key={contact.id}
              className='shadow-custom-input bg-bg-white-0 flex flex-col gap-6 rounded-[28px] p-6 lg:gap-10 lg:p-8'
            >
              <div className='bg-bg-weak-25 flex size-12 items-center justify-center rounded-xl'>
                <contact.icon className='text-primary-base size-6' />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='text-label-md text-text-sub-600'>
                  {contact.title}
                </div>
                <div className='text-title-h6 text-text-strong-950 font-[550]'>
                  {contact.value}
                </div>
              </div>
              <p className='text-paragraph-md text-text-soft-400'>
                {contact.description}
              </p>
            </div>
          ))}
        </div>

        <p className='text-paragraph-md text-text-soft-400 mx-auto w-full lg:text-center'>
          Partner with dedicated teams focused on delivering{' '}
          <br className='hidden lg:block' />
          <span className='text-label-md text-text-sub-600'>
            real value and lasting results.
          </span>
        </p>
      </div>
    </div>
  );
}
