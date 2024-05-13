import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Profileimg',
        dataIndex: 'Profileimg',
        key: 'Profileimg',
      },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'CourseName',
    dataIndex: 'CourseName',
    key: 'CourseName',
    render: (text) => <a>Web And App</a>,
  },
  {
    title: 'Password',
    dataIndex: 'Password',
    key: 'Password',
    render: (text) => <a>123456</a>,
  }

];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export const Tabel = () => <Table columns={columns} dataSource={data} 
/>;

