'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import { RiEqualizerLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Switch from '@/components/ui/switch';
const integrations = [
  {
    id: 'microsoft-office-365',
    name: 'Microsoft Office 365',
    description: 'Seamless collaboration and document management.',
    icon: 'https://alignui.com/images/major-brands/microsoft-office.svg',
  },
  {
    id: 'zoom',
    name: 'Zoom',
    description: 'For conducting virtual meetings and interviews.',
    icon: 'https://alignui.com/images/major-brands/zoom.svg',
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'For team communication and real-time collaboration.',
    icon: 'https://alignui.com/images/major-brands/slack.svg',
  },
  {
    id: 'trello',
    name: 'Trello',
    description: 'For task management and project collaboration.',
    icon: 'https://alignui.com/images/major-brands/trello.svg',
  },
];

export default function BlockSwitch() {
  return (
    <div className='flex w-full max-w-[480px] flex-col gap-5 rounded-20 bg-bg-white-0 p-5 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-3.5'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
            <RiEqualizerLine className='size-5 text-text-sub-600' />
          </div>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Integrations
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Choose what notifications you want to receive.
            </div>
          </div>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='flex flex-col gap-3'>
          {integrations.map(({ id, icon, name, description }) => (
            <LabelPrimitives.Root
              key={id}
              className='flex cursor-pointer items-center gap-3.5 rounded-xl bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'
            >
              <div className='flex size-10 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
                <img src={icon} className='size-6' alt={name + ' logo'} />
              </div>

              <div className='flex-1'>
                <div className='text-label-sm text-text-strong-950'>{name}</div>
                {description && (
                  <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                    {description}
                  </div>
                )}
              </div>

              <Switch.Root />
            </LabelPrimitives.Root>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-3'>
        <Button.Root variant='neutral' mode='stroke' size='small'>
          Discard
        </Button.Root>
        <Button.Root size='small'>Apply Changes</Button.Root>
      </div>
    </div>
  );
}
