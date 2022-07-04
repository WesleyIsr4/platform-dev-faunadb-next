import { useContext } from 'react'

import { Context } from 'components/Toasts'

const useToasts = () => useContext(Context)

export default useToasts
