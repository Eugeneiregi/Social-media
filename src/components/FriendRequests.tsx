import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import FriendRequestList from "./FriendRequestList";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
    {/* TOP */}
    <div className="flex justify-between items-center font-medium">
      <span className="text-gray-500">Friend Requests</span>
      <Link href="/" className="text-blue-500 text-xs">
        See all
      </Link>
    </div>
    {/* USER */}
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/25748616/pexels-photo-25748616/free-photo-of-portrait-of-a-young-man-wearing-sunglasses-and-a-gray-polo-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Eugene" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
            <span className="font-semibold">Eugene iregi</span>
        </div>
        <div className="flex gap-3 justify-end">
        <Image src="/accept.png" alt="Eugene" width={20} height={20} className="cursor-pointer" />
        <Image src="/reject.png" alt="Eugene" width={20} height={20} className="cursor-pointer" />

        </div>

    </div>
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/25748616/pexels-photo-25748616/free-photo-of-portrait-of-a-young-man-wearing-sunglasses-and-a-gray-polo-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Eugene" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
            <span className="font-semibold">Eugene iregi</span>
        </div>
        <div className="flex gap-3 justify-end">
        <Image src="/accept.png" alt="Eugene" width={20} height={20} className="cursor-pointer" />
        <Image src="/reject.png" alt="Eugene" width={20} height={20} className="cursor-pointer" />

        </div>

    </div>
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/25748616/pexels-photo-25748616/free-photo-of-portrait-of-a-young-man-wearing-sunglasses-and-a-gray-polo-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Eugene" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
            <span className="font-semibold">Eugene iregi</span>
        </div>
        <div className="flex gap-3 justify-end">
        <Image src="/accept.png" alt="Eugene" width={20} height={20} className="cursor-pointer" />
        <Image src="/reject.png" alt="Eugene" width={20} height={20} className="cursor-pointer" />

        </div>

    </div>
    <FriendRequestList />
    
  </div>
  )
}

export default FriendRequests
