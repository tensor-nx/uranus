'use client';

import Link from '@repo/registry/next-link-mock';

import * as Accordion from '@/components/ui/accordion';
import * as Badge from '@/components/ui/badge';
const faqData = [
  {
    id: 'faq1',
    question: 'What countries do you support?',
    answer:
      'We currently support over 180 countries worldwide, including the United States, United Kingdom, European Union member states, Canada, Australia, and many more. Our coverage continues to expand as we partner with local financial institutions. For specific country availability, please check our coverage page or contact support.',
    date: '24 May, 2025',
  },
  {
    id: 'faq2',
    question: 'How secure is my financial data?',
    answer:
      'We use bank-level encryption, two-factor authentication, and comply with major global standards such as PSD2, GDPR, and SOC 2. Your financial data is encrypted both at rest and in transit, and our systems are monitored 24/7 for unusual activity. We also undergo regular third-party audits to ensure the highest level of security and compliance.',
    date: '24 May, 2025',
  },
  {
    id: 'faq3',
    question: 'Is there a free trial available?',
    answer:
      'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. During the trial, you can explore all premium features and decide which plan works best for your needs. At the end of the trial, you can choose to upgrade or continue with our free tier.',
    date: '18 May, 2025',
  },
  {
    id: 'faq4',
    question: 'How long do transfers usually take?',
    answer:
      'Domestic transfers typically complete within 1-2 business days, while international transfers may take 2-5 business days depending on the destination country and currency. We also offer instant transfers for supported banks and regions, usually completing within minutes for a small additional fee.',
    date: '12 May, 2025',
  },
  {
    id: 'faq5',
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer:
      'Absolutely! You can change your plan at any time from your account settings. When upgrading, you will get immediate access to new features and we will prorate the difference. When downgrading, the change takes effect at the start of your next billing cycle, and you will retain access to premium features until then.',
    date: '8 May, 2025',
  },
  {
    id: 'faq6',
    question: 'Do you offer customer support in other languages?',
    answer:
      "Yes, our customer support team is available in English, Spanish, French, German, Portuguese, and Japanese. We're continuously expanding our language support. Live chat and email support are available 24/7, while phone support is available during business hours in each respective region.",
    date: '2 May, 2025',
  },
];

export default function Faq01() {
  return (
    <div className='bg-bg-white-0 px-6 py-10 lg:px-0 lg:py-20 w-full'>
      <div className='mx-auto flex flex-col lg:max-w-[540px]'>
        <Badge.Root
          variant='filled'
          className='text-label-sm bg-bg-weak-50 text-text-sub-600 mb-3 h-7 w-fit rounded-[9px] px-2.5 normal-case lg:mx-auto'
        >
          Frequently asked questions
        </Badge.Root>
        <div className='text-title-h4 xl:text-title-h3 text-stroke-strong-950 mb-6 !font-[550] lg:text-center xl:mb-10'>
          Got questions about Apex? <br className='hidden lg:block' />{' '}
          We&apos;ve got answers.
        </div>
        <Accordion.Root type='single' collapsible className='mb-6 space-y-2'>
          {faqData.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className='bg-bg-weak-50 cursor-pointer !rounded-xl px-5 py-4 pr-4 ring-0 ring-transparent duration-300 lg:!rounded-2xl'
            >
              <Accordion.Trigger className='text-text-sub-600 text-label-sm lg:text-label-md group-hover/accordion:text-text-strong-950 group-data-[state=open]/accordion:text-text-strong-950 cursor-pointer duration-300'>
                {faq.question}
                <Accordion.Arrow className='text-text-soft-400 group-[&[data-state=open]]/accordion:text-text-sub-600 group-hover/accordion:text-text-strong-950 ml-auto size-6 duration-300' />
              </Accordion.Trigger>
              <Accordion.Content className='flex flex-col gap-5 pt-3 lg:pt-4'>
                <div className='text-label-sm text-text-sub-600'>
                  {faq.answer}
                </div>
                <span className='text-text-soft-400 text-label-xs flex'>
                  {faq.date}
                </span>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <div className='text-text-soft-400 text-paragraph-sm lg:text-center'>
          Still have questions? <br className='block lg:hidden' /> Email us at{' '}
          <Link
            href='mailto: hello@alignui.com'
            className='text-label-sm text-text-sub-600 hover:text-text-strong-950 transition-all duration-300'
          >
            {' '}
            hello@alignui.com
          </Link>
        </div>
      </div>
    </div>
  );
}
