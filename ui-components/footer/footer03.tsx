'use client';

import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterXLine,
} from '@remixicon/react';
import Link from '@repo/registry/next-link-mock';

import * as LinkButton from '@/components/ui/link-button';
const footerLinksData = {
  services: [
    { id: 'service1', href: '#', text: 'Campaign Management' },
    { id: 'service2', href: '#', text: 'Multi-channel Marketing' },
    { id: 'service3', href: '#', text: 'Lead Generation' },
  ],
  resources: [
    { id: 'resource1', href: '#', text: 'Blog' },
    { id: 'resource2', href: '#', text: 'Events' },
    { id: 'resource3', href: '#', text: 'Product demos' },
  ],
  solutions: [
    { id: 'solution1', href: '#', text: 'Sales Enablement' },
    { id: 'solution2', href: '#', text: 'Performance Analytics' },
    { id: 'solution3', href: '#', text: 'Conversion Tracking' },
  ],
  company: [
    { id: 'company1', href: '#', text: 'About Us' },
    { id: 'company2', href: '#', text: 'Careers' },
    { id: 'company3', href: '#', text: 'Contact' },
  ],
  legal: [
    { id: 'legal1', href: '#', text: 'Terms & Conditions' },
    { id: 'legal2', href: '#', text: 'Privacy Policy' },
    { id: 'legal3', href: '#', text: 'Cookie Preferences' },
  ],
};

const Logo = ({ className }: { className?: string }) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.025 1.5L1.5 7.025V12.975L7.025 18.5H12.975L18.5 12.975L15.525 10L18.5 7.025L12.975 1.5H7.025ZM7.025 1.5L15.525 10L7.025 18.5V1.5Z'
      fill='#A4A4A4'
    />
  </svg>
);

export default function Footer03() {
  return (
    <footer className='bg-bg-white-0 w-full'>
      <div className='mx-auto w-full max-w-6xl px-6 py-10 md:px-8 lg:py-20'>
        <div className='border-stroke-soft-200 mb-8 grid grid-cols-2 justify-between gap-x-6 gap-y-10 border-b pb-8 md:grid-cols-3 lg:mb-9 lg:flex lg:pb-9'>
          <div className='flex flex-col items-start gap-3'>
            <h3 className='text-label-sm text-text-soft-400'>Services</h3>
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
          <div className='flex flex-col items-start gap-3'>
            <h3 className='text-label-sm text-text-soft-400'>Resources</h3>
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
          <div className='flex flex-col items-start gap-3'>
            <h3 className='text-label-sm text-text-soft-400'>Solutions</h3>
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
          <div className='flex flex-col items-start gap-3'>
            <h3 className='text-label-sm text-text-soft-400'>Company</h3>
            {footerLinksData.company.map((link) => (
              <LinkButton.Root
                key={link.id}
                className='text-text-sub-600 text-label-sm h-auto cursor-pointer whitespace-break-spaces'
                asChild
              >
                <a href={link.href}>{link.text}</a>
              </LinkButton.Root>
            ))}
          </div>
          <div className='flex flex-col items-start gap-3'>
            <h3 className='text-label-sm text-text-soft-400'>Legal</h3>
            {footerLinksData.legal.map((link) => (
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
        <div className='flex items-center justify-between'>
          <div className='flex gap-3 lg:gap-4'>
            <Link href='/' className='flex'>
              <Logo className='text-text-soft-400 size-4 lg:size-5' />
            </Link>
            <div className='text-label-xs lg:text-paragraph-sm text-text-soft-400'>
              2025 AlignUI ©{' '}
              <strong className='text-label-xs lg:text-label-sm'>
                All rights reserved.
              </strong>
            </div>
          </div>
          <div className='flex gap-4'>
            <Link
              href='/'
              className='group flex size-4 items-center justify-center lg:size-5'
            >
              <RiFacebookCircleFill className='text-text-soft-400 group-hover:text-text-strong-950/[0.64] size-4 transition-all duration-300 lg:size-5' />
            </Link>
            <Link
              href='/'
              className='group flex size-4 items-center justify-center lg:size-5'
            >
              <RiInstagramFill className='text-text-soft-400 group-hover:text-text-strong-950/[0.64] size-4 transition-all duration-300 lg:size-5' />
            </Link>
            <Link
              href='/'
              className='group flex size-4 items-center justify-center lg:size-5'
            >
              <RiTwitterXLine className='text-text-soft-400 group-hover:text-text-strong-950/[0.64] size-4 transition-all duration-300 lg:size-5' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
