import Image from "next/image"


const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
         <Image src="https://images.pexels.com/photos/20322863/pexels-photo-20322863/free-photo-of-close-up-of-woman-in-a-coat-sitting-and-holding-a-film-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="rounded-md object-cover"/>
         <Image src="https://images.pexels.com/photos/26632621/pexels-photo-26632621/free-photo-of-a-lone-tree-in-the-desert-with-a-red-sand-dune-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={48} height={48} className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"/>
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Eugene Iregi</span>
        <div className="flex items-center gap-4">
            <div className="flex">
            <Image src="https://images.pexels.com/photos/20322863/pexels-photo-20322863/free-photo-of-close-up-of-woman-in-a-coat-sitting-and-holding-a-film-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="rounded-md object-cover w-3 h-3"/>
            <Image src="https://images.pexels.com/photos/20322863/pexels-photo-20322863/free-photo-of-close-up-of-woman-in-a-coat-sitting-and-holding-a-film-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="rounded-md object-cover w-3 h-3"/>
            <Image src="https://images.pexels.com/photos/20322863/pexels-photo-20322863/free-photo-of-close-up-of-woman-in-a-coat-sitting-and-holding-a-film-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="rounded-md object-cover w-3 h-3"/>

            </div>
            <span className="text-xs text-gray-500">1000 Followers</span>
        </div>
        <button className="bg-blue-500 text-white rounded-md text-xs p-2">My Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard
