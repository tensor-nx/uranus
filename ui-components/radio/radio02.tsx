'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import { RiRestaurant2Line } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Radio from '@/components/ui/radio';

export default function BlockRadio() {
  return (
    <div className='w-full max-w-[440px] rounded-20 bg-bg-white-0 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex items-center gap-3 px-5 py-4'>
        <RiRestaurant2Line className='size-6 text-text-sub-600' />
        <div className='text-label-sm text-text-strong-950'>
          Choose your dietary preference
        </div>
      </div>

      <Divider.Root />

      <Radio.Group className='flex flex-col gap-3 p-5'>
        <div className='flex items-center gap-2'>
          <Radio.Item id='r1' value='r1' />
          <LabelPrimitives.Root
            htmlFor='r1'
            className='cursor-pointer text-paragraph-sm text-text-strong-950'
          >
            Vegetarian
          </LabelPrimitives.Root>
        </div>

        <div className='flex items-center gap-2'>
          <Radio.Item id='r2' value='r2' />
          <LabelPrimitives.Root
            htmlFor='r2'
            className='cursor-pointer text-paragraph-sm text-text-strong-950'
          >
            Non-vegetarian
          </LabelPrimitives.Root>
        </div>

        <div className='flex items-center gap-2'>
          <Radio.Item id='r3' value='r3' />
          <LabelPrimitives.Root
            htmlFor='r3'
            className='flex cursor-pointer items-center gap-1 text-paragraph-sm text-text-strong-950'
          >
            Vegan
            <span className='text-paragraph-xs text-text-sub-600'>
              (Gluten-free)
            </span>
          </LabelPrimitives.Root>
        </div>
      </Radio.Group>

      <Divider.Root />

      <div className='flex items-center justify-between px-5 py-4'>
        <div className='flex items-center gap-2'>
          <Checkbox.Root id='c1' />
          <LabelPrimitives.Root
            htmlFor='c1'
            className='cursor-pointer text-paragraph-sm text-text-strong-950'
          >
            Set as default
          </LabelPrimitives.Root>
        </div>
        <Button.Root size='small'>Save Changes</Button.Root>
      </div>
    </div>
  );
}
