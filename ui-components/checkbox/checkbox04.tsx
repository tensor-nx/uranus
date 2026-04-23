'use client';

import * as React from 'react';
import { RiShareLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Label from '@/components/ui/label';

export default function BlockCheckbox() {
  return (
    <div className='flex w-full max-w-[440px] flex-col gap-5 rounded-20 bg-bg-white-0 p-5 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex items-center gap-3.5'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
          <RiShareLine className='size-5 text-text-sub-600' />
        </div>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Configure Profiles for Portfolio Sharing
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Your portfolio will be shared in these profiles.
          </div>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex items-center gap-2'>
        <Checkbox.Root id='c1' />
        <Label.Root className='text-paragraph-sm' htmlFor='c1'>
          Dribbble
          <Label.Sub>@ravipatel</Label.Sub>
        </Label.Root>
      </div>

      <div className='flex items-center gap-2'>
        <Checkbox.Root id='c2' />
        <Label.Root className='text-paragraph-sm' htmlFor='c2'>
          Behance
          <Label.Sub>@ravipatelart</Label.Sub>
        </Label.Root>
      </div>

      <div className='flex items-center gap-2'>
        <Checkbox.Root id='c3' />
        <Label.Root className='text-paragraph-sm' htmlFor='c3'>
          Twitter
          <Label.Sub>@patelravi</Label.Sub>
        </Label.Root>
      </div>

      <Button.Root
        variant='neutral'
        mode='stroke'
        size='xsmall'
        className='w-full'
      >
        Edit Configuration
      </Button.Root>
    </div>
  );
}
