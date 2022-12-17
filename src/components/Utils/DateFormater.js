import { formatDistanceToNow } from 'date-fns'

export const dateToShow = (date) => {return formatDistanceToNow(
  new Date(date),
  {addSuffix: true}
)}