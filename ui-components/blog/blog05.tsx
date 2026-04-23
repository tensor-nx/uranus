'use client';

import { RiArrowRightUpLongLine, RiPencilFill } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';
const blogPosts = [
  {
    id: '1',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-5-image-1.jpg',
    readTime: '2 min read',
    title: 'How top teams onboard in minutes',
    description:
      'Discover the key habits that help teams launch faster and avoid process bottlenecks early on.',
  },
  {
    id: '2',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-5-image-2.jpg',
    readTime: '4 min read',
    title: '5 ways to simplify team workflows',
    description:
      'Learn how structure, roles, and smart defaults reduce chaos and increase team momentum.',
  },
  {
    id: '3',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-5-image-3.jpg',
    readTime: '3 min read',
    title: 'The hidden cost of poor setup',
    description:
      'Uncover how weak onboarding leads to lost time, team friction, and dropped deliverables.',
  },
];

export default function Blog05() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-[104px] w-full'>
      <div className='mx-auto lg:max-w-7xl lg:px-7'>
        <div className='mx-auto flex flex-col gap-8 lg:max-w-[808px] lg:items-center lg:gap-12'>
          <div className='flex flex-col gap-4 px-6 lg:items-center lg:px-0'>
            <div className='flex flex-col gap-3 lg:items-center'>
              <Badge.Root
                variant='filled'
                className='bg-bg-weak-50 text-label-sm text-text-sub-600 h-7 w-fit gap-1.5 rounded-[9px] pr-2.5 pl-2 normal-case'
              >
                <Badge.Icon
                  as={RiPencilFill}
                  className='text-primary-base mx-0 size-4 before:size-4'
                />
                Blog & Insights
              </Badge.Root>
              <h2 className='text-title-h4 text-text-strong-950 lg:text-title-h2 font-[550] lg:text-center'>
                Smarter insights for project teams
              </h2>
            </div>
            <p className='text-paragraph-md text-text-sub-600 lg:max-w-[508px] lg:text-center'>
              Explore how agile teams streamline onboarding, improve workflows,{' '}
              <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
                and ship faster with the right tools.
              </span>
            </p>

            <LinkButton.Root className='text-text-sub-600 text-label-md group h-auto cursor-pointer justify-start gap-1 whitespace-break-spaces no-underline hover:no-underline lg:hidden lg:justify-center'>
              See all blogs
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className='text-primary-base size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </LinkButton.Root>
          </div>

          <div className='flex w-full flex-col gap-8'>
            <div
              className='flex gap-4 overflow-x-auto px-6 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0'
              style={{ scrollbarWidth: 'none' }}
            >
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={post.href}
                  className='bg-bg-weak-25 group flex w-[320px] shrink-0 flex-col gap-4 overflow-hidden rounded-[32px] p-2.5 lg:w-full lg:flex-row lg:gap-7 lg:py-2.5 lg:pr-7 lg:pl-2.5'
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={300}
                    className='aspect-square w-full rounded-3xl object-cover lg:size-[224px] lg:w-auto'
                  />
                  <div className='flex flex-1 flex-col gap-3 p-3.5 lg:gap-5 lg:p-0 lg:py-[18px]'>
                    <span className='text-label-xs text-primary-base lg:text-label-sm'>
                      {post.readTime}
                    </span>
                    <div className='flex flex-1 flex-col gap-2'>
                      <h3 className='text-label-md text-text-strong-950 lg:text-title-h6'>
                        {post.title}
                      </h3>
                      <p className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md line-clamp-2 lg:line-clamp-none'>
                        {post.description}
                      </p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <span className='text-label-sm text-text-sub-600 lg:text-label-md'>
                        Read more
                      </span>
                      <RiArrowRightUpLongLine className='text-primary-base size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className='hidden justify-center lg:flex'>
              <LinkButton.Root className='text-text-sub-600 text-label-md group h-auto cursor-pointer gap-1 whitespace-break-spaces no-underline hover:no-underline'>
                See all blogs
                <LinkButton.Icon
                  as={RiArrowRightUpLongLine}
                  className='text-primary-base size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                />
              </LinkButton.Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
