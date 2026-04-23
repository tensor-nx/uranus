'use client';

import {
  RiArrowRightUpLongLine,
  RiGlobalLine,
  RiMoneyDollarCircleLine,
  RiTimeLine,
} from '@remixicon/react';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
const jobsData = [
  {
    id: 'job1',
    title: 'Talent Acquisition Specialist',
    location: 'United States',
    type: 'Full-time',
    salary: '$100 - $120',
  },
  {
    id: 'job2',
    title: 'Employer Branding Manager',
    location: 'United States',
    type: 'Full-time',
    salary: '$100 - $120',
  },
  {
    id: 'job3',
    title: 'HR Marketing Strategist',
    location: 'United States',
    type: 'Full-time',
    salary: '$100 - $120',
  },
  {
    id: 'job4',
    title: 'People & Culture Coordinator',
    location: 'United States',
    type: 'Full-time',
    salary: '$100 - $120',
  },
  {
    id: 'job5',
    title: 'Recruitment Marketing Lead',
    location: 'United States',
    type: 'Full-time',
    salary: '$100 - $120',
  },
];

export default function Careers03() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='mx-auto max-w-5xl px-6 lg:px-4 xl:px-1'>
        <div className='mb-8 flex flex-col lg:mb-12'>
          <Badge.Root
            variant='lighter'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 normal-case lg:mx-auto'
          >
            Join our HR team
          </Badge.Root>
          <h3 className='text-title-h4 xl:text-title-h3 text-text-strong-950 mb-4 !font-[550] lg:text-center'>
            Exciting roles in HR marketing
          </h3>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            Shape employer branding and drive talent engagement..
          </p>
        </div>
        <div className='mb-8 flex w-full flex-col lg:mb-8'>
          {jobsData.map((job, index) => {
            const isLast = index === jobsData.length - 1;
            return (
              <div
                key={job.id}
                className={`flex flex-col gap-4 border-t py-5 lg:flex-row lg:items-center lg:gap-5 lg:py-6 ${isLast ? 'border-b' : ''} border-stroke-soft-200`}
              >
                <div className='text-label-md text-text-strong-950 lg:w-[30%]'>
                  {job.title}
                </div>
                <div className='flex flex-wrap items-center gap-3 lg:flex-1'>
                  <div className='flex items-center gap-2'>
                    <RiGlobalLine className='text-text-soft-400 size-4.5' />
                    <span className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                      {job.location}
                    </span>
                  </div>
                  <span className='text-label-sm text-text-disabled-300 hidden lg:block'>
                    ・
                  </span>
                  <div className='flex items-center gap-2'>
                    <RiTimeLine className='text-text-soft-400 size-4.5' />
                    <span className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                      {job.type}
                    </span>
                  </div>
                  <span className='text-label-sm text-text-disabled-300 hidden lg:block'>
                    ・
                  </span>
                  <div className='flex items-center gap-2'>
                    <RiMoneyDollarCircleLine className='text-text-soft-400 size-4.5' />
                    <span className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                      {job.salary}
                    </span>
                  </div>
                </div>
                <Button.Root
                  variant='neutral'
                  mode='stroke'
                  size='xsmall'
                  className='!rounded-10 w-fit cursor-pointer px-4'
                  asChild
                >
                  <Link href='/'>Apply</Link>
                </Button.Root>
              </div>
            );
          })}
        </div>
        <div className='flex flex-col gap-2 lg:items-center'>
          <p className='text-paragraph-md text-text-sub-600'>
            Looking for a role in HR marketing?
          </p>
          <LinkButton.Root
            className='text-primary-base text-label-md group h-auto w-fit cursor-pointer gap-1 whitespace-break-spaces'
            asChild
          >
            <a href='#'>
              See all opportunities
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
