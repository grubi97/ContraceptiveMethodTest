import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { IContraception } from "../../../app/models/contraception";

interface IProps {
  activity: IContraception;
  setEditMode:(editMode:boolean)=>void;
  setSelectedActivity:(activity:IContraception |null)=>void;
}

export const AcitvityDetails: React.FC<IProps> = ({ setSelectedActivity,setEditMode,activity }) => {
  return (


    <Card fluid>
      <Card.Content>
        <Card.Header> Test </Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>
          <div>Wife's age: {activity.wifeAge}</div>
          <div> Wife's education: {activity.wifeEducation}</div>
          <div>Husband's education: {activity.husbandEducation}</div>
          <div>Number of children: {activity.children}</div>
          <div>Wife's reliion: {activity.wifeReligion}</div>
          <div>Wife's work: {activity.wifeWork}</div>
          <div>Husbands occupation: {activity.husbandOccupation}</div>
          <div>Living standard: {activity.livingStandard}</div>
          <div>Media Exposure: {activity.mediaExposure}</div>
          <div> Results:{activity.result}</div>
          <br></br>
          <p>  1-No use
               2-Long-term
               3-Short-Term
                   </p>

          
          


        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group width={2}>
          <Button onClick={()=>setEditMode(true)} basic color="blue" content="Edit" />
          <Button onClick={()=>setSelectedActivity(null)} basic color="grey" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
