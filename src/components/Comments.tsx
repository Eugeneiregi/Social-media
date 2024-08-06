import Image from 'next/image'
import React from 'react'

const Comments = () => {
    return (
        <div className=''>
            {/* WRITE */}
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/26595870/pexels-photo-26595870/free-photo-of-nara-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={32} height={32} className='w-8 h-8 rounded-full' />
                <div className='flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm py-2 px-6 w-full'>
                    <input type="text" placeholder='Write a Comment...' className='bg-transparent outline-none flex-1' />
                    <Image src="/emoji.png" alt='' width={16} height={16} className='cursor-pointer' />

                </div>
            </div>
            {/* COMMENTS */}
            <div className=''>
                {/* COMMENT */}
                <div className='flex justify-between gap-4 mt-6'>
                    {/* AVATAR */}
                    <div className=''>
                        <Image src="https://images.pexels.com/photos/26595870/pexels-photo-26595870/free-photo-of-nara-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={40} height={40} className='w-10 h-10 rounded-full' />

                    </div>
                    {/* DESC */}
                    <div className='flex flex-col gap-2 flex-1'>
                        <span>Eugene Iregi</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis voluptates architecto minus ea a cumque amet possimus quia harum corporis
                            repudiandae ad aliquid incidunt doloremque modi aspernatur enim provident!</p>
                        <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                            <div className='flex items-center gap-4'>
                                <Image src="/like.png" alt='' width={12} height={12} className='cursor-pointer w-4 h-4' />
                                <span className='text-gray-300'>|</span>
                                <span className='text-gray-500'>123 Likes</span>
                            </div>
                            <div className=''>Reply</div>
                        </div>
                    </div>
                    {/* ICON */}
                    <Image src="/more.png" alt='' width={16} height={16} className='cursor-pointer w-4 h-4' />
                </div>
            </div>
        </div>
    )
}

export default Comments
