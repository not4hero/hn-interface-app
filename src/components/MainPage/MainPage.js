import React, { useEffect } from "react";
import { Title } from "../Title/Title";
import { StoriesList } from "../StoriesList/StoriesList";
import { Container, Button, Header } from "semantic-ui-react";
import useStories from "../StoriesList/GetStories";


export const MainPage = (props) => {
  const title = "Hacker News Stories";
 

  const reloadPage = () => {
    window.location.reload()
  }

    

  return (
    <Container style={{padding: "5% 0"}}>
      
      <Header as='h1' icon='barcode' content={title} />
      <Button icon="redo" onClick={reloadPage}/>
      <StoriesList {...useStories()} />
    </Container>
  );
};
