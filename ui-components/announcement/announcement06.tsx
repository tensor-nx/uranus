'use client';

import { RiArrowRightUpLongLine, RiCloseLine } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
import { cn } from '@/utils/cn';
import { tv, type VariantProps } from '@/utils/tv';
const announcementVariants = tv({
  base: 'relative flex h-10 items-center justify-center px-4 py-2.5 gap-2 w-full',
  variants: {
    variant: {
      stroke: 'border-stroke-soft-200 bg-bg-white-0 border-b',
      lighter: 'bg-bg-weak-25',
      filled: 'bg-primary-base',
    },
  },
  defaultVariants: {
    variant: 'stroke',
  },
});

type AnnouncementVariants = VariantProps<typeof announcementVariants>;

type Announcement08Props = AnnouncementVariants & {
  className?: string;
  text?: string;
};

export default function Announcement08({
  variant = 'lighter',
  className,
  text = 'Promote a live event, webinar, or demo in this area',
}: Announcement08Props) {
  const isFilled = variant === 'filled';

  return (
    <div className={announcementVariants({ variant, class: className })}>
      <div className='flex min-w-0 items-center gap-2'>
        <div className='flex shrink-0'>
          <Badge.Root
            variant='lighter'
            color='blue'
            className={cn(
              'rounded-[5px] px-1.25 text-[9px] leading-[11px] font-semibold tracking-[0.18px]',
              isFilled
                ? 'bg-feature-lighter md:bg-white-alpha-16 text-feature-base md:text-static-white'
                : 'bg-feature-lighter text-feature-base',
            )}
          >
            LIVE
          </Badge.Root>
        </div>
        <div
          className={cn(
            'text-label-xs truncate',
            isFilled ? 'text-static-white' : 'text-text-sub-600',
          )}
        >
          {text}
        </div>
        <div className='flex shrink-0 md:pl-1'>
          <div className='hidden items-center gap-3 md:flex'>
            <div className='bg-text-soft-400 h-[1px] w-4 opacity-[0.48]'></div>
            <div>
              <LinkButton.Root
                variant='modifiable'
                size='small'
                className={cn(
                  'cursor-pointer',
                  isFilled
                    ? 'text-neutral-0 hover:text-neutral-0'
                    : 'text-primary-base hover:text-blue-700',
                )}
              >
                Learn more
                <LinkButton.Icon as={RiArrowRightUpLongLine} />
              </LinkButton.Root>
            </div>
          </div>
          <div className='flex items-center gap-2 md:hidden'>
            <div>
              <LinkButton.Root
                variant='modifiable'
                size='small'
                className={cn(
                  'cursor-pointer',
                  isFilled
                    ? 'text-neutral-0 hover:text-neutral-0'
                    : 'text-primary-base hover:text-blue-700',
                )}
              >
                Learn
                <LinkButton.Icon as={RiArrowRightUpLongLine} />
              </LinkButton.Root>
            </div>
          </div>
        </div>
      </div>
      <div className='flex md:absolute md:top-1/2 md:right-4 md:-translate-y-1/2'>
        <Button.Root
          variant='primary'
          mode='ghost'
          className='hover:text-text-strong-950 size-5 cursor-pointer rounded-none p-0 hover:bg-transparent'
        >
          <Button.Icon
            as={RiCloseLine}
            className={cn(
              'size-4 duration-300',
              isFilled
                ? 'text-static-white group-hover:text-static-white/60'
                : 'text-text-soft-400 group-hover:text-text-sub-600',
            )}
          />
        </Button.Root>
      </div>
    </div>
  );
}
