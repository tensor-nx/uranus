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
    image: 'https://alignui.com/images/blocks/teams-1-image-1.png',
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
    image: 'https://alignui.com/images/blocks/teams-1-image-2.png',
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
    image: 'https://alignui.com/images/blocks/teams-1-image-3.png',
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
    image: 'https://alignui.com/images/blocks/teams-1-image-4.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
];

export default function Teams01() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-18 w-full'>
      <div className='max-w-7xl mx-auto lg:px-7'>
        <div className='flex flex-col lg:items-center px-6 lg:px-0'>
          <Badge.Root
            variant='lighter'
            className='w-fit px-2.5 h-7 text-label-sm text-text-sub-600 normal-case rounded-[9px] bg-bg-weak-50 mb-3'
          >
            Meet our leadership
          </Badge.Root>
          <h3 className='text-title-h4 lg:text-title-h3 !font-[550] text-text-strong-950 mb-4'>
            Building the future, together
          </h3>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center '>
            Working together, we solve challenges and deliver{' '}
            <span className='text-text-sub-600 text-label-md lg:flex lg:justify-center lg:text-center'>
              exceptional results for every client.
            </span>
          </p>
        </div>
        <div className='flex flex-nowrap overflow-x-auto no-scrollbar lg:overflow-visible gap-6 py-8 px-6 lg:px-0'>
          {teamData.map((member) => (
            <div
              key={member.id}
              className='flex w-62 lg:w-full shrink-0 lg:flex-1 flex-col items-center py-8 px-4 shadow-custom-input bg-bg-white-0 rounded-3xl lg:rounded-[28px]'
            >
              <Image
                src={member.image}
                alt={member.name}
                width={72}
                height={72}
                className='size-14 lg:size-18 shrink-0 rounded-full mb-7'
              />
              <h6 className='text-title-h6 !font-[550] text-text-strong-950 mb-1 text-center'>
                {member.name}
              </h6>
              <div className='text-label-md text-text-sub-600 mb-7 text-center'>
                {member.role}
              </div>
              <div className='flex items-end gap-3 flex-1 justify-center'>
                <Link
                  href={member.socials.instagram}
                  className='w-11 h-9 shadow-custom-input bg-bg-white-0 rounded-10 flex items-center justify-center group'
                >
                  <RiInstagramFill className='size-6 text-text-soft-400 group-hover:text-text-sub-600 transition-all duration-300' />
                </Link>
                <Link
                  href={member.socials.facebook}
                  className='w-11 h-9 shadow-custom-input bg-bg-white-0 rounded-10 flex items-center justify-center group'
                >
                  <RiFacebookCircleFill className='size-6 text-text-soft-400 group-hover:text-text-sub-600 transition-all duration-300' />
                </Link>
                <Link
                  href={member.socials.twitter}
                  className='w-11 h-9 shadow-custom-input bg-bg-white-0 rounded-10 flex items-center justify-center group'
                >
                  <RiTwitterXLine className='size-6 text-text-soft-400 group-hover:text-text-sub-600 transition-all duration-300' />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='text-paragraph-sm text-text-sub-600 lg:text-center px-6 lg:px-0'>
          Teamwork shapes our culture, empowers new ideas,{' '}
          <span className='text-text-sub-600 text-label-sm lg:flex lg:justify-center'>
            and inspires real progress.
          </span>
        </div>
      </div>
    </div>
  );
}
