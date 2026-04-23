'use client';

import { RiArrowRightUpLongLine, RiPlayMiniFill } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
const partnersData = [
  {
    id: 'partner1',
    href: '/',
    image: 'https://alignui.com/images/blocks/cta-3-image-1.svg',
    darkImage: 'https://alignui.com/images/blocks/cta-3-image-1-dark.svg',
    alt: 'Stripe',
  },
  {
    id: 'partner2',
    href: '/',
    image: 'https://alignui.com/images/blocks/cta-3-image-2.svg',
    darkImage: 'https://alignui.com/images/blocks/cta-3-image-2-dark.svg',
    alt: 'Notion',
  },
  {
    id: 'partner3',
    href: '/',
    image: 'https://alignui.com/images/blocks/cta-3-image-3.svg',
    darkImage: 'https://alignui.com/images/blocks/cta-3-image-3-dark.svg',
    alt: 'Slack',
  },
  {
    id: 'partner4',
    href: '/',
    image: 'https://alignui.com/images/blocks/cta-3-image-4.svg',
    darkImage: 'https://alignui.com/images/blocks/cta-3-image-4-dark.svg',
    alt: 'Linear',
  },
  {
    id: 'partner5',
    href: '/',
    image: 'https://alignui.com/images/blocks/cta-3-image-5.svg',
    darkImage: 'https://alignui.com/images/blocks/cta-3-image-5-dark.svg',
    alt: 'Figma',
  },
  {
    id: 'partner6',
    href: '/',
    image: 'https://alignui.com/images/blocks/cta-3-image-6.svg',
    darkImage: 'https://alignui.com/images/blocks/cta-3-image-6-dark.svg',
    alt: 'Framer',
  },
];

export default function Cta03() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:gap-16 lg:px-7'>
        <div className='mb-8 flex flex-1 flex-col lg:mb-0'>
          <Badge.Root
            variant='lighter'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 normal-case'
          >
            Driven by your vision
          </Badge.Root>
          <div className='mb-8 flex flex-col gap-4'>
            <div className='text-title-h4 xl:text-title-h2 text-text-strong-950 !font-[550]'>
              Explore what&apos;s next
            </div>
            <div className='text-text-sub-600 text-paragraph-md xl:text-paragraph-lg'>
              Transform your workflow with intuitive tools.
            </div>
          </div>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <Button.Root
              variant='primary'
              mode='filled'
              size='medium'
              className='shadow-complex-7 border-static-white/[0.24] w-full cursor-pointer gap-1.5 rounded-xl border pr-4.5 pl-5 transition-all duration-300 hover:[background:linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_100%),#335CFF] lg:w-fit'
            >
              Start your free trial
              <Button.Icon
                as={RiArrowRightUpLongLine}
                className='text-static-white/[0.64] size-5'
              />
            </Button.Root>
            <Button.Root
              variant='neutral'
              mode='lighter'
              size='medium'
              className='text-text-sub-600 group-hover:text-text-strong-950 w-full cursor-pointer gap-2 rounded-xl lg:w-fit'
            >
              <Button.Icon
                as={RiPlayMiniFill}
                className='text-text-sub-600 group-hover:text-text-strong-950 size-5 rounded-xl'
              />
              How it works?
            </Button.Root>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4'>
          {partnersData.map((partner) => (
            <Link
              key={partner.id}
              href={partner.href}
              className='shadow-custom-input rounded-20 hover:shadow-custom-sm flex h-25 w-full shrink-0 items-center justify-center transition-all duration-300 lg:h-20 lg:w-40 xl:h-25 xl:w-50'
            >
              <Image
                src={partner.image}
                alt={partner.alt}
                width={100}
                height={100}
                className='h-6 w-auto dark:hidden'
              />
              <Image
                src={partner.darkImage}
                alt={partner.alt}
                width={100}
                height={100}
                className='hidden h-6 w-auto dark:block'
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
