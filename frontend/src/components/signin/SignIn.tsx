import React, { useState } from 'react';
import './SignIn.css'
import { SigninsInterface } from '../../models/ISignIn';
//layouts
import Menu from '../layouts/Menubar'

//ant design
import { Button, Form, Input } from "antd";
import type { SizeType } from 'antd/es/config-provider/SizeContext';



const SignIn = () => {
    const [size, setSize] = useState<SizeType>('large');
    const [form] = Form.useForm();
    const [signin, setSignin] = useState<Partial<SigninsInterface>>({});

    const login = () => {
        const apiUrl = "http://localhost:5000/auth/login";
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signin),
        };
        console.log(requestOptions)
        fetch(apiUrl, requestOptions)
          .then((response) => response.json())
          .then((res) => {
            if (res.msg === 'login complete') {
              alert('success')
              localStorage.setItem("msg", res.msg);//ยืนยัน
              localStorage.setItem("user", res.user);//ส่ง id มาพร้อมกับ token
              localStorage.setItem("access_token", res.access_token);
              console.log(res)
              window.location.reload()
            } else {
              console.log(res)
              alert('fail')
    
            }
          });
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
                        <Button onClick={login}  className='button-center' type="primary" >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

    );
}

export default SignIn;