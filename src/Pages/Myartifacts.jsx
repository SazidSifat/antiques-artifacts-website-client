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


    axios.get(` http://localhost:3000/myArtifacts?email=${user.email}`, {
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
        axios.delete(` http://localhost:3000/artifacts/${id}`, {
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
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
          Favourite Artifacts Collection
        </h2>

        {artifacts.length === 0 ? (
          <p className="py-10 text-2xl text-center text-gray-500">
            No Liked Artifacts Found!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border border-primary rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Tyoe</th>
                  <th className="px-4 py-3">Created</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="bg-base-100">
                {artifacts.map((artifact) => (

                  <MyArtifactsDetails artifact={artifact} handleDelete={handleDelete} />

                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Myartifacts;