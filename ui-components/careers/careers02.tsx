'use client';

import { useEffect, useRef, useState } from 'react';
import {
  RiArrowRightUpLongLine,
  RiCustomerServiceFill,
  RiMoneyDollarCircleFill,
  RiTimeFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
type TabKey = 'banking' | 'investments' | 'fintech';

const tabsData: { id: TabKey; label: string }[] = [
  { id: 'banking', label: 'Banking' },
  { id: 'investments', label: 'Investments' },
  { id: 'fintech', label: 'Fintech' },
];

const jobsData: Record<
  TabKey,
  {
    id: string;
    title: string;
    description: string;
    country: string;
    countryFlag: string;
    employmentType: string;
    salary: string;
    applyUrl: string;
  }[]
> = {
  banking: [
    {
      id: 'bank1',
      title: 'Engineering Manager',
      description: 'Lead a team of engineers and deliver great experiences.',
      country: 'Germany',
      countryFlag: 'https://alignui.com/images/blocks/flags/de.svg',
      employmentType: 'Full-time',
      salary: '$100 - $120',
      applyUrl: '/',
    },
    {
      id: 'bank2',
      title: 'Fintech UI/UX Designer',
      description: 'Design intuitive banking apps for better user trust.',
      country: 'United States',
      countryFlag: 'https://alignui.com/images/blocks/flags/us.svg',
      employmentType: 'Full-time',
      salary: '$100 - $120',
      applyUrl: '/',
    },
    {
      id: 'bank3',
      title: 'Blockchain Solutions Engineer',
      description: 'Develop scalable blockchain solutions for finance.',
      country: 'Brazil',
      countryFlag: 'https://alignui.com/images/blocks/flags/br.svg',
      employmentType: 'Full-time',
      salary: '$100 - $120',
      applyUrl: '/',
    },
  ],
  investments: [
    {
      id: 'inv1',
      title: 'Investments Analyst',
      description: 'Analyze financial data and make investment decisions.',
      country: 'Germany',
      countryFlag: 'https://alignui.com/images/blocks/flags/de.svg',
      employmentType: 'Full-time',
      salary: '$100 - $120',
      applyUrl: '/',
    },
    {
      id: 'inv2',
      title: 'Financial Risk Manager',
      description: 'Manage financial risks and ensure compliance.',
      country: 'United States',
      countryFlag: 'https://alignui.com/images/blocks/flags/us.svg',
      employmentType: 'Full-time',
      salary: '$100 - $120',
      applyUrl: '/',
    },
    {
      id: 'inv3',
      title: 'Digital Asset Manager',
      description: 'Manage digital assets and ensure security.',
      country: 'Brazil',
      countryFlag: 'https://alignui.com/images/blocks/flags/br.svg',
      employmentType: 'Full-time',
      salary: '$100 - $120',
      applyUrl: '/',
    },
  ],
  fintech: [
    {
      id: 'fin1',
      title: 'Fintech Product Manager',
      description: 'Manage fintech products and ensure user satisfaction.',
      country: 'Germany',
      countryFlag: 'https://alignui.com/images/blocks/flags/de.svg',
      employmentType: 'Full-time',
      salary: '$100 - $120',
      applyUrl: '/',
    },
    {
      id: 'fin2',
      title: 'Fintech UI/UX Designer',
      description: 'Design intuitive banking apps for better user trust.',
      country: 'United States',
      countryFlag: 'https://alignui.com/images/blocks/flags/us.svg',
      employmentType: 'Full-time',
      salary: '$100 - $120',
      applyUrl: '/',
    },
    {
      id: 'fin3',
      title: 'Blockchain Solutions Engineer',
      description: 'Develop scalable blockchain solutions for finance.',
      country: 'Brazil',
      countryFlag: 'https://alignui.com/images/blocks/flags/br.svg',
      employmentType: 'Full-time',
      salary: '$100 - $120',
      applyUrl: '/',
    },
  ],
};

export default function Careers02() {
  const [activeTab, setActiveTab] = useState<TabKey>('banking');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<TabKey, HTMLButtonElement | null>>({
    banking: null,
    investments: null,
    fintech: null,
  });
  const [thumbLeft, setThumbLeft] = useState<number>(4);
  const [thumbWidth, setThumbWidth] = useState<number>(0);

  const repositionThumb = () => {
    const container = containerRef.current;
    const activeEl = buttonRefs.current[activeTab];
    if (!container || !activeEl) return;
    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const left = activeRect.left - containerRect.left + 0;
    setThumbLeft(left);
    setThumbWidth(activeRect.width);
  };

  useEffect(() => {
    repositionThumb();
    const handle = () => repositionThumb();
    window.addEventListener('resize', handle);
    const id = window.setInterval(repositionThumb, 250);
    return () => {
      window.removeEventListener('resize', handle);
      window.clearInterval(id);
    };
  }, [activeTab]);

  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='mx-auto max-w-[620px] px-6 lg:px-0'>
        <div className='mb-8 flex flex-col'>
          <Badge.Root
            variant='lighter'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 normal-case lg:mx-auto'
          >
            Join our finance team
          </Badge.Root>
          <h3 className='text-title-h4 xl:text-title-h3 text-text-strong-950 mb-4 !font-[550] lg:text-center'>
            Exciting roles in modern finance
          </h3>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            Drive innovation in secure banking and digital payments.
          </p>
        </div>
        <div
          ref={containerRef}
          className='bg-bg-weak-50 relative mb-6 flex w-full overflow-hidden rounded-xl p-1 lg:mx-auto lg:mb-8 lg:w-fit'
        >
          <div
            className='rounded-10 bg-bg-white-0 shadow-custom-input-4 absolute top-1 bottom-1 z-0 transition-all duration-300 ease-out'
            style={{ left: thumbLeft, width: thumbWidth }}
          />
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => {
                buttonRefs.current[tab.id] = el;
              }}
              className='rounded-10 hover:text-text-strong-950 data-[active=true]:text-stroke-strong-950 text-label-sm text-text-sub-600 relative z-10 flex w-full cursor-pointer items-center justify-center px-4 py-1.5 text-center shadow-none transition-all duration-300 lg:w-fit lg:min-w-30'
              data-active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className='mb-6 flex flex-col'>
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              className={`w-full flex-col gap-4 ${activeTab === tab.id ? 'flex' : 'hidden'}`}
            >
              {jobsData[tab.id]?.map((job) => (
                <div
                  key={job.id}
                  className='shadow-custom-input flex w-full flex-col justify-between gap-5 rounded-3xl px-7 py-6 lg:flex-row lg:px-6'
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
                      <div className='flex min-h-5 items-center gap-2'>
                        <Image
                          src={job.countryFlag}
                          alt={job.country}
                          width={15}
                          height={15}
                          className='size-3.75 shrink-0'
                        />
                        <span className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                          {job.country}
                        </span>
                      </div>
                      <span className='text-label-sm text-text-disabled-300 hidden lg:block'>
                        ・
                      </span>
                      <div className='flex min-h-5 items-center gap-2'>
                        <RiTimeFill className='text-text-soft-400 size-4.5' />
                        <span className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                          {job.employmentType}
                        </span>
                      </div>
                      <span className='text-label-sm text-text-disabled-300 hidden lg:block'>
                        ・
                      </span>
                      <div className='flex min-h-5 items-center gap-2'>
                        <RiMoneyDollarCircleFill className='text-text-soft-400 size-4.5' />
                        <span className='text-label-sm text-text-sub-600 whitespace-nowrap'>
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button.Root
                    variant='neutral'
                    mode='stroke'
                    size='xxsmall'
                    className='!rounded-10 h-9 cursor-pointer px-3.5 lg:h-7'
                    asChild
                  >
                    <Link href={job.applyUrl}>Apply</Link>
                  </Button.Root>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className='bg-faded-lighter flex w-full justify-between gap-3 rounded-xl px-2.5 py-2.5 lg:items-center lg:px-3.5'>
          <RiCustomerServiceFill className='text-faded-base size-5' />
          <div className='flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between lg:gap-3'>
            <span className='text-label-sm text-faded-dark'>
              Streamline hiring and onboarding today
            </span>
            <LinkButton.Root
              className='text-label-sm text-faded-dark hover:text-faded-dark group h-auto cursor-pointer justify-start gap-1 whitespace-break-spaces transition-all duration-300'
              asChild
            >
              <a href='#'>
                Learn more
                <LinkButton.Icon
                  as={RiArrowRightUpLongLine}
                  className='text-faded-base size-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                />
              </a>
            </LinkButton.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
