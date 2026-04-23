'use client';

import { useState } from 'react';
import { RiArrowRightUpLongLine, RiMailFill } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import Announcement07 from '@repo/registry/default/blocks/components/announcement-07.tsx';
import Header03 from '@repo/registry/default/blocks/components/navigation-03.tsx';
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

const tabs = [
  {
    id: 'performance',
    icon: 'https://alignui.com/images/blocks/hero-3-icon-4.svg',
    iconDark: 'https://alignui.com/images/blocks/hero-3-icon-4-dark.svg',
    iconActive: 'https://alignui.com/images/blocks/hero-3-icon-4-active.svg',
    iconActiveDark: 'https://alignui.com/images/blocks/hero-3-icon-4-active-dark.svg',
    image: 'https://alignui.com/images/blocks/hero-3-image-1.png',
    imageDark: 'https://alignui.com/images/blocks/hero-3-image-1-dark.png',
  },
  {
    id: 'profile',
    icon: 'https://alignui.com/images/blocks/hero-3-icon-5.svg',
    iconDark: 'https://alignui.com/images/blocks/hero-3-icon-5-dark.svg',
    iconActive: 'https://alignui.com/images/blocks/hero-3-icon-5-active.svg',
    iconActiveDark: 'https://alignui.com/images/blocks/hero-3-icon-5-active-dark.svg',
    image: 'https://alignui.com/images/blocks/hero-3-image-1.png',
    imageDark: 'https://alignui.com/images/blocks/hero-3-image-1-dark.png',
  },
  {
    id: 'settings',
    icon: 'https://alignui.com/images/blocks/hero-3-icon-6.svg',
    iconDark: 'https://alignui.com/images/blocks/hero-3-icon-6-dark.svg',
    iconActive: 'https://alignui.com/images/blocks/hero-3-icon-6-active.svg',
    iconActiveDark: 'https://alignui.com/images/blocks/hero-3-icon-6-active-dark.svg',
    image: 'https://alignui.com/images/blocks/hero-3-image-1.png',
    imageDark: 'https://alignui.com/images/blocks/hero-3-image-1-dark.png',
  },
  {
    id: 'switch',
    icon: 'https://alignui.com/images/blocks/hero-3-icon-7.svg',
    iconDark: 'https://alignui.com/images/blocks/hero-3-icon-7-dark.svg',
    iconActive: 'https://alignui.com/images/blocks/hero-3-icon-7-active.svg',
    iconActiveDark: 'https://alignui.com/images/blocks/hero-3-icon-7-active-dark.svg',
    image: 'https://alignui.com/images/blocks/hero-3-image-1.png',
    imageDark: 'https://alignui.com/images/blocks/hero-3-image-1-dark.png',
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

export default function Hero03() {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  return (
    <div className='bg-bg-white-0 w-full'>
      <Announcement07
        variant='lighter'
        text='Promote a live event, webinar, or demo in this area'
      />
      <Header03 announcement={true} />
      <div className='mt-8 lg:mt-16'>
        <div className='flex flex-col-reverse justify-center gap-8 md:flex-row md:gap-5 md:px-5 lg:gap-10 lg:px-6 xl:gap-[72px] xl:px-0'>
          <div className='flex flex-col gap-5 md:max-w-[472px] md:min-w-[380px] md:flex-row md:gap-4 lg:gap-6'>
            <div className='px-3 md:px-0'>
              <div className='flex gap-2.5 px-2 md:flex-col md:gap-3 md:px-0'>
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        'border-faded-lighter hover:border-stroke-soft-200 flex h-13 w-full max-w-[100px] cursor-pointer items-center justify-center rounded-2xl border transition-all duration-300 md:size-12 lg:size-14',
                      )}
                    >
                      <Image
                        src={isActive ? tab.iconActive : tab.icon}
                        alt={tab.id}
                        width={32}
                        height={32}
                        className='size-7 transition-all duration-300 dark:hidden md:size-6 lg:size-8'
                      />
                      <Image
                        src={isActive ? tab.iconActiveDark : tab.iconDark}
                        alt={tab.id}
                        width={32}
                        height={32}
                        className='hidden size-7 transition-all duration-300 dark:block md:size-6 lg:size-8'
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className='relative'>
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={cn(
                    'px-3 transition-all duration-500 md:px-0',
                    activeTab === tab.id
                      ? 'relative opacity-100'
                      : 'pointer-events-none absolute inset-0 opacity-0',
                  )}
                >
                  <Image
                    src={tab.image}
                    alt={tab.id}
                    width={392}
                    height={648}
                    className='mx-auto h-auto max-h-[440px] w-full max-w-[450px] rounded-t-[32px] object-cover object-top dark:hidden md:max-h-none md:max-w-none md:rounded-t-[36px]'
                  />
                  <Image
                    src={tab.imageDark}
                    alt={tab.id}
                    width={392}
                    height={648}
                    className='mx-auto hidden h-auto max-h-[440px] w-full max-w-[450px] rounded-t-[32px] object-cover object-top dark:block md:max-h-none md:max-w-none md:rounded-t-[36px]'
                  />
                </div>
              ))}
              <div className='absolute bottom-0 left-0 h-[120px] w-full bg-gradient-to-b from-transparent to-white md:hidden'></div>
            </div>
          </div>
          <div className='flex flex-col justify-between px-6 md:max-w-[496px] md:px-0'>
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

              <h1 className='2xl:text-title-h1 xl:text-title-h3 lg:text-title-h4 md:text-title-h5 text-title-h4 text-text-strong-950 mb-4 !font-[550] md:mb-3 lg:mb-5'>
                Unify your sales and marketing insights in one place
              </h1>

              <p className='lg:text-paragraph-md md:text-paragraph-sm text-paragraph-md text-text-sub-600'>
                Track product sales, campaign ROI, and customer behavior{' '}
                <span className='lg:text-label-md text-label-sm'>
                  across every channel — all in real time.{' '}
                </span>
              </p>

              <div className='mt-6 flex items-center gap-3 md:mt-5 md:gap-4 lg:mt-8'>
                <div className='border-stroke-soft-200 flex items-center gap-2 border-r pr-3 md:border-none md:pr-0'>
                  <Image
                    src='https://alignui.com/images/blocks/hero-3-icon-1.svg'
                    alt='google'
                    width={20}
                    height={20}
                  />
                  <p className='lg:text-label-md md:text-label-xs text-label-sm text-text-soft-400'>
                    <span className='text-text-sub-600'>4.6</span> Google{' '}
                  </p>
                </div>
                <div className='border-stroke-soft-200 flex items-center gap-2 border-r pr-3 md:border-none md:pr-0'>
                  <Image
                    src='https://alignui.com/images/blocks/hero-3-icon-2.svg'
                    alt='trustpilot'
                    width={20}
                    height={20}
                  />
                  <p className='lg:text-label-md md:text-label-xs text-label-sm text-text-soft-400'>
                    <span className='text-text-sub-600'>4.9</span> Trustpilot{' '}
                  </p>
                </div>
                <div className='flex items-center gap-2'>
                  <Image
                    src='https://alignui.com/images/blocks/hero-3-icon-3.svg'
                    alt='g2'
                    width={20}
                    height={20}
                  />
                  <p className='lg:text-label-md md:text-label-xs text-label-sm text-text-soft-400'>
                    <span className='text-text-sub-600'>4.3</span> G2{' '}
                  </p>
                </div>
              </div>

              <div className='mt-6 md:mt-4 lg:mt-8'>
                <div className='flex max-w-[420px] flex-col gap-2'>
                  <Label.Root
                    htmlFor='email-hero-3'
                    className='text-text-sub-600 text-label-sm gap-1'
                  >
                    Enter email address{' '}
                    <span className='text-paragraph-sm text-text-soft-400'>
                      {' '}
                      <span className='text-text-disabled-300'>—</span> no
                      credit card required.
                    </span>
                  </Label.Root>
                  <Input.Root className='shadow-complex-4 rounded-xl'>
                    <Input.Wrapper>
                      <Input.Icon as={RiMailFill} />
                      <Input.Input
                        id='email-hero-3'
                        type='email'
                        placeholder='hello@alignui.com'
                      />
                    </Input.Wrapper>
                  </Input.Root>
                </div>
              </div>

              <div className='mt-4 flex gap-3 lg:mt-6'>
                <FancyButton.Root
                  variant='primary'
                  size='medium'
                  className='gap-2 rounded-xl shadow-complex-7 after:content-none'
                >
                  Start for free
                  <FancyButton.Icon
                    as={RiArrowRightUpLongLine}
                    className='text-static-white/[0.64] size-5'
                  />
                </FancyButton.Root>

                <Button.Root
                  variant='neutral'
                  mode='lighter'
                  size='medium'
                  className='w-full cursor-pointer rounded-[12px] sm:w-auto'
                >
                  Talk to sales
                </Button.Root>
              </div>
            </div>
            <div className='mt-6 flex flex-col gap-y-3 md:mt-4 md:mb-8 md:flex-row md:items-center lg:mt-6'>
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
                  rated 4.8/5 by 200+ happy customers
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='border-stroke-soft-200 border-t border-b lg:border-b-0'>
          <div className='mx-auto max-w-7xl lg:px-7'>
            <div className='bg-bg-white-0 no-scrollbar flex items-center overflow-x-auto lg:overflow-visible'>
              {brands.map((brand, index) => (
                <div
                  key={brand.src}
                  className='flex shrink-0 items-center lg:w-full lg:shrink'
                >
                  <div className='flex w-full items-center justify-center px-5 py-5 lg:px-0 lg:py-7'>
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
                    <div className='bg-stroke-soft-200 h-[38px] w-px shrink-0' />
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
