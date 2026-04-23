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
          Risk Report
        </Button.Root>
      </Tooltip.Trigger>
      <Tooltip.Content
        size='medium'
        variant='light'
        className='w-[226px] p-0'
        side={tooltipSide}
      >
        <div className='flex flex-col gap-2 px-4 py-2.5'>
          <div className='text-label-xs text-text-soft-400'>
            Risks identified as of Aug 20
          </div>

          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='size-3 rounded-sm bg-error-base'></div>
                <span className='text-label-xs text-text-sub-600'>High</span>
              </div>
              <span className='text-label-xs text-text-sub-600'>1</span>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='size-3 rounded-sm bg-warning-base'></div>
                <span className='text-label-xs text-text-sub-600'>Medium</span>
              </div>
              <span className='text-label-xs text-text-sub-600'>2</span>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='size-3 rounded-sm bg-success-base'></div>
                <span className='text-label-xs text-text-sub-600'>Low</span>
              </div>
              <span className='text-label-xs text-text-sub-600'>2</span>
            </div>

            <div className='border-border-strong-200 border-t pt-2'>
              <div className='flex items-center justify-between'>
                <span className='text-label-xs text-text-sub-600'>Total</span>
                <span className='text-label-xs text-text-sub-600'>5</span>
              </div>
            </div>
          </div>
        </div>
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
