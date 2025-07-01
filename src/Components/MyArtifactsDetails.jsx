import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'motion/react';
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

const MyArtifactsDetails = ({ artifact, handleDelete }) => {
    const { _id, name, type, image, createdAt } = artifact


    return (

        <tr key={artifact._id} className="border-t  hover:bg-base-200 transitio  ">
            <td className="px-4 py-2">
                <img
                    src={image}
                    alt={name}
                    className="h-16 w-auto rounded"
                />
            </td>
            <td className="px-4 py-2 font-medium">{name}</td>
            <td className="px-4 py-2">{type || 'N/A'}</td>
            <td className="px-4 py-2">{createdAt || 'N/A'}</td>
            <td className="px-4 py-2">
                <div className="flex items-center justify-center gap-3">
                    <Link to={`/artifacts-details/${_id}`} className="p-2 bg-base-300 rounded hover:bg-base-300 transition">
                        <FaRegEye size={22} />
                    </Link>
                    <Link to={`/update-artifacts/${_id}`} className="p-2 bg-base-300 rounded hover:bg-base-300 transition">
                        <FaEdit size={22} />
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="p-2 bg-red-400 rounded hover:bg-red-300 transition">
                        <MdDeleteOutline size={22} className='text-white' />
                    </button>
                </div>

            </td>
        </tr>

    );
};

export default MyArtifactsDetails;