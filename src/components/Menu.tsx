const menuItems = [
   {
      title: "MENU",
      items: [
         {
            icon: "/home.png",
            label: "Home",
            href: "/",
            visible: ["admin", "teacher", "student", "parent"],
         },
         {
            icon: "/teacher.png",
            label: "Teachers",
            href: "/list/teachers",
            visible: ["admin", "teacher"],
         },
         {
            icon: "/student.png",
            label: "Students",
            href: "/list/students",
            visible: ["admin", "teacher"],
         },
         {
            icon: "/parent.png",
            label: "Parents",
            href: "/list/parents",
            visible: ["admin", "teacher"],
         },
         {
            icon: "/subject.png",
            label: "Subjects",
            href: "/list/subjects",
            visible: ["admin"],
         },
         {
            icon: "/class.png",
            label: "Classes",
            href: "/list/classes",
            visible: ["admin", "teacher"],
         },
         {
            icon: "/lesson.png",
            label: "Lessons",
            href: "/list/lessons",
            visible: ["admin", "teacher"],
         },
         {
            icon: "/exam.png",
            label: "Exams",
            href: "/list/exams",
            visible: ["admin", "teacher", "student", "parent"],
         },
         {
            icon: "/assignment.png",
            label: "Assignments",
            href: "/list/assignments",
            visible: ["admin", "teacher", "student", "parent"],
         },
         {
            icon: "/result.png",
            label: "Results",
            href: "/list/results",
            visible: ["admin", "teacher", "student", "parent"],
         },
         {
            icon: "/attendance.png",
            label: "Attendance",
            href: "/list/attendance",
            visible: ["admin", "teacher", "student", "parent"],
         },
         {
            icon: "/calendar.png",
            label: "Events",
            href: "/list/events",
            visible: ["admin", "teacher", "student", "parent"],
         },
         {
            icon: "/message.png",
            label: "Messages",
            href: "/list/messages",
            visible: ["admin", "teacher", "student", "parent"],
         },
         {
            icon: "/announcement.png",
            label: "Announcements",
            href: "/list/announcements",
            visible: ["admin", "teacher", "student", "parent"],
         },
      ],
   },
   {
      title: "OTHER",
      items: [
         {
            icon: "/profile.png",
            label: "Profile",
            href: "/profile",
            visible: ["admin", "teacher", "student", "parent"],
         },
         {
            icon: "/setting.png",
            label: "Settings",
            href: "/settings",
            visible: ["admin", "teacher", "student", "parent"],
         },
         {
            icon: "/logout.png",
            label: "Logout",
            href: "/logout",
            visible: ["admin", "teacher", "student", "parent"],
         },
      ],
   },
];

import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
export default function Menu() {
   return (
      <div className='text-sm  mt-4'>
         {menuItems.map(i => (
            <div className='flex flex-col gap-2 ' key={i.title}>
               <span className='hidden lg:block text-gray-300 my-4'>{i.title}</span>
               {i.items.map(i => (
                  <Link href={i.href} key={i.label} className='flex gap-4 items-center justify-center lg:justify-start text-gray-500 py-2'>
                     <Image src={i.icon} width={20} height={20} alt="" />
                     <span className='hidden lg:block text-gray-300'>{i.label}</span>
                  </Link>
               ))}
            </div>
         ))}
      </div>
   )
}
