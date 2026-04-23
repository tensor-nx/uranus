'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';
const integrationsData = [
  {
    id: 'dropbox',
    name: 'Dropbox',
    description: 'Sync all files and updates in seconds, always up to date',
    icon: 'https://alignui.com/images/blocks/integrations-logo-dropbox.svg',
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    description: 'Manage customer conversations and support in one place.',
    icon: 'https://alignui.com/images/blocks/integrations-logo-zendesk.svg',
    darkIcon: 'https://alignui.com/images/blocks/integrations-logo-zendesk-dark.svg',
  },
  {
    id: 'loom',
    name: 'Loom',
    description: 'Record and share quick video updates across your team.',
    icon: 'https://alignui.com/images/blocks/integrations-logo-loom.svg',
  },
  {
    id: 'clickup',
    name: 'Clickup',
    description: 'Plan, track, and manage projects in a single workspace.',
    icon: 'https://alignui.com/images/blocks/integrations-logo-clickup.svg',
  },
  {
    id: 'linear',
    name: 'Linear',
    description: 'Track tasks, manage workflows, and resolve issues faster.',
    icon: 'https://alignui.com/images/blocks/integrations-logo-linear.svg',
  },
  {
    id: 'slack',
    name: 'Slack',
    description:
      'Communicate instantly and keep everyone aligned in real time.',
    icon: 'https://alignui.com/images/blocks/integrations-logo-slack.svg',
  },
];

export default function Integrations04() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='max-w-7xl lg:px-7 flex flex-col mx-auto'>
        <div className='flex flex-col lg:items-center px-6 lg:px-0 mb-8 lg:mb-12'>
          <Badge.Root
            variant='lighter'
            className='w-fit px-2.5 h-7 text-label-sm text-text-sub-600 capitalize rounded-[9px] bg-bg-weak-50 mb-3 lg:mx-auto'
          >
            Apps & Integrations
          </Badge.Root>
          <h3 className='text-title-h4 xl:text-title-h3 !font-[550] text-text-strong-950 lg:text-center'>
            Smarter tools for better teamwork
          </h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 mb-8 lg:mb-12 px-3'>
          {integrationsData.map((integration) => (
            <div
              key={integration.id}
              className='flex flex-col p-7 xl:p-10 gap-7 xl:gap-10 bg-bg-weak-50 rounded-[28px]'
            >
              <div className='size-12 shadow-custom-input-4 rounded-[14px] flex items-center justify-center shrink-0 bg-bg-white-0'>
                <Image
                  src={integration.icon}
                  alt={`${integration.name} Logo`}
                  width={32}
                  height={32}
                  className={`size-7 object-cover shrink-0 ${integration.darkIcon ? 'dark:hidden' : ''}`}
                />
                {integration.darkIcon && (
                  <Image
                    src={integration.darkIcon}
                    alt={`${integration.name} Logo`}
                    width={32}
                    height={32}
                    className='hidden size-7 object-cover shrink-0 dark:block'
                  />
                )}
              </div>
              <div className='flex flex-col gap-2'>
                <h5 className='text-label-lg text-text-strong-950'>
                  {integration.name}
                </h5>
                <p className='text-label-md text-text-sub-600'>
                  {integration.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col lg:items-center gap-6 px-6'>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            Explore tools that connect your apps, streamline work,
            <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
              and keep teams in sync.
            </span>
          </p>
          <LinkButton.Root
            className='text-primary-base text-label-md cursor-pointer h-auto gap-1 whitespace-break-spaces group w-fit'
            asChild
          >
            <a href='#'>
              See all integrations
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className='size-5 text-primary-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300'
              />
            </a>
          </LinkButton.Root>
        </div>
      </div>
    </div>
  );
}
