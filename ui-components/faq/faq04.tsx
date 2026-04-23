'use client';

import { RiQuestionFill } from '@remixicon/react';
import Link from '@repo/registry/next-link-mock';

import * as Accordion from '@/components/ui/accordion';
import * as Badge from '@/components/ui/badge';
const faqData = [
  {
    id: 'faq1',
    question: 'Can I invite my entire team with one plan?',
    answer:
      'Yes! All our team plans include unlimited team member invitations. You can add your entire organization under a single subscription with centralized billing, admin controls, and role-based permissions.',
    date: '24 May, 2025',
  },
  {
    id: 'faq2',
    question: 'Do you support role-based permissions?',
    answer:
      'Absolutely. We offer granular role-based access control (RBAC) that lets you define exactly what each team member can view, edit, or manage. You can create custom roles or use our predefined templates like Admin, Editor, and Viewer.',
    date: '24 May, 2025',
  },
  {
    id: 'faq3',
    question: 'Is there a free trial before payment?',
    answer:
      'Yes, we offer a full-featured 14-day free trial with no credit card required. You will have access to all premium features during the trial period to fully evaluate whether our platform meets your needs.',
    date: '24 May, 2025',
  },
  {
    id: 'faq4',
    question: 'How fast can we onboard new members?',
    answer:
      'Onboarding is instant! New team members can be added with just an email invite. They will receive a welcome email with setup instructions and can be productive within minutes. We also provide onboarding guides and video tutorials.',
    date: '24 May, 2025',
  },
  {
    id: 'faq5',
    question: 'What happens if we grow beyond the plan?',
    answer:
      'No worries! You can upgrade your plan anytime directly from your dashboard. The transition is seamless with no data loss or downtime. We will prorate your billing so you only pay the difference for the remainder of your billing cycle.',
    date: '24 May, 2025',
  },
  {
    id: 'faq6',
    question: 'Does it work on mobile too?',
    answer:
      'Yes, our platform is fully responsive and works seamlessly on all devices including smartphones and tablets. We also offer native iOS and Android apps with offline support, push notifications, and all features available on desktop.',
    date: '24 May, 2025',
  },
  {
    id: 'faq7',
    question: 'Can I manage multiple teams or workspaces?',
    answer:
      'Definitely! Our Business and Enterprise plans support multiple workspaces with separate settings, members, and billing. You can easily switch between workspaces and manage them all from a single unified admin dashboard.',
    date: '24 May, 2025',
  },
];

export default function Faq04() {
  return (
    <div className='bg-bg-white-0 px-6 py-10 lg:px-0 lg:py-20 w-full'>
      <div className='mx-auto flex max-w-[808px] flex-col items-center'>
        <Badge.Root
          variant='filled'
          className='text-label-sm bg-bg-weak-50 text-text-sub-600 mb-3 h-7 w-fit gap-1.5 rounded-[9px] pr-2.5 pl-2 normal-case lg:mx-auto'
        >
          <Badge.Icon
            as={RiQuestionFill}
            className='text-primary-base mx-0 size-4 before:size-4'
          />
          Frequently asked questions
        </Badge.Root>
        <div className='text-title-h4 xl:text-title-h3 text-stroke-strong-950 mb-4 !font-[550] lg:text-center'>
          Everything you need to know
        </div>
        <p className='text-text-sub-600 text-paragraph-md mb-8 lg:text-center xl:mb-12'>
          Find answers about plans, onboarding, roles, and how teams{' '}
          <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
            use our tool every day.
          </span>
        </p>
        <Accordion.Root
          type='single'
          collapsible
          className='mb-8 w-full space-y-1.5'
        >
          {faqData.map((faq, index) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className='bg-bg-weak-50 cursor-pointer !rounded-xl p-4 ring-0 ring-transparent duration-300 lg:!rounded-2xl lg:p-6'
            >
              <Accordion.Trigger className='text-text-sub-600 text-label-sm lg:text-label-lg group-hover/accordion:text-text-strong-950 group-data-[state=open]/accordion:text-text-strong-950 flex cursor-pointer items-start gap-0 duration-300 lg:items-center'>
                <span className='text-text-soft-400 text-label-sm lg:text-label-lg group-hover/accordion:text-text-sub-600 group-data-[state=open]/accordion:text-text-sub-600 mb-[-3px] w-9 shrink-0 transition-all duration-300 lg:mb-0 lg:w-16'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                {faq.question}
                <Accordion.Arrow className='text-text-soft-400 group-[&[data-state=open]]/accordion:text-text-sub-600 group-hover/accordion:text-text-strong-950 mb-[-3px] ml-auto size-6 duration-300 lg:mb-0' />
              </Accordion.Trigger>
              <Accordion.Content className='flex flex-col gap-4 pt-4 pl-9 lg:gap-5 lg:pl-16'>
                <div className='text-label-sm lg:text-label-md text-text-sub-600'>
                  {faq.answer}
                </div>
                <span className='text-text-soft-400 text-label-sm flex'>
                  {faq.date}
                </span>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <div className='text-text-soft-400 text-label-sm lg:text-label-md text-center'>
          Looking for something else? <br className='block lg:hidden' />{' '}
          <Link
            href='mailto: hello@alignui.com'
            className='text-label-sm lg:text-label-md text-text-sub-600 hover:text-text-strong-950 transition-all duration-300'
          >
            {' '}
            hello@alignui.com
          </Link>
        </div>
      </div>
    </div>
  );
}
