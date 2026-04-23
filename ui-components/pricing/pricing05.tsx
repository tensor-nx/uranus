'use client';

import { RiArrowRightUpLongLine, RiPriceTag3Fill } from '@remixicon/react';

import * as AvatarGroupCompact from '@/components/ui/avatar-group-compact';
import * as Avatar from '@/components/ui/avatar';
import * as Badge from '@/components/ui/badge';
import * as FancyButton from '@/components/ui/fancy-button';
const CheckIcon = () => (
  <svg
    width='13'
    height='13'
    viewBox='0 0 13 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='size-[13px] shrink-0'
  >
    <path
      d='M6.5 13C2.91005 13 0 10.0899 0 6.5C0 2.91005 2.91005 0 6.5 0C10.0899 0 13 2.91005 13 6.5C13 10.0899 10.0899 13 6.5 13ZM5.85195 9.1L10.4474 4.50385L9.52835 3.58475L5.85195 7.2618L4.0131 5.42295L3.094 6.34205L5.85195 9.1Z'
      className='fill-success-base'
    />
  </svg>
);

const features = [
  'Unlimited members & guest access',
  'Role-based dashboards and task views',
  'Auto-linked teams and departments',
  'Mobile-first onboarding experience',
  'Custom user roles & permissions',
  'Priority support with real humans',
  'Workspace templates for faster launches',
];

const avatars = [
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-1.png', alt: 'Avatar 1' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-2.png', alt: 'Avatar 2' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-3.png', alt: 'Avatar 3' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-4.png', alt: 'Avatar 4' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-5.png', alt: 'Avatar 5' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-6.png', alt: 'Avatar 6' },
];

export default function Pricing05() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-26 w-full'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center px-6 md:px-7'>
        <div className='mb-8 flex w-full flex-col lg:mb-12 lg:items-center'>
          <Badge.Root
            variant='lighter'
            className='bg-bg-weak-50 text-text-sub-600 text-label-sm mb-3 h-7 w-fit gap-1.5 rounded-[9px] pr-2.5 pl-2 normal-case'
          >
            <Badge.Icon
              as={RiPriceTag3Fill}
              className='text-primary-base mx-0 size-4'
            />
            Pricing
          </Badge.Root>
          <h2 className='text-title-h4 lg:text-title-h3 xl:text-title-h2 text-text-strong-950 mb-4 font-[550] lg:text-center'>
            Clarity, speed, and value in one plan
          </h2>
          <p className='text-paragraph-md text-text-sub-600 max-w-[528px] lg:text-center'>
            From kickoff to delivery — here&apos;s why fast-moving teams trust
            us <br className='hidden lg:block' />
            <span className='text-label-md text-text-sub-600'>
              to stay on track, not over budget.
            </span>
          </p>
        </div>

        <div className='flex w-full flex-col items-center gap-8'>
          <div className='bg-bg-weak-50 mx-[-12px] flex w-[calc(100%+24px)] flex-col gap-7 rounded-[36px] p-7 lg:mx-0 lg:w-fit lg:flex-row lg:gap-12 lg:p-12'>
            <div className='flex w-full flex-col gap-6 lg:w-[256px] lg:shrink-0'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-label-lg text-text-strong-950'>
                  Starter workspace
                </h3>
                <p className='text-label-sm text-text-sub-600'>
                  For teams managing multiple projects and need fast setup,
                  flexible roles, and real-time visibility.
                </p>
              </div>
              <div className='flex items-center gap-2.5'>
                <span className='text-title-h2 text-text-strong-950 font-[550]'>
                  $49
                </span>
                <span className='text-label-md text-text-sub-600'>
                  /monthly
                </span>
              </div>
              <FancyButton.Root
                variant='primary'
                size='medium'
                className='shadow-complex-7 bg-primary-base w-full cursor-pointer gap-2.5 rounded-xl pr-4.5 pl-5 after:opacity-0 hover:after:opacity-[.24] lg:w-fit'
              >
                Start free trial
                <FancyButton.Icon
                  as={RiArrowRightUpLongLine}
                  className='text-static-white/[0.64] size-5'
                />
              </FancyButton.Root>
            </div>

            <div className='hidden lg:block'>
              <div className='border-stroke-soft-200 h-full border-l' />
            </div>
            <div className='border-stroke-soft-200 border-t lg:hidden' />

            <div className='flex flex-1 flex-col gap-4'>
              {features.map((feature, index) => (
                <div key={index} className='flex items-center gap-2.5'>
                  <CheckIcon />
                  <span className='text-label-sm text-text-sub-600'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-1'>
            <AvatarGroupCompact.Root size='24'>
              <AvatarGroupCompact.Stack className='opacity-80 *:ring'>
                {avatars.map((avatar) => (
                  <Avatar.Root key={avatar.src} className='size-5'>
                    <Avatar.Image
                      src={avatar.src}
                      className='mix-blend-luminosity'
                    />
                  </Avatar.Root>
                ))}
              </AvatarGroupCompact.Stack>
            </AvatarGroupCompact.Root>
            <p className='text-label-sm text-text-soft-400'>
              <span className='text-text-disabled-300 hidden lg:inline'>—</span>{' '}
              trusted by 250+ finance teams worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
