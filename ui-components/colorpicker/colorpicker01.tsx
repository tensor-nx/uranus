'use client';

import * as React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { RiAddLine, RiDeleteBinLine } from '@remixicon/react';
import { Input as AriaInput, Color, parseColor } from 'react-aria-components';

import * as Button from '@/components/ui/button';
import * as ColorPicker from '@/components/ui/color-picker';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';

export default function ColorPickerBlock() {
  const [color, setColor] = React.useState(parseColor('#EE2121'));
  const [activeTab, setActiveTab] = React.useState('image');

  return (
    <div>
      <div className='max-w-[314px] rounded-20 bg-bg-white-0 shadow-custom-md'>
        <Tabs.Root defaultValue='image' onValueChange={setActiveTab}>
          <Tabs.List className='relative flex gap-3 border-b border-stroke-soft-200 px-4'>
            <div
              className='absolute -bottom-px h-px bg-primary-base transition-all duration-200 ease-in-out'
              style={{
                left:
                  activeTab === 'image'
                    ? '16px'
                    : activeTab === 'solid'
                      ? 'calc(33.33% + 12px)'
                      : 'calc(66.66% + 12px)',
                width:
                  activeTab === 'image'
                    ? 'calc(33.33% - 28px)'
                    : activeTab === 'solid'
                      ? 'calc(33.33% - 24px)'
                      : 'calc(33.33% - 28px)',
              }}
            />

            <Tabs.Trigger
              value='image'
              className='relative flex-1 py-3 text-label-sm text-text-soft-400 transition-colors duration-200 data-[state=active]:text-text-strong-950'
            >
              Image
            </Tabs.Trigger>
            <div className='flex items-center'>
              <Divider.Root className='h-4 border-l border-stroke-soft-200' />
            </div>
            <Tabs.Trigger
              value='solid'
              className='relative flex-1 py-3 text-label-sm text-text-soft-400 transition-colors duration-200 data-[state=active]:text-text-strong-950'
            >
              Solid
            </Tabs.Trigger>
            <div className='flex items-center'>
              <Divider.Root className='h-4 border-l border-stroke-soft-200' />
            </div>
            <Tabs.Trigger
              value='gradient'
              className='relative flex-1 py-3 text-label-sm text-text-soft-400 transition-colors duration-200 data-[state=active]:text-text-strong-950'
            >
              Gradient
            </Tabs.Trigger>
          </Tabs.List>

          <div className='flex-1'>
            <Tabs.Content value='image'>
              <ColorPickerContent color={color} setColor={setColor} />
            </Tabs.Content>

            <Tabs.Content value='solid'>
              <ColorPickerContent color={color} setColor={setColor} />
            </Tabs.Content>

            <Tabs.Content value='gradient'>
              <ColorPickerContent color={color} setColor={setColor} />
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}

function ColorPickerContent({
  color,
  setColor,
}: {
  color: Color;
  setColor: (color: Color) => void;
}) {
  return (
    <ColorPicker.Root value={color} onChange={setColor}>
      {/* Primary color selection area */}
      <div className='border-b border-stroke-soft-200 p-4'>
        <div className='relative h-[160px] w-full overflow-hidden rounded-lg'>
          <ColorPicker.Area
            colorSpace='hsb'
            xChannel='saturation'
            yChannel='brightness'
            className='h-[148px] w-full'
          >
            <ColorPicker.Thumb className='h-4 w-4 rounded-full border-2 border-white ring-0' />
          </ColorPicker.Area>
        </div>

        {/* Color spectrum slider */}
        <ColorPicker.Slider
          colorSpace='hsl'
          channel='hue'
          className='mt-4 h-4 !p-0'
        >
          <ColorPicker.SliderTrack className='h-full rounded-full'>
            <div className='absolute inset-x-2 h-full'>
              <ColorPicker.Thumb className='top-1/2 h-3 w-3 -translate-y-1/2 rounded-full !bg-bg-white-0 ring-0' />
            </div>
          </ColorPicker.SliderTrack>
        </ColorPicker.Slider>

        {/* Lower control area */}
        <div className='mt-4 flex items-center gap-2.5'>
          {/* Trash can button */}
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='xsmall'
            className='w-8'
          >
            <RiDeleteBinLine className='size-5 shrink-0' />
          </Button.Root>

          <div className='flex flex-1 -space-x-px'>
            {/* Hex color input field */}
            <Input.Root
              size='small'
              className='flex-[2] rounded-r-none focus-within:z-10 hover:[&:not(:focus-within)]:before:!ring-stroke-soft-200'
              asChild
            >
              <ColorPicker.Field colorSpace='hsb'>
                <Input.Wrapper>
                  <div className='flex items-center gap-2'>
                    <div
                      className='h-3 w-3 shrink-0 rounded-full ring-0'
                      style={{ backgroundColor: color.toString() }}
                    />
                    <Input.Input asChild className='h-5'>
                      <AriaInput className='items-start justify-start text-label-sm text-text-sub-600' />
                    </Input.Input>
                  </div>
                </Input.Wrapper>
              </ColorPicker.Field>
            </Input.Root>

            {/* Opacity input field */}
            <Input.Root
              size='xsmall'
              className='flex-1 rounded-l-none focus-within:z-10 hover:[&:not(:focus-within)]:before:!ring-stroke-soft-200'
              asChild
            >
              <ColorPicker.Field channel='alpha'>
                <Input.Wrapper>
                  <Input.Input asChild>
                    <AriaInput aria-label='Alpha' />
                  </Input.Input>
                </Input.Wrapper>
              </ColorPicker.Field>
            </Input.Root>
          </div>
        </div>
      </div>

      {/* Add new color button */}
      <button className='flex w-full items-center justify-center gap-2 px-4 py-3.5 text-center'>
        <RiAddLine className='size-5 shrink-0 text-text-soft-400' />
        <span className='text-label-sm text-text-sub-600'>Add new color</span>
      </button>
    </ColorPicker.Root>
  );
}
