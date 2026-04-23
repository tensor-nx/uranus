'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type ToggleGroupSingleProps } from '@radix-ui/react-toggle-group';
import { RiStarSmileLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import { SVGStarFill } from '@/components/ui/svg-rating-icons';
import * as Textarea from '@/components/ui/textarea';
import * as Tooltip from '@/components/ui/tooltip';
import { cn } from '@/utils/cn';

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

const StarRatingCells = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  Omit<ToggleGroupSingleProps, 'type'>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <ToggleGroupPrimitive.Root
      type='single'
      ref={forwardedRef}
      className={cn('flex w-full gap-2', className)}
      {...rest}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <ToggleGroupPrimitive.Item
          key={i}
          value={`${i + 1}`}
          className={cn(
            'group flex h-14 w-full items-center justify-center rounded-10 ring-1 ring-inset ring-stroke-soft-200',
            'transition duration-200 ease-out',
            // hover
            'hover:bg-bg-weak-50 hover:ring-transparent',
          )}
        >
          <SVGStarFill
            className={cn(
              'size-8 text-stroke-sub-300 transition duration-200 ease-out',
              // checked
              'group-has-[~[data-state=on]]:text-yellow-500 group-data-[state=on]:text-yellow-500',
            )}
          />
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
});
StarRatingCells.displayName = 'StarRatingCells';

export default function BlockRatings() {
  const [star, setStar] = React.useState('3');
  const [productName, setProductName] = React.useState('');
  const [productReview, setProductReview] = React.useState('');

  return (
    <div className='w-full max-w-[400px] rounded-20 bg-bg-white-0 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex items-center gap-3.5 px-5 py-4'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
          <RiStarSmileLine className='size-5 text-text-sub-600' />
        </div>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Rate Our Product
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Provide us with feedback for the product.
          </div>
        </div>
      </div>

      <Divider.Root />

      <div className='flex flex-col gap-4 p-5'>
        <div className='flex flex-col gap-2.5'>
          <div className='flex items-center'>
            <Label.Root>Your Rating</Label.Root>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger className='focus:outline-none'>
                  <IconInfoCustomFill className='size-5 text-text-disabled-300' />
                </Tooltip.Trigger>
                <Tooltip.Content size='small' className='max-w-72'>
                  Rate your experience from 1 to 5 stars. Your feedback helps us
                  improve our services.
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <StarRatingCells value={star} onValueChange={setStar} />
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='product-name'>
            Product Name <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Input
                type='text'
                id='product-name'
                placeholder='Macbook Air M1'
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='product-review'>
            Product Review <Label.Sub>(Optional)</Label.Sub>
          </Label.Root>
          <Textarea.Root
            placeholder='Jot down your thoughts...'
            id='product-review'
            value={productReview}
            onChange={(e) => setProductReview(e.target.value)}
            className='min-h-[78px]'
          >
            <Textarea.CharCounter current={productReview.length} max={200} />
          </Textarea.Root>
        </div>

        <div className='flex items-center gap-2'>
          <Checkbox.Root id='c1' />
          <Label.Root className='text-paragraph-sm' htmlFor='c1'>
            Remain ananymous
          </Label.Root>
        </div>
      </div>

      <Divider.Root />

      <div className='grid grid-cols-2 gap-3 px-5 py-4'>
        <Button.Root variant='neutral' mode='stroke' size='small'>
          Cancel
        </Button.Root>
        <Button.Root size='small'>Submit</Button.Root>
      </div>
    </div>
  );
}
