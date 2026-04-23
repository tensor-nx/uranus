'use client';

import { RiArrowRightUpLongLine, RiChatCheckFill } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';
const testimonialsData = [
  {
    id: 'testimonial1',
    companyName: 'Synergy',
    companyLogo: 'https://alignui.com/images/blocks/integrations-logo-1.svg',
    darkCompanyLogo:
      'https://alignui.com/images/blocks/integrations-logo-1-dark.svg',
    testimonial:
      'Setting up smart spend limits and approvals took minutes — now our team moves faster.',
    personName: 'James Brown',
    personImage: 'https://alignui.com/images/blocks/testimonials-person-1.jpg',
  },
  {
    id: 'testimonial2',
    companyName: 'Apex',
    companyLogo: 'https://alignui.com/images/blocks/integrations-logo-2.svg',
    darkCompanyLogo:
      'https://alignui.com/images/blocks/integrations-logo-2-dark.svg',
    testimonial:
      'Love how fast we integrated our banks, wallets, and started tracking expenses in real-time.',
    personName: 'Arthur Taylor',
    personImage: 'https://alignui.com/images/blocks/testimonials-person-2.jpg',
  },
  {
    id: 'testimonial3',
    companyName: 'Horizon',
    companyLogo: 'https://alignui.com/images/blocks/integrations-logo-3.svg',
    darkCompanyLogo:
      'https://alignui.com/images/blocks/integrations-logo-3-dark.svg',
    testimonial:
      'Audit prep went from painful to painless. This tool just works and saves hours every week.',
    personName: 'Sophia Williams',
    personImage: 'https://alignui.com/images/blocks/testimonials-person-3.jpg',
  },
  {
    id: 'testimonial4',
    companyName: 'Pulse',
    companyLogo: 'https://alignui.com/images/blocks/integrations-logo-4.svg',
    darkCompanyLogo:
      'https://alignui.com/images/blocks/integrations-logo-4-dark.svg',
    testimonial:
      'We automated multi-step approvals and finally stopped chasing down manual receipts.',
    personName: 'Matthew Johnson',
    personImage: 'https://alignui.com/images/blocks/testimonials-person-4.jpg',
  },
  {
    id: 'testimonial5',
    companyName: 'Catalyst',
    companyLogo: 'https://alignui.com/images/blocks/integrations-logo-5.svg',
    darkCompanyLogo:
      'https://alignui.com/images/blocks/integrations-logo-5-dark.svg',
    testimonial:
      'Smart controls, simple interface. It’s the only tool our finance ops actually enjoy using.',
    personName: 'Laura Perez',
    personImage: 'https://alignui.com/images/blocks/testimonials-person-5.jpg',
  },
  {
    id: 'testimonial6',
    companyName: 'Solaris',
    companyLogo: 'https://alignui.com/images/blocks/integrations-logo-6.svg',
    darkCompanyLogo:
      'https://alignui.com/images/blocks/integrations-logo-6-dark.svg',
    testimonial:
      'Vendor payments used to be messy. Now we track, approve, and sync everything instantly.',
    personName: 'Emma Wright',
    personImage: 'https://alignui.com/images/blocks/testimonials-person-6.jpg',
  },
];

export default function Testimonials04() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-20 xl:py-30 w-full'>
      <div className='mx-auto flex max-w-7xl flex-col px-6 lg:px-7'>
        <div className='mb-8 flex flex-col lg:mb-12 lg:items-center'>
          <Badge.Root
            variant='lighter'
            className='bg-bg-weak-50 text-text-sub-600 text-label-sm mb-3 h-7 w-fit gap-1.5 rounded-[9px] pr-2.5 pl-2 normal-case'
          >
            <Badge.Icon
              as={RiChatCheckFill}
              className='text-text-soft-400 mx-0 size-4'
            />
            Trusted by finance leaders
          </Badge.Root>
          <h3 className='text-title-h4 xl:text-title-h2 text-text-strong-950 mb-4 !font-[550] lg:text-center'>
            Trusted by teams who move money
          </h3>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            Reduce risk, gain visibility, and help your finance team stay{' '}
            <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
              focused — not buried in approvals.
            </span>
          </p>
        </div>
        <div className='mb-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mb-10 lg:grid-cols-3'>
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className='bg-bg-weak-50 flex flex-col gap-6 rounded-[20px] p-6 lg:gap-8 lg:p-8'
            >
              <div className='flex items-center gap-1.5'>
                <Image
                  src={testimonial.companyLogo}
                  alt={`${testimonial.companyName} Logo`}
                  width={18}
                  height={18}
                  className='size-4.5 shrink-0 object-cover dark:hidden'
                />
                <Image
                  src={testimonial.darkCompanyLogo}
                  alt={`${testimonial.companyName} Logo`}
                  width={18}
                  height={18}
                  className='hidden size-4.5 shrink-0 object-cover dark:block'
                />
                <div className='text-label-md text-text-strong-950'>
                  {testimonial.companyName}{' '}
                  <span className='text-text-soft-400 -ml-1.5'>™</span>
                </div>
              </div>
              <div className='text-label-md lg:text-label-lg text-text-strong-950'>
                {testimonial.testimonial}
              </div>
              <div className='flex items-center gap-3'>
                <Image
                  src={testimonial.personImage}
                  alt='Testimonials person'
                  width={24}
                  height={24}
                  className='size-6 shrink-0 rounded-full'
                />
                <div className='text-label-md text-text-strong-950'>
                  {testimonial.personName}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col items-center gap-6 px-6'>
          <LinkButton.Root
            className='text-text-sub-600 text-label-md group h-auto w-fit cursor-pointer gap-1 whitespace-break-spaces'
            asChild
          >
            <a href='#'>
              See all testimonials
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className='text-primary-base size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </a>
          </LinkButton.Root>
        </div>
      </div>
    </div>
  );
}
