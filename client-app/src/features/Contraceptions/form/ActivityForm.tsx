import React, { useState, ChangeEvent, FormEvent } from "react";
import { Segment, Form, Button, IconGroup } from "semantic-ui-react";
import { IContraception } from "../../../app/models/contraception";
import {v4 as uuid} from 'uuid'

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IContraception;
  createActivity:(activity:IContraception)=>void;
  editActivity:(activity:IContraception)=>void;
}

export const ActivityForm: React.FC<IProps> = ({
  activity: initialformstate,
  setEditMode,
  createActivity,
  editActivity
}) => {
  const initializeForm = () => {
    
    if (initialformstate) {
      return initialformstate;
    } else {
      return {
        id: "",
        date: new Date().getDate().toString() +'/'+new Date().getMonth().toString()+'/'+new Date().getFullYear().toString(),
        wifeAge: 0,
        wifeEducation: 0,
        husbandEducation: 0,
        children: 0,
        wifeReligion: 0,
        wifeWork: 0,
        husbandOccupation: 0,
        livingStandard: 0,
        mediaExposure: 0,
        contraceptiveMethod: 0,
        result:""
      };
    }
  };
  const [activity, setActivity] = useState<IContraception>(initializeForm);

  const handleSubmit=()=>{
    if(activity.id.length===0){
      let newActivity={
        ...activity,
        id:uuid()
      }
      createActivity(newActivity)
    }else{
      editActivity(activity)
    }

  }

  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          type=''
          onChange={handleInputChange}
          name="wifeAge"
          placeholder="Wifes age"
          
        />
        <Form.Input
          onChange={handleInputChange}
          name="wifeEducation"
          placeholder="Wifes education(0-4, 1=low, 2, 3, 4=high): "
          
        />
        <Form.Input
          onChange={handleInputChange}
          name="husbandEducation"
          placeholder="Husbands education(0-4, 1=low, 2, 3, 4=high): "
          
        />
        <Form.Input
          onChange={handleInputChange}
          name="children"
          placeholder="Number of children"
          
        />
        <Form.Input
          onChange={handleInputChange}
          name="wifeReligion"
          placeholder="Wifes religion(0=Non-religious, 1-Religious): "
         
        />
        <Form.Input
          onChange={handleInputChange}
          name="wifeWork"
          placeholder="Wife now working?(0-yes, 1-no)"
          
        />
        <Form.Input
          onChange={handleInputChange}
          name="husbandOccupation"
          placeholder="Husbands occupation(0-4, 1=low, 2, 3, 4=high)"
          
        />
        <Form.Input
          onChange={handleInputChange}
          name="livingStandard"
          placeholder="Living standard(0-4, 1=low, 2, 3, 4=high)"
          
        />         
          
        
        <Form.Input
          onChange={handleInputChange}
          name="mediaExposure"
          placeholder="Media Exposure(0-good, 1-not good)"
          
        />
        
        

        <Button floated="right" positive type="submit" content="Submit" 
        onClick={()=>window.location.reload()}
        />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};
