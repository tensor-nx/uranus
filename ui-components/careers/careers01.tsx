'use client';

import { useEffect, useRef, useState } from 'react';
import {
  RiAddCircleFill,
  RiArrowRightUpLongLine,
  RiCustomerService2Line,
} from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';
type TabKey = 'engineering' | 'development';

const tabsData: { id: TabKey; label: string }[] = [
  { id: 'engineering', label: 'Engineering' },
  { id: 'development', label: 'Development' },
];

const jobsData: Record<
  TabKey,
  { id: string; title: string; description: string; location: string }[]
> = {
  engineering: [
    {
      id: 'eng1',
      title: 'Engineering Manager',
      description: 'Lead a team of engineers and deliver great experiences.',
      location: 'Remote',
    },
    {
      id: 'eng2',
      title: 'Software Engineer',
      description: 'Build scalable software and deliver great experiences.',
      location: 'Remote',
    },
    {
      id: 'eng3',
      title: 'Data Scientist',
      description:
        'Build scalable data pipelines and deliver great experiences.',
      location: 'Remote',
    },
  ],
  development: [
    {
      id: 'dev1',
      title: 'Frontend Developer',
      description:
        'Build amazing user interfaces and deliver great experiences.',
      location: 'Remote',
    },
    {
      id: 'dev2',
      title: 'UI/UX Designer',
      description: 'Design intuitive products and improve user experiences.',
      location: 'Remote',
    },
    {
      id: 'dev3',
      title: 'React Developer',
      description: 'Develop scalable web apps and maintain clean codebases.',
      location: 'Remote',
    },
  ],
};

export default function Careers01() {
  const [activeTab, setActiveTab] = useState<TabKey>('development');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<TabKey, HTMLButtonElement | null>>({
    engineering: null,
    development: null,
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
    // Reposition on resize
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
      <div className='max-w-[620px] mx-auto px-6 lg:px-0'>
        <div className='flex flex-col mb-8'>
          <Badge.Root
            variant='lighter'
            className='w-fit gap-1.5 pl-2 pr-2.5 h-7 text-label-sm text-text-sub-600 normal-case rounded-[9px] mb-3 shadow-custom-input-2 bg-bg-white-0'
          >
            <Badge.Icon
              as={RiAddCircleFill}
              className='size-4 text-primary-base before:size-4 mx-0'
            />
            Join our team
          </Badge.Root>
          <h3 className='text-title-h4 lg:text-title-h3 !font-[550] text-text-strong-950 mb-4'>
            Exciting careers for bright minds
          </h3>
          <p className='text-paragraph-md text-text-sub-600'>
            Connect your favorite apps to boost productivity and keep every.
          </p>
        </div>
        <div
          ref={containerRef}
          className='relative flex p-1 bg-bg-weak-50 rounded-xl w-full lg:w-fit mb-6 lg:mb-8 overflow-hidden'
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

        <div className='flex flex-col mb-6'>
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              className={`flex-col gap-5 lg:gap-6 w-full ${activeTab === tab.id ? 'flex' : 'hidden'}`}
            >
              {jobsData[tab.id]?.map((job, index) => {
                const isLast = index === jobsData[tab.id].length - 1;
                return (
                  <div
                    key={job.id}
                    className={`flex items-center justify-between gap-5 pb-5 lg:pb-6 w-full ${!isLast ? 'border-b border-stroke-soft-200' : ''}`}
                  >
                    <div className='flex flex-col gap-1'>
                      <div className='text-label-md text-text-strong-950'>
                        {job.title}
                      </div>
                      <div className='text-label-sm text-text-soft-400'>
                        {job.description}
                      </div>
                    </div>
                    <Badge.Root
                      variant='lighter'
                      className='w-fit px-2 h-6 text-label-xs text-text-sub-600 capitalize rounded-[7px] bg-bg-weak-25'
                    >
                      {job.location}
                    </Badge.Root>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className='bg-success-lighter rounded-xl px-2.5 lg:px-3.5 py-3.5 gap-3 flex lg:items-center justify-between w-full'>
          <RiCustomerService2Line className='size-5 text-success-dark' />
          <div className='flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3 flex-1 lg:justify-between'>
            <span className='text-label-sm text-success-dark'>
              Streamline hiring and onboarding today
            </span>
            <LinkButton.Root
              className='text-label-sm text-success-dark h-auto gap-1 whitespace-break-spaces hover:text-success-dark transition-all duration-300 group cursor-pointer justify-start'
              asChild
            >
              <a href='#'>
                Learn more
                <LinkButton.Icon
                  as={RiArrowRightUpLongLine}
                  className='size-4 text-success-dark transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                />
              </a>
            </LinkButton.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
