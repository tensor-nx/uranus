'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';

export default function Cta04() {
  return (
    <div className='bg-bg-white-0 relative flex flex-col gap-8 overflow-x-clip lg:flex-row lg:gap-0 w-full'>
      <div className='pointer-events-none z-10 lg:absolute lg:inset-0'>
        <div className='mx-auto h-full max-w-7xl px-6 lg:px-7'>
          <div className='pointer-events-auto flex h-full w-full flex-col pt-10 lg:w-100 lg:justify-center lg:pt-[70px] xl:pt-[116px]'>
            <Badge.Root
              variant='lighter'
              className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 normal-case'
            >
              Guided by your goals
            </Badge.Root>
            <div className='text-title-h4 xl:text-title-h3 text-text-strong-950 mb-8 !font-[550] lg:mb-10'>
              Take control of your finances — smarter, faster, better.
            </div>
            <div className='flex gap-4'>
              <Button.Root
                variant='primary'
                mode='filled'
                size='medium'
                className='shadow-complex-7 border-static-white/[0.24] w-1/2 cursor-pointer gap-1.5 rounded-xl border pr-4.5 pl-5 transition-all duration-300 hover:[background:linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_100%),#335CFF] lg:w-fit'
              >
                Get started for free
                <Button.Icon
                  as={RiArrowRightUpLongLine}
                  className='text-static-white/[0.64] size-5'
                />
              </Button.Root>
              <Button.Root
                variant='neutral'
                mode='lighter'
                size='medium'
                className='text-text-sub-600 group-hover:text-text-strong-950 w-1/2 cursor-pointer rounded-xl lg:w-fit'
              >
                Learn more
              </Button.Root>
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex w-full justify-end px-6 lg:px-0 lg:pt-16'>
        <Image
          src='https://alignui.com/images/blocks/cta-4-image-mobile.png'
          alt='cta'
          width={342}
          height={440}
          className='mx-auto block h-auto w-full object-cover object-left-top sm:w-2/3 lg:hidden'
        />
        <Image
          src='https://alignui.com/images/blocks/cta-4-image.png'
          alt='cta'
          width={916}
          height={432}
          className='hidden h-auto object-cover object-left-top lg:block lg:w-[58%] xl:w-[54%]'
        />
        <div className='hidden lg:block absolute bottom-0 right-0 lg:w-[58%] xl:w-[54%] h-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_100%)] dark:bg-[linear-gradient(180deg,rgba(23,23,23,0.00)_0%,#171717_90%)]'></div>
      </div>
    </div>
  );
}
