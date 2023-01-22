import React, { useState, FC, Fragment, ReactElement } from 'react'
import { SideNavData } from '../data/SideNavData'
import { Children } from '../types/SideNavDataType'
import { v4 as uuidv4 } from "uuid"
import { ISidebarNav } from './interfaces/ISidebarNav'
import { VIEW } from '../constants/View'

const SidebarNav: FC<ISidebarNav> = (props): ReactElement => {
    const { selectedDate, setSelectedDate, showModal, sideNavData, setSideNavData, setModalView } = props
    const [showChannels, setShowChannels] = useState<boolean>(false)
    const [showTargets, setShowTargets] = useState<boolean>(false)
    const [showCalender, setShowCalender] = useState<boolean>(true)
    const [date, setDate] = useState<Date>(new Date())

    const handleClick = (toggleMenu: boolean, name = "") => {
        if (toggleMenu) {
            if (name === "channels") setShowChannels(prev => !prev)
            if (name === "calender") setShowCalender(prev => !prev)
            if (name === "targets") setShowTargets(prev => !prev)
        } else {
            setModalView(VIEW.EVENTS)
            showModal(true)
        }
    }

    const handleAddButtonClick = (id: "channels" | "targets") => {
        setModalView(id === "channels" ? VIEW.CHANNELS : VIEW.TARGETS)
        showModal(true)
    }

    return (
        <div className="flex-1 sidebar__nav">
            <div className="dark:text-zinc-400 flex flex-col items-start justify-start gap-3">
                {sideNavData.map((item) => {
                    return <Fragment key={uuidv4()}>
                        <div className="group flex items-center justify-between w-full">
                            <button onClick={() => handleClick(item.hasChildren, item.name)} className="flex items-center gap-2 justify-start">
                                {item.hasChildren && <div className={`${(item.name === "channels" && showChannels) || (item.name === "targets" && showTargets) || (item.name === "calender" && showCalender) ? "rotate-90" : ""}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>}

                                {item.icon === "new" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                </svg>}

                                {item.label}
                            </button>
                            {(item.name === "channels" || item.name === "targets") && <>
                                <button onClick={() => handleAddButtonClick(item.name as "channels" | "targets")} className='hidden group-hover:block'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </>}
                        </div>

                        {(item.name === "channels" && showChannels || item.name === "targets" && showTargets || item.name === "calender" && showCalender) && (typeof item.children === "function" ? <item.children selectedDate={selectedDate} setSelectedDate={setSelectedDate} date={date} setDate={setDate} /> :
                            <div className="flex flex-col items-start justify-start gap-3 ml-9">
                                {(item.children as Children[])?.map((x) => {
                                    return <button key={uuidv4()}>{item.name === "channels" && "#"} {x.title} {x.isPrivate && "🔒"}</button>
                                })}
                                {item.name === "channels" &&
                                    <button onClick={() => { handleAddButtonClick(item.name as "channels") }}>➕ Add Channel</button>
                                }
                                {item.name === "targets" &&
                                    <button onClick={() => { handleAddButtonClick(item.name as "targets") }}>➕ Add Target</button>
                                }
                            </div>)
                        }
                    </Fragment>
                })}
            </div>
        </div >
    )
}

export default SidebarNav