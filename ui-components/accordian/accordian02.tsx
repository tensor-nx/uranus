'use client';

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { RiAddLine, RiSubtractLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';
import { cn } from '@/utils/cn';
type AccordionSectionProps = {
  value: string;
  title: string;
  steps: string[];
  isLast?: boolean;
};

const AccordionSection = ({
  value,
  title,
  steps,
  isLast = false,
}: AccordionSectionProps) => (
  <AccordionItem value={value} isLast={isLast}>
    <AccordionTrigger>
      <div className='flex w-full items-center'>
        <span className='text-label-sm text-text-sub-600 group-hover:text-text-strong-950 group-data-[state=open]:text-text-strong-950'>
          {title}
        </span>
      </div>
    </AccordionTrigger>
    <AccordionContent>{steps}</AccordionContent>
  </AccordionItem>
);

const SignUpAccordion = () => {
  const sections: AccordionSectionProps[] = [
    {
      value: 'web',
      title: 'Web Browser',
      steps: [
        'Go to our website',
        'Click on Sign Up button',
        'Choose your target language',
        'Complete registration',
      ],
    },
    {
      value: 'mobile',
      title: 'Mobile App',
      steps: [
        'Download the app from the App Store or Google Play.',
        'Open the app and tap Sign up.',
        'Choose your target language and current proficiency level.',
        'Select a subscription plan.',
        'Sign in with your Apple or Google account.',
      ],
    },
    {
      value: 'tablet',
      title: 'Tablet Devices',
      steps: [
        'Download tablet version',
        'Install the app',
        'Follow registration steps',
      ],
    },
    {
      value: 'tv',
      title: 'Smart TV',
      steps: [
        'Open Smart TV app store',
        'Search for our app',
        'Install and launch',
      ],
    },
  ];

  return (
    <div className='w-[448px]'>
      <Accordion.Root
        type='single'
        collapsible
        defaultValue='mobile'
        className='w-full'
      >
        <div>
          <h2 className='mb-1 text-label-md font-medium text-text-strong-950'>
            How to sign up for the app?
          </h2>
          <p className='pb-8 text-label-sm text-text-sub-600'>
            Follow the steps for your preferred device below.
          </p>

          <div className='w-full pl-1'>
            {sections.map((section, index) => (
              <AccordionSection
                key={section.value}
                {...section}
                isLast={index === sections.length - 1}
              />
            ))}
          </div>
        </div>
      </Accordion.Root>
    </div>
  );
};

const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn('relative h-0 w-full text-stroke-soft-200', className)}
      role='separator'
    >
      <div
        className='absolute left-0 h-px w-full'
        style={{
          background:
            'linear-gradient(90deg, currentColor 4px, transparent 4px) 50% 50% / 8px 1px repeat no-repeat',
        }}
      />
    </div>
  );
};

const AccordionItem = ({
  children,
  value,
  isLast,
}: {
  children: React.ReactNode;
  value: string;
  isLast: boolean;
}) => (
  <Accordion.Item
    value={value}
    className={cn(
      'pb-4',
      'group transition-colors duration-200',
      '[&:hover_[data-hover]]:border-transparent',
      '[&:hover_[data-hover]]:bg-bg-weak-50',
      '[&:hover_[data-hover]]:text-text-strong-950',
      '[&:hover_[data-hover]]:shadow-none',
      '[&[data-state=open]_[data-hover]]:border-transparent',
      '[&[data-state=open]_[data-hover]]:bg-bg-surface-800',
      '[&[data-state=open]_[data-hover]]:text-text-strong-950',
      '[&[data-state=open]_[data-hover]]:shadow-none',
    )}
  >
    {children}
    {!isLast && <Divider className='pt-4' />}
  </Accordion.Item>
);

const AccordionTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <Accordion.Header>
      <Accordion.Trigger className='group flex w-full items-center justify-between gap-2.5 text-left'>
        <div className='relative z-10 flex items-center'>
          <CompactButton.Root
            asChild
            fullRadius
            data-hover
            className='size-[20px]'
          >
            <div>
              <CompactButton.Icon
                as={({ className }) => (
                  <div className='group-data-[state=open]:hidden'>
                    <RiAddLine className={className} />
                  </div>
                )}
              />
              <CompactButton.Icon
                as={({ className }) => (
                  <div className='hidden group-data-[state=open]:block'>
                    <RiSubtractLine
                      className={cn(
                        className,
                        'rounded-full bg-bg-surface-800 text-white',
                      )}
                    />
                  </div>
                )}
              />
            </div>
          </CompactButton.Root>
        </div>
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

const AccordionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
      <div className='pl-[30px] pt-4'>
        <ol className='space-y-3'>
          {(children as string[]).map((step: string, index: number) => (
            <li
              key={index}
              className='flex items-center gap-2 break-words text-label-sm text-text-sub-600'
            >
              <CompactButton.Root
                asChild
                fullRadius
                variant='ghost'
                className='size-[22px] bg-faded-lighter text-faded-base'
              >
                <div className='select-none'>{index + 1}</div>
              </CompactButton.Root>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </Accordion.Content>
  );
};

export default SignUpAccordion;
