export const formatDateToddmYYY = (date: string): string => {
  //  Get dd
  const dd = new Date(date).getDate()

  //  Get m
  const m = new Intl.DateTimeFormat('en-US', {
    month: 'short',
  }).format(new Date(date))

  //  Get YYYY
  const YYYY = new Date(date).getFullYear()

  const formatedDate = `${dd} ${m}, ${YYYY}`

  return formatedDate
}
