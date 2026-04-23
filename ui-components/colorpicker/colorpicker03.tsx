'use client';

import * as React from 'react';
import { RiAddLine, RiDeleteBinLine } from '@remixicon/react';
import { Input as AriaInput, parseColor } from 'react-aria-components';

import * as Button from '@/components/ui/button';
import * as ColorPicker from '@/components/ui/color-picker';
import * as Input from '@/components/ui/input';
import * as LinkButton from '@/components/ui/link-button';
const GRAYSCALE_COLORS = [
  '#FFFFFF',
  '#F5F5F5',
  '#EBEBEB',
  '#D1D1D1',
  '#A3A3A3',
  '#7B7B7B',
  '#5C5C5C',
  '#333333',
];

const BLUE_COLORS = ['#D5E2FF', '#97BAFF', '#335CFF', '#2547D0', '#182F8B'];

const ColorButton = ({
  colorHex,
  selectedHex,
  onSelect,
}: {
  colorHex: string;
  selectedHex: string;
  onSelect: (colorHex: string) => void;
}) => {
  const isSelected = selectedHex === colorHex;
  const isWhite = colorHex === '#FFFFFF';

  return (
    <button
      key={colorHex}
      className='relative h-6 w-6'
      onClick={() => onSelect(colorHex)}
    >
      <div
        className={`absolute inset-0 rounded-full ${isWhite ? 'border border-stroke-soft-200' : ''}`}
        style={{ backgroundColor: colorHex }}
      />

      {isSelected && (
        <>
          <div className='absolute -inset-[5px]'>
            <div className='absolute inset-0 rounded-full border-stroke-white-0' />
          </div>
          <div className='absolute -inset-[5px]'>
            <div className='absolute inset-0 rounded-full border-2 border-[#335CFF1F]' />
          </div>
        </>
      )}
    </button>
  );
};

const ColorPalette = ({
  colors,
  selectedHex,
  onColorSelect,
}: {
  colors: string[];
  selectedHex: string;
  onColorSelect: (colorHex: string) => void;
}) => (
  <div className='flex gap-3'>
    {colors.map((colorHex) => (
      <ColorButton
        key={colorHex}
        colorHex={colorHex}
        selectedHex={selectedHex}
        onSelect={(color) => {
          onColorSelect(color);
        }}
      />
    ))}
  </div>
);

export default function ColorPickerBlock() {
  const [color, setColor] = React.useState(parseColor('#FF0000'));
  const [selectedHex, setSelectedHex] = React.useState('#FF0000');

  const handleColorSelect = (colorHex: string) => {
    setColor(parseColor(colorHex));
    setSelectedHex(colorHex);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-bg-white-0 px-4 py-4'>
      <div className='w-full max-w-[316px] overflow-hidden rounded-20 bg-bg-white-0 shadow-custom-md'>
        {/* Header */}
        <div className='flex w-full items-center justify-between px-5 py-4 pb-2.5'>
          <div className='text-label-sm text-text-sub-600'>Choose color</div>
          <div className='text-label-sm text-text-soft-400'>#FF0000</div>
        </div>

        {/* Color Picker Content */}
        <ColorPicker.Root value={color} onChange={setColor}>
          <div className='border-b border-stroke-soft-200 px-5 pb-5'>
            <ColorPicker.Slider
              colorSpace='hsl'
              channel='hue'
              className='h-3 !p-0'
            >
              <ColorPicker.SliderTrack className='h-full rounded-full'>
                <div className='absolute inset-x-1.5 h-full'>
                  <ColorPicker.Thumb className='shadow-md top-1/2 h-2 w-2 -translate-y-1/2 rounded-full !bg-bg-white-0 ring-0' />
                </div>
              </ColorPicker.SliderTrack>
            </ColorPicker.Slider>
          </div>

          <div className='flex items-center gap-2.5 border-b border-stroke-soft-200 p-5'>
            <div className='flex flex-1 -space-x-px'>
              {/* Hex color input field */}
              <Input.Root
                size='small'
                className='flex-[2] rounded-l-10 rounded-r-none focus-within:z-10 hover:[&:not(:focus-within)]:before:!ring-stroke-soft-200'
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
                size='small'
                className='max-w-[57px] flex-1 rounded-l-none rounded-r-10 focus-within:z-10 hover:[&:not(:focus-within)]:before:!ring-stroke-soft-200'
                asChild
              >
                <ColorPicker.Field channel='alpha'>
                  <Input.Wrapper>
                    <Input.Input asChild>
                      <AriaInput
                        aria-label='Alpha'
                        className='text-label-sm text-text-sub-600'
                      />
                    </Input.Input>
                  </Input.Wrapper>
                </ColorPicker.Field>
              </Input.Root>
            </div>

            {/* Trash can button */}
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='small'
              className='w-9'
            >
              <RiDeleteBinLine className='size-5 shrink-0' />
            </Button.Root>
          </div>

          <div className='flex flex-col gap-4 border-b border-stroke-soft-200 px-5 pb-5 pt-4'>
            <div className='flex items-center justify-between'>
              <span className='text-label-sm text-text-sub-600'>
                Saved colors
              </span>
              <LinkButton.Root variant='primary'>Edit</LinkButton.Root>
            </div>

            <div className='space-y-3'>
              <ColorPalette
                colors={GRAYSCALE_COLORS.slice(0, 8)}
                selectedHex={selectedHex}
                onColorSelect={handleColorSelect}
              />

              <ColorPalette
                colors={BLUE_COLORS}
                selectedHex={selectedHex}
                onColorSelect={handleColorSelect}
              />
            </div>
          </div>

          <button className='flex w-full items-center justify-center gap-2 px-4 py-3.5 text-center'>
            <RiAddLine className='size-5 shrink-0 text-text-soft-400' />
            <span className='text-label-sm text-text-sub-600'>
              Add new color
            </span>
          </button>
        </ColorPicker.Root>
      </div>
    </div>
  );
}
