import React, { useEffect, useState } from "react";
import { Story } from "../Story/Story";
import { MAX_STORIES, STORY_INCREMENT } from "../../constants"
import { useSelector } from "react-redux";
import { getData } from "../../redux/Slices/getData";
import { Loader } from "semantic-ui-react";

export const StoriesList = (props) => {
  const { loading } = props;
  const [count, setCount] = useState(STORY_INCREMENT)

  const d = getData()

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll(e) {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setCount(count => count + STORY_INCREMENT > MAX_STORIES ? MAX_STORIES : count + STORY_INCREMENT)
    }
  }
  return (
    <>
      {loading ? (
        
            <Loader active inline='centered' />
                
      ) : (
        <>
          {d.slice(0,count).map((elem, index) => (
            <Story key={index} story={elem} />
          ))}
        </>
      )}
    </>
  );
};
