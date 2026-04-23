'use client';

import * as React from 'react';
import { RiInformationFill } from '@remixicon/react';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Drawer from '@/components/ui/drawer';
import * as Hint from '@/components/ui/hint';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Select from '@/components/ui/select';
import * as Textarea from '@/components/ui/textarea';

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

const timezones = [
  { value: 'gmt-12', label: 'GMT-12:00 - Baker Island Time' },
  { value: 'gmt-8', label: 'GMT-8:00 - Pacific Standard Time' },
  { value: 'gmt-5', label: 'GMT-5:00 - Eastern Standard Time' },
  { value: 'gmt-4', label: 'GMT-4:00 - Atlantic Standard Time' },
  { value: 'gmt0', label: 'GMT+0:00 - Greenwich Mean Time' },
  { value: 'gmt1', label: 'GMT+1:00 - Central European Time' },
  { value: 'gmt3', label: 'GMT+3:00 - Eastern European Time' },
  { value: 'gmt8', label: 'GMT+8:00 - China Standard Time' },
];

const languages = [
  { value: 'en', label: 'English (US)', flag: 'US' },
  { value: 'de', label: 'Deutsch', flag: 'DE' },
  { value: 'fr', label: 'Français', flag: 'FR' },
  { value: 'tr', label: 'Türkçe', flag: 'TR' },
];

export default function ProfileDrawer() {
  const [open, setOpen] = React.useState(false);
  const [selectedTimezone, setSelectedTimezone] = React.useState('gmt-4');
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');
  const [biography, setBiography] = React.useState('');
  return (
    <div className='flex min-h-screen items-center justify-center bg-bg-white-0'>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            Open Profile
          </Button.Root>
        </Drawer.Trigger>

        <Drawer.Content className='absolute inset-y-0 mx-2 my-2 max-h-[calc(100%-16px)] w-[min(400px,calc(100%-16px))] rounded-20 bg-bg-white-0 shadow-custom-md'>
          <div className='flex h-full flex-col'>
            <Drawer.Header>
              <Drawer.Title className='text-label-lg text-text-strong-950'>
                Profile
              </Drawer.Title>
            </Drawer.Header>

            <Divider.Root variant='solid-text'>UPLOAD IMAGE</Divider.Root>

            <Drawer.Body className='flex-1 overflow-y-auto'>
              {/* Avatar Upload */}
              <div className='flex gap-5 p-5'>
                <Avatar.Root size='64' />
                <div className='space-y-3'>
                  <div className='space-y-1'>
                    <div className='text-label-md text-text-strong-950'>
                      Upload Image
                    </div>
                    <div className='text-paragraph-sm text-text-sub-600'>
                      Min 400x400px, PNG or JPEG
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <Button.Root variant='neutral' mode='stroke' size='xsmall'>
                      Upload
                    </Button.Root>
                  </div>
                </div>
              </div>

              <Divider.Root variant='solid-text'>INFORMATION</Divider.Root>

              {/* Form Fields */}
              <div className='space-y-3 p-5'>
                <div className='flex flex-col gap-1'>
                  <Label.Root htmlFor='fullname'>
                    Full Name <Label.Asterisk />
                  </Label.Root>
                  <Input.Root>
                    <Input.Wrapper>
                      <Input.Input
                        id='fullname'
                        type='text'
                        placeholder='Sophia Williams'
                        required
                      />
                    </Input.Wrapper>
                  </Input.Root>
                </div>

                <div className='space-y-1.5'>
                  <Label.Root htmlFor='title'>
                    Title <Label.Asterisk />
                  </Label.Root>
                  <Input.Root>
                    <Input.Wrapper>
                      <Input.Input
                        id='title'
                        type='text'
                        placeholder='e.g. UI/UX Designer'
                        required
                      />
                    </Input.Wrapper>
                  </Input.Root>
                </div>

                <div className='space-y-1.5'>
                  <Label.Root htmlFor='biography'>
                    Biography <Label.Sub>(Optional)</Label.Sub>
                  </Label.Root>
                  <Input.Root>
                    <Textarea.Root
                      placeholder='Describe yourself...'
                      className='min-h-[50px]'
                      id='biography'
                      value={biography}
                      onChange={(e) => setBiography(e.target.value)}
                      maxLength={200}
                    >
                      <Textarea.CharCounter
                        current={biography.length}
                        max={200}
                      />
                    </Textarea.Root>
                  </Input.Root>
                  <Hint.Root>
                    <Hint.Icon as={RiInformationFill} />
                    It will be displayed on your profile.
                  </Hint.Root>
                </div>
              </div>

              <Divider.Root variant='solid-text'>
                REGIONAL PREFERENCES
              </Divider.Root>

              <div className='space-y-3 p-5'>
                <div className='space-y-1.5'>
                  <Label.Root htmlFor='timezone'>
                    Timezone <Label.Asterisk />{' '}
                    <IconInfoCustomFill className='size-5 text-text-disabled-300' />
                  </Label.Root>
                  <Select.Root
                    defaultValue='gmt-4'
                    value={selectedTimezone}
                    onValueChange={setSelectedTimezone}
                  >
                    <Select.Trigger className='w-full'>
                      <Select.Value>
                        {
                          timezones.find((tz) => tz.value === selectedTimezone)
                            ?.label
                        }
                      </Select.Value>
                    </Select.Trigger>
                    <Select.Content>
                      {timezones.map((timezone) => (
                        <Select.Item
                          key={timezone.value}
                          value={timezone.value}
                        >
                          {timezone.label}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </div>

                <div className='space-y-1.5'>
                  <Label.Root htmlFor='language'>
                    Language <Label.Asterisk />
                  </Label.Root>
                  <Select.Root
                    defaultValue='en'
                    value={selectedLanguage}
                    onValueChange={setSelectedLanguage}
                  >
                    <Select.Trigger className='w-full'>
                      <Select.Value>
                        <div className='flex items-center gap-2'>
                          <img
                            src={`https://alignui.com/flags/${languages.find((lang) => lang.value === selectedLanguage)?.flag}.svg`}
                            className='size-5 rounded-sm'
                            alt=''
                          />
                          {
                            languages.find(
                              (lang) => lang.value === selectedLanguage,
                            )?.label
                          }
                        </div>
                      </Select.Value>
                    </Select.Trigger>
                    <Select.Content>
                      {languages.map((language) => (
                        <Select.Item
                          key={language.value}
                          value={language.value}
                        >
                          <Select.ItemIcon
                            style={{
                              backgroundImage: `url(https://alignui.com/flags/${language.flag}.svg)`,
                            }}
                            className='size-5 rounded-sm'
                          />
                          {language.label}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
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
                Discard
              </Button.Root>
              <Button.Root
                variant='primary'
                size='medium'
                className='flex-1'
                onClick={() => setOpen(false)}
              >
                Apply Changes
              </Button.Root>
            </Drawer.Footer>
          </div>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}
