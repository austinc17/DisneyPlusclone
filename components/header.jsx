import React from 'react'
import logo from '/Users/austinlbchiwambo/Desktop/projects/project-main/disneyplus/disneyclone/src/assets/images/logo.png'
import { HiHome } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiStar } from "react-icons/hi2";
import { HiPlayCircle } from "react-icons/hi2";
import { HiTv } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import { HiDotsVertical } from "react-icons/hi";
import Headeritem from './Headeritem';

function Header() {
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass

        },
        {
            name:'WATCH List',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
  <div className='flex items-center justify-between p-5 w-screen   ' >
  <div className=' flex gap-8 items-center flex-1  w-full'>
  <img src={logo} className='w-[80px] md:w-[115px] object-cover '/>
  <div className='flex gap-6  w-full'>
  {menu.map((item)=>(
    <Headeritem name={item.name} Icon={item.icon}/>
    ))}
    </div>
   
    </div>
    <div>
    <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev'
        className='w-[40px] rounded-full  '
    />
    </div>

    
   
    </div>
  

      
        
  )
}

export default Header