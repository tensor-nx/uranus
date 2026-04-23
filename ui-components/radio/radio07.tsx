'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import {
  RiAtLine,
  RiBookmarkLine,
  RiCloseLine,
  RiCodeLine,
  RiGlobalLine,
  RiLinksLine,
  RiLockLine,
  RiUserCommunityLine,
} from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as LinkButton from '@/components/ui/link-button';
import * as Radio from '@/components/ui/radio';

export default function AccessLevelRadio() {
  return (
    <div className='w-full max-w-[520px] rounded-20 bg-bg-white-0 shadow-custom-md'>
      <div className='flex items-center justify-between gap-2 border-b border-stroke-soft-200 px-5 py-4'>
        <div className='flex items-center gap-2'>
          <h3 className='text-label-md text-text-soft-400'>Share Research:</h3>
          <h3 className='text-label-md text-text-sub-600'>
            AI Impact Analysis 2024
          </h3>
        </div>
        <CompactButton.Root variant='ghost' size='large'>
          <CompactButton.Icon as={RiCloseLine} />
        </CompactButton.Root>
      </div>
      <div className='flex flex-col gap-5 p-2.5'>
        <Alert.Root
          className='flex gap-3 p-3.5 pb-4'
          variant='lighter'
          status='feature'
          size='large'
        >
          <Alert.Icon as={RiBookmarkLine} />
          <div className='flex flex-col gap-1'>
            <div className='text-label-sm text-text-strong-950'>
              Citation Requirements
            </div>
            <div className='text-paragraph-sm text-text-strong-950 opacity-[0.72]'>
              This research contains pre-publication data. Users must agree to
              cite the original work and follow academic guidelines.
            </div>
          </div>
        </Alert.Root>

        <div className='flex flex-col gap-4 px-2.5 pb-2.5'>
          <h3 className='text-label-sm text-text-strong-950'>
            Access level settings
          </h3>

          <Radio.Group defaultValue='public' className='flex flex-col gap-4'>
            <LabelPrimitives.Root
              htmlFor='public'
              className='group/radio flex cursor-pointer items-center gap-2'
            >
              <Radio.Item id='public' value='public' />
              <div className='flex flex-1 items-center gap-2'>
                <RiGlobalLine className='size-5 text-text-sub-600' />
                <span className='text-label-sm text-text-sub-600'>
                  Public Access
                </span>
              </div>
            </LabelPrimitives.Root>

            <LabelPrimitives.Root
              htmlFor='institution'
              className='group/radio flex cursor-pointer items-center gap-2'
            >
              <Radio.Item id='institution' value='institution' disabled />
              <div className='flex flex-1 items-center gap-2'>
                <RiUserCommunityLine className='size-5 text-text-soft-400' />
                <div className='flex items-center gap-2'>
                  <span className='text-label-sm text-text-soft-400'>
                    Institution Members
                  </span>
                  <Badge.Root
                    variant='light'
                    color='green'
                    size='medium'
                    className='text-success-dark'
                  >
                    Verified
                  </Badge.Root>
                </div>
              </div>
            </LabelPrimitives.Root>

            <LabelPrimitives.Root
              htmlFor='department'
              className='group/radio flex cursor-pointer items-center gap-2'
            >
              <Radio.Item id='department' value='department' />
              <div className='flex flex-1 items-center gap-2'>
                <RiAtLine className='size-5 text-text-sub-600' />
                <span className='text-label-sm text-text-sub-600'>
                  Department Access
                </span>
              </div>
            </LabelPrimitives.Root>

            <LabelPrimitives.Root
              htmlFor='collaborators'
              className='group/radio flex cursor-pointer items-center gap-2'
            >
              <Radio.Item id='collaborators' value='collaborators' />
              <div className='flex flex-1 items-center gap-2'>
                <RiLockLine className='size-5 text-text-sub-600' />
                <span className='text-label-sm text-text-sub-600'>
                  Research Collaborators
                </span>
              </div>
            </LabelPrimitives.Root>
          </Radio.Group>
        </div>
      </div>

      <div className='flex items-center justify-between gap-3 border-t border-stroke-soft-200 py-4 pl-6 pr-5'>
        <LinkButton.Root variant='gray'>
          <RiCodeLine className='size-5 text-text-sub-600' />
          Embed
        </LinkButton.Root>
        <Button.Root
          variant='neutral'
          mode='stroke'
          size='small'
          className='gap-1 rounded-10'
        >
          <RiLinksLine className='size-5 text-text-sub-600' />
          <span className='text-label-sm text-text-sub-600'>
            Generate access link
          </span>
        </Button.Root>
      </div>
    </div>
  );
}
