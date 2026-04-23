'use client';

import * as React from 'react';
import {
  RiCloseLine,
  RiHistoryFill,
  RiImageAiLine,
  RiZoomInLine,
  RiZoomOutLine,
} from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';
import * as Slider from '@/components/ui/slider';

export function ImageEditor() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [zoomLevel, setZoomLevel] = React.useState(100);
  const [rotation, setRotation] = React.useState(0);
  const imageRef = React.useRef<HTMLImageElement>(null);
  const sliderRef = React.useRef<HTMLInputElement>(null);

  const handleZoomChange = React.useCallback(
    ([value = 100]: number[]) => {
      setZoomLevel(value);
      if (imageRef.current) {
        const scale = value / 100;
        imageRef.current.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
      }
    },
    [rotation],
  );

  const handleZoomIn = React.useCallback(() => {
    const newZoom = Math.min(zoomLevel + 10, 200);
    setZoomLevel(newZoom);
    if (imageRef.current) {
      const scale = newZoom / 100;
      imageRef.current.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    }
  }, [zoomLevel, rotation]);

  const handleZoomOut = React.useCallback(() => {
    const newZoom = Math.max(zoomLevel - 10, 50);
    setZoomLevel(newZoom);
    if (imageRef.current) {
      const scale = newZoom / 100;
      imageRef.current.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    }
  }, [zoomLevel, rotation]);

  const handleRotate = React.useCallback(() => {
    setRotation((prev) => {
      const newRotation = (prev + 90) % 360;
      if (imageRef.current) {
        const scale = zoomLevel / 100;
        imageRef.current.style.transform = `scale(${scale}) rotate(${newRotation}deg)`;
      }
      return newRotation;
    });
  }, [zoomLevel]);

  return (
    <div className='w-full max-w-[836px]'>
      <div className='relative flex w-full max-w-[836px] flex-row gap-3'>
        <div className='w-full max-w-[800px] overflow-hidden rounded-20 bg-bg-white-0 shadow-regular-md'>
          <div className='flex items-center justify-between p-4'>
            <span className='cursor-pointer text-label-sm text-primary-base'>
              Clear all files
            </span>
            <span className='text-label-sm text-text-sub-600'>
              emma-wright-avatar.png
            </span>
            <span className='cursor-pointer text-label-sm text-primary-base'>
              Saves
            </span>
          </div>

          <div className='relative flex flex-col items-center p-1 pt-0'>
            <div className='relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#00000068]'>
              <div className='relative aspect-[792/528] w-full max-w-[792px]'>
                <div
                  className='absolute left-1/2 top-0 aspect-square h-full -translate-x-1/2 overflow-hidden'
                  style={{ width: 'calc(528 * 100% / 792)' }}
                >
                  <img
                    ref={imageRef}
                    src='https://alignui.com/images/avatar/photo/matthew-hd.png'
                    alt='Image to edit'
                    className='h-full w-full origin-center object-cover transition-transform duration-200'
                  />
                  <div className='pointer-events-none absolute inset-0 z-10 grid grid-cols-3 grid-rows-3'>
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={`white-${i}`}
                        className='relative border border-dashed border-[#FFFFFF] opacity-[0.36]'
                        style={{
                          borderTop: i < 3 ? 'none' : undefined,
                          borderBottom: i >= 6 ? 'none' : undefined,
                        }}
                      />
                    ))}
                  </div>
                  <div className='pointer-events-none absolute inset-0 z-20 grid grid-cols-3 grid-rows-3'>
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={`blue-${i}`}
                        className='relative'
                        style={{
                          borderLeft:
                            i % 3 === 0 ? '2px solid #335CFF' : 'none',
                          borderRight:
                            (i + 1) % 3 === 0 ? '2px solid #335CFF' : 'none',
                        }}
                      >
                        {(i % 3 === 0 || (i + 1) % 3 === 0) && (
                          <div className='absolute inset-0 flex flex-col justify-between'>
                            {Array.from({ length: 4 }).map((_, j) => (
                              <div
                                key={j}
                                className='h-2 w-2 rounded-full bg-[#335CFF]'
                                style={{ marginTop: `${j * 25}%` }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className='pointer-events-none absolute left-1/2 top-0 h-full -translate-x-1/2'
                  style={{ width: 'calc(528 * 100% / 792)' }}
                >
                  <div className='absolute left-[-3px] top-0 z-30 h-full w-2'>
                    <div className='flex h-full flex-col justify-between'>
                      <div className='size-2 rounded-sm bg-[#335CFF]' />
                      <div className='size-2 rounded-sm bg-[#335CFF]' />
                      <div className='size-2 rounded-sm bg-[#335CFF]' />
                      <div className='size-2 rounded-sm bg-[#335CFF]' />
                    </div>
                  </div>

                  <div className='absolute right-[-3px] top-0 z-30 h-full w-2'>
                    <div className='flex h-full flex-col justify-between'>
                      <div className='size-2 rounded-sm bg-[#335CFF]' />
                      <div className='size-2 rounded-sm bg-[#335CFF]' />
                      <div className='size-2 rounded-sm bg-[#335CFF]' />
                      <div className='size-2 rounded-sm bg-[#335CFF]' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Toolbar */}
            <div className='absolute bottom-6 left-1/2 z-10 flex w-auto max-w-full -translate-x-1/2 scale-90 items-center gap-2 rounded-full bg-[#00000048] px-2 py-2 backdrop-blur sm:scale-100 sm:gap-4 sm:px-4 sm:py-3'>
              <RiHistoryFill
                className='size-5 cursor-pointer text-static-white sm:size-6'
                onClick={handleRotate}
              />
              <RiImageAiLine className='size-5 cursor-pointer text-static-white sm:size-6' />

              <Slider.Root
                ref={sliderRef}
                value={[zoomLevel]}
                min={50}
                max={200}
                step={1}
                className='h-[3px] w-[120px] bg-none sm:w-[200px] 
                            [&_[data-orientation=horizontal]:not([role=slider])]:h-[3px] 
                            [&_[data-orientation=horizontal]:not([role=slider])]:bg-[#ffffff52]
                            [&_[data-orientation=horizontal]_[data-orientation=horizontal]]:bg-transparent'
                onValueChange={handleZoomChange}
              >
                <Slider.Thumb className='!size-4 shrink-0 border-none bg-[#FFFFFF] sm:!size-5' />
              </Slider.Root>

              <RiZoomInLine
                className='size-5 cursor-pointer text-static-white sm:size-6'
                onClick={handleZoomIn}
              />

              <RiZoomOutLine
                className='size-5 cursor-pointer text-static-white sm:size-6'
                onClick={handleZoomOut}
              />
            </div>
          </div>
        </div>
        <CompactButton.Root
          fullRadius
          className='z-40'
          onClick={() => setIsOpen(false)}
        >
          <CompactButton.Icon as={RiCloseLine} />
        </CompactButton.Root>
      </div>
    </div>
  );
}

export default function ImageEditorDemo() {
  return <ImageEditor />;
}
