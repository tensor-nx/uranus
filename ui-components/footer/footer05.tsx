'use client';

import React from 'react';
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterXLine,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Divider from '@/components/ui/divider';
const linkGroups = [
  {
    title: 'Company',
    links: [
      { text: 'About us', href: '/' },
      { text: 'Careers', href: '/' },
      { text: 'Contact', href: '/' },
    ],
  },
  {
    title: 'Product',
    links: [
      { text: 'Features', href: '/' },
      { text: 'Pricing', href: '/' },
      { text: 'Integrations', href: '/' },
      { text: 'Changelog', href: '/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Blog', href: '/' },
      { text: 'Help center', href: '/' },
      { text: 'Community', href: '/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy policy', href: '/' },
      { text: 'Cookie preferences', href: '/' },
      { text: 'Data security', href: '/' },
    ],
  },
];

const PulseIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22'
    height='22'
    viewBox='0 0 22 22'
    fill='none'
    className='shrink-0'
  >
    <path
      d='M7.88333 7.88324L14.1167 1.6499H20.35V7.88324L14.1167 14.1166V7.88324H7.88333Z'
      className='fill-primary-base'
    />
    <path
      d='M14.1167 14.1166H20.35V20.3499H14.1167V14.1166Z'
      className='fill-primary-base'
    />
    <path
      d='M7.88333 7.88324L1.64999 14.1166V20.3499H7.88333L14.1167 14.1166H7.88333V7.88324Z'
      className='fill-primary-base'
    />
    <path
      d='M7.88333 7.88324H1.64999V1.6499H7.88333V7.88324Z'
      className='fill-primary-base'
    />
  </svg>
);

export default function Footer05() {
  return (
    <footer className='bg-bg-white-0 py-8 lg:py-26 w-full'>
      <div className='mx-auto max-w-7xl px-2.5 md:px-7'>
        <div className='bg-bg-weak-25 rounded-[28px] p-6 lg:rounded-[40px] lg:px-14 lg:py-12 xl:px-20'>
          <div className='flex flex-col gap-5 lg:gap-12'>
            <div className='flex flex-col gap-5 lg:flex-row lg:gap-12'>
              <div className='flex flex-col gap-5 lg:flex-1 lg:gap-7'>
                <Link href='/' className='flex items-center gap-1.5'>
                  <PulseIcon />
                  <span className='text-text-strong-950 text-[18px] leading-[24px] font-[500]'>
                    Pulse
                    <span className='text-text-soft-400'>™</span>
                  </span>
                </Link>

                <p className='text-label-sm text-text-soft-400'>
                  Smarter tools for modern finance teams.
                  <br />
                  <span className='text-text-sub-600'>
                    All rights reserved.
                  </span>
                </p>

                <div className='flex gap-2'>
                  <Link href='/'>
                    <Image
                      src='https://alignui.com/images/blocks/app-store-badges.svg'
                      alt='Download on the App Store'
                      width={90}
                      height={30}
                    />
                  </Link>
                  <Link href='/'>
                    <Image
                      src='https://alignui.com/images/blocks/google-play-badges.svg'
                      alt='Get it on Google Play'
                      width={102}
                      height={30}
                    />
                  </Link>
                </div>
              </div>

              <Divider.Root className='lg:hidden' />

              <div className='grid grid-cols-2 gap-x-4 gap-y-6 lg:flex lg:gap-12'>
                {linkGroups.map((group, i) => (
                  <React.Fragment key={group.title}>
                    {i > 0 && (
                      <div className='bg-stroke-soft-200 hidden w-px self-stretch lg:block' />
                    )}
                    <div className='flex flex-col gap-3'>
                      <h4 className='text-label-sm text-text-soft-400'>
                        {group.title}
                      </h4>
                      {group.links.map((link) => (
                        <Link
                          key={link.text}
                          href={link.href}
                          className='text-label-sm text-text-sub-600 hover:text-text-strong-950 transition-colors'
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <Divider.Root />

            <div className='flex items-center gap-3 lg:gap-4'>
              <div className='flex items-center gap-3 lg:flex-1 lg:gap-4'>
                <Link
                  href='/'
                  className='group flex items-center justify-center'
                >
                  <RiFacebookCircleFill className='text-text-soft-400 group-hover:text-text-strong-950/[0.64] size-5 transition-colors' />
                </Link>
                <Link
                  href='/'
                  className='group flex items-center justify-center'
                >
                  <RiInstagramFill className='text-text-soft-400 group-hover:text-text-strong-950/[0.64] size-5 transition-colors' />
                </Link>
                <Link
                  href='/'
                  className='group flex items-center justify-center'
                >
                  <RiTwitterXLine className='text-text-soft-400 group-hover:text-text-strong-950/[0.64] size-5 transition-colors' />
                </Link>
              </div>
              <p className='text-label-xs text-text-soft-400 flex-1 text-right lg:flex-initial lg:text-left'>
                2025 AlignUI © All rights reserved.
              </p>
              <div className='hidden flex-1 justify-end gap-4 lg:flex'>
                <Link
                  href='/'
                  className='text-label-xs text-text-soft-400 hover:text-text-strong-950 transition-colors'
                >
                  Privacy policy
                </Link>
                <Link
                  href='/'
                  className='text-label-xs text-text-soft-400 hover:text-text-strong-950 transition-colors'
                >
                  Terms of service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
