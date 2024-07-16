import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import { SettingsTabs } from '@/components/SettingsTabs'

import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Select } from '@/components/Form/Select/index.'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form ">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control defaultValue="Caio Victor" id="firstName" />
              </Input.Root>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only"
                >
                  Last name
                </label>
                <Input.Root>
                  <Input.Control defaultValue="Sarmento" id="lastName" />
                </Input.Root>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h5- w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                defaultValue="cvsarmento@hotmail.com"
                id="email"
                type="email"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control defaultValue="Developer" id="role" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem text="Brazil" value="br" />
              <SelectItem text="United States" value="us" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                text="Pacific Standard Time (UTC-08:00)"
                value="utc8"
              />
              <SelectItem text="America São Paulo (UTC-03:00)" value="utc3" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    text="Normal text"
                    defaultChecked
                    value="normal"
                  />
                  <SelectItem text="Markdown" value="md" />
                </Select>
                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      strokeWidth={3}
                      className="h-4 w-4 text-zinc-500"
                    />
                  </Button>
                </div>
              </div>
              <TextArea
                id="bio"
                defaultValue="I'm a brazilian Full Stack Developer..."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
