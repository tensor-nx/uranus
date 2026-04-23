'use client';

import * as React from 'react';
import { RiSettings2Line } from '@remixicon/react';

import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';

export default function BlockCheckbox() {
  return (
    <div className='flex w-full max-w-[440px] flex-col gap-5 rounded-20 bg-bg-white-0 p-5 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex items-center gap-3.5'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
          <RiSettings2Line className='size-5 text-text-sub-600' />
        </div>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Authentication Settings
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Edit your preferences for authentication settings.
          </div>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        <div className='text-label-sm text-text-strong-950'>
          Two-Factor Authentication
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox.Root id='c1' />
          <Label.Root className='text-paragraph-sm' htmlFor='c1'>
            SMS Verification
          </Label.Root>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox.Root id='c2' />
          <Label.Root className='text-paragraph-sm' htmlFor='c2'>
            Authenticator App
          </Label.Root>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <div>
        <div className='text-label-sm text-text-strong-950'>
          Password Strength
        </div>
        <div className='mt-2 text-paragraph-sm text-text-sub-600'>
          For enhanced security measures, it is highly recommended to
          consistently create and utilize strong, well-generated passwords.
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <div>
        <div className='text-label-sm text-text-strong-950'>
          Allowing Apex to Protect Your Data
        </div>
        <div className='mt-2 text-paragraph-sm text-text-sub-600'>
          To learn more about how Apex protects your data{' '}
          <LinkButton.Root variant='primary' size='medium' underline>
            Read Privacy Policy
          </LinkButton.Root>
        </div>
      </div>
    </div>
  );
}
