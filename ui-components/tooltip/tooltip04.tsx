'use client';

import * as React from 'react';
import { RiCheckboxCircleFill } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';
const useTooltipSide = (): 'bottom' | 'right' => {
  const [side, setSide] = React.useState<'bottom' | 'right'>('bottom');

  React.useEffect(() => {
    const handleResize = () => {
      setSide(window.innerWidth >= 768 ? 'right' : 'bottom');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return side;
};

export default function BlockTooltip() {
  const tooltipSide = useTooltipSide();

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke' size='small'>
          Password Requirements
        </Button.Root>
      </Tooltip.Trigger>
      <Tooltip.Content
        size='medium'
        variant='light'
        className='w-[266px] px-4 py-3'
        side={tooltipSide}
      >
        <div className='flex flex-col gap-2'>
          <div className='flex w-full gap-2'>
            <div className='h-1 flex-1 rounded-[1.2px] bg-error-base' />
            <div className='h-1 flex-1 rounded-[1.2px] bg-warning-base' />
            <div className='h-1 flex-1 rounded-[1.2px] bg-success-base' />
          </div>

          <div className='text-paragraph-xs text-text-sub-600'>
            Must contain at least;
          </div>

          <div className='flex items-center gap-1'>
            <RiCheckboxCircleFill className='size-4 text-success-base' />
            <span className='text-label-xs text-text-sub-600'>
              At least 1 uppercase
            </span>
          </div>

          <div className='flex items-center gap-1'>
            <RiCheckboxCircleFill className='size-4 text-success-base' />
            <span className='text-label-xs text-text-sub-600'>
              At least 1 number
            </span>
          </div>

          <div className='flex items-center gap-1'>
            <RiCheckboxCircleFill className='size-4 text-success-base' />
            <span className='text-label-xs text-text-sub-600'>
              At least 8 characters
            </span>
          </div>
        </div>
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
