'use client';

import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  RiAccountBoxLine,
  RiAccountCircleLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiCakeLine,
  RiCheckLine,
  RiCloseLine,
  RiMailLine,
  RiMapPin2Line,
  RiQuillPenLine,
  RiSettings2Line,
  RiSmartphoneLine,
  RiSuitcaseLine,
  RiUser4Line,
  RiUserSettingsLine,
} from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Modal from '@/components/ui/modal';
type FormData = {
  fullName: string;
  phone: string;
  dateOfBirth: string;
  occupation: string;
  email: string;
  address: string;
  username: string;
  language: string;
  bio: string;
  company: string;
  website: string;
};

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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25ZM11.1158 13.2086L11.2156 12.8006C11.164 12.8249 11.0807 12.8526 10.9665 12.8841C10.852 12.9157 10.7489 12.9318 10.6583 12.9318C10.4654 12.9318 10.3295 12.9001 10.2507 12.8366C10.1724 12.773 10.1333 12.6534 10.1333 12.4783C10.1333 12.4089 10.1451 12.3054 10.1697 12.17C10.1936 12.0337 10.2211 11.9126 10.2516 11.8067L10.6242 10.4876C10.6607 10.3665 10.6857 10.2334 10.6992 10.0882C10.7129 9.94325 10.7193 9.84185 10.7193 9.78429C10.7193 9.50614 10.6218 9.28041 10.4268 9.10629C10.2317 8.93229 9.95393 8.84529 9.59396 8.84529C9.39365 8.84529 9.18188 8.88088 8.95776 8.95201C8.73363 9.02294 8.49933 9.1084 8.25421 9.2082L8.15415 9.6165C8.22719 9.58949 8.31419 9.56043 8.41598 9.53034C8.51732 9.50038 8.61674 9.48489 8.71347 9.48489C8.91096 9.48489 9.04399 9.51856 9.1137 9.58488C9.18342 9.65139 9.21844 9.7697 9.21844 9.93883C9.21844 10.0324 9.20736 10.1363 9.18438 10.2492C9.16172 10.3628 9.13342 10.483 9.10013 10.6098L8.72595 11.9342C8.69266 12.0734 8.66834 12.1979 8.65304 12.3084C8.63786 12.4189 8.63057 12.5272 8.63057 12.6326C8.63057 12.9048 8.73114 13.1292 8.93222 13.3063C9.13329 13.4826 9.41523 13.5714 9.77769 13.5714C10.0137 13.5714 10.2209 13.5406 10.3992 13.4785C10.5773 13.4167 10.8164 13.3268 11.1158 13.2086ZM11.0495 7.8502C11.2235 7.68882 11.3101 7.49254 11.3101 7.26272C11.3101 7.03341 11.2236 6.83675 11.0495 6.67331C10.8758 6.51032 10.6666 6.42857 10.4219 6.42857C10.1765 6.42857 9.96635 6.51013 9.79107 6.67331C9.61579 6.83675 9.52796 7.03334 9.52796 7.26272C9.52796 7.49254 9.61579 7.68875 9.79107 7.8502C9.96667 8.01217 10.1764 8.09321 10.4219 8.09321C10.6666 8.09321 10.8758 8.01217 11.0495 7.8502Z'
        fill='#D1D1D1'
      />
    </svg>
  );
}

const InputWithIcons = ({
  value,
  onChange,
  size: _size,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const { input } = Input.inputVariants();
  const { root: compactButtonRoot, icon: compactButtonIcon } =
    CompactButton.compactButtonVariants({ variant: 'ghost' });

  const handleClear = () => {
    const event = {
      target: { name: props.name, value: '' },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(event);
  };

  const handleComplete = () => {
    console.log('Completed:', value);
  };

  return (
    <Input.Root
      className={`${!isFocused ? 'shadow-none before:!ring-0' : 'before:!ring-1'}`}
    >
      <Input.Wrapper>
        <input
          {...props}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={input({ size: 'small' })}
        />
        {isFocused && (
          <>
            <CompactButton.Root
              variant='ghost'
              onClick={handleClear}
              className={compactButtonRoot()}
            >
              <RiCloseLine className={compactButtonIcon()} />
            </CompactButton.Root>
            <CompactButton.Root
              variant='ghost'
              onClick={handleComplete}
              className={compactButtonRoot()}
            >
              <RiCheckLine className={compactButtonIcon()} />
            </CompactButton.Root>
          </>
        )}
      </Input.Wrapper>
    </Input.Root>
  );
};

export default function AccountSetupModal() {
  const [open, setOpen] = React.useState(true);
  const [formData, setFormData] = React.useState<FormData>({
    fullName: '',
    phone: '',
    dateOfBirth: '',
    occupation: '',
    email: '',
    address: '',
    username: '',
    language: '',
    bio: '',
    company: '',
    website: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const masked = value
      .replace(/^(\d{3})/, '($1) ')
      .replace(/^(\(\d{3}\) )(\d{3})/, '$1$2-')
      .replace(/(\d{4})\d+?$/, '$1')
      .slice(0, 14);

    const event = {
      target: { name: 'phone', value: masked },
    } as React.ChangeEvent<HTMLInputElement>;

    handleInputChange(event);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d/]/g, '');
    const masked = value
      .replace(/^(\d{2})(\d)/, '$1/$2')
      .replace(/^(\d{2}\/\d{2})(\d)/, '$1/$2')
      .slice(0, 10);

    const event = {
      target: { name: 'dateOfBirth', value: masked },
    } as React.ChangeEvent<HTMLInputElement>;

    handleInputChange(event);
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
    setOpen(false);
  };

  return (
    <Modal.Root defaultOpen open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke'>
          Open Modal
        </Button.Root>
      </Modal.Trigger>
      <Modal.Content className='rounded-40 w-full max-w-[520px] shadow-custom-md'>
        <Modal.Header
          title='Account Setup'
          description='Complete simple steps to get started.'
          icon={RiUserSettingsLine}
        />

        <Modal.Body className='flex flex-col gap-5'>
          {/* Required Information */}
          <Accordion.Root
            type='single'
            defaultValue='required'
            collapsible
            className='w-full'
          >
            <Accordion.Item value='required'>
              <Accordion.Trigger className='group flex w-full items-center'>
                <div className='flex w-full items-center gap-[14px]'>
                  <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
                    <RiAccountBoxLine className='size-5 text-text-sub-600' />
                  </div>
                  <div className='flex min-w-0 flex-1 items-center'>
                    <div className='flex min-w-0 flex-1 flex-col items-start gap-1'>
                      <div className='flex w-full min-w-0 items-start gap-1'>
                        <span className='overflow-hidden text-ellipsis whitespace-nowrap text-label-sm text-text-strong-950'>
                          Required Information
                        </span>
                        <IconInfoCustom className='shrink-0' />
                      </div>
                      <div className='w-full text-left'>
                        <span className='block overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-xs text-text-sub-600'>
                          Provide required information.
                        </span>
                      </div>
                    </div>
                    <div className='flex shrink-0 items-center gap-3'>
                      <Badge.Root
                        variant='lighter'
                        color='orange'
                        size='medium'
                        className='ml-auto'
                      >
                        In Progress
                      </Badge.Root>
                      <CompactButton.Root
                        variant='stroke'
                        className='!size-6 flex-1 shrink-0 rounded-full group-data-[state=open]:border-0'
                      >
                        <RiArrowDownSLine className='size-5 text-text-soft-400 group-data-[state=open]:hidden' />
                        <RiArrowUpSLine className='size-5 rounded-full bg-bg-surface-800 text-white group-data-[state=open]:block group-data-[state=closed]:hidden' />
                      </CompactButton.Root>
                    </div>
                  </div>
                </div>
              </Accordion.Trigger>
              <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
                <div className='rounded-xl bg-bg-white-0 pb-0 pl-[54px] pt-3 data-[state=closed]:border data-[state=closed]:border-stroke-soft-200'>
                  <div className='flex flex-col gap-2 rounded-xl border border-stroke-soft-200 px-3 py-2'>
                    <div className='flex flex-row items-center gap-[15px]'>
                      <div className='flex flex-row items-center gap-2'>
                        <RiUser4Line className='size-5 shrink-0 text-text-sub-600' />
                        <span className='w-[60px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-sm text-text-sub-600 md:w-[92px]'>
                          Full Name
                        </span>
                      </div>
                      <InputWithIcons
                        id='fullName'
                        name='fullName'
                        placeholder='Full Name'
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className='flex flex-row items-center gap-[15px]'>
                      <div className='flex flex-row items-center gap-2'>
                        <RiSmartphoneLine className='size-5 shrink-0 text-text-sub-600' />
                        <span className='w-[60px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-sm text-text-sub-600 md:w-[92px]'>
                          Phone
                        </span>
                      </div>
                      <InputWithIcons
                        id='phone'
                        name='phone'
                        placeholder='Phone'
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />
                    </div>

                    <div className='flex flex-row items-center gap-[15px]'>
                      <div className='flex flex-row items-center gap-2'>
                        <RiCakeLine className='size-5 shrink-0 text-text-sub-600' />
                        <span className='w-[60px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-sm text-text-sub-600 md:w-[92px]'>
                          Date of Birth
                        </span>
                      </div>
                      <InputWithIcons
                        id='dateOfBirth'
                        name='dateOfBirth'
                        type='text'
                        placeholder='dd/mm/yyyy'
                        value={formData.dateOfBirth}
                        onChange={handleDateChange}
                      />
                    </div>

                    <div className='flex flex-row items-center gap-[15px]'>
                      <div className='flex flex-row items-center gap-2'>
                        <RiSuitcaseLine className='size-5 shrink-0 text-text-sub-600' />
                        <span className='w-[60px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-sm text-text-sub-600 md:w-[92px]'>
                          Occupation
                        </span>
                      </div>
                      <InputWithIcons
                        id='occupation'
                        name='occupation'
                        placeholder='Occupation'
                        value={formData.occupation}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className='flex flex-row items-center gap-[15px]'>
                      <div className='flex flex-row items-center gap-2'>
                        <RiMailLine className='size-5 shrink-0 text-text-sub-600' />
                        <span className='w-[60px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-sm text-text-sub-600 md:w-[92px]'>
                          Email
                        </span>
                      </div>
                      <InputWithIcons
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Enter email address...'
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className='flex flex-row items-center gap-[15px]'>
                      <div className='flex flex-row items-center gap-2'>
                        <RiMapPin2Line className='size-5 shrink-0 text-text-sub-600' />
                        <span className='w-[60px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-sm text-text-sub-600 md:w-[92px]'>
                          Address
                        </span>
                      </div>
                      <InputWithIcons
                        id='address'
                        name='address'
                        placeholder='Enter address...'
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          {/* Profile Customization */}
          <Accordion.Root type='single' collapsible className='w-full'>
            <Accordion.Item value='profile'>
              <Accordion.Trigger className='group flex w-full items-center'>
                <div className='flex w-full items-center gap-[14px]'>
                  <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
                    <RiSettings2Line className='size-5 text-text-sub-600' />
                  </div>
                  <div className='flex min-w-0 flex-1 items-center'>
                    <div className='flex min-w-0 flex-1 flex-col items-start gap-1'>
                      <div className='flex w-full min-w-0 items-start gap-1'>
                        <span className='overflow-hidden text-ellipsis whitespace-nowrap text-label-sm text-text-strong-950'>
                          Profile Customization
                        </span>
                        <IconInfoCustom className='shrink-0' />
                      </div>
                      <div className='w-full text-left'>
                        <span className='block overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-xs text-text-sub-600'>
                          Provide information for profile customization.
                        </span>
                      </div>
                    </div>
                    <div className='flex shrink-0 items-center gap-3'>
                      <Badge.Root
                        variant='lighter'
                        color='gray'
                        size='medium'
                        className='shrink-0'
                      >
                        Incomplete
                      </Badge.Root>
                      <CompactButton.Root
                        variant='stroke'
                        className='shrink-0 rounded-full group-data-[state=open]:border-0'
                      >
                        <RiArrowDownSLine className='size-5 text-text-soft-400 group-data-[state=open]:hidden' />
                        <RiArrowUpSLine className='size-5 rounded-full bg-bg-surface-800 text-white group-data-[state=open]:block group-data-[state=closed]:hidden' />
                      </CompactButton.Root>
                    </div>
                  </div>
                </div>
              </Accordion.Trigger>
              <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
                <div className='rounded-xl bg-bg-white-0 pb-0 pl-[54px] pt-3 data-[state=closed]:border data-[state=closed]:border-stroke-soft-200'>
                  <div className='flex flex-col gap-2 rounded-xl border border-stroke-soft-200 px-3 py-2'>
                    <div className='flex flex-row items-center gap-[15px]'>
                      <div className='flex flex-row items-center gap-2'>
                        <RiAccountCircleLine className='size-5 shrink-0 text-text-sub-600' />
                        <span className='w-[60px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-sm text-text-sub-600 md:w-[92px]'>
                          Username
                        </span>
                      </div>
                      <InputWithIcons
                        id='username'
                        name='username'
                        placeholder='Enter username...'
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className='flex flex-row items-center gap-[15px]'>
                      <div className='flex flex-row items-center gap-2'>
                        <RiSettings2Line className='size-5 shrink-0 text-text-sub-600' />
                        <span className='w-[60px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-sm text-text-sub-600 md:w-[92px]'>
                          Language
                        </span>
                      </div>
                      <InputWithIcons
                        id='language'
                        name='language'
                        placeholder='Select language...'
                        value={formData.language}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          {/* Optional Information */}
          <Accordion.Root type='single' collapsible className='w-full'>
            <Accordion.Item value='optional'>
              <Accordion.Trigger className='group flex w-full items-center'>
                <div className='flex w-full items-center gap-[14px]'>
                  <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
                    <RiQuillPenLine className='size-5 text-text-sub-600' />
                  </div>
                  <div className='flex min-w-0 flex-1 items-center'>
                    <div className='flex min-w-0 flex-1 flex-col items-start gap-1'>
                      <div className='flex w-full min-w-0 items-start gap-1'>
                        <span className='overflow-hidden text-ellipsis whitespace-nowrap text-label-sm text-text-strong-950'>
                          Optional Information
                        </span>
                        <IconInfoCustom className='shrink-0' />
                      </div>
                      <div className='w-full text-left'>
                        <span className='block overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-xs text-text-sub-600'>
                          Provide optional information.
                        </span>
                      </div>
                    </div>
                    <div className='flex shrink-0 items-center gap-3'>
                      <Badge.Root
                        variant='lighter'
                        color='gray'
                        size='medium'
                        className='shrink-0'
                      >
                        Incomplete
                      </Badge.Root>
                      <CompactButton.Root
                        variant='stroke'
                        className='shrink-0 rounded-full group-data-[state=open]:border-0'
                      >
                        <RiArrowDownSLine className='size-5 text-text-soft-400 group-data-[state=open]:hidden' />
                        <RiArrowUpSLine className='size-5 rounded-full bg-bg-surface-800 text-white group-data-[state=open]:block group-data-[state=closed]:hidden' />
                      </CompactButton.Root>
                    </div>
                  </div>
                </div>
              </Accordion.Trigger>
              <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
                <div className='rounded-xl bg-bg-white-0 pb-0 pl-[54px] pt-3 data-[state=closed]:border data-[state=closed]:border-stroke-soft-200'>
                  <div className='flex flex-col gap-2 rounded-xl border border-stroke-soft-200 px-3 py-2'>
                    <div className='flex flex-row items-center gap-[15px]'>
                      <div className='flex flex-row items-center gap-2'>
                        <RiQuillPenLine className='size-5 shrink-0 text-text-sub-600' />
                        <span className='w-[60px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-sm text-text-sub-600 md:w-[92px]'>
                          Bio
                        </span>
                      </div>
                      <InputWithIcons
                        id='bio'
                        name='bio'
                        placeholder='Write something about yourself...'
                        value={formData.bio}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className='flex flex-row items-center gap-[15px]'>
                      <div className='flex flex-row items-center gap-2'>
                        <RiSuitcaseLine className='size-5 shrink-0 text-text-sub-600' />
                        <span className='w-[60px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-sm text-text-sub-600 md:w-[92px]'>
                          Company
                        </span>
                      </div>
                      <InputWithIcons
                        id='company'
                        name='company'
                        placeholder='Enter company name...'
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className='flex flex-row items-center gap-[15px]'>
                      <div className='flex flex-row items-center gap-2'>
                        <RiMapPin2Line className='size-5 shrink-0 text-text-sub-600' />
                        <span className='w-[60px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-sm text-text-sub-600 md:w-[92px]'>
                          Website
                        </span>
                      </div>
                      <InputWithIcons
                        id='website'
                        name='website'
                        placeholder='Enter website URL...'
                        value={formData.website}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </Modal.Body>

        <Modal.Footer>
          <div className='flex w-full items-center justify-end gap-3'>
            <Button.Root
              variant='neutral'
              mode='stroke'
              onClick={() => setOpen(false)}
              className='flex-1'
            >
              Skip
            </Button.Root>
            <Button.Root
              variant='primary'
              onClick={handleSubmit}
              className='flex-1'
            >
              Proceed
            </Button.Root>
          </div>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}
