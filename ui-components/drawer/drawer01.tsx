'use client';

import * as React from 'react';
import * as LabelPrimivites from '@radix-ui/react-label';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Drawer from '@/components/ui/drawer';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Radio from '@/components/ui/radio';
import * as Select from '@/components/ui/select';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';

export default function BlockDrawer() {
  const [open, setOpen] = React.useState(false);
  const [feeType, setFeeType] = React.useState('monthly');
  const [amount, setAmount] = React.useState('0.00');
  const [currency, setCurrency] = React.useState('eur');

  return (
    <div className={containerClassName}>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            Open Drawer
          </Button.Root>
        </Drawer.Trigger>

        <Drawer.Content className='absolute inset-y-0 mx-2 my-2 max-h-[calc(100%-16px)] w-[min(400px,calc(100%-16px))] rounded-20 shadow-custom-md'>
          <Drawer.Header className='flex items-start gap-2'>
            <Drawer.Title className='flex flex-col gap-1'>
              <div className='text-label-lg text-text-strong-950'>
                Service Fee
              </div>
              <div className='text-paragraph-sm text-text-sub-600'>
                Configure your service pricing and terms
              </div>
            </Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            <div>
              <TabMenuHorizontal.Root
                value={feeType}
                onValueChange={setFeeType}
              >
                <TabMenuHorizontal.List className='flex w-full gap-1 px-4 py-3.5'>
                  <TabMenuHorizontal.Trigger
                    value='monthly'
                    className='flex-1 justify-center'
                  >
                    Monthly Fee
                  </TabMenuHorizontal.Trigger>
                  <TabMenuHorizontal.Trigger
                    value='onetime'
                    className='flex-1 justify-center'
                  >
                    One-time Fee
                  </TabMenuHorizontal.Trigger>
                  <TabMenuHorizontal.Trigger
                    value='none'
                    className='flex-1 justify-center'
                  >
                    No Fee
                  </TabMenuHorizontal.Trigger>
                </TabMenuHorizontal.List>
              </TabMenuHorizontal.Root>

              <div className='space-y-1 p-5'>
                <Label.Root htmlFor='amount'>Amount</Label.Root>
                <Input.Root>
                  <Input.Wrapper>
                    <Input.InlineAffix>
                      {currency === 'eur'
                        ? '€'
                        : currency === 'usd'
                          ? '$'
                          : '£'}
                    </Input.InlineAffix>
                    <Input.Input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder='0.00'
                    />
                  </Input.Wrapper>
                  <Select.Root
                    variant='compactForInput'
                    value={currency}
                    onValueChange={setCurrency}
                  >
                    <Select.Trigger>
                      <Select.Value />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item value='eur'>
                        <Select.ItemIcon
                          style={{
                            backgroundImage: `url(https://alignui.com/flags/EU.svg)`,
                          }}
                        />
                        EUR
                      </Select.Item>
                      <Select.Item value='usd'>
                        <Select.ItemIcon
                          style={{
                            backgroundImage: `url(https://alignui.com/flags/US.svg)`,
                          }}
                        />
                        USD
                      </Select.Item>
                      <Select.Item value='gbp'>
                        <Select.ItemIcon
                          style={{
                            backgroundImage: `url(https://alignui.com/flags/GB.svg)`,
                          }}
                        />
                        GBP
                      </Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Input.Root>
              </div>

              <Divider.Root variant='solid-text'>
                ELIGIBILITY CRITERIA
              </Divider.Root>

              <div className='space-y-3 p-5'>
                <div className='space-y-1'>
                  <Label.Root htmlFor='prerequisites'>Prequisites</Label.Root>
                  <Select.Root>
                    <Select.Trigger className='w-full'>
                      <Select.Value placeholder='Prequisites' />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item value='prerequisites'>
                        Prerequisites
                      </Select.Item>
                      <Select.Item value='basic'>
                        Basic Requirements
                      </Select.Item>
                      <Select.Item value='advanced'>
                        Advanced Requirements
                      </Select.Item>
                    </Select.Content>
                  </Select.Root>
                </div>

                <div className='flex items-center gap-2'>
                  <Checkbox.Root id='account' />
                  <LabelPrimivites.Root
                    className='cursor-pointer text-label-sm text-text-sub-600'
                    htmlFor='account'
                  >
                    Client must have an existing account
                  </LabelPrimivites.Root>
                </div>
              </div>

              <Divider.Root variant='solid-text'>PAYMENT METHODS</Divider.Root>
              <div className='space-y-4 p-5'>
                <div className='flex items-start gap-2'>
                  <Checkbox.Root id='bank' defaultChecked />
                  <LabelPrimivites.Root
                    className='cursor-pointer'
                    htmlFor='bank'
                  >
                    <div className='flex items-center gap-1'>
                      <span className='text-label-sm text-text-strong-950'>
                        Bank Transfer
                      </span>
                      <span className='text-paragraph-xs text-text-soft-400'>
                        (1-3 business days)
                      </span>
                    </div>
                    <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                      Direct bank to bank transfers
                    </div>
                  </LabelPrimivites.Root>
                </div>

                <div className='flex items-start gap-2'>
                  <Checkbox.Root id='card' />
                  <LabelPrimivites.Root
                    className='cursor-pointer'
                    htmlFor='card'
                  >
                    <div className='flex items-center gap-1'>
                      <span className='text-label-sm text-text-strong-950'>
                        Credit Card
                      </span>
                      <span className='text-paragraph-xs text-text-soft-400'>
                        (Instant)
                      </span>
                    </div>
                    <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                      All major cards accepted (Instant)
                    </div>
                  </LabelPrimivites.Root>
                </div>

                <div className='flex items-start gap-2'>
                  <Checkbox.Root id='digital' defaultChecked />
                  <LabelPrimivites.Root
                    className='cursor-pointer'
                    htmlFor='digital'
                  >
                    <div className='flex items-center gap-1'>
                      <span className='text-label-sm text-text-strong-950'>
                        Digital Wallet
                      </span>
                      <div className='text-paragraph-xs text-text-soft-400'>
                        (Instant)
                      </div>
                    </div>
                    <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                      Popular digital payment methods (Instant)
                    </div>
                  </LabelPrimivites.Root>
                </div>
              </div>

              <Divider.Root variant='solid-text'>
                SERVICE AVAILABILITY
              </Divider.Root>
              <div className='space-y-4 p-5'>
                <Radio.Group defaultValue='public' className='gap-4 space-y-4'>
                  <div className='flex gap-2'>
                    <Radio.Item value='public' id='public-service' />
                    <Label.Root
                      className='flex flex-col items-start gap-1'
                      htmlFor='public-service'
                    >
                      <div className='flex items-center gap-1'>
                        <span className='text-label-sm text-text-strong-950'>
                          Public Service
                        </span>
                        <span className='text-label-xs text-text-soft-400'>
                          (Recommended)
                        </span>
                      </div>
                      <span className='text-paragraph-xs text-text-sub-600'>
                        Visible to all users in the marketplace
                      </span>
                    </Label.Root>
                  </div>

                  <div className='flex gap-2'>
                    <Radio.Item value='private' id='private-service' />
                    <Label.Root
                      className='flex flex-col items-start gap-1'
                      htmlFor='private-service'
                    >
                      <span className='text-label-sm text-text-strong-950'>
                        Private Service
                      </span>
                      <span className='text-paragraph-xs text-text-sub-600'>
                        Limited visibility for select clients
                      </span>
                    </Label.Root>
                  </div>
                </Radio.Group>
              </div>
            </div>
          </Drawer.Body>

          <Drawer.Footer className='flex justify-between gap-3 border-t'>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='medium'
              className='flex-1'
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button.Root>
            <Button.Root
              variant='primary'
              size='medium'
              className='flex-1'
              onClick={() => setOpen(false)}
            >
              Continue
            </Button.Root>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}
