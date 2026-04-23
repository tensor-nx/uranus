'use client';

import * as React from 'react';
import {
  RiAddLine,
  RiGlobalLine,
  RiMailLine,
  RiSuitcaseLine,
} from '@remixicon/react';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';

export default function BlockProfileCard() {
  return (
    <div className='w-full max-w-[400px] rounded-20 bg-bg-white-0 shadow-regular-md'>
      <div className='flex flex-col gap-4 p-4'>
        <div className='flex items-center justify-between'>
          <div className='text-label-sm text-text-sub-600'>
            Contact Information
          </div>
          <LinkButton.Root variant='primary' size='medium'>
            View Profile
          </LinkButton.Root>
        </div>
        <div className='flex items-center gap-3.5 rounded-xl bg-bg-white-0 p-3.5 ring-1 ring-inset ring-stroke-soft-200'>
          <Avatar.Root size='48' color='blue'>
            <Avatar.Image src='https://alignui.com/images/avatar/photo/lena.png' />
          </Avatar.Root>
          <div className='flex-1'>
            <div className='text-label-md text-text-strong-950'>
              Lena Müller
            </div>
            <div className='mt-1 text-paragraph-sm text-text-sub-600'>
              Marketing Manager{' '}
              <span className='font-medium text-text-strong-950'>
                @catalyst
              </span>
            </div>
          </div>
          <CompactButton.Root variant='stroke' size='large'>
            <CompactButton.Icon as={RiAddLine} />
          </CompactButton.Root>
        </div>

        <div className='flex items-center gap-3'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiGlobalLine className='size-5 text-text-sub-600' />
          </div>
          <div>
            <div className='text-subheading-xs text-text-soft-400'>
              LOCATION
            </div>
            <div className='mt-1 text-paragraph-sm text-text-strong-950'>
              Berlin, Germany
            </div>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiSuitcaseLine className='size-5 text-text-sub-600' />
          </div>
          <div>
            <div className='text-subheading-xs text-text-soft-400'>
              SPECIALITY
            </div>
            <div className='mt-1 text-paragraph-sm text-text-strong-950'>
              Marketing, SEO, Team Leader
            </div>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiMailLine className='size-5 text-text-sub-600' />
          </div>
          <div>
            <div className='text-subheading-xs text-text-soft-400'>
              EMAIL ADDRESS
            </div>
            <div className='mt-1 text-paragraph-sm text-text-strong-950'>
              lena@alignui.com
            </div>
          </div>
        </div>
      </div>

      <Divider.Root />

      <div className='flex gap-3 px-5 py-4'>
        <Button.Root
          variant='neutral'
          mode='stroke'
          size='small'
          className='w-full'
        >
          Add Contact
        </Button.Root>
        <Button.Root size='small' className='w-full'>
          Send Message
        </Button.Root>
      </div>
    </div>
  );
}
