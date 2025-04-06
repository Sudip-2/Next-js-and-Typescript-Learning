"use client"

import React, { useEffect, useState } from "react"

export default function userProfile ({params}:any) {

  const [id,setId] = useState ('')
  const getId = async () => {
    const { id } = await params
    setId(id)
  }

  useEffect(() => {
    getId()
  },[])

  return(
    <>
    <div className="min-h-svh flex justify-center items-center">
      <h1 className="text-3xl">Hello user <span className="underline">{id}</span></h1>
    </div>
    </>
  )

} 