'use client';

import { useEffect, useRef, useState } from 'react';
import {
  RiArrowLeftLongLine,
  RiArrowRightLongLine,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterXLine,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import { cn } from '@/utils/cn';
const teamData = [
  {
    id: 'member1',
    name: 'James Turner',
    role: 'Brand Strategy Director',
    image: 'https://alignui.com/images/blocks/teams-5-image-4.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member5',
    name: 'Sarah Bennett',
    role: 'Brand Strategy Director',
    image: 'https://alignui.com/images/blocks/teams-5-image-5.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member6',
    name: 'Daniel Kim',
    role: 'Creative Marketing Partner',
    image: 'https://alignui.com/images/blocks/teams-5-image-6.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member7',
    name: 'Sophia Williams',
    role: 'Experience Innovation Lead',
    image: 'https://alignui.com/images/blocks/teams-5-image-7.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member4',
    name: 'Emily Park',
    role: 'Digital Solutions Expert',
    image: 'https://alignui.com/images/blocks/teams-5-image-1.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member2',
    name: 'Ommar Johnson',
    role: 'Product Designer',
    image: 'https://alignui.com/images/blocks/teams-5-image-2.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
  {
    id: 'member3',
    name: 'Emma Wright',
    role: 'Experience Innovation Lead',
    image: 'https://alignui.com/images/blocks/teams-5-image-3.png',
    socials: {
      instagram: '/',
      facebook: '/',
      twitter: '/',
    },
  },
];

const DESKTOP_SLOTS = [
  { offset: -3, size: 64, radius: 'rounded-2xl' },
  { offset: -2, size: 164, radius: 'rounded-[28px]' },
  { offset: -1, size: 264, radius: 'rounded-[36px]' },
  { offset: 0, size: 364, radius: 'rounded-[40px]' },
  { offset: 1, size: 264, radius: 'rounded-[36px]' },
  { offset: 2, size: 164, radius: 'rounded-[28px]' },
  { offset: 3, size: 64, radius: 'rounded-2xl' },
];

const MOBILE_SLOTS = [
  { offset: -3, size: 120, radius: 'rounded-[20px]' },
  { offset: -2, size: 120, radius: 'rounded-[20px]' },
  { offset: -1, size: 120, radius: 'rounded-[20px]' },
  { offset: 0, size: 220, radius: 'rounded-[24px]' },
  { offset: 1, size: 120, radius: 'rounded-[20px]' },
  { offset: 2, size: 120, radius: 'rounded-[20px]' },
  { offset: 3, size: 120, radius: 'rounded-[20px]' },
];

export default function Teams05() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevActiveIndexRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    prevActiveIndexRef.current = activeIndex;
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + teamData.length) % teamData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % teamData.length);
  };

  const activeMember = teamData[activeIndex];
  const SLOTS = isMobile ? MOBILE_SLOTS : DESKTOP_SLOTS;
  const activeSize = isMobile ? 220 : 364;
  const GAP = isMobile ? 16 : 24;

  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <style>{`
        @keyframes teams-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className='flex flex-col items-center gap-8'>
        <div className='mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-6 md:px-7 lg:items-center'>
          <div className='flex flex-col items-start gap-3 lg:items-center'>
            <Badge.Root
              variant='lighter'
              className='bg-bg-weak-50 text-label-sm text-text-sub-600 h-7 w-fit rounded-[9px] px-2.5 normal-case'
            >
              Driven by passion
            </Badge.Root>
            <h3 className='text-title-h4 text-text-strong-950 lg:text-title-h3 font-[550]'>
              The team behind bold solutions
            </h3>
          </div>
          <p className='text-paragraph-md text-text-sub-600'>
            Diverse talent, creative thinking, and united collaboration.
          </p>
        </div>

        <div className='flex w-full items-center gap-2 px-6 md:px-7 lg:w-auto lg:px-0'>
          <button
            onClick={handlePrev}
            className='group border-stroke-soft-200 bg-bg-white-0 hover:bg-bg-weak-50 flex flex-1 cursor-pointer items-center justify-center rounded-full border px-4 py-1 transition-colors hover:border-transparent disabled:cursor-not-allowed lg:flex-none'
          >
            <RiArrowLeftLongLine className='text-text-soft-400 group-hover:text-text-sub-600 size-5 transition-colors' />
          </button>
          <button
            onClick={handleNext}
            className='group border-stroke-soft-200 bg-bg-white-0 hover:bg-bg-weak-50 flex flex-1 cursor-pointer items-center justify-center rounded-full border px-4 py-1 transition-colors hover:border-transparent disabled:cursor-not-allowed lg:flex-none'
          >
            <RiArrowRightLongLine className='text-text-soft-400 group-hover:text-text-sub-600 size-5 transition-colors' />
          </button>
        </div>

        <div
          className='relative w-full overflow-hidden'
          style={{ height: activeSize }}
        >
          {teamData.map((member, idx) => {
            const total = teamData.length;
            let offset = idx - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            let prevOffset = idx - prevActiveIndexRef.current;
            if (prevOffset > total / 2) prevOffset -= total;
            if (prevOffset < -total / 2) prevOffset += total;
            const isWrapping = Math.abs(offset - prevOffset) > 1;

            const slot = SLOTS.find((s) => s.offset === offset);
            const isVisible = Math.abs(offset) <= 3;
            const isActive = offset === 0;

            const size = slot?.size ?? (isMobile ? 120 : 64);
            const radius =
              slot?.radius ?? (isMobile ? 'rounded-[20px]' : 'rounded-2xl');
            const zIndex = isVisible ? 4 - Math.abs(offset) : 0;

            const centerSlotIdx = SLOTS.findIndex((s) => s.offset === 0);

            let xOffset = 0;
            if (offset !== 0) {
              const dir = offset > 0 ? 1 : -1;
              const absOff = Math.abs(offset);
              xOffset = SLOTS[centerSlotIdx].size / 2 + GAP;
              for (let i = 1; i < absOff; i++) {
                const s = SLOTS.find((s) => s.offset === i);
                xOffset += (s?.size ?? (isMobile ? 120 : 64)) + GAP;
              }
              xOffset += size / 2;
              xOffset *= dir;
            }

            return (
              <div
                key={member.id}
                className={cn(
                  radius,
                  'absolute top-1/2 left-1/2 shrink-0 overflow-hidden bg-gray-200',
                  !isWrapping && 'transition-all duration-500 ease-in-out',
                  !isVisible && 'pointer-events-none opacity-0',
                )}
                style={{
                  width: size,
                  height: size,
                  zIndex,
                  transform: `translate(calc(-50% + ${xOffset}px), -50%)`,
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={364}
                  height={364}
                  className={cn(
                    'size-full object-cover',
                    !isWrapping && 'transition-all duration-500 ease-in-out',
                    !isActive && 'mix-blend-luminosity',
                  )}
                />
              </div>
            );
          })}
        </div>

        <div className='-mt-2 flex flex-col items-center gap-5'>
          <div
            key={activeMember.id}
            className='flex flex-col items-center gap-1 lg:gap-2'
            style={{ animation: 'teams-fade-in 0.4s ease-out' }}
          >
            <div className='text-title-h6 text-text-strong-950 font-[550]'>
              {activeMember.name}
            </div>
            <div className='text-paragraph-md text-text-sub-600'>
              {activeMember.role}
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Link href={activeMember.socials.instagram} className='group flex'>
              <RiInstagramFill className='text-text-soft-400 group-hover:text-text-sub-600 size-6 transition-all duration-300' />
            </Link>
            <Link href={activeMember.socials.facebook} className='group flex'>
              <RiFacebookCircleFill className='text-text-soft-400 group-hover:text-text-sub-600 size-6 transition-all duration-300' />
            </Link>
            <Link href={activeMember.socials.twitter} className='group flex'>
              <RiTwitterXLine className='text-text-soft-400 group-hover:text-text-sub-600 size-6 transition-all duration-300' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
