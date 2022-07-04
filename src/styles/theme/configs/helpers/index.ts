import type * as T from './types'

const createTransition = (element: T.Element, type: string) => `${element} 400ms ${type}`

export const transitions = (element: T.Element | T.Element[], type = 'ease') => {
  if (!Array.isArray(element)) return createTransition(element, type)
  return element.map((e) => createTransition(e, type)).join(', ')
}
