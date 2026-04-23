'use client';

import {
  RiArrowRightUpLongLine,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterXLine,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
const socialLinksData = [
  { id: 'facebook', href: '/', icon: RiFacebookCircleFill },
  { id: 'instagram', href: '/', icon: RiInstagramFill },
  { id: 'twitter', href: '/', icon: RiTwitterXLine },
];

const footerLinksData = {
  services: [
    { id: 'service1', href: '#', text: 'Personal Finance Tools' },
    { id: 'service2', href: '#', text: 'Multi-Currency Accounts' },
    { id: 'service3', href: '#', text: 'International Transfers' },
    { id: 'service4', href: '#', text: 'Expense Tracking' },
    { id: 'service5', href: '#', text: 'Bill Payments' },
  ],
  solutions: [
    { id: 'solution1', href: '#', text: 'Individuals' },
    { id: 'solution2', href: '#', text: 'Freelancers' },
    { id: 'solution3', href: '#', text: 'Remote Teams' },
    { id: 'solution4', href: '#', text: 'Small Businesses' },
  ],
  resources: [
    { id: 'resource1', href: '#', text: 'Privacy Policy' },
    { id: 'resource2', href: '#', text: 'Terms of Services' },
    { id: 'resource3', href: '#', text: 'Security' },
    { id: 'resource4', href: '#', text: 'Help Center' },
  ],
};

const Logo = ({ className }: { className?: string }) => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M14 9.33333L10.0333 7V2.33333L14 0L17.9667 2.33333V7L14 9.33333Z'
      className='fill-primary-base'
    />
    <path
      d='M21.9333 14L17.9667 11.6667V7L21.9333 4.66667L25.9 7V11.6667L21.9333 14Z'
      className='fill-primary-base'
    />
    <path
      d='M17.9667 21V16.3333L21.9333 14L25.9 16.3333V21L21.9333 23.3333L17.9667 21Z'
      className='fill-primary-base'
    />
    <path
      d='M10.0333 21L14 18.6667L17.9667 21V25.6667L14 28L10.0333 25.6667V21Z'
      className='fill-primary-base'
    />
    <path
      d='M6.06667 14L10.0333 16.3333V21L6.06667 23.3333L2.10001 21V16.3333L6.06667 14Z'
      className='fill-primary-base'
    />
    <path
      d='M6.06667 14L10.0333 11.6667V7L6.06667 4.66667L2.10001 7V11.6667L6.06667 14Z'
      className='fill-primary-base'
    />
  </svg>
);

export default function Footer01() {
  return (
    <footer className='mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pt-10 pb-5 md:px-7 lg:flex-row lg:gap-20 lg:pt-20 lg:pb-0'>
      <div className='flex w-full flex-1 flex-col lg:w-auto'>
        <div className='border-stroke-soft-200 mb-8 flex flex-col gap-6 border-b pb-8 lg:mb-0 lg:gap-8 lg:border-b-0 lg:pb-0'>
          <Link href='/' className='flex items-center gap-1.5'>
            <Logo className='text-information-base size-8' />
            <div className='text-title-h5 text-text-strong-950'>
              Apex <span className='text-text-soft-400 -ml-1.5'>™</span>
            </div>
          </Link>
          <div className='flex flex-col gap-5'>
            <div className='text-label-sm text-text-soft-400'>
              2025 AlignUl — All rights reserved
            </div>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              className='rounded-10 shadow-regular-xs w-fit cursor-pointer pl-3.5 focus:bg-transparent'
            >
              Get started free
              <Button.Icon
                as={RiArrowRightUpLongLine}
                className='text-text-sub-600/[0.64] group-hover:text-text-strong-950/[0.64] group-disabled:text-text-disabled-300 size-5 transition-all duration-300'
              />
            </Button.Root>
          </div>
          <div className='flex items-center gap-4'>
            {socialLinksData.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                className='border-stroke-soft-200 group hover:border-text-strong-950/[0.64] flex size-8 items-center justify-center rounded-full border duration-300'
              >
                <social.icon className='text-text-soft-400 group-hover:text-text-strong-950/[0.64] size-5 transition-all duration-300' />
              </Link>
            ))}
          </div>
        </div>
        <div className='mt-4.5 hidden lg:flex'>
          <Image
            src='https://alignui.com/images/blocks/apex-logo.png'
            alt='logo'
            width={100}
            height={100}
            className='-ml-15 h-27 w-auto dark:hidden'
          />
          <Image
            src='https://alignui.com/images/blocks/apex-logo-dark.png'
            alt='logo'
            width={100}
            height={100}
            className='hidden -ml-15 h-27 w-auto dark:block'
          />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:gap-20'>
        <div className='border-stroke-soft-200 mb-8 flex flex-col items-start gap-5 border-b pb-8 lg:mb-0 lg:border-b-0 lg:pb-0'>
          <div className='text-label-sm text-text-soft-400'>Services</div>
          {footerLinksData.services.map((link) => (
            <LinkButton.Root
              key={link.id}
              className='text-text-sub-600 text-label-sm h-auto cursor-pointer whitespace-break-spaces'
              asChild
            >
              <a href={link.href}>{link.text}</a>
            </LinkButton.Root>
          ))}
        </div>
        <div className='flex lg:gap-20'>
          <div className='border-stroke-soft-200 flex w-full flex-col items-start gap-5 border-r pr-10 lg:w-auto lg:border-r-0 lg:pr-0'>
            <div className='text-label-sm text-text-soft-400'>Solutions</div>
            {footerLinksData.solutions.map((link) => (
              <LinkButton.Root
                key={link.id}
                className='text-text-sub-600 text-label-sm h-auto cursor-pointer whitespace-break-spaces'
                asChild
              >
                <a href={link.href}>{link.text}</a>
              </LinkButton.Root>
            ))}
          </div>
          <div className='flex w-full flex-col items-start gap-5 pl-10 lg:w-auto lg:pl-0'>
            <div className='text-label-sm text-text-soft-400'>Resources</div>
            {footerLinksData.resources.map((link) => (
              <LinkButton.Root
                key={link.id}
                className='text-text-sub-600 text-label-sm h-auto cursor-pointer whitespace-break-spaces'
                asChild
              >
                <a href={link.href}>{link.text}</a>
              </LinkButton.Root>
            ))}
          </div>
        </div>
      </div>
      <div className='mx-auto mt-8 flex w-[calc(100%-48px)] lg:hidden'>
        <Image
          src='https://alignui.com/images/blocks/apex-logo-mobile.png'
          alt='logo'
          width={100}
          height={100}
          className='h-auto w-full'
        />
      </div>
    </footer>
  );
}
