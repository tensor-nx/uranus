'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import { RiUploadLine } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Modal from '@/components/ui/modal';
import * as Tag from '@/components/ui/tag';
import * as Tooltip from '@/components/ui/tooltip';

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

export default function BlockModal() {
  const [open, setOpen] = React.useState(true);
  const [tags, setTags] = React.useState([
    'Digital Painting',
    'Retrowave',
    'NFT',
  ]);
  const [inputValue, setInputValue] = React.useState('');

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const newTag = inputValue.trim();
      if (!tags.some((tag) => tag.toLowerCase() === newTag.toLowerCase())) {
        setTags([...tags, newTag]);
        setInputValue('');
      }
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <Modal.Root defaultOpen open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke'>
          Open Modal
        </Button.Root>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header
          icon={RiUploadLine}
          title='Upload Your Work'
          description='Add tags and do adjustments before uploading.'
        />
        <Modal.Body className='flex flex-col gap-5'>
          <div className='flex flex-col items-start gap-1'>
            <Label.Root htmlFor='tags'>
              Add Tags
              <Label.Sub>(max. 8)</Label.Sub>
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger className='focus:outline-none'>
                    <IconInfoCustomFill className='size-5 text-text-disabled-300' />
                  </Tooltip.Trigger>
                  <Tooltip.Content size='small' className='max-w-72'>
                    Use relevant keywords, separated by commas. Tags should be
                    concise and descriptive.
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
            </Label.Root>

            <Input.Root>
              <Input.Wrapper>
                <Input.Input
                  id='tags'
                  autoFocus
                  placeholder='Add tags...'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={addTag}
                />
              </Input.Wrapper>
            </Input.Root>

            <div className='mt-2 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <Tag.Root key={tag}>
                  {tag}
                  <Tag.DismissButton onClick={() => removeTag(tag)} />
                </Tag.Root>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <div className='text-label-sm text-text-strong-950'>
              Display Preferences
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox.Root id='c1' defaultChecked />
              <LabelPrimitives.Root
                htmlFor='c1'
                className='flex cursor-pointer items-center gap-1 text-paragraph-sm text-text-strong-950'
              >
                Display on profile
                <Badge.Root variant='light' color='yellow' size='small'>
                  NEW
                </Badge.Root>
              </LabelPrimitives.Root>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox.Root id='c2' />
              <LabelPrimitives.Root
                htmlFor='c2'
                className='cursor-pointer text-paragraph-sm text-text-strong-950'
              >
                Disable commenting
              </LabelPrimitives.Root>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <div className='flex-1'>
              <div className='text-label-sm text-text-strong-950'>
                Add to portfolio
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                Choose a portfolio to add your work.
              </div>
            </div>
            <Button.Root variant='neutral' mode='stroke' size='xsmall'>
              Choose
            </Button.Root>
          </div>

          <div className='flex items-center gap-2'>
            <div className='flex-1'>
              <div className='text-label-sm text-text-strong-950'>
                Add Download File
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                Share your file and allow downloads.
              </div>
            </div>
            <Button.Root variant='neutral' mode='stroke' size='xsmall'>
              Add
            </Button.Root>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='small'
              className='w-full'
            >
              Cancel
            </Button.Root>
          </Modal.Close>
          <Button.Root size='small' className='w-full'>
            Upload
          </Button.Root>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}
