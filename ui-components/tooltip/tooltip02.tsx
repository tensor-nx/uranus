'use client';

import * as React from 'react';

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
          Device Stats
        </Button.Root>
      </Tooltip.Trigger>
      <Tooltip.Content
        size='medium'
        variant='light'
        className='w-[220px] p-0'
        side={tooltipSide}
      >
        <div className='flex flex-col'>
          <div className='px-4 pt-2.5'>
            <div className='text-label-sm text-text-strong-950'>
              Impressions
            </div>
            <div className='text-paragraph-xs text-text-sub-600'>
              Tuesday 19 November 2024
            </div>
          </div>

          <div className='space-y-3 px-4 py-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='size-3 rounded-full bg-success-base'></div>
                <span className='text-label-xs text-text-sub-600'>Desktop</span>
              </div>
              <span className='text-label-xs text-text-sub-600'>1</span>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='size-3 rounded-full bg-feature-base'></div>
                <span className='text-label-xs text-text-sub-600'>Mobile</span>
              </div>
              <span className='text-label-xs text-text-sub-600'>49</span>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='size-3 rounded-full bg-error-base'></div>
                <span className='text-label-xs text-text-sub-600'>Tablet</span>
              </div>
              <span className='text-label-xs text-text-sub-600'>5</span>
            </div>
          </div>
        </div>
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
