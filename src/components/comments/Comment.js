
import React, { useEffect, useState } from 'react';
import { getComment } from '../../services/hnApi';
import { Comments } from './Comments';
import { createMarkup } from '../../utils/createMarkup';
import { Comment as CommentUI} from 'semantic-ui-react';


export const Comment = ({id}) => {
  const [comment, setComment] = useState({});
  // const htmlToReactParser = new Parser()

 
  

  useEffect(() => {
    getComment(id).then((data) => data && data.type && setComment(data));
    
  }, []);



  return (
    <CommentUI style={{paddingTop:"25px"}}>
      
      <CommentUI.Content>
      {comment && !comment.deleted && (
        <>
          <CommentUI.Author as='a'>{comment.by}</CommentUI.Author>
            <CommentUI.Text dangerouslySetInnerHTML={createMarkup(comment.text)}></CommentUI.Text>
           
          
          {comment.kids && <Comments commentIds={comment.kids} />}
        </>
      )}
      </CommentUI.Content>
    
      
    </CommentUI>
  );
};