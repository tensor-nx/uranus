'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Accordion from '@/components/ui/accordion';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
const ratingsData = [
  {
    id: 'google',
    name: 'Google',
    rating: '4.6',
    icon: 'https://alignui.com/images/blocks/icon-google.svg',
  },
  {
    id: 'trustpilot',
    name: 'Trustpilot',
    rating: '4.9',
    icon: 'https://alignui.com/images/blocks/icon-trustpilot.svg',
  },
  {
    id: 'g2',
    name: 'G2',
    rating: '4.3',
    icon: 'https://alignui.com/images/blocks/icon-tripAdvisor.svg',
  },
];

const faqData = [
  {
    id: 'faq1',
    question: 'What time categories are tracked?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'faq2',
    question: 'Can team members view reports?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function Features03() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:gap-12 lg:px-12 2xl:gap-20'>
        <div className='flex flex-1 items-center justify-center'>
          <Image
            src='https://alignui.com/images/blocks/features-03.png'
            alt='Features 02'
            width={498}
            height={500}
            className='hidden h-auto w-full object-contain lg:block'
          />
          <Image
            src='https://alignui.com/images/blocks/features-03-mobile.png'
            alt='Features 02'
            width={342}
            height={386}
            className='block h-auto w-full object-contain lg:hidden'
          />
        </div>
        <div className='flex flex-1 flex-col justify-center'>
          <Badge.Root
            variant='stroke'
            className='text-label-sm text-text-sub-600 shadow-custom-input-2 mb-3 h-7 w-fit rounded-[9px] pr-2.5 pl-1.75 normal-case ring-transparent has-[>.dot]:gap-1'
          >
            <Badge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
            Track work hours
          </Badge.Root>
          <h2 className='text-title-h4 lg:text-title-h3 xl:text-title-h2 text-text-strong-950 mb-6 !font-[550] lg:mb-8'>
            Make every hour truly more productive
          </h2>
          <p className='text-paragraph-md text-text-sub-600 mb-6 lg:mb-8'>
            Track active time, breaks, and overtime to understand team{' '}
            <span className='text-label-md text-text-sub-600 flex lg:inline'>
              habits and improve focus with real-time insights.
            </span>
          </p>
          <div className='mb-5 flex gap-6.5 lg:gap-8'>
            {ratingsData.map((rating, index) => {
              const isLast = index === ratingsData.length - 1;
              return (
                <div
                  key={rating.id}
                  className={`flex items-center gap-2 ${!isLast ? "before:bg-stroke-soft-200 relative before:absolute before:top-1/2 before:-right-3.25 before:h-4 before:w-0.25 before:-translate-y-1/2 before:content-[''] lg:before:-right-4" : 'relative'}`}
                >
                  <Image
                    src={rating.icon}
                    alt={`${rating.name} Logo`}
                    width={20}
                    height={20}
                    className='size-5 object-cover'
                  />
                  <p className='text-label-sm lg:text-label-md text-text-soft-400'>
                    <span className='text-label-sm lg:text-label-md text-text-sub-600'>
                      {rating.rating}
                    </span>{' '}
                    {rating.name}{' '}
                  </p>
                </div>
              );
            })}
          </div>
          <Accordion.Root
            type='single'
            collapsible
            className='mb-6 space-y-2 lg:mb-8'
          >
            {faqData.map((faq) => (
              <Accordion.Item
                key={faq.id}
                value={faq.id}
                className='bg-bg-weak-25 cursor-pointer !rounded-xl px-4 py-3 pr-3 ring-0 ring-transparent duration-300 lg:!rounded-2xl'
              >
                <Accordion.Trigger className='text-text-sub-600 text-label-sm lg:text-label-md group-hover/accordion:text-text-strong-950 group-data-[state=open]/accordion:text-text-strong-950 cursor-pointer duration-300'>
                  {faq.question}
                  <Accordion.Arrow className='text-text-soft-400 group-[&[data-state=open]]/accordion:text-text-sub-600 group-hover/accordion:text-text-strong-950 ml-auto size-6 duration-300' />
                </Accordion.Trigger>
                <Accordion.Content className='flex flex-col gap-5 pt-3 lg:pt-4'>
                  <div className='text-label-sm text-text-sub-600'>
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
          <Button.Root
            mode='stroke'
            size='medium'
            className='text-primary-base ring-primary-base focus:border-primary-base hover:bg-blue-alpha-10 focus:shadow-button-primary-focus w-full cursor-pointer gap-2 rounded-xl border border-transparent pl-4.5 transition-all duration-300 hover:shadow-none hover:ring-transparent focus:bg-transparent focus:ring-transparent lg:w-fit'
          >
            Book a demo
            <Button.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base group-disabled:text-text-disabled-300 size-5'
            />
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
