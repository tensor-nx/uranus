'use client';

import * as React from 'react';
import {
  RiCloseLine,
  RiInformationFill,
  RiSettings2Line,
} from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as Divider from '@/components/ui/divider';
import * as Hint from '@/components/ui/hint';
import * as Radio from '@/components/ui/radio';
import * as Select from '@/components/ui/select';
const LANGUAGES = [
  {
    value: 'en',
    label: 'English (US)',
    flag: 'https://alignui.com/flags/US.svg',
  },
  {
    value: 'de',
    label: 'German',
    flag: 'https://alignui.com/flags/DE.svg',
  },
  {
    value: 'fr',
    label: 'French',
    flag: 'https://alignui.com/flags/FR.svg',
  },
];

const LOCATIONS = [
  {
    value: 'de',
    label: 'Germany',
    flag: 'https://alignui.com/flags/DE.svg',
  },
  {
    value: 'fr',
    label: 'France',
    flag: 'https://alignui.com/flags/FR.svg',
  },
  {
    value: 'uk',
    label: 'United Kingdom',
    flag: 'https://alignui.com/flags/GB.svg',
  },
];

function IconInfoCustomFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      fill='none'
      viewBox='0 0 20 20'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M10 16.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm1.116-3.041l.1-.408a1.709 1.709 0 01-.25.083 1.176 1.176 0 01-.308.048c-.193 0-.329-.032-.407-.095-.079-.064-.118-.184-.118-.359a3.514 3.514 0 01.118-.672l.373-1.318c.037-.121.062-.255.075-.4a3.73 3.73 0 00.02-.304.866.866 0 00-.292-.678c-.195-.174-.473-.26-.833-.26-.2 0-.412.035-.636.106a9.37 9.37 0 00-.704.256l-.1.409a3.49 3.49 0 01.262-.087c.101-.03.2-.045.297-.045.198 0 .331.034.4.1.07.066.105.185.105.354 0 .093-.01.197-.034.31a6.216 6.216 0 01-.084.36l-.374 1.325c-.033.14-.058.264-.073.374a2.42 2.42 0 00-.022.325c0 .272.1.496.301.673.201.177.483.265.846.265.236 0 .443-.03.621-.092s.417-.152.717-.27zM11.05 7.85a.772.772 0 00.26-.587.78.78 0 00-.26-.59.885.885 0 00-.628-.244.893.893 0 00-.63.244.778.778 0 00-.264.59c0 .23.088.426.263.587a.897.897 0 00.63.243.888.888 0 00.629-.243z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export default function PreferencesRadio() {
  const [selectedPreference, setSelectedPreference] = React.useState('weekly');
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');
  const [selectedLocation, setSelectedLocation] = React.useState('de');

  const selectedLangInfo = LANGUAGES.find(
    (lang) => lang.value === selectedLanguage,
  );
  const selectedLocInfo = LOCATIONS.find(
    (loc) => loc.value === selectedLocation,
  );

  return (
    <div className='w-full max-w-[440px] rounded-20 bg-bg-white-0 shadow-custom-md'>
      <div className='flex items-start justify-between gap-2 border-b border-stroke-soft-200 py-4 pl-5 pr-4'>
        <div className='flex items-center gap-3.5'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
            <RiSettings2Line className='size-5 text-text-sub-600' />
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-label-sm text-text-strong-950'>
              Edit Your Preferences
            </h3>
            <div className='text-paragraph-xs text-text-sub-600'>
              Customize your preferences to your experience.
            </div>
          </div>
        </div>
        <CompactButton.Root variant='ghost' size='large'>
          <CompactButton.Icon as={RiCloseLine} />
        </CompactButton.Root>
      </div>

      <div className='flex flex-col gap-3 p-5'>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-1'>
            <span className='text-label-sm text-text-strong-950'>Language</span>
            <span className='text-paragraph-xs text-primary-base'>*</span>
          </div>
          <Select.Root
            value={selectedLanguage}
            onValueChange={setSelectedLanguage}
          >
            <Select.Trigger>
              <Select.Value>
                <div className='flex items-center gap-2'>
                  <img
                    src={selectedLangInfo?.flag}
                    alt={`${selectedLangInfo?.label} flag`}
                    className='h-4 w-4 rounded-full object-cover'
                  />
                  <span className='text-paragraph-sm text-text-strong-950'>
                    {selectedLangInfo?.label}
                  </span>
                </div>
              </Select.Value>
            </Select.Trigger>
            <Select.Content>
              {LANGUAGES.map((lang) => (
                <Select.Item key={lang.value} value={lang.value}>
                  <div className='flex items-center gap-2'>
                    <img
                      src={lang.flag}
                      alt={`${lang.label} flag`}
                      className='size-5 rounded-full object-cover'
                    />
                    {lang.label}
                  </div>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-px'>
            <span className='text-label-sm text-text-strong-950'>Location</span>
            <IconInfoCustomFill className='size-5 text-text-disabled-300' />
          </div>
          <Select.Root
            value={selectedLocation}
            onValueChange={setSelectedLocation}
          >
            <Select.Trigger>
              <Select.Value>
                <div className='flex items-center gap-2'>
                  <img
                    src={selectedLocInfo?.flag}
                    alt={`${selectedLocInfo?.label} flag`}
                    className='size-5 rounded-full object-cover'
                  />
                  <span className='text-paragraph-sm text-text-strong-950'>
                    {selectedLocInfo?.label}
                  </span>
                </div>
              </Select.Value>
            </Select.Trigger>
            <Select.Content>
              {LOCATIONS.map((loc) => (
                <Select.Item key={loc.value} value={loc.value}>
                  <div className='flex items-center gap-2'>
                    <img
                      src={loc.flag}
                      alt={`${loc.label} flag`}
                      className='h-4 w-4 rounded-full object-cover'
                    />
                    {loc.label}
                  </div>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <Hint.Root>
            <Hint.Icon as={RiInformationFill} />
            Select your preferred location for personalized recommendations.
          </Hint.Root>
        </div>
      </div>

      <Divider.Root variant='line' />

      <div className='flex flex-col gap-3 p-5'>
        <div className='flex items-center gap-px'>
          <span className='text-label-sm text-text-strong-950'>
            Email Preferences
          </span>
          <IconInfoCustomFill className='size-5 text-text-disabled-300' />
        </div>
        <Radio.Group
          value={selectedPreference}
          onValueChange={setSelectedPreference}
          className='flex flex-col gap-3'
        >
          <div
            onClick={() => setSelectedPreference('weekly')}
            className={`cursor-pointer rounded-xl p-4 ring-1 transition-all duration-200 ease-in-out ${
              selectedPreference === 'weekly'
                ? 'bg-primary-lighter ring-primary-base'
                : 'hover:bg-bg-soft-50 ring-stroke-soft-200'
            }`}
          >
            <div className='flex items-start justify-between gap-3.5'>
              <div className='flex flex-col gap-1'>
                <span className='text-label-sm text-text-strong-950'>
                  Receive Weekly Update
                </span>
                <span className='text-paragraph-xs text-text-sub-600'>
                  Stay informed with weekly updates and exclusive content.
                </span>
              </div>
              <Radio.Item
                id='weekly'
                value='weekly'
                className='cursor-pointer'
              />
            </div>
          </div>

          <div
            onClick={() => setSelectedPreference('marketing')}
            className={`cursor-pointer rounded-xl p-4 ring-1 transition-all duration-200 ease-in-out ${
              selectedPreference === 'marketing'
                ? 'bg-primary-lighter ring-primary-base'
                : 'hover:bg-bg-soft-50 ring-stroke-soft-200'
            }`}
          >
            <div className='flex items-start justify-between gap-3.5'>
              <div className='flex flex-col gap-1'>
                <span className='text-label-sm text-text-strong-950'>
                  Opt-out from Marketing Emails
                </span>
                <span className='text-paragraph-xs text-text-sub-600'>
                  Choose not to receive marketing emails from us.
                </span>
              </div>
              <Radio.Item
                id='marketing'
                value='marketing'
                className='cursor-pointer'
              />
            </div>
          </div>
        </Radio.Group>
        <Alert.Root
          size='xsmall'
          variant='lighter'
          status='information'
          wrapperClassName='flex items-center'
        >
          <Alert.Icon as={RiInformationFill} />
          <span className='text-paragraph-xs text-text-strong-950'>
            You&apos;ll receive a weekly update with the email you signed up.
          </span>
        </Alert.Root>
      </div>

      <div className='flex items-center justify-between gap-3 border-t border-stroke-soft-200 px-5 py-4'>
        <Button.Root
          variant='neutral'
          mode='stroke'
          size='small'
          className='flex-1'
        >
          Cancel
        </Button.Root>
        <Button.Root size='small' variant='primary' className='flex-1'>
          Save Changes
        </Button.Root>
      </div>
    </div>
  );
}
