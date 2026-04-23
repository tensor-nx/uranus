'use client';

import * as React from 'react';
import * as LabelPrimivites from '@radix-ui/react-label';
import { RiEqualizer3Line } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';

export default function BlockCheckbox() {
  return (
    <div className='flex w-full max-w-[440px] flex-col gap-5 rounded-20 bg-bg-white-0 p-5 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex items-center gap-3.5'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
          <RiEqualizer3Line className='size-5 text-text-sub-600' />
        </div>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Personalize your tour experience
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Personalize your tour with or without a guide.
          </div>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex items-start gap-2'>
        <Checkbox.Root id='c1' />
        <LabelPrimivites.Root className='cursor-pointer' htmlFor='c1'>
          <div className='flex items-center gap-1 text-label-sm text-text-strong-950'>
            Yes, I want a guide
            <Badge.Root variant='lighter' color='blue' size='small'>
              SUGGESTED
            </Badge.Root>
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Enhance your experience with the expertise and insights of a
            knowledgeable guide who will accompany you throughout the tour,
            providing valuable information and context.
          </div>
          <LinkButton.Root
            variant='primary'
            size='small'
            className='mt-2.5 block'
          >
            Meet our guides
          </LinkButton.Root>
        </LabelPrimivites.Root>
      </div>

      <div className='flex items-start gap-2'>
        <Checkbox.Root id='c2' />
        <LabelPrimivites.Root className='cursor-pointer' htmlFor='c2'>
          <div className='flex items-center gap-1 text-label-sm text-text-strong-950'>
            No, I prefer self-guided
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Explore at your own pace and immerse yourself in the tour experience
            with the freedom to navigate independently, discovering the
            highlights and hidden gems on your own terms.
          </div>
        </LabelPrimivites.Root>
      </div>

      <Button.Root
        variant='neutral'
        mode='stroke'
        size='small'
        className='w-full'
      >
        Save Changes
      </Button.Root>
    </div>
  );
}
