'use client';

import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
const logos = [
	{
		src: 'https://alignui.com/images/blocks/brand-social-logo-1.svg',
		darkSrc: 'https://alignui.com/images/blocks/brand-social-logo-1-dark.svg',
		alt: 'brand-social',
	},
	{
		src: 'https://alignui.com/images/blocks/brand-social-logo-2.svg',
		darkSrc: 'https://alignui.com/images/blocks/brand-social-logo-2-dark.svg',
		alt: 'brand-social',
	},
	{
		src: 'https://alignui.com/images/blocks/brand-social-logo-3.svg',
		darkSrc: 'https://alignui.com/images/blocks/brand-social-logo-3-dark.svg',
		alt: 'brand-social',
	},
	{
		src: 'https://alignui.com/images/blocks/brand-social-logo-4.svg',
		darkSrc: 'https://alignui.com/images/blocks/brand-social-logo-4-dark.svg',
		alt: 'brand-social',
	},
	{
		src: 'https://alignui.com/images/blocks/brand-social-logo-5.svg',
		darkSrc: 'https://alignui.com/images/blocks/brand-social-logo-5-dark.svg',
		alt: 'brand-social',
	},
	{
		src: 'https://alignui.com/images/blocks/brand-social-logo-6.svg',
		darkSrc: 'https://alignui.com/images/blocks/brand-social-logo-6-dark.svg',
		alt: 'brand-social',
	},
	{
		src: 'https://alignui.com/images/blocks/brand-social-logo-7.svg',
		darkSrc: 'https://alignui.com/images/blocks/brand-social-logo-7-dark.svg',
		alt: 'brand-social',
	},
	{
		src: 'https://alignui.com/images/blocks/brand-social-logo-8.svg',
		darkSrc: 'https://alignui.com/images/blocks/brand-social-logo-8-dark.svg',
		alt: 'brand-social',
	},
];

const testimonials = [
	{
		logo: 'https://alignui.com/images/blocks/brand-social-company-1.svg',
		darkLogo: 'https://alignui.com/images/blocks/brand-social-company-1-dark.svg',
		company: 'Synergy',
		text: 'We achieved great results after using this tool.',
		highlight: 'Everything is now faster and more organized.',
		avatar: 'https://alignui.com/images/blocks/brand-social-avatar-1.png',
		name: 'Sophia W.',
		role: 'Head of Operations',
	},
	{
		logo: 'https://alignui.com/images/blocks/brand-social-company-2.svg',
		darkLogo: 'https://alignui.com/images/blocks/brand-social-company-2-dark.svg',
		company: 'Catalyst',
		text: 'This product made our workflow much simpler.',
		highlight: 'Tasks are completed with less effort.',
		avatar: 'https://alignui.com/images/blocks/brand-social-avatar-2.png',
		name: 'Matthew J.',
		role: 'UX Researcher',
	},
	{
		logo: 'https://alignui.com/images/blocks/brand-social-company-3.svg',
		darkLogo: 'https://alignui.com/images/blocks/brand-social-company-3-dark.svg',
		company: 'Horizon',
		text: 'We noticed huge improvements in our process.',
		highlight: 'It saved us time and improved accuracy.',
		avatar: 'https://alignui.com/images/blocks/brand-social-avatar-3.png',
		name: 'Juma O.',
		role: 'Support Engineer',
	},
];

export default function BrandSocial01() {
	return (
		<div className='bg-bg-white-0 w-full'>
		<div className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-3 py-10 md:gap-10 md:px-7 md:py-16 lg:py-24'>
		<div className='flex flex-col px-3 md:items-center md:px-0'>
		<Badge.Root
		variant='stroke'
		className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit !gap-1 rounded-[9px] pr-[10px] pl-[7px] normal-case ring-transparent'
		>
		<Badge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
		Brands & Social proof
		</Badge.Root>
		<h1 className='md:text-title-h3 text-title-h4 text-text-strong-950 mb-4 !font-[550] md:text-center'>
		Trusted by leading brands worldwide
		</h1>
		<p className='text-paragraph-md text-text-sub-600 max-w-[528px] md:text-center'>
		Powering organizations that turn structure, speed, and clarity into{' '}
		<span className='text-label-md'>better product outcomes.</span>
		</p>
		</div>
		<div className='flex flex-col gap-6 md:gap-10'>
		<div className='flex flex-col gap-1.5'>
		<div className='bg-bg-weak-25 rounded-[20px] py-8 md:rounded-[28px] md:px-5 md:py-7 lg:px-12 lg:py-10'>
		<div className='no-scrollbar flex items-center justify-between gap-8 overflow-x-auto px-7 md:gap-0 md:overflow-visible md:px-0'>
		{logos.map((logo) => (
									<span key={logo.src}>
										<Image
											src={logo.src}
											alt={logo.alt}
											width={80}
											height={24}
											className='h-6 w-auto dark:hidden md:h-5 lg:h-6'
										/>
										<Image
											src={logo.darkSrc}
											alt={logo.alt}
											width={80}
											height={24}
											className='hidden h-6 w-auto dark:block md:h-5 lg:h-6'
										/>
									</span>
								))}
		</div>
		</div>
		<div className='grid grid-cols-1 gap-1.5 md:grid-cols-3'>
		{testimonials.map((item) => (
								<div
									key={item.name}
									className='bg-bg-weak-25 flex flex-col justify-between gap-7 rounded-[24px] p-7 md:gap-5 md:rounded-[28px] md:p-4 lg:gap-9 lg:p-9'
								>
									<div className='flex flex-col gap-7 md:gap-5 lg:gap-9'>
										<div className='flex items-center'>
											<Image
												src={item.logo}
												alt={item.company}
												width={106}
												height={24}
												className='h-6 w-auto dark:hidden md:h-5 lg:h-6'
											/>
											<Image
												src={item.darkLogo}
												alt={item.company}
												width={106}
												height={24}
												className='hidden h-6 w-auto dark:block md:h-5 lg:h-6'
											/>
										</div>
										<p className='xl:text-title-h6 lg:text-paragraph-lg md:text-paragraph-sm text-label-lg text-text-sub-600 md:!font-[550]'>
											{item.text}{' '}
											<span className='text-text-strong-950'>
												{item.highlight}
											</span>
										</p>
									</div>
									<div className='flex items-center justify-between'>
										<div className='flex items-center gap-2.5'>
											<Image
												src={item.avatar}
												alt={item.name}
												width={20}
												height={20}
												className='size-5 rounded-full'
											/>
											<span className='lg:text-label-md md:text-label-xs text-label-md text-text-strong-950'>
												{item.name}
											</span>
										</div>
										<span className='lg:text-label-sm md:text-label-2xs text-label-sm text-text-soft-400'>
											{item.role}
										</span>
									</div>
								</div>
							))}
		</div>
		</div>
		<div className='text-paragraph-sm text-text-soft-400 mx-auto md:max-w-[330px] md:text-center'>
		Start building trust by showcasing the partners{' '}
		<span className='text-label-sm text-text-sub-600'>
		that power your success.
		</span>
		</div>
		</div>
		</div>
		</div>
	);
}
