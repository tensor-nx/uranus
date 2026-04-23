'use client';

import * as React from 'react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Drawer from '@/components/ui/drawer';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as Select from '@/components/ui/select';

export default function FilterDrawer() {
  const [open, setOpen] = React.useState(false);
  const [lastEdited, setLastEdited] = React.useState('any-time');
  const [space, setSpace] = React.useState('');
  const [editor, setEditor] = React.useState('');
  const [project, setProject] = React.useState('');

  const timeOptions = [
    { value: 'any-time', label: 'Any Time' },
    { value: 'last-hour', label: 'Last Hour' },
    { value: 'last-24h', label: 'Last 24 Hours' },
    { value: 'last-7d', label: 'Last 7 Days' },
    { value: 'last-30d', label: 'Last 30 Days' },
    { value: 'last-year', label: 'Last Year' },
  ];

  return (
    <div className={containerClassName}>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            Filters by
          </Button.Root>
        </Drawer.Trigger>

        <Drawer.Content className='absolute inset-y-0 mx-2 my-2 max-h-[calc(100%-16px)] w-[min(400px,calc(100%-16px))] rounded-20 bg-bg-white-0 shadow-custom-md'>
          <div className='flex h-full flex-col'>
            <Drawer.Header showCloseButton={false}>
              <Drawer.Title className='text-label-lg text-text-strong-950'>
                Filters by
              </Drawer.Title>

              <Drawer.Close>
                <LinkButton.Root size='medium'>
                  Clear All Filters
                </LinkButton.Root>
              </Drawer.Close>
            </Drawer.Header>

            <Drawer.Body className='flex-1 overflow-y-auto'>
              <Divider.Root variant='solid-text'>CONTENT</Divider.Root>

              <div className='space-y-4 p-5'>
                <div className='flex items-center gap-2'>
                  <Checkbox.Root id='archived' />
                  <Label.Root
                    htmlFor='archived'
                    className='text-paragraph-sm text-text-strong-950'
                  >
                    Archived
                  </Label.Root>
                </div>

                <div className='flex items-center gap-2'>
                  <Checkbox.Root id='official' />
                  <Label.Root
                    htmlFor='official'
                    className='text-paragraph-sm text-text-strong-950'
                  >
                    Official Content
                  </Label.Root>
                </div>

                <div className='flex items-center gap-2'>
                  <Checkbox.Root id='template' defaultChecked />
                  <Label.Root
                    htmlFor='template'
                    className='text-paragraph-sm text-text-strong-950'
                  >
                    Template
                  </Label.Root>
                </div>
              </div>

              <Divider.Root variant='solid-text'>SORT BY</Divider.Root>

              <div className='space-y-3 p-5'>
                <div className='space-y-1'>
                  <label className='text-label-sm text-text-strong-950'>
                    Last edited
                  </label>
                  <Select.Root value={lastEdited} onValueChange={setLastEdited}>
                    <Select.Trigger className='w-full'>
                      <Select.Value>
                        {
                          timeOptions.find((opt) => opt.value === lastEdited)
                            ?.label
                        }
                      </Select.Value>
                    </Select.Trigger>
                    <Select.Content>
                      {timeOptions.map((option) => (
                        <Select.Item key={option.value} value={option.value}>
                          {option.label}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </div>

                <div className='space-y-1'>
                  <label className='text-label-sm text-text-strong-950'>
                    Space
                  </label>
                  <Input.Root>
                    <Input.Wrapper>
                      <Input.Input
                        placeholder='Filter by space...'
                        value={space}
                        onChange={(e) => setSpace(e.target.value)}
                      />
                    </Input.Wrapper>
                  </Input.Root>
                </div>

                <div className='space-y-1'>
                  <label className='text-label-sm text-text-strong-950'>
                    Editor
                  </label>
                  <Input.Root>
                    <Input.Wrapper>
                      <Input.Input
                        placeholder='Filter by editor...'
                        value={editor}
                        onChange={(e) => setEditor(e.target.value)}
                      />
                    </Input.Wrapper>
                  </Input.Root>
                </div>

                <div className='space-y-1'>
                  <label className='text-label-sm text-text-strong-950'>
                    Project
                  </label>
                  <Input.Root>
                    <Input.Wrapper>
                      <Input.Input
                        placeholder='Filter by project...'
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                      />
                    </Input.Wrapper>
                  </Input.Root>
                </div>
              </div>
            </Drawer.Body>
          </div>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}
