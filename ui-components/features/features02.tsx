'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';

export default function Features02() {
  const ListDotIcon = () => {
    return (
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.5 15C3.35775 15 0 11.6423 0 7.5C0 3.35775 3.35775 0 7.5 0C11.6423 0 15 3.35775 15 7.5C15 11.6423 11.6423 15 7.5 15ZM6.75225 10.5L12.0548 5.19675L10.9943 4.13625L6.75225 8.379L4.6305 6.25725L3.57 7.31775L6.75225 10.5Z'
          className='fill-primary-base'
        />
      </svg>
    );
  };
  return (
    <div className='bg-bg-white-0 py-10 lg:py-20 w-full'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:gap-16 lg:px-12 2xl:gap-20'>
        <div className='flex flex-1 items-center justify-center'>
          <Image
            src='https://alignui.com/images/blocks/features-02.png'
            alt='Features 02'
            width={498}
            height={500}
            className='hidden h-auto w-full object-contain lg:block'
          />
          <Image
            src='https://alignui.com/images/blocks/features-02-mobile.png'
            alt='Features 02'
            width={342}
            height={386}
            className='block h-auto w-full object-contain lg:hidden'
          />
        </div>
        <div className='flex flex-1 flex-col justify-center'>
          <Badge.Root
            variant='stroke'
            className='text-label-sm text-text-sub-600 shadow-custom-input-2 mb-3 h-7 w-fit rounded-[9px] pr-2.5 pl-1.75 normal-case ring-transparent has-[>.dot]:gap-1'
          >
            <Badge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
            Why it matters
          </Badge.Root>
          <h2 className='text-title-h4 lg:text-title-h3 xl:text-title-h2 text-text-strong-950 mb-6 !font-[550] lg:mb-8'>
            Turn training data into real team growth
          </h2>
          <p className='text-paragraph-md text-text-sub-600 mb-6 lg:mb-8'>
            Track course completion, measure engagement, and make{' '}
            <br className='hidden lg:block' />
            <span className='text-label-md text-text-sub-600 flex lg:inline'>
              better people decisions with powerful insights.
            </span>
          </p>
          <ul className='mb-6 flex flex-col gap-4 lg:mb-8'>
            <li className='text-paragraph-md text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Track real-time progress
            </li>
            <li className='text-paragraph-md text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Compare team performance
            </li>
            <li className='text-paragraph-md text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Identify skill gaps early
            </li>
            <li className='text-paragraph-md text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Promote continuous learning
            </li>
          </ul>
          <Button.Root
            mode='stroke'
            size='medium'
            className='text-primary-base ring-primary-base focus:border-primary-base hover:bg-blue-alpha-10 focus:shadow-button-primary-focus w-full cursor-pointer gap-2 rounded-xl border border-transparent pl-4.5 transition-all duration-300 hover:shadow-none hover:ring-transparent focus:bg-transparent focus:ring-transparent lg:w-fit'
          >
            Book a demo
            <Button.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base group-disabled:text-text-disabled-300 size-5'
            />
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
