import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactsCard from '../Components/artifactsCard';
import { FaMagnifyingGlass } from "react-icons/fa6";

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState([])

    const [search, setSearch] = useState('');

    useEffect(() => {
        document.title = "All Artifacts ";


        axios.get(`http://localhost:3000/artifacts?search=${search}`)
            .then((res) => setArtifacts(res.data))
    }, [search])

    console.log(search)

    const handleSearch = (e) => {
        e.preventDefault()
        const searchValue = e.target.search.value;
        console.log(searchValue)
        axios.get(`http://localhost:3000/artifacts?search=${searchValue}`)
            .then((res) => setArtifacts(res.data))

    }





    return (
        <div className='py-10  container mx-auto space-y-10'>
            <h2 className="text-3xl lg:text-4xl  font-bold  text-primary text-center ">All Artifacts Collection.</h2>



            <div>
                <div className='w-7/12 mx-auto bg-base-300 border border-secondary  rounded  '>
                    <form className='flex items-center justify-between' onSubmit={handleSearch}>
                        <input onChange={(e) => setSearch(e.target.value)} type="text" name='search' className='w-[80%]  py-4 px-8  rounded focus:outline-none' placeholder='Search Artifacts' />
                        <button type='submit' className='bg-primary flex items-center justify-center gap-2 py-4 px-16 text-primary-content rounded'>Search <FaMagnifyingGlass /> </button>
                    </form>
                </div>
            </div>

            <div className='container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 px-10' >
                {
                    artifacts.map(art => <ArtifactsCard key={art._id} art={art} />)
                }
            </div>
        </div>
    );
};

export default AllArtifacts;