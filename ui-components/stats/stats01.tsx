'use client';

import { RiHeart3Fill, RiSpeedMiniFill, RiTimeFill } from '@remixicon/react';

import * as StatusBadge from '@/components/ui/status-badge';
const statsData = [
  {
    id: 'stat1',
    badgeText: 'Save time on manual HR work',
    badgeIcon: RiTimeFill,
    badgeBgClass: 'bg-feature-lighter',
    badgeTextClass: 'text-feature-dark',
    badgeIconClass: 'text-feature-dark',
    value: '4.2H',
    valueLabel: 'Saved weekly',
    description: 'HR teams reduce admin by automating',
    descriptionSpan: 'time-off and team tracking',
    beforeBgClass: 'before:bg-feature-base',
  },
  {
    id: 'stat2',
    badgeText: 'Faster onboarding with fewer steps',
    badgeIcon: RiSpeedMiniFill,
    badgeBgClass: 'bg-success-lighter',
    badgeTextClass: 'text-success-dark',
    badgeIconClass: 'text-success-dark',
    value: '63%',
    valueLabel: 'Faster setup',
    description: 'Most companies complete setup and',
    descriptionSpan: 'launch in under 15 minutes',
    beforeBgClass: 'before:bg-success-base',
  },
  {
    id: 'stat3',
    badgeText: 'Better insight into team wellbeing',
    badgeIcon: RiHeart3Fill,
    badgeBgClass: 'bg-highlighted-lighter',
    badgeTextClass: 'text-highlighted-dark',
    badgeIconClass: 'text-highlighted-dark',
    value: '96%',
    valueLabel: 'Feel more connected',
    description: 'HR leaders say Synergy helps them',
    descriptionSpan: 'stay closer to their people.',
    beforeBgClass: 'before:bg-highlighted-base',
  },
];

export default function StatsMetrics01() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:gap-10 lg:px-7 xl:gap-12'>
        <div className='flex flex-col'>
          <StatusBadge.Root
            variant='light'
            className='text-label-sm text-text-sub-600 shadow-custom-input-2 bg-bg-white-0 mb-3 h-7 w-fit rounded-[9px] pr-2.5 pl-1.75 capitalize has-[>.dot]:gap-1 lg:mx-auto'
          >
            <StatusBadge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
            Stats & Metric
          </StatusBadge.Root>
          <h2 className='text-title-h4 lg:text-title-h3 xl:text-title-h2 text-text-strong-950 mb-4 !font-[550] lg:text-center'>
            Chosen by teams prioritizing people
          </h2>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            Cut hours of admin work weekly so your HR team can focus{' '}
            <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
              on people, not paperwork.
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-4 lg:flex-row lg:gap-6'>
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className='border-stroke-soft-200 shadow-regular-xs flex flex-1 flex-col rounded-[28px] border p-8 lg:rounded-[36px] lg:p-6 xl:p-8 2xl:p-10'
            >
              <StatusBadge.Root
                variant='light'
                className={`${stat.badgeBgClass} ${stat.badgeTextClass} text-label-sm lg:text-paragraph-sm xl:text-label-sm mb-6 h-7 w-fit gap-1.5 rounded-[9px] px-2`}
              >
                <StatusBadge.Icon
                  as={stat.badgeIcon}
                  className={`size-4 ${stat.badgeIconClass} mx-0 before:size-4`}
                />
                {stat.badgeText}
              </StatusBadge.Root>
              <div className='mb-8 flex flex-col gap-1 lg:mb-12 lg:gap-2 2xl:mb-20'>
                <div
                  className={`text-title-h3 lg:text-title-h1 text-text-strong-950 relative before:absolute before:top-0 before:-left-8.25 before:h-full before:w-0.5 before:content-[''] lg:before:-left-6.25 xl:before:-left-8.25 2xl:before:-left-10.25 ${stat.beforeBgClass} z-2`}
                >
                  {stat.value}
                </div>
                <div className='text-label-md text-text-sub-600'>
                  {stat.valueLabel}
                </div>
              </div>
              <div className='text-paragraph-md text-text-soft-400'>
                {stat.description}{' '}
                <span className='text-label-md text-text-sub-600 2xl:flex'>
                  {stat.descriptionSpan}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
