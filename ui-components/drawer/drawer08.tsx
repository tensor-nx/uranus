'use client';

import * as React from 'react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Drawer from '@/components/ui/drawer';
import * as Label from '@/components/ui/label';
import * as Radio from '@/components/ui/radio';
import * as Select from '@/components/ui/select';

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

export default function SettingsDrawer() {
  const [open, setOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('en');
  const [timezone, setTimezone] = React.useState('gmt-4');
  const [timeFormat, setTimeFormat] = React.useState('24');
  const [dateFormat, setDateFormat] = React.useState('DD/MM/YY');
  const [lightMode, setLightMode] = React.useState('light');
  const [systemMode, setSystemMode] = React.useState('system');

  const languages = [
    { value: 'en', label: 'English (US)', flag: 'US' },
    { value: 'tr', label: 'Türkçe', flag: 'TR' },
  ];

  const timezones = [
    { value: 'gmt-4', label: 'GMT-4:00 - Atlantic Standard Time' },
    { value: 'gmt0', label: 'GMT+0:00 - Greenwich Mean Time' },
  ];

  const timeFormats = [
    { value: '12', label: '12 Hours' },
    { value: '24', label: '24 Hours' },
  ];

  const dateFormats = [
    { value: 'DD/MM/YY', label: 'DD/MM/YY' },
    { value: 'MM/DD/YY', label: 'MM/DD/YY' },
  ];

  return (
    <div className={containerClassName}>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            General Settings
          </Button.Root>
        </Drawer.Trigger>

        <Drawer.Content className='absolute inset-y-0 mx-2 my-2 max-h-[calc(100%-16px)] w-[min(400px,calc(100%-16px))] rounded-20 bg-bg-white-0 shadow-custom-md'>
          <div className='flex h-full flex-col'>
            <Drawer.Header className='items-start'>
              <Drawer.Title>
                <div className='flex flex-col gap-1'>
                  <span className='text-label-lg text-text-strong-950'>
                    General Settings
                  </span>
                  <div className='text-paragraph-sm text-text-sub-600'>
                    Personalize and configure options.
                  </div>
                </div>
              </Drawer.Title>
            </Drawer.Header>

            <Drawer.Body className='flex-1'>
              <Divider.Root variant='solid-text'>
                REGIONAL PREFERENCES
              </Divider.Root>

              <div className='flex flex-col gap-3 p-5'>
                <div className='flex flex-col gap-1'>
                  <Label.Root
                    htmlFor='language'
                    className='text-label-sm text-text-strong-950'
                  >
                    Language <Label.Asterisk />
                  </Label.Root>
                  <Select.Root value={language} onValueChange={setLanguage}>
                    <Select.Trigger className='w-full'>
                      <Select.Value>
                        <div className='flex items-center gap-2'>
                          <img
                            src={`https://alignui.com/flags/${languages.find((lang) => lang.value === language)?.flag}.svg`}
                            className='size-5 rounded-sm'
                            alt=''
                          />
                          {
                            languages.find((lang) => lang.value === language)
                              ?.label
                          }
                        </div>
                      </Select.Value>
                    </Select.Trigger>
                    <Select.Content>
                      {languages.map((lang) => (
                        <Select.Item key={lang.value} value={lang.value}>
                          <Select.ItemIcon
                            style={{
                              backgroundImage: `url(https://alignui.com/flags/${lang.flag}.svg)`,
                            }}
                            className='size-5 rounded-sm'
                          />
                          {lang.label}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </div>

                <div className='flex flex-col gap-1'>
                  <Label.Root
                    htmlFor='timezone'
                    className='text-label-sm text-text-strong-950'
                  >
                    Timezone <Label.Asterisk />
                    <IconInfoCustomFill className='size-5 text-text-disabled-300' />
                  </Label.Root>
                  <Select.Root value={timezone} onValueChange={setTimezone}>
                    <Select.Trigger className='w-full'>
                      <Select.Value>
                        {timezones.find((tz) => tz.value === timezone)?.label}
                      </Select.Value>
                    </Select.Trigger>
                    <Select.Content>
                      {timezones.map((tz) => (
                        <Select.Item key={tz.value} value={tz.value}>
                          {tz.label}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </div>

                <div className='flex flex-col gap-1'>
                  <Label.Root
                    htmlFor='timeFormat'
                    className='text-label-sm text-text-strong-950'
                  >
                    Time Format{' '}
                    <span className='text-paragraph-sm text-text-sub-600'>
                      (Optional)
                    </span>
                    <IconInfoCustomFill className='size-5 text-text-disabled-300' />
                  </Label.Root>
                  <Select.Root value={timeFormat} onValueChange={setTimeFormat}>
                    <Select.Trigger className='w-full'>
                      <Select.Value>
                        {
                          timeFormats.find((tf) => tf.value === timeFormat)
                            ?.label
                        }
                      </Select.Value>
                    </Select.Trigger>
                    <Select.Content>
                      {timeFormats.map((tf) => (
                        <Select.Item key={tf.value} value={tf.value}>
                          {tf.label}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </div>

                <div className='flex flex-col gap-1'>
                  <Label.Root
                    htmlFor='dateFormat'
                    className='text-label-sm text-text-strong-950'
                  >
                    Date Format{' '}
                    <span className='text-paragraph-sm text-text-sub-600'>
                      (Optional)
                    </span>
                    <IconInfoCustomFill className='size-5 text-text-disabled-300' />
                  </Label.Root>
                  <Select.Root value={dateFormat} onValueChange={setDateFormat}>
                    <Select.Trigger className='w-full'>
                      <Select.Value>
                        {
                          dateFormats.find((df) => df.value === dateFormat)
                            ?.label
                        }
                      </Select.Value>
                    </Select.Trigger>
                    <Select.Content>
                      {dateFormats.map((df) => (
                        <Select.Item key={df.value} value={df.value}>
                          {df.label}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </div>
              </div>

              <Divider.Root variant='solid-text'>THEME OPTIONS</Divider.Root>

              <div className='space-y-4 p-5'>
                <Radio.Group
                  value={systemMode === 'system' ? 'system' : lightMode}
                  onValueChange={(value) => {
                    if (value === 'system') {
                      setSystemMode('system');
                      setLightMode('system');
                    } else {
                      setLightMode(value);
                      setSystemMode('off');
                    }
                  }}
                  className='space-y-4'
                >
                  <div className='group/radio flex items-start gap-2'>
                    <Radio.Item value='light' id='lightMode' />
                    <div className='flex flex-col gap-1'>
                      <Label.Root htmlFor='lightMode'>
                        <span className='text-label-sm text-text-strong-950'>
                          Light Mode{' '}
                          <span className='text-paragraph-xs text-text-sub-600'>
                            (Default)
                          </span>
                        </span>
                      </Label.Root>
                      <span className='text-paragraph-xs text-text-sub-600'>
                        Pick a clean and classic light theme.
                      </span>
                    </div>
                  </div>

                  <div className='group/radio flex items-start gap-2'>
                    <Radio.Item value='dark' id='darkMode' />
                    <div className='flex flex-col gap-1'>
                      <Label.Root htmlFor='darkMode'>
                        <span className='text-label-sm text-text-strong-950'>
                          Dark Mode
                        </span>
                      </Label.Root>
                      <span className='text-paragraph-xs text-text-sub-600'>
                        Select a sleek and modern dark theme.
                      </span>
                    </div>
                  </div>

                  <div className='group/radio flex items-start gap-2'>
                    <Radio.Item value='system' id='systemMode' />
                    <div className='flex flex-col gap-1'>
                      <Label.Root htmlFor='systemMode'>
                        <span className='text-label-sm text-text-strong-950'>
                          System Mode
                        </span>
                      </Label.Root>
                      <span className='text-paragraph-xs text-text-sub-600'>
                        Adapts to your device&apos;s theme.
                      </span>
                    </div>
                  </div>
                </Radio.Group>
              </div>
            </Drawer.Body>

            <Drawer.Footer className='flex justify-between gap-3 border-t border-stroke-soft-200'>
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='medium'
                className='flex-1'
                onClick={() => setOpen(false)}
              >
                Cancel
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
