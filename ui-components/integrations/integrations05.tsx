'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';
const stepsData = [
  {
    name: 'Slack',
    icon: 'https://alignui.com/images/blocks/integrations-logo-slack.svg',
    description: 'Collaborate instantly and keep every team member aligned ',
    bold: 'in real time across channels.',
  },
  {
    name: 'Linear',
    icon: 'https://alignui.com/images/blocks/integrations-logo-linear.svg',
    description: 'Manage tasks efficiently and keep projects moving forward ',
    bold: 'without unnecessary delays.',
  },
  {
    name: 'Clickup',
    icon: 'https://alignui.com/images/blocks/integrations-logo-clickup.svg',
    description: "Organize projects, track goals, and manage all your team's ",
    bold: 'work from one place.',
  },
];

const ratingsData = [
  {
    name: 'Google',
    rating: '4.6',
    icon: 'https://alignui.com/images/blocks/icon-google.svg',
    iconSize: 18,
  },
  {
    name: 'Trustpilot',
    rating: '4.9',
    icon: 'https://alignui.com/images/blocks/icon-trustpilot.svg',
    iconSize: 20,
  },
];

export default function Integrations05() {
  return (
    <div className='bg-bg-white-0 pt-10 pb-6 lg:py-24 w-full'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 md:px-7 lg:flex-row lg:justify-center lg:gap-6'>
        <div className='flex w-full flex-col justify-between gap-8 lg:w-[392px] lg:shrink-0'>
          <div className='flex flex-col gap-4 lg:gap-6'>
            <div className='flex flex-col gap-3 lg:gap-4'>
              <Badge.Root
                variant='lighter'
                className='bg-bg-weak-50 text-text-sub-600 text-label-sm h-7 w-fit rounded-[9px] px-2.5 normal-case'
              >
                Apps & Integrations
              </Badge.Root>
              <h2 className='text-title-h4 lg:text-title-h3 text-text-strong-950 font-[550]'>
                Trusted by top integration partners
              </h2>
            </div>
            <p className='text-label-md text-text-soft-400'>
              Connect your favorite tools and simplify your{' '}
              <br className='hidden lg:block' />
              <span className='text-text-sub-600'>workflows effortlessly.</span>
            </p>
            <LinkButton.Root
              className='text-primary-base text-label-md group h-auto w-fit cursor-pointer gap-[5px] whitespace-break-spaces'
              asChild
            >
              <a href='#'>
                See all integrations
                <LinkButton.Icon
                  as={RiArrowRightUpLongLine}
                  className='text-primary-base size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                />
              </a>
            </LinkButton.Root>
          </div>
          <div className='flex items-center gap-6'>
            {ratingsData.map((rating) => (
              <div key={rating.name} className='flex items-center gap-2'>
                <Image
                  src={rating.icon}
                  alt={`${rating.name} Logo`}
                  width={rating.iconSize}
                  height={rating.iconSize}
                  className='shrink-0 object-cover'
                  style={{
                    width: rating.iconSize,
                    height: rating.iconSize,
                  }}
                />
                <p className='text-label-md text-text-soft-400'>
                  <span className='text-text-sub-600'>{rating.rating}</span>{' '}
                  {rating.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex w-full flex-col gap-2 lg:max-w-[600px] lg:gap-3'>
          {stepsData.map((step, index) => (
            <div key={step.name} className='flex gap-6'>
              <div className='flex flex-col items-center'>
                <div className='border-stroke-soft-200 bg-bg-white-0 flex shrink-0 items-center rounded-full border p-3 lg:p-6'>
                  <Image
                    src={step.icon}
                    alt={`${step.name} Logo`}
                    width={40}
                    height={40}
                    className='size-8 shrink-0 object-cover lg:size-10'
                  />
                </div>
                {index < stepsData.length - 1 && (
                  <div className='bg-stroke-soft-200 mt-2 h-13.5 w-px lg:mt-3 lg:h-8' />
                )}
              </div>
              <div className='flex flex-1 flex-col gap-2 lg:gap-4'>
                <h3 className='text-label-md lg:text-label-lg text-text-strong-950'>
                  {step.name}
                </h3>
                <p className='text-label-sm lg:text-label-md text-text-soft-400'>
                  {step.description}
                  <br className='hidden lg:block' />
                  <span className='text-text-sub-600'>{step.bold}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
