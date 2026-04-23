'use client';

import React from 'react';
import { RiArrowRightUpLongLine } from '@remixicon/react';

import * as Accordion from '@/components/ui/accordion';
import * as Button from '@/components/ui/button';
import * as StatusBadge from '@/components/ui/status-badge';
const faqData = [
  {
    id: 'faq1',
    question: 'How does time-off tracking work?',
    answer:
      ' We use bank-level encryption, two-factor authentication, and comply with major global standards such as PSD2, GDPR, and SOC 2.\n\nYour financial data is encrypted both at rest and in transit, and our systems are monitored 24/7 for unusual activity. We also undergo regular third-party audits to ensure the highest level of security and compliance.',
    date: '24 May, 2025',
  },
  {
    id: 'faq2',
    question: 'Can I customize feedback forms?',
    answer:
      ' We use bank-level encryption, two-factor authentication, and comply with major global standards such as PSD2, GDPR, and SOC 2.\n\nYour financial data is encrypted both at rest and in transit, and our systems are monitored 24/7 for unusual activity. We also undergo regular third-party audits to ensure the highest level of security and compliance.',
    date: '24 May, 2025',
  },
  {
    id: 'faq3',
    question: 'What integrations are supported?',
    answer:
      ' We use bank-level encryption, two-factor authentication, and comply with major global standards such as PSD2, GDPR, and SOC 2.\n\nYour financial data is encrypted both at rest and in transit, and our systems are monitored 24/7 for unusual activity. We also undergo regular third-party audits to ensure the highest level of security and compliance.',
    date: '24 May, 2025',
  },
  {
    id: 'faq4',
    question: 'Is there a free trial available?',
    answer:
      ' We use bank-level encryption, two-factor authentication, and comply with major global standards such as PSD2, GDPR, and SOC 2.\n\nYour financial data is encrypted both at rest and in transit, and our systems are monitored 24/7 for unusual activity. We also undergo regular third-party audits to ensure the highest level of security and compliance.',
    date: '24 May, 2025',
  },
  {
    id: 'faq5',
    question: 'How is team sentiment measured?',
    answer:
      ' We use bank-level encryption, two-factor authentication, and comply with major global standards such as PSD2, GDPR, and SOC 2.\n\nYour financial data is encrypted both at rest and in transit, and our systems are monitored 24/7 for unusual activity. We also undergo regular third-party audits to ensure the highest level of security and compliance.',
    date: '24 May, 2025',
  },
  {
    id: 'faq6',
    question: 'Can I export performance reports?',
    answer:
      ' We use bank-level encryption, two-factor authentication, and comply with major global standards such as PSD2, GDPR, and SOC 2.\n\nYour financial data is encrypted both at rest and in transit, and our systems are monitored 24/7 for unusual activity. We also undergo regular third-party audits to ensure the highest level of security and compliance.',
    date: '24 May, 2025',
  },
  {
    id: 'faq7',
    question: 'Are employee surveys anonymous?',
    answer:
      ' We use bank-level encryption, two-factor authentication, and comply with major global standards such as PSD2, GDPR, and SOC 2.\n\nYour financial data is encrypted both at rest and in transit, and our systems are monitored 24/7 for unusual activity. We also undergo regular third-party audits to ensure the highest level of security and compliance.',
    date: '24 May, 2025',
  },
];

export default function Pricing02() {
  const ListDotIcon = () => {
    return (
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.5 15C3.35775 15 0 11.6423 0 7.5C0 3.35775 3.35775 0 7.5 0C11.6423 0 15 3.35775 15 7.5C15 11.6423 11.6423 15 7.5 15ZM6.75225 10.5L12.0548 5.19675L10.9943 4.13625L6.75225 8.379L4.6305 6.25725L3.57 7.31775L6.75225 10.5Z'
          className='fill-[#335CFF] dark:fill-[#4D82FF]'
        />
      </svg>
    );
  };
  return (
    <div className='bg-bg-white-0 w-full px-6 py-10 lg:py-20 xl:py-24'>
      <div className='mx-auto max-w-[872px]'>
        <div className='mb-6 flex flex-col gap-2 lg:mb-12 lg:items-center lg:gap-3'>
          <StatusBadge.Root
            variant='light'
            className='text-label-sm text-text-sub-600 shadow-custom-input-2 bg-bg-white-0 mb-3 h-7 w-fit rounded-[9px] pr-2.5 pl-1.75 capitalize has-[>.dot]:gap-1'
          >
            <StatusBadge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
            Pricing & FAQ
          </StatusBadge.Root>
          <h3 className='text-title-h4 xl:text-title-h3 text-text-strong-950 mb-1 !font-[550] lg:text-center'>
            Simple pricing, clear answers
          </h3>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            No hidden fees, no long-term contracts — just flexible pricing and{' '}
            <span className='text-label-md text-text-sub-600 justify-center lg:flex'>
              support that grows with your HR needs.
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-10 lg:flex-row'>
          <div className='shadow-complex flex h-fit w-full flex-col gap-6 rounded-[28px] p-6 lg:w-98 lg:rounded-4xl lg:p-8'>
            <div className='flex flex-col gap-2'>
              <h5 className='text-label-md text-text-strong-950'>Team plan</h5>
              <p className='text-label-sm text-text-sub-600'>
                For modern HR teams managing time-off, feedback, and team
                performance.
              </p>
            </div>
            <div className="text-title-h2 text-text-strong-950 before:bg-primary-base relative flex items-center gap-2 before:absolute before:top-1/2 before:-left-6 before:h-full before:w-0.5 before:-translate-y-1/2 before:content-[''] lg:before:-left-8">
              $980 <span className='text-label-md text-text-sub-600'>/mo</span>
            </div>
            <ul className='border-stroke-soft-200 flex flex-col gap-4 border-t pt-6'>
              <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                <ListDotIcon />
                Multi-user access
              </li>
              <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                <ListDotIcon />
                Time-off automation
              </li>
              <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                <ListDotIcon />
                1:1 & feedback tracking
              </li>
              <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                <ListDotIcon />
                Performance reports
              </li>
              <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                <ListDotIcon />
                Surveys & sentiment insights
              </li>
              <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                <ListDotIcon />
                Priority email & chat support
              </li>
            </ul>
            <Button.Root
              variant='primary'
              mode='filled'
              size='small'
              className='w-full cursor-pointer gap-2 rounded-xl'
            >
              Contact us
              <Button.Icon
                as={RiArrowRightUpLongLine}
                className='text-static-white group-disabled:text-text-disabled-300 size-5'
              />
            </Button.Root>
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <div className='text-label-sm text-text-soft-400'>
              Frequently asked questions
            </div>
            <Accordion.Root type='single' collapsible className='space-y-2'>
              {faqData.map((faq) => (
                <Accordion.Item
                  key={faq.id}
                  value={faq.id}
                  className={`bg-bg-weak-50 cursor-pointer !rounded-xl px-5 py-3 pr-3.5 ring-0 ring-transparent duration-300 lg:!rounded-2xl`}
                >
                  <Accordion.Trigger className='text-text-sub-600 text-label-md group-hover/accordion:text-text-strong-950 group-data-[state=open]/accordion:text-text-strong-950 cursor-pointer duration-300'>
                    {faq.question}
                    <Accordion.Arrow className='text-text-soft-400 group-[&[data-state=open]]/accordion:text-text-sub-600 group-hover/accordion:text-text-strong-950 ml-auto size-5 duration-300' />
                  </Accordion.Trigger>
                  <Accordion.Content className='flex flex-col gap-5 pt-3 lg:pt-4'>
                    <div className='text-label-sm text-text-sub-600'>
                      {faq.answer
                        .split('\n\n')
                        .map((paragraph, index, array) => (
                          <React.Fragment key={index}>
                            {paragraph}
                            {index < array.length - 1 && (
                              <>
                                <br />
                                <br />
                              </>
                            )}
                          </React.Fragment>
                        ))}
                    </div>
                    <span className='text-text-soft-400 text-label-xs flex'>
                      {faq.date}
                    </span>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
