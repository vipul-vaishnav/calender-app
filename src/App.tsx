import React, { FC, ReactElement, useEffect, useState } from 'react'
import SidebarHeader from './components/SidebarHeader'
import Switch from './components/Switch'
import SidebarNav from './components/SidebarNav'

const App: FC = (): ReactElement => {
  const [colorTheme, setColorTheme] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setColorTheme("dark");
    } else {
      document.documentElement.classList.add('light')
      setColorTheme("light")
    }
  }, [])

  const handleModeChange = (): void => {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setColorTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
        setColorTheme('light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
        setColorTheme('light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setColorTheme('dark');
      }
    }
  };

  return (
    <div className="font-default w-full h-screen text-base bg-white text-zinc-900 dark:text-white dark:bg-darkbg p-3 transition-all duration-200">
      <div className="h-full border-2 border-zinc-300 dark:border-zinc-700 rounded-2xl overflow-hidden flex transition-all duration-200">
        <section className="w-64 flex flex-col justify-between justify-items-start gap-6 p-3">
          <SidebarHeader />
          <SidebarNav />
          <Switch theme={colorTheme} toggleTheme={handleModeChange} />
        </section>
        <section className="flex-1 p-3 bg-zinc-200 dark:bg-zinc-800">
          <div className="overflow-auto h-full">
            <button onClick={handleModeChange}>change</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App