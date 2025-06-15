import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import MyArtifactsDetails from '../Components/MyArtifactsDetails';
import Swal from 'sweetalert2';

const Myartifacts = () => {

  const { user } = useAuth()
  const [artifacts, setArtifacts] = useState([])

  useEffect(() => {

    axios.get(`http://localhost:3000/myArtifacts?email=${user.email}`)
      .then((res) => setArtifacts(res.data))

  }, [user.email,])



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
        axios.delete(`http://localhost:3000/artifacts/${id}`)
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

            }
          })
      }
    });



  }

  return (
    <div className="min-h-screen bg-background p-6 text-text-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">My Artifacts Collection</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {artifacts.map(artifact => <MyArtifactsDetails artifact={artifact} handleDelete={handleDelete} />)}
        </div>
      </div>
    </div>
  );
};

export default Myartifacts;