import React, { ChangeEvent, FC, FormEvent, ReactElement, useState } from 'react'
import { IChannelView } from './interfaces/IChannelView'
import { ChannelFormType } from '../types/ChannelFormType'
import { toast } from 'react-hot-toast'
import { v4 as uuidv4 } from "uuid"
import { VIEW } from '../constants/View'
import { Children, SideNavDataItem } from '../types/SideNavDataType'
import { ITargetView } from './interfaces/ITargetView'

const TargetView: FC<ITargetView> = (props): ReactElement => {
  const [formData, setFormData] = useState<ChannelFormType>({ title: "", isPrivate: false })
  const { setSideNavData, hideModal } = props
  const { title, isPrivate } = formData

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title || title.trim().length === 0) {
      toast.error("Please enter a title for channel", { style: { backgroundColor: "#be123c", color: "white" } })
      return
    } else if (title.length > 20) {
      toast.error("Title should be of max 20 characters", { style: { backgroundColor: "#be123c", color: "white" } })
      return

    }

    setSideNavData(prev => {
      const item = prev.find(item => item.name === VIEW.CHANNELS)!
      const idx = prev.findIndex(item => item.name === VIEW.CHANNELS)
      const children = [{ id: uuidv4(), ...formData }, ...item?.children as Children[]]
      const newItem: SideNavDataItem = { ...item, children: children }
      const newData = prev
      newData[idx] = newItem
      return newData
    })
    toast.success("New Channel Created!", {
      style: {
        backgroundColor: "#22c55e", color: "white"
      }, icon: "☑️"
    })
    setFormData({ title: "", isPrivate: false })
    hideModal(false)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="channel-name" className="max-w-max mb-3 block font-medium">Title</label>
          <input value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormData(prev => ({
              ...prev, title: e.target.value
            }))
          }} type="text" className="w-full dark:bg-transparent dark:border-zinc-700 border-zinc-200 border-2 rounded-md py-2 px-4 outline-none" autoComplete='off' id="channel-name" placeholder="What do you want your target to be called?" />
        </div>
        <div className="mb-6">
          <h6 className="max-w-max mb-3 block font-medium">Is your channel private?</h6>
          <div className="flex items-center justify-start gap-6">
            <div className="flex items-center justify-start gap-3">
              <input
                type="radio"
                name="channel-private"
                value="yes"
                id="yes"
                checked={isPrivate}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormData(prev => ({
                    ...prev, isPrivate: e.target.value === "yes"
                  }))
                }}
              />
              <label htmlFor="yes" className="text-lg cursor-pointer">Yes</label>
            </div>

            <div className="flex items-center justify-start gap-3">
              <input
                type="radio"
                name="channel-private"
                value="no"
                id="no"
                checked={!isPrivate}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormData(prev => ({
                    ...prev, isPrivate: e.target.value === "yes"
                  }))
                }}
              />
              <label htmlFor="no" className="text-lg cursor-pointer">No</label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default TargetView