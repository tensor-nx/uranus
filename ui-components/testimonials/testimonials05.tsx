'use client';

import {
  RiArrowRightUpLongLine,
  RiQuestionAnswerFill,
  RiTimeLine,
  RiTwitterXLine,
  RiVerifiedBadgeFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';
import { cn } from '@/utils/cn';
const testimonialsData = [
  {
    name: 'Sophia Williams',
    handle: '@sophia',
    image: 'https://alignui.com/images/blocks/testimonials-person-3.jpg',
    testimonial:
      "We were up and running in under 10 minutes. That's never happened with any other tool.",
    date: '24 July, 2025',
  },
  {
    name: 'Emma Wright',
    handle: '@emma',
    image: 'https://alignui.com/images/blocks/testimonials-person-6.jpg',
    testimonial:
      'I picked my role and got relevant views. No clutter, no delays — just what I truly needed.',
    date: '24 July, 2025',
  },
  {
    name: 'Matthew Johnson',
    handle: '@matthew',
    image: 'https://alignui.com/images/blocks/testimonials-person-4.jpg',
    testimonial:
      "Our new hires onboard in half the time now. It's made team setup way more efficient.",
    date: '24 July, 2025',
  },
  {
    name: 'Laura Perez',
    handle: '@laura',
    image: 'https://alignui.com/images/blocks/testimonials-person-5.jpg',
    testimonial:
      "Tasks, teams, and timelines all came together. We didn't need a tutorial or training at all.",
    date: '24 July, 2025',
  },
  {
    name: 'Wei Chen',
    handle: '@wei',
    image: 'https://alignui.com/images/blocks/testimonials-person-7.jpg',
    testimonial:
      'Signing in felt natural from the very first click. It guided me without slowing anything down.',
    date: '24 July, 2025',
  },
  {
    name: 'Lena Müller',
    handle: '@lena',
    image: 'https://alignui.com/images/blocks/testimonials-person-8.jpg',
    testimonial:
      "I chose my title and saw my work instantly. It's smart enough to skip the setup steps.",
    date: '24 July, 2025',
  },
  {
    name: 'Juma Omondi',
    handle: '@juma',
    image: 'https://alignui.com/images/blocks/testimonials-person-9.jpg',
    testimonial:
      'Mobile onboarding took less than a minute. I finished it while walking into a meeting.',
    date: '24 July, 2025',
  },
  {
    name: 'Natalia Nowak',
    handle: '@natalia',
    image: 'https://alignui.com/images/blocks/testimonials-person-10.jpg',
    testimonial:
      'This is how team tools should work today. Fast, focused, and built for actual use 🚀',
    date: '24 July, 2025',
  },
  {
    name: 'Arthur Taylor',
    handle: '@arthur',
    image: 'https://alignui.com/images/blocks/testimonials-person-2.jpg',
    testimonial:
      'Everything synced the moment I joined the team. It felt seamless and extremely well designed.',
    date: '24 July, 2025',
  },
];

export default function Testimonials05() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-26 w-full'>
      <div className='mx-auto flex w-full max-w-7xl flex-col px-6 md:px-7'>
        <div className='mb-8 flex flex-col lg:mb-12 lg:items-center'>
          <Badge.Root
            variant='lighter'
            className='bg-bg-weak-50 text-text-sub-600 text-label-sm mb-3 h-7 w-fit gap-1.5 rounded-[9px] pr-2.5 pl-2 normal-case'
          >
            <Badge.Icon
              as={RiQuestionAnswerFill}
              className='text-primary-base mx-0 size-4'
            />
            Testimonials
          </Badge.Root>
          <h2 className='text-title-h4 lg:text-title-h3 xl:text-title-h2 text-text-strong-950 mb-4 font-[550] lg:text-center'>
            Loved by product and ops teams
          </h2>
          <p className='text-paragraph-md text-text-sub-600 max-w-[528px] lg:text-center'>
            From setup to daily use — here&apos;s what our users say about{' '}
            <br className='hidden lg:block' />
            <span className='text-label-md text-text-sub-600'>
              managing projects with clarity.
            </span>
          </p>
        </div>

        <div className='mx-[-18px] mb-8 grid w-[calc(100%+36px)] grid-cols-1 gap-1.5 md:grid-cols-2 lg:mx-0 lg:w-full lg:grid-cols-3'>
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className={cn(
                'bg-bg-weak-50 lg:bg-bg-weak-25 flex-col gap-7 overflow-hidden rounded-[28px] p-7 lg:gap-8 lg:rounded-[32px] lg:p-9',
                index >= 4 ? 'hidden lg:flex' : 'flex',
              )}
            >
              <div className='flex items-center gap-3.5'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className='size-10 shrink-0 rounded-full object-cover'
                />
                <div className='flex flex-1 flex-col gap-1'>
                  <div className='flex items-center gap-0.5'>
                    <span className='text-label-md text-text-strong-950'>
                      {item.name}
                    </span>
                    <RiVerifiedBadgeFill className='text-verified-base size-6 shrink-0' />
                  </div>
                  <span className='text-label-sm text-text-sub-600'>
                    {item.handle}
                  </span>
                </div>
                <RiTwitterXLine className='text-text-strong-950 size-6 shrink-0' />
              </div>

              <p className='text-label-lg text-text-strong-950'>
                {item.testimonial}
              </p>

              <div className='flex items-center gap-1.5'>
                <RiTimeLine className='text-text-soft-400 size-5 shrink-0' />
                <span className='text-label-sm text-text-soft-400'>
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col items-center'>
          <LinkButton.Root
            className='text-text-sub-600 text-label-md group h-auto w-fit cursor-pointer gap-1 whitespace-break-spaces'
            asChild
          >
            <a href='#'>
              See all testimonials
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className='text-primary-base size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </a>
          </LinkButton.Root>
        </div>
      </div>
    </div>
  );
}
