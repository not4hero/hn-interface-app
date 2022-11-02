import React, { useEffect, useState } from "react";
import { getStoryIds, getStory } from "../../services/hnApi";
import { useSelector, useDispatch } from "react-redux";


const useStories = () => {
  const [loading, setLoading] = useState(true);
  const [d, setD] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllStoryIds = () => {
      getStoryIds().then(async (data) => {
        const p = data.map(async (storyId) => {
          try {
            const data = await getStory(storyId);
            return data;
          } catch (error) {
            console.log("Catch error", error);
          }
        });
        for (let i = 0; i < 5; i++) {
          const arr = await Promise.all(p.slice(i * 20, (i + 1) * 20));
          setLoading(false)
          dispatch({ type: "SET_STORIES", payload: arr });
        }
      });
    };
    getAllStoryIds();
  }, [dispatch]);

  return { d, loading };
};

export default useStories;
