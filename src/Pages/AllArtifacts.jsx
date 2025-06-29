import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactsCard from '../Components/artifactsCard';
import { FaMagnifyingGlass } from "react-icons/fa6";
import DataLoading from '../Components/DataLoading';

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState([])

    const [search, setSearch] = useState('');
    const [load, setLoad] = useState(true)

    useEffect(() => {
        document.title = "All Artifacts ";


        axios.get(` https://assignment-11-server-green-beta.vercel.app/artifacts?search=${search}`)
            .then((res) => {
                setLoad(false)
                setArtifacts(res.data)
            }).catch(() => {
                setLoad(false)
            })
    }, [search])



    const handleSearch = (e) => {
        e.preventDefault()
        const searchValue = e.target.search.value;

        axios.get(` https://assignment-11-server-green-beta.vercel.app/artifacts?search=${searchValue}`)
            .then((res) => setArtifacts(res.data))

    }



    if (load) {
        return <DataLoading />
    }

    return (
        <div className='py-10  container mx-auto space-y-10'>
            <h2 className="text-3xl lg:text-4xl  font-bold  text-primary text-center ">All Artifacts Collection.</h2>

            <div >
                <div className='md:w-7/12 mx-auto bg-base-300 border border-secondary  rounded '>
                    <form className='flex items-center justify-between ' onSubmit={handleSearch} >
                        <input onChange={(e) => setSearch(e.target.value)} type="text" name='search' className='lg:w-[80%]  py-4 px-3 md:px-8  rounded focus:outline-none' placeholder='Search Artifacts' />
                        <button type='submit' className='bg-primary flex items-center justify-center gap-2 py-4 px-6 lg:px-16 text-primary-content rounded'>Search <FaMagnifyingGlass /> </button>
                    </form>
                </div>
            </div>


            {
                artifacts.length === 0 ? <div className='flex lg:w-6/12 gap-6 mx-auto whitespace-nowrap mt-10 items-center flex-col justify-center border border-base-300 p-10'>
                    <p className=' text-2xl text-center text-gray-500'>No Artifacts Found !</p>
                </div> : <div className='container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 px-10' >
                    {
                        artifacts.map(art => <ArtifactsCard key={art._id} art={art} />)
                    }
                </div>
            }


        </div>
    );
};

export default AllArtifacts;