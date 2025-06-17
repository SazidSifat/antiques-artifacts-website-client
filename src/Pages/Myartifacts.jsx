import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import MyArtifactsDetails from '../Components/MyArtifactsDetails';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
import { motion } from "motion/react"
import Loading from '../Components/Loading';
import DataLoading from '../Components/DataLoading';

const Myartifacts = () => {
  const navigate = useNavigate()

  const { user } = useAuth()
  const [artifacts, setArtifacts] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
        document.title = "My Artifacts";


    axios.get(` https://assignment-11-server-green-beta.vercel.app/myArtifacts?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
        email: user.email
      }
    })
      .then((res) => {
        setArtifacts(res.data)
        setLoad(false)
      }).catch(() => {
        setLoad(false)
      })

  }, [user.email, user.accessToken])



  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8B5E3C",
      cancelButtonColor: "#EF4444",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(` https://assignment-11-server-green-beta.vercel.app/artifacts/${id}`, {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
            email: user.email

          }
        })
          .then((res) => {

            if (res.data.deletedCount === 1) {
              setArtifacts(artifacts.filter((artifact) => artifact._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 1000
              });
              navigate('/all-artifacts')
            }
          })
      }
    });
  }


  if (load) {
    return <DataLoading />
  }

  return (
    <div className="min-h-[60vh] bg-background p-6 text-text-primary">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">My Artifacts Collection</h2>
        {
          artifacts.length === 0 ? <div className='flex lg:w-6/12 gap-6 mx-auto whitespace-nowrap mt-10 items-center flex-col justify-center border border-base-300 p-10'>
            <p className=' text-2xl text-center text-gray-500'>No Artifacts Found !</p>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }}><Link to='/add-artifacts' className='py-3 bg-secondary px-8 rounded  text-secondary-content'>Add an Artifacts</Link></motion.button>
          </div> : <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {artifacts.map(artifact => <MyArtifactsDetails artifact={artifact} handleDelete={handleDelete} />)}
          </div>
        }
      </div>
    </div>
  );
};

export default Myartifacts;