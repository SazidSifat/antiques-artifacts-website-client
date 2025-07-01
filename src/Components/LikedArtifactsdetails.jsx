import React from 'react';
import { Link } from 'react-router';

const LikedArtifactsdetails = ({ artifact }) => {
    const { _id, name, type, image, createdAt } = artifact
    return (


        <tr key={artifact._id} className="border-t  hover:bg-base-200 transition">
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
                <Link to={`/artifacts-details/${_id}`} className='py-3 px-4 bg-primary rounded text-primary-content'>View</Link>
            </td>
        </tr>

    );
};

export default LikedArtifactsdetails;