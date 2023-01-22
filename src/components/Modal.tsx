import React, { FC, ReactElement } from 'react'
import { IModal } from './interfaces/IModal'

const Modal: FC<IModal> = (props): ReactElement => {
  const { children, hideModal } = props
  return (
    <div className="z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg dark:bg-darkbg bg-white rounded-md p-6 overflow-auto max-h-screen dark:text-white shadow-2xl">
      {children}
      <button onClick={() => hideModal(false)} className="absolute top-6 right-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

export default Modal