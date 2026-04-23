'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as FancyButton from '@/components/ui/fancy-button';
import Announcement02 from '@repo/registry/default/blocks/components/announcement-02.tsx';
import Header02 from '@repo/registry/default/blocks/components/navigation-02.tsx';
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
    src: 'https://alignui.com/images/blocks/hero-1-brand-3-400.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-3-400-dark.svg',
    alt: 'Catalyst',
  },
];

const features = [
  'Track real-time balances',
  'Analyze spending trends',
  'Detect fraudulent activity',
];

const CheckIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='15'
    height='15'
    viewBox='0 0 15 15'
    fill='none'
    className='shrink-0'
  >
    <path
      d='M7.5 15C3.35775 15 0 11.6423 0 7.5C0 3.35775 3.35775 0 7.5 0C11.6423 0 15 3.35775 15 7.5C15 11.6423 11.6423 15 7.5 15ZM6.75225 10.5L12.0548 5.19675L10.9943 4.13625L6.75225 8.379L4.6305 6.25725L3.57 7.31775L6.75225 10.5Z'
      className='fill-primary-base'
    />
  </svg>
);

const imageWidthStyle = {
  width: 'calc(100vw - max(0px, (100vw - 80rem) / 2) - 1.75rem - 496px - 2rem)',
};

function HeroBadge() {
  return (
    <div className='rounded-10 bg-bg-weak-50 flex w-fit items-center gap-2 py-1 pr-[9px] pl-1.5'>
      <Badge.Root
        variant='lighter'
        color='blue'
        className='bg-bg-white-0 text-primary-base shadow-complex-10 rounded-[5px] px-1.25'
      >
        NEW
      </Badge.Root>
      <span className='text-label-sm text-text-sub-600'>
        Unified banking dashboard
      </span>
      <RiArrowRightUpLongLine className='text-text-soft-400 -ml-[2px] size-4' />
    </div>
  );
}

function FeaturesList({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {features.map((feature) => (
        <div key={feature} className='flex items-center gap-3'>
          <CheckIcon />
          <span className='text-label-md text-text-sub-600'>{feature}</span>
        </div>
      ))}
    </div>
  );
}

function OpenAccountButton({ className }: { className?: string }) {
  return (
    <FancyButton.Root
      variant='primary'
      size='medium'
      className={cn(
        'shadow-complex-7 bg-primary-base cursor-pointer gap-1.5 rounded-xl pr-3.5 pl-5 after:opacity-0 hover:after:opacity-[.24]',
        className,
      )}
    >
      Open your account
      <FancyButton.Icon
        as={RiArrowRightUpLongLine}
        className='text-static-white/[0.64] mx-0 size-5'
      />
    </FancyButton.Root>
  );
}

function AvatarStack() {
  return (
    <div className='flex items-center opacity-80 mix-blend-luminosity'>
      {avatars.map((avatar, index) => (
        <div
          key={avatar.src}
          className={cn(
            'border-stroke-white-0 rounded-full border-[3px] bg-red-200',
            index !== 0 && '-ml-2',
          )}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={20}
            height={20}
            className='size-5'
          />
        </div>
      ))}
    </div>
  );
}

function RatingsBlock() {
  return (
    <div className='flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-1'>
      <AvatarStack />
      <span className='text-label-sm text-text-soft-400'>
        <span className='text-text-disabled-300 hidden lg:inline'>— </span>
        trusted by 500+ finance teams worldwide
      </span>
    </div>
  );
}

function BrandsList({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <span className='text-label-sm text-text-soft-400'>
        Global solutions for modern banking
      </span>
      <div className='flex gap-8 lg:gap-10'>
        {brands.map((brand) => (
          <div key={brand.alt} className='flex items-center'>
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
  );
}

export default function Hero06() {
  return (
    <div className='bg-bg-white-0 w-full'>
      <Announcement02
        variant='lighter'
        text='Swap BTC, ETH, and more — now with zero fees!'
      />
      <Header02 announcement={true} />

      <div className='relative overflow-x-clip'>
        <div className='hidden lg:flex lg:min-h-[680px] lg:items-center lg:justify-end lg:py-16'>
          <div style={imageWidthStyle}>
            <Image
              src='https://alignui.com/images/blocks/hero-6-image.png'
              alt='Banking dashboard'
              width={1068}
              height={694}
              priority
              className='h-auto w-full dark:hidden'
            />
            <Image
              src='https://alignui.com/images/blocks/hero-6-image-dark.png'
              alt='Banking dashboard'
              width={1068}
              height={694}
              priority
              className='hidden h-auto w-full dark:block'
            />
          </div>
        </div>

        <div className='pointer-events-none lg:absolute lg:inset-0'>
          <div className='mx-auto h-full max-w-7xl px-6 lg:px-7'>
            <div className='pointer-events-auto flex h-full flex-col gap-8 py-8 lg:w-[496px] lg:gap-12 lg:py-16 lg:pb-18'>
              <div className='flex flex-col gap-6 lg:gap-8'>
                <div className='order-1 flex flex-col gap-4'>
                  <div className='flex flex-col gap-3 lg:gap-4'>
                    <HeroBadge />
                    <h1 className='text-title-h4 text-text-strong-950 lg:text-title-h3 xl:text-title-h1 font-[550]'>
                      Your banking control center.
                    </h1>
                  </div>
                  <p className='text-paragraph-md text-text-sub-600'>
                    From secure payments to account insights, all in one place.
                  </p>
                </div>

                <OpenAccountButton className='order-2 w-full lg:order-3 lg:w-fit' />

                <FeaturesList className='order-3 lg:order-2' />
              </div>

              <RatingsBlock />

              <BrandsList className='lg:mt-auto' />

              <div className='mx-[-8px] flex w-[calc(100%+16px)] justify-center lg:hidden'>
                <Image
                  src='https://alignui.com/images/blocks/hero-6-image-mobile.png'
                  alt='Banking dashboard'
                  width={326}
                  height={705}
                  priority
                  className='h-auto w-full sm:max-w-[480px] dark:hidden'
                />
                <Image
                  src='https://alignui.com/images/blocks/hero-6-image-mobile-dark.png'
                  alt='Banking dashboard'
                  width={326}
                  height={705}
                  priority
                  className='hidden h-auto w-full sm:max-w-[480px] dark:block'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
