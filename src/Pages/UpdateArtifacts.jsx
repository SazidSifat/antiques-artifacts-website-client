import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';

const UpdateArtifacts = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/artifacts/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
                email: user.email
            }
        }).then((res) => {
            setData(res.data)
        })
    }, [id, user.accessToken, user.email])

    const updateArtifacts = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)
        const artifacts = Object.fromEntries(formData.entries())

        axios.put(`http://localhost:3000/artifacts/${data._id}`, artifacts)
            .then(res => {

                if (res.data.matchedCount === 1 && res.data.modifiedCount === 1) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Updated Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                    });


                } else if (res.data.matchedCount === 1) {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "No Change Made !",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }







    return (
        <div className=' px-6 md:px-0 py-10    container mx-auto'>
            <div className=" bg-base-300 p-12 text-text-primary md:w-9/12 mx-auto rounded space-y-10">
                <h2 className="text-3xl font-bold  text-primary text-center ">Update Artifact.</h2>
                <form onSubmit={updateArtifacts} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input defaultValue={data.name} name="name" placeholder="Artifact Name" className="p-3 rounded border border-primary bg-surface" required />
                    <input defaultValue={data.image} name="image" placeholder="Image URL" className="p-3 rounded border  border-primary bg-surface" required />
                    <select defaultValue={data.type} name="type" className="p-3 rounded border  border-primary bg-surface" required>
                        <option value="">Select Type</option>
                        <option value="Tools">Tools</option>
                        <option value="Weapons">Weapons</option>
                        <option value="Documents">Documents</option>
                        <option value="Writings">Writings</option>
                    </select>
                    <input defaultValue={data.createdAt} name="createdAt" placeholder="Created At (e.g. 100 BC)" className="p-3 rounded border  border-primary bg-surface" required />
                    <input defaultValue={data.discoveredAt} name="discoveredAt" placeholder="Discovered At (e.g. 1799)" className="p-3 rounded border  border-primary bg-surface" required />
                    <input defaultValue={data.discoveredBy} name="discoveredBy" placeholder="Discovered By" className="p-3 rounded border  border-primary bg-surface" required />
                    <input defaultValue={data.location} name="location" placeholder="Present Location" className="p-3 rounded border  border-primary bg-surface" required />
                    <input defaultValue={data.context} name="context" placeholder="Historical Context" className="p-3 rounded border  border-primary bg-surface" required />
                    <textarea defaultValue={data.description} rows="4" name="description" placeholder="Short Description" className="p-3 rounded border  border-primary bg-surface md:col-span-2" required></textarea>
                    <button type="submit" className="bg-primary cursor-pointer text-primary-content py-3 px-6 rounded hover:opacity-90 md:col-span-2">
                        Update Artifact
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateArtifacts;