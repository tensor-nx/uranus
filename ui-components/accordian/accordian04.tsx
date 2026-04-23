'use client';

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  RiAccountCircle2Line,
  RiAddLine,
  RiArrowDownSLine,
  RiBankCardLine,
  RiCheckboxCircleFill,
  RiLoader2Line,
  RiLockLine,
  RiMapPinTimeLine,
  RiRepeat2Line,
  RiSubtractLine,
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

const AccordionAccount = () => (
  <div className='flex w-full max-w-[440px] flex-col gap-4'>
    <div className='flex w-full flex-col gap-2'>
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
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left data-[state=open]:pb-2 data-[state=open]:pt-3.5'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiAccountCircle2Line className='size-5 shrink-0 text-text-soft-400 group-hover:group-data-[state=closed]:text-text-sub-600' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  How do I update my account information?
                </span>
              </div>
              <RiAddLine className='size-5 text-text-soft-400 group-data-[state=open]:hidden group-hover:group-data-[state=closed]:text-text-sub-600' />
              <RiSubtractLine className='hidden size-5 text-text-soft-400 group-data-[state=open]:block group-data-[state=open]:text-text-sub-600 group-hover:group-data-[state=closed]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                To update your account information, please log in to your
                account and navigate to the settings section. From there, you
                can update your personal details, contact information, and other
                relevant information.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value='item-2'
          className='border-b border-stroke-soft-200 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left data-[state=open]:pb-2 data-[state=open]:pt-3.5'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiBankCardLine className='size-5 shrink-0 text-text-soft-400 group-hover:group-data-[state=closed]:text-text-sub-600' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  What payment methods are accepted?
                </span>
              </div>
              <RiAddLine className='size-5 text-text-soft-400 group-data-[state=open]:hidden group-hover:group-data-[state=closed]:text-text-sub-600' />
              <RiSubtractLine className='hidden size-5 text-text-soft-400 group-data-[state=open]:block group-data-[state=open]:text-text-sub-600 group-hover:group-data-[state=closed]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                Major credit and debit cards like Visa, MasterCard, and American
                Express, as well as digital payment options like PayPal and
                Apple Pay.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value='item-3'
          className=' border-b border-stroke-soft-200 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left data-[state=open]:pb-2 data-[state=open]:pt-3.5'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiRepeat2Line className='size-5 shrink-0 text-text-soft-400 group-hover:group-data-[state=closed]:text-text-sub-600' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  How do I get a refund?
                </span>
              </div>
              <RiAddLine className='size-5 text-text-soft-400 group-data-[state=open]:hidden group-hover:group-data-[state=closed]:text-text-sub-600' />
              <RiSubtractLine className='hidden size-5 text-text-soft-400 group-data-[state=open]:block group-data-[state=open]:text-text-sub-600 group-hover:group-data-[state=closed]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                If you are not satisfied with your purchase, please contact our
                customer support team. We will review your request and process
                the refund as soon as possible.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value='item-4'
          className='border-b border-stroke-soft-200 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left data-[state=open]:pb-2 data-[state=open]:pt-3.5'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiMapPinTimeLine className='size-5 shrink-0 text-text-soft-400 group-hover:group-data-[state=closed]:text-text-sub-600' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  How can I track my order?
                </span>
              </div>
              <RiAddLine className='size-5 text-text-soft-400 group-data-[state=open]:hidden group-hover:group-data-[state=closed]:text-text-sub-600' />
              <RiSubtractLine className='hidden size-5 text-text-soft-400 group-data-[state=open]:block group-data-[state=open]:text-text-sub-600 group-hover:group-data-[state=closed]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                To track your order, please log in to your account and navigate
                to the order history section. You can also use the tracking
                number provided in your order confirmation email to track your
                package.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value='item-5'
          className='transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left data-[state=open]:pb-2 data-[state=open]:pt-3.5'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiLockLine className='size-5 shrink-0 text-text-soft-400 group-hover:group-data-[state=closed]:text-text-sub-600' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  How do I reset my password?
                </span>
              </div>
              <RiAddLine className='size-5 text-text-soft-400 group-data-[state=open]:hidden group-hover:group-data-[state=closed]:text-text-sub-600' />
              <RiSubtractLine className='hidden size-5 text-text-soft-400 group-data-[state=open]:block group-data-[state=open]:text-text-sub-600 group-hover:group-data-[state=closed]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                To reset your password, please click on the forgot password link
                on the login page. You will be asked to enter your email address
                and then follow the instructions to reset your password.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  </div>
);

export default AccordionAccount;
