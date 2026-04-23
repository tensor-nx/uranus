'use client';

import * as React from 'react';
import { RiContactsLine, RiInformationFill } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Select from '@/components/ui/select';
import * as Textarea from '@/components/ui/textarea';
const countries = [
  {
    icon: 'https://alignui.com/flags/US.svg',
    value: '+1',
    label: '+1',
    country: 'USA',
  },
  {
    icon: 'https://alignui.com/flags/TR.svg',
    value: '+90',
    label: '+90',
    country: 'Türkiye',
  },
  {
    icon: 'https://alignui.com/flags/ES.svg',
    value: '+34',
    label: '+34',
    country: 'Spain',
  },
  {
    icon: 'https://alignui.com/flags/FR.svg',
    value: '+33',
    label: '+33',
    country: 'France',
  },
  {
    icon: 'https://alignui.com/flags/DE.svg',
    value: '+49',
    label: '+49',
    country: 'Germany',
  },
  {
    icon: 'https://alignui.com/flags/GB.svg',
    value: '+44',
    label: '+44',
    country: 'United Kingdom',
  },
] as const;

function SelectPhoneCode() {
  return (
    <Select.Root variant='compactForInput' defaultValue={countries[0].value}>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        {countries.map((item) => (
          <Select.Item key={item.value} value={item.value}>
            <Select.ItemIcon
              style={{
                backgroundImage: `url(${item.icon})`,
              }}
            />
            <span className='flex gap-2'>{item.label}</span>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

const formatPhoneNumber = (value: string) => {
  const numbers = value.replace(/\D/g, '');

  const trimmed = numbers.slice(0, 10);

  if (trimmed.length === 0) return '';
  if (trimmed.length <= 3) return `(${trimmed}`;
  if (trimmed.length <= 6)
    return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3)}`;
  return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
};

const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const formattedValue = formatPhoneNumber(e.target.value);
  e.target.value = formattedValue;
};

function PhoneInput() {
  return (
    <Input.Root>
      <SelectPhoneCode />
      <Input.Wrapper>
        <Input.Input
          type='tel'
          placeholder='(555) 000-0000'
          maxLength={14}
          onInput={handlePhoneInput}
        />
      </Input.Wrapper>
    </Input.Root>
  );
}

export default function BlockTextInput() {
  return (
    <div className='flex w-full max-w-[400px] flex-col rounded-20 bg-bg-white-0 p-5 shadow-custom-md'>
      <div className='flex w-full items-center gap-[14px]'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
          <RiContactsLine className='size-5 text-text-sub-600' />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='text-label-sm text-text-strong-950'>
            Contact Information
          </div>
          <div className='text-paragraph-xs text-text-sub-600'>
            Enter your contact details for communication.
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Divider.Root />
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='email'>
            Email Address
            <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Input
                id='email'
                type='email'
                placeholder='sophia@alignui.com'
              />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <div className='flex items-baseline gap-1'>
            <Label.Root htmlFor='phone'>
              Phone Number
              <Label.Asterisk />
            </Label.Root>
          </div>
          <PhoneInput />
        </div>

        <div className='flex flex-col gap-1'>
          <div className='flex items-baseline gap-1'>
            <Label.Root htmlFor='address'>
              Address
              <Label.Asterisk />
            </Label.Root>
          </div>
          <Textarea.Root
            placeholder='Enter your full address here...'
            className='min-h-[54px] resize-none'
          >
            <Textarea.CharCounter current={0} max={200} />
          </Textarea.Root>
          <div className='flex items-center gap-2 text-text-sub-600'>
            <RiInformationFill className='size-5 text-text-soft-400' />
            <span className='text-paragraph-xs'>
              Input your residential address for HR records.
            </span>
          </div>
        </div>
      </div>

      <div className='flex gap-3 pt-5'>
        <Button.Root variant='neutral' mode='stroke' className='flex-1'>
          Discard
        </Button.Root>
        <Button.Root variant='primary' className='flex-1'>
          Apply Changes
        </Button.Root>
      </div>
    </div>
  );
}
