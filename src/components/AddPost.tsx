import React from 'react'
import Image from "next/image";

const AddPost = () => {
    return (
        <div className='p-4 shadow-md bg-white rounded-lg flex gap-4 justify-between text-sm'>
            {/* AVATAR */}
            <Image
                src="https://images.pexels.com/photos/26836540/pexels-photo-26836540/free-photo-of-processed-with-vsco-with-m5-preset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 object-cover rounded-full"
            />
            {/* POST */}
            <div className='flex-1'>
                {/* TEXT INPUT */}
                <div className='flex gap-4'>
                    <textarea placeholder="Whats on your mind?" className='flex-1 p-2 bg-slate-100 rounded-lg'></textarea>
                    <Image
                        src="/emoji.png"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 cursor-pointer self-end"
                    />
                </div>
                {/* POST OPTIONS */}
                <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image
                            src="/addimage.png"
                            alt=""
                            width={20}
                            height={20}
                            className="w-5 h-5 cursor-pointer self-end"
                        />Photo
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image
                            src="/addVideo.png"
                            alt=""
                            width={20}
                            height={20}
                            className="w-5 h-5 cursor-pointer self-end"
                        />Video
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image
                            src="/poll.png"
                            alt=""
                            width={20}
                            height={20}
                            className="w-5 h-5 cursor-pointer self-end"
                        />Poll
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image
                            src="/addevent.png"
                            alt=""
                            width={20}
                            height={20}
                            className="w-5 h-5 cursor-pointer self-end"
                        />Event
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddPost
