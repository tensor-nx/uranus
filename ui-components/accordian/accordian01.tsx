'use client';

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  RiArrowDownSLine,
  RiCheckboxCircleFill,
  RiLoader2Line,
} from '@remixicon/react';
import { useQRCode } from 'use-qrcode-hook';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import { cn } from '@/utils/cn';

function IconInfoCustom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 16.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm1.116-3.041l.1-.408a1.709 1.709 0 01-.25.083 1.176 1.176 0 01-.308.048c-.193 0-.329-.032-.407-.095-.079-.064-.118-.184-.118-.359a3.514 3.514 0 01.118-.672l.373-1.318c.037-.121.062-.255.075-.4a3.73 3.73 0 00.02-.304.866.866 0 00-.292-.678c-.195-.174-.473-.26-.833-.26-.2 0-.412.035-.636.106-.224.07-.459.156-.704.256l-.1.409c.073-.028.16-.057.262-.087.101-.03.2-.045.297-.045.198 0 .331.034.4.1.07.066.105.185.105.354 0 .093-.01.197-.034.31a6.216 6.216 0 01-.084.36l-.374 1.325c-.033.14-.058.264-.073.374-.015.11-.022.22-.022.325 0 .272.1.496.301.673.201.177.483.265.846.265.236 0 .443-.03.621-.092s.417-.152.717-.27zM11.05 7.85a.772.772 0 00.26-.587.78.78 0 00-.26-.59.885.885 0 00-.628-.244.893.893 0 00-.63.244.778.778 0 00-.264.59c0 .23.088.426.263.587a.897.897 0 00.63.243.888.888 0 00.629-.243z'
        fill='currentColor'
      />
    </svg>
  );
}

export function InputWithButton() {
  return (
    <div className='w-full max-w-[300px]'>
      <div className='flex flex-col gap-1'>
        <Input.Root>
          <Input.Wrapper>
            <Input.Input placeholder='james@alignui.com' />
          </Input.Wrapper>
          <button
            type='button'
            className={cn(
              'inline-flex items-center justify-center whitespace-nowrap rounded-none bg-bg-weak-50 px-3 py-2 text-label-sm text-text-sub-600 outline-none ring-1 ring-inset ring-transparent transition duration-200 ease-out',
              'hover:bg-bg-white-0 hover:text-text-strong-950',
              'focus-visible:bg-bg-white-0 focus-visible:text-text-strong-950 focus-visible:ring-transparent',
            )}
          >
            Send link
          </button>
        </Input.Root>
      </div>
    </div>
  );
}

function QRCodeComponent() {
  const { qrCodeDataUrl, error, isLoading } = useQRCode('https://alignui.com', {
    width: 88,
    height: 88,
    color: {
      foreground: '#000',
      background: '#fff',
    },
  });

  if (isLoading)
    return (
      <div className='flex size-[88px] items-center justify-center'>
        <RiLoader2Line className='animate-spin' />
      </div>
    );

  if (error)
    return (
      <div className='text-error-base'>QR code could not be generated</div>
    );

  return <img src={qrCodeDataUrl} alt='QR kod' className='size-[88px]' />;
}

const AccordionDemo = () => (
  <div className='flex max-w-[624px] flex-col gap-4'>
    <div className='flex w-full flex-col gap-2'>
      <Label.Root>
        Set-up your online store
        <IconInfoCustom className='size-5 text-text-disabled-300' />
      </Label.Root>
      <Accordion.Root
        className='w-full rounded-xl border border-stroke-soft-200 bg-bg-white-0'
        type='single'
        defaultValue='item-2'
        collapsible
      >
        <Accordion.Item
          value='item-1'
          className='border-b border-stroke-soft-200 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiCheckboxCircleFill className='size-5 shrink-0 text-success-base' />
                <span className='truncate text-left text-label-sm text-text-strong-950'>
                  Add products
                </span>
                <Badge.Root
                  variant='lighter'
                  color='green'
                  size='medium'
                  className='ml-auto shrink-0'
                >
                  Ready
                </Badge.Root>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                Add and manage products in your store effortlessly. Control
                product details, pricing, and inventory levels all in one place.
                Create categories to keep your products organized and easily
                accessible.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value='item-2'
          className='border-b border-stroke-soft-200 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiLoader2Line className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:animate-spin group-data-[state=open]:text-warning-base' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Get the point of sale application
                </span>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='flex flex-col gap-6 pb-4 pl-[46px] pr-[52px] sm:flex-row'>
              <div>
                <p className='text-paragraph-sm text-text-sub-600'>
                  Scan the QR code or send yourself the link to get the app. The
                  mobile app is where you&apos;ll manage orders, track
                  inventory, and view analytics on the go.
                </p>
                <div className='mt-4 flex items-center gap-4'>
                  <InputWithButton />
                </div>
              </div>
              <div className='h-[112px] w-[112px] shrink-0 rounded-lg border border-stroke-soft-200 p-3'>
                <QRCodeComponent />
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value='item-3'
          className='transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiLoader2Line className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:animate-spin group-data-[state=open]:text-warning-base' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Product price & stock
                </span>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                Set competitive prices and monitor inventory levels. Update
                product prices, track stock quantities in real-time, and receive
                low-stock alerts. Manage multiple pricing options and automate
                stock notifications for seamless inventory control.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>

    <div className='flex w-full flex-col gap-2'>
      <Label.Root>
        Store settings
        <IconInfoCustom className='size-5 text-text-disabled-300' />
      </Label.Root>
      <Accordion.Root
        className='w-full rounded-xl border border-stroke-soft-200 bg-bg-white-0'
        type='single'
        collapsible
      >
        <Accordion.Item
          value='item-1'
          className='transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiLoader2Line className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:animate-spin group-data-[state=open]:text-warning-base' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Customize your store-front
                </span>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                Customize your store&apos;s appearance and functionality. Choose
                themes, configure layouts, and add features to create a unique
                shopping experience for your customers.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>

    <div className='flex w-full flex-col gap-2'>
      <Label.Root>
        Prepare for launch
        <IconInfoCustom className='size-5 text-text-disabled-300' />
      </Label.Root>
      <Accordion.Root
        className='w-full rounded-xl border border-stroke-soft-200 bg-bg-white-0'
        type='single'
        collapsible
      >
        <Accordion.Item
          value='item-1'
          className='border-b border-stroke-soft-200 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiLoader2Line className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:animate-spin group-data-[state=open]:text-warning-base' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Set up shipping options
                </span>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                Configure multiple shipping methods to meet your customers&apos;
                needs. Set up local and international delivery options, define
                shipping zones, and create flexible pricing rules. Integrate
                with popular carriers for real-time rates and tracking
                capabilities.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item
          value='item-2'
          className='transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex flex-1 items-center gap-2.5'>
                <RiLoader2Line className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:animate-spin group-data-[state=open]:text-warning-base' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Configure tax settings
                </span>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                Set up your tax configurations to ensure compliance with local
                and international regulations. Define tax rates for different
                regions, configure tax exemptions, and automate tax calculations
                for various product categories. Stay up-to-date with tax
                reporting and documentation requirements.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>

    <div className='flex w-full flex-col items-start gap-4 rounded-xl bg-bg-weak-50 p-4'>
      <div>
        <div>
          <div className='flex items-center justify-start gap-2'>
            <span className='text-label-sm text-text-strong-950'>
              Boost your online presence
            </span>
            <Badge.Root variant='light' color='purple' size='small'>
              PRO
            </Badge.Root>
          </div>
        </div>
        <p className='text-paragraph-sm text-text-sub-600'>
          Take your e-commerce business to the next level with advanced features
          designed to increase sales and improve customer experience
        </p>
      </div>

      <Button.Root variant='neutral' mode='filled' size='xxsmall'>
        Upgrade
      </Button.Root>
    </div>
  </div>
);

export default AccordionDemo;
