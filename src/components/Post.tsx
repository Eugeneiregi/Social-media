import Image from "next/image";
import Comments from "./Comments";




const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/26082377/pexels-photo-26082377/free-photo-of-alone-monkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={40} width={40} className='w-10 h-10 rounded-full' />
                    <span className="font-medium">
                        Eugene Iregi
                    </span>
                </div>
                <Image src="/more.png" alt="" height={16} width={16} />

            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image src="https://images.pexels.com/photos/23932715/pexels-photo-23932715/free-photo-of-the-sun-is-setting-over-a-bridge-with-arches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className='object-cover rounded-md' />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit repellendus consequuntur, nam sed placeat ipsum neque consectetur itaque nulla ullam alias laborum accusantium recusandae? Error nihil facilis soluta dolores animi!</p>

            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/like.png" alt="" height={16} width={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">111 <span className="hidden md:inline"> Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/comment.png" alt="" height={16} width={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">111 <span className="hidden md:inline"> Comments</span></span>
                    </div>
                </div>
                <div className="">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/share.png" alt="" height={16} width={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">111 <span className="hidden md:inline"> Share</span></span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post
