import React from 'react'
import Form from "@/components/molecules/form/Form.jsx"
import "./signup.css"
import Image from "next/image";


export default function Signup() {
  return (
    <div className="container">
        <div className="sec-two">
        <Image src="/images/bulk-buy-people.jpg" fill={true} style={{objectFit: "cover"}} alt="sideframe"/>
        </div>
        <div className="sec-one">
            <h1>Signup</h1>
            <h4>Welcome to thr smart shopping platform</h4>
            <Form  />
            <p>Already have an acount?</p>
        </div>
    </div>
  )
}
