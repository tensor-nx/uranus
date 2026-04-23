'use client';

import React from 'react';
import { RiAddLine } from '@remixicon/react';
import { cn } from '@/cn';

import { IconEmptyUser } from '@/components/ui/avatar-empty-icons';
import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Modal from '@/components/ui/modal';

function IconInfoCustom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 16.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm1.116-3.041l.1-.408a1.709 1.709 0 01-.25.083 1.176 1.176 0 01-.308.048c-.193 0-.329-.032-.407-.095-.079-.064-.118-.184-.118-.359a3.514 3.514 0 01.118-.672l.373-1.318c.037-.121.062-.255.075-.4a3.73 3.73 0 00.02-.304.866.866 0 00-.292-.678c-.195-.174-.473-.26-.833-.26-.2 0-.412.035-.636.106-.224.07-.459.156-.704.256l-.1.409c.073-.028.16-.057.262-.087.101-.03.2-.045.297-.045.198 0 .331.034.4.1.07.066.105.185.105.354 0 .093-.01.197-.034.31a6.216 6.216 0 01-.084.36l-.374 1.325c-.033.14-.058.264-.073.374-.015.11-.022.22-.022.325 0 .272.1.496.301.673.201.177.483.265.846.265.236 0 .443-.03.621-.092s.417-.152.717-.27zM11.05 7.85a.772.772 0 00.26-.587.78.78 0 00-.26-.59.885.885 0 00-.628-.244.893.893 0 00-.63.244.778.778 0 00-.264.59c0 .23.088.426.263.587a.897.897 0 00.63.243.888.888 0 00.629-.243z'
        fill='currentColor'
      />
    </svg>
  );
}

const DividerVertical = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn('relative text-stroke-soft-200', className)}
      role='separator'
    >
      <div
        className='absolute left-0 h-full w-full'
        style={{
          background:
            'linear-gradient(180deg, currentColor 4px, transparent 4px) 50% 50% / 1px 8px repeat-y',
        }}
      />
    </div>
  );
};

const DividerHorizontal = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn('relative h-0 w-full text-stroke-soft-200', className)}
      role='separator'
    >
      <div
        className='absolute left-0 h-px w-full'
        style={{
          background:
            'linear-gradient(90deg, currentColor 4px, transparent 4px) 50% 50% / 8px 1px repeat no-repeat',
        }}
      />
    </div>
  );
};

export default function AddWriterModal() {
  const [open, setOpen] = React.useState(true);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Modal.Root defaultOpen open={open} onOpenChange={setOpen}>
      <Modal.Trigger>
        <Button.Root variant='neutral' mode='stroke'>
          Add a writer
        </Button.Root>
      </Modal.Trigger>
      <Modal.Content className='max-w-[536px] shadow-custom-md'>
        <Modal.Header>
          <Modal.Title>
            <span className='text-label-md text-text-sub-600'>
              Add a writer
            </span>
          </Modal.Title>
        </Modal.Header>
        <div className='flex flex-col gap-6 p-5 md:flex-row'>
          <div className='flex flex-col items-center gap-4 py-4'>
            <Avatar.Root size='64'>
              <input
                type='file'
                ref={fileInputRef}
                className='hidden'
                accept='image/*'
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setImageUrl(url);
                  }
                }}
              />
              <Avatar.Image asChild className='text-text-soft-400'>
                <IconEmptyUser />
              </Avatar.Image>
              <Avatar.Indicator position='top'>
                <div className='flex size-[28px] items-center justify-center rounded-full bg-bg-white-0 p-[1.75px]'>
                  <div className='bg-ln-gray-500 flex size-full items-center justify-center rounded-full border border-bg-white-0'>
                    <RiAddLine className='text-text-white-0' />
                  </div>
                </div>
              </Avatar.Indicator>
            </Avatar.Root>
            <div className='flex w-[148px] flex-col items-center justify-center gap-1'>
              <span className=' text-label-sm text-text-strong-950'>
                Upload image
              </span>
              <span className='text-paragraph-xs text-text-sub-600'>
                Max file size: 1MB
              </span>
            </div>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              onClick={handleUploadClick}
            >
              Add Image
            </Button.Root>
          </div>

          <div className='block w-full md:hidden'>
            <DividerHorizontal className='w-full' />
          </div>
          <div className='hidden md:block'>
            <DividerVertical className='h-auto min-h-[200px] w-px' />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-1'>
                <Label.Root htmlFor='email'>
                  Author name
                  <Label.Asterisk />
                </Label.Root>
                <Input.Root>
                  <Input.Wrapper>
                    <Input.Input placeholder='Enter author name' required />
                  </Input.Wrapper>
                </Input.Root>
              </div>

              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-1'>
                  <Label.Root htmlFor='email'>
                    Title
                    <IconInfoCustom className='size-5 text-text-disabled-300' />
                  </Label.Root>
                  <Input.Root>
                    <Input.Wrapper>
                      <Input.Input placeholder='Marketing Manager' required />
                    </Input.Wrapper>
                  </Input.Root>
                </div>

                <div className='flex justify-end gap-3'>
                  <Button.Root
                    variant='neutral'
                    mode='stroke'
                    size='small'
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button.Root>
                  <Button.Root variant='neutral' mode='filled' size='small'>
                    Save Changes
                  </Button.Root>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Content>
    </Modal.Root>
  );
}
