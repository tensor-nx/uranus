'use client';

import * as React from 'react';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';

export default function BlockProfileCard() {
  return (
    <div className='flex w-full max-w-[340px] flex-col items-center gap-4 rounded-20 bg-bg-white-0 p-5 shadow-regular-md'>
      <Avatar.Root size='64' color='gray'>
        <Avatar.Image src='https://alignui.com/images/avatar/photo/wei.png' />
        <Avatar.Indicator>
          <Avatar.Status status='online' />
        </Avatar.Indicator>
      </Avatar.Root>

      <div className='text-center'>
        <div className='text-label-md text-text-strong-950'>Wei Chen</div>
        <div className='mt-1 text-paragraph-sm text-text-sub-600'>
          Marketing Manager{' '}
          <span className='font-medium text-text-strong-950'>@catalyst</span>
        </div>
      </div>

      <Button.Root variant='neutral' mode='stroke' size='small'>
        Add Contact
      </Button.Root>
    </div>
  );
}
