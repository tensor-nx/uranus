'use client';

import {
  RiAddLine,
  RiArrowDownSLine,
  RiArrowRightUpLongLine,
  RiBankLine,
  RiInformationFill,
  RiStackFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as Select from '@/components/ui/select';
import * as Switch from '@/components/ui/switch';
import * as Textarea from '@/components/ui/textarea';
const fruits = [
  {
    value: 'wire',
    label: 'Wire',
  },
  {
    value: 'ach',
    label: 'ACH',
  },
  {
    value: 'crypto',
    label: 'Crypto',
  },
  {
    value: 'bank-transfer',
    label: 'Bank Transfer',
  },
];

export default function HowItWorks04() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='flex flex-col'>
        <div className='mx-auto mb-6 flex max-w-[754px] flex-col px-6 lg:mb-14 lg:items-center lg:px-0'>
          <Badge.Root
            variant='lighter'
            className='bg-bg-weak-50 text-text-sub-600 text-label-sm mb-3 h-7 w-fit gap-1.5 rounded-[9px] pr-2.5 pl-2 normal-case'
          >
            <Badge.Icon
              as={RiStackFill}
              className='text-text-soft-400 mx-0 size-4'
            />
            Built for finance workflows
          </Badge.Root>
          <h3 className='text-title-h5 lg:text-title-h4 xl:text-title-h3 text-text-strong-950 mb-4 !font-[550] lg:text-center'>
            Connect accounts, manage cash flow, and automate your finance stack
          </h3>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            Monitor transactions, set controls, and help your finance team{' '}
            <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
              move faster with fewer mistakes
            </span>
          </p>
        </div>
        <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 px-2.5 lg:flex-row lg:gap-4 lg:px-7 xl:gap-6'>
          <div className='bg-bg-weak-25 flex flex-1 flex-col rounded-[28px] px-2.5 pt-6 pb-2.5 lg:rounded-[32px] lg:px-4 lg:pt-9 lg:pb-4'>
            <div className='mb-6 flex flex-col px-5 xl:mb-9'>
              <div className='bg-primary-base text-label-md lg:text-label-lg text-static-white mb-5 flex size-7 items-center justify-center rounded-full lg:size-8 xl:mb-9'>
                <span>1</span>
              </div>
              <div className='flex flex-col'>
                <h6 className='text-label-lg xl:text-title-h6 text-text-strong-950 mb-2'>
                  Connect your accounts
                </h6>
                <p className='text-paragraph-sm xl:text-paragraph-md text-text-sub-600 mb-5 xl:mb-8'>
                  Sync all your banks, cards, and wallets to track spend in real
                  time
                </p>
                <LinkButton.Root
                  className='text-label-sm lg:text-label-md text-text-sub-600 hover:text-text-strong-950 group h-auto cursor-pointer justify-start gap-1 whitespace-break-spaces transition-all duration-300'
                  asChild
                >
                  <a href='#'>
                    Learn more
                    <LinkButton.Icon
                      as={RiArrowRightUpLongLine}
                      className='text-primary-base group-hover:text-text-strong-950 size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    />
                  </a>
                </LinkButton.Root>
              </div>
            </div>
            <div className='rounded-20 bg-bg-white-0 shadow-custom-input-4 mt-auto flex flex-1 flex-col gap-3 p-4 lg:gap-6'>
              <div className='flex flex-1 flex-col gap-4'>
                <div className='border-stroke-soft-200 flex items-center gap-3 border-b pb-4'>
                  <div className='relative flex'>
                    <div className='shadow-regular-sm absolute top-0 -right-1.5 flex size-4.5'>
                      <Image
                        src='https://alignui.com/images/blocks/star-icon.svg'
                        alt='How It Works'
                        width={18}
                        height={18}
                        className='size-4.5 rounded-full object-cover'
                      />
                    </div>
                    <Image
                      src='https://alignui.com/images/blocks/hiw-4-image-1.jpg'
                      alt='How It Works'
                      width={40}
                      height={40}
                      className='size-10 rounded-full object-cover'
                    />
                  </div>
                  <div className='flex flex-1 flex-col gap-1'>
                    <div className='text-label-sm text-text-strong-950'>
                      James Brown
                    </div>
                    <div className='text-paragraph-xs text-text-sub-600'>
                      james@alignui.com
                    </div>
                  </div>
                  <div className='bg-faded-lighter text-faded-base text-label-xs rounded-full px-2 py-0.5'>
                    A-52112
                  </div>
                </div>
                <div className='border-stroke-soft-200 flex items-center gap-3 border-b pb-4'>
                  <div className='relative flex'>
                    <Image
                      src='https://alignui.com/images/blocks/hiw-4-image-2.jpg'
                      alt='How It Works'
                      width={40}
                      height={40}
                      className='size-10 rounded-full object-cover'
                    />
                  </div>
                  <div className='flex flex-1 flex-col gap-1'>
                    <div className='text-label-sm text-text-strong-950'>
                      Sophia Williams
                    </div>
                    <div className='text-paragraph-xs text-text-sub-600'>
                      +44 01 2345 6789
                    </div>
                  </div>
                  <div className='bg-faded-lighter text-faded-base text-label-xs rounded-full px-2 py-0.5'>
                    A-52132
                  </div>
                </div>
                <div className='border-stroke-soft-200 flex items-center gap-3 border-b pb-4'>
                  <div className='relative flex'>
                    <Image
                      src='https://alignui.com/images/blocks/hiw-4-image-3.jpg'
                      alt='How It Works'
                      width={40}
                      height={40}
                      className='size-10 rounded-full object-cover'
                    />
                  </div>
                  <div className='flex flex-1 flex-col gap-1'>
                    <div className='text-label-sm text-text-strong-950'>
                      Emma Wright
                    </div>
                    <div className='text-paragraph-xs text-text-sub-600'>
                      james@alignui.com
                    </div>
                  </div>
                  <div className='bg-faded-lighter text-faded-base text-label-xs rounded-full px-2 py-0.5'>
                    A-52184
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='relative flex'>
                    <Image
                      src='https://alignui.com/images/blocks/hiw-4-image-4.jpg'
                      alt='How It Works'
                      width={40}
                      height={40}
                      className='size-10 rounded-full object-cover'
                    />
                  </div>
                  <div className='flex flex-1 flex-col gap-1'>
                    <div className='text-label-sm text-text-strong-950'>
                      Matthew Johnson
                    </div>
                    <div className='text-paragraph-xs text-text-sub-600'>
                      +1 (456) 789-0123
                    </div>
                  </div>
                  <div className='bg-faded-lighter text-faded-base text-label-xs rounded-full px-2 py-0.5'>
                    A-52114
                  </div>
                </div>
              </div>
              <Button.Root
                variant='neutral'
                mode='lighter'
                className='text-label-sm text-text-sub-600 bg-bg-weak-50 flex w-full cursor-pointer items-center justify-center gap-2'
              >
                <Button.Icon
                  as={RiAddLine}
                  className='text-text-sub-600 size-5'
                />
                New Recipient
              </Button.Root>
            </div>
          </div>
          <div className='bg-bg-weak-25 flex flex-1 flex-col rounded-[28px] px-2.5 pt-6 pb-2.5 lg:px-4 lg:pt-9 lg:pb-4'>
            <div className='mb-6 flex flex-col px-5 xl:mb-9'>
              <div className='bg-primary-base text-label-md lg:text-label-lg text-static-white mb-5 flex size-7 items-center justify-center rounded-full lg:size-8 xl:mb-9'>
                <span>2</span>
              </div>
              <div className='flex flex-col'>
                <h6 className='text-label-lg xl:text-title-h6 text-text-strong-950 mb-2'>
                  Assign spend rules
                </h6>
                <p className='text-paragraph-sm xl:text-paragraph-md text-text-sub-600 mb-5 xl:mb-8'>
                  Define budgets, approval steps, and payment roles for every
                  department
                </p>
                <LinkButton.Root
                  className='text-label-sm lg:text-label-md text-text-sub-600 hover:text-text-strong-950 group h-auto cursor-pointer justify-start gap-1 whitespace-break-spaces transition-all duration-300'
                  asChild
                >
                  <a href='#'>
                    Learn more
                    <LinkButton.Icon
                      as={RiArrowRightUpLongLine}
                      className='text-primary-base group-hover:text-text-strong-950 size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    />
                  </a>
                </LinkButton.Root>
              </div>
            </div>
            <div className='rounded-20 bg-bg-white-0 shadow-custom-input-4 mb-2 flex items-center gap-3.5 p-4'>
              <div className='relative flex'>
                <Image
                  src='https://alignui.com/images/blocks/hiw-4-image-1.jpg'
                  alt='How It Works'
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
              </div>
              <div className='flex flex-1 flex-col gap-1'>
                <div className='text-label-sm text-text-strong-950'>
                  James Brown
                </div>
                <div className='text-paragraph-xs text-text-sub-600'>
                  james@alignui.com
                </div>
              </div>
              <LinkButton.Root
                variant='primary'
                asChild
                className='text-label-sm text-primary-base hover:underline-offset-2 !focus:underline h-auto cursor-pointer justify-start gap-1 whitespace-break-spaces transition-all duration-300 hover:text-blue-700 hover:underline'
              >
                <a href='#'>Edit</a>
              </LinkButton.Root>
            </div>
            <div className='rounded-20 bg-bg-white-0 shadow-custom-input-4 flex flex-col p-4'>
              <div className='border-stroke-soft-200 flex w-full flex-col gap-1 border-b border-dashed pb-5'>
                <Label.Root
                  className='text-label-sm text-text-strong-950'
                  htmlFor='payment-method'
                >
                  Select Payment Method
                  <RiInformationFill className='text-text-disabled-300 size-5' />
                </Label.Root>

                <Select.Root>
                  <Select.Trigger
                    id='payment-method'
                    className='text-paragraph-sm text-text-strong-950'
                  >
                    <Select.Value
                      placeholder='Wire'
                      className='text-paragraph-sm text-text-strong-950'
                    />
                  </Select.Trigger>
                  <Select.Content className='text-paragraph-sm text-text-strong-950 w-full'>
                    {fruits.map((item) => (
                      <Select.Item
                        key={item.value}
                        value={item.value}
                        className='text-paragraph-sm text-text-strong-950 w-full'
                      >
                        {item.label}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>

                <p className='text-paragraph-xs text-text-sub-600'>
                  Same-day transfer, no fees.
                </p>
              </div>
              <div className='border-stroke-soft-200 mb-5 flex items-center gap-3 border-b py-5'>
                <div className='flex flex-1 flex-col gap-3 xl:flex-row xl:items-center'>
                  <div className='bg-bg-white-0 border-stroke-soft-200 shadow-regular-xs relative flex size-10 items-center justify-center rounded-full border'>
                    <RiBankLine className='text-text-sub-600 size-5' />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='text-label-sm text-text-strong-950'>
                      Summit Finance International
                    </div>
                    <div className='text-paragraph-xs text-text-sub-600'>
                      Account ••9876 · Routing ••5432
                    </div>
                  </div>
                </div>
                <LinkButton.Root
                  variant='primary'
                  asChild
                  className='text-label-sm text-primary-base hover:underline-offset-2 !focus:underline h-auto cursor-pointer justify-start gap-1 whitespace-break-spaces transition-all duration-300 hover:text-blue-700 hover:underline'
                >
                  <a href='#'>Edit</a>
                </LinkButton.Root>
              </div>
              <Button.Root
                variant='neutral'
                mode='lighter'
                className='text-label-sm text-text-sub-600 bg-bg-weak-50 flex w-full cursor-pointer items-center justify-center gap-2'
              >
                Continue
              </Button.Root>
            </div>
          </div>
          <div className='bg-bg-weak-25 flex flex-1 flex-col rounded-[28px] px-2.5 pt-6 pb-2.5 lg:px-4 lg:pt-9 lg:pb-4'>
            <div className='mb-6 flex flex-col px-5 xl:mb-9'>
              <div className='bg-primary-base text-label-md lg:text-label-lg text-static-white mb-5 flex size-7 items-center justify-center rounded-full lg:size-8 xl:mb-9'>
                <span>3</span>
              </div>
              <div className='flex flex-col'>
                <h6 className='text-label-lg xl:text-title-h6 text-text-strong-950 mb-2'>
                  Make faster payments
                </h6>
                <p className='text-paragraph-sm xl:text-paragraph-md text-text-sub-600 mb-5 xl:mb-8'>
                  Pay vendors, teams, and invoices directly no manual processing
                  needed
                </p>
                <LinkButton.Root
                  className='text-label-sm lg:text-label-md text-text-sub-600 hover:text-text-strong-950 group h-auto cursor-pointer justify-start gap-1 whitespace-break-spaces transition-all duration-300'
                  asChild
                >
                  <a href='#'>
                    Learn more
                    <LinkButton.Icon
                      as={RiArrowRightUpLongLine}
                      className='text-primary-base group-hover:text-text-strong-950 size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    />
                  </a>
                </LinkButton.Root>
              </div>
            </div>
            <div className='rounded-20 bg-bg-white-0 shadow-custom-input-4 mb-2 flex items-center gap-3.5 p-4'>
              <div className='bg-bg-white-0 border-stroke-soft-200 shadow-regular-xs relative flex size-10 items-center justify-center rounded-full border'>
                <RiBankLine className='text-text-sub-600 size-5' />
              </div>
              <div className='flex flex-1 flex-col gap-1'>
                <div className='text-label-sm text-text-strong-950'>
                  Operations Account
                </div>
                <div className='text-paragraph-xs text-text-sub-600'>
                  Available: $15,000.00
                </div>
              </div>
              <Button.Root
                variant='neutral'
                mode='stroke'
                className='shadow-regular-xs active:bg-bg-strong-950 flex size-7 cursor-pointer items-center justify-center rounded-[6px]'
              >
                <Button.Icon
                  as={RiArrowDownSLine}
                  className='text-text-sub-600 group-active:text-text-white-0 size-5'
                />
              </Button.Root>
            </div>
            <div className='rounded-20 bg-bg-white-0 shadow-custom-input-4 flex flex-1 flex-col p-4'>
              <div className='mb-4 flex w-full flex-col gap-1'>
                <Label.Root
                  className='text-label-sm text-text-strong-950 flex items-center gap-0.25'
                  htmlFor='amount'
                >
                  Enter Amount
                  <RiInformationFill className='text-text-disabled-300 size-5' />
                </Label.Root>
                <Input.Root className='shadow-regular-xs hover:shadow-regular-xs border-stroke-soft-200 hover:[&:not(:has(input:focus)):has(>:only-child)]:before:ring-stroke-soft-200'>
                  <Input.Wrapper>
                    <Input.InlineAffix>$</Input.InlineAffix>
                    <Input.Input
                      id='amount'
                      placeholder='0.00'
                      className='text-paragraph-sm text-text-strong-950 placeholder:text-text-soft-400 placeholder:text-paragraph-sm'
                    />
                  </Input.Wrapper>
                </Input.Root>
              </div>
              <div className='mb-4 flex w-full flex-col gap-1'>
                <Label.Root
                  htmlFor='description'
                  className='text-label-sm text-text-strong-950'
                >
                  Description
                  <Label.Asterisk className='text-primary-base' />
                  <Label.Sub className='text-paragraph-sm text-text-sub-600'>
                    (Optional)
                  </Label.Sub>
                </Label.Root>

                <Textarea.Root
                  id='description'
                  placeholder='The message you wish to send to the recipient...'
                  className='text-paragraph-sm text-text-strong-950 placeholder:text-text-soft-400 placeholder:text-paragraph-sm shadow-regular-xs'
                >
                  <Textarea.CharCounter current={0} max={200} />
                </Textarea.Root>
              </div>
              <div className='flex items-center gap-2'>
                <Switch.Root
                  id='s1'
                  className='[&>div]:group-data-[state=checked]/switch:!bg-primary-base cursor-pointer [&>div]:group-data-[state=checked]/switch:hover:!bg-blue-700'
                />
                <Label.Root className='text-paragraph-sm' htmlFor='s1'>
                  Recurring payment
                </Label.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
