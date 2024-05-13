'use client'
import Image from 'next/image'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { useState } from 'react';
import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { Tabel } from '@/components/Table';
import Link from 'next/link';



const attendance = () => {
    // const userCollectionQuery = query(collection(db, 'users'))
    // const [values, loading] = useCollectionDataOnce(userCollectionQuery)
    // const [chatWith, setChatWith] = useState(null)
    return (
        <main
            className={`flex min-h-screen flex-col bg-sky-500 h-[1000px]`}
        >
            <div className='w-full bg-sky-300 h-[60px] flex items-center px-3 '>
                <h2 className='text-white font-bold'>Attendance</h2>

            </div>

            <div className=' m-4  border-zinc-950 shadow-gray-300 flex mb-5'>
                <div className='w-3/12  bg-white border-zinc-950 pt-10 px-2 flex min-h-screen flex-col items-center '>
                    <div className='items-center p-5'>
                        <Avatar size={'large'} icon={<UserOutlined />} />
                    </div>
                    <div className=' border-blue-900' style={{
                        display: "flex",
                        alignItems: 'center',
                    }}>


                        <FaRegUser className='text-cyan-500 border-1  h-8 w-8 rounded-lg' />

                       <Link href={'studentDB'}>
                       <p className='font-bold text-[25px] rounded text-black  flex-col items-center cursor-pointer'>Students</p>
                       </Link>
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: 'center'
                    }} className=' d-flex py-2'>
                        <FaClipboardList className='text-cyan-500 border-1  h-8 w-8 rounded-lg' />
                        <h1 className='font-bold text-[25px] rounded text-black flex-col items-center cursor-pointer'> Attendance</h1>
                    </div>
                    <div>
                        <h1 className='font-bold text-[25px] rounded text-black flex-col items-center pt-10 cursor-pointer'>LogOut</h1>
                    </div>
                    {/* {
                loading ?
                    <h3>Loading....</h3>
                    : null
            }

            {
                values && values.map((data, ind) => {
                    return <UserCard
                        key={ind}
                        id={data.uid}
                        isChosen={data.uid === chatWith?.uid}
                        onClick={() => setChatWith(data)}
                        img={data.profile}
                        name={data.nickname} email={data.email} />
                })
            } */}


                </div>
                <div className='w-8/12  bg-gray-200'>
                    <div className=' w-100'>
                        <div style={{
                            display: 'flex',
                            justifyContent: "space-between",
                        }}>
                            <div style={{
                                display: "flex",
                            }} className='m-5'>
                                <Avatar size={'large'} icon={<UserOutlined />} className='bg-sky-300' />
                                <h1 className='font-bold text-[30px] rounded text-black flex-col items-center'>Attendance</h1>
                            </div>

                        </div>
                    </div>

                    {
                        // chatWith &&
                        <div className='m-2' style={{
                            width : '90%',
                        }}>
                            <Tabel className="w-[90%]"/>
                        </div>
                    }
                </div>
            </div>

        </main>
    )
}

export default attendance