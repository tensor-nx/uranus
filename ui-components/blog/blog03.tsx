'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';

interface SideBlogPost {
  id: string;
  href: string;
  image: string;
  date: string;
  title: string;
}

const sideBlogPosts: SideBlogPost[] = [
  {
    id: '1',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-3-image-2.jpg',
    date: 'Jun 20',
    title: 'Boosting ROAS with multichannel campaign strategies',
  },
  {
    id: '2',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-3-image-3.jpg',
    date: 'May 14',
    title: 'Creative A/B tests that increased conversion by 60%',
  },
  {
    id: '3',
    href: '/',
    image: 'https://alignui.com/images/blocks/blog-3-image-4.jpg',
    date: 'Jul 15',
    title: 'What top sales teams automate to close more deals',
  },
];

export default function Blog03() {
  return (
    <div className='bg-bg-white-0 w-full py-10 lg:py-20 xl:py-24'>
      <div className='mx-auto flex flex-col gap-6 px-6 lg:max-w-[944px] lg:gap-10 lg:px-0 xl:gap-16'>
        <div className='flex flex-col items-start lg:items-center'>
          <Badge.Root
            variant='filled'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] pr-2.5 pl-1.75 capitalize ring-transparent has-[>.dot]:gap-1 lg:mx-auto'
          >
            <Badge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
            Blog & Insights
          </Badge.Root>
          <div className='text-text-strong-950 text-title-h4 lg:text-title-h3 xl:text-title-h2 mb-4 !font-[550] lg:text-center'>
            Smarter marketing begins with insight
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
        <div className='flex flex-col gap-6 lg:flex-row lg:gap-8 xl:gap-12'>
          <Link
            href='/'
            className='group border-stroke-soft-200 lg:shadow-complex-5 relative flex w-full shrink-0 gap-6 overflow-hidden border-t pt-6 lg:h-106 lg:w-106 lg:rounded-[28px] lg:border-none lg:pt-0'
          >
            <div className='bg-bg-weak-50 flex size-24 shrink-0 md:size-30 lg:h-full lg:w-full'>
              <Image
                src='https://alignui.com/images/blocks/blog-3-image-1.jpg'
                alt='logo'
                width={424}
                height={424}
                className='rounded-20 h-full w-full object-cover transition-all duration-300 group-hover:scale-102 lg:rounded-none'
              />
            </div>
            <div className='flex h-full w-full flex-col items-start lg:absolute lg:bottom-0 lg:left-0'>
              <div className='hidden w-full flex-1 justify-end lg:flex lg:pt-9 lg:pr-9'>
                <LinkButton.Root>
                  <LinkButton.Icon
                    as={RiArrowRightUpLongLine}
                    className='text-static-white size-6 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  />
                </LinkButton.Root>
              </div>
              <div className='flex flex-col items-start lg:px-9 lg:py-8 lg:[background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_25%,rgba(0,0,0,0.19)_50%,rgba(0,0,0,0.31)_75%,rgba(0,0,0,0.48)_100%)]'>
                <div className='text-text-strong-950/[0.48] lg:text-static-white/[0.48] text-label-sm mb-1 lg:mb-2 lg:uppercase'>
                  Sep 24
                </div>
                <div className='text-label-lg lg:text-title-h6 text-text-strong-950 lg:text-static-white mb-4 !font-[550] lg:mb-0'>
                  How a DTC brand scaled faster with smarter ad targeting
                </div>
                <LinkButton.Root className='text-text-sub-600 text-label-md flex h-auto cursor-pointer gap-1 whitespace-break-spaces no-underline hover:no-underline lg:hidden'>
                  Read more
                  <LinkButton.Icon
                    as={RiArrowRightUpLongLine}
                    className='text-primary-base size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  />
                </LinkButton.Root>
              </div>
            </div>
          </Link>
          <div className='flex w-full flex-col gap-6 lg:gap-8'>
            {sideBlogPosts.map((post) => (
              <Link
                key={post.id}
                href={post.href}
                className='group border-stroke-soft-200 flex w-full gap-6 border-t pt-6 lg:border-none lg:pt-0'
              >
                <div className='rounded-20 bg-bg-weak-50 shadow-complex-6 flex size-24 shrink-0 overflow-hidden md:size-30'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={120}
                    height={120}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex flex-col items-start gap-2'>
                  <div className='text-text-strong-950/[0.48] text-label-sm'>
                    {post.date}
                  </div>
                  <div className='text-text-strong-950 text-label-lg mb-2'>
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
    </div>
  );
}
