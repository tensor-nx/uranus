'use client';

import * as React from 'react';
import { RiStarFill } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Radio from '@/components/ui/radio';
import * as SegmentedControl from '@/components/ui/segmented-control';
const PLAN_LABELS = {
  MOST_POPULAR: 'Most Popular',
  CURRENT: 'Current',
  BUSINESS: 'Business',
} as const;

type PlanLabel = (typeof PLAN_LABELS)[keyof typeof PLAN_LABELS];

const plans: Record<
  'monthly' | 'yearly',
  Record<
    StorageSize,
    {
      price: number;
      description: string;
      label: PlanLabel;
    }
  >
> = {
  monthly: {
    '100gb': {
      price: 8,
      description: 'Basic file storage',
      label: PLAN_LABELS.CURRENT,
    },
    '1tb': {
      price: 15,
      description: 'Advanced file storage',
      label: PLAN_LABELS.MOST_POPULAR,
    },
    '5tb': {
      price: 30,
      description: 'Enterprise-grade storage',
      label: PLAN_LABELS.BUSINESS,
    },
  },
  yearly: {
    '100gb': {
      price: 48,
      description: 'Basic file storage',
      label: PLAN_LABELS.CURRENT,
    },
    '1tb': {
      price: 80,
      description: 'Advanced file storage',
      label: PLAN_LABELS.MOST_POPULAR,
    },
    '5tb': {
      price: 180,
      description: 'Enterprise-grade storage',
      label: PLAN_LABELS.BUSINESS,
    },
  },
};

type StorageSize = '100gb' | '1tb' | '5tb';

const storageLabels: Record<StorageSize, string> = {
  '100gb': '100GB Storage',
  '1tb': '1TB Storage',
  '5tb': '5TB Storage',
};

const planBadgeConfig: Record<
  PlanLabel,
  { icon?: React.ComponentType; color?: 'blue' } | null
> = {
  [PLAN_LABELS.MOST_POPULAR]: { icon: RiStarFill, color: 'blue' },
  [PLAN_LABELS.CURRENT]: {},
  [PLAN_LABELS.BUSINESS]: null,
};

const PlanBadge = ({ label }: { label: PlanLabel }) => {
  if (label === PLAN_LABELS.BUSINESS) {
    return <span className='text-label-sm text-text-soft-400'>({label})</span>;
  }

  const config = planBadgeConfig[label];

  return (
    <Badge.Root size='medium' variant='lighter' color={config?.color}>
      {config?.icon && <Badge.Icon as={config.icon} />}
      {label}
    </Badge.Root>
  );
};

export default function StoragePlanSelector() {
  const [billingType, setBillingType] = React.useState<'monthly' | 'yearly'>(
    'yearly',
  );
  const [selectedPlan, setSelectedPlan] = React.useState<StorageSize>('1tb');

  return (
    <div className='w-full max-w-[852px] rounded-3xl bg-bg-white-0 shadow-custom-md'>
      <div className='flex flex-col md:flex-row'>
        {/* Left Section */}
        <div className='flex w-full flex-col gap-5 p-5 md:max-w-[480px] md:border-r md:border-stroke-soft-200'>
          <div className='flex items-center justify-between gap-5'>
            <h2 className='text-label-lg text-text-strong-950'>
              Choose storage plan
            </h2>
            <SegmentedControl.Root
              className='shrink-0'
              defaultValue='monthly'
              value={billingType}
              onValueChange={(value) =>
                setBillingType(value as 'monthly' | 'yearly')
              }
            >
              <SegmentedControl.List>
                <SegmentedControl.Trigger
                  value='monthly'
                  className='max-h-[24px] max-w-[76px] px-[17.5px] transition-shadow duration-300 data-[state=active]:shadow-custom-xs'
                >
                  <span
                    className={`text-label-sm ${billingType === 'monthly' ? 'text-text-sub-600' : 'text-text-soft-400'}`}
                  >
                    Monthly
                  </span>
                </SegmentedControl.Trigger>
                <SegmentedControl.Trigger
                  value='yearly'
                  className='max-h-[24px] max-w-[76px] px-[17.5px] transition-shadow duration-300 data-[state=active]:shadow-custom-xs'
                >
                  <span
                    className={`text-label-sm ${billingType === 'yearly' ? 'text-text-sub-600' : 'text-text-soft-400'}`}
                  >
                    Yearly
                  </span>
                </SegmentedControl.Trigger>
              </SegmentedControl.List>
            </SegmentedControl.Root>
          </div>

          <Radio.Group
            value={selectedPlan}
            onValueChange={(value) => setSelectedPlan(value as StorageSize)}
            className='flex w-full flex-col gap-3.5'
          >
            {Object.entries(plans[billingType]).map(([size, plan]) => (
              <div
                key={size}
                onClick={() => setSelectedPlan(size as StorageSize)}
                className={`cursor-pointer rounded-2xl border px-6 py-3.5 transition-all duration-200 ease-in-out ${
                  selectedPlan === size
                    ? 'bg-primary-lighter border-primary-base'
                    : 'hover:bg-bg-soft-50 border-stroke-soft-200'
                }`}
              >
                <div className='flex items-center justify-between gap-3.5'>
                  <div className='flex items-center gap-3'>
                    <Radio.Item
                      id={size}
                      value={size}
                      className='transition-all duration-200 ease-in-out'
                    />
                    <div>
                      <div
                        className={`flex flex-wrap items-center ${
                          plan.label === PLAN_LABELS.MOST_POPULAR
                            ? 'gap-[6px]'
                            : 'gap-1'
                        }`}
                      >
                        <span className='text-label-sm text-text-strong-950'>
                          {storageLabels[size as StorageSize]}
                        </span>
                        {plan.label && <PlanBadge label={plan.label} />}
                      </div>
                      <div className='text-paragraph-sm text-text-sub-600'>
                        {plan.description}
                      </div>
                    </div>
                  </div>
                  <div className='text-right text-label-sm text-text-sub-600'>
                    ${plans[billingType][size as StorageSize].price} per{' '}
                    {billingType === 'monthly' ? 'month' : 'year'}
                  </div>
                </div>
              </div>
            ))}
          </Radio.Group>
        </div>

        {/* Right Section */}
        <div className='w-full flex-1 p-5 md:max-w-[372px]'>
          <div className='flex h-full flex-col justify-between gap-5'>
            <div className='flex w-full flex-col gap-5'>
              <h3 className='text-label-lg text-text-strong-950'>Summary</h3>
              <div className='flex w-full flex-col gap-4'>
                <div className='flex justify-between text-text-sub-600'>
                  <span className='text-label-sm text-text-soft-400'>
                    Current plan
                  </span>
                  <span className='text-label-sm text-text-soft-400'>
                    $8 per month
                  </span>
                </div>
                <div className='flex justify-between text-text-sub-600'>
                  <span className='text-label-sm text-text-sub-600'>
                    New plan
                  </span>
                  <span className='text-label-sm text-text-sub-600'>
                    ${plans[billingType][selectedPlan].price} per {billingType}
                  </span>
                </div>
                <div className='flex justify-between border-t border-stroke-soft-200 pt-4 font-medium'>
                  <span className='text-label-sm text-text-sub-600'>Total</span>
                  <span className='text-label-sm text-text-sub-600'>
                    ${plans[billingType][selectedPlan].price} per {billingType}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex w-full justify-end gap-3'>
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='small'
                className='rounded-10'
              >
                Cancel
              </Button.Root>
              <Button.Root
                variant='primary'
                size='small'
                className='rounded-10'
              >
                Change plan
              </Button.Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
