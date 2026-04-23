'use client';

import {
  RiArrowRightUpLongLine,
  RiMoneyDollarCircleFill,
  RiTimeFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';
const jobsData = [
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Shape product vision with global solutions.',
    location: { name: 'United States', flag: 'https://alignui.com/images/blocks/flags/us.svg' },
    type: 'Full-time',
    salary: '$100 - $120',
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    description: 'Design intuitive experiences with user focus.',
    location: { name: 'United States', flag: 'https://alignui.com/images/blocks/flags/us.svg' },
    type: 'Full-time',
    salary: '$100 - $120',
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    description: 'Build scalable apps powering modern businesses.',
    location: { name: 'United States', flag: 'https://alignui.com/images/blocks/flags/us.svg' },
    type: 'Full-time',
    salary: '$100 - $120',
  },
];

const avatars = [
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-1.png', alt: 'Avatar 1', bg: 'bg-[#ebebeb]' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-2.png', alt: 'Avatar 2', bg: 'bg-[#ffecc0]' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-3.png', alt: 'Avatar 3', bg: 'bg-[#c0d5ff]' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-4.png', alt: 'Avatar 4', bg: 'bg-[#c0eaff]' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-5.png', alt: 'Avatar 5', bg: 'bg-[#cac0ff]' },
  { src: 'https://alignui.com/images/blocks/hero-3-avatar-6.png', alt: 'Avatar 6', bg: 'bg-[#ffc0c5]' },
];

export default function Careers05() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 md:px-7 lg:flex-row lg:justify-center lg:gap-6'>
        <div className='flex w-full flex-col gap-6 lg:w-[392px] lg:shrink-0 lg:justify-between lg:gap-10'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3 lg:gap-4'>
              <Badge.Root
                variant='lighter'
                className='bg-bg-weak-50 text-text-sub-600 text-label-sm h-7 w-fit rounded-[9px] px-2.5 normal-case'
              >
                Join our global team
              </Badge.Root>
              <h2 className='text-title-h4 lg:text-title-h3 text-text-strong-950 font-[550]'>
                Exciting roles in modern work
              </h2>
            </div>
            <p className='text-label-md text-text-soft-400'>
              Connect your favorite tools and simplify{' '}
              <br className='hidden lg:block' />
              <span className='text-text-sub-600'>workflows effortlessly.</span>
            </p>
            <LinkButton.Root
              className='text-primary-base text-label-md group h-auto w-fit cursor-pointer gap-[5px] whitespace-break-spaces'
              asChild
            >
              <a href='#'>
                Explore all positions
                <LinkButton.Icon
                  as={RiArrowRightUpLongLine}
                  className='text-primary-base size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                />
              </a>
            </LinkButton.Root>
          </div>
          <div className='flex flex-col gap-6 lg:gap-7'>
            <p className='text-label-sm text-text-sub-600'>
              Work with inspiring teams worldwide,{' '}
              <span className='text-text-soft-400'>learn fast,</span>
              <br />
              <span className='text-text-soft-400'>and grow your career.</span>
            </p>
            <div className='flex items-center gap-1'>
              <div className='flex items-center pr-1'>
                {avatars.map((avatar) => (
                  <div
                    key={avatar.src}
                    className={`${avatar.bg} ring-stroke-white-0 -mr-1 size-5 shrink-0 overflow-hidden rounded-full ring-3`}
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      width={20}
                      height={20}
                      className='size-full object-cover'
                    />
                  </div>
                ))}
              </div>
              <p className='text-label-sm text-text-soft-400'>
                <span className='text-text-disabled-300'>—</span>{' '}
                <span className='text-text-sub-600'>4.8/5</span> out of{' '}
                <span className='text-text-sub-600'>254 reviews</span>
              </p>
            </div>
          </div>
        </div>

        <div className='flex w-full flex-col gap-3 lg:w-[600px] lg:gap-4'>
          {jobsData.map((job) => (
            <Link
              key={job.id}
              href='/'
              className='bg-bg-white-0 shadow-custom-input group relative flex flex-col gap-5 overflow-clip rounded-3xl p-6 lg:px-7'
            >
              <div className='flex flex-col gap-1'>
                <h3 className='text-label-md text-text-strong-950'>
                  {job.title}
                </h3>
                <p className='text-label-sm text-text-sub-600'>
                  {job.description}
                </p>
              </div>
              <div className='flex flex-col gap-3 lg:flex-row lg:items-center'>
                <div className='flex items-center gap-2'>
                  <Image
                    src={job.location.flag}
                    alt={job.location.name}
                    width={15}
                    height={15}
                    className='size-3.75 shrink-0'
                  />
                  <span className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                    {job.location.name}
                  </span>
                </div>
                <span className='text-label-sm text-text-disabled-300 hidden lg:block'>
                  ・
                </span>
                <div className='flex items-center gap-2'>
                  <RiTimeFill className='text-text-soft-400 size-4.5' />
                  <span className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                    {job.type}
                  </span>
                </div>
                <span className='text-label-sm text-text-disabled-300 hidden lg:block'>
                  ・
                </span>
                <div className='flex items-center gap-2'>
                  <RiMoneyDollarCircleFill className='text-text-soft-400 size-4.5' />
                  <span className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                    {job.salary}
                  </span>
                </div>
              </div>
              <RiArrowRightUpLongLine className='text-text-soft-400 absolute top-5 right-5 size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
