'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as LinkButton from '@/components/ui/link-button';
import * as StatusBadge from '@/components/ui/status-badge';
const integrationsData = [
  {
    id: 'zendesk',
    image: 'https://alignui.com/images/blocks/integrations-logo-zendesk.svg',
    darkImage: 'https://alignui.com/images/blocks/integrations-logo-zendesk-dark.svg',
    alt: 'Integration Zendesk Logo',
  },
  {
    id: 'dropbox',
    image: 'https://alignui.com/images/blocks/integrations-logo-dropbox.svg',
    alt: 'Integration Dropbox Logo',
  },
  {
    id: 'mailchimp',
    image: 'https://alignui.com/images/blocks/integrations-logo-mailchimp.svg',
    alt: 'Integration Mailchimp Logo',
  },
  {
    id: 'zapier',
    image: 'https://alignui.com/images/blocks/integrations-logo-zapier.svg',
    alt: 'Integration Zapier Logo',
  },
  {
    id: 'envato',
    image: 'https://alignui.com/images/blocks/integrations-logo-envato.svg',
    alt: 'Integration Envato Logo',
  },
  {
    id: 'clickup',
    image: 'https://alignui.com/images/blocks/integrations-logo-clickup.svg',
    alt: 'Integration Clickup Logo',
  },
  {
    id: 'slack',
    image: 'https://alignui.com/images/blocks/integrations-logo-slack.svg',
    alt: 'Integration Slack Logo',
  },
  {
    id: 'loom',
    image: 'https://alignui.com/images/blocks/integrations-logo-loom.svg',
    alt: 'Integration Loom Logo',
  },
  {
    id: 'zoom',
    image: 'https://alignui.com/images/blocks/integrations-logo-zoom.svg',
    alt: 'Integration Zoom Logo',
  },
  {
    id: 'linear',
    image: 'https://alignui.com/images/blocks/integrations-logo-linear.svg',
    alt: 'Integration Linear Logo',
  },
  {
    id: 'evernote',
    image: 'https://alignui.com/images/blocks/integrations-logo-evernote.svg',
    alt: 'Integration Evernote Logo',
  },
  {
    id: 'notion',
    image: 'https://alignui.com/images/blocks/integrations-logo-notion.svg',
    darkImage: 'https://alignui.com/images/blocks/integrations-logo-notion-dark.svg',
    alt: 'Integration Notion Logo',
  },
  {
    id: 'asana',
    image: 'https://alignui.com/images/blocks/integrations-logo-asana.svg',
    alt: 'Integration Asana Logo',
  },
  {
    id: 'monday',
    image: 'https://alignui.com/images/blocks/integrations-logo-monday.svg',
    alt: 'Integration Monday Logo',
  },
];

const desktopColumns = [
  [0],
  [1, 2],
  [3, 4, 5],
  [6, 7],
  [8, 9, 10],
  [11, 12],
  [13],
];

export default function Integrations01() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='max-w-7xl mx-auto px-6 xl:px-7'>
        <div className='flex flex-col mb-6 lg:mb-12 lg:items-center'>
          <StatusBadge.Root
            variant='light'
            className='w-fit pl-1.75 pr-2.5 h-7 has-[>.dot]:gap-1 text-label-sm text-text-sub-600 capitalize rounded-[9px] mb-3 shadow-custom-input-2 bg-bg-white-0'
          >
            <StatusBadge.Dot className='size-4 text-primary-base mx-0 before:size-1.5' />
            Apps & Integrations
          </StatusBadge.Root>
          <h2 className='text-title-h4 xl:text-title-h2 !font-[550] text-text-strong-950 lg:text-center'>
            Seamless integrations, better campaigns
          </h2>
        </div>
        <div className='mb-6 lg:mb-12 grid grid-cols-4 gap-3 lg:hidden'>
          {integrationsData.map((integration) => (
            <div
              key={integration.id}
              className='border border-stroke-soft-200 rounded-2xl bg-bg-white-0 aspect-square flex items-center justify-center'
            >
              <Image
                src={integration.image}
                alt={integration.alt}
                width={56}
                height={56}
                className={`size-10 md:size-15 object-cover ${integration.darkImage ? 'dark:hidden' : ''}`}
              />
              {integration.darkImage && (
                <Image
                  src={integration.darkImage}
                  alt={integration.alt}
                  width={56}
                  height={56}
                  className='hidden size-10 md:size-15 object-cover dark:block'
                />
              )}
            </div>
          ))}
        </div>
        <div className='mb-6 lg:mb-12 hidden lg:flex flex-wrap items-center gap-5 justify-center'>
          {desktopColumns.map((columnIndices, colIndex) => (
            <div key={colIndex} className='flex flex-col gap-5 h-fit w-fit'>
              {columnIndices.map((integrationIndex) => {
                const integration = integrationsData[integrationIndex];
                return (
                  <div
                    key={integration.id}
                    className='border border-stroke-soft-200 rounded-4xl bg-bg-white-0 size-30 flex items-center justify-center'
                  >
                    <Image
                      src={integration.image}
                      alt={integration.alt}
                      width={56}
                      height={56}
                      className={`size-14 object-cover ${integration.darkImage ? 'dark:hidden' : ''}`}
                    />
                    {integration.darkImage && (
                      <Image
                        src={integration.darkImage}
                        alt={integration.alt}
                        width={56}
                        height={56}
                        className='hidden size-14 object-cover dark:block'
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className='flex flex-col lg:items-center gap-6'>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            No extra costs, no limits — just powerful integrations that grow{' '}
            <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
              with your marketing goals.
            </span>
          </p>
          <LinkButton.Root
            className='text-primary-base text-label-md cursor-pointer h-auto gap-1 whitespace-break-spaces group w-fit'
            asChild
          >
            <a href='#'>
              Explore all integrations
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
