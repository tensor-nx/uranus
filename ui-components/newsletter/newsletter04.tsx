'use client';

import { RiArrowRightUpLine, RiMailFill } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
const ListCircleIcon = () => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 14C3.1339 14 0 10.8661 0 7C0 3.1339 3.1339 0 7 0C10.8661 0 14 3.1339 14 7C14 10.8661 10.8661 14 7 14ZM6.3021 9.8L11.2511 4.8503L10.2613 3.8605L6.3021 7.8204L4.3218 5.8401L3.332 6.8299L6.3021 9.8Z'
        className='fill-primary-base'
      />
    </svg>
  );
};

export default function Newsletter04() {
  return (
    <div className='bg-bg-white-0 relative overflow-x-clip pt-10 lg:pt-0 w-full'>
      <div className='pointer-events-none z-10 lg:absolute lg:inset-0'>
        <div className='mx-auto h-full max-w-7xl px-6 lg:px-7'>
          <div className='flex h-full items-center lg:pt-[74px]'>
            <div className='pointer-events-auto flex w-full flex-col lg:max-w-[440px] xl:max-w-[520px]'>
              <Badge.Root
                variant='lighter'
                className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 capitalize'
              >
                Finance & Automation
              </Badge.Root>
              <h3 className='text-title-h4 lg:text-title-h5 2xl:text-title-h2 xl:text-title-h3 text-text-strong-950 mb-4 !font-[550] lg:mb-6'>
                Connect your finance stack with trusted apps and workflows
              </h3>
              <p className='text-paragraph-md text-text-sub-600 mb-8 xl:mb-10'>
                Sync your favorite tools to automate reporting, reduce{' '}
                <br className='hidden lg:block' />
                <strong className='text-label-md text-text-sub-600'>
                  busywork, and work more securely.
                </strong>
              </p>
              <div className='mb-8 flex flex-col gap-4 xl:mb-10'>
                <div className='flex items-center gap-2.5'>
                  <div className='size-3.5'>
                    <ListCircleIcon />
                  </div>
                  <span className='text-paragraph-sm text-text-sub-600'>
                    Always compliant, always updated
                  </span>
                </div>
                <div className='flex items-center gap-2.5'>
                  <div className='size-3.5'>
                    <ListCircleIcon />
                  </div>
                  <span className='text-paragraph-sm text-text-sub-600'>
                    Custom access levels for teams
                  </span>
                </div>
                <div className='flex items-center gap-2.5'>
                  <div className='size-3.5'>
                    <ListCircleIcon />
                  </div>
                  <span className='text-paragraph-sm text-text-sub-600'>
                    Advanced security protocols
                  </span>
                </div>
              </div>
              <div className='flex flex-col gap-3 lg:flex-row lg:gap-2.5'>
                <div className='flex w-full flex-1 flex-col gap-3 lg:w-80 xl:w-89.5'>
                  <div className='relative flex w-full'>
                    <Input.Root className='shadow-custom-input hover:shadow-gray-shadow has-[input:focus]:shadow-custom-input-active rounded-xl transition-none before:content-none'>
                      <Input.Wrapper size='medium'>
                        <Input.Icon
                          as={RiMailFill}
                          className='group-has-[:placeholder-shown]:text-text-disabled-300 text-primary-base group-has-[:placeholder-shown]:group-hover/input-wrapper:text-text-soft-400 group-has-[:placeholder-shown]:group-has-[input:focus]/input-wrapper:text-primary-base size-5'
                        />
                        <Input.Input
                          id='email'
                          type='email'
                          placeholder='Type your email here...'
                          className='text-text-strong-950 text-paragraph-sm placeholder:text-text-soft-400 placeholder:text-paragraph-sm group-has-[input:focus]:placeholder:text-text-strong-950'
                        />
                      </Input.Wrapper>
                    </Input.Root>
                    <Button.Root
                      variant='primary'
                      mode='filled'
                      size='medium'
                      className='absolute top-1/2 right-1.5 size-7 shrink-0 -translate-y-1/2 cursor-pointer rounded-lg p-0'
                    >
                      <Button.Icon
                        as={RiArrowRightUpLine}
                        className='text-static-white size-4.5 shrink-0'
                      />
                    </Button.Root>
                  </div>
                  <div className='text-paragraph-xs text-text-soft-400'>
                    We respect your privacy —{' '}
                    <span className='text-text-sub-600 text-label-xs'>
                      learn more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-end px-3 pt-8 lg:px-0 lg:pt-[74px]'>
        <Image
          src='https://alignui.com/images/blocks/newsletter-4-image.png'
          alt='newsletter'
          width={830}
          height={680}
          className='hidden h-auto w-[50%] lg:block dark:lg:hidden'
        />
        <Image
          src='https://alignui.com/images/blocks/newsletter-4-image-dark.png'
          alt='newsletter'
          width={830}
          height={680}
          className='hidden h-auto w-[50%] dark:lg:block'
        />
        <Image
          src='https://alignui.com/images/blocks/newsletter-4-image-mobile.png'
          alt='newsletter'
          width={366}
          height={754}
          className='mx-auto block h-auto w-full object-cover object-left-top dark:hidden sm:w-2/3 lg:hidden'
        />
        <Image
          src='https://alignui.com/images/blocks/newsletter-4-image-mobile-dark.png'
          alt='newsletter'
          width={366}
          height={754}
          className='mx-auto hidden h-auto w-full object-cover object-left-top dark:block sm:w-2/3 dark:lg:hidden'
        />
      </div>
    </div>
  );
}
