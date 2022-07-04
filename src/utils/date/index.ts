import { format } from 'date-fns'

import type * as T from './types'

const DEFAULT_FORMAT = 'yyyy/MM/dd'

export const normalizeDate = (value: any, maskFormat: T.Format = DEFAULT_FORMAT) => {
  return format(new Date(value), maskFormat)
}
