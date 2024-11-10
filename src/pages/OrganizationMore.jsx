import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAxios } from '../hook/useAxios'
import OrganizationMoreItem from '../components/OrganizationMoreItem'

function OrganizationMore() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [singleData, setSingleData] = useState({})
    useEffect(() => {
        useAxios().get(`/organization/${id}`).then(res => {
            setSingleData(res.data)
        })
    }, [])

    return (
        <div className='p-5'>
            <div className='flex mb-5 items-center justify-between'>
                <div className='flex items-center space-x-5 '>
                    <ArrowLeftOutlined onClick={() => navigate(-1)} className='scale-[1.5] cursor-pointer' />
                    <h2 className='font-bold text-[22px]'>{singleData.name}</h2>
                </div>
                <div className='flex items-center space-x-2'>
                    <Button size='large' className='delete-btn' type='primary' >Delete</Button>
                    <Button size='large' className='update-btn' type='primary'>Update</Button>
                </div>
            </div>
            <div className='flex justofy-between w-[70%]'>
                <ul className='w-[49%] space-y-5 p-5 rounded-md border-[2px] border-slate-500 '>
                    <OrganizationMoreItem spanTitle={"ID"} strongTitle={singleData.id} />
                    <OrganizationMoreItem spanTitle={"Nomi"} strongTitle={singleData.name} />
                    <OrganizationMoreItem spanTitle={"Inn"} strongTitle={singleData.inn} />
                    <OrganizationMoreItem spanTitle={"Holati"} strongTitle={singleData.status ? "Faol" : "Faol emas"} />
                </ul>
                <ul className='w-[49%] space-y-5 p-5 rounded-md border-[2px] border-slate-500'>
                    <OrganizationMoreItem spanTitle={"Direktor"} strongTitle={singleData.director} />
                    <OrganizationMoreItem spanTitle={"Manzil"} strongTitle={singleData.address} />
                    <OrganizationMoreItem spanTitle={"Yaratilgan vaqt"} strongTitle={singleData.createdAt} />
                </ul>
            </div>
        </div>
    )
}

export default OrganizationMore