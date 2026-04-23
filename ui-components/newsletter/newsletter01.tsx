'use client';

import { RiCheckboxCircleFill, RiMailFill } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
import * as StatusBadge from '@/components/ui/status-badge';

export default function Newsletter01() {
  return (
    <div className='bg-bg-white-0 w-full py-10 lg:py-22 w-full'>
      <div className='mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 lg:flex-row lg:gap-12 lg:px-1'>
        <div className='flex w-full lg:w-auto'>
          <Image
            src='https://alignui.com/images/blocks/newsletter-1-image.jpg'
            alt='newsletter'
            width={369}
            height={286}
            className='w-full rounded-3xl object-cover md:max-h-[460px] lg:max-h-[286px]'
          />
        </div>
        <div className='flex w-full flex-1 flex-col lg:w-auto'>
          <Badge.Root
            variant='lighter'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 capitalize'
          >
            Exclusive Resources
          </Badge.Root>
          <h3 className='text-title-h4 2xl:text-title-h3 text-text-strong-950 mb-4 !font-[550]'>
            Stay ahead, never miss out
          </h3>
          <p className='text-paragraph-md text-text-sub-600 mb-8 lg:mb-6'>
            Subscribe for insider tips,{' '}
            <strong className='text-label-md text-text-sub-600'>
              latest features,
            </strong>{' '}
            and{' '}
            <strong className='text-label-md text-text-sub-600'>
              smart ways
            </strong>{' '}
            to get more done.
          </p>
          <div className='mb-8 flex flex-wrap gap-2 lg:mb-9'>
            <StatusBadge.Root
              status='completed'
              className='!rounded-10 bg-bg-weak-50 text-text-sub-600 text-label-sm h-auto gap-2 px-3 py-1.5 shadow-none ring-0 lg:px-2.5'
            >
              <StatusBadge.Icon
                as={RiCheckboxCircleFill}
                className='text-success-base ml-0 size-5'
              />
              Weekly updates
            </StatusBadge.Root>
            <StatusBadge.Root
              status='completed'
              className='!rounded-10 bg-bg-weak-50 text-text-sub-600 text-label-sm h-auto gap-2 px-3 py-1.5 shadow-none ring-0 lg:px-2.5'
            >
              <StatusBadge.Icon
                as={RiCheckboxCircleFill}
                className='text-success-base ml-0 size-5'
              />
              Actionable tips
            </StatusBadge.Root>
            <StatusBadge.Root
              status='completed'
              className='!rounded-10 bg-bg-weak-50 text-text-sub-600 text-label-sm h-auto gap-2 px-3 py-1.5 shadow-none ring-0 lg:px-2.5'
            >
              <StatusBadge.Icon
                as={RiCheckboxCircleFill}
                className='text-success-base ml-0 size-5'
              />
              Unmatched security
            </StatusBadge.Root>
          </div>
          <div className='flex flex-col gap-4 lg:flex-row lg:gap-2.5'>
            <div className='flex w-full flex-col gap-2.5 lg:w-80 xl:w-96.75'>
              <Input.Root className='shadow-custom-input hover:shadow-gray-shadow has-[input:focus]:shadow-custom-input-active rounded-xl transition-none before:content-none'>
                <Input.Wrapper size='medium'>
                  <Input.Icon
                    as={RiMailFill}
                    className='group-has-[:placeholder-shown]:text-text-disabled-300 text-information-base group-has-[:placeholder-shown]:group-hover/input-wrapper:text-text-soft-400 group-has-[:placeholder-shown]:group-has-[input:focus]/input-wrapper:text-information-base size-5'
                  />
                  <Input.Input
                    id='email'
                    type='email'
                    placeholder='Enter your email address...'
                    className='text-text-strong-950 text-paragraph-sm placeholder:text-text-soft-400 placeholder:text-paragraph-sm group-has-[input:focus]:placeholder:text-text-strong-950'
                  />
                </Input.Wrapper>
              </Input.Root>
              <div className='text-paragraph-xs text-text-soft-400'>
                Your privacy matters —{' '}
                <span className='text-text-sub-600 text-label-xs'>
                  see our policy
                </span>
              </div>
            </div>
            <Button.Root
              variant='primary'
              mode='filled'
              size='medium'
              className='cursor-pointer rounded-xl px-4'
            >
              Subscribe
            </Button.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
