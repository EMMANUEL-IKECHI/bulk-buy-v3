import React from 'react'
import Form from "@/components/molecules/loginForm/Form.jsx"
import "./login.css"
import Image from "next/image";


export default function Login() {
  return (
    <div className="container">
        <div className="sec-two">
        <Image src="/images/bulk-buy-people.jpg" fill={true} style={{objectFit: "cover"}} alt="sideframe"/>
        </div>
        <div className="sec-one">
            <h1>Login</h1>
            <h4>Welcome back</h4>
            <Form  />
            <p>Dunt have an acount?</p>
        </div>
    </div>
  )
}
