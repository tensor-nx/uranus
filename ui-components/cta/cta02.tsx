'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';

export default function Cta02() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='mx-auto flex max-w-7xl flex-col px-6 lg:items-center lg:px-7'>
        <Badge.Root
          variant='lighter'
          className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 normal-case'
        >
          Powered by real teamwork
        </Badge.Root>
        <div className='mb-8 flex flex-col gap-4'>
          <div className='text-title-h4 lg:text-title-h3 xl:text-title-h2 text-text-strong-950 !font-[550]'>
            Ready to take the next step?
          </div>
          <div className='text-text-sub-600 text-paragraph-md xl:text-paragraph-lg lg:text-center'>
            Upgrade your process with smart solutions..
          </div>
        </div>
        <Button.Root
          variant='primary'
          mode='filled'
          size='medium'
          className='shadow-complex-7 border-static-white/[0.24] w-fit cursor-pointer gap-1.5 rounded-xl border pr-4.5 pl-5 transition-all duration-300 hover:[background:linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_100%),#335CFF]'
        >
          Start your free trial
          <Button.Icon
            as={RiArrowRightUpLongLine}
            className='text-static-white/[0.64] size-5'
          />
        </Button.Root>
      </div>
    </div>
  );
}
