import { useStore } from '@nanostores/solid'
import { currentDate } from '../stores/date'

export default () => {
  const $currentDate = useStore(currentDate)
  return (
    <div class='h-80vh min-h-40vh w-64vh flex items-center justify-center transition-filter-500'>
      <span class='text-5xl'>{$currentDate()}</span>
    </div>
  )
}
