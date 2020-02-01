import React from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IContraception } from "../../../app/models/contraception";

interface IProps {
  contraceptions: IContraception[];
  selectActivity: (id: string) => void;
  deleteActivity:(id:string)=>void;
}

export const ActivityList: React.FC<IProps> = ({
  selectActivity,
  contraceptions,
  deleteActivity
}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {contraceptions.map(contraception => (
          <Item key={contraception.id}>
            <Item.Content>
              <Item.Header as="a">
                Contraceptive method Test{" "}
                {contraceptions.indexOf(contraception) + 1}{" "}
              </Item.Header>
              <Item.Meta>{contraception.date}</Item.Meta>
              <Item.Description>
                <div>Click View to see details.</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectActivity(contraception.id)}
                  floated="right"
                  content="View"
                  color="pink"
                />
                <Button
                  onClick={() => deleteActivity(contraception.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};
