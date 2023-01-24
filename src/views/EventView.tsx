import React, { ChangeEvent, FC, FormEvent, ReactElement, useState } from 'react'
import { IEventView } from './interfaces/IEventView'
import { EventFormType } from '../types/EventFormType'
import ColorPicker from '../components/ColorPicker'
import { format } from 'date-fns'
import { toast } from 'react-hot-toast'

const EventView: FC<IEventView> = (props): ReactElement => {
  const [formData, setFormData] = useState<EventFormType>({ title: "", color: "", date: new Date() })
  const { date, color, title } = formData
  const { hideModal } = props

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title || title.trim().length === 0) {
      toast.error("Please enter a title for event", { style: { backgroundColor: "#be123c", color: "white" } })
      return
    } else if (title.length > 20) {
      toast.error("Title should be of max 20 characters", { style: { backgroundColor: "#be123c", color: "white" } })
      return
    } else if (!color) {
      toast.error("Please select a color", { style: { backgroundColor: "#be123c", color: "white" } })
      return
    } else if (!date || date.toString() === "Invalid Date") {
      toast.error("Select a date for the event", { style: { backgroundColor: "#be123c", color: "white" } })
      return
    }

    console.log(formData)

    toast.success("New Event Created!", {
      style: {
        backgroundColor: "#22c55e", color: "white"
      }, icon: "☑️"
    })
    setFormData({ title: "", date: new Date(), color: "" })
    hideModal(false)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="event-name" className="max-w-max mb-3 block font-medium">Title</label>
          <input value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormData(prev => ({
              ...prev, title: e.target.value
            }))
          }} type="text" className="w-full dark:bg-transparent dark:border-zinc-700 border-zinc-200 border-2 rounded-md py-2 px-4 outline-none" autoComplete='off' id="event-name" placeholder="Title of event" />
        </div>
        <div className="mb-6">
          <h6 className="max-w-max mb-3 block font-medium">Select color</h6>
          <div className="flex items-center justify-start gap-6">
            <ColorPicker setFormData={setFormData} color={color} />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="event-date" className="max-w-max mb-3 block font-medium">Date of event</label>
          <input
            type="date"
            defaultValue={format(new Date(), "yyyy-MM-dd")}
            id="event-date"
            autoComplete='off'
            placeholder="Title of event"
            className="w-full dark:bg-transparent dark:border-zinc-700 border-zinc-200 border-2 rounded-md py-2 px-4 outline-none"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormData(prev => ({
                ...prev, date: new Date(e.target.value)
              }))
            }}
          />
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md">Create</button>
        </div>
      </form>
    </section>
  )
}

export default EventView