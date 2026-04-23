'use client';

import Image from '@repo/registry/next-image-mock';

import * as StatusBadge from '@/components/ui/status-badge';
const stepsData = [
  {
    id: 'step1',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-1.svg',
    alt: 'how it works 2 image 1',
    title: 'Start with your team',
    description: 'Add people, set roles and launch your HR setup fast.',
  },
  {
    id: 'step2',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-2.svg',
    alt: 'how it works 2 image 2',
    title: 'Streamline daily work',
    description: 'Automate time-off and feedback to simplify daily tasks.',
  },
  {
    id: 'step3',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-3.svg',
    alt: 'how it works 2 image 3',
    title: 'Lead with confidence',
    description: 'Track key team insights to guide better decisions.',
  },
];

export default function HowItWorks02() {
  return (
    <div className='py-10 lg:py-16 bg-bg-white-0 w-full'>
      <div className='flex flex-col gap-6 lg:gap-12 max-w-7xl mx-auto px-6 lg:px-7'>
        <div className='flex flex-col gap-8 lg:gap-12'>
          <div className='flex flex-col'>
            <StatusBadge.Root
              variant='light'
              className='w-fit pl-1.75 pr-2.5 h-7 has-[>.dot]:gap-1 text-label-sm normal-case text-text-sub-600 rounded-[9px] mb-3 shadow-custom-input-2 bg-bg-white-0 lg:mx-auto'
            >
              <StatusBadge.Dot className='size-4 text-primary-base mx-0 before:size-1.5' />
              How it works?
            </StatusBadge.Root>
            <h2 className='text-title-h4 lg:text-title-h3 xl:text-title-h2 !font-[550] text-text-strong-950 lg:text-center mb-4'>
              Simplify time, feedback scheduling
            </h2>
            <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
              Build efficient workflows, reduce manual work, and give your team{' '}
              <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
                more time to focus on culture and growth.
              </span>
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row bg-bg-white-0 border border-stroke-soft-200 shadow-regular-xs rounded-[40px]'>
          {stepsData.map((step, index) => {
            const isLast = index === stepsData.length - 1;
            return (
              <div
                key={step.id}
                className={`flex flex-col items-center p-8 lg:p-8 xl:p-10 ${!isLast ? 'border-b lg:border-b-0 lg:border-r' : ''} border-stroke-soft-200 h-auto`}
              >
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={48}
                  height={48}
                  className='size-12 lg:size-14 xl:size-16 mb-5 lg:mb-6'
                />
                <h6 className='text-title-h6 lg:text-label-lg 2xl:text-title-h6 !font-[550] text-text-strong-950 mb-1 text-center'>
                  {step.title}
                </h6>
                <p className='text-label-md lg:text-paragraph-sm xl:text-label-md text-text-soft-400 text-center'>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
