import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Segment, Label, Icon, Statistic, Header } from "semantic-ui-react";
import { Title } from '../Title/Title'
import { Comments } from "../comments/Comments";
import { getData } from "../../redux/Slices/getData";



export const StoryInfo = (props) => {
    const { id } = useParams()
    const data = getData()
    const story = data.find(elem => elem.id == id )

    const title = "Hacker News Stories";
    
     return (
        
        <Container style={{padding: "5% 0"}}>
            <Header as='h1' icon='barcode' content={title} />
            <Segment padded='very'>
            
            <Button icon='arrow left' className="back-btn" onClick={()=> props.history.goBack()}/>

            <Statistic horizontal>
                
                <Label>
                <Icon name="comment" color="orange" /> {story.descendants}
                </Label>
                {/* <Statistic.Value>{story.score}</Statistic.Value>
                        <Statistic.Label>points</Statistic.Label> */}
                {/* <Divider vertical></Divider> !!Relative */}

                <Statistic.Label>by {story.by}</Statistic.Label>
                <Statistic.Label>posted: {story.time}</Statistic.Label>
            </Statistic>
            
            <h2>{story.title}</h2>
            <p>{story.url}</p>
            

            </Segment>
            
            <h3>Comments</h3>
            <Comments commentIds={story.kids}/>
           
            
        </Container>
     )
}

// ссылку на новость
// заголовок новости
// дату
// автора
// счётчик количества комментариев
// список комментариев в виде дерева