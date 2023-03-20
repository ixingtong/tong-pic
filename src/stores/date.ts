import dayjs from 'dayjs'
import { atom } from 'nanostores'

export const currentDate = atom(dayjs().format('YYYY-MM-DD'))

export const setCurrentDate = (date: string) => {
  currentDate.set(date)
}
