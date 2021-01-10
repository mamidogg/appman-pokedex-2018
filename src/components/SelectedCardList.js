import React, { useEffect } from "react";
import { Col, ListWarpper } from "./shared/StyledComponents";

//////////////// APP COMPONENTS ////////////////
import Card from "./Card";

const SelectedCardList = (props) => {
  useEffect(() => {}, [props.selectedData]);

  return (
    <ListWarpper height={"600px"}>
      {props.selectedData.map((ele) => (
        <Col width={50}>
          <Card
            id={ele.id}
            type="remove"
            imageUrl={ele.imageUrl}
            name={ele.name}
            hp={ele.hp}
            attacks={ele.attacks}
            weaknesses={ele.weaknesses}
            actionFunc={props.setRemovedData}
          />
        </Col>
      ))}
    </ListWarpper>
  );
};

export default SelectedCardList;
