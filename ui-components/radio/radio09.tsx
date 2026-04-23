'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import { RiCloseLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';
import * as Radio from '@/components/ui/radio';
import * as Select from '@/components/ui/select';
import * as Textarea from '@/components/ui/textarea';

function IconInfoCustomFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      fill='none'
      viewBox='0 0 20 20'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M10 16.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm1.116-3.041l.1-.408a1.709 1.709 0 01-.25.083 1.176 1.176 0 01-.308.048c-.193 0-.329-.032-.407-.095-.079-.064-.118-.184-.118-.359a3.514 3.514 0 01.118-.672l.373-1.318c.037-.121.062-.255.075-.4a3.73 3.73 0 00.02-.304.866.866 0 00-.292-.678c-.195-.174-.473-.26-.833-.26-.2 0-.412.035-.636.106a9.37 9.37 0 00-.704.256l-.1.409a3.49 3.49 0 01.262-.087c.101-.03.2-.045.297-.045.198 0 .331.034.4.1.07.066.105.185.105.354 0 .093-.01.197-.034.31a6.216 6.216 0 01-.084.36l-.374 1.325c-.033.14-.058.264-.073.374a2.42 2.42 0 00-.022.325c0 .272.1.496.301.673.201.177.483.265.846.265.236 0 .443-.03.621-.092s.417-.152.717-.27zM11.05 7.85a.772.772 0 00.26-.587.78.78 0 00-.26-.59.885.885 0 00-.628-.244.893.893 0 00-.63.244.778.778 0 00-.264.59c0 .23.088.426.263.587a.897.897 0 00.63.243.888.888 0 00.629-.243z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export default function InviteMemberRadio() {
  const [value, setValue] = React.useState('');

  return (
    <div className='w-full max-w-[464px] rounded-20 bg-bg-white-0 shadow-custom-md'>
      <div className='flex flex-col gap-1 px-5 py-4'>
        <div className='flex items-center justify-between gap-2'>
          <h3 className='text-label-md text-text-strong-950'>
            Invite team member
          </h3>
          <CompactButton.Root variant='ghost' size='large'>
            <CompactButton.Icon as={RiCloseLine} />
          </CompactButton.Root>
        </div>
        <div className='text-paragraph-sm text-text-sub-600'>
          Set member access and permissions.
        </div>
      </div>

      <div className='px-2 py-0.5'>
        <Divider.Root variant='line' />
      </div>

      <div className='flex flex-col gap-4 p-5'>
        <Radio.Group defaultValue='author' className='flex flex-col gap-4'>
          <LabelPrimitives.Root
            htmlFor='viewer'
            className='group/radio flex cursor-pointer items-start gap-3'
          >
            <Radio.Item id='viewer' value='viewer' />
            <div className='flex flex-col gap-1'>
              <span className='text-label-sm text-text-strong-950'>Viewer</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Can view and comment on projects.
              </span>
            </div>
          </LabelPrimitives.Root>

          <LabelPrimitives.Root
            htmlFor='author'
            className='group/radio flex cursor-pointer items-start gap-3'
          >
            <Radio.Item id='author' value='author' />
            <div className='flex flex-col gap-1'>
              <span className='text-label-sm text-text-strong-950'>Author</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Can edit project content and create new items.
              </span>
            </div>
          </LabelPrimitives.Root>

          <LabelPrimitives.Root
            htmlFor='manager'
            className='group/radio flex cursor-pointer items-start gap-3'
          >
            <Radio.Item id='manager' value='manager' />
            <div className='flex flex-col gap-1'>
              <span className='text-label-sm text-text-strong-950'>
                Manager
              </span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Manage projects, teams and view all reports.
              </span>
            </div>
          </LabelPrimitives.Root>

          <LabelPrimitives.Root
            htmlFor='admin'
            className='group/radio flex cursor-pointer items-start gap-3'
          >
            <Radio.Item id='admin' value='admin' />
            <div className='flex flex-col gap-1'>
              <span className='text-label-sm text-text-strong-950'>Admin</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Full admin control with billing and security access.
              </span>
            </div>
          </LabelPrimitives.Root>
        </Radio.Group>
      </div>

      <div className='px-2 py-0.5'>
        <Divider.Root variant='line' />
      </div>

      <div className='flex flex-col gap-4 p-5'>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-1'>
            <span className='text-label-sm text-text-strong-950'>
              Project access
            </span>
            <IconInfoCustomFill className='size-5 text-text-disabled-300' />
          </div>
          <Select.Root defaultValue='all'>
            <Select.Trigger>
              <Select.Value placeholder='Select project access' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='all'>All active projects</Select.Item>
              <Select.Item value='selected'>Selected projects</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <div>
            <span className='text-label-sm text-text-strong-950'>
              Welcome message
            </span>{' '}
            <span className='text-paragraph-sm text-text-sub-600'>
              (Optional)
            </span>
          </div>
          <Textarea.Root
            placeholder='Add a personalized message to your invitation...'
            className='min-h-[54px] resize-none'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <Textarea.CharCounter current={value.length} max={200} />
          </Textarea.Root>
        </div>
      </div>

      <div className='px-2 py-0.5'>
        <Divider.Root variant='line' />
      </div>

      <div className='flex items-center justify-between gap-3 px-6 py-4'>
        <div className='flex gap-3'>
          <LinkButton.Root>Cancel</LinkButton.Root>
        </div>
        <div className='flex gap-3'>
          <Button.Root variant='neutral' mode='stroke' size='small'>
            Save as draft
          </Button.Root>
          <Button.Root size='small' variant='neutral' className='rounded-10'>
            Send invitation
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
