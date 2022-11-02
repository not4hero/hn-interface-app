import React from 'react';
import { Comment } from './Comment';




export const Comments = ({ commentIds }) => {
  
  
if (commentIds)
  return (
    <>
      
      {commentIds.slice(0, 10).map(
        (id, i) =>
          id && (
            <Comment key={id} id={id}/>
         
          )
      )}
    </>
  );
};
