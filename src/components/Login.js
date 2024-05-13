import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { createUserAccount , setUserObjData} from './config/firebase';
import { useState } from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';

const formItemLayout = {
    labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };


const LogIn = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    // const router = useRouter()
  
  
    const onFinish = async (values) => {
  
      setLoading(true)
  
  
  
      try {
        const accountCrete = await createUserAccount(values.email, values.password)
        console.log('account-->', accountCrete)
  
        const userInfo = values
        delete userInfo.password
        userInfo.uid = accountCrete.user.uid
  
        await setUserObjData(userInfo)
  
        router.push('/chat')
        setLoading(false)
  
      }
      catch (err) {
        setLoading(false)
        alert(err)
      }
  
  
    }
return(
<Form
   {...formItemLayout}
   form={form}
   name="SignUpForm"
   onFinish={onFinish}
   style={{
       maxWidth: 600,
   }}
   scrollToFirstError
  >
    <Form.Item
      label="Email"
      name="Email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
          type:'email',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={
        {...tailFormItemLayout}
      }
    >
      <Link href={"./studentDB"}>
      <Button type="primary" htmlType="submit" className='bg-cyan-600'>
        LogIn
      </Button>
      </Link>
    </Form.Item>
  </Form>
)

    
  
    }
export default LogIn