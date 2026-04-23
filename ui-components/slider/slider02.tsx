'use client';

import * as React from 'react';

import * as Badge from '@/components/ui/badge';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as Slider from '@/components/ui/slider';
import * as Tooltip from '@/components/ui/tooltip';

export function FilterUI() {
  const [value, setValue] = React.useState<number[]>([300, 450]);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(true);
  }, []);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className='w-full max-w-[340px] rounded-20 bg-bg-white-0 shadow-regular-md'>
      <div className='flex flex-col gap-4 p-5'>
        {/* Brand Section */}
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <Label.Root className='text-label-sm text-text-strong-950'>
              Brand
            </Label.Root>
            <LinkButton.Root variant='primary' size='medium'>
              See All
            </LinkButton.Root>
          </div>
          <Divider.Root />
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <Checkbox.Root id='audi' defaultChecked />
              <Label.Root
                htmlFor='audi'
                className='flex items-center gap-1 text-paragraph-sm text-text-strong-950'
              >
                Audi
                <Badge.Root variant='light' color='blue' size='small'>
                  NEW
                </Badge.Root>
              </Label.Root>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox.Root id='bmw' />
              <Label.Root
                htmlFor='bmw'
                className='flex items-center gap-2 text-paragraph-sm text-text-strong-950'
              >
                BMW
              </Label.Root>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox.Root id='chrysler' />
              <Label.Root
                htmlFor='chrysler'
                className='flex items-center gap-2 text-paragraph-sm text-text-strong-950'
              >
                Chrysler
              </Label.Root>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox.Root id='dodge' />
              <Label.Root
                htmlFor='dodge'
                className='flex items-center gap-2 text-paragraph-sm text-text-strong-950'
              >
                Dodge Challenger
              </Label.Root>
            </div>
          </div>
        </div>

        <Divider.Root />

        {/* Price Range Section */}
        <div className='flex flex-col gap-4'>
          <Label.Root className='text-label-sm text-text-strong-950'>
            Price Range
          </Label.Root>
          <Slider.Root
            defaultValue={[300, 450]}
            min={0}
            max={600}
            step={1}
            onValueChange={(val: number[]) => {
              setValue(val);
            }}
          >
            <Tooltip.Root open={isOpen}>
              <Tooltip.Trigger asChild>
                <Slider.Thumb />
              </Tooltip.Trigger>
              <Tooltip.Content size='xsmall' side='top' forceMount>
                {formatCurrency(value[0] ?? 0)}
              </Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root open={isOpen}>
              <Tooltip.Trigger asChild>
                <Slider.Thumb />
              </Tooltip.Trigger>
              <Tooltip.Content size='xsmall' side='top' forceMount>
                {formatCurrency(value[1] ?? 0)}
              </Tooltip.Content>
            </Tooltip.Root>
          </Slider.Root>
        </div>

        <Divider.Root />

        {/* Insurance Section */}
        <div className='flex flex-col gap-4'>
          <Label.Root className='text-label-sm text-text-strong-950'>
            No Insurance
          </Label.Root>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <Checkbox.Root id='no-insurance' defaultChecked />
              <Label.Root
                htmlFor='no-insurance'
                className='text-paragraph-sm text-text-strong-950'
              >
                No Insurance
              </Label.Root>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox.Root id='included' />
              <Label.Root
                htmlFor='included'
                className='text-paragraph-sm text-text-strong-950'
              >
                Included
              </Label.Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FilterDemo() {
  return <FilterUI />;
}
