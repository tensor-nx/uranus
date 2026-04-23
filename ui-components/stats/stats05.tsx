'use client';

import Image from '@repo/registry/next-image-mock';

import * as StatusBadge from '@/components/ui/status-badge';

export default function StatsMetrics05() {
  return (
    <div className='bg-bg-white-0 px-6 py-10 pb-6 md:py-16 lg:px-7 lg:py-24 w-full'>
      <div className='mx-auto flex max-w-7xl flex-col'>
        <div className='mb-6 flex flex-col md:mb-10 md:items-center'>
          <StatusBadge.Root
            variant='light'
            className='text-label-sm text-text-sub-600 shadow-custom-input-2 bg-bg-white-0 mb-3 h-7 w-fit rounded-[9px] pr-2.5 pl-1.75 capitalize has-[>.dot]:gap-1 md:mx-auto md:mb-4'
          >
            <StatusBadge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
            Stats & Metric
          </StatusBadge.Root>
          <h2 className='text-title-h4 text-text-sub-600 font-[550] md:text-center'>
            Trusted by{' '}
            <span className='text-text-strong-950'>leading finance</span> teams{' '}
            <span className='text-text-strong-950'>worldwide</span>{' '}
          </h2>
        </div>
        <div className='mb-6 flex flex-col items-center justify-center gap-2 md:mb-10 md:flex-row md:gap-3'>
          <div className='bg-bg-weak-50 flex h-13 w-full items-center rounded-2xl px-5 md:h-14 md:w-fit md:px-6'>
            <p className='text-title-h6 lg:text-title-h5 text-text-soft-400 font-[550]'>
              <span className='text-text-strong-950'>120+</span> countries
            </p>
          </div>
          <div className='bg-bg-weak-50 flex h-13 w-full items-center rounded-2xl px-5 md:h-14 md:w-fit md:px-6'>
            <p className='text-title-h6 lg:text-title-h5 text-text-soft-400 font-[550]'>
              <span className='text-text-strong-950'>$50B+</span> processed
            </p>
          </div>
          <div className='bg-bg-weak-50 flex h-13 w-full items-center rounded-2xl px-5 md:h-14 md:w-fit md:px-6'>
            <p className='text-title-h6 lg:text-title-h5 text-text-soft-400 font-[550]'>
              <span className='text-text-strong-950'>15M+</span> transactions
            </p>
          </div>
        </div>
        <div className='mb-6 flex items-center gap-[27.5px] md:justify-center md:gap-8'>
          <div className="after:bg-stroke-soft-200 relative flex w-fit items-center gap-2 after:absolute after:top-1/2 after:right-[-14.55px] after:h-4 after:w-[1.6px] after:-translate-y-1/2 after:content-[''] md:after:right-[-16.8px]">
            <Image
              src='https://alignui.com/images/blocks/icon-google.svg'
              alt='google'
              width={18}
              height={18}
              className='size-4.5'
            />
            <p className='text-label-sm lg:text-label-md text-text-soft-400'>
              <span className='text-text-sub-600'>4.6</span> Google{' '}
            </p>
          </div>
          <div className="after:bg-stroke-soft-200 relative flex w-fit items-center gap-2 after:absolute after:top-1/2 after:right-[-14.55px] after:h-4 after:w-[1.6px] after:-translate-y-1/2 after:content-[''] md:after:right-[-16.8px]">
            <Image
              src='https://alignui.com/images/blocks/icon-trustpilot.svg'
              alt='google'
              width={18}
              height={18}
              className='size-4.5'
            />
            <p className='text-label-sm lg:text-label-md text-text-soft-400'>
              <span className='text-text-sub-600'>4.9</span> Trustpilot{' '}
            </p>
          </div>
          <div className='flex w-fit items-center gap-2'>
            <Image
              src='https://alignui.com/images/blocks/icon-tripAdvisor.svg'
              alt='google'
              width={18}
              height={18}
              className='size-4.5'
            />
            <p className='text-label-sm lg:text-label-md text-text-soft-400'>
              <span className='text-text-sub-600'>4.3</span> G2{' '}
            </p>
          </div>
        </div>
        <div className='text-label-md text-text-soft-400 md:mx-auto md:max-w-[378px] md:text-center'>
          Thousands of finance professionals streamline{' '}
          <span className='text-text-sub-600'>
            {' '}
            their workflows every day.{' '}
          </span>
        </div>
      </div>
    </div>
  );
}
