import React, { useState } from 'react'
import { SideNavData } from '../data/SideNavData'

const SidebarNav = () => {
    const [showChannels, setShowChannels] = useState<boolean>(true)
    const [showTargets, setShowTargets] = useState<boolean>(true)
    const [showCalender, setShowCalender] = useState<boolean>(true)

    const handleClick = (toggleMenu: boolean, name = "") => {
        if (toggleMenu) {
            if (name === "channels") setShowChannels(prev => !prev)
            if (name === "calender") setShowCalender(prev => !prev)
            if (name === "targets") setShowTargets(prev => !prev)
        } else {
            console.log("Clicked on new button")
        }
    }

    return (
        <div className="overflow-auto flex-1">
            <div className="dark:text-zinc-400 flex flex-col items-start justify-start gap-3">
                {SideNavData.map((item, index) => {
                    return <>
                        <button onClick={() => handleClick(item.hasChildren, item.name)} key={index} className="flex items-center gap-2 justify-start">
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

                        {(item.name === "channels" && showChannels || item.name === "targets" && showTargets || item.name === "calender" && showCalender) &&
                            < div className="flex flex-col items-start justify-start gap-3 ml-9">
                                {item.children?.map((item, idx) => {
                                    return <>
                                        <button key={idx}>{item.label}</button>
                                    </>
                                })}
                                {item.name === "channels" &&
                                    <button>➕ Add Channel</button>
                                }
                                {item.name === "targets" &&
                                    <button>➕ Add Target</button>
                                }
                            </div>
                        }
                    </>
                })}
            </div>
        </div >
    )
}

export default SidebarNav