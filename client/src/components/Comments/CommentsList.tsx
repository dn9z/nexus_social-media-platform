import React, {useState} from 'react'

const CommentsList: React.FC = () => {

    const isPreview = useState<boolean>(true)

  return (
    <>
        {isPreview ? ( <p>preview</p> ) : ( <p>no preview</p> )}
    </>
  )
}

export default CommentsList