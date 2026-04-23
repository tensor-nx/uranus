'use client';

import { useState } from 'react';
import {
  RemixiconComponentType,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiBillFill,
  RiCustomerServiceFill,
  RiHeart3Fill,
  RiQuestionFill,
  RiShieldStarFill,
  RiStarSmileFill,
  RiUser4Fill,
} from '@remixicon/react';
import Link from '@repo/registry/next-link-mock';

import * as Accordion from '@/components/ui/accordion';
import * as Badge from '@/components/ui/badge';
const tabsData: { id: string; label: string; icon: RemixiconComponentType }[] =
  [
    { id: 'account', label: 'Account', icon: RiUser4Fill },
    { id: 'billing', label: 'Billing', icon: RiBillFill },
    { id: 'support', label: 'Support', icon: RiCustomerServiceFill },
    { id: 'security', label: 'Security', icon: RiShieldStarFill },
    { id: 'features', label: 'Features', icon: RiStarSmileFill },
    { id: 'compliance', label: 'Compliance', icon: RiHeart3Fill },
  ];

const faqData: Record<
  string,
  { id: string; question: string; answer: string; date?: string }[]
> = {
  account: [
    {
      id: 'acc1',
      question: 'How do I connect my bank accounts?',
      answer:
        "Connecting your bank accounts is simple and secure. Go to Settings > Bank Accounts, click 'Add Account', and follow the secure authentication process. We support over 10,000 financial institutions.",
    },
    {
      id: 'acc2',
      question: 'Can I manage multiple businesses?',
      answer:
        "Yes. You'll get a live dashboard that shows spend, leads, conversions, and ROI — all in one place, updated by the minute.",
    },
    {
      id: 'acc3',
      question: 'What integrations are available?',
      answer:
        'We integrate with popular accounting software like QuickBooks, Xero, and FreshBooks, as well as payment processors, CRMs, and productivity tools. Check our integrations page for the full list.',
    },
    {
      id: 'acc4',
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan anytime during or after the trial.',
    },
    {
      id: 'acc5',
      question: 'How is data privacy handled?',
      answer:
        'We take data privacy seriously. All data is encrypted in transit and at rest. We are GDPR compliant and follow industry best practices for data security and privacy protection.',
    },
    {
      id: 'acc6',
      question: 'Can I export financial reports?',
      answer:
        'Absolutely! You can export reports in multiple formats including PDF, CSV, and Excel. Schedule automatic exports or generate them on-demand from your dashboard.',
    },
    {
      id: 'acc7',
      question: 'Compliant with local regulations?',
      answer:
        'Yes, our platform is designed to comply with local financial regulations in major markets. We regularly update our compliance features to meet evolving regulatory requirements.',
    },
  ],
  billing: [
    {
      id: 'bill1',
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can also pay via invoice.',
    },
    {
      id: 'bill2',
      question: 'Can I get a refund if I cancel?',
      answer:
        'Yes, we offer a 30-day money-back guarantee for all new subscriptions. If you are not satisfied, contact our support team for a full refund.',
    },
    {
      id: 'bill3',
      question: 'How does billing work for team plans?',
      answer:
        'Team plans are billed per seat on a monthly or annual basis. You only pay for active users, and you can add or remove seats at any time with prorated billing.',
    },
  ],
  support: [
    {
      id: 'sup1',
      question: 'What support channels are available?',
      answer:
        'We offer 24/7 live chat and email support for all plans. Phone support and dedicated account managers are available for Business and Enterprise customers.',
    },
    {
      id: 'sup2',
      question: 'What is your average response time?',
      answer:
        'Our average first response time is under 2 hours for email and under 5 minutes for live chat. Priority support customers receive responses within 30 minutes.',
    },
    {
      id: 'sup3',
      question: 'Do you offer onboarding assistance?',
      answer:
        'Yes! All plans include access to our comprehensive knowledge base and video tutorials. Business and Enterprise plans include personalized onboarding sessions with our success team.',
    },
  ],
  security: [
    {
      id: 'sec1',
      question: 'How is my data protected?',
      answer:
        'We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. All data is stored in SOC 2 Type II certified data centers with 24/7 monitoring.',
    },
    {
      id: 'sec2',
      question: 'Do you support SSO and 2FA?',
      answer:
        'Yes, we support Single Sign-On (SSO) via SAML 2.0 and OAuth for enterprise plans. Two-factor authentication (2FA) is available for all accounts at no extra cost.',
    },
    {
      id: 'sec3',
      question: 'Where is my data stored?',
      answer:
        'Your data is stored in secure data centers located in the US, EU, and Asia-Pacific regions. Enterprise customers can choose their preferred data residency location.',
    },
    {
      id: 'sec4',
      question: 'How often do you perform security audits?',
      answer:
        'We undergo annual third-party security audits and penetration testing. Our security team also conducts continuous internal assessments and vulnerability scanning.',
    },
  ],
  features: [
    {
      id: 'feat1',
      question: 'What integrations are available?',
      answer:
        'We integrate with 100+ popular tools including Slack, Microsoft Teams, Jira, Salesforce, HubSpot, and Zapier. Our REST API also allows custom integrations.',
    },
    {
      id: 'feat2',
      question: 'Can I export my data?',
      answer:
        'Yes, you can export all your data at any time in various formats including CSV, JSON, and PDF. Bulk exports and scheduled exports are available on Business plans.',
    },
    {
      id: 'feat3',
      question: 'Do you offer an API?',
      answer:
        'Yes, we provide a comprehensive REST API with detailed documentation. API access is included in all plans with rate limits based on your subscription tier.',
    },
    {
      id: 'feat4',
      question: 'Is there a limit on storage?',
      answer:
        'Storage limits vary by plan. Starter plans include 10GB, Professional plans include 100GB, and Enterprise plans offer unlimited storage.',
      date: '24 May, 2025',
    },
  ],
  compliance: [
    {
      id: 'comp1',
      question: 'Are you GDPR compliant?',
      answer:
        'Yes, we are fully GDPR compliant. We offer data processing agreements (DPA), support data subject requests, and provide tools for data portability and deletion.',
    },
    {
      id: 'comp2',
      question: 'Do you have SOC 2 certification?',
      answer:
        'Yes, we maintain SOC 2 Type II certification which is audited annually. We can provide our SOC 2 report to enterprise customers under NDA.',
    },
    {
      id: 'comp3',
      question: 'Are you HIPAA compliant?',
      answer:
        'Yes, we offer HIPAA-compliant configurations for healthcare customers. Business Associate Agreements (BAA) are available for qualifying organizations.',
    },
    {
      id: 'comp4',
      question: 'What about data residency requirements?',
      answer:
        'We support data residency in multiple regions including US, EU, UK, and Asia-Pacific. Enterprise customers can specify their preferred data location.',
      date: '24 May, 2025',
    },
    {
      id: 'comp5',
      question: 'Do you support audit logs?',
      answer:
        'Yes, comprehensive audit logs are available on all plans. You can track user activities, permission changes, and data access with exportable logs for compliance reporting.',
      date: '24 May, 2025',
    },
  ],
};

export default function Faq03() {
  const [activeTab, setActiveTab] = useState('account');
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const tabOrder = tabsData.map((tab) => tab.id);
  const currentIndex = tabOrder.indexOf(activeTab);
  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setActiveTab(tabOrder[currentIndex - 1]);
  };
  const handleNext = () => {
    if (currentIndex >= tabOrder.length - 1) return;
    setActiveTab(tabOrder[currentIndex + 1]);
  };
  return (
    <div className='bg-bg-white-0 px-6 pt-10 pb-8 lg:px-0 lg:pt-30 lg:pb-30 w-full'>
      <div className='mx-auto flex flex-col items-center lg:max-w-[734px]'>
        <Badge.Root
          variant='filled'
          className='text-label-sm bg-bg-weak-50 text-text-sub-600 mb-3 h-7 w-fit gap-1.5 rounded-[9px] pr-2.5 pl-2 normal-case lg:mx-auto'
        >
          <Badge.Icon
            as={RiQuestionFill}
            className='text-text-soft-400 mx-0 size-4 before:size-4'
          />
          Need help?
        </Badge.Root>
        <div className='text-title-h4 lg:text-title-h2 text-stroke-strong-950 mb-4 !font-[550] lg:text-center'>
          Frequently asked questions
        </div>
        <div className='text-text-sub-600 text-paragraph-md mb-6 lg:mb-8 lg:text-center'>
          Find quick answers about our pricing, onboarding, and{' '}
          <br className='hidden lg:block' />{' '}
          <span className='text-label-md text-text-sub-600'>
            performance tracking tools.
          </span>
        </div>

        <div className='border-stroke-soft-200 relative mb-6 flex w-[calc(100%+48px)] overflow-hidden border-t border-b lg:hidden'>
          <RiArrowLeftSLine
            onClick={handlePrev}
            className={`${currentIndex <= 0 ? 'pointer-events-none opacity-30' : 'cursor-pointer'} text-text-soft-400 absolute top-1/2 left-6 z-10 size-5 -translate-y-1/2 transition-all duration-300`}
          />
          <RiArrowRightSLine
            onClick={handleNext}
            className={`${currentIndex >= tabOrder.length - 1 ? 'pointer-events-none opacity-30' : 'cursor-pointer'} text-text-soft-400 absolute top-1/2 right-6 z-10 size-5 -translate-y-1/2 transition-all duration-300`}
          />
          <div
            className='flex w-full flex-nowrap transition-transform duration-300 ease-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className='group/tab hover:bg-bg-white-0 hover:text-text-strong-950 flex w-full shrink-0 cursor-pointer items-center justify-center gap-1.5 px-13 py-4 shadow-none transition-all duration-300'
                data-tab={tab.id}
                data-active={activeTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
              >
                <tab.icon className='text-text-disabled-300 group-data-[active=true]/tab:text-primary-base size-4.5 transition-all duration-300' />
                <span className='text-label-sm text-text-sub-600 group-data-[active=true]/tab:text-text-strong-950 transition-all duration-300'>
                  {tab.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-bg-weak-50 mx-auto mb-8 hidden w-fit gap-1 rounded-[96px] p-1 lg:flex'>
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              className='group/tab hover:bg-bg-white-0 hover:text-text-strong-950 data-[active=true]:bg-bg-white-0 data-[active=true]:shadow-custom-input-4 flex cursor-pointer items-center gap-1.5 rounded-[96px] px-3 py-2 shadow-none transition-all duration-300'
              data-tab={tab.id}
              data-active={activeTab === tab.id}
              onClick={() => handleTabClick(tab.id)}
            >
              <tab.icon className='text-text-disabled-300 group-data-[active=true]/tab:text-primary-base size-4.5 transition-all duration-300' />
              <span className='text-label-sm text-text-sub-600 group-data-[active=true]/tab:text-text-strong-950 transition-all duration-300'>
                {tab.label}
              </span>
            </div>
          ))}
        </div>

        <div className='flex w-full lg:w-fit'>
          {tabsData.map((tab) => (
            <Accordion.Root
              key={tab.id}
              type='single'
              collapsible
              className='mx-auto mb-6 w-full space-y-3 lg:mb-8 lg:w-110'
              data-tab={tab.id}
              hidden={activeTab !== tab.id}
            >
              {faqData[tab.id]?.map((faq) => (
                <Accordion.Item
                  key={faq.id}
                  value={faq.id}
                  className='ring-stroke-soft-200 cursor-pointer !rounded-2xl px-5 py-3.5 duration-300'
                >
                  <Accordion.Trigger className='text-text-sub-600 text-label-sm lg:text-label-md group-hover/accordion:text-text-strong-950 group-data-[state=open]/accordion:text-text-strong-950 flex cursor-pointer items-start gap-2 duration-300 lg:items-center'>
                    {faq.question}
                    <Accordion.Arrow className='text-text-soft-400 group-[&[data-state=open]]/accordion:text-text-sub-600 group-hover/accordion:text-text-strong-950 mb-[-3px] ml-auto size-6 duration-300 lg:mb-0' />
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
          ))}
        </div>
        <div className='text-text-soft-400 text-paragraph-sm flex flex-col items-center text-center'>
          Looking for something else? <br className='block lg:hidden' />{' '}
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
