import { useStore } from '@nanostores/solid'
import { currentDate, setCurrentDate } from '../stores/date'
import type { JSX } from 'solid-js'

export default () => {
  const $currentDate = useStore(currentDate)

  const handleDateChange: JSX.EventHandler<HTMLInputElement, Event> = evt => {
    const date = evt.currentTarget?.value
    setCurrentDate(date)
  }
  return (
    <input
      type='date'
      class='border rounded-lg px-6'
      value={$currentDate()}
      onChange={handleDateChange}
    />
  )
}
