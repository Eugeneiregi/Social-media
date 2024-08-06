import Ad from '@/components/Ad'
import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile"/>
        
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
         <div className='flex flex-col items-center justify-center'>
            <div className='w-full h-64 relative'>
            <Image src="https://images.pexels.com/photos/26796133/pexels-photo-26796133/free-photo-of-a-mountain-with-a-stormy-sky-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover'/>
                <Image src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={128} height={128} className='w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-24 ring-white object-cover'/>
            </div>
            <h1 className='mt-20 mb-4 text-2xl font-medium'>Eugene Iregi</h1>
            <div className='flex items-center just gap-12 mb-4'>
            <div className='flex flex-col items-center'>
                    <span className='font-medium'>111</span>
                    <span className='text-sm'>Posts</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='font-medium'>1.2k</span>
                    <span className='text-sm'>Followers</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='font-medium'>555k</span>
                    <span className='text-sm'>Following</span>
                </div>
            </div>
         </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="Eugene"/>
      </div>
      
    </div>
  )
}

export default page
