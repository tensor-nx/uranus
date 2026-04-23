'use client';

import { RiArrowRightUpLongLine, RiPlayMiniFill } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as FancyButton from '@/components/ui/fancy-button';
import Announcement01 from '@repo/registry/default/blocks/components/announcement-01.tsx';
import Header01 from '@repo/registry/default/blocks/components/navigation-01.tsx';
import { cn } from '@/utils/cn';
const avatars = [
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-1.png', alt: 'Avatar 1' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-2.png', alt: 'Avatar 2' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-3.png', alt: 'Avatar 3' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-4.png', alt: 'Avatar 4' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-5.png', alt: 'Avatar 5' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-6.png', alt: 'Avatar 6' },
];

const brands = [
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-1-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-1-400-dark.svg',
    alt: 'Synergy',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-2-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-2-400-dark.svg',
    alt: 'Horizon',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-4-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-4-400-dark.svg',
    alt: 'Phoenix',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-5-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-5-400-dark.svg',
    alt: 'Pulse',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-6-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-6-400-dark.svg',
    alt: 'Solaris',
  },
];

function AvatarStack() {
  return (
    <div className='flex items-start'>
      {avatars.map((item, index) => (
        <div
          key={item.src}
          className={cn(
            'border-bg-white-0 rounded-full border-[3px] bg-gray-200',
            index !== 0 && '-ml-2',
          )}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={20}
            height={20}
            className='size-5 mix-blend-luminosity'
          />
        </div>
      ))}
    </div>
  );
}

function Ratings() {
  return (
    <div className='flex flex-col gap-3 lg:items-end'>
      <AvatarStack />
      <span className='text-label-sm text-text-soft-400'>
        Trusted by <span className='text-text-sub-600'>200,000+</span> crypto
        traders
      </span>
    </div>
  );
}

function AppstoreInfo() {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-2'>
        <Image
          src='https://alignui.com/images/blocks/icon-app-store.svg'
          alt='App Store'
          width={20}
          height={20}
        />
        <span className='text-label-sm text-text-sub-600'>4.9/5 Appstore</span>
      </div>
      <span className='text-label-sm text-text-soft-400'>
        Over <span className='text-text-sub-600'>$500M</span> swapped securely
      </span>
    </div>
  );
}

export default function Hero05() {
  return (
    <div className='bg-bg-white-0 pb-5 lg:pb-16 w-full'>
      <Announcement01
        variant='lighter'
        text='Multi-currency cards are now available for all users'
      />
      <Header01 announcement={true} />

      <div className='mx-auto max-w-7xl px-6 pt-8 lg:px-7'>
        <div className='flex flex-col gap-4 md:items-center'>
          <div className='flex flex-col gap-3 md:items-center'>
            <div className='bg-bg-weak-50 lg:rounded-10 flex w-fit items-center gap-2 rounded-[9px] py-1 pr-2 pl-1.5 lg:pr-[9px]'>
              <Badge.Root
                variant='lighter'
                color='blue'
                className='bg-bg-white-0 text-text-sub-600 shadow-complex-10 rounded-[5px] px-1.25'
              >
                NEW
              </Badge.Root>
              <span className='text-label-sm text-text-sub-600'>
                All-in-one crypto dashboard
              </span>
              <RiArrowRightUpLongLine className='text-text-soft-400 size-4' />
            </div>

            <h1 className='text-title-h4 text-text-strong-950 xl:text-title-h3 2xl:text-title-h1 font-[550] md:text-center'>
              Your entire crypto portfolio,
              <br className='hidden lg:block' /> one smart dashboard
            </h1>
          </div>

          <p className='text-paragraph-md text-text-sub-600 md:text-center'>
            Your <span className='text-label-md'>tokens, swaps</span>, and{' '}
            <span className='text-label-md'>market</span> data — all in one
            secure app.
          </p>
        </div>

        <div className='mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-center md:gap-4 lg:mt-7'>
          <FancyButton.Root
            variant='primary'
            size='medium'
            className='shadow-complex-7 bg-primary-base cursor-pointer gap-2.5 rounded-xl px-5 after:opacity-0 hover:after:opacity-[.24]'
          >
            Start swapping
            <FancyButton.Icon
              as={RiArrowRightUpLongLine}
              className='text-static-white/[0.64] size-5'
            />
          </FancyButton.Root>

          <Button.Root
            variant='neutral'
            mode='lighter'
            size='medium'
            className='w-full cursor-pointer rounded-xl px-4.5 md:w-auto'
          >
            <Button.Icon
              as={RiPlayMiniFill}
              className='text-text-sub-600 group-hover:text-text-strong-950'
            />
            See how it works
          </Button.Root>
        </div>

        <div className='mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between lg:hidden'>
          <Ratings />
          <AppstoreInfo />
        </div>
      </div>

      <div className='mx-auto mt-12 max-w-7xl lg:mt-14 lg:px-7'>
        <div className='relative'>
          <div className='relative z-[5] flex items-start justify-center'>
            <div className='hidden flex-1 flex-col items-end gap-3 pt-11 pr-3.5 lg:flex xl:pr-12'>
              <Ratings />
            </div>

            <Image
              src='https://alignui.com/images/blocks/hero-5-image-1.png'
              alt='Crypto dashboard app'
              width={860}
              height={1400}
              className='pointer-events-none relative w-[320px] shrink-0 md:w-[380px] lg:w-[430px]'
            />

            <div className='hidden flex-1 flex-col items-start gap-3 pt-11 pl-3.5 lg:flex xl:pl-12'>
              <AppstoreInfo />
            </div>
          </div>

          <div className='from-bg-weak-25 to-bg-soft-200 absolute inset-x-0 bottom-0 h-[421px] overflow-hidden rounded-[40px] bg-gradient-to-b md:h-[480px] lg:h-[564px]'>
            <svg
              viewBox='0 0 714 564'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='text-primary-base pointer-events-none absolute bottom-[92px] left-1/2 aspect-[714/564] h-[308px] -translate-x-1/2 md:bottom-[60px] md:h-[380px] lg:bottom-0 lg:h-[564px]'
            >
              <path
                d='M460.946 103.781C462.599 105.431 462.599 108.105 460.946 109.755L7.22296 562.754C4.55751 565.415 1.04658e-06 563.531 1.02672e-06 559.767L0 365.179C-2.95574e-08 359.577 2.22887 354.204 6.1963 350.243L356.999 0L460.946 103.781Z'
                fill='currentColor'
              />
              <path
                d='M707.804 350.243C711.771 354.204 714 359.577 714 365.179L714 559.767C714 563.531 709.442 565.415 706.777 562.754L253.052 109.755C251.4 108.105 251.4 105.431 253.052 103.781L356.999 0L707.804 350.243Z'
                fill='currentColor'
              />
            </svg>

            <div className='absolute top-16 left-[69px] hidden items-start gap-12 xl:flex'>
              <p className='text-label-sm text-text-soft-400 w-[232px] text-right'>
                Track swaps, <span className='text-text-sub-600'>monitor</span>{' '}
                tokens, and stay{' '}
                <span className='text-text-sub-600'>connected</span> with your
                assets while on the move.
              </p>
              <div className='bg-stroke-soft-200 h-[121px] w-0.5 shrink-0' />
            </div>

            <div className='absolute top-16 right-[69px] hidden items-start gap-12 xl:flex'>
              <div className='bg-stroke-soft-200 h-[121px] w-0.5 shrink-0' />
              <p className='text-label-sm text-text-soft-400 w-[232px]'>
                Replace scattered{' '}
                <span className='text-text-sub-600'>wallets</span> with one{' '}
                <span className='text-text-sub-600'>mobile-first</span>{' '}
                dashboard <span className='text-text-sub-600'>built</span> for
                active crypto users.
              </p>
            </div>

            <div className='absolute bottom-8 left-8 hidden lg:block'>
              <Image
                src='https://alignui.com/images/blocks/app-store-badges.svg'
                alt='Download on the App Store'
                width={120}
                height={40}
              />
            </div>

            <div className='absolute right-8 bottom-8 hidden lg:block'>
              <Image
                src='https://alignui.com/images/blocks/google-play-badges.svg'
                alt='Get it on Google Play'
                width={136}
                height={40}
              />
            </div>
          </div>
        </div>

        <div className='no-scrollbar mt-5 flex items-center overflow-x-auto px-2 md:justify-center lg:mt-8 lg:overflow-visible lg:px-0'>
          {brands.map((brand) => (
            <div
              key={brand.src}
              className={cn(
                'flex h-16 shrink-0 items-center justify-center p-3',
                'w-[148px] lg:w-[156px]',
              )}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={106}
                height={24}
                className='h-6 w-auto dark:hidden'
              />
              <Image
                src={brand.darkSrc}
                alt={brand.alt}
                width={106}
                height={24}
                className='hidden h-6 w-auto dark:block'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
