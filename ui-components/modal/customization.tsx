'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as LabelPrimitives from '@radix-ui/react-label';
import { RiEqualizer2Line } from '@remixicon/react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';

import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Modal from '@/components/ui/modal';
import * as Switch from '@/components/ui/switch';
import * as Tag from '@/components/ui/tag';
import * as Tooltip from '@/components/ui/tooltip';
const formSchema = z.object({
  sections: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      tags: z.array(z.string()),
    }),
  ),
  messagingEnabled: z.boolean(),
  matchingScoreEnabled: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

const IconInfoCustomFill = (props: React.SVGProps<SVGSVGElement>) => (
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

export default function BlockModal() {
  const [open, setOpen] = React.useState(true);
  const [tempInputs, setTempInputs] = React.useState<Record<string, string>>(
    {},
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sections: [
        {
          id: 'experience',
          label: 'Experience Levels',
          tags: ['Entry Level', 'Internship', 'Mid-level Senior'],
        },
        {
          id: 'sources',
          label: 'Candidate Sources',
          tags: ['LinkedIn', 'Indeed', 'Referral'],
        },
      ],
      messagingEnabled: true,
      matchingScoreEnabled: false,
    },
  });

  const { fields } = useFieldArray({
    name: 'sections',
    control: form.control,
  });

  const handleAddTag = (
    sectionIndex: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTag = tempInputs[sectionIndex]?.trim();

      if (newTag) {
        const currentTags = form.getValues(`sections.${sectionIndex}.tags`);

        const isDuplicate = currentTags.some(
          (tag) => tag.toLowerCase() === newTag.toLowerCase(),
        );

        if (!isDuplicate) {
          form.setValue(`sections.${sectionIndex}.tags`, [
            ...currentTags,
            newTag,
          ]);
          setTempInputs((prev) => ({ ...prev, [sectionIndex]: '' }));
        }
      }
    }
  };

  const handleRemoveTag = (sectionIndex: number, tagIndex: number) => {
    const currentTags = form.getValues(`sections.${sectionIndex}.tags`);
    form.setValue(
      `sections.${sectionIndex}.tags`,
      currentTags.filter((_, index) => index !== tagIndex),
    );
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    setOpen(false);
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
          icon={RiEqualizer2Line}
          title='Customization'
          description='Customise your recruitment module.'
        />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Modal.Body className='flex flex-col gap-5'>
            {fields.map((section, sectionIndex) => (
              <div key={section.id} className='flex flex-col items-start gap-1'>
                <Label.Root htmlFor={section.id}>
                  {section.label}
                  <Label.Sub>(max. 4)</Label.Sub>
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger
                        type='button'
                        className='focus:outline-none'
                      >
                        <IconInfoCustomFill className='size-5 text-text-disabled-300' />
                      </Tooltip.Trigger>
                      <Tooltip.Content size='small' className='max-w-72'>
                        Use relevant keywords, separated by commas. Tags should
                        be concise and descriptive.
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </Label.Root>

                <Input.Root>
                  <Input.Wrapper>
                    <Input.Input
                      id={section.id}
                      autoFocus={sectionIndex === 0}
                      placeholder='Add tags...'
                      value={tempInputs[sectionIndex] || ''}
                      onChange={(e) =>
                        setTempInputs((prev) => ({
                          ...prev,
                          [sectionIndex]: e.target.value,
                        }))
                      }
                      onKeyDown={(e) => handleAddTag(sectionIndex, e)}
                    />
                  </Input.Wrapper>
                </Input.Root>

                <div className='mt-2 flex flex-wrap gap-2'>
                  {form
                    .watch(`sections.${sectionIndex}.tags`)
                    .map((tag, tagIndex) => (
                      <Tag.Root key={tag}>
                        {tag}
                        <Tag.DismissButton
                          onClick={() =>
                            handleRemoveTag(sectionIndex, tagIndex)
                          }
                        />
                      </Tag.Root>
                    ))}
                </div>
              </div>
            ))}

            <div className='flex items-center gap-2'>
              <Switch.Root
                id='s1'
                checked={form.watch('messagingEnabled')}
                onCheckedChange={(checked) =>
                  form.setValue('messagingEnabled', checked)
                }
              />
              <LabelPrimitives.Root
                htmlFor='s1'
                className='cursor-pointer text-paragraph-sm text-text-strong-950'
              >
                Messaging Settings
              </LabelPrimitives.Root>
            </div>

            <div className='flex items-center gap-2'>
              <Switch.Root
                id='s2'
                checked={form.watch('matchingScoreEnabled')}
                onCheckedChange={(checked) =>
                  form.setValue('matchingScoreEnabled', checked)
                }
              />
              <LabelPrimitives.Root
                htmlFor='s2'
                className='cursor-pointer text-paragraph-sm text-text-strong-950'
              >
                Matching Score
              </LabelPrimitives.Root>
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
            <Button.Root type='submit' size='small' className='w-full'>
              Save Changes
            </Button.Root>
          </Modal.Footer>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}
