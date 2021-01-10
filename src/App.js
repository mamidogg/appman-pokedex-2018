import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { COMPONENT_COLORS } from "./constant/theme";

//////////////// APP COMPONENTS ////////////////
import SelectedCardList from "./components/SelectedCardList.js";
import SearchModal from "./components/SearchModal.js";

const Header = styled.div`
  font-size: 2.5em;
  text-align: center;
  color: black;
`;

const Footer = styled.div`
  height: 4em;
  width: 100%;
  background-color: ${COMPONENT_COLORS.BOTTOM_BAR_BACKGROUND};
  overflow: hidden;
  position: absolute;
  bottom: 0;
`;

const ButtonDiv = styled.div`
  line-height: 0em;
  font-size: 3.8em;
  z-index: 1;
  height: 1.8em;
  width: 1.8em;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  text-align: center;
  background-color: ${COMPONENT_COLORS.BOTTOM_BAR_BACKGROUND};
  border-radius: 50%;
  -webkit-box-shadow: inset 1px 2px 6px -6px;
  ${COMPONENT_COLORS.BOTTOM_BAR_BOX_SHADOW};
  -moz-box-shadow: inset 1px 2px 6px -6px;
  ${COMPONENT_COLORS.BOTTOM_BAR_BOX_SHADOW};
  box-shadow: inset 1px 2px 6px -6px;
  ${COMPONENT_COLORS.BOTTOM_BAR_BOX_SHADOW};
`;

const ButtonDivText = styled.div`
  color: ${COMPONENT_COLORS.BOTTOM_BAR_TEXT_COLOR};
  font-size: 1.6em;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class App extends Component {
  state = {
    isShowModal: false,
    selectedData: [],
  };

  handdleIsShowModalChange = (e) => {
    if (
      this.state.isShowModal &&
      e.target.getAttribute("class") &&
      e.target.getAttribute("class").includes("modal-container")
    ) {
      this.setState({ isShowModal: false });
    } else if (this.state.isShowModal) {
    } else this.setState({ isShowModal: !this.state.isShowModal });
  };

  setSelectedData = (obj) => {
    this.setState({
      selectedData: [...this.state.selectedData, obj],
    });
  };

  setRemovedData = (obj) => {
    this.setState({
      selectedData: [
        ...this.state.selectedData.filter((ele) => ele.id !== obj.id),
      ],
    });
  };

  render() {
    return (
      <div className="app">
        <Header>My Pokedex</Header>

        <SelectedCardList
          setSelectedData={this.setSelectedData}
          setRemovedData={this.setRemovedData}
          selectedData={this.state.selectedData}
        />
        <ButtonDiv onClick={this.handdleIsShowModalChange}>
          <ButtonDivText>+</ButtonDivText>
        </ButtonDiv>
        <Footer></Footer>
        <SearchModal
          isShowModal={this.state.isShowModal}
          handdleIsShowModalChange={this.handdleIsShowModalChange}
          setSelectedData={this.setSelectedData}
          selectedData={this.state.selectedData}
        ></SearchModal>
      </div>
    );
  }
}

export default App;
