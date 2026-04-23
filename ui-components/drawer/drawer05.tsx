'use client';

import * as React from 'react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Drawer from '@/components/ui/drawer';
import * as Label from '@/components/ui/label';

export default function BlockDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex min-h-screen items-center justify-center bg-bg-white-0'>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            Open Filters
          </Button.Root>
        </Drawer.Trigger>

        <Drawer.Content className='absolute inset-y-0 mx-2 my-2 max-h-[calc(100%-16px)] w-[min(400px,calc(100%-16px))] rounded-20 bg-bg-white-0 shadow-custom-md'>
          <div className='flex h-full flex-col'>
            <Drawer.Header>
              <Drawer.Title className='text-label-lg text-text-strong-950'>
                Filters
              </Drawer.Title>
            </Drawer.Header>

            <Drawer.Body className='flex-1 overflow-y-auto'>
              <Divider.Root variant='solid-text'>EQUITY PLAN</Divider.Root>

              <div className='flex flex-col gap-4 p-5'>
                <div className='flex items-center gap-2'>
                  <Checkbox.Root id='stock' />
                  <Label.Root htmlFor='stock' className='text-paragraph-sm'>
                    Stock
                  </Label.Root>
                </div>
                <div className='flex items-center gap-2'>
                  <Checkbox.Root id='rsu' />
                  <Label.Root htmlFor='rsu' className='text-paragraph-sm'>
                    RSU
                  </Label.Root>
                </div>
                <div className='flex items-center gap-2'>
                  <Checkbox.Root id='cash-plans' defaultChecked />
                  <Label.Root
                    htmlFor='cash-plans'
                    className='text-paragraph-sm'
                  >
                    Cash Plans
                  </Label.Root>
                </div>
              </div>

              <Divider.Root variant='solid-text'>TIERS</Divider.Root>

              <div className='flex flex-col gap-4 p-5'>
                <div className='flex items-center gap-2'>
                  <Checkbox.Root id='preferred' defaultChecked />
                  <Label.Root htmlFor='preferred' className='text-paragraph-sm'>
                    Preferred
                  </Label.Root>
                </div>
                <div className='flex items-center gap-2'>
                  <Checkbox.Root id='possible' defaultChecked />
                  <Label.Root htmlFor='possible' className='text-paragraph-sm'>
                    Possible
                  </Label.Root>
                </div>
                <div className='flex items-center gap-2'>
                  <Checkbox.Root id='discouraged' />
                  <Label.Root
                    htmlFor='discouraged'
                    className='text-paragraph-sm'
                  >
                    Discouraged
                  </Label.Root>
                </div>

                <div className='flex items-center gap-2'>
                  <Checkbox.Root id='align-countries' />
                  <Label.Root
                    htmlFor='align-countries'
                    className='text-paragraph-sm'
                  >
                    Show only countries supported by Align
                  </Label.Root>
                </div>
              </div>
            </Drawer.Body>

            <Drawer.Footer className='flex justify-between gap-3 border-t border-stroke-soft-200 p-5'>
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='medium'
                className='flex-1'
                onClick={() => setOpen(false)}
              >
                Reset
              </Button.Root>
            </Drawer.Footer>
          </div>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}
