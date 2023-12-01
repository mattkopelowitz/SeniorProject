import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete, MdSearch } from 'react-icons/md'
import BusinessesTable from '../components/home/BusinessesTable';
import BusinessesCard from '../components/home/BusinessesCard';
import Navigation from '../components/Navigation';

const Search = () => {
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('card');
    const [search, setSearch] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('name');

    const handleSearchChange = (event) =>{
        setSearch(event.target.value);
    }
    const handleCriteria = (event) =>{
        setSearchCriteria(event.target.value);
    }
    const handleSearch = (event) =>{
        event.preventDefault();
        if(search.trim() !== ''){
            setLoading(true);
            axios.get(`http://localhost:5555/Businesses?${searchCriteria}=${search}`)
            .then((response)=>{
                setBusinesses(response.data.data);
                setLoading(false);
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            })
        }else{
            console.log("No search string");
        }
    }
    return (
    <div className='p-4 bg-blue-900'>
        <div className='flex justify-between items-center'>
            <Navigation />
        </div>
        <div className='my-4 flex justify-center items-center flex-col'>
                <form onSubmit={handleSearch} className='flex'>
                    <select value={searchCriteria} onChange={handleCriteria} className='border-2 border-orange-600 text-orange-950 rounded-2xl mr-2 bg-blue-300 hover:bg-blue-400 hover:border-white'>
                        <option value="name">Name</option>
                        <option value="city">City</option>
                        <option value="postal_code">Postal Code</option>
                        <option value="categories">Category</option>
                    </select>
                    <input type="text" value={search} onChange={handleSearchChange} placeholder='Search' className='border-2 border-orange-600 bg-blue-300 text-black rounded-2xl px-2 mr-2 w-96 hover:bg-blue-400 hover:border-white'/>
                    <button type="submit" className='bg-white border-2 border-orange-950 rounded-3xl hover:bg-blue-300 hover:text-orange-600 hover:border-orange-600'>
                        <MdSearch className='text-black-800 text-4xl' />
                    </button>
                </form>
        </div>
        <div className='flex justify-center'>
            <button className='bg-orange-300 hover:bg-orange-600 font-bold px-20 py-2 mr-2 rounded-3xl' onClick={()=>setShowType('card')}>Cards</button>
            <button className='bg-orange-300 hover:bg-orange-600 font-bold px-20 py-2 mr-2 rounded-3xl' onClick={()=>setShowType('table')}>Table</button>
        </div>
        {loading ?(
            <Spinner />
        ):(
            showType === 'table' ? (<BusinessesTable businesses={businesses} />) : (<BusinessesCard businesses={businesses} />)
        )}

    </div>
    )
}

export default Search