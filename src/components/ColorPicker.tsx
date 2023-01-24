import React, { ChangeEvent, FC, ReactElement, useState } from 'react'
import { IColorPicker } from "./interfaces/IColorPicker"
import { COLORS } from '../constants/Colors'

const ColorPicker: FC<IColorPicker> = (props): ReactElement => {
  const { color, setFormData } = props

  return (
    <div>
      <div className="flex items-center justify-start gap-3">
        {COLORS.map((x, i) => {
          return <div className="flex items-center justify-start gap-3" key={i}>
            <input
              type="radio"
              name="event-color"
              value={x.name}
              id={x.name}
              checked={color === x.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormData(prev => {
                  return { ...prev, color: e.target.value }
                })
              }}
              hidden
            />
            <label htmlFor={x.name} className={`text-lg cursor-pointer w-8 h-8 rounded-full grid place-content-center text-white`} style={{ backgroundColor: x.value }}>
              {color === x.name && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>}
            </label>
          </div>
        })}
      </div>
    </div>
  )
}

export default ColorPicker