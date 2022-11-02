import react from "react";
import { Segment, Statistic, Divider, Label, Icon } from "semantic-ui-react";
import { convertFromUnixTimeStamp } from "../../services/convertFromUnixTimeStamp";

import { NavLink } from "react-router-dom";

export const Story = (props) => {

  
  const { story } = props;
  const storyTime = convertFromUnixTimeStamp(story.time)
  return  (
    <Segment color="grey">

      <NavLink to={`/info/${story.id}`}>
        <h2>{story.title}</h2>
      </NavLink>

      <Statistic horizontal>
        <Label>
          <Icon name="star" color="orange" /> {story.score}
        </Label>
        

        <Statistic.Label>by {story.by}</Statistic.Label>
        <Statistic.Label>posted: { [storyTime.day, storyTime.mounts, storyTime.year].join('.')}</Statistic.Label>
      </Statistic>
    </Segment>
  );
};
