import React, { useState, useEffect, Fragment } from "react";
import { IContraception } from "../models/contraception";
import { NavBar } from "../../features/nav/NavBar";
import { List, Container } from "semantic-ui-react";
import { ActivityDashbord } from "../../features/Contraceptions/dashbord/ActivityDashbord";
import agent from "../api/agent";
import { Route } from "react-router-dom";
import { About } from "../../features/Contraceptions/details/About";

interface IState {
  contraceptions: IContraception[];
}

const App = () => {
  const [contraceptions, setContraceptions] = useState<IContraception[]>([]);
  const [
    selectedActivity,
    setSelectedActivity
  ] = useState<IContraception | null>(null);

  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(contraceptions.filter(a => a.id === id)[0]);
    setEditMode(false);
  };

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  const handleCreateActivity = (activity: IContraception) => {
    agent.Contraceptions.create(activity).then(() => {
      setContraceptions([...contraceptions, activity]);
      setSelectedActivity(activity);
      setEditMode(false);
    });
  };

  const handleEditActivity = (activity: IContraception) => {
    agent.Contraceptions.update(activity).then(() => {
      setContraceptions([...contraceptions.filter(a => a.id !== activity.id), activity]);
      setSelectedActivity(activity);
      setEditMode(false);
    });
  };
  const handleDeleteActivity = (id: string) => {
    agent.Contraceptions.delete(id).then(() => {
      setContraceptions([...contraceptions.filter(a => a.id !== id)]);
    });
    
  };

  useEffect(() => {
    agent.Contraceptions.list().then(response => {
      let activities: IContraception[] = [];
      response.forEach(activity => {
        activity.date = activity.date.split(".")[0];
        activities.push(activity);
      });
      setContraceptions(activities);
    });
  }, []); //[] da se useffect jednom pokrene samo

  return (

    <Route>
      <Route exact path='/'/>
      <Route exact path='/about' component={About}
      
      
      />

    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashbord
          contraceptions={contraceptions}
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity} //! kaze je li null ili Icont
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          createActivity={handleCreateActivity}
          editActivity={handleEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </Fragment>
    </Route>
    
  );
};

export default App;
