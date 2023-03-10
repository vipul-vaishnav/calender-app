import React, { ChangeEvent, FC, FormEvent, ReactElement, useState } from 'react'
import { toast } from 'react-hot-toast'
import { v4 as uuidv4 } from "uuid"
import { VIEW } from '../constants/View'
import { Children, SideNavDataItem } from '../types/SideNavDataType'
import { ITargetView } from './interfaces/ITargetView'
import { TargetFormType } from '../types/TargetFormType'

const TargetView: FC<ITargetView> = (props): ReactElement => {
  const [formData, setFormData] = useState<TargetFormType>({ title: "", icon: "" })
  const { setSideNavData, hideModal } = props
  const { title, icon } = formData

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title || title.trim().length === 0) {
      toast.error("Please enter a title for target", { style: { backgroundColor: "#be123c", color: "white" } })
      return
    } else if (title.length > 20) {
      toast.error("Title should be of max 20 characters", { style: { backgroundColor: "#be123c", color: "white" } })
      return
    } else if (icon.trim().length === 0 || !icon) {
      toast.error("Choose a category", { style: { backgroundColor: "#be123c", color: "white" } })
      return
    }

    setSideNavData(prev => {
      const item = prev.find(item => item.name === VIEW.TARGETS)!
      const idx = prev.findIndex(item => item.name === VIEW.TARGETS)
      const children = [{ id: uuidv4(), ...formData }, ...item?.children as Children[]]
      const newItem: SideNavDataItem = { ...item, children: children }
      const newData = prev
      newData[idx] = newItem
      return newData
    })

    toast.success("New target Created!", {
      style: {
        backgroundColor: "#22c55e", color: "white"
      }, icon: "☑️"
    })
    setFormData({ title: "", icon: "" })
    hideModal(false)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="target-name" className="max-w-max mb-3 block font-medium">Title</label>
          <input value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormData(prev => ({
              ...prev, title: e.target.value
            }))
          }} type="text" className="w-full dark:bg-transparent dark:border-zinc-700 border-zinc-200 border-2 rounded-md py-2 px-4 outline-none" autoComplete='off' id="target-name" placeholder="What do you want your target to be called?" />
        </div>
        <div className="mb-6">
          <h6 className="max-w-max mb-3 block font-medium">Select Category</h6>
          <div className="flex items-center justify-start gap-6">
            <select value={icon} onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setFormData(prev => {
                return { ...prev, icon: e.target.value }
              })
            }} className="w-full dark:bg-transparent dark:border-zinc-700 border-zinc-200 border-2 rounded-md py-2 px-4 outline-none" autoComplete='off' id="target-category">
              <option value="" disabled>Select a category</option>
              <option value="goal" className="dark:bg-darkbg">⚽ Goal</option>
              <option value="todo" className="dark:bg-darkbg">📝 Task</option>
              <option value="health" className="dark:bg-darkbg">🏋️ Health</option>
              <option value="money" className="dark:bg-darkbg">💵 Money</option>
              <option value="study" className="dark:bg-darkbg">✏️ Study</option>
              <option value="project" className="dark:bg-darkbg">🏢 Project</option>
            </select>
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