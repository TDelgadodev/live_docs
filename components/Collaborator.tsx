import Image from 'next/image';
import React, { useState } from 'react'

const Collaborator = ({ roomId, creatorId, email, collaborator, user }: CollaboratorProps) => {
    const [userType, setuserType] = useState(collaborator.userType || 'viewer');
    const shareDocumentHandler = async (type: string) => {}
    const removeCollaboratortHandler = async (email: string) => {}

  return (
    <li className='flex items-center justify-between gap-3 py-3'>
        <div className="flex gap-2">
            <Image 
                src={collaborator.avatar}
                alt={collaborator.name}
                width={36}
                height={36}
                className='size-9 rounded-full'
            />
        </div>
    </li>
  )
}

export default Collaborator