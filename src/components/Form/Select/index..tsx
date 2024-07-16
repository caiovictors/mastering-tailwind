'use client'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        className={twMerge(
          'flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none',
          'focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600',
          'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-violet-500 dark:focus:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400',
        )}
      >
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className={twMerge(
            'z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade rounded-lg border border-zinc-300 bg-white shadow-sm',
            'dark:border-zinc-700 dark:bg-zinc-800',
          )}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
