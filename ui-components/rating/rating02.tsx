'use client';

import * as React from 'react';
import { RiPencilLine, RiStarSmileLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';
import {
  SVGStarFill,
  SVGStarHalf,
  SVGStarLine,
} from '@/components/ui/svg-rating-icons';
type RatingData = {
  ratingCounts: Record<number, number>;
};

const DUMMY_RATING_DATA: RatingData = {
  ratingCounts: {
    5: 8600,
    4: 3820,
    3: 1300,
    2: 2580,
    1: 1120,
  },
};

function calculateRatingStats(data: RatingData) {
  const totalRatings = Object.values(data.ratingCounts).reduce(
    (a, b) => a + b,
    0,
  );
  const weightedSum = Object.entries(data.ratingCounts).reduce(
    (sum, [rating, count]) => sum + Number(rating) * count,
    0,
  );

  const averageRating =
    totalRatings > 0 ? Number((weightedSum / totalRatings).toFixed(1)) : 0;

  const distribution = Object.fromEntries(
    Object.entries(data.ratingCounts).map(([rating, count]) => [
      rating,
      {
        count,
        percentage: (count / totalRatings) * 100,
      },
    ]),
  );

  return { averageRating, totalRatings, distribution };
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

function RatingBar({
  rating,
  percentage,
}: {
  rating: number;
  percentage: number;
}) {
  return (
    <div className='flex items-center gap-2.5'>
      <div className='h-3 flex-1 rounded-sm bg-bg-weak-50'>
        <div
          className='h-3 rounded-sm bg-away-base'
          style={{ width: `${Math.round(percentage)}%` }}
        />
      </div>
      <div className='flex items-center gap-1'>
        <div className='text-paragraph-sm text-text-sub-600'>{rating}.0</div>
        <SVGStarFill className='size-4 shrink-0 text-yellow-500' />
      </div>
    </div>
  );
}

function formatNumber(num: number): string {
  return num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num.toString();
}

export default function BlockRatings() {
  const stats = React.useMemo(
    () => calculateRatingStats(DUMMY_RATING_DATA),
    [],
  );
  const { averageRating, totalRatings, distribution } = stats;

  return (
    <div className='w-full max-w-[400px] rounded-20 bg-bg-white-0 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex items-center gap-3.5 px-5 py-4'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
          <RiStarSmileLine className='size-5 text-text-sub-600' />
        </div>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Rate Our Product
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Provide us with feedback for the product.
          </div>
        </div>
      </div>

      <Divider.Root />

      <div className='flex flex-col gap-5 p-5'>
        <div className='flex items-center gap-4'>
          <div className='text-title-h3 text-text-strong-950'>
            {averageRating}
          </div>
          <div className='h-12 w-0 border-l border-stroke-soft-200' />
          <div className='flex flex-col gap-2'>
            <StarRating rating={averageRating} />
            <div className='flex gap-1'>
              <span className='text-paragraph-sm text-text-strong-950'>
                {averageRating} ∙ {formatNumber(totalRatings)} Ratings
              </span>
              <LinkButton.Root size='medium' variant='gray' underline>
                567 reviews
              </LinkButton.Root>
            </div>
          </div>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='flex flex-col gap-3'>
          {[5, 4, 3, 2, 1].map((rating) => (
            <RatingBar
              key={rating}
              rating={rating}
              percentage={distribution[rating]?.percentage || 0}
            />
          ))}
        </div>
      </div>

      <Divider.Root />

      <div className='px-5 py-4'>
        <Button.Root
          variant='neutral'
          mode='stroke'
          size='small'
          className='w-full'
        >
          <Button.Icon as={RiPencilLine} />
          Write a Review
        </Button.Root>
      </div>
    </div>
  );
}
