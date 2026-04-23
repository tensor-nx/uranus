'use client';

import * as React from 'react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Dropdown from '@/components/ui/dropdown';

type GroupItem = {
  id: string;
  label: string;
  disabled?: boolean;
};

type Item = {
  id: string;
  label: string;
  items: GroupItem[];
};

type Items = {
  [key: string]: Item;
};

const items: Items = {
  social: {
    id: 'social',
    label: 'Social Media',
    items: [
      { id: 'google', label: 'Google' },
      { id: 'youtube', label: 'Youtube' },
      { id: 'instagram', label: 'Instagram' },
      {
        id: 'linkedin',
        label: 'Linkedin',
        disabled: true,
      },
    ],
  },
  companies: {
    id: 'companies',
    label: 'Companies',
    items: [
      { id: 'apex', label: 'Apex Tech' },
      { id: 'synergy', label: 'Synergy HR' },
    ],
  },
};

export default function BlockDropdown() {
  const [checkedItems, setCheckedItems] = React.useState(new Set(['linkedin']));

  const getGroupState = (groupItems: GroupItem[]) => {
    const checkedCount = groupItems.filter((item) =>
      checkedItems.has(item.id),
    ).length;
    return {
      checked: checkedCount === groupItems.length,
      indeterminate: checkedCount > 0 && checkedCount < groupItems.length,
    };
  };

  const handleGroupCheck = (
    groupItems: GroupItem[],
    checked: boolean | string,
  ) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      groupItems.forEach((item) => {
        if (!item.disabled) {
          checked ? next.add(item.id) : next.delete(item.id);
        }
      });
      return next;
    });
  };

  const handleItemCheck = (id: string, checked: boolean | string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      checked ? next.add(id) : next.delete(id);
      return next;
    });
  };

  const renderGroup = (group: Item) => {
    const { checked, indeterminate } = getGroupState(group.items);

    return (
      <Dropdown.Group key={group.id}>
        <Dropdown.Item
          onSelect={(e) => {
            e.preventDefault();
            handleGroupCheck(group.items, !checked);
          }}
        >
          <Checkbox.Root
            checked={indeterminate ? 'indeterminate' : checked}
            onCheckedChange={(checked) =>
              handleGroupCheck(group.items, checked)
            }
          />
          {group.label}
        </Dropdown.Item>

        {group.items.map((item) => (
          <Dropdown.Item
            key={item.id}
            className='pl-9'
            disabled={item.disabled}
            onSelect={(e) => {
              e.preventDefault();
              if (!item.disabled) {
                handleItemCheck(item.id, !checkedItems.has(item.id));
              }
            }}
          >
            <Checkbox.Root
              checked={checkedItems.has(item.id)}
              disabled={item.disabled}
              onCheckedChange={(checked) => handleItemCheck(item.id, checked)}
            />
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Group>
    );
  };

  return (
    <Dropdown.Root defaultOpen>
      <Dropdown.Trigger asChild>
        <Button.Root variant='neutral' mode='stroke' size='small'>
          Open
        </Button.Root>
      </Dropdown.Trigger>
      <Dropdown.Content>
        {renderGroup(items.social!)}
        <Divider.Root variant='line-spacing' />
        {renderGroup(items.companies!)}
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
