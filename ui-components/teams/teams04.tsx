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
    name: 'James Turner',
    role: 'Brand Strategy Director',
    image: 'https://alignui.com/images/blocks/teams-4-image-1.jpg',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member2',
    name: 'Emily Park',
    role: 'Digital Solutions Expert',
    image: 'https://alignui.com/images/blocks/teams-4-image-2.jpg',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member3',
    name: 'Daniel Kim',
    role: 'Creative Marketing Partner',
    image: 'https://alignui.com/images/blocks/teams-4-image-3.jpg',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member4',
    name: 'Sophia Williams',
    role: 'Experience Innovation Lead',
    image: 'https://alignui.com/images/blocks/teams-4-image-4.jpg',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member5',
    name: 'Emma Wright',
    role: 'Product Design Manager',
    image: 'https://alignui.com/images/blocks/teams-4-image-5.jpg',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
];

export default function Teams04() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <div className='max-w-7xl mx-auto px-6 lg:px-7'>
        <div className='flex flex-col lg:items-center mb-8 lg:mb-16'>
          <Badge.Root
            variant='lighter'
            className='w-fit px-2.5 h-7 text-label-sm text-text-sub-600 normal-case rounded-[9px] bg-bg-weak-50 mb-3'
          >
            Together, we innovate
          </Badge.Root>
          <h3 className='text-title-h4 lg:text-title-h3 !font-[550] text-text-strong-950 mb-4'>
            Building ideas, shaping futures
          </h3>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center '>
            Pushing limits, sharing ideas, and building lasting impact.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-6'>
          {teamData.map((member) => (
            <div
              key={member.id}
              className='flex flex-1 flex-row lg:flex-col gap-6 lg:items-center'
            >
              <Image
                src={member.image}
                alt={member.name}
                width={180}
                height={180}
                className='size-22 lg:size-40 xl:size-45 shrink-0 rounded-full'
              />
              <div className='flex flex-col lg:items-center flex-1'>
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
          ))}
        </div>
      </div>
    </div>
  );
}
