'use client';

import { RiStairsFill } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import {
  SVGHeartFill,
  SVGHeartHalf,
  SVGHeartLine,
  SVGStarFill,
  SVGStarHalf,
  SVGStarLine,
} from '@/components/ui/svg-rating-icons';

export function SVGTrustStarFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='20'
      viewBox='0 0 24 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22.5 8.05581H14.4808L12.0039 1.75L9.51917 8.05581L1.5 8.04942L7.99429 11.9506L5.50958 18.25L12.0039 14.3552L18.4904 18.25L16.0135 11.9506L22.5 8.05581Z'
        fill='#00B67A'
      />
      <path
        d='M16.5708 13.3768L16.0135 11.9507L12.0039 14.3553L16.5708 13.3768Z'
        fill='#F7F7F7'
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  const getStarIcon = (i: number) => {
    if (rating >= i + 1) {
      return <SVGStarFill className='size-5 text-yellow-500' key={i} />;
    } else if (rating >= i + 0.5) {
      return <SVGStarHalf className='size-5 text-yellow-500' key={i} />;
    }
    return <SVGStarLine className='size-5 text-stroke-sub-300' key={i} />;
  };

  return (
    <div className='flex gap-0.5'>
      {Array.from({ length: 5 }, (_, i) => getStarIcon(i))}
    </div>
  );
}

function TrustStarRating({ rating }: { rating: number }) {
  const getStarIcon = (i: number) => {
    if (rating >= i + 1) {
      return <SVGTrustStarFill className='size-5 text-yellow-500' key={i} />;
    } else if (rating >= i + 0.5) {
      return <SVGTrustStarFill className='size-5 text-yellow-500' key={i} />;
    }
    return <SVGTrustStarFill className='size-5 text-stroke-sub-300' key={i} />;
  };

  return (
    <div className='flex gap-0.5'>
      {Array.from({ length: 5 }, (_, i) => getStarIcon(i))}
    </div>
  );
}

function HeartRating({ rating }: { rating: number }) {
  const getHeartIcon = (i: number) => {
    if (rating >= i + 1) {
      return <SVGHeartFill className='size-5 text-red-500' key={i} />;
    } else if (rating >= i + 0.5) {
      return <SVGHeartHalf className='size-5 text-red-500' key={i} />;
    }
    return <SVGHeartLine className='size-5 text-stroke-sub-300' key={i} />;
  };

  return (
    <div className='flex gap-0.5'>
      {Array.from({ length: 5 }, (_, i) => getHeartIcon(i))}
    </div>
  );
}

const reviewsData = [
  {
    id: 'review1',
    icon: 'https://alignui.com/images/blocks/icon-app-store.svg',
    iconAlt: 'app-store',
    title: 'App-store review',
    rating: '4.9/5',
    subtitle: 'Based on 6,200+ ratings',
    description:
      'Teams love how fast and simple it is to manage projects from their phones',
    descriptionSpan: '—',
    descriptionEnd: ' wherever they work.',
    ratingComponent: HeartRating,
    ratingValue: 5,
  },
  {
    id: 'review2',
    icon: 'https://alignui.com/images/blocks/icon-trustpilot.svg',
    iconAlt: 'trustpilot',
    title: 'Trustpilot score',
    rating: '97%',
    subtitle: 'Recommended by team leaders',
    description:
      'From task planning to delivery, users say it’s the smoothest tool they’ve ever used at scale.',
    descriptionSpan: '',
    descriptionEnd: ' used at scale.',
    ratingComponent: TrustStarRating,
    ratingValue: 5,
  },
  {
    id: 'review3',
    icon: 'https://alignui.com/images/blocks/icon-google.svg',
    iconAlt: 'google',
    title: 'Google reviews',
    rating: '4.8/5',
    subtitle: 'Rated by remote teams',
    description:
      'Product and ops teams trust it to keep work visible, collaborative, and',
    descriptionSpan: '',
    descriptionEnd: ' always moving forward.',
    ratingComponent: StarRating,
    ratingValue: 5,
  },
];

export default function StatsMetrics04() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-26 w-full'>
      <div className='max-w-7xl mx-auto lg:px-7 flex flex-col'>
        <div className='flex flex-col lg:items-center mb-6 lg:mb-14 px-6 lg:px-0'>
          <Badge.Root
            variant='lighter'
            className='w-fit bg-bg-weak-50 text-text-sub-600 gap-1.5 pl-2 pr-2.5 h-7 rounded-[9px] normal-case text-label-sm mb-3'
          >
            <Badge.Icon
              as={RiStairsFill}
              className='size-4 text-primary-base mx-0'
            />
            Stats & review
          </Badge.Root>
          <h2 className='text-title-h4 xl:text-title-h2 !font-[550] text-text-strong-950 mb-4 lg:text-center'>
            Real-time feedback, trusted by teams
          </h2>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            Track reviews, improve your workflow, and see why modern{' '}
            <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
              teams rely on us every single day.
            </span>
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-1.5 px-1.5 lg:px-0 w-full'>
          {reviewsData.map((review) => {
            const RatingComponent = review.ratingComponent;
            return (
              <div
                key={review.id}
                className='p-8 md:p-6 lg:p-8 xl:p-10 2xl:p-12 rounded-[40px] bg-bg-weak-25 flex flex-col flex-1'
              >
                <div className='flex items-center gap-1.5 py-1 px-2.5 bg-bg-white-0 rounded-10 shadow-custom-input-4 mb-4 w-fit'>
                  <Image
                    src={review.icon}
                    alt={review.iconAlt}
                    width={20}
                    height={20}
                    className='size-5 md:size-4 lg:size-5'
                  />
                  <p className='text-label-md md:text-label-xs xl:text-label-md text-text-sub-600'>
                    {review.title}
                  </p>
                </div>
                <h5 className='text-title-h2 md:text-title-h3 lg:text-title-h2 xl:text-title-h1 text-text-strong-950 mb-6 2xl:mb-9'>
                  {review.rating}
                </h5>
                <div className='text-label-md md:text-label-xs lg:text-label-md text-text-sub-600 mb-2'>
                  {review.subtitle}
                </div>
                <p className='text-label-md md:text-label-xs lg:text-label-md text-text-soft-400 mb-6 lg:mb-9 lg:flex-1'>
                  {review.description}
                  {review.descriptionSpan && (
                    <span className='text-text-disabled-300'>
                      {review.descriptionSpan}
                    </span>
                  )}
                  {review.descriptionEnd}
                </p>
                <RatingComponent rating={review.ratingValue} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
