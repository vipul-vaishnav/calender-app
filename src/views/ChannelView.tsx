import React, { ChangeEvent, FC, FormEvent, ReactElement, useState } from 'react'
import { IChannelView } from './interfaces/IChannelView'
import { ChannelFormType } from '../types/ChannelFormType'
import { toast } from 'react-hot-toast'

const ChannelView: FC<IChannelView> = (): ReactElement => {
  const [formData, setFormData] = useState<ChannelFormType>({ title: "", isPrivate: false })
  const { title, isPrivate } = formData

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    toast.success("New Channel Created!", {
      style: {
        backgroundColor: "#22c55e", color: "white"
      }, icon: "☑️"
    })
    setFormData({ title: "", isPrivate: false })
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
          }} type="text" className="w-full dark:bg-transparent dark:border-zinc-700 border-zinc-200 border-2 rounded-md py-2 px-4 outline-none" autoComplete='off' id="channel-name" placeholder="What do you want your channel to be called?" />
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

export default ChannelView