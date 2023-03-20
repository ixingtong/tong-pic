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
      class='p-2 rounded-md hover:text-white hover:bg-[#f7c104]'
      onClick={handleClick}
    >
      <div class={isFavorite() ? 'i-octicon-heart-fill-16 text-red' : 'i-octicon-heart-16'}></div>
    </button>
  )
}
