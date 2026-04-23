'use client';

import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';

import 'swiper/css';
const logos = [
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-1.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-1-dark.svg',
    alt: 'Synergy',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-4.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-4-dark.svg',
    alt: 'Apex',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-3.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-3-dark.svg',
    alt: 'Horizon',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-2.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-2-dark.svg',
    alt: 'Catalyst',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-5.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-5-dark.svg',
    alt: 'Phoenix',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-6.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-6-dark.svg',
    alt: 'Pulse',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-7.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-7-dark.svg',
    alt: 'Solaris',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-8.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-8-dark.svg',
    alt: 'Aurora',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-1.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-1-dark.svg',
    alt: 'Synergy',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-4.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-4-dark.svg',
    alt: 'Apex',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-3.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-3-dark.svg',
    alt: 'Horizon',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-2.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-2-dark.svg',
    alt: 'Catalyst',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-5.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-5-dark.svg',
    alt: 'Phoenix',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-6.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-6-dark.svg',
    alt: 'Pulse',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-7.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-7-dark.svg',
    alt: 'Solaris',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-8.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-8-dark.svg',
    alt: 'Aurora',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-1.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-1-dark.svg',
    alt: 'Synergy',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-4.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-4-dark.svg',
    alt: 'Apex',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-3.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-3-dark.svg',
    alt: 'Horizon',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-2.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-2-dark.svg',
    alt: 'Catalyst',
  },
];

export default function BrandSocial05() {
  return (
    <div className='bg-bg-white-0 w-full'>
      <div className='mx-auto flex w-full max-w-[1032px] flex-col gap-6 px-6 py-10 pb-8 md:gap-12 md:px-10 md:py-16 lg:py-24'>
        <div className='flex flex-col md:items-center'>
          <Badge.Root
            variant='stroke'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit !gap-1 rounded-[9px] pr-[10px] pl-[7px] normal-case ring-transparent'
          >
            <Badge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
            Brands & Social proof
          </Badge.Root>
          <h1 className='md:text-title-h3 text-title-h4 text-text-strong-950 mb-4 font-[550] md:text-center'>
            Built for brands that deliver
          </h1>
          <p className='text-paragraph-md text-text-sub-600 max-w-[528px] md:text-center'>
            Trusted by modern organizations that turn complexity into clarity
            through connected systems.
          </p>
        </div>
        <div className='grid flex-1 grid-cols-2 gap-2 md:grid-cols-5'>
          {logos.map((logo, index) => {
            return (
              <div
                key={index}
                className={`bg-bg-weak-25 h-20 flex-1 items-center justify-center gap-1.5 rounded-2xl p-3 ${
                  index >= 10 ? 'hidden md:flex' : 'flex'
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={106}
                  height={24}
                  className='h-6 w-auto md:h-5 lg:h-6 dark:hidden'
                />
                <Image
                  src={logo.darkSrc}
                  alt={logo.alt}
                  width={106}
                  height={24}
                  className='hidden h-6 w-auto md:h-5 lg:h-6 dark:block'
                />
              </div>
            );
          })}
        </div>

        <div className='text-paragraph-sm text-text-soft-400 md:mx-auto md:max-w-[404px] md:text-center'>
          Start building trust by showcasing the partners <br />
          <span className='text-label-sm text-text-sub-600'>
            that power your success.
          </span>
        </div>
      </div>
    </div>
  );
}
