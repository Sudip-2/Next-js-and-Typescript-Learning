"use client"

import React, { useEffect } from "react"

export default function userProfile ({params}:any) {

  useEffect(() => {
    console.log(params)
  },[])

  return(
    <>
    <div className="min-h-svh flex justify-center items-center">
      <h1 className="text-3xl">Hello user <span className="underline">{params.id}</span></h1>
    </div>
    </>
  )

} 