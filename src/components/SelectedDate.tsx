import { useStore } from '@nanostores/solid'
import { currentDate } from '../stores/date'

export default () => {
  const $currentDate = useStore(currentDate)
  return (
    <div class='flex justify-center items-center h-80vh w-64vh min-h-40vh transition-filter-500'>
      <span class='text-5xl'>{$currentDate()}</span>
    </div>
  )
}
