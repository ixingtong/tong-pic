import type { JSX } from 'solid-js'

export interface Props {
  href: string
  title?: string
  isDisabled: boolean
  children: JSX.Element[]
}

export default ({ isDisabled, title, href, children }: Props) => {
  return isDisabled ? (
    <button
      disabled
      type='button'
      class='rounded-lg bg-gray-300 p-4 opacity-50'
      title={title}
    >
      {children}
    </button>
  ) : (
    <a
      href={href}
      class='rounded-lg p-4 hover:bg-gray-300 @dark:hover:bg-gray-600'
      title={title}
    >
      {children}
    </a>
  )
}
