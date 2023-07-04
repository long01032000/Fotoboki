import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

type Props = {}

export default function Register({}: Props) {
  return (
    <section className="register-page">
    <div className="row">
      <RegisterForm/>
      <div className="right-side">
        <div className="login-item-2 ">
            <div className="ellipse">
              <img src="/Image/theme2.svg" alt="..." />
              <div className="nav-text">
              <h1>Join us!</h1>
                <span>Just go through the boring process of creating an account.</span>
              </div>
            </div>
           
          </div>
      </div>
    </div>
  </section>
  )
}