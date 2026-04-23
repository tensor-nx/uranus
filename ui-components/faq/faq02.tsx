'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Accordion from '@/components/ui/accordion';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
const faqData = [
  {
    id: 'faq1',
    question: 'How does pricing work for high-volume campaigns?',
    answer:
      'Our pricing scales with your campaign volume. We offer tiered plans that provide better rates as your ad spend increases. Contact our sales team for custom enterprise pricing.',
    date: null,
  },
  {
    id: 'faq2',
    question: 'Can I track campaign performance in real time?',
    answer:
      "Yes. You'll get a live dashboard that shows spend, leads, conversions, and ROI — all in one place, updated by the minute.",
    date: null,
  },
  {
    id: 'faq3',
    question: 'Is onboarding included in the plan?',
    answer:
      'Absolutely! All plans include guided onboarding with a dedicated success manager to help you get started quickly and maximize your results.',
    date: null,
  },
  {
    id: 'faq4',
    question: 'What platforms are supported?',
    answer:
      'We support all major advertising platforms including Google Ads, Meta (Facebook & Instagram), LinkedIn, TikTok, and more. New integrations are added regularly.',
    date: null,
  },
  {
    id: 'faq5',
    question: 'Do you offer any results guarantees?',
    answer:
      "We stand behind our platform with performance guarantees. If you don't see measurable improvements within the first 30 days, we'll work with you to optimize or offer a refund.",
    date: null,
  },
  {
    id: 'faq6',
    question: 'How can I invite my team?',
    answer:
      "Inviting team members is easy! Simply go to your dashboard settings, click 'Team', and send email invitations. Each member gets their own login with customizable permissions.",
    date: null,
  },
  {
    id: 'faq7',
    question: 'What happens if my ad spend changes?',
    answer:
      "Your plan automatically adjusts to your spending. If you scale up, you'll unlock better rates. If you scale down, you won't be locked into a higher tier.",
    date: null,
  },
  {
    id: 'faq8',
    question: 'Can I integrate your tools with my existing CRM?',
    answer:
      'Yes! We offer native integrations with popular CRMs like Salesforce, HubSpot, and Pipedrive. We also provide a robust API for custom integrations.',
    date: null,
  },
];

export default function Faq02() {
  return (
    <div className='bg-bg-white-0 px-6 pt-10 pb-6 lg:px-0 lg:pt-24 lg:pb-24 w-full'>
      <div className='mx-auto flex max-w-[924px] flex-col'>
        <Badge.Root
          variant='filled'
          className='bg-bg-weak-50 text-text-sub-600 text-label-sm mb-3 h-7 w-fit rounded-[9px] pr-2.5 pl-1.75 normal-case has-[>.dot]:gap-1 lg:mx-auto'
        >
          <Badge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
          Need help?
        </Badge.Root>
        <div className='text-title-h4 lg:text-title-h2 text-stroke-strong-950 mb-4 !font-[550] lg:text-center'>
          Frequently asked questions
        </div>
        <div className='text-text-sub-600 text-paragraph-md mb-8 lg:mb-16 lg:text-center'>
          Find quick answers about our pricing, onboarding, and{' '}
          <br className='hidden lg:block' />{' '}
          <span className='text-label-md text-text-sub-600'>
            performance tracking tools.
          </span>
        </div>
        <div className='flex flex-col gap-8 lg:flex-row lg:gap-12'>
          <div className='flex flex-row gap-6 lg:flex-col'>
            <div className='rounded-20 shadow-complex-6 relative h-auto w-35 shrink-0 overflow-hidden md:w-50 lg:w-75 lg:rounded-[28px]'>
              <Image
                src='https://alignui.com/images/blocks/faq-img-1.jpg'
                alt='FAQ'
                width={300}
                height={300}
                className='h-full w-full object-cover'
              />
              <div className='bg-bg-white-0/[0.16] absolute top-4 left-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full lg:top-6 lg:left-6'>
                <span className='bg-[#fff] flex h-2 w-2 rounded-full'></span>
              </div>
              <div
                className='absolute bottom-0 left-0 flex h-[82%] w-full flex-col justify-end gap-0.5 p-4 lg:h-[54%] lg:p-6'
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.08) 25%, rgba(0, 0, 0, 0.19) 50%, rgba(0, 0, 0, 0.31) 75%, rgba(0, 0, 0, 0.48) 100%)',
                }}
              >
                <div className='text-label-sm lg:text-label-md text-static-white'>
                  Sophia Williams
                </div>
                <div className='text-static-white/[0.48] text-label-xs lg:text-label-sm'>
                  Campaign advisor
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5 lg:gap-5.5'>
              <div className='text-label-lg lg:text-title-h6 text-text-soft-400 !font-[550]'>
                Need guidance?{' '}
                <span className='text-text-strong-950 text-title-h6 flex !font-[550]'>
                  Sophia’s ready when you are.
                </span>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='text-label-xs lg:text-label-sm text-text-soft-400'>
                  It’s completely free, just for you.
                </div>
                <Button.Root
                  variant='neutral'
                  mode='stroke'
                  size='medium'
                  className='h-9 w-fit cursor-pointer gap-2 rounded-xl lg:h-10'
                >
                  Book a meeting
                  <Button.Icon
                    as={RiArrowRightUpLongLine}
                    className='text-text-sub-600/[0.64] group-hover:text-text-strong-950/[0.64] size-5 transition-all duration-300'
                  />
                </Button.Root>
              </div>
            </div>
          </div>
          <Accordion.Root
            type='single'
            collapsible
            className='mx-auto w-full space-y-2.5'
          >
            {faqData.map((faq) => (
              <Accordion.Item
                key={faq.id}
                value={faq.id}
                className='!rounded-20 ring-stroke-soft-200 cursor-pointer px-4 py-3 duration-300 lg:px-5 lg:py-4 lg:pr-4'
              >
                <Accordion.Trigger className='text-text-sub-600 text-label-sm lg:text-label-md group-hover/accordion:text-text-strong-950 group-data-[state=open]/accordion:text-text-strong-950 flex cursor-pointer items-start gap-0 duration-300 lg:items-center'>
                  {faq.question}
                  <Accordion.Arrow className='text-text-soft-400 group-[&[data-state=open]]/accordion:text-text-sub-600 group-hover/accordion:text-text-strong-950 ml-auto size-6 duration-300' />
                </Accordion.Trigger>
                <Accordion.Content className='flex flex-col gap-4 pt-3.5 pb-1.5 lg:gap-5'>
                  <div className='text-label-sm text-text-sub-600'>
                    {faq.answer}
                  </div>
                  {faq.date && (
                    <span className='text-text-soft-400 text-label-sm flex'>
                      {faq.date}
                    </span>
                  )}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
}
