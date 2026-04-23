'use client';

import * as Checkbox from '@/components/ui/checkbox';
import * as Label from '@/components/ui/label';

export default function BlockCheckbox() {
  return (
    <div className='flex w-[200px] shrink-0 flex-col -space-y-px divide-y divide-stroke-soft-200 rounded-2xl bg-bg-white-0 shadow-custom-sm'>
      <div className='flex flex-col gap-3 p-4 pb-5'>
        <div className='text-label-sm text-text-soft-400'>
          Performance Metrics
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <Checkbox.Root id='c1' defaultChecked />
            <Label.Root htmlFor='c1'>ROI</Label.Root>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox.Root id='c2' />
            <Label.Root htmlFor='c2'>Volatility</Label.Root>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 p-4 pb-5'>
        <div className='text-label-sm text-text-soft-400'>Benchmarks</div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <Checkbox.Root id='c3' defaultChecked />
            <Label.Root htmlFor='c3'>Sharpe Ratio</Label.Root>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox.Root id='c4' />
            <Label.Root htmlFor='c4'>S&P 500</Label.Root>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox.Root id='c5' />
            <Label.Root htmlFor='c5'>Sector Average</Label.Root>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 p-4 pb-5'>
        <div className='text-label-sm text-text-soft-400'>Risk Analysis</div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <Checkbox.Root id='c6' defaultChecked />
            <Label.Root htmlFor='c6'>Value at Risk</Label.Root>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox.Root id='c7' />
            <Label.Root htmlFor='c7'>Beta</Label.Root>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox.Root id='c8' />
            <Label.Root htmlFor='c8'>Drawdown</Label.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
