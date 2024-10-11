import AttendanceChart from '@/components/AttendenceChart'
import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import type { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
   title: "Admin Dashboard | SMS",
   description: 'Admin panel'
}

export default function AdminPage() {
   return (
      <div className="p-4 flex gap-4 flex-col md:flex-row">
         {/* LEFT */}
         <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* USERCARDS */}
            <div className="flex justify-between gap-4 flex-wrap">
               <UserCard type="Student" />
               <UserCard type="Teachers" />
               <UserCard type="Staff" />
               <UserCard type="Parent" />
            </div>
            {/* MiddleCards */}
            <div className="flex gap-4 flex-col lg:flex-row">
               {/* Count Chart */}
               <div className="w-full lg:w-1/3 h-[450px]">
                  <CountChart />
               </div>
               {/* Attendence Chart */}
               <div className="w-full lg:w-2/3 h-[450px]"><AttendanceChart/></div>
            </div>
            {/* Bottom Card */}
            <div className='flex justify-center gap-16'>
               <div className="flex flex-col gap-1">
                  <div className='w-5 h-5 bg-lamaSky rounded-full'>
                     <h1 className='font-bold'>1234</h1>
                     <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
                  </div>
               </div>
            </div>
         </div>
         {/* Right */}
         <div className="w-full lg:w-1/3"></div>
      </div>
   )
}
