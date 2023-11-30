import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const Search = () => {
    const [business, setBusiness] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const displayValue = (value) =>{
        return value == null ? 'Null' : value;
    };
    const isOpen = (value) =>{
        return value == 1 ? "Yes" : "No";
    };
    useEffect(()=>{
        setLoading(true);
        axios
        .get(`http://localhost:5000/Businesses/${id}`)
        .then((response)=>{
            setBusiness(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    }, [])
  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>Search</h1>
        {loading ? (
            <Spinner />
        ):(
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Name</span>
                    <span>{business.name}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Address</span>
                    <span>{business.address}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>City</span>
                    <span>{business.city}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>State</span>
                    <span>{business.state}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Postal</span>
                    <span>{business.postal_code}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Latitude</span>
                    <span>{business.latitude}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Longitude</span>
                    <span>{business.longitude}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Stars</span>
                    <span>{business.stars}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Reviews</span>
                    <span>{business.review_count}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Is Open</span>
                    <span>{isOpen(business.is_open)}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Categories</span>
                    <span>{business.categories}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Monday</span>
                    <span>{displayValue(business.hours?.Monday)}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Tuesday</span>
                    <span>{displayValue(business.hours?.Tuesday)}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Wednesday</span>
                    <span>{displayValue(business.hours?.Wednesday)}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Thursday</span>
                    <span>{displayValue(business.hours?.Thursday)}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Friday</span>
                    <span>{displayValue(business.hours?.Friday)}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Saturday</span>
                    <span>{displayValue(business.hours?.Saturday)}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Sunday</span>
                    <span>{displayValue(business.hours?.Sunday)}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default Search