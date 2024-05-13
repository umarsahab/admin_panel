import React from 'react';
import { Button,  Form, Input,Upload } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  


const Signup = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

<Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={normFile}
    >
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    </Form.Item>,

<Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name'
         
        },
      ]}
    >
      <Input />
    </Form.Item>
,<Form.Item
      label="Course"
      name="course"
      rules={[
        {
          required: true,
          message: 'Please input your course'
     
        },
      ]}
    >
      <Input />
    </Form.Item>
,<Form.Item
      label="PhoneNumber"
      name="phonenum"
      rules={[
        {
          required: true
   
        },
      ]}
    >
      <Input />
    </Form.Item>
,


    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input valid email',
          type:'email'
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
          type:'password'
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

  
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" style={{backgroundColor:'rgb(96 165 250)'}}>
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default Signup;