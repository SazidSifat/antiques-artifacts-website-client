import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import DataLoading from '../Components/DataLoading';
import ArtifactsCard from '../Components/ArtifactsCard';

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
    const handleFilter = (e) => {
        e.preventDefault()
        const filter = e.target.value;

        axios.get(`https://assignment-11-server-green-beta.vercel.app/artifacts/filter-by?filter=${filter}`)
            .then((res) => setArtifacts(res.data))
    }

    const handleSort = (e) => {
        e.preventDefault()
        const sort = e.target.value;

         .log(sort)

        axios.get(`https://assignment-11-server-green-beta.vercel.app/artifacts/filter-by?sort=${sort}`)
            .then((res) => setArtifacts(res.data))
    }



    if (load) {
        return <DataLoading />
    }

    return (
        <div className='py-10 px-3  container mx-auto space-y-6'>
            <h2 className="text-3xl lg:text-4xl  font-bold  text-primary text-center ">All Artifacts Collection.</h2>

            <div className='md:px-6 py-6 space-y-3 bg-base-300 md:bg-base-100 px-2 overflow-hidden  rounded' >
                <div className='lg:w-7/12 mx-auto bg-base-300 border border-secondary   rounded '>
                    <form className='flex w-full items-center justify-between ' onSubmit={handleSearch} >
                        <input onChange={(e) => setSearch(e.target.value)} type="text" name='search' className='lg:w-[80%] py-2 md:py-4 px-3 md:px-8  rounded focus:outline-none' placeholder='Search Artifacts' />
                        <button type='submit' className='bg-primary flex items-center justify-center gap-2 p-2 md:py-4 px-4 lg:px-16 text-primary-content rounded cursor-pointer'>Search <FaMagnifyingGlass /> </button>
                    </form>


                </div>
                <div className="flex flex-col md:flex-row gap-3 w-full items-center justify-between">
                    <div className="flex items-center justify-end w-full md:w-auto">
                        <select
                            onChange={handleFilter}
                            name="select1"
                            defaultValue=""
                            className="border cursor-pointer w-full md:w-fit md:px-5 py-2 md:py-3 lg:py-4 rounded border-primary text-primary focus:outline-0"
                        >
                            <option className="bg-base-300" value="">
                                All
                            </option>
                            <option className="bg-base-300" value="Tools">
                                Tools
                            </option>
                            <option className="bg-base-300" value="Weapons">
                                Weapons
                            </option>
                            <option className="bg-base-300" value="Documents">
                                Documents
                            </option>
                            <option className="bg-base-300" value="Writings">
                                Writings
                            </option>
                        </select>
                    </div>

                    <div className="flex items-center justify-end w-full md:w-auto">
                        <select
                            onChange={handleSort}
                            name="sort"
                            defaultValue=""
                            className="border cursor-pointer w-full md:w-fit md:px-5 py-2 md:py-3 lg:py-4 rounded border-primary text-primary focus:outline-0"
                        >
                            <option className="bg-base-300" value="">
                                Default
                            </option>
                            <option className="bg-base-300" value="atoz">
                                A to Z
                            </option>
                            <option className="bg-base-300" value="ztoa">
                                Z to A
                            </option>

                        </select>
                    </div>
                </div>
            </div>


            {
                artifacts.length === 0 ? <div className='flex lg:w-6/12 gap-6 mx-auto whitespace-nowrap mt-10 items-center flex-col justify-center border border-base-300 p-10'>
                    <p className=' text-2xl text-center text-gray-500'>No Artifacts Found !</p>
                </div> : <div className='container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 px-10' >
                    {
                        artifacts.map(art => <ArtifactsCard key={art._id} art={art} />)
                    }
                </div>
            }


        </div>
    );
};

export default AllArtifacts;