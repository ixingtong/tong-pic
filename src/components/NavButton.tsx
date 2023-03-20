import type { ChildrenReturn } from 'solid-js'

export interface Props {
  href: string
  title?: string
  isDisabled: boolean
  children: ChildrenReturn
}

export default ({ isDisabled, title, href, children }: Props) => {
  return isDisabled ? (
    <button
      disabled
      type='button'
      class='p-4 rounded-lg bg-gray-300 opacity-50'
      title={title}
    >
      {children}
    </button>
  ) : (
    <a
      href={href}
      class='p-4 rounded-lg hover:bg-gray-300 @dark:hover:bg-gray-600'
      title={title}
    >
      {children}
    </a>
  )
}
