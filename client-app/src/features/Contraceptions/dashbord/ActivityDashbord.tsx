import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IContraception } from "../../../app/models/contraception";
import { ActivityList } from "./ActivityList";
import { AcitvityDetails } from "../details/AcitvityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { About } from "../details/About";

interface IProps {
  contraceptions: IContraception[];
  selectActivity: (id: string) => void;
  selectedActivity: IContraception | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IContraception | null) => void;
  createActivity:(activity:IContraception)=>void;
  editActivity:(activity:IContraception)=>void;
  deleteActivity:(id:string)=>void;
}

export const ActivityDashbord: React.FC<IProps> = ({
  selectedActivity,
  selectActivity,
  contraceptions,
  editMode,
  setEditMode,
  setSelectedActivity,
  createActivity,
  editActivity,
  deleteActivity
}) => {
  return (
    <Grid>
      
      <Grid.Column width={10}>
        <ActivityList
          contraceptions={contraceptions}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
        />
      </Grid.Column>

      <Grid.Column width={6}>
        {selectedActivity && !editMode && (
          <AcitvityDetails
            activity={selectedActivity}
            setEditMode={setEditMode}
            setSelectedActivity={setSelectedActivity}
          />
        )}
        {editMode && (
          <ActivityForm key={selectedActivity && selectedActivity.id || 0}
           setEditMode={setEditMode} activity={selectedActivity!} createActivity={createActivity} editActivity={editActivity} />
        )}
        
      </Grid.Column>


    </Grid>
  );
};
