import React, { FC, ReactElement, useEffect, useState } from 'react'
import SidebarHeader from './components/SidebarHeader'
import Switch from './components/Switch'
import SidebarNav from './components/SidebarNav'
import { Toaster } from 'react-hot-toast'
import { format } from 'date-fns'
import Overlay from './components/Overlay'
import Modal from './components/Modal'
import { SideNavDataType } from './types/SideNavDataType'
import { SideNavData } from './data/SideNavData'
import { VIEW } from './constants/View'
import ChannelView from './views/ChannelView'
import TargetView from './views/TargetView'
import EventView from './views/EventView'

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
              {format(selectedDate, "dd LLLL yyyy")}

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eaque consectetur debitis quis aut reiciendis exercitationem animi labore est architecto at sit corporis odit, quia dolorem assumenda esse dolorum quod voluptatibus vero corrupti totam modi eveniet harum? Eos numquam molestias iusto hic eum ipsa asperiores voluptates, vitae architecto quisquam et, ut officia placeat reprehenderit adipisci quos autem tempora porro illo tempore quae dolore rem quis expedita. Perspiciatis, saepe magni consequuntur ea quia et! Cupiditate aut eum magni eligendi officiis? Nisi quod repudiandae officiis nulla repellat optio deleniti tempora libero veritatis itaque suscipit id omnis neque natus, placeat, quo assumenda, beatae minus quaerat magnam. Cumque debitis pariatur delectus quidem assumenda perspiciatis nesciunt in provident dolorum culpa quae modi temporibus asperiores, saepe, veritatis vel minus. Suscipit cupiditate eum molestias quo, accusamus possimus cum ut ab delectus repellat provident sequi voluptate amet ratione aut nulla sunt, quisquam aliquid illum quod porro ex neque doloribus! Odit necessitatibus consequuntur ab laudantium cumque. Ea rem molestiae blanditiis corrupti numquam similique dignissimos consectetur praesentium ipsam enim! Obcaecati voluptates, asperiores vel dolorum eius illo aperiam? Tenetur minus dolorem deleniti obcaecati, quaerat, odit sunt animi rerum officia labore accusamus eum ex. Labore consequuntur harum voluptate dolor dolorum adipisci quod?
            </div>
          </section>
        </div>
      </div>
      {showModal && <>
        <Modal hideModal={setShowModal} setModalView={setModalView}>
          <h1 className="font-bold text-lg mb-3">
            {modalView === VIEW.CHANNELS && "Add new channel"}
            {modalView === VIEW.TARGETS && "Add new target"}
            {modalView === VIEW.EVENTS && "Add new event"}
          </h1>
          {modalView === VIEW.CHANNELS && <ChannelView setSideNavData={setSideNavData} hideModal={setShowModal} />}
          {modalView === VIEW.TARGETS && <TargetView />}
          {modalView === VIEW.EVENTS && <EventView />}
        </Modal>
        <Overlay hideModal={setShowModal} setModalView={setModalView} />
      </>}
      <Toaster />
    </>
  )
}

export default App