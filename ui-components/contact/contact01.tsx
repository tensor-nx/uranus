'use client';

import * as React from 'react';
import {
  RiBookmark3Fill,
  RiCustomerServiceFill,
  RiMailFill,
  RiMap2Fill,
  RiUser3Fill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as Checkbox from '@/components/ui/checkbox';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Select from '@/components/ui/select';
import * as StatusBadge from '@/components/ui/status-badge';
import * as Textarea from '@/components/ui/textarea';
const topics = [
  {
    icon: RiBookmark3Fill,
    value: 'marketing',
    label: 'Marketing',
  },
  {
    icon: RiBookmark3Fill,
    value: 'sales',
    label: 'Sales',
  },
  {
    icon: RiBookmark3Fill,
    value: 'support',
    label: 'Support',
  },
  {
    icon: RiBookmark3Fill,
    value: 'engineering',
    label: 'Engineering',
    disabled: true,
  },
  {
    icon: RiBookmark3Fill,
    value: 'design',
    label: 'Design',
  },
  {
    icon: RiBookmark3Fill,
    value: 'product',
    label: 'Product',
  },
];

export default function Contact01() {
  const uniqueId = React.useId();
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='relative mx-auto flex max-w-[1016px] flex-col'>
        <div className='absolute bottom-0 left-1/2 z-1 hidden h-auto w-full -translate-x-1/2 lg:flex'>
          <Image
            src='https://alignui.com/images/blocks/contact-1-image.svg'
            alt='contact'
            width={1016}
            height={478}
            className='h-auto w-full shrink-0 dark:hidden'
          />
          <Image
            src='https://alignui.com/images/blocks/contact-1-image-dark.svg'
            alt='contact'
            width={1016}
            height={478}
            className='hidden h-auto w-full shrink-0 dark:block'
          />
        </div>
        <div className='relative z-2 mb-8 flex flex-col px-6 lg:mb-10 lg:items-center lg:px-0'>
          <Badge.Root
            variant='lighter'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 normal-case'
          >
            Driven by shared vision
          </Badge.Root>
          <h3 className='text-title-h4 lg:text-title-h3 text-text-strong-950 mb-4 !font-[550]'>
            Connect to unlock new opportunities
          </h3>
          <p className='text-paragraph-md text-text-sub-600'>
            Collaboration, unique perspectives, and a drive to deliver results.
          </p>
        </div>
        <div className='relative z-2 mb-8 flex flex-col items-center justify-center gap-2.5 px-6 md:flex-row lg:mb-10 lg:gap-4 lg:px-0'>
          <StatusBadge.Root
            asChild
            className='bg-bg-weak-50 text-label-sm text-text-strong-950 group hover:shadow-complex-2 h-auto w-full justify-start rounded-[96px] py-1.5 pr-4 pl-1.5 ring-0 transition-all duration-300 lg:w-auto'
          >
            <Link href='mailto:contact@company.com'>
              <i className='shadow-custom-input-4 bg-bg-white-0 flex size-8 shrink-0 items-center justify-center rounded-full'>
                <StatusBadge.Icon
                  as={RiMailFill}
                  className='text-text-sub-600 group-hover:text-information-base size-4 transition-all duration-300'
                />
              </i>
              contact@company.com
            </Link>
          </StatusBadge.Root>
          <StatusBadge.Root
            asChild
            className='bg-bg-weak-50 text-label-sm text-text-strong-950 group hover:shadow-complex-2 h-auto w-full justify-start rounded-[96px] py-1.5 pr-4 pl-1.5 ring-0 transition-all duration-300 lg:w-auto'
          >
            <Link href='https://maps.app.goo.gl/QgYxjZ3wYB87U91E8'>
              <i className='shadow-custom-input-4 bg-bg-white-0 flex size-8 shrink-0 items-center justify-center rounded-full'>
                <StatusBadge.Icon
                  as={RiMap2Fill}
                  className='text-text-sub-600 group-hover:text-information-base size-4 transition-all duration-300'
                />
              </i>
              430 Madison Ave, NY, 10022
            </Link>
          </StatusBadge.Root>
          <StatusBadge.Root
            asChild
            className='bg-bg-weak-50 text-label-sm text-text-strong-950 group hover:shadow-complex-2 h-auto w-full justify-start rounded-[96px] py-1.5 pr-4 pl-1.5 ring-0 transition-all duration-300 lg:w-auto'
          >
            <Link href='tel:+18881234567'>
              <i className='shadow-custom-input-4 bg-bg-white-0 flex size-8 shrink-0 items-center justify-center rounded-full'>
                <StatusBadge.Icon
                  as={RiCustomerServiceFill}
                  className='text-text-sub-600 group-hover:text-information-base size-4 transition-all duration-300'
                />
              </i>
              +1 (888) 123-4567
            </Link>
          </StatusBadge.Root>
        </div>
        <div className='relative z-2 flex flex-col items-center px-2 lg:px-0'>
          <form
            action=''
            className='shadow-complex-8 bg-bg-white-0 relative z-2 mb-8 flex h-auto w-full flex-col gap-4 rounded-3xl p-6 md:w-auto lg:mx-auto lg:w-full lg:max-w-[440px] lg:rounded-4xl lg:p-8'
          >
            <div className='flex flex-col gap-1.5'>
              <Label.Root
                htmlFor='full-name'
                className='text-label-sm text-text-sub-600'
              >
                Your full name
              </Label.Root>

              <Input.Root className='shadow-custom-input h-10 rounded-xl before:content-none'>
                <Input.Wrapper>
                  <Input.Icon
                    as={RiUser3Fill}
                    className='group-has-[:placeholder-shown]:text-text-disabled-300 size-5'
                  />
                  <Input.Input
                    id='full-name'
                    type='text'
                    placeholder='Enter your full name...'
                    className='text-paragraph-sm text-text-strong-950 placeholder:text-text-soft-400 placeholder:text-paragraph-sm'
                  />
                </Input.Wrapper>
              </Input.Root>
            </div>
            <div className='flex flex-col gap-1.5'>
              <Label.Root
                htmlFor='email'
                className='text-label-sm text-text-sub-600'
              >
                Business email address
              </Label.Root>

              <Input.Root className='shadow-custom-input h-10 rounded-xl before:content-none'>
                <Input.Wrapper>
                  <Input.Icon
                    as={RiMailFill}
                    className='group-has-[:placeholder-shown]:text-text-disabled-300 size-5'
                  />
                  <Input.Input
                    id='email'
                    type='email'
                    placeholder='Type your business email...'
                    className='text-paragraph-sm text-text-strong-950 placeholder:text-text-soft-400 placeholder:text-paragraph-sm'
                  />
                </Input.Wrapper>
              </Input.Root>
            </div>
            <div className='flex flex-col gap-1.5'>
              <Label.Root
                htmlFor='email'
                className='text-label-sm text-text-sub-600'
              >
                Topic
              </Label.Root>
              <Select.Root>
                <Select.Trigger className='text-label-sm shadow-custom-input text-text-sub-600 data-[placeholder]:text-text-soft-400 h-10 rounded-xl ring-0 before:content-none'>
                  <Select.TriggerIcon
                    as={RiBookmark3Fill}
                    className='group-data-[placeholder]/trigger:text-text-disabled-300 size-5'
                  />
                  <Select.Value placeholder='Choose a topic...' />
                </Select.Trigger>
                <Select.Content>
                  {topics.map((item) => (
                    <Select.Item
                      key={item.value}
                      value={item.value}
                      disabled={item.disabled}
                      className='text-label-sm text-text-soft-400'
                    >
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </div>
            <div className='flex flex-col gap-1.5'>
              <Label.Root
                htmlFor='message'
                className='text-label-sm text-text-sub-600'
              >
                Details
              </Label.Root>
              <Textarea.Root
                simple
                id='message'
                placeholder='Type your message...'
                className='text-label-sm shadow-custom-input text-text-strong-950 placeholder:text-text-soft-400 placeholder:text-label-sm h-26 min-h-0 rounded-[14px] px-4 py-3 ring-0 before:content-none'
              />
            </div>
            <div className='my-2 flex items-center gap-3'>
              <Checkbox.Root id={`${uniqueId}-c1`} className='size-5' checked />
              <Label.Root
                className='text-paragraph-sm text-text-sub-600 flex flex-wrap gap-0.5'
                htmlFor={`${uniqueId}-c1`}
              >
                I accept the{' '}
                <Link
                  href='/privacy-policy'
                  className='text-paragraph-sm text-text-sub-600 mx-0.5 underline underline-offset-3'
                >
                  Privacy Policy{' '}
                </Link>{' '}
                and{' '}
                <Link
                  href='/terms-of-service'
                  className='text-text-sub-600 text-paragraph-sm mx-0.5 underline underline-offset-3'
                >
                  {' '}
                  User Terms
                </Link>
              </Label.Root>
            </div>
            <div className='flex w-full'>
              <FancyButton.Root
                variant='primary'
                size='medium'
                className='w-full cursor-pointer rounded-xl'
              >
                Send your request
              </FancyButton.Root>
            </div>
          </form>
          <div className='text-label-sm text-text-soft-400 text-center lg:mx-auto lg:max-w-[404px]'>
            Work alongside innovative teams worldwide, expand your{' '}
            <span className='text-text-sub-600 text-label-sm lg:flex lg:justify-center'>
              reach, and shape what’s next.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
