"use client"
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function userProfilePage () {

  const router = useRouter()
  const [id, setId] = useState('')
  const handleLogout = async () => {
    try{
      await axios.get('/api/users/logout')
      toast.success(<div>Logout successful</div>)
      router.push('/login')
    }catch(err:any){
      toast.error(<div>{err.response.data.error}</div>);
    }
  }

  const getUserId = async () => {
    const userId = await axios.get('/api/users/userprofile')
    setId(userId.data.data._id)
  }

  useEffect(() => {
    getUserId()
  },[])

  return(
    <>
    <div className="min-h-svh flex justify-center items-center flex-col">
      <h1 className="text-3xl">Hello user</h1>
      <Button className="mt-5 cursor-pointer" onClick={handleLogout}>Logout</Button>
      <Button className="mt-4 cursor-pointer" ><Link href={`/profile/${id}`}>Go to your Profile</Link></Button>
      <Toaster/>
    </div>
    </>
  )

} 