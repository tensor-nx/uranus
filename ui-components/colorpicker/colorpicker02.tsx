'use client';

import * as React from 'react';
import { RiCheckFill } from '@remixicon/react';
import { parseColor } from 'react-aria-components';

import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
import * as Modal from '@/components/ui/modal';
const GRAYSCALE_COLORS = [
  '#FFFFFF',
  '#EBEBEB',
  '#D1D1D1',
  '#A3A3A3',
  '#5C5C5C',
  '#333333',
];
const THEME_COLORS = ['#335CFF', '#47C2FF', '#7D52F4', '#F6B51E', '#FB4BA3'];

// Color button component
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
      className='relative h-8 w-8'
      onClick={() => onSelect(colorHex)}
    >
      <div
        className={`absolute inset-0 rounded-full ${isWhite ? 'border border-stroke-soft-200' : ''}`}
        style={{ backgroundColor: colorHex }}
      />

      {isSelected && (
        <>
          <div className='absolute -inset-1.5'>
            <div className='absolute inset-0 rounded-full border-[3px] border-stroke-white-0' />
            <div className='absolute inset-[3px] rounded-full border border-stroke-soft-200' />
          </div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <RiCheckFill
              className={`size-5 ${
                isWhite ? 'text-text-disabled-300' : 'text-text-white-0'
              }`}
            />
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
  <div className='flex gap-2.5'>
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
  const [color, setColor] = React.useState(parseColor('#5C5C5C'));
  const [selectedHex, setSelectedHex] = React.useState('#5C5C5C');
  const [open, setOpen] = React.useState(true);

  const handleColorSelect = (colorHex: string) => {
    setColor(parseColor(colorHex));
    setSelectedHex(colorHex);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-bg-white-0 px-4 py-4'>
      <Modal.Root defaultOpen open={open} onOpenChange={setOpen}>
        <Modal.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            Open Color Picker
          </Button.Root>
        </Modal.Trigger>

        <Modal.Content className='max-w-[282px] shadow-regular-md'>
          {/* Header */}
          <Modal.Header title='Color picker'>
            <div className='flex w-full items-center justify-between'>
              <span className='text-label-sm text-text-strong-950'>
                Color picker
              </span>
            </div>
          </Modal.Header>

          {/* Content */}
          <Modal.Body className='flex flex-col gap-4 p-4'>
            <div className='flex items-center justify-between'>
              <span className='text-label-sm text-text-sub-600'>
                Theme colors
              </span>
              <LinkButton.Root variant='primary'>Edit</LinkButton.Root>
            </div>

            {/* Color Grid */}
            <div className='space-y-2.5'>
              {/* Grayscale colors */}
              <ColorPalette
                colors={GRAYSCALE_COLORS}
                selectedHex={selectedHex}
                onColorSelect={handleColorSelect}
              />

              {/* Colored swatches */}
              <ColorPalette
                colors={THEME_COLORS}
                selectedHex={selectedHex}
                onColorSelect={handleColorSelect}
              />
            </div>

            <div className='text-label-xs text-text-soft-400'>
              #{selectedHex.replace('#', '').toUpperCase()}
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
}
