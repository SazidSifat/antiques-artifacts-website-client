import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyArtifactsDetails = ({ artifact, handleDelete }) => {

    return (
        <div
            key={artifact._id}
            className="  bg-base-200 rounded  border border-primary"
        >
            <div className='p-6'>
                <img
                    src={artifact.image} className="h-[25vh] w-full rounded"
                />
            </div>
            <div className="p-5 flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-primary leading-tight truncate">{artifact.name}</h3>

                <p className="text-sm text-text-secondary line-clamp-3">{artifact.description}</p>
                <div className="mt-4 flex items-center justify-center w-full gap-3">
                    <Link to={`/update-artifacts/${artifact._id}`} className='flex-1 w-full'>
                        <button
                            className="w-full px-4 py-3 rounded bg-secondary text-secondary-content text-sm font-medium hover:opacity-90 "
                        >
                            Update
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(artifact._id)}
                        className="flex-1 w-full px-4 py-3 rounded bg-error text-error-content text-sm font-medium hover:opacity-90 ">
                        Delete
                    </button>
                </div>

                <Link to={`/artifacts-details/${artifact._id}`}>
                    <button
                        className=" w-full px-4 py-3 rounded bg-primary text-primary-content text-sm font-medium hover:opacity-90 ">
                        Show Details
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default MyArtifactsDetails;