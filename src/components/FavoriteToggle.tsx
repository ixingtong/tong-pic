import { createSignal } from 'solid-js'

export default () => {
  const [isFavorite, setFavorite] = createSignal(false)
  const handleClick = () => {
    setFavorite(!isFavorite())
  }

  return (
    <button
      type='button'
      title='Add to / Remove from Favorites (Shortcut: F)'
      class='rounded-md p-2 hover:bg-[#f7c104] hover:text-white'
      onClick={handleClick}
    >
      <div
        class={
          isFavorite()
            ? 'i-octicon-heart-fill-16 text-red'
            : 'i-octicon-heart-16'
        }
      ></div>
    </button>
  )
}
