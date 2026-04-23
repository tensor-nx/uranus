'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';
const integrationsData = [
  [
    {
      id: 'dropbox',
      name: 'Dropbox',
      description: 'Sync all files and updates in seconds, always up to date',
      icon: 'https://alignui.com/images/blocks/integrations-logo-dropbox.svg',
    },
    {
      id: 'zendesk',
      name: 'Zendesk',
      description:
        'Manage customer support from one place with real-time updates',
      icon: 'https://alignui.com/images/blocks/integrations-logo-zendesk.svg',
      darkIcon: 'https://alignui.com/images/blocks/integrations-logo-zendesk-dark.svg',
    },
    {
      id: 'loom',
      name: 'Loom',
      description: 'Record and share quick video updates with your team',
      icon: 'https://alignui.com/images/blocks/integrations-logo-loom.svg',
    },
  ],
  [
    {
      id: 'clickup',
      name: 'Clickup',
      description: 'Organize tasks and projects in one workspace',
      icon: 'https://alignui.com/images/blocks/integrations-logo-clickup.svg',
    },
    {
      id: 'linear',
      name: 'Linear',
      description: 'Track issues and manage projects with custom workflows',
      icon: 'https://alignui.com/images/blocks/integrations-logo-linear.svg',
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Communicate instantly and keep teams aligned in real time',
      icon: 'https://alignui.com/images/blocks/integrations-logo-slack.svg',
    },
  ],
];

const ratingsData = [
  {
    id: 'google',
    name: 'Google',
    rating: '4.6',
    icon: 'https://alignui.com/images/blocks/icon-google.svg',
  },
  {
    id: 'trustpilot',
    name: 'Trustpilot',
    rating: '4.9',
    icon: 'https://alignui.com/images/blocks/icon-trustpilot.svg',
  },
  {
    id: 'g2',
    name: 'G2',
    rating: '4.3',
    icon: 'https://alignui.com/images/blocks/icon-tripAdvisor.svg',
  },
];

export default function Integrations03() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='mx-auto flex max-w-7xl flex-col lg:px-7'>
        <div className='mb-8 flex flex-col px-6 lg:mb-12 lg:items-center lg:px-0'>
          <Badge.Root
            variant='lighter'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 capitalize lg:mx-auto'
          >
            Apps & Integrations
          </Badge.Root>
          <h3 className='text-title-h4 xl:text-title-h3 text-text-strong-950 mb-4 !font-[550] lg:text-center'>
            Powerful tools for better workflows
          </h3>
          <p className='text-paragraph-md text-text-sub-600 mb-4 lg:text-center'>
            Discover integrations that connect your favorite apps, improve{' '}
            <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
              productivity, and keep your work in sync.
            </span>
          </p>
          <LinkButton.Root
            className='text-primary-base text-label-md group h-auto w-fit cursor-pointer gap-1 whitespace-break-spaces'
            asChild
          >
            <a href='#'>
              Explore all integrations
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className='text-primary-base size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </a>
          </LinkButton.Root>
        </div>
        <div className='bg-faded-lighter mx-3 flex flex-col rounded-[28px] p-0.5 lg:mx-0 lg:rounded-[40px]'>
          <div className='bg-bg-white-0 shadow-custom-input-4 flex flex-col rounded-[28px] lg:rounded-[38px]'>
            {integrationsData.map((row, rowIndex) => (
              <div key={rowIndex}>
                {rowIndex > 0 && (
                  <Divider.Root
                    variant='line'
                    className='mx-auto hidden w-226 lg:flex 2xl:w-289.5'
                  />
                )}
                <div className='flex flex-col px-6 lg:flex-row lg:px-0'>
                  {row.map((integration, index) => {
                    const isLast = index === row.length - 1;
                    return (
                      <div
                        key={integration.id}
                        className={`border-stroke-soft-200 flex flex-row gap-6 border-b py-6 lg:flex-1 lg:flex-col lg:items-center lg:border-none lg:px-10 lg:py-12 ${!isLast ? "lg:before:bg-stroke-soft-200 relative lg:before:absolute lg:before:top-1/2 lg:before:right-0 lg:before:h-[55%] lg:before:w-0.25 lg:before:-translate-y-1/2 lg:before:content-['']" : ''}`}
                      >
                        <div className='shadow-custom-input flex size-12 shrink-0 items-center justify-center rounded-2xl lg:size-13'>
                          <Image
                            src={integration.icon}
                            alt={`${integration.name} Logo`}
                            width={32}
                            height={32}
                            className={`size-7 shrink-0 object-cover lg:size-8 ${integration.darkIcon ? 'dark:hidden' : ''}`}
                          />
                          {integration.darkIcon && (
                            <Image
                              src={integration.darkIcon}
                              alt={`${integration.name} Logo`}
                              width={32}
                              height={32}
                              className='hidden size-7 shrink-0 object-cover dark:block lg:size-8'
                            />
                          )}
                        </div>
                        <div className='flex flex-col gap-2 lg:items-center'>
                          <h5 className='text-label-md lg:text-label-lg text-text-strong-950'>
                            {integration.name}
                          </h5>
                          <p className='text-paragraph-sm lg:text-paragraph-md text-text-sub-600 lg:text-center'>
                            {integration.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center gap-4 p-4 lg:gap-12'>
            {ratingsData.map((rating, index) => {
              const isLast = index === ratingsData.length - 1;
              return (
                <div
                  key={rating.id}
                  className={`flex items-center gap-2 ${!isLast ? "lg:before:bg-stroke-sub-300 relative lg:before:absolute lg:before:top-1/2 lg:before:-right-6 lg:before:h-4 lg:before:w-0.25 lg:before:-translate-y-1/2 lg:before:content-['']" : 'relative'}`}
                >
                  <Image
                    src={rating.icon}
                    alt={`${rating.name} Logo`}
                    width={20}
                    height={20}
                    className='size-4.5 object-cover lg:size-5'
                  />
                  <p className='text-label-sm text-text-soft-400'>
                    <span className='text-label-sm text-text-sub-600'>
                      {rating.rating}
                    </span>{' '}
                    {rating.name}{' '}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
