'use client'

import { setCookie } from 'cookies-next'
import { useState } from 'react'

interface Props {
  currentTab?: number
  tabNumbers?: number
}

export const TabBar = ({ currentTab = 1, tabNumbers = 4 }: Props) => {
  const [selected, setSelected] = useState(currentTab)

  const onTabSelected = (tab: number) => {
    setSelected(tab)
    setCookie('selectedTab', tab.toString())
  }

  return (
    <div
      className={`flex items-center justify-between w-full space-x-2 rounded-xl bg-gray-200 p-2`}
    >
      {Array.from(new Array(tabNumbers), (_, tabIndex) => (
        <div key={tabIndex + 1} className='w-full'>
          <input
            checked={selected === tabIndex + 1}
            onChange={() => {}}
            type='radio'
            id={(tabIndex + 1).toString()}
            className='peer hidden'
          />
          <label
            onClick={() => onTabSelected(tabIndex + 1)}
            className='transition block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
          >
            {tabIndex + 1}
          </label>
        </div>
      ))}
    </div>
  )
}
