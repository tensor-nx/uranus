'use client';

import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterXLine,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
const teamData = [
  {
    id: 'member1',
    name: 'Sophia Williams',
    role: 'Product Design Director',
    image: 'https://alignui.com/images/blocks/teams-2-image-1.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member2',
    name: 'Arthur Taylor',
    role: 'Growth Strategy Manager',
    image: 'https://alignui.com/images/blocks/teams-2-image-2.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member3',
    name: 'Matthew Johnson',
    role: 'Experience Solutions Lead',
    image: 'https://alignui.com/images/blocks/teams-2-image-3.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member4',
    name: 'Emma Wright',
    role: 'Creative Brand Partner',
    image: 'https://alignui.com/images/blocks/teams-2-image-4.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
];

export default function Teams02() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-18 w-full'>
      <div className='max-w-7xl mx-auto px-6 lg:px-7'>
        <div className='flex flex-col lg:items-center'>
          <Badge.Root
            variant='lighter'
            className='w-fit px-2.5 h-7 text-label-sm text-text-sub-600 normal-case rounded-[9px] bg-bg-weak-50 mb-3'
          >
            Trusted professionals
          </Badge.Root>
          <h3 className='text-title-h4 lg:text-title-h3 !font-[550] text-text-strong-950 mb-4'>
            Meet the minds behind milestones
          </h3>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center '>
            Driven by curiosity, teamwork, and a passion for progress.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row lg:py-9 lg:border-t lg:border-b my-8 lg:my-10 border-stroke-soft-200'>
          {teamData.map((member, index) => {
            const isLast = index === teamData.length - 1;
            return (
              <div
                key={member.id}
                className={`flex flex-1 flex-row lg:flex-col gap-6 lg:gap-0 lg:items-center lg:px-6 py-6 lg:py-0 border-t lg:border-t-0 border-stroke-soft-200 ${isLast ? 'border-b lg:border-b-0' : 'lg:border-r'}`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={56}
                  height={56}
                  className='size-14 shrink-0 rounded-full lg:mb-6'
                />
                <div className='flex flex-col lg:items-center'>
                  <div className='text-label-md text-text-strong-950 mb-1 lg:text-center'>
                    {member.name}
                  </div>
                  <div className='text-label-sm text-text-sub-600 mb-5 lg:text-center'>
                    {member.role}
                  </div>
                  <div className='flex items-end gap-3.5 flex-1 lg:justify-center'>
                    <Link
                      href={member.socials.instagram}
                      className='size-5 flex group'
                    >
                      <RiInstagramFill className='size-5 text-text-soft-400 group-hover:text-text-sub-600 transition-all duration-300' />
                    </Link>
                    <Link
                      href={member.socials.facebook}
                      className='size-5 flex group'
                    >
                      <RiFacebookCircleFill className='size-5 text-text-soft-400 group-hover:text-text-sub-600 transition-all duration-300' />
                    </Link>
                    <Link
                      href={member.socials.twitter}
                      className='size-5 flex group'
                    >
                      <RiTwitterXLine className='size-5 text-text-soft-400 group-hover:text-text-sub-600 transition-all duration-300' />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='w-full lg:w-89 text-label-sm text-text-soft-400 lg:text-center lg:mx-auto'>
          Boost your workflow with talented mind{' '}
          <span className='text-text-sub-600 text-label-sm lg:flex lg:justify-center'>
            {' '}
            driving impact and innovation.
          </span>
        </div>
      </div>
    </div>
  );
}
