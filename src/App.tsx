import React, { FC, ReactElement, useEffect, useState } from 'react'
import SidebarHeader from './components/SidebarHeader'
import Switch from './components/Switch'
import SidebarNav from './components/SidebarNav'
import { Toaster } from 'react-hot-toast'
import Overlay from './components/Overlay'
import Modal from './components/Modal'
import { SideNavDataType } from './types/SideNavDataType'
import { SideNavData } from './data/SideNavData'
import { VIEW } from './constants/View'
import ChannelView from './views/ChannelView'
import TargetView from './views/TargetView'
import EventView from './views/EventView'
import DashboardHeader from './components/DashboardHeader'

const App: FC = (): ReactElement => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [sideNavData, setSideNavData] = useState<SideNavDataType>(SideNavData)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalView, setModalView] = useState<VIEW | null>(null)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.add('light')
    }
  }, [])

  const handleModeChange = (): void => {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
  };

  return (
    <>
      <div className="font-default w-full h-screen text-base bg-white text-zinc-900 dark:text-white dark:bg-darkbg p-3 transition-all duration-200">
        <div className="h-full border-2 border-zinc-300 dark:border-zinc-700 rounded-2xl overflow-hidden flex transition-all duration-200">
          <section className="w-72 flex flex-col justify-between justify-items-start gap-6 p-3">
            <SidebarHeader />
            <SidebarNav selectedDate={selectedDate} setSelectedDate={setSelectedDate} showModal={setShowModal} sideNavData={sideNavData} setSideNavData={setSideNavData} setModalView={setModalView} />
            <Switch toggleTheme={handleModeChange} />
          </section>
          <section className="flex-1 p-3 bg-zinc-200 dark:bg-zinc-800">
            <div className="overflow-auto h-full">
              <DashboardHeader selectedDate={selectedDate} />
            </div>
          </section>
        </div>
      </div>
      {showModal && <>
        <Modal hideModal={setShowModal} setModalView={setModalView}>
          <h1 className="font-bold text-lg mb-3">
            {modalView === VIEW.CHANNELS && "Add new channel"}
            {modalView === VIEW.TARGETS && "Add new target"}
            {modalView === VIEW.EVENTS && "Create an event"}
          </h1>
          {modalView === VIEW.CHANNELS && <ChannelView setSideNavData={setSideNavData} hideModal={setShowModal} />}
          {modalView === VIEW.TARGETS && <TargetView setSideNavData={setSideNavData} hideModal={setShowModal} />}
          {modalView === VIEW.EVENTS && <EventView hideModal={setShowModal} />}
        </Modal>
        <Overlay hideModal={setShowModal} setModalView={setModalView} />
      </>}
      <Toaster />
    </>
  )
}

export default App