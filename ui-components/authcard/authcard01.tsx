'use client';

import * as React from 'react';
import { RiEyeLine, RiEyeOffLine } from '@remixicon/react';

import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as SocialButton from '@/components/ui/social-button';

function IconLinkedin({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.3333 4H6.66667C5.19333 4 4 5.19333 4 6.66667V25.3333C4 26.8067 5.19333 28 6.66667 28H25.3333C26.8067 28 28 26.8067 28 25.3333V6.66667C28 5.19333 26.8067 4 25.3333 4ZM11.2567 24.6667H7.67667V13.11H11.2567V24.6667ZM9.45 11.5967C8.28 11.5967 7.33333 10.6433 7.33333 9.46333C7.33333 8.28333 8.28 7.33 9.45 7.33C10.62 7.33 11.5667 8.28333 11.5667 9.46333C11.5667 10.6433 10.62 11.5967 9.45 11.5967ZM24.6667 24.6667H21.1067V18.6C21.1067 16.9367 20.4733 16.0067 19.16 16.0067C17.7267 16.0067 16.98 16.9733 16.98 18.6V24.6667H13.5467V13.11H16.98V14.6667C16.98 14.6667 18.0133 12.7567 20.4633 12.7567C22.9133 12.7567 24.67 14.2533 24.67 17.35V24.6667H24.6667Z'
        fill='#0077B5'
      />
    </svg>
  );
}

export default function BlockAuthCard() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className='flex w-full max-w-[400px] flex-col gap-5 rounded-3xl bg-bg-white-0 p-6 shadow-regular-xs'>
      <div className='flex flex-col items-center gap-5'>
        <img
          src='https://alignui.com/images/logo/aurora.svg'
          alt=''
          className='size-14'
        />
        <div className='text-center'>
          <div className='text-title-h6 text-text-strong-950'>
            Create an account
          </div>
          <div className='text-paragraph-sm text-text-sub-600'>
            Please enter your details to create an account.
          </div>
        </div>
      </div>
      <SocialButton.Root brand='linkedin' mode='stroke' className='w-full'>
        <SocialButton.Icon as={IconLinkedin} />
        Continue with LinkedIn
      </SocialButton.Root>

      <Divider.Root variant='line-text'>OR</Divider.Root>

      <div className='flex flex-col gap-3'>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-1'>
            <Label.Root htmlFor='first-name'>First Name</Label.Root>
            <Input.Root>
              <Input.Wrapper>
                <Input.Input id='first-name' placeholder='James' />
              </Input.Wrapper>
            </Input.Root>
          </div>
          <div className='flex flex-col gap-1'>
            <Label.Root htmlFor='last-name'>Last Name</Label.Root>
            <Input.Root>
              <Input.Wrapper>
                <Input.Input id='last-name' placeholder='Brown' />
              </Input.Wrapper>
            </Input.Root>
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='email'>Email Address</Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Input
                id='email'
                type='email'
                placeholder='hello@alignui.com'
              />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <div className='flex items-center justify-between'>
            <Label.Root htmlFor='password'>Password</Label.Root>
            <button type='button' className='text-label-xs text-text-sub-600'>
              Clear
            </button>
          </div>
          <Input.Root>
            <Input.Wrapper>
              <Input.Input
                id='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='• • • • • • • • • • '
              />
              <button type='button' onClick={() => setShowPassword((s) => !s)}>
                {showPassword ? (
                  <RiEyeOffLine className='size-5 text-text-soft-400' />
                ) : (
                  <RiEyeLine className='size-5 text-text-soft-400' />
                )}
              </button>
            </Input.Wrapper>
          </Input.Root>
        </div>
      </div>

      <FancyButton.Root variant='primary' className='w-full'>
        Continue
      </FancyButton.Root>

      <div className='flex items-baseline justify-center gap-1 text-paragraph-sm text-text-sub-600'>
        Already have an account?
        <LinkButton.Root variant='black' size='medium'>
          Login
        </LinkButton.Root>
      </div>
    </div>
  );
}
