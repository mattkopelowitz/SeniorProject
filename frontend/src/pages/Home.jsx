import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const Home = () => {
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(false);
    const displayValue = (value) =>{
        return value == null ? 'Null' : value;
    };
    const isOpen = (value) =>{
        return value == 1 ? "Yes" : "No";
    };
    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:5000/Businesses')
        .then((response)=>{
            setBusinesses(response.data.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    }, []);
    return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>Businesses</h1>
            <Link to={`/search/${businesses._id}`}>
                <MdOutlineAddBox className='text-black-800 text-4xl' />
            </Link>
        </div>
        {loading ?(
            <Spinner />
        ):(
            <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md'>Name</th>
                        <th className='border border-slate-600 rounded-md'>Address</th>
                        <th className='border border-slate-600 rounded-md'>City</th>
                        <th className='border border-slate-600 rounded-md'>State</th>
                        <th className='border border-slate-600 rounded-md'>Postal</th>
                        <th className='border border-slate-600 rounded-md'>Latitude</th>
                        <th className='border border-slate-600 rounded-md'>Longitude</th>
                        <th className='border border-slate-600 rounded-md'>Stars</th>
                        <th className='border border-slate-600 rounded-md'>Reviews</th>
                        <th className='border border-slate-600 rounded-md'>Is Open</th>
                        <th className='border border-slate-600 rounded-md'>Categories</th>
                        <th className='border border-slate-600 rounded-md'>Monday</th>
                        <th className='border border-slate-600 rounded-md'>Tuesday</th>
                        <th className='border border-slate-600 rounded-md'>Wednesday</th>
                        <th className='border border-slate-600 rounded-md'>Thursday</th>
                        <th className='border border-slate-600 rounded-md'>Friday</th>
                        <th className='border border-slate-600 rounded-md'>Saturday</th>
                        <th className='border border-slate-600 rounded-md'>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    {businesses.map((business, index)=>(
                        <tr key={business._id} className='h-8'>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {business.name}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {business.address}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {business.city}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {business.state}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {business.postal_code}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {business.latitude}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {business.longitude}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {business.stars}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {business.review_count}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {isOpen(business.is_open)}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {business.categories}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {displayValue(business.hours?.Monday)}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {displayValue(business.hours?.Tuesday)}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {displayValue(business.hours?.Wednesday)}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {displayValue(business.hours?.Thursday)}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {displayValue(business.hours?.Friday)}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {displayValue(business.hours?.Saturday)}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {displayValue(business.hours?.Sunday)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
    )
}

export default Home