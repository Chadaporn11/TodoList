import React, { useState } from 'react';
import './SignIn.css'
import { SigninsInterface } from '../../models/ISignIn';
//function
import { login } from '../functions/user';

//ant design
import { Button, Form, Input } from "antd";
import type { SizeType } from 'antd/es/config-provider/SizeContext';



const SignIn = () => {
  const [size, setSize] = useState<SizeType>('large');
  const [form] = Form.useForm();
  const [signin, setSignin] = useState<Partial<SigninsInterface>>({});


  const Submit = () => {
    login(signin)
      .then((response) => response.json())
      .then((res) => {
          console.log(res)
          localStorage.setItem("msg", res.msg);//ยืนยัน
          localStorage.setItem("user", res.user.id);//ส่ง id มาพร้อมกับ token
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("roles", res.user.roles);
          window.location.reload()
          alert(res.msg)

        }).catch((err) => {
          console.log(err)
          alert('login failed')
        })
  };

  const handleInputChange = (
    event: React.ChangeEvent<{ id?: string; value: any }>
  ) => {
    const id = event.target.id as keyof typeof signin;
    const { value } = event.target;
    setSignin({ ...signin, [id]: value });
    console.log(signin)
  };

  return (

    <>
      <div className='Auth-container'>
        <div className='Auth-form-container'>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>LOGIN</h3>
            <h1 className='Auth-form-subtitle'>Welcome Back</h1>
            <Form form={form} layout="vertical">
              <Form.Item >
                <p>User Name</p>
                <Input
                  type='string'
                  name='username'
                  id='username'
                  onChange={handleInputChange}
                  placeholder="Enter your email address" />
              </Form.Item>
              <Form.Item>
                <p>Password</p>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  onChange={handleInputChange}
                  placeholder="Enter your password" />
              </Form.Item>
              <Form.Item>
                <Button onClick={Submit} className='button-center' type="primary" >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

    </>

  );
}

export default SignIn;