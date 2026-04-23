'use client';

import { useEffect, useRef, useState } from 'react';
import {
  RiArrowRightUpLongLine,
  RiCloseFill,
  RiFlashlightFill,
  RiLayoutGridLine,
  RiMenu3Fill,
  RiNotification3Line,
  RiPulseFill,
  RiSearchLine,
  RiTaskLine,
} from '@remixicon/react';
import Link from '@repo/registry/next-link-mock';

import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
import { cn } from '@/utils/cn';

function NavDropdownMenu() {
  return (
    <div className='lg:border-stroke-soft-200 lg:shadow-complex-12 z-500 flex w-full flex-col bg-bg-white-0 lg:flex-row lg:gap-10 lg:border-b lg:p-8 xl:justify-center 2xl:gap-20'>
      <div className='flex flex-col lg:gap-6'>
        <div className='text-text-soft-400 text-subheading-2xs bg-bg-weak-50 flex px-6 py-1.5 uppercase lg:hidden'>
          QUICK ACCESS HUB
        </div>
        <div className='hidden flex-row items-center gap-3 lg:flex'>
          <div className='border-stroke-soft-200 bg-bg-weak-50 flex size-9 items-center justify-center rounded-full border'>
            <RiFlashlightFill className='text-text-sub-600 size-5' />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-text-strong-950 text-label-sm'>
              Quick access hub
            </div>
            <div className='text-text-sub-600 text-label-xs'>
              Manage projects in one unified workspace.
            </div>
          </div>
        </div>
        <div className='flex flex-col py-1.5 lg:flex-row lg:items-center lg:gap-2.5 lg:px-0 lg:py-0'>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='xxsmall'
            className='text-label-md lg:text-label-sm text-text-sub-600 group/btn hover:bg-bg-weak-50 hover:text-text-strong-950 hover:ring-stroke-soft-200 border-stroke-soft-200 h-14 w-full cursor-pointer justify-start gap-2.5 rounded-none border-b px-6 ring-0 transition-all duration-300 focus:[box-shadow:none] lg:h-7 lg:w-auto lg:justify-center lg:gap-1.5 lg:rounded-[96px] lg:border-b-0 lg:pr-3.5 lg:pl-2.5 lg:ring-1'
          >
            <Button.Icon
              as={RiLayoutGridLine}
              className='text-primary-base lg:text-text-soft-400 group-hover/btn:text-primary-base size-4.5 transition-all duration-300'
            />
            Overview
          </Button.Root>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='xxsmall'
            className='text-label-md lg:text-label-sm text-text-sub-600 group/btn hover:bg-bg-weak-50 hover:text-text-strong-950 hover:ring-stroke-soft-200 border-stroke-soft-200 h-14 w-full cursor-pointer justify-start gap-2.5 rounded-none border-b px-6 ring-0 transition-all duration-300 focus:[box-shadow:none] lg:h-7 lg:w-auto lg:justify-center lg:gap-1.5 lg:rounded-[96px] lg:border-b-0 lg:pr-3.5 lg:pl-2.5 lg:ring-1'
          >
            <Button.Icon
              as={RiPulseFill}
              className='text-primary-base lg:text-text-soft-400 group-hover/btn:text-primary-base size-4.5 transition-all duration-300'
            />
            Workflow
          </Button.Root>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='xxsmall'
            className='text-label-md lg:text-label-sm text-text-sub-600 group/btn hover:bg-bg-weak-50 hover:text-text-strong-950 hover:ring-stroke-soft-200 h-14 w-full cursor-pointer justify-start gap-2.5 rounded-none px-6 ring-0 transition-all duration-300 focus:[box-shadow:none] lg:h-7 lg:w-auto lg:justify-center lg:gap-1.5 lg:rounded-[96px] lg:pr-3.5 lg:pl-2.5 lg:ring-1'
          >
            <Button.Icon
              as={RiTaskLine}
              className='text-primary-base lg:text-text-soft-400 group-hover/btn:text-primary-base size-4.5 transition-all duration-300'
            />
            Checklists
          </Button.Root>
        </div>
        <div className='text-text-soft-400 text-label-xs hidden flex-1 items-end lg:flex'>
          v.1.5.69 · Apex Tech™
        </div>
      </div>
      <div className="lg:before:bg-bg-soft-200 relative flex w-full flex-col items-start lg:w-auto lg:gap-4 lg:before:absolute lg:before:top-0 lg:before:-left-5 lg:before:h-full lg:before:w-0.25 lg:before:content-[''] 2xl:before:-left-10">
        <div className='text-text-soft-400 text-subheading-2xs lg:text-label-2xs bg-bg-weak-50 w-full px-6 py-1.5 uppercase lg:w-auto lg:bg-transparent lg:px-0 lg:py-0'>
          TOOLS
        </div>
        <div className='flex w-full flex-col items-start gap-4 px-6 py-5 lg:w-auto lg:px-0 lg:py-0'>
          <LinkButton.Root
            variant='gray'
            className='group/link hover:text-stroke-strong-950 flex items-center gap-1 no-underline hover:no-underline'
          >
            Centralized workspace
            <LinkButton.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base size-4 opacity-0 transition-all duration-300 group-hover/link:opacity-100'
            />
          </LinkButton.Root>
          <LinkButton.Root
            variant='gray'
            className='group/link hover:text-stroke-strong-950 flex items-center gap-1 no-underline hover:no-underline'
          >
            Real-time sync
            <LinkButton.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base size-4 opacity-0 transition-all duration-300 group-hover/link:opacity-100'
            />
          </LinkButton.Root>
          <LinkButton.Root
            variant='gray'
            className='group/link hover:text-stroke-strong-950 flex items-center gap-1 no-underline hover:no-underline'
          >
            Smart alerts
            <LinkButton.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base size-4 opacity-0 transition-all duration-300 group-hover/link:opacity-100'
            />
          </LinkButton.Root>
          <LinkButton.Root
            variant='gray'
            className='group/link hover:text-stroke-strong-950 flex items-center gap-1 no-underline hover:no-underline'
          >
            Fast lookups
            <LinkButton.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base size-4 opacity-0 transition-all duration-300 group-hover/link:opacity-100'
            />
          </LinkButton.Root>
        </div>
      </div>
      <div className="lg:before:bg-bg-soft-200 relative flex flex-col items-start lg:gap-4 lg:before:absolute lg:before:top-0 lg:before:-left-5 lg:before:h-full lg:before:w-0.25 lg:before:content-[''] 2xl:before:-left-10">
        <div className='text-text-soft-400 text-subheading-2xs lg:text-label-2xs bg-bg-weak-50 w-full px-6 py-1.5 uppercase lg:w-auto lg:bg-transparent lg:px-0 lg:py-0'>
          SUPPORTS
        </div>
        <div className='flex w-full flex-col items-start gap-4 px-6 py-5 lg:w-auto lg:px-0 lg:py-0'>
          <LinkButton.Root
            variant='gray'
            className='group/link hover:text-stroke-strong-950 flex items-center gap-1 no-underline hover:no-underline'
          >
            Help center
            <LinkButton.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base size-4 opacity-0 transition-all duration-300 group-hover/link:opacity-100'
            />
          </LinkButton.Root>
          <LinkButton.Root
            variant='gray'
            className='group/link hover:text-stroke-strong-950 flex items-center gap-1 no-underline hover:no-underline'
          >
            Getting started
            <LinkButton.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base size-4 opacity-0 transition-all duration-300 group-hover/link:opacity-100'
            />
          </LinkButton.Root>
          <LinkButton.Root
            variant='gray'
            className='group/link hover:text-stroke-strong-950 flex items-center gap-1 no-underline hover:no-underline'
          >
            Community forum
            <LinkButton.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base size-4 opacity-0 transition-all duration-300 group-hover/link:opacity-100'
            />
          </LinkButton.Root>
        </div>
      </div>
      <div className="lg:before:bg-bg-soft-200 relative flex flex-col items-start lg:hidden lg:gap-4 lg:before:absolute lg:before:top-0 lg:before:-left-5 lg:before:h-full lg:before:w-0.25 lg:before:content-[''] xl:flex 2xl:before:-left-10">
        <div className='text-text-soft-400 text-subheading-2xs lg:text-label-2xs bg-bg-weak-50 w-full px-6 py-1.5 uppercase lg:w-auto lg:bg-transparent lg:px-0 lg:py-0'>
          featured
        </div>
        <div className='flex w-full flex-col items-start gap-4 px-6 py-5 lg:w-auto lg:px-0 lg:py-0'>
          <div className='bg-bg-weak-50 flex h-full w-full flex-col justify-center gap-1 rounded-2xl p-6 lg:w-auto lg:min-w-85.5'>
            <div className='text-text-strong-950 text-label-sm text-center'>
              Your wallet, anywhere
            </div>
            <div className='text-text-sub-600 text-label-xs mb-2 text-center'>
              Securely manage money on the go
            </div>
            <Button.Root
              variant='primary'
              mode='filled'
              size='xsmall'
              asChild
              className='text-label-xs mx-auto h-6 w-fit rounded-[96px] px-3'
            >
              <Link href='/'>Get the app</Link>
            </Button.Root>
          </div>
        </div>
      </div>
    </div>
  );
}

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

type Header03Props = {
  announcement?: boolean;
};

export default function Header03({ announcement = false }: Header03Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleDocumentClick = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      if (panelRef.current && panelRef.current.contains(targetNode)) return;
      if (toggleRef.current && toggleRef.current.contains(targetNode)) return;
      setIsMenuOpen(false);
    };

    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, [isMenuOpen]);

  return (
    <header className='border-stroke-soft-200 relative z-200 flex h-16 w-full items-center justify-between gap-6 border-b bg-bg-white-0 px-4.5 py-4.5 lg:h-18 lg:px-11 lg:py-5'>
      <div className='flex flex-1 items-center gap-4 lg:gap-6'>
        <div className='flex' ref={toggleRef}>
          <Button.Root
            variant='neutral'
            mode='ghost'
            size='xsmall'
            className={`rounded-10 ${isMenuOpen ? 'hidden' : ''}`}
            onClick={toggleMenu}
          >
            <Button.Icon
              as={RiMenu3Fill}
              className='text-text-sub-600 size-5'
            />
          </Button.Root>
          <Button.Root
            variant='neutral'
            mode='ghost'
            size='xsmall'
            className={`rounded-10 bg-bg-weak-50 ${isMenuOpen ? '' : 'hidden'}`}
            onClick={toggleMenu}
          >
            <Button.Icon
              as={RiCloseFill}
              className='text-text-sub-600 size-5'
            />
          </Button.Root>
        </div>
        <Link href='/' className='flex items-center'>
          <Logo className='text-primary-base size-7' />
        </Link>
      </div>

      <div className='flex items-center gap-3'>
        <Button.Root
          variant='neutral'
          mode='ghost'
          size='xsmall'
          className='rounded-10'
        >
          <Button.Icon as={RiSearchLine} className='text-text-sub-600 size-5' />
        </Button.Root>
        <Button.Root
          variant='neutral'
          mode='ghost'
          size='xsmall'
          className='rounded-10'
        >
          <Button.Icon
            as={RiNotification3Line}
            className='text-text-sub-600 size-5'
          />
        </Button.Root>
        <div
          className={`border-stroke-soft-200 fixed bottom-0 left-0 flex w-full items-center border-t bg-bg-white-0 px-6 py-5.5 transition-all duration-300 lg:relative lg:w-auto lg:border-t-0 lg:bg-transparent lg:px-0 lg:py-0 ${isMenuOpen ? 'active visible opacity-100' : 'invisible opacity-0 lg:visible lg:opacity-100'}`}
          data-state={isMenuOpen ? 'open' : 'closed'}
        >
          <Button.Root
            variant='primary'
            mode='filled'
            size='medium'
            asChild
            className='rounded-10 w-full lg:h-8 lg:w-auto'
          >
            <Link href='/'>Get started</Link>
          </Button.Root>
        </div>
      </div>
      <div
        ref={panelRef}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) setIsMenuOpen(false);
        }}
        className={cn(
          'ease absolute top-16 left-0 w-full overflow-auto transition-all duration-500 lg:top-18 lg:h-auto lg:overflow-visible',
          announcement ? 'h-[calc(100dvh-189px)]' : 'h-[calc(100dvh-149px)]',
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <div onMouseDown={(e) => e.stopPropagation()}>
          <NavDropdownMenu />
        </div>
      </div>
    </header>
  );
}