'use client'
import React, { useState, useContext } from 'react'
import { MessageSquare, User, Settings } from 'lucide-react';
import DocContext from '@/context/docContext';
const Sidebar = () => {
  const [isChecked, setIsChecked] = useState(false)

  const [highlightMessage, setHighlightMessage] = useState(false)
  const [highlightAccount, setHighlightAccount] = useState(false)
  const [highlightSetting, setHighlightSetting] = useState(false)

  const handleMessage = () => {
    setHighlightMessage(!highlightMessage)
    setHighlightAccount(false)
    setHighlightSetting(false)
  }
  const handleAccount = () => {
    setHighlightAccount(!highlightAccount)
    setHighlightMessage(false)
    setHighlightSetting(false)
  }
  const handleSetting = () => {
    setHighlightSetting(!highlightSetting)
    setHighlightMessage(false)
    setHighlightAccount(false)
  }

  const { isDocument, setDocument } = useContext(DocContext);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    setDocument(!isDocument)
  }



  return (

    <div className='p-4 flex flex-col justify-between items-center h-screen bg-[#222431] w-[11vh]'>

      <div className='flex flex-col gap-2 items-center'>

        <span className='bg-[#363a46] h-14 w-14 rounded-full mt-2 mb-4 hover:cursor-pointer' ></span>



        {highlightMessage ?
          <span className='flex bg-[#1b1c21] w-[11vh]'>
            <hr className="w-2 h-20  bg-[#7381e1] border-0 "></hr>
            <span className='flex items-center justify-center w-full'>
              <MessageSquare color='#7381e1 ' className='p-[2px] hover:cursor-pointer' onClick={handleMessage} />
            </span>
          </span>
          :
          <span className='flex  w-[11vh]'>
            <hr className="w-2 h-20   border-0 "></hr>
            <span className='flex items-center justify-center w-full'>
              <MessageSquare className='p-[2px] hover:cursor-pointer' onClick={handleMessage} />
            </span>
          </span>
        }

        {highlightAccount ?
          <span className='flex bg-[#1b1c21] w-[11vh]' >
            <hr className="w-2 h-20  bg-[#7381e1] border-0 "></hr>
            <span className='flex items-center justify-center w-full'>
              <User color='#7381e1 ' className='p-[2px] hover:cursor-pointer' onClick={handleAccount} />
            </span>
          </span>
          :
          <span className='flex  w-[11vh]' >
            <hr className="w-2 h-20   border-0 "></hr>
            <span className='flex items-center justify-center w-full'>
              <User className='p-[2px] hover:cursor-pointer' onClick={handleAccount} />
            </span>
          </span>
        }

        {highlightSetting ?
          <span className='flex bg-[#1b1c21] w-[11vh] ' >
            <hr className="w-2 h-20  bg-[#7381e1] border-0 "></hr>
            <span className='flex items-center justify-center w-full' >
              <Settings color='#7381e1 ' className='p-[2px] hover:cursor-pointer' onClick={handleSetting} />
            </span>
          </span>
          :
          <span className='flex  w-[11vh]' >
            <hr className="w-2 h-20   border-0 "></hr>
            <span className='flex items-center justify-center w-full'>
              <Settings className='p-[2px] hover:cursor-pointer' onClick={handleSetting} />
            </span>
          </span>
        }


      </div>

      <div className='flex flex-col gap-8 items-center'>
        <span className='text-xs'>Mode 1</span>
        <label className='flex cursor-pointer select-none  '>
          <div className='relative  rotate-90 '>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='sr-only  '
            />
            <div
              className={'box block h-12 w-24 rounded-full bg-slate-200 '}
            ></div>
            <div
              className={`absolute left-2 top-1 flex h-10 w-10 items-center justify-center rounded-full  transition ease-in-out duration-300 ${isChecked ? 'translate-x-full bg-[#546ae1]' : 'bg-black'
                }`}
            ></div>
          </div>
        </label>
        <span className='text-xs'>Mode 2</span>
      </div>


    </div>


  )
}

export default Sidebar