import React, { useState, useEffect } from "react";
import { debounce } from "debounce";
import fetch from "cross-fetch";
import { TYPES } from "../constant/pokemon";

//////////////// APP COMPONENTS ////////////////
import {
  Row,
  Col,
  Input,
  ListWarpper,
  Modal,
  ModalContent,
} from "./shared/StyledComponents";
import Card from "./Card";

export const FetchData = (setData, searchName = "") => {
  let type = "";
  if (searchName !== "" && TYPES.includes(searchName.toLocaleUpperCase())) {
    type = searchName;
    searchName = "";
  }
  return fetch(
    `http://localhost:3030/api/cards?limit=50&name=${searchName}&type=${type}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      data = data.cards.filter(
        (ele) =>
          ele.supertype === "Pokémon" ||
          ele.supertype.toLowerCase() === "pokemon"
      );
      setData(data);

      return data;
    });
};

const LoadData = debounce(FetchData, 500);

const SearchInput = (props) => {
  const [searchName, setSearchName] = useState("");
  const [data, setData] = useState([]);
  let selectedVal = props.selectedData.map((ele) => ele.id);

  useEffect(() => {
    LoadData(setData, searchName);
  }, [searchName, props.isShowModal, selectedVal.length]);

  return (
    <Modal
      className="modal-container"
      isShowModal={props.isShowModal}
      onClick={props.handdleIsShowModalChange}
    >
      <ModalContent>
        <ListWarpper height={"650px"}>
          <Row>
            <Col width={100}>
              <Input
                placeholder="find Pokemon"
                onChange={(e) => setSearchName(e.target.value)}
              />
            </Col>
          </Row>
          <ListWarpper height={"600px"}>
            {data
              .filter((ele) => !selectedVal.includes(ele.id))
              .map((ele) => (
                <Row key={"_mrow" + ele.id}>
                  <Col width={100}>
                    <Card
                      id={ele.id}
                      type="add"
                      imageUrl={ele.imageUrl}
                      name={ele.name}
                      hp={ele.hp}
                      attacks={ele.attacks}
                      weaknesses={ele.weaknesses}
                      actionFunc={props.setSelectedData}
                    />
                  </Col>
                </Row>
              ))}
          </ListWarpper>
        </ListWarpper>
      </ModalContent>
    </Modal>
  );
};

export default SearchInput;
