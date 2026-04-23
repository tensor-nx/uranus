'use client';

import { RiMailLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
const footerLinksData = {
  product: [
    { id: 'product1', href: '#', text: 'Overview' },
    { id: 'product2', href: '#', text: 'Time tracking' },
    { id: 'product3', href: '#', text: 'Smart scheduling' },
    { id: 'product4', href: '#', text: 'Reports & insights' },
    { id: 'product5', href: '#', text: 'Platform security' },
    { id: 'product6', href: '#', text: 'API documentation' },
  ],
  userCases: [
    { id: 'usercase1', href: '#', text: 'For HR teams' },
    { id: 'usercase2', href: '#', text: 'For People Ops' },
    { id: 'usercase3', href: '#', text: 'For Startups' },
    { id: 'usercase4', href: '#', text: 'For Remote teams' },
    { id: 'usercase5', href: '#', text: 'Employee wellbeing' },
    { id: 'usercase6', href: '#', text: 'Time-off management' },
  ],
  resources: [
    { id: 'resource1', href: '#', text: 'Blog' },
    { id: 'resource2', href: '#', text: 'Help Center' },
    { id: 'resource3', href: '#', text: 'Community' },
    { id: 'resource4', href: '#', text: 'Product Updates' },
  ],
  company: [
    { id: 'company1', href: '#', text: 'About' },
    { id: 'company2', href: '#', text: 'Careers' },
    { id: 'company3', href: '#', text: 'Contact' },
    { id: 'company4', href: '#', text: 'Newsletter' },
  ],
  tools: [
    { id: 'tool1', href: '#', text: 'Daily work hours' },
    { id: 'tool2', href: '#', text: 'Attendance tracking' },
    { id: 'tool3', href: '#', text: 'Team availability' },
    { id: 'tool4', href: '#', text: 'Shift scheduling' },
  ],
  features: [
    { id: 'feature1', href: '#', text: 'One-click approvals' },
    { id: 'feature2', href: '#', text: 'Smart reminders' },
    { id: 'feature3', href: '#', text: 'Custom reports' },
    { id: 'feature4', href: '#', text: 'Team insights' },
  ],
  support: [
    { id: 'support1', href: '#', text: 'Getting started' },
    { id: 'support2', href: '#', text: 'Troubleshooting' },
    { id: 'support3', href: '#', text: 'Feature requests' },
    { id: 'support4', href: '#', text: 'System status' },
    { id: 'support5', href: '#', text: 'Contact support' },
  ],
  legal: [
    { id: 'legal1', href: '#', text: 'Cookie preferences' },
    { id: 'legal2', href: '#', text: 'Privacy policy' },
    { id: 'legal3', href: '#', text: 'Terms of use' },
  ],
};

const languagesData = [
  { id: 'lang1', text: 'English (US)' },
  { id: 'lang2', text: 'English (UK)' },
  { id: 'lang3', text: 'Deutsch' },
];

const bottomLegalLinksData = [
  { id: 'bottomlegal1', href: '#', text: 'Cookie preferences' },
  { id: 'bottomlegal2', href: '#', text: 'Privacy policy' },
  { id: 'bottomlegal3', href: '#', text: 'Terms of service' },
];

const Logo = ({ className }: { className?: string }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 1.80005H22.2V12L12 1.80005Z' fill='#7D52F4' />
    <path
      d='M12 12V1.80005H6.89999L1.79999 6.90005V12V22.2H12H17.1L22.2 17.1V12H12ZM12 12V22.2L1.79999 12H12Z'
      fill='#7D52F4'
    />
  </svg>
);

export default function Footer02() {
  return (
    <footer className='bg-bg-white-0 w-full'>
      <div className='mx-auto w-full max-w-7xl rounded-t-[28px] px-6 pt-10 lg:rounded-[0px] lg:px-7 xl:pt-20'>
        <div className='mb-8 flex flex-col lg:flex-row lg:gap-10 xl:mb-12 2xl:gap-20'>
          <div className='hidden flex-col items-start gap-8 lg:flex lg:min-w-40 xl:min-w-56 xl:gap-12'>
            <div className='flex flex-col items-start gap-2.5'>
              <h3 className='text-label-sm text-text-soft-400'>Product</h3>
              {footerLinksData.product.map((link) => (
                <LinkButton.Root
                  key={link.id}
                  className='text-text-strong-950 text-label-sm xl:text-label-md hover:text-text-strong-950/80 h-auto cursor-pointer whitespace-break-spaces'
                  asChild
                >
                  <a href={link.href}>{link.text}</a>
                </LinkButton.Root>
              ))}
            </div>
            <div className='flex flex-col items-start gap-2.5'>
              <h3 className='text-label-sm text-text-soft-400'>User cases</h3>
              {footerLinksData.userCases.map((link) => (
                <LinkButton.Root
                  key={link.id}
                  className='text-text-strong-950 text-label-sm xl:text-label-md hover:text-text-strong-950/80 h-auto cursor-pointer whitespace-break-spaces'
                  asChild
                >
                  <a href={link.href}>{link.text}</a>
                </LinkButton.Root>
              ))}
            </div>
          </div>
          <div className='hidden flex-col items-start gap-8 lg:flex lg:min-w-40 xl:min-w-56 xl:gap-12'>
            <div className='flex flex-col items-start gap-2.5'>
              <h3 className='text-label-sm text-text-soft-400'>Resources</h3>
              {footerLinksData.resources.map((link) => (
                <LinkButton.Root
                  key={link.id}
                  className='text-text-strong-950 text-label-sm xl:text-label-md hover:text-text-strong-950/80 h-auto cursor-pointer whitespace-break-spaces'
                  asChild
                >
                  <a href={link.href}>{link.text}</a>
                </LinkButton.Root>
              ))}
            </div>
            <div className='flex flex-col items-start gap-2.5'>
              <h3 className='text-label-sm text-text-soft-400'>Company</h3>
              {footerLinksData.company.map((link) => (
                <LinkButton.Root
                  key={link.id}
                  className='text-text-strong-950 text-label-sm xl:text-label-md hover:text-text-strong-950/80 h-auto cursor-pointer whitespace-break-spaces'
                  asChild
                >
                  <a href={link.href}>{link.text}</a>
                </LinkButton.Root>
              ))}
            </div>
            <div className='flex flex-col items-start gap-2.5'>
              <h3 className='text-label-sm text-text-soft-400'>Tools</h3>
              {footerLinksData.tools.map((link) => (
                <LinkButton.Root
                  key={link.id}
                  className='text-text-strong-950 text-label-sm xl:text-label-md hover:text-text-strong-950/80 h-auto cursor-pointer whitespace-break-spaces'
                  asChild
                >
                  <a href={link.href}>{link.text}</a>
                </LinkButton.Root>
              ))}
            </div>
          </div>
          <div className='hidden flex-col items-start gap-8 lg:flex lg:min-w-40 xl:min-w-56 xl:gap-12'>
            <div className='flex flex-col items-start gap-2.5'>
              <h3 className='text-label-sm text-text-soft-400'>Features</h3>
              {footerLinksData.features.map((link) => (
                <LinkButton.Root
                  key={link.id}
                  className='text-text-strong-950 text-label-sm xl:text-label-md hover:text-text-strong-950/80 h-auto cursor-pointer whitespace-break-spaces'
                  asChild
                >
                  <a href={link.href}>{link.text}</a>
                </LinkButton.Root>
              ))}
            </div>
            <div className='flex flex-col items-start gap-2.5'>
              <h3 className='text-label-sm text-text-soft-400'>Support</h3>
              {footerLinksData.support.map((link) => (
                <LinkButton.Root
                  key={link.id}
                  className='text-text-strong-950 text-label-sm xl:text-label-md hover:text-text-strong-950/80 h-auto cursor-pointer whitespace-break-spaces'
                  asChild
                >
                  <a href={link.href}>{link.text}</a>
                </LinkButton.Root>
              ))}
            </div>
            <div className='flex flex-col items-start gap-2.5'>
              <h3 className='text-label-sm text-text-soft-400'>Legal</h3>
              {footerLinksData.legal.map((link) => (
                <LinkButton.Root
                  key={link.id}
                  className='text-text-strong-950 text-label-sm xl:text-label-md hover:text-text-strong-950/80 h-auto cursor-pointer whitespace-break-spaces'
                  asChild
                >
                  <a href={link.href}>{link.text}</a>
                </LinkButton.Root>
              ))}
            </div>
          </div>
          <div className='mb-8 flex flex-1 flex-col items-start gap-8 lg:mb-0 xl:gap-12'>
            <div className='flex w-full flex-col items-start gap-4 lg:w-auto xl:gap-6'>
              <div className='flex flex-col gap-2'>
                <div className='text-label-md text-text-strong-950'>
                  Workforce Insights newsletter
                </div>
                <div className='text-text-sub-600 lg:text-text-soft-400 text-label-sm'>
                  Get tips on productivity, time tracking, and smarter people
                  management.
                </div>
              </div>
              <div className='flex w-full flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                  <Label.Root
                    htmlFor='email'
                    className='text-text-sub-600 text-label-sm'
                  >
                    Email Address
                  </Label.Root>
                  <Input.Root className='shadow-custom-input rounded-[12px]'>
                    <Input.Wrapper>
                      <Input.Icon as={RiMailLine} />
                      <Input.Input
                        id='email'
                        type='email'
                        placeholder='hello@alignui.com'
                      />
                    </Input.Wrapper>
                  </Input.Root>
                </div>
                <Button.Root
                  variant='primary'
                  mode='filled'
                  className='rounded-10 w-full cursor-pointer'
                >
                  Subscribe
                </Button.Root>
              </div>
            </div>
            <div className='hidden flex-col items-start gap-2.5 lg:flex'>
              <h3 className='text-label-sm text-text-soft-400'>
                Choose your language
              </h3>
              {languagesData.map((lang) => (
                <LinkButton.Root
                  key={lang.id}
                  className='text-label-sm xl:text-label-md text-text-strong-950 hover:text-text-strong-950/80 cursor-pointer'
                >
                  {lang.text}
                </LinkButton.Root>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-8 lg:hidden'>
            <div className='flex gap-6'>
              <div className='flex w-full flex-col items-start gap-2.5'>
                <h3 className='text-label-sm text-text-sub-600'>Product</h3>
                {footerLinksData.product.map((link) => (
                  <LinkButton.Root
                    key={link.id}
                    className='text-text-soft-400 text-label-sm h-auto whitespace-break-spaces'
                    asChild
                  >
                    <a href={link.href}>{link.text}</a>
                  </LinkButton.Root>
                ))}
              </div>
              <div className='flex w-full flex-col items-start gap-2.5'>
                <h3 className='text-label-sm text-text-sub-600'>User cases</h3>
                {footerLinksData.userCases.map((link) => (
                  <LinkButton.Root
                    key={link.id}
                    className='text-text-soft-400 text-label-sm h-auto whitespace-break-spaces'
                    asChild
                  >
                    <a href={link.href}>{link.text}</a>
                  </LinkButton.Root>
                ))}
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='flex w-full flex-col items-start gap-2.5'>
                <h3 className='text-label-sm text-text-sub-600'>Resources</h3>
                {footerLinksData.resources.map((link) => (
                  <LinkButton.Root
                    key={link.id}
                    className='text-text-soft-400 text-label-sm h-auto whitespace-break-spaces'
                    asChild
                  >
                    <a href={link.href}>{link.text}</a>
                  </LinkButton.Root>
                ))}
              </div>
              <div className='flex w-full flex-col items-start gap-2.5'>
                <h3 className='text-label-sm text-text-sub-600'>Company</h3>
                {footerLinksData.company.map((link) => (
                  <LinkButton.Root
                    key={link.id}
                    className='text-text-soft-400 text-label-sm h-auto whitespace-break-spaces'
                    asChild
                  >
                    <a href={link.href}>{link.text}</a>
                  </LinkButton.Root>
                ))}
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='flex w-full flex-col items-start gap-2.5'>
                <h3 className='text-label-sm text-text-sub-600'>Tools</h3>
                {footerLinksData.tools.map((link) => (
                  <LinkButton.Root
                    key={link.id}
                    className='text-text-soft-400 text-label-sm h-auto whitespace-break-spaces'
                    asChild
                  >
                    <a href={link.href}>{link.text}</a>
                  </LinkButton.Root>
                ))}
              </div>
              <div className='flex w-full flex-col items-start gap-2.5'>
                <h3 className='text-label-sm text-text-sub-600'>Features</h3>
                {footerLinksData.features.map((link) => (
                  <LinkButton.Root
                    key={link.id}
                    className='text-text-soft-400 text-label-sm h-auto whitespace-break-spaces'
                    asChild
                  >
                    <a href={link.href}>{link.text}</a>
                  </LinkButton.Root>
                ))}
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='flex w-full flex-col items-start gap-2.5'>
                <h3 className='text-label-sm text-text-sub-600'>Support</h3>
                {footerLinksData.support.map((link) => (
                  <LinkButton.Root
                    key={link.id}
                    className='text-text-soft-400 text-label-sm h-auto whitespace-break-spaces'
                    asChild
                  >
                    <a href={link.href}>{link.text}</a>
                  </LinkButton.Root>
                ))}
              </div>
              <div className='flex w-full flex-col gap-8'>
                <div className='flex flex-col items-start gap-2.5'>
                  <h3 className='text-label-sm text-text-sub-600'>Legal</h3>
                  {footerLinksData.legal.map((link) => (
                    <LinkButton.Root
                      key={link.id}
                      className='text-text-soft-400 text-label-sm h-auto whitespace-break-spaces'
                      asChild
                    >
                      <a href={link.href}>{link.text}</a>
                    </LinkButton.Root>
                  ))}
                </div>
                <div className='flex w-full flex-col items-start gap-2.5'>
                  <h3 className='text-label-sm text-text-sub-600'>
                    Choose your language
                  </h3>
                  {languagesData.map((lang) => (
                    <LinkButton.Root
                      key={lang.id}
                      className='text-label-sm text-text-soft-400'
                    >
                      {lang.text}
                    </LinkButton.Root>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border-gray-alpha-10 mx-6 flex flex-col items-center justify-between gap-4 border-t pt-8 lg:mx-0 lg:flex-row xl:pt-12'>
          <div className='flex flex-col items-center gap-8 lg:flex-row lg:gap-4 xl:gap-8'>
            <Link href='/' className='flex items-center gap-1.5'>
              <Logo className='text-feature-base size-7 lg:size-6' />
              <div className='text-title-h6 lg:text-label-md xl:text-title-h6 text-text-strong-950'>
                Synergy <span className='text-text-soft-400 -ml-1.5'>™</span>
              </div>
            </Link>
            <div className='text-label-xs xl:text-label-sm text-text-sub-600'>
              ©2025 AlignUI, LLC. All rights reserved.
            </div>
          </div>
          <div className='flex items-center justify-between gap-6 lg:justify-start lg:gap-4 xl:gap-8'>
            {bottomLegalLinksData.map((link) => (
              <LinkButton.Root
                key={link.id}
                className='text-label-xs text-text-sub-600 hover:text-text-strong-950/80 cursor-pointer'
                asChild
              >
                <a href={link.href}>{link.text}</a>
              </LinkButton.Root>
            ))}
          </div>
        </div>
        <div className='mt-2 flex lg:mt-8 xl:mt-12'>
          <Image
            src='https://alignui.com/images/blocks/synergy-logo.svg'
            alt='logo'
            width={100}
            height={100}
            className='h-auto w-full'
          />
        </div>
      </div>
    </footer>
  );
}
