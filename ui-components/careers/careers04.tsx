'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  RiArrowRightUpLongLine,
  RiMoneyDollarCircleFill,
  RiTimeFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';
type TabKey = 'product' | 'engineering' | 'design';

const tabsData: { id: TabKey; label: string }[] = [
  { id: 'product', label: 'Product' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'design', label: 'Design' },
];

const jobsData: Record<
  TabKey,
  {
    id: string;
    title: string;
    description: string;
    location: { name: string; flag: string };
    type: string;
    salary: string;
  }[]
> = {
  product: [
    {
      id: 'prod1',
      title: 'Product Manager',
      description: 'Build innovative products that solve customer challenges.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'prod2',
      title: 'Marketing Specialist',
      description: 'Drive growth campaigns and strengthen brand presence.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'prod3',
      title: 'UI/UX Designer',
      description: 'Design user-friendly experiences for digital platforms.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'prod4',
      title: 'Data Analyst',
      description: 'Deliver insights from data to guide business strategy.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'prod5',
      title: 'Software Engineer',
      description: 'Develop scalable software systems for global teams.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'prod6',
      title: 'Customer Success Manager',
      description: 'Build long-term relationships and improve client outcomes.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
  ],
  engineering: [
    {
      id: 'eng1',
      title: 'Product Manager 2',
      description: 'Build innovative products that solve customer challenges.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'eng2',
      title: 'Marketing Specialist',
      description: 'Drive growth campaigns and strengthen brand presence.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'eng3',
      title: 'UI/UX Designer',
      description: 'Design user-friendly experiences for digital platforms.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'eng4',
      title: 'Data Analyst',
      description: 'Deliver insights from data to guide business strategy.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'eng5',
      title: 'Software Engineer',
      description: 'Develop scalable software systems for global teams.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'eng6',
      title: 'Customer Success Manager',
      description: 'Build long-term relationships and improve client outcomes.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
  ],
  design: [
    {
      id: 'des1',
      title: 'Product Manager 3',
      description: 'Build innovative products that solve customer challenges.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'des2',
      title: 'Marketing Specialist',
      description: 'Drive growth campaigns and strengthen brand presence.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'des3',
      title: 'UI/UX Designer',
      description: 'Design user-friendly experiences for digital platforms.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'des4',
      title: 'Data Analyst',
      description: 'Deliver insights from data to guide business strategy.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'des5',
      title: 'Software Engineer',
      description: 'Develop scalable software systems for global teams.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
    {
      id: 'des6',
      title: 'Customer Success Manager',
      description: 'Build long-term relationships and improve client outcomes.',
      location: {
        name: 'United States',
        flag: 'https://alignui.com/images/blocks/flags/us.svg',
      },
      type: 'Full-time',
      salary: '$100 - $120',
    },
  ],
};

export default function Careers04() {
  const [activeTab, setActiveTab] = useState<TabKey>('product');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<TabKey, HTMLButtonElement | null>>({
    product: null,
    engineering: null,
    design: null,
  });
  const [thumbLeft, setThumbLeft] = useState<number>(4);
  const [thumbWidth, setThumbWidth] = useState<number>(0);

  const repositionThumb = useCallback(() => {
    const container = containerRef.current;
    const activeEl = buttonRefs.current[activeTab];
    if (!container || !activeEl) return;
    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const left = activeRect.left - containerRect.left + 0;
    setThumbLeft(left);
    setThumbWidth(activeRect.width);
  }, [activeTab]);

  useEffect(() => {
    repositionThumb();
    const handle = () => repositionThumb();
    window.addEventListener('resize', handle);
    const id = window.setInterval(repositionThumb, 250);
    return () => {
      window.removeEventListener('resize', handle);
      window.clearInterval(id);
    };
  }, [repositionThumb]);

  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='max-w-5xl mx-auto px-6 lg:px-4 xl:px-1'>
        <div className='flex flex-col mb-8'>
          <Badge.Root
            variant='lighter'
            className='w-fit px-2.5 h-7 text-label-sm text-text-sub-600 normal-case rounded-[9px] bg-bg-weak-50 mb-3 lg:mx-auto'
          >
            Join our global team
          </Badge.Root>
          <h3 className='text-title-h4 xl:text-title-h3 !font-[550] text-text-strong-950 mb-4 lg:text-center'>
            Exciting roles in modern work
          </h3>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            Shape the future of digital tools and collaboration.
          </p>
        </div>
        <div
          ref={containerRef}
          className='relative flex p-1 bg-bg-weak-50 rounded-xl w-full lg:w-fit mb-6 lg:mb-8 overflow-hidden lg:mx-auto'
        >
          <div
            className='absolute z-0 top-1 bottom-1 rounded-10 bg-bg-white-0 shadow-custom-input-4 transition-all duration-300 ease-out'
            style={{ left: thumbLeft, width: thumbWidth }}
          />
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => {
                buttonRefs.current[tab.id] = el;
              }}
              className='relative z-10 flex items-center py-1.5 px-4 rounded-10 duration-300 transition-all shadow-none cursor-pointer hover:text-text-strong-950 data-[active=true]:text-stroke-strong-950 text-label-sm text-text-sub-600 w-full lg:w-fit text-center justify-center lg:min-w-30'
              data-active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className='flex flex-col mb-8'>
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              className={`grid-cols-1 lg:grid-cols-2 gap-2.5 lg:gap-4 w-full ${activeTab === tab.id ? 'grid' : 'hidden'}`}
            >
              {jobsData[tab.id]?.map((job) => (
                <Link
                  key={job.id}
                  href='/'
                  className='flex flex-row justify-between gap-1 lg:gap-5 py-6 px-7 lg:p-6 w-full bg-bg-weak-50 rounded-3xl group hover:ring-1 hover:ring-stroke-soft-200 transition-all duration-300'
                >
                  <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                      <div className='text-label-md text-text-strong-950'>
                        {job.title}
                      </div>
                      <div className='text-label-sm text-text-sub-600'>
                        {job.description}
                      </div>
                    </div>
                    <div className='flex flex-wrap items-center gap-3'>
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
                      <span className='hidden lg:block text-label-sm text-text-disabled-300'>
                        ・
                      </span>
                      <div className='flex items-center gap-2'>
                        <RiTimeFill className='size-4.5 text-text-soft-400' />
                        <span className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                          {job.type}
                        </span>
                      </div>
                      <span className='hidden lg:block text-label-sm text-text-disabled-300'>
                        ・
                      </span>
                      <div className='flex items-center gap-2'>
                        <RiMoneyDollarCircleFill className='size-4.5 text-text-soft-400' />
                        <span className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='cursor-pointer size-6'>
                    <RiArrowRightUpLongLine className='size-6 text-text-soft-400' />
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className='flex flex-col lg:items-center gap-2'>
          <p className='text-paragraph-md text-text-sub-600'>
            Looking for more opportunities to grow?
          </p>
          <LinkButton.Root
            className='text-primary-base text-label-md cursor-pointer h-auto gap-1 whitespace-break-spaces group w-fit'
            asChild
          >
            <a href='#'>
              Explore all positions
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className='size-5 text-primary-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300'
              />
            </a>
          </LinkButton.Root>
        </div>
      </div>
    </div>
  );
}
