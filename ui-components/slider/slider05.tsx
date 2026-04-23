'use client';

import * as React from 'react';
import {
  RiAddLine,
  RiAlertFill,
  RiMagicLine,
  RiSubtractLine,
} from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as Avatar from '@/components/ui/avatar';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Select from '@/components/ui/select';
import * as Slider from '@/components/ui/slider';

export function ResponsiveSlider() {
  const [storageUnits, setStorageUnits] = React.useState(1);
  const [sliderValue, setSliderValue] = React.useState(0);
  const [billingPeriod, setBillingPeriod] = React.useState('annually');
  const [email, setEmail] = React.useState('james@alignui.com');
  const [companyName, setCompanyName] = React.useState('APEX INC');

  const prices = {
    enterprisePlan: 479.88,
    storageUnit: 287.9,
    monthlyRate: 39.99,
    annualUserPrice: 59.0,
    monthlyUserPrice: 69.0,
  };

  const storageSteps = [
    { value: 0, label: '0TB' },
    { value: 16, label: '1TB' },
    { value: 30, label: '5TB' },
    { value: 46, label: '10TB' },
    { value: 63, label: '25TB' },
    { value: 80, label: '50TB' },
    { value: 100, label: '100TB' },
  ];

  const snapToClosestStep = (val: number) => {
    let closest = storageSteps[0]?.value ?? 0;
    let minDiff = Math.abs(val - closest);
    for (let i = 1; i < storageSteps.length; i++) {
      const diff = Math.abs(val - (storageSteps[i]?.value ?? 0));
      if (diff < minDiff) {
        minDiff = diff;
        closest = storageSteps[i]?.value ?? 0;
      }
    }
    return closest;
  };

  const getActiveStep = (currentValue: number) => {
    const idx = storageSteps.findIndex((step) => step.value === currentValue);
    return idx >= 0 && idx < storageSteps.length ? idx : 0;
  };

  const calculateStoragePrice = (sliderValue: number) => {
    const tbIndex = getActiveStep(sliderValue);
    const tbValue = storageSteps[tbIndex]?.label ?? '0TB';
    const tbAmount = parseInt(tbValue.replace('TB', '')) || 0;
    return tbAmount * prices.monthlyRate;
  };

  const calculateTotalPrice = () => {
    const storagePrice = calculateStoragePrice(sliderValue);
    const unitsPrice = prices.storageUnit * storageUnits;
    const baseUserPrice =
      billingPeriod === 'annually'
        ? prices.annualUserPrice
        : prices.monthlyUserPrice;
    const basePrice = baseUserPrice * 12;

    const subtotal = basePrice + unitsPrice + storagePrice;
    const discount = billingPeriod === 'annually' ? 0.85 : 1;
    const discountedSubtotal = subtotal * discount;

    return {
      subtotal: discountedSubtotal,
      total: discountedSubtotal * 1.18,
      storagePrice,
      unitsPrice,
      basePrice: basePrice * discount,
    };
  };

  const priceDetails = calculateTotalPrice();

  return (
    <div className='shadow-lg w-full max-w-[860px] rounded-3xl bg-bg-white-0 shadow-custom-md'>
      <div className='flex flex-col justify-between sm:flex-row'>
        <div className='flex w-full min-w-0 flex-1 flex-col gap-5 p-5 sm:max-w-[480px]'>
          <div className='flex items-center gap-3'>
            <div className='size-10 rounded-full'>
              <Avatar.Image
                className='size-10 rounded-full'
                src='https://alignui.com/images/logo/apex.svg'
              />
            </div>
            <div className='flex flex-col items-start gap-1'>
              <h1 className='text-label-md text-text-strong-950'>
                Upgrade to enterprise
              </h1>
              <span className='text-label-sm text-text-soft-400'>
                View plans
              </span>
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <Label.Root className='text-text-sub-600'>
                Billing period
              </Label.Root>
              <Select.Root
                value={billingPeriod}
                onValueChange={setBillingPeriod}
              >
                <Select.Trigger className='flex items-center justify-between gap-2 [&>span]:w-full'>
                  <Select.Value />
                  {billingPeriod === 'annually' && (
                    <Badge.Root
                      variant='lighter'
                      color='blue'
                      size='medium'
                      className='shrink-0'
                    >
                      %15 off
                    </Badge.Root>
                  )}
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value='annually'>
                    Annually - $59.00 / user / month
                  </Select.Item>
                  <Select.Item value='monthly'>
                    Monthly - $69.00 / user / month
                  </Select.Item>
                </Select.Content>
              </Select.Root>
            </div>

            <div className='flex flex-col gap-2'>
              <Label.Root className='text-text-sub-600'>
                Storage units
              </Label.Root>
              <div className='flex flex-col gap-3 rounded-2xl border border-stroke-soft-200 px-2 pb-2 pt-4'>
                <div className='flex flex-col gap-1 px-2'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-label-md text-text-strong-950'>
                      Storage capacity
                    </h3>
                    <div className='flex items-center overflow-hidden rounded-md border border-stroke-soft-200'>
                      <CompactButton.Root
                        onClick={() =>
                          setStorageUnits((prev) => Math.max(1, prev - 1))
                        }
                        className='hover:bg-bg-weak-100 flex size-7 items-center justify-center rounded-none border-0 border-stroke-soft-200 bg-bg-weak-50'
                      >
                        <RiSubtractLine className='size-5 text-text-sub-600' />
                      </CompactButton.Root>
                      <div className='flex size-7 items-center justify-center border-l border-r border-stroke-soft-200 bg-bg-white-0 text-paragraph-sm text-text-strong-950'>
                        {storageUnits}
                      </div>
                      <CompactButton.Root
                        onClick={() => setStorageUnits((prev) => prev + 1)}
                        className='hover:bg-bg-soft-50 flex size-7 items-center justify-center rounded-none border-0 border-stroke-soft-200 bg-bg-weak-50'
                      >
                        <RiAddLine className='size-5 text-text-sub-600' />
                      </CompactButton.Root>
                    </div>
                  </div>
                  <p className='text-paragraph-sm text-text-sub-600'>
                    Select storage units for your organization
                  </p>
                </div>
                <Alert.Root
                  variant='lighter'
                  status='feature'
                  className='py-1.5 pr-1.5'
                >
                  <Alert.Icon
                    as={RiAlertFill}
                    className='size-4 text-warning-base'
                  />
                  <span className='text-label-xs text-text-sub-600'>
                    Minimum storage requirement is 1TB for Enterprise plans
                  </span>
                </Alert.Root>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <Label.Root className='text-text-sub-600'>
                Storage plan
              </Label.Root>
              <div className='rounded-2xl border border-stroke-soft-200 p-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col gap-1'>
                    <h3 className='text-label-md text-text-strong-950'>
                      Enterprise storage
                    </h3>
                    <p className='text-paragraph-sm text-text-sub-600'>
                      500GB included + 5TB /month
                    </p>
                  </div>
                  <span className='text-sub-600 text-label-sm'>
                    ${prices.monthlyRate}
                    <span className='text-text-soft-400'>/ month</span>
                  </span>
                </div>
                <Slider.Root
                  value={[sliderValue]}
                  min={0}
                  max={100}
                  step={1}
                  className='mt-2'
                  onValueChange={(value) => {
                    const snapped = snapToClosestStep(value[0] ?? 0);
                    setSliderValue(snapped);
                  }}
                >
                  <Slider.Thumb />
                </Slider.Root>
                <div className='text-sm mt-2 flex justify-between text-text-sub-600'>
                  {storageSteps.map((step, index) => (
                    <span
                      key={step.label}
                      className={`text-label-xs ${
                        step.value === sliderValue
                          ? 'text-text-sub-600'
                          : 'text-text-soft-400'
                      }`}
                    >
                      {step.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <Label.Root className='text-text-sub-600'>
                Company details
              </Label.Root>
              <div className='flex flex-col gap-2'>
                <Input.Root>
                  <Input.Wrapper>
                    <Input.Input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Email'
                    />
                  </Input.Wrapper>
                </Input.Root>
                <Input.Root>
                  <Input.Wrapper>
                    <Input.Input
                      type='text'
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder='Company name'
                    />
                  </Input.Wrapper>
                </Input.Root>
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-full min-w-0 flex-1 flex-col gap-4 rounded-2xl bg-bg-white-0 p-2 sm:max-w-[380px]'>
          <div className='flex w-full min-w-0 flex-1 flex-col gap-4 rounded-2xl bg-bg-weak-50 p-6'>
            <h2 className='text-label-md text-text-sub-600'>Summary</h2>
            <div className='flex flex-1 flex-col gap-4'>
              <div className='flex justify-between'>
                <span className='text-label-sm text-text-soft-400'>
                  1× Enterprise Plan 5TB
                </span>
                <span className='text-label-sm text-text-sub-600'>
                  ${priceDetails.basePrice.toFixed(2)}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-label-sm text-text-soft-400'>
                  {storageUnits}× Storage Unit(s)
                </span>
                <span className='text-label-sm text-text-sub-600'>
                  ${priceDetails.unitsPrice.toFixed(2)}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-label-sm text-text-soft-400'>
                  Storage Plan (
                  {storageSteps[getActiveStep(sliderValue)]?.label ?? '0TB'})
                </span>
                <span className='text-label-sm text-text-sub-600'>
                  ${priceDetails.storagePrice.toFixed(2)}
                </span>
              </div>
              <div className='flex justify-between border-t border-stroke-soft-200 pt-4'>
                <span className='text-label-sm text-text-sub-600'>
                  Subtotal
                </span>
                <span className='text-label-sm text-text-sub-600'>
                  ${priceDetails.subtotal.toFixed(2)}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-label-sm text-text-sub-600'>
                  Total at renewal
                </span>
                <span className='text-label-sm text-text-sub-600'>
                  ${priceDetails.total.toFixed(2)}
                </span>
              </div>
              <div className='flex justify-between font-medium'>
                <span className='text-label-sm text-text-sub-600'>Due now</span>
                <span className='text-label-sm text-text-sub-600'>
                  ${priceDetails.total.toFixed(2)}
                </span>
              </div>
              <Button.Root className='w-full' variant='primary'>
                Upgrade now
              </Button.Root>
            </div>
            <div className='flex items-center gap-2 text-label-sm text-text-soft-400'>
              <RiMagicLine className='size-4' />
              <span className='text-label-sm text-text-sub-600'>
                Plan activates upon payment.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResponsiveSliderDemo() {
  return <ResponsiveSlider />;
}
