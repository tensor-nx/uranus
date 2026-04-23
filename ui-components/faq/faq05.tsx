'use client';

import React from 'react';
import { RiCloseLine, RiCustomerServiceFill } from '@remixicon/react';
import Link from '@repo/registry/next-link-mock';

import * as Accordion from '@/components/ui/accordion';
import * as Badge from '@/components/ui/badge';
import * as Divider from '@/components/ui/divider';
const faqSections = [
  {
    title: 'Account',
    description: 'Manage your account with ease.',
    items: [
      {
        id: 'account-1',
        question: 'How do I change my email address?',
        answer:
          "Go to your account settings, click on 'Personal Info,' and update your email address. A verification link will be sent to your new email to confirm the change.",
      },
      {
        id: 'account-2',
        question: 'Can I update my payment details online?',
        answer:
          'Yes, you can update your payment method anytime from the Billing section in your account settings. We support all major credit cards and bank transfers.',
      },
      {
        id: 'account-3',
        question: 'What should I do if I forget my password?',
        answer:
          "Click the 'Forgot Password' link on the login page and enter your registered email. You'll receive a reset link within minutes to create a new password.",
      },
    ],
  },
  {
    title: 'Payments',
    description: 'Get answers to payment questions.',
    items: [
      {
        id: 'payment-1',
        question: 'How long does it take to process a payment?',
        answer:
          'Most payments are processed instantly. Bank transfers may take 1–3 business days depending on your financial institution and region.',
      },
      {
        id: 'payment-2',
        question: 'Are refunds handled automatically?',
        answer:
          'Refunds are reviewed and processed within 5–7 business days. Once approved, the amount will be credited back to your original payment method.',
      },
    ],
  },
  {
    title: 'Support',
    description: "We're here to help anytime.",
    items: [
      {
        id: 'support-1',
        question: 'How can I contact customer support?',
        answer:
          'You can reach our support team via live chat, email at hello@alignui.com, or by submitting a request through the Help Center.',
      },
      {
        id: 'support-2',
        question: 'Do you provide weekend assistance?',
        answer:
          'We use bank-level encryption, two-factor authentication, and comply with major global standards such as PSD2, GDPR, and SOC 2.\n\nYour financial data is encrypted both at rest and in transit, and our systems are monitored 24/7 for unusual activity. We also undergo regular third-party audits to ensure the highest level of security and compliance.',
      },
      {
        id: 'support-3',
        question: 'Is live chat support available?',
        answer:
          'Yes, live chat is available 24/7 for all users. Premium plan members also get priority routing to senior support agents.',
      },
      {
        id: 'support-4',
        question: 'Where can I find detailed guides?',
        answer:
          'Visit our Knowledge Base for step-by-step guides, video tutorials, and best practices covering every feature of the platform.',
      },
    ],
    action: {
      text: 'Looking for something else?',
      email: 'hello@alignui.com',
    },
  },
] as const;

export default function Faq05() {
  return (
    <div className='bg-bg-white-0 w-full'>
      <div className='border-stroke-soft-200 border-b px-6 pt-10 pb-6 lg:border-0 lg:pt-0 lg:pb-0'>
        <div className='mx-auto lg:max-w-7xl lg:px-7'>
          <div className='mx-auto flex flex-col gap-4 lg:max-w-[1016px] lg:pt-24'>
            <div className='flex flex-col gap-3'>
              <Badge.Root
                variant='lighter'
                className='bg-bg-weak-50 text-label-sm text-text-sub-600 h-7 w-fit rounded-[9px] px-2.5 normal-case'
              >
                FAQ guide
              </Badge.Root>
              <h2 className='text-title-h4 text-text-strong-950 lg:text-title-h3 font-[550]'>
                Get quick answers to common questions
              </h2>
            </div>
            <p className='text-paragraph-md text-text-sub-600'>
              Find solutions, explore resources, and resolve issues faster.
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto lg:max-w-7xl lg:px-7'>
        <div className='mx-auto flex flex-col lg:max-w-[1016px] lg:gap-8 lg:py-12'>
          {faqSections.map((section, sectionIndex) => {
            const isLast = sectionIndex === faqSections.length - 1;
            return (
              <React.Fragment key={section.title}>
                <Divider.Root className='hidden lg:flex' />

                <div
                  className={`flex flex-col gap-6 px-6 pt-6 lg:flex-row lg:gap-16 lg:border-0 lg:px-0 lg:pt-0 lg:pb-0 ${
                    isLast ? 'pb-10' : 'border-stroke-soft-200 border-b pb-8'
                  }`}
                >
                  <div className='flex flex-col gap-1 lg:w-[288px] lg:shrink-0'>
                    <h3 className='text-label-md text-text-strong-950'>
                      {section.title}
                    </h3>
                    <p className='text-paragraph-sm text-text-sub-600'>
                      {section.description}
                    </p>
                  </div>

                  <div className='flex flex-1 flex-col gap-4 lg:gap-5'>
                    <Accordion.Root
                      type='single'
                      collapsible
                      className='flex flex-col gap-4 lg:gap-5'
                    >
                      {section.items.map((item, index) => (
                        <React.Fragment key={item.id}>
                          {index === 0 ? (
                            <Divider.Root className='lg:hidden' />
                          ) : (
                            <Divider.Root />
                          )}
                          <Accordion.Item
                            value={item.id}
                            className='rounded-none bg-transparent p-0 ring-0 ring-transparent hover:bg-transparent has-[:focus-visible]:bg-transparent has-[:focus-visible]:ring-transparent data-[state=open]:bg-transparent data-[state=open]:ring-transparent'
                          >
                            <Accordion.Trigger className='text-label-sm text-text-sub-600 group-data-[state=open]/accordion:text-text-strong-950 lg:text-label-md m-0 flex w-full cursor-pointer items-center gap-4 p-0 text-left'>
                              <span className='flex-1'>{item.question}</span>
                              <Accordion.Arrow
                                closeIcon={RiCloseLine}
                                className='size-5 shrink-0 lg:size-6'
                              />
                            </Accordion.Trigger>
                            <Accordion.Content className='text-paragraph-xs lg:text-paragraph-sm pt-3 lg:pt-4'>
                              {item.answer.split('\n\n').map((paragraph, i) => (
                                <p
                                  key={i}
                                  className={i > 0 ? 'mt-3 lg:mt-4' : ''}
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </Accordion.Content>
                          </Accordion.Item>
                        </React.Fragment>
                      ))}
                    </Accordion.Root>

                    {'action' in section && section.action && (
                      <>
                        <Divider.Root className='lg:hidden' />
                        <Divider.Root className='hidden lg:flex' />
                        <div className='bg-bg-weak-50 mt-2 flex items-start gap-4 rounded-xl p-4 lg:mt-0 lg:items-center lg:gap-3 lg:px-4 lg:py-3'>
                          <RiCustomerServiceFill className='text-primary-base size-5 shrink-0' />
                          <div className='flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:gap-0'>
                            <span className='text-paragraph-sm text-text-sub-600 lg:flex-1'>
                              {section.action.text}
                            </span>
                            <Link
                              href={`mailto:${section.action.email}`}
                              className='text-label-sm text-text-sub-600'
                            >
                              {section.action.email}
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
