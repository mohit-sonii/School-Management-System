import React from 'react'
import Image from "next/image"

function NavBar() {
   return (
      <div className="flex items-center justify-between p-4">
         {/* SearchBar */}
         <div className='hidden md:flex gap-2 items-center text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
            <Image src="/search.png" alt="" width={14} height={14} />
            <input type="text" placeholder='Search..' className="bg-transparent outline-none w-[200px] p-2" />
         </div>
         {/* Icons and User */}
         <div className='items-center flex gap-6 w-full justify-end'>
            <div className='bg-white rounded-full w-7 h-7  flex items-center justify-center cursor-pointer'>
               <Image src="/message.png" alt='' width={20} height={20}/>
            </div>
            <div className='bg-white rounded-full relative flex items-center justify-center w-7 h-7 cursor-pointer'>
               <Image src="/announcement.png" alt="" width={20} height={20}/>
               <div className=" -top-3 -right-3 w-5 h-5 flex items-center jusitfy-center bg-purple-500 text-white rounded-full text-xs absolute">1</div>
            </div>
            <div className="flex flex-col">
               <span className='text-xs leading-3 font-medium'>John Doe</span>
               <span className='text-[10px] text-gray-500 text-right'>Admin</span>
            </div>
            <Image src="/avatar.png" width={36} height={36} className='rounded-full' alt=""/>
         </div>
      </div>
   )
}

export default NavBar