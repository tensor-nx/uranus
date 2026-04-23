'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import Announcement01 from '@repo/registry/default/blocks/components/announcement-01.tsx';
import Header04 from '@repo/registry/default/blocks/components/navigation-04.tsx';
import { cn } from '@/utils/cn';
const avatar = [
  {
    src: 'https://alignui.com/images/blocks/hero-3-avatar-1.png',
    alt: ' Avatar 1',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-3-avatar-2.png',
    alt: ' Avatar 2',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-3-avatar-3.png',
    alt: ' Avatar 3',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-3-avatar-4.png',
    alt: ' Avatar 4',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-3-avatar-5.png',
    alt: ' Avatar 5',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-3-avatar-6.png',
    alt: ' Avatar 6',
  },
];

const brands = [
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-1-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-1-400-dark.svg',
    alt: 'Brand 1',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-2-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-2-400-dark.svg',
    alt: 'Brand 2',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-3-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-3-400-dark.svg',
    alt: 'Brand 3',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-4-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-4-400-dark.svg',
    alt: 'Brand 4',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-5-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-5-400-dark.svg',
    alt: 'Brand 5',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-6-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-6-400-dark.svg',
    alt: 'Brand 6',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-7-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-7-400-dark.svg',
    alt: 'Brand 7',
  },
];

const CheckIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='size-4 shrink-0'
  >
    <path
      d='M12 21C7.0293 21 3 16.9707 3 12C3 7.0293 7.0293 3 12 3C16.9707 3 21 7.0293 21 12C21 16.9707 16.9707 21 12 21ZM11.1027 15.6L17.4657 9.2361L16.1931 7.9635L11.1027 13.0548L8.5566 10.5087L7.284 11.7813L11.1027 15.6Z'
      className='fill-primary-base'
    />
  </svg>
);

export default function Hero04() {
  return (
    <div className='bg-bg-white-0 w-full'>
      <Announcement01
        variant='lighter'
        text='Promote a live event, webinar, or demo in this area'
      />
      <Header04 announcement={true} />
      <div className='mt-8 md:mt-18'>
        <div className='mb-8 flex flex-col justify-center gap-8 md:mb-18 md:flex-row md:gap-10 md:px-6 xl:gap-20'>
          <div className='border-stroke-soft-200 relative flex flex-col justify-between px-6 md:max-w-[520px] md:px-0 lg:border-l lg:pl-10 xl:max-w-[604px] xl:pl-20'>
            <div className='bg-primary-base absolute top-[44px] -left-0.25 z-10 hidden h-36 w-0.25 rounded-full lg:flex'></div>
            <div className='flex flex-col'>
              <div className='rounded-10 bg-bg-weak-50 mb-3 flex w-fit items-center gap-2 py-1 pr-[9px] pl-1.5 md:mb-4'>
                <Badge.Root
                  variant='lighter'
                  color='blue'
                  className='bg-bg-white-0 text-primary-base shadow-complex-10 rounded-[5px] px-1.25'
                >
                  NEW
                </Badge.Root>
                <span className='text-label-sm text-text-sub-600'>
                  All-in-one analytics for growth
                </span>
              </div>

              <h1 className='2xl:text-title-h1 xl:text-title-h3 lg:text-title-h4 md:text-title-h5 text-title-h4 text-text-strong-950 mb-4 !font-[550] md:mb-3 lg:mb-6'>
                Track your finances with live analytics in one place
              </h1>

              <p className='lg:text-paragraph-md md:text-paragraph-sm text-paragraph-md text-text-sub-600'>
                Monitor income, forecast trends, and categorize expenses{' '}
                <span className='lg:text-label-md text-label-sm'>
                  across every account — all in real time.
                </span>
              </p>

              <div className='mt-6 flex flex-col gap-4 md:mt-4 md:gap-3 lg:mt-6 lg:gap-4'>
                <div className='flex items-center gap-2.5'>
                  <CheckIcon />
                  <p className='lg:text-label-md md:text-label-sm text-label-md text-text-sub-600'>
                    View real-time cash flow
                  </p>
                </div>
                <div className='flex items-center gap-2.5'>
                  <CheckIcon />
                  <p className='lg:text-label-md md:text-label-sm text-label-md text-text-sub-600'>
                    Compare monthly expenses
                  </p>
                </div>
                <div className='flex items-center gap-2.5'>
                  <CheckIcon />
                  <p className='lg:text-label-md md:text-label-sm text-label-md text-text-sub-600'>
                    Identify high-risk categories
                  </p>
                </div>
              </div>

              <div className='mt-6 flex flex-col gap-3 md:mt-4 md:flex-row lg:mt-8'>
                <Button.Root className='w-full cursor-pointer gap-2 rounded-[12px] sm:w-auto'>
                  Start tracking free
                  <Button.Icon
                    as={RiArrowRightUpLongLine}
                    className='text-static-white/[0.64] size-5'
                  />
                </Button.Root>

                <Button.Root
                  variant='neutral'
                  mode='lighter'
                  size='medium'
                  className='w-full cursor-pointer rounded-[12px] sm:w-auto'
                >
                  Talk to finance team
                </Button.Root>
              </div>
            </div>
            <div className='mt-6 flex flex-col gap-y-3 md:mt-4 md:flex-row md:items-center lg:mt-6'>
              <div className='flex items-center opacity-80 mix-blend-luminosity'>
                {avatar.map((item, index) => (
                  <div
                    key={item.src}
                    className={cn(
                      'border-stroke-white-0 rounded-full border-[3px] bg-red-200',
                      index !== 0 && '-ml-2',
                    )}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={20}
                      height={20}
                      className='size-5'
                    />
                  </div>
                ))}
              </div>
              <div className='ml-1 flex'>
                <span className='lg:text-label-sm text-label-2xs text-text-soft-400'>
                  {' '}
                  <span className='text-text-disabled-300 hidden md:inline'>
                    —
                  </span>{' '}
                  rated 4.8/5 by 200+ SMB founders
                </span>
              </div>
            </div>
          </div>
          <div className='px-4 md:max-w-[560px] md:px-0'>
            <Image
              src='https://alignui.com/images/blocks/hero-4-image-1.png'
              alt='hero'
              width={560}
              height={600}
              className='hidden h-auto w-full md:block'
            />
            <Image
              src='https://alignui.com/images/blocks/hero-4-image-1-mobile.png'
              alt='hero'
              width={358}
              height={448}
              className='mx-auto block h-auto w-full max-w-[400px] md:hidden'
            />
          </div>
        </div>
        <div className='border-stroke-soft-200 border-t border-b'>
          <div className='lg:px-7 xl:px-27'>
            <div className='bg-bg-white-0 no-scrollbar flex items-center overflow-x-auto lg:overflow-visible'>
              {brands.map((brand, index) => (
                <div
                  key={brand.src}
                  className='flex shrink-0 items-center lg:w-full lg:shrink'
                >
                  <div
                    className={cn(
                      'border-stroke-soft-200 flex w-full items-center justify-center px-5 py-5 lg:px-0 lg:py-7',
                      brand.src === brands[brands.length - 1].src
                        ? 'lg:border-r-0'
                        : 'lg:border-r',
                    )}
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={106}
                      height={24}
                      className='h-6 w-auto dark:hidden lg:h-5 xl:h-6'
                    />
                    <Image
                      src={brand.darkSrc}
                      alt={brand.alt}
                      width={106}
                      height={24}
                      className='hidden h-6 w-auto dark:block lg:h-5 xl:h-6'
                    />
                  </div>
                  {index !== brands.length - 1 && (
                    <div className='bg-stroke-soft-200 h-[38px] w-px shrink-0 lg:hidden' />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
