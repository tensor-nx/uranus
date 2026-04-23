'use client';

import * as React from 'react';
import { parseColor } from 'react-aria-components';

import * as ColorPicker from '@/components/ui/color-picker';
import * as Popover from '@/components/ui/popover';
const BLUE_COLORS = ['#D5E2FF', '#97BAFF', '#335CFF', '#2547D0', '#182F8B'];

export default function ColorPickerBlock() {
  const defaultColor = BLUE_COLORS[2] as string;
  const [colors, setColors] = React.useState(
    BLUE_COLORS.map((color) => parseColor(color)),
  );
  const [selectedHex, setSelectedHex] = React.useState(defaultColor);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const handleColorSelect = (colorHex: string, index: number) => {
    setSelectedHex(colorHex);
    setSelectedIndex(index);
  };

  const handleColorChange = (newColor: any, index: number) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-bg-white-0 px-4 py-4'>
      <div className='flex flex-col gap-2'>
        {colors.map((color, index) => (
          <Popover.Root key={index}>
            <Popover.Trigger asChild>
              <button
                className='relative size-[36px] overflow-visible rounded-md focus:outline-none'
                onClick={() => handleColorSelect(color.toString(), index)}
              >
                <div
                  className='absolute inset-[6px] rounded-md'
                  style={{ backgroundColor: color.toString() }}
                />
                {selectedIndex === index && (
                  <>
                    <div className='absolute inset-[3px] rounded-xl' />
                    <div className='absolute inset-0 rounded-xl border-[3px] border-[#335CFF1F]' />
                  </>
                )}
              </button>
            </Popover.Trigger>
            <Popover.Content
              align='start'
              side='right'
              sideOffset={8}
              className='shadow-lg w-[314px] overflow-hidden rounded-l-10 rounded-r-20 bg-bg-white-0 p-2.5'
            >
              <div className='flex items-center gap-2.5'>
                <div
                  className='h-4 w-4 shrink-0 rounded-full'
                  style={{ backgroundColor: color.toString() }}
                />

                <ColorPicker.Root
                  value={color}
                  onChange={(newColor) => handleColorChange(newColor, index)}
                >
                  <ColorPicker.Slider
                    colorSpace='hsl'
                    channel='hue'
                    className='h-4 w-full !p-0'
                  >
                    <ColorPicker.SliderTrack className='h-full rounded-full'>
                      <div className='absolute inset-x-2 h-full'>
                        <ColorPicker.Thumb className='top-1/2 h-3 w-3 -translate-y-1/2 rounded-full !bg-bg-white-0 ring-0' />
                      </div>
                    </ColorPicker.SliderTrack>
                  </ColorPicker.Slider>
                </ColorPicker.Root>
              </div>
            </Popover.Content>
          </Popover.Root>
        ))}
      </div>
    </div>
  );
}
