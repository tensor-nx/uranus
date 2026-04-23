'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';

interface BlogPost {
  id: string;
  date: string;
  title: string;
  author: {
    name: string;
    role: string;
  };
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    date: 'June 13',
    title:
      'Five strategies to optimize your digital wallet for speed and security.',
    author: {
      name: 'Arthur Taylor',
      role: 'Senior Compliance Officer',
    },
    href: '/',
  },
  {
    id: '2',
    date: 'June 26',
    title: 'How modern tools improve payment transparency and control.',
    author: {
      name: 'James Brown',
      role: 'VP of Product, Apex',
    },
    href: '/',
  },
  {
    id: '3',
    date: 'July 8',
    title: 'Building trust through smarter, data-driven financial experiences.',
    author: {
      name: 'Sophia Williams',
      role: 'Financial Strategist',
    },
    href: '/',
  },
];

export default function Blog01() {
  return (
    <div className='bg-bg-white-0 flex w-full flex-col gap-6 pt-10 pb-10 lg:gap-8 lg:pt-16 lg:pb-12 xl:gap-12 xl:pt-20 xl:pb-17'>
      <div className='mx-auto flex w-full max-w-[808px] flex-col gap-4 px-6 lg:flex-row lg:gap-6 lg:px-0'>
        <div className='flex flex-col gap-2 lg:gap-3'>
          <Badge.Root
            variant='lighter'
            className='bg-bg-weak-50 text-text-sub-600 text-label-sm h-7 w-fit rounded-[9px] px-2.5 normal-case'
          >
            Latest from the blog
          </Badge.Root>
          <div className='text-text-strong-950 text-title-h4 xl:text-title-h3 !font-[550]'>
            Blog posts that guide your growth
          </div>
        </div>
        <div className='flex flex-col items-start justify-end gap-4 lg:gap-6'>
          <div className='text-text-sub-600 text-paragraph-md lg:text-label-md'>
            Explore expert tips, market trends, and practical guides.
          </div>
          <LinkButton.Root className='text-text-strong-950 text-label-md group h-auto cursor-pointer gap-1 whitespace-break-spaces'>
            See all blogs
            <LinkButton.Icon
              as={RiArrowRightUpLongLine}
              className='text-text-soft-400 size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
            />
          </LinkButton.Root>
        </div>
      </div>
      <div className='flex max-w-7xl flex-col gap-2 px-6 lg:mx-auto lg:flex-row lg:gap-3 lg:px-7'>
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={post.href}
            className='bg-bg-weak-50 group flex flex-1 flex-col gap-10 rounded-3xl p-6 xl:p-8 2xl:gap-18'
          >
            <div className='text-text-soft-400 text-label-sm'>{post.date}</div>
            <div className='text-text-strong-950 text-title-h6 2xl:text-title-h5 lg:!font-[550]'>
              {post.title}
            </div>
            <div className='flex items-center justify-between gap-3'>
              <div className='flex flex-col gap-1'>
                <span className='text-text-strong-950 text-label-sm'>
                  {post.author.name}
                </span>
                <span className='text-text-soft-400 text-label-sm'>
                  {post.author.role}
                </span>
              </div>
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='xsmall'
                className='border-stroke-soft-200 group-hover:border-stroke-strong-950 h-11 w-11 cursor-pointer rounded-full border bg-bg-weak-50 ring-0 [box-shadow:none] transition-all duration-300'
              >
                <Button.Icon
                  as={RiArrowRightUpLongLine}
                  className='text-text-sub-600 group-hover:text-text-strong-950 size-5 transition-all duration-300'
                />
              </Button.Root>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
