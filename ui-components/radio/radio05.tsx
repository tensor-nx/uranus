'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import {
  RiArrowRightSLine,
  RiCloseLine,
  RiEditLine,
  RiGlobalLine,
  RiSearchLine,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as Input from '@/components/ui/input';
import * as LinkButton from '@/components/ui/link-button';
import * as Radio from '@/components/ui/radio';
import * as Select from '@/components/ui/select';
const participantPermissions = [
  {
    value: 'view',
    icon: RiGlobalLine,
    label: 'can view',
  },
  {
    value: 'edit',
    icon: RiEditLine,
    label: 'can edit',
  },
];

export default function BlockRadio() {
  return (
    <div className='w-full max-w-[440px] rounded-20 bg-bg-white-0 shadow-custom-md'>
      <div className='relative flex items-center justify-between border-b border-stroke-soft-200 px-5 py-4'>
        <div className='text-label-md text-text-sub-600'>Create New Event</div>
        <CompactButton.Root variant='ghost' size='large'>
          <CompactButton.Icon as={RiCloseLine} />
        </CompactButton.Root>
      </div>

      <div className='flex flex-col items-start gap-5 p-5'>
        <div className='flex w-full flex-col gap-1'>
          <div className='text-label-sm text-text-strong-950'>Event name</div>
          <Input.Root size='small'>
            <Input.Wrapper>
              <Input.Input type='text' placeholder='AlignUI Community' />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex w-full flex-col gap-3'>
          <div className='text-label-sm text-text-strong-950'>Event type</div>
          <Radio.Group className='flex flex-col gap-3'>
            <div className='group/radio flex items-center gap-2'>
              <Radio.Item id='r1' value='r1' defaultChecked />
              <LabelPrimitives.Root
                htmlFor='r1'
                className='cursor-pointer text-label-sm text-text-sub-600 group-has-[[data-state=checked]]/radio:text-text-strong-950'
              >
                In-Person (Limited capacity)
              </LabelPrimitives.Root>
            </div>

            <div className='group/radio flex items-center gap-2'>
              <Radio.Item id='r2' value='r2' />
              <LabelPrimitives.Root
                htmlFor='r2'
                className='cursor-pointer text-label-sm text-text-sub-600 group-has-[[data-state=checked]]/radio:text-text-strong-950'
              >
                Virtual (Unlimited attendance)
              </LabelPrimitives.Root>
            </div>
          </Radio.Group>
        </div>

        <div className='flex w-full flex-col gap-1'>
          <div className='text-label-sm text-text-strong-950'>
            Add participants
          </div>
          <Input.Root size='small'>
            <Input.Wrapper>
              <Input.Icon as={RiSearchLine} />
              <Input.Input type='text' placeholder='john@example.com' />
              <Select.Root variant='inline' defaultValue='view'>
                <Select.Trigger className='[&_span]:!gap-1'>
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  {participantPermissions.map((item) => (
                    <Select.Item key={item.value} value={item.value}>
                      <Select.ItemIcon as={item.icon} />
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Input.Wrapper>
          </Input.Root>
        </div>

        <LinkButton.Root variant='primary'>
          <RiArrowRightSLine className='size-5 text-primary-base' />
          Advanced settings
        </LinkButton.Root>

        <div className='flex w-full items-center justify-end gap-3'>
          <Button.Root variant='neutral' mode='stroke' size='small'>
            Cancel
          </Button.Root>
          <Button.Root size='small' variant='neutral' className='rounded-10'>
            Create event
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
