import type { JSX } from 'solid-js'
import { useStore } from '@nanostores/solid'
import { currentDate, setCurrentDate } from '../stores/date'

export default () => {
  const $currentDate = useStore(currentDate)

  const handleDateChange: JSX.EventHandler<HTMLInputElement, Event> = evt => {
    const date = evt.currentTarget?.value
    setCurrentDate(date)
  }
  return (
    <input
      type='date'
      class='px-6 rounded-lg border'
      value={$currentDate()}
      onChange={handleDateChange}
    />
  )
}
