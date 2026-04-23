'use client';

import * as React from 'react';
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
const defaultLevelColors = {
  1: 'text-error-base',
  2: 'text-warning-base',
  3: 'text-success-base',
};

function LevelBar({
  levels = 3,
  level = 1,
  levelColors = defaultLevelColors,
  className,
  ...rest
}: {
  level: number;
  levels?: number;
  levelColors?: { [key: number]: string };
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`relative flex gap-2 overflow-hidden rounded-full ${levelColors[1]} ${className} ${levelColors[level]}`}
      {...rest}
    >
      {Array.from({ length: levels }, (_, i) => i).map((currentLevel) => (
        <LevelBarItem
          key={currentLevel}
          level={level}
          levels={levels}
          active={currentLevel < level}
        />
      ))}
    </div>
  );
}

function LevelBarItem({
  active,
  levels,
  level,
  ...rest
}: {
  active?: boolean;
  level: number;
  levels: number;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className='h-1 w-full rounded-full bg-bg-soft-200'
      style={{
        clipPath: 'inset(0 round 99px)',
      }}
      {...rest}
    >
      <div
        className='absolute left-0 top-0 h-full w-0 rounded-full bg-current duration-500 ease-out'
        style={{
          transitionProperty: 'width',
          width: `calc((100% / ${levels}) * ${level})`,
        }}
      />
    </div>
  );
}

export default function BlockTextInput() {
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState('');

  const [criteria, setCriteria] = React.useState({
    length: false,
    uppercase: false,
    number: false,
  });

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
    setCriteria({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      number: /[0-9]/.test(value),
    });
  };

  const countTrueCriteria = (criteria: { [key: string]: boolean }): number => {
    return Object.values(criteria).filter((value) => value).length;
  };

  const trueCriteriaCount = countTrueCriteria(criteria);

  return (
    <div className='flex w-full max-w-[400px] flex-col rounded-20 bg-bg-white-0 p-5 shadow-custom-md'>
      <div className='flex w-full items-center gap-[14px]'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
          <RiLock2Line className='size-5 text-text-sub-600' />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='text-label-sm text-text-strong-950'>
            Change Password
          </div>
          <div className='text-paragraph-xs text-text-sub-600'>
            Update password for enhanced account security.
          </div>
        </div>
      </div>

      <div className='my-4 flex h-1 flex-col items-center justify-center'>
        <Divider.Root />
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='current-password'>
            Current Password
            <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Icon as={RiLock2Line} />
              <Input.Input
                id='current-password'
                type={showCurrentPassword ? 'text' : 'password'}
                placeholder='••••••••••'
              />
              <button
                type='button'
                onClick={() => setShowCurrentPassword((s) => !s)}
              >
                {showCurrentPassword ? (
                  <RiEyeOffLine className='size-5 text-text-soft-400' />
                ) : (
                  <RiEyeLine className='size-5 text-text-soft-400' />
                )}
              </button>
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='new-password'>
            New Password
            <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Icon as={RiLock2Line} />
              <Input.Input
                id='new-password'
                type={showNewPassword ? 'text' : 'password'}
                placeholder='••••••••••'
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
              <button
                type='button'
                onClick={() => setShowNewPassword((s) => !s)}
              >
                {showNewPassword ? (
                  <RiEyeOffLine className='size-5 text-text-soft-400' />
                ) : (
                  <RiEyeLine className='size-5 text-text-soft-400' />
                )}
              </button>
            </Input.Wrapper>
          </Input.Root>
        </div>
      </div>

      <div className='flex flex-col gap-1 pb-2.5 pt-3'>
        <Label.Root htmlFor='confirm-password'>
          Confirm New Password
          <Label.Asterisk />
        </Label.Root>
        <Input.Root>
          <Input.Wrapper>
            <Input.Icon as={RiLock2Line} />
            <Input.Input
              id='confirm-password'
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='••••••••••'
            />
            <button
              type='button'
              onClick={() => setShowConfirmPassword((s) => !s)}
            >
              {showConfirmPassword ? (
                <RiEyeOffLine className='size-5 text-text-soft-400' />
              ) : (
                <RiEyeLine className='size-5 text-text-soft-400' />
              )}
            </button>
          </Input.Wrapper>
        </Input.Root>
      </div>

      <div className='flex flex-col gap-2'>
        <LevelBar levels={3} level={trueCriteriaCount} />
        <div className='text-paragraph-xs text-text-sub-600'>
          Must contain at least;
        </div>
        <div className='flex items-center gap-1.5 text-paragraph-xs text-text-sub-600'>
          {criteria.uppercase ? (
            <RiCheckboxCircleFill className='size-4 shrink-0 text-success-base' />
          ) : (
            <RiCloseCircleFill className='size-4 shrink-0 text-text-soft-400' />
          )}
          At least 1 uppercase
        </div>
        <div className='flex items-center gap-1.5 text-paragraph-xs text-text-sub-600'>
          {criteria.number ? (
            <RiCheckboxCircleFill className='size-4 shrink-0 text-success-base' />
          ) : (
            <RiCloseCircleFill className='size-4 shrink-0 text-text-soft-400' />
          )}
          At least 1 number
        </div>
        <div className='flex items-center gap-1.5 text-paragraph-xs text-text-sub-600'>
          {criteria.length ? (
            <RiCheckboxCircleFill className='size-4 shrink-0 text-success-base' />
          ) : (
            <RiCloseCircleFill className='size-4 shrink-0 text-text-soft-400' />
          )}
          At least 8 characters
        </div>
      </div>

      <div className='flex w-full gap-3 pt-5'>
        <Button.Root variant='neutral' mode='stroke' className='flex-1'>
          Discard
        </Button.Root>
        <Button.Root variant='primary' className='flex-1'>
          Apply Changes
        </Button.Root>
      </div>
    </div>
  );
}
