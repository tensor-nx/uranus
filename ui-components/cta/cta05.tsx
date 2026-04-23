'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as FancyButton from '@/components/ui/fancy-button';

export default function Cta05() {
  return (
    <div className='bg-bg-white-0 relative pt-10 lg:pt-24 w-full'>
      <div className='mx-auto max-w-7xl px-6 md:px-7'>
        <div className='flex flex-col items-center gap-8 lg:gap-12'>
          <div className='flex w-full flex-col gap-7 lg:items-center'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col items-start gap-3 lg:items-center'>
                <Badge.Root
                  variant='lighter'
                  className='bg-bg-weak-50 text-label-sm text-text-sub-600 h-7 w-fit rounded-[9px] px-2.5 normal-case'
                >
                  Backed by real results
                </Badge.Root>
                <h2 className='text-title-h4 text-text-strong-950 lg:text-title-h2 font-[550] lg:text-center'>
                  Ready to elevate your financial strategy?
                </h2>
              </div>
              <p className='text-paragraph-md text-text-sub-600 lg:text-paragraph-lg lg:text-center'>
                Simplify your money management with live insights.
              </p>
            </div>
            <FancyButton.Root
              variant='primary'
              size='medium'
              className='bg-primary-base w-full cursor-pointer gap-1.5 rounded-xl pr-3.5 pl-5 lg:w-fit'
            >
              Start your free trial
              <FancyButton.Icon
                as={RiArrowRightUpLongLine}
                className='text-static-white/[0.64] mx-0 size-5'
              />
            </FancyButton.Root>
          </div>

          <div className='relative mx-[-12px] w-[calc(100%+24px)] lg:mx-0 lg:w-full'>
            <Image
              src='https://alignui.com/images/blocks/cta-5-image.png'
              alt='Finance dashboard'
              width={1224}
              height={680}
              className='hidden w-full object-contain lg:block dark:lg:hidden'
            />
            <Image
              src='https://alignui.com/images/blocks/cta-5-image-dark.png'
              alt='Finance dashboard'
              width={1224}
              height={680}
              className='hidden w-full object-contain dark:lg:block'
            />
            <Image
              src='https://alignui.com/images/blocks/cta-5-image-mobile.png'
              alt='Finance dashboard'
              width={342}
              height={680}
              className='mx-auto block w-full object-contain sm:w-2/3 lg:hidden dark:hidden'
            />
            <Image
              src='https://alignui.com/images/blocks/cta-5-image-mobile-dark.png'
              alt='Finance dashboard'
              width={342}
              height={680}
              className='mx-auto hidden w-full object-contain sm:w-2/3 dark:block dark:lg:hidden'
            />
          </div>
        </div>
      </div>

      <div className='from-bg-white-0/0 to-bg-white-0 pointer-events-none absolute right-0 bottom-0 left-0 h-[240px] bg-gradient-to-b to-80% lg:h-[200px]' />
    </div>
  );
}
