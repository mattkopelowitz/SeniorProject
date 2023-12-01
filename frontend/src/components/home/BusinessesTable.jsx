import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BusinessesTable = ({businesses}) => {
    const displayValue = (value) =>{
        return value == null ? '' : value;
    };
    const isOpen = (value) =>{
        return value == 1 ? "Yes" : "No";
    };
  return (
    <table className='w-full mt-2'>
                <thead>
                    <tr>
                        <th className='border-r border-slate-700 rounded-tl-2xl bg-orange-400'>Name</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Address</th>
                        <th className='border-r border-slate-700 border-slate-600 bg-orange-400'>City</th>
                        <th className='border-r border-slate-700 border-slate-600 bg-orange-400'>State</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Postal</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Latitude</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Longitude</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Stars</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Reviews</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Is Open</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Categories</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Monday</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Tuesday</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Wednesday</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Thursday</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Friday</th>
                        <th className='border-r border-slate-700 bg-orange-400'>Saturday</th>
                        <th className='rounded-tr-2xl bg-orange-400'>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    {businesses.map((business, index)=>(
                        <tr key={business._id} className='h-8'>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {business.name}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {business.address}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {business.city}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {business.state}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {business.postal_code}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {business.latitude}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {business.longitude}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {business.stars}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {business.review_count}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {isOpen(business.is_open)}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {business.categories}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {displayValue(business.hours?.Monday)}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {displayValue(business.hours?.Tuesday)}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {displayValue(business.hours?.Wednesday)}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {displayValue(business.hours?.Thursday)}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {displayValue(business.hours?.Friday)}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {displayValue(business.hours?.Saturday)}
                            </td>
                            <td className='border border-slate-700 text-center bg-orange-200'>
                                {displayValue(business.hours?.Sunday)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
  )
}

export default BusinessesTable