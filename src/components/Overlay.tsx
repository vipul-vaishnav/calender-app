import React, { FC, ReactElement } from 'react'
import { IOverlay } from './interfaces/IOverlay'

const Overlay: FC<IOverlay> = (props): ReactElement => {
  const { hideModal, setModalView } = props
  return (
    <div onClick={() => {
      hideModal(false)
      setModalView(null)
    }} className="w-full h-screen fixed top-0 left-0 bg-darkbg bg-opacity-50 z-10"></div>
  )
}

export default Overlay