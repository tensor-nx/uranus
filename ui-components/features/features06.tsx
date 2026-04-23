'use client';

import type { ComponentType } from 'react';
import {
  RiAccountBoxFill,
  RiBarChartFill,
  RiNotificationBadgeFill,
  RiSettingsFill,
  RiUserCommunityFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import { cn } from '@/utils/cn';
type CardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  withMockup?: boolean;
  className?: string;
};

function FeatureCard({
  icon: Icon,
  title,
  description,
  withMockup = false,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-bg-weak-25 relative flex flex-col overflow-hidden',
        'gap-7 rounded-[28px] px-7 pt-7',
        withMockup ? 'pb-0' : 'pb-8',
        'lg:h-[404px] lg:justify-between lg:gap-0 lg:rounded-[40px] lg:p-12',
        className,
      )}
    >
      <div className='bg-bg-white-0 shadow-custom-input-4 flex w-fit items-center rounded-[14px] p-2.5 lg:rounded-[20px] lg:p-4'>
        <Icon className='text-primary-base size-7 lg:size-8' />
      </div>

      <div className='flex flex-col gap-2 lg:w-[200px] xl:w-[308px]'>
        <h3 className='text-title-h6 text-text-strong-950 font-[550]'>
          {title}
        </h3>
        <p className='text-label-md text-text-sub-600'>{description}</p>
      </div>

      {withMockup && (
        <div className='pointer-events-none relative h-[326px] w-[310px] overflow-hidden lg:absolute lg:right-16 lg:bottom-0 lg:h-[340px] lg:w-[324px]'>
          <Image
            src='https://alignui.com/images/blocks/features-06-image.png'
            alt='Phone mockup'
            width={324}
            height={663}
            className='h-auto w-full'
          />
        </div>
      )}
    </div>
  );
}

export default function Features06() {
  return (
    <div className='bg-bg-white-0 w-full'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 lg:gap-12 lg:px-7 lg:py-26'>
        <div className='flex flex-col gap-4 lg:items-center'>
          <div className='flex flex-col gap-3 lg:items-center'>
            <Badge.Root
              variant='stroke'
              className='text-label-sm text-text-sub-600 bg-bg-weak-50 h-7 w-fit !gap-1.5 rounded-[9px] pr-[10px] pl-2 normal-case ring-transparent'
            >
              <Badge.Icon
                as={RiBarChartFill}
                className='text-primary-base mx-0 size-4'
              />
              Smarter tools for finance ops
            </Badge.Root>
            <h2 className='text-title-h4 text-text-strong-950 lg:text-title-h2 font-[550] lg:text-center'>
              Set up once, stay focused
            </h2>
          </div>
          <p className='text-paragraph-md text-text-sub-600 lg:max-w-[528px] lg:text-center'>
            Track reviews, improve your workflow, and see why modern{' '}
            <span className='text-label-md lg:block'>
              teams rely on us every single day.
            </span>
          </p>
        </div>

        <div className='mx-[-12px] flex w-[calc(100%+24px)] flex-col gap-1.5 lg:mx-0 lg:w-full'>
          <div className='grid grid-cols-1 gap-1.5 lg:grid-cols-[404fr_814fr]'>
            <FeatureCard
              icon={RiAccountBoxFill}
              title='Complete your profile'
              description='Add your name, photo, and info to make collaboration feel personal'
            />
            <FeatureCard
              icon={RiSettingsFill}
              title='Define your role'
              description='Select your access level to see the tools and views that match your position.'
              withMockup
            />
          </div>

          <div className='grid grid-cols-1 gap-1.5 lg:grid-cols-[814fr_404fr]'>
            <FeatureCard
              icon={RiUserCommunityFill}
              title='Connect with your team'
              description='Join the right workspace and channels based on your department'
              withMockup
            />
            <FeatureCard
              icon={RiNotificationBadgeFill}
              title='Focused notifications'
              description='Choose title and team so your tasks and views are auto-configured'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
