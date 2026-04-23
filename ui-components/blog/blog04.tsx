'use client';

import { RiArrowRightUpLongLine, RiPencilFill } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';

interface BlogPost {
  id: string;
  href: string;
  image: string;
  date: string;
  title: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-4-image-1.jpg',
    date: 'April 10, 2025',
    title: 'How automation reshapes modern finance ops',
  },
  {
    id: '2',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-4-image-2.jpg',
    date: 'August 17, 2025',
    title: 'Key fraud indicators all banks should track',
  },
  {
    id: '3',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-4-image-3.jpg',
    date: 'February 13, 2025',
    title: 'Why smart tagging improves payment workflows',
  },
];

export default function Blog04() {
  return (
    <div className='bg-bg-white-0 w-full py-10 lg:py-20 xl:py-24'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:gap-8 lg:px-7 xl:gap-12'>
        <div className='flex flex-col items-start lg:items-center'>
          <Badge.Root
            variant='filled'
            className='text-label-sm bg-bg-weak-50 text-text-sub-600 mb-3 h-7 w-fit gap-1.5 rounded-[9px] pr-2.5 pl-2 capitalize lg:mx-auto'
          >
            <Badge.Icon
              as={RiPencilFill}
              className='text-text-soft-400 mx-0 size-4 before:size-4'
            />
            Blog & Insights
          </Badge.Root>
          <div className='text-text-strong-950 text-title-h4 lg:text-title-h3 xl:text-title-h2 mb-4 !font-[550] lg:text-center'>
            Smarter insights for finance teams
          </div>
          <div className='text-text-sub-600 text-paragraph-md mb-3 lg:text-center xl:mb-6'>
            Learn how top teams drive results through better campaigns,
            <strong className='text-label-md lg:flex lg:justify-center'>
              sharper sales tactics, and data-backed decisions.
            </strong>
          </div>
          <LinkButton.Root className='text-text-sub-600 text-label-md group h-auto cursor-pointer gap-1 whitespace-break-spaces no-underline hover:no-underline'>
            See all blogs
            <LinkButton.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
            />
          </LinkButton.Root>
        </div>
        <div className='flex flex-col gap-6 lg:flex-row'>
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className='group flex w-full flex-col gap-1.5 lg:gap-2.5'
            >
              <div className='flex'>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={392}
                  height={300}
                  className='rounded-b-10 h-auto w-full rounded-t-3xl object-cover md:max-h-[460px] lg:max-h-none lg:rounded-t-[28px]'
                />
              </div>
              <div className='rounded-t-10 bg-bg-weak-50 flex flex-col items-start gap-3 rounded-b-3xl p-6 lg:h-full lg:rounded-b-[28px]'>
                <div className='text-text-soft-400 text-label-sm'>
                  {post.date}
                </div>
                <div className='text-text-strong-950 text-title-h6 lg:text-label-lg xl:text-title-h6 mb-3 flex-1 lg:!font-[550]'>
                  {post.title}
                </div>
                <LinkButton.Root className='text-text-sub-600 text-label-md h-auto cursor-pointer gap-1 whitespace-break-spaces no-underline hover:no-underline'>
                  Read more
                  <LinkButton.Icon
                    as={RiArrowRightUpLongLine}
                    className='text-primary-base size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
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
