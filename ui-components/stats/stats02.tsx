'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as LinkButton from '@/components/ui/link-button';
import * as StatusBadge from '@/components/ui/status-badge';
const reviewsData = [
  {
    id: 'review1',
    rating: '4.8',
    icon: 'https://alignui.com/images/blocks/icon-trustpilot.svg',
    iconAlt: 'Trustpilot',
    reviewText: 'Trustpilot review',
  },
  {
    id: 'review2',
    rating: '4.9',
    icon: 'https://alignui.com/images/blocks/icon-google.svg',
    iconAlt: 'Google',
    reviewText: 'Google review',
  },
  {
    id: 'review3',
    rating: '4.6',
    icon: 'https://alignui.com/images/blocks/icon-tripAdvisor.svg',
    iconAlt: 'TripAdvisor review',
    reviewText: 'G2 review',
  },
];

export default function StatsMetrics02() {
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
          <h5 className='text-title-h5 text-text-sub-600 mb-4 !font-[550] lg:mb-12 lg:text-center'>
            Adopted by <span className='text-text-strong-950'>startups</span>{' '}
            and <span className='text-text-strong-950'>sales-driven</span>{' '}
            brands
          </h5>
          <div className='mb-6 flex w-full flex-col items-center lg:mx-auto lg:mb-12 lg:w-fit lg:flex-row'>
            {reviewsData.map((review, index) => {
              const isLast = index === reviewsData.length - 1;
              return (
                <div
                  key={review.id}
                  className={`flex items-center gap-5 border-b py-3 lg:border-b-0 lg:px-6 lg:py-0 xl:px-12 ${!isLast ? 'lg:border-r' : ''} border-stroke-soft-200 h-auto w-full lg:w-fit`}
                >
                  <p className='text-title-h4 lg:text-title-h1 text-text-strong-950'>
                    {review.rating}
                  </p>
                  <div className='flex flex-1 flex-row-reverse gap-5 lg:flex-none lg:flex-col lg:gap-3'>
                    <Image
                      src='https://alignui.com/images/blocks/stars.svg'
                      alt='stars'
                      width={132}
                      height={16}
                      className='h-5 w-auto shrink-0'
                    />
                    <div className='flex flex-1 items-center gap-1.25 lg:flex-none'>
                      <Image
                        src={review.icon}
                        alt={review.iconAlt}
                        width={16}
                        height={16}
                        className='size-4 shrink-0'
                      />
                      <p className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                        {review.reviewText}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='bg-bg-white-0 border-faded-lighter mb-8 flex rounded-3xl lg:rounded-[48px] lg:border lg:p-3'>
            <Image
              src='https://alignui.com/images/blocks/stats-metrics-image-1.jpg'
              alt='video'
              width={1224}
              height={688}
              className='shadow-complex-9 hidden h-auto w-full rounded-[40px] object-cover md:flex'
            />
            <Image
              src='https://alignui.com/images/blocks/stats-metrics-image-1-mobile.jpg'
              alt='video'
              width={342}
              height={440}
              className='shadow-complex-9 flex h-auto w-full rounded-3xl object-cover md:hidden'
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-2 lg:flex-row'>
            <p className='text-label-sm text-text-soft-400'>
              Automate sales workflows and close deals faster{' '}
              <span className='hidden lg:inline'>—</span>{' '}
            </p>
            <LinkButton.Root
              className='text-text-sub-600 text-label-sm group h-auto w-fit cursor-pointer gap-1.25 whitespace-break-spaces'
              asChild
            >
              <a href='#'>
                Explore the full demo
                <LinkButton.Icon
                  as={RiArrowRightUpLongLine}
                  className='text-text-soft-400 size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                />
              </a>
            </LinkButton.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
