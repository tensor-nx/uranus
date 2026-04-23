'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
const featuresData = [
  { id: 'feature1', text: 'Seamless app connections' },
  { id: 'feature2', text: 'Quick integration setups' },
  { id: 'feature3', text: 'Real-time data syncing' },
];

const integrationsData = [
  {
    id: 'slack',
    name: 'Slack',
    description: 'Collaborate with your team directly from Slack.',
    icon: 'https://alignui.com/images/blocks/integrations-logo-slack.svg',
    bgImage: 'https://alignui.com/images/blocks/integrations-logo-slack-bg.svg',
    darkBgImage: 'https://alignui.com/images/blocks/integrations-logo-slack-bg-dark.svg',
  },
  {
    id: 'loom',
    name: 'Loom',
    description: 'Share updates and walkthroughs instantly with Loom.',
    icon: 'https://alignui.com/images/blocks/integrations-logo-loom.svg',
    bgImage: 'https://alignui.com/images/blocks/integrations-logo-loom-bg.svg',
    darkBgImage: 'https://alignui.com/images/blocks/integrations-logo-loom-bg-dark.svg',
  },
  {
    id: 'clickup',
    name: 'Clickup',
    description: 'Organize and track projects effortlessly in Clickup.',
    icon: 'https://alignui.com/images/blocks/integrations-logo-clickup.svg',
    bgImage: 'https://alignui.com/images/blocks/integrations-logo-clickup-bg.svg',
    darkBgImage: 'https://alignui.com/images/blocks/integrations-logo-clickup-bg-dark.svg',
  },
];

export default function Integrations02() {
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
          className='fill-primary-base'
        />
      </svg>
    );
  };

  return (
    <div className='bg-bg-white-0 flex flex-col gap-8 py-10 lg:flex-row lg:justify-center lg:gap-10 lg:px-6 lg:py-24 xl:gap-20 w-full'>
      <div className='flex flex-col px-6 lg:max-w-[440px] lg:justify-center lg:px-0'>
        <Badge.Root
          variant='lighter'
          className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 capitalize'
        >
          Apps & Integrations
        </Badge.Root>
        <h3 className='text-title-h4 xl:text-title-h3 text-text-strong-950 mb-6 !font-[550] lg:mb-8'>
          Your integrations are always secure, fast, and fully in sync
        </h3>
        <p className='text-paragraph-md text-text-sub-600 mb-6 lg:mb-8'>
          We connect, update, and sync all your tools{' '}
          <span className='text-label-md text-text-sub-600 lg:flex'>
            across every workflow.
          </span>
        </p>
        <ul className='mb-6 flex flex-col gap-4 lg:mb-8'>
          {featuresData.map((feature) => (
            <li
              key={feature.id}
              className='text-paragraph-md text-text-sub-600 flex items-center gap-2.5'
            >
              <ListDotIcon />
              {feature.text}
            </li>
          ))}
        </ul>
        <Button.Root
          mode='stroke'
          size='medium'
          className='text-primary-base ring-primary-base focus:border-primary-base hover:bg-blue-alpha-10 focus:shadow-button-primary-focus w-full cursor-pointer rounded-xl border border-transparent transition-all duration-300 hover:shadow-none hover:ring-transparent focus:bg-transparent focus:ring-transparent lg:w-fit'
        >
          Explore all integrations
          <Button.Icon
            as={RiArrowRightUpLongLine}
            className='text-primary-base group-disabled:text-text-disabled-300 size-5'
          />
        </Button.Root>
      </div>
      <div className='flex w-full flex-col gap-2 px-3 lg:max-w-[544px] lg:justify-center lg:px-0'>
        {integrationsData.map((integration) => (
          <div
            key={integration.id}
            className='bg-bg-weak-25 relative flex flex-col gap-6 overflow-hidden rounded-[28px] p-7 lg:flex-row xl:p-9'
          >
            <Image
              src={integration.icon}
              alt={`Integration ${integration.name} Logo`}
              width={24}
              height={24}
              className='size-6 object-cover'
            />
            <div className='flex flex-col gap-2'>
              <h5 className='text-label-lg text-text-strong-950'>
                {integration.name}
              </h5>
              <p className='text-paragraph-md text-text-sub-600 lg:w-[80%]'>
                {integration.description}
              </p>
            </div>
            <Image
              src={integration.bgImage}
              alt={`Integration ${integration.name} Logo`}
              width={148}
              height={148}
              className='absolute -top-14 right-4 size-37 object-cover dark:hidden lg:top-auto lg:-bottom-9'
            />
            <Image
              src={integration.darkBgImage}
              alt={`Integration ${integration.name} Logo`}
              width={148}
              height={148}
              className='absolute -top-14 right-4 hidden size-37 object-cover dark:block lg:top-auto lg:-bottom-9'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
