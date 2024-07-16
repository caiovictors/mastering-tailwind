'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export interface SelectItemProps extends Select.SelectItemProps {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className={twMerge(
        'flex cursor-pointer items-center justify-between gap-2 overflow-hidden px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50',
        'dark:data-[highlighted]:bg-zinc-700',
      )}
      {...props}
    >
      <Select.ItemText asChild>
        <span className="text-black dark:text-zinc-100">{text}</span>
      </Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-400" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
