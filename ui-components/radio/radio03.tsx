'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import { RiShieldUserLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Radio from '@/components/ui/radio';

export default function BlockRadio() {
  return (
    <div className='w-full max-w-[440px] rounded-20 bg-bg-white-0 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex items-center gap-3.5 px-5 py-4'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
          <RiShieldUserLine className='size-5 text-text-sub-600' />
        </div>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Manage Your Security and Privacy
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Customize your security and privacy settings.
          </div>
        </div>
      </div>

      <Divider.Root />

      <div className='flex flex-col gap-4 p-5'>
        <div className='text-subheading-xs uppercase text-text-soft-400'>
          Security
        </div>
        <Radio.Group className='flex flex-col gap-4'>
          <div className='flex items-start gap-2'>
            <Radio.Item id='r1' value='r1' />
            <LabelPrimitives.Root htmlFor='r1' className='cursor-pointer'>
              <div className='text-label-sm text-text-strong-950'>
                Enable Two-Factor Authentication
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                Add an extra layer of security to your account.
              </div>
            </LabelPrimitives.Root>
          </div>

          <div className='flex items-start gap-2'>
            <Radio.Item id='r2' value='r2' />
            <LabelPrimitives.Root htmlFor='r2' className='cursor-pointer'>
              <div className='text-label-sm text-text-strong-950'>
                Use Single Authentication
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                Remove the extra layer of security.
              </div>
            </LabelPrimitives.Root>
          </div>
        </Radio.Group>

        <div className='text-subheading-xs uppercase text-text-soft-400'>
          Privacy
        </div>
        <Radio.Group className='flex flex-col gap-4'>
          <div className='flex items-start gap-2'>
            <Radio.Item id='r3' value='r3' />
            <LabelPrimitives.Root htmlFor='r3' className='cursor-pointer'>
              <div className='text-label-sm text-text-strong-950'>
                Allow Data Collection
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                Help us improve your experience by allowing data collection.
              </div>
            </LabelPrimitives.Root>
          </div>

          <div className='flex items-start gap-2'>
            <Radio.Item id='r4' value='r4' />
            <LabelPrimitives.Root htmlFor='r4' className='cursor-pointer'>
              <div className='text-label-sm text-text-strong-950'>
                Disable Data Collection
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                Opt-out of data collection.
              </div>
            </LabelPrimitives.Root>
          </div>
        </Radio.Group>
      </div>

      <Divider.Root />

      <div className='px-5 py-4'>
        <Button.Root variant='error' mode='stroke' size='small'>
          Reset all Preferences
        </Button.Root>
      </div>
    </div>
  );
}
