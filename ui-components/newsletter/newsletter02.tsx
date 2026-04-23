'use client';

import { RiArrowRightUpLine, RiMailFill } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';

export default function Newsletter02() {
  return (
    <div className='bg-bg-white-0 w-full py-10 lg:py-22 w-full'>
      <div className='mx-auto flex max-w-5xl flex-col px-6 lg:items-center lg:px-1'>
        <Badge.Root
          variant='lighter'
          className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 capitalize'
        >
          Newsletter & Updates
        </Badge.Root>
        <h3 className='text-title-h4 2xl:text-title-h3 text-text-strong-950 mb-4 !font-[550]'>
          Get the latest, stay inspired
        </h3>
        <p className='text-paragraph-md text-text-sub-600 mb-8'>
          Join for design tips, fresh releases, and smarter ways to elevate your
          work.
        </p>
        <div className='flex flex-col gap-3 lg:gap-4'>
          <div className='relative flex w-full lg:w-90 xl:w-110'>
            <Input.Root className='hover:shadow-gray-shadow has-[input:focus]:shadow-custom-input-active shadow-custom-input rounded-xl before:content-none'>
              <Input.Wrapper size='medium'>
                <Input.Icon
                  as={RiMailFill}
                  className='group-has-[:placeholder-shown]:text-text-disabled-300 text-information-base group-has-[:placeholder-shown]:group-hover/input-wrapper:text-text-soft-400 group-has-[:placeholder-shown]:group-has-[input:focus]/input-wrapper:text-information-base size-5'
                />
                <Input.Input
                  id='email'
                  type='email'
                  placeholder='Type your email here...'
                  className='text-text-strong-950 text-paragraph-sm placeholder:text-text-soft-400 placeholder:text-paragraph-sm group-has-[input:focus]:placeholder:text-text-strong-950'
                />
              </Input.Wrapper>
            </Input.Root>
            <Button.Root
              variant='primary'
              mode='filled'
              size='medium'
              className='absolute top-1/2 right-1.5 size-7 shrink-0 -translate-y-1/2 cursor-pointer rounded-lg p-0'
            >
              <Button.Icon
                as={RiArrowRightUpLine}
                className='text-static-white size-4.5 shrink-0'
              />
            </Button.Root>
          </div>
          <div className='text-paragraph-xs text-text-soft-400 lg:text-center'>
            We respect your privacy —{' '}
            <span className='text-text-sub-600 text-label-xs'>learn more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
