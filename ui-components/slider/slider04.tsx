'use client';

import * as React from 'react';
import { RiCloseLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as Modal from '@/components/ui/modal';
import * as Radio from '@/components/ui/radio';
import * as Slider from '@/components/ui/slider';
import * as Tooltip from '@/components/ui/tooltip';

export function FilterUI() {
  const [value, setValue] = React.useState<number[]>([250]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [selectedPropertyType, setSelectedPropertyType] = React.useState('all');

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
    <Modal.Root defaultOpen open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke'>
          Open Filters
        </Button.Root>
      </Modal.Trigger>
      <Modal.Content
        showClose={false}
        className='max-w-[380px] shadow-custom-md rounded-20'
      >
        <Modal.Header className='flex items-center justify-between px-5 py-3 text-label-md text-text-sub-600'>
          <span>Search filters</span>
          <CompactButton.Root fullRadius variant='ghost' tabIndex={-1}>
            <CompactButton.Icon as={RiCloseLine} />
          </CompactButton.Root>
        </Modal.Header>

        <Modal.Body className='flex flex-col gap-5'>
          {/* Display Order Section */}
          <div className='space-y-3'>
            <Label.Root className='text-label-sm text-text-strong-950'>
              Display order
            </Label.Root>
            <Radio.Group defaultValue='luxury'>
              <div className='space-y-3'>
                <div className='flex items-center gap-2 group/radio'>
                  <Radio.Item value='popular' id='popular' />
                  <Label.Root
                    htmlFor='popular'
                    className='text-label-sm group-has-[[data-state=checked]]/radio:text-text-strong-950 text-text-sub-600'
                  >
                    Most popular
                  </Label.Root>
                </div>
                <div className='flex items-center gap-2 group/radio'>
                  <Radio.Item value='recent' id='recent' />
                  <Label.Root
                    htmlFor='recent'
                    className='text-label-sm text-text-sub-600 group-has-[[data-state=checked]]/radio:text-text-strong-950'
                  >
                    Recently added
                  </Label.Root>
                </div>
                <div className='flex items-center gap-2 group/radio'>
                  <Radio.Item value='luxury' id='luxury' />
                  <Label.Root
                    htmlFor='luxury'
                    className='text-label-sm text-text-sub-600 group-has-[[data-state=checked]]/radio:text-text-strong-950'
                  >
                    Luxury first
                  </Label.Root>
                </div>
              </div>
            </Radio.Group>
          </div>

          {/* Nightly Rate Section */}
          <div className='space-y-1'>
            <div className='flex items-center justify-between'>
              <Label.Root className='text-label-sm text-text-strong-950'>
                Nightly rate
              </Label.Root>
              <Label.Root className='text-label-sm text-text-sub-600'>
                {formatCurrency(value[0] ?? 0)}
              </Label.Root>
            </div>
            <Slider.Root
              defaultValue={[250]}
              min={0}
              max={500}
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
            </Slider.Root>
          </div>

          {/* Property Type Section */}
          <div className='space-y-2.5'>
            <Label.Root className='text-label-sm text-text-strong-950'>
              Property type
            </Label.Root>
            <div className='flex flex-wrap gap-2.5'>
              <div
                className={`text-label-sm px-3 py-1 cursor-pointer border rounded-full ${
                  selectedPropertyType === 'all'
                    ? 'bg-primary-alpha-10 text-primary-base'
                    : 'text-sub-600 bg-bg-white-0 border-soft-200 hover:bg-bg-soft-100'
                }`}
                onClick={() => setSelectedPropertyType('all')}
              >
                All Properties
              </div>
              <div
                className={`text-label-sm px-3 py-1 cursor-pointer border rounded-full ${
                  selectedPropertyType === 'hotels'
                    ? 'bg-primary-alpha-10 text-primary-base'
                    : 'text-sub-600 bg-bg-white-0 border-soft-200 hover:bg-bg-soft-100'
                }`}
                onClick={() => setSelectedPropertyType('hotels')}
              >
                Hotels
              </div>
              <div
                className={`text-label-sm px-3 py-1 cursor-pointer border rounded-full ${
                  selectedPropertyType === 'resorts'
                    ? 'bg-primary-alpha-10 text-primary-base'
                    : 'text-sub-600 bg-bg-white-0 border-soft-200 hover:bg-bg-soft-100'
                }`}
                onClick={() => setSelectedPropertyType('resorts')}
              >
                Resorts
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className='flex items-center justify-between gap-2 pl-6'>
          <Modal.Close asChild>
            <LinkButton.Root variant='gray' size='medium'>
              Clear all
            </LinkButton.Root>
          </Modal.Close>
          <Button.Root variant='neutral' size='small' className='rounded-10'>
            Show Results
          </Button.Root>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}

export default function FilterDemo() {
  return <FilterUI />;
}
