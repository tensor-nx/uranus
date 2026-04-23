'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import Announcement01 from '@repo/registry/default/blocks/components/announcement-01.tsx';
import Header01 from '@repo/registry/default/blocks/components/navigation-01.tsx';
import { cn } from '@/utils/cn';
const brands = [
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-1.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-1-dark.svg',
    alt: 'Brand 1',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-2.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-2-dark.svg',
    alt: 'Brand 2',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-3.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-3-dark.svg',
    alt: 'Brand 3',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-4.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-4-dark.svg',
    alt: 'Brand 4',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-5.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-5-dark.svg',
    alt: 'Brand 5',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-6.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-6-dark.svg',
    alt: 'Brand 6',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-7.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-7-dark.svg',
    alt: 'Brand 7',
  },
];

export default function Hero01() {
  return (
    <div className='bg-bg-white-0 w-full'>
      <Announcement01
        variant='lighter'
        text='Multi-currency cards are now available for all users'
      />
      <Header01 announcement={true} />
      <div className='relative overflow-x-clip'>
        <div className='pointer-events-none z-10 lg:absolute lg:inset-0'>
          <div className='mx-auto h-full max-w-7xl px-6 lg:px-7'>
            <div className='flex h-full items-center pt-8 lg:pt-14'>
              <div className='pointer-events-auto flex w-full flex-col gap-6 lg:max-w-108 lg:gap-4 xl:max-w-121 xl:gap-6'>
                <div className='flex flex-col'>
                  <div className='rounded-10 bg-bg-weak-50 mb-3 flex w-fit items-center gap-2 py-1 pr-[9px] pl-1.5 lg:mb-4'>
                    <Badge.Root
                      variant='lighter'
                      color='blue'
                      className='bg-bg-white-0 text-primary-base shadow-complex-10 rounded-[5px] px-1.25'
                    >
                      NEW
                    </Badge.Root>
                    <span className='text-label-sm text-text-sub-600'>
                      Upgrade your banking now
                    </span>
                  </div>

                  <h1 className='2xl:text-title-h1 xl:text-title-h3 lg:text-title-h4 text-title-h4 text-text-strong-950 mb-4 !font-[550] lg:mb-4 xl:mb-4 2xl:mb-5'>
                    Earn on time, save with ease, track every dollar.
                  </h1>
                  <p className='text-paragraph-md text-text-sub-600'>
                    From invoicing to insights, Apex gives you complete control
                    over your finances —{' '}
                    <span className='text-label-md'>
                      so you can focus on growth.
                    </span>
                  </p>
                </div>
                <div className='flex gap-4'>
                  <Button.Root className='w-full cursor-pointer gap-2 rounded-[12px] sm:w-auto'>
                    Get started free
                    <Button.Icon
                      as={RiArrowRightUpLongLine}
                      className='text-static-white/[0.64] size-5'
                    />
                  </Button.Root>

                  <Button.Root
                    variant='neutral'
                    mode='stroke'
                    size='medium'
                    className='w-full cursor-pointer rounded-[12px] sm:w-auto'
                  >
                    Talk to sales
                  </Button.Root>
                </div>
              </div>
            </div>
            <div className='mt-8 flex lg:hidden'>
              <Image
                src='https://alignui.com/images/blocks/hero-1-image-1-mobile.png'
                alt='Hero 01'
                width={342}
                height={440}
                className='mx-auto h-auto w-full object-cover object-left-top sm:w-2/3'
              />
            </div>
          </div>
        </div>

        <div className='hidden justify-end pt-14 lg:flex relative'>
          <Image
            src='https://alignui.com/images/blocks/hero-1-image-1.png'
            alt='Hero 01'
            width={980}
            height={488}
            className='h-auto w-[52%]'
          />
          <div className='absolute bottom-0 right-0 w-[52%] h-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_100%)] dark:bg-[linear-gradient(180deg,rgba(23,23,23,0.00)_0%,#171717_100%)]'></div>
        </div>
      </div>
      <div className='border-stroke-soft-200 bg-bg-white-0 grid grid-cols-2 items-center border-t lg:flex lg:border-y lg:px-0 xl:px-27'>
        {brands.map((brand, index) => (
          <div
            key={brand.src}
            className={cn(
              'border-stroke-soft-200 flex w-full justify-center border-b py-7 lg:border-b-0',
              index === brands.length - 1 ? 'hidden lg:flex' : 'border-r',
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
        ))}
      </div>
    </div>
  );
}
