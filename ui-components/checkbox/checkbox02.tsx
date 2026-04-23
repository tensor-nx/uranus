'use client';

import * as React from 'react';
import * as LabelPrimivites from '@radix-ui/react-label';
import { RiSettingsLine } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';

export default function BlockCheckbox() {
  return (
    <div className='flex w-full max-w-[440px] flex-col gap-5 rounded-20 bg-bg-white-0 p-5 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex items-center gap-3.5'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
          <RiSettingsLine className='size-5 text-text-sub-600' />
        </div>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Privacy Settings
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Adjust privacy settings based on your preferences.
          </div>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex items-start gap-2'>
        <Checkbox.Root id='c1' />
        <LabelPrimivites.Root className='cursor-pointer' htmlFor='c1'>
          <div className='flex items-center gap-1 text-label-sm text-text-strong-950'>
            Personalized Experience
            <Badge.Root variant='lighter' color='blue' size='small'>
              ADVISED
            </Badge.Root>
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Tailor your experience by allowing us to use your preferences to
            enhance the content and features you see.
          </div>
          <LinkButton.Root
            variant='primary'
            size='small'
            className='mt-2.5 block'
          >
            Learn More
          </LinkButton.Root>
        </LabelPrimivites.Root>
      </div>

      <div className='flex items-start gap-2'>
        <Checkbox.Root id='c2' />
        <LabelPrimivites.Root className='cursor-pointer' htmlFor='c2'>
          <div className='flex items-center gap-1 text-label-sm text-text-strong-950'>
            Data Sharing
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Limit the sharing of your data with trusted third-party partners for
            improved privacy.
          </div>
        </LabelPrimivites.Root>
      </div>

      <div className='flex items-start gap-2'>
        <Checkbox.Root id='c3' />
        <LabelPrimivites.Root className='cursor-pointer' htmlFor='c3'>
          <div className='flex items-center gap-1 text-label-sm text-text-strong-950'>
            Activity Logging
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Control the logging of your activities on our platform, providing
            you with the freedom to manage your digital footprint.
          </div>
          <LinkButton.Root
            variant='primary'
            size='small'
            className='mt-2.5 block'
          >
            Explore logging options
          </LinkButton.Root>
        </LabelPrimivites.Root>
      </div>
    </div>
  );
}
