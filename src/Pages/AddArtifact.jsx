import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddArtifact = () => {
    const { user } = useAuth();

    const [load, setLoad] = useState(false)


    const addArtifacts = (e) => {
        setLoad(true)
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        const artifact = Object.fromEntries(formData.entries());
        artifact.likeCount = 0;

        (artifact)



        axios.post('http://localhost:3000/artifacts', artifact, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
                email: user.email
            }
        })
            .then(res => {
                setLoad(false)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Artifacts Added Sucessfully",
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
                form.reset()
            })
    }






    return (
        <div className=' px-6 md:px-0 py-10    container mx-auto'>
            <div className=" bg-base-300 p-12 text-text-primary md:w-9/12 mx-auto rounded space-y-10">
                <h2 className="text-3xl font-bold  text-primary text-center ">Add New Artifact.</h2>
                <form onSubmit={addArtifacts} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" placeholder="Artifact Name" className="p-3 rounded border border-primary  " required />
                    <input name="image" placeholder="Image URL" className="p-3 rounded border  border-primary " required />
                    <select name="type" className="p-3 rounded border  border-primary" required>
                        <option value="">Select Type</option>
                        <option value="Tools">Tools</option>
                        <option value="Weapons">Weapons</option>
                        <option value="Documents">Documents</option>
                        <option value="Writings">Writings</option>
                    </select>
                    <input name="createdAt" placeholder="Created At (e.g. 100 BC)" className="p-3 rounded border  border-primary  " required />
                    <input name="discoveredAt" placeholder="Discovered At (e.g. 1799)" className="p-3 rounded border  border-primary  " required />
                    <input name="discoveredBy" placeholder="Discovered By" className="p-3 rounded border  border-primary  " required />
                    <input name="location" placeholder="Present Location" className="p-3 rounded border  border-primary  " required />
                    <input name="context" placeholder="Historical Context" className="p-3 rounded border  border-primary  " required />
                    <input name="userName" value={user.displayName} readOnly className="p-3 rounded border text-gray-600  border-primary  " required />
                    <input name="userEmail" value={user.email} readOnly className="p-3 rounded border text-gray-600  border-primary  " required />
                    <textarea rows="4" name="description" placeholder="Short Description" className="p-3 rounded border  border-primary   md:col-span-2" required></textarea>
                    <button type="submit" className="bg-primary cursor-pointer text-primary-content py-3 px-6 rounded hover:opacity-90 md:col-span-2">
                        {
                            load ? <span className="loading loading-bars loading-lg"></span> : "Add Artifact"
                        }
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddArtifact;