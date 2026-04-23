'use client';

import {
  RemixiconComponentType,
  RiArrowRightUpLongLine,
  RiQuestionAnswerFill,
  RiQuestionFill,
  RiTimerFlashFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';

interface BlogPost {
  id: string;
  href: string;
  image: string;
  badge: {
    icon: RemixiconComponentType;
    label: string;
    bgClass: string;
    textClass: string;
  };
  title: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-2-image-1.jpg',
    badge: {
      icon: RiQuestionAnswerFill,
      label: 'Culture & Feedback',
      bgClass: 'bg-feature-lighter',
      textClass: 'text-feature-dark',
    },
    title: 'How to give clear feedback that actually helps your team',
  },
  {
    id: '2',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-2-image-2.jpg',
    badge: {
      icon: RiTimerFlashFill,
      label: 'Team Wellbeing',
      bgClass: 'bg-success-lighter',
      textClass: 'text-success-dark',
    },
    title: "5 small changes to improve your team's wellbeing",
  },
  {
    id: '3',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-2-image-3.jpg',
    badge: {
      icon: RiQuestionFill,
      label: 'Onboarding',
      bgClass: 'bg-information-lighter',
      textClass: 'text-information-dark',
    },
    title: 'What new hires really need on their first day',
  },
];

export default function Blog02() {
  return (
    <div className='bg-bg-white-0 flex w-full flex-col py-10 lg:py-20 xl:py-24'>
      <div className='flex max-w-7xl flex-col gap-6 px-6 lg:mx-auto lg:gap-8 lg:px-7 xl:gap-12'>
        <div className='flex flex-col items-start lg:items-center'>
          <Badge.Root
            variant='stroke'
            className='text-label-sm text-text-sub-600 shadow-custom-input-2 mb-3 h-7 w-fit rounded-[9px] pr-2.5 pl-1.75 capitalize ring-transparent has-[>.dot]:gap-1 lg:mx-auto'
          >
            <Badge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
            Blog & Insights
          </Badge.Root>
          <div className='text-text-strong-950 text-title-h4 lg:text-title-h3 xl:text-title-h2 mb-4 !font-[550] lg:text-center'>
            Smarter people ops start with learning
          </div>
          <div className='text-text-sub-600 text-paragraph-md mb-3 max-w-[432px] lg:mx-auto lg:text-center xl:mb-6'>
            Save hours every week, simplify workflows, and help your HR team
            focus on people — not processes.
          </div>
          <LinkButton.Root className='text-primary-base text-label-md h-auto cursor-pointer gap-1 whitespace-break-spaces'>
            See all blogs
            <LinkButton.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base size-5'
            />
          </LinkButton.Root>
        </div>
        <div className='flex flex-col gap-6 lg:flex-row'>
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              href={post.href}
              className={`group flex w-full flex-col ${index === 0 ? 'gap-5 lg:gap-7' : 'gap-7'}`}
            >
              <div className='flex'>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={392}
                  height={262}
                  className='h-auto w-full rounded-3xl object-cover md:max-h-[460px] lg:max-h-none lg:rounded-[28px]'
                />
              </div>
              <div className='flex flex-col items-start gap-3'>
                <Badge.Root
                  variant='lighter'
                  className={`w-fit ${post.badge.bgClass} ${post.badge.textClass} text-label-xs h-6 gap-1.5 rounded-[7px] px-1.5 capitalize`}
                >
                  <Badge.Icon
                    as={post.badge.icon}
                    className={`size-3.5 ${post.badge.textClass} mx-0`}
                  />
                  {post.badge.label}
                </Badge.Root>
                <div className='text-text-strong-950 text-title-h6 lg:text-label-lg xl:text-title-h6 2xl:text-title-h5 mb-1 lg:!font-[550] xl:mb-3'>
                  {post.title}
                </div>
                <LinkButton.Root className='text-text-sub-600 text-label-md h-auto cursor-pointer gap-1 whitespace-break-spaces no-underline hover:no-underline'>
                  Read more
                  <LinkButton.Icon
                    as={RiArrowRightUpLongLine}
                    className='text-text-sub-600 size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  />
                </LinkButton.Root>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
