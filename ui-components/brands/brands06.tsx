'use client';

import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
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
];

export default function BrandSocial06() {
  return (
    <div className='bg-bg-white-0 w-full'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 pt-10 pb-8 md:gap-10 md:px-7 md:py-24'>
        <div className='flex flex-col gap-4 md:items-center'>
          <div className='flex flex-col gap-3 md:items-center'>
            <Badge.Root
              variant='stroke'
              className='text-label-sm text-text-sub-600 bg-bg-weak-50 h-7 w-fit !gap-1 rounded-[9px] pr-[10px] pl-[7px] normal-case ring-transparent'
            >
              <Badge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
              Brands & Social proof
            </Badge.Root>
            <h1 className='md:text-title-h3 text-title-h4 text-text-strong-950 font-[550] md:text-center'>
              Trusted by leading brands worldwide
            </h1>
          </div>
          <p className='text-paragraph-md text-text-sub-600 md:max-w-[528px] md:text-center'>
            Partnered with leading brands shaping the future of digital{' '}
            <span className='text-label-md'>collaboration</span> and{' '}
            <span className='text-label-md'>product innovation.</span>
          </p>
        </div>

        <div className='grid grid-cols-2 gap-3 md:mx-auto md:flex md:max-w-[1064px] md:flex-wrap md:justify-center md:gap-4'>
          {logos.map((logo, index) => (
            <div
              key={index}
              className='border-stroke-soft-200 bg-bg-white-0 flex h-20 w-full items-center justify-center gap-1.5 overflow-hidden rounded-2xl border px-8 py-5 md:w-[200px]'
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={106}
                height={24}
                className='h-6 w-auto dark:hidden'
              />
              <Image
                src={logo.darkSrc}
                alt={logo.alt}
                width={106}
                height={24}
                className='hidden h-6 w-auto dark:block'
              />
            </div>
          ))}
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
