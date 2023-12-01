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

const Home = () => {
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
    }
    return (
    <div className='p-4 bg-blue-900'>
        <div className='flex justify-between items-center'>
            <Navigation />
        </div>
        {loading ?(
            <Spinner />
        ):(
            showType === 'table' ? (<BusinessesTable businesses={businesses} />) : (<BusinessesCard businesses={businesses} />)
        )}
    </div>
    )
}

export default Home