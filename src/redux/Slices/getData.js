import { useSelector } from "react-redux"

export const getData = (key) => {
    const storyIds = useSelector(state => state.storiesReducer.stories)
    return storyIds;
}
