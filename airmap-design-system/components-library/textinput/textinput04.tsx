'use client';

import * as React from 'react';
import { RiAddLine, RiContactsLine, RiLinksLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';

export default function BlockTextInput() {
  return (
    <div className='flex w-full max-w-[400px] flex-col rounded-20 bg-bg-white-0 p-5 shadow-custom-md'>
      <div className='flex w-full items-center gap-[14px]'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
          <RiLinksLine className='size-5 text-text-sub-600' />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='text-label-sm text-text-strong-950'>Social Links</div>
          <div className='text-paragraph-xs text-text-sub-600'>
            Manage your social media connections.
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Divider.Root />
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='facebook'>Facebook</Label.Root>
          <Input.Root>
            <Input.Affix>facebook.com/</Input.Affix>
            <Input.Wrapper>
              <Input.Input id='facebook' placeholder='www.example.com' />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='instagram'>Instagram</Label.Root>
          <Input.Root>
            <Input.Affix>instagram.com/</Input.Affix>
            <Input.Wrapper>
              <Input.Input id='instagram' placeholder='www.example.com' />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='twitter'>Twitter</Label.Root>
          <Input.Root>
            <Input.Affix>twitter.com/</Input.Affix>
            <Input.Wrapper>
              <Input.Input id='twitter' placeholder='www.example.com' />
            </Input.Wrapper>
          </Input.Root>
        </div>
      </div>

      <div className='flex w-full gap-3 pt-5'>
        <Button.Root variant='neutral' mode='stroke' className='flex-1'>
          <Button.Icon as={RiAddLine} />
          Add Social Link
        </Button.Root>
      </div>
    </div>
  );
}
