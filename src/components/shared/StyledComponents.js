import styled from "styled-components";
import { COMPONENT_COLORS } from "../../constant/theme";

export const Row = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Col = styled.div`
  float: left;
  background-color: ${(props) => props.bgColor || ""};
  width: ${(props) => props.width}%;
`;

export const ListWarpper = styled.div`
  overflow-y: auto;
  height: ${(props) => props.height};
`;

export const Modal = styled.div`
  display: ${(props) => (props.isShowModal ? "block" : "none")};
  position: absolute;
  z-index: 2;
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 718px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

export const Input = styled.input`
  border: 4px solid ${COMPONENT_COLORS.SEARCH_BOX_BORDER};
  border-radius: 4px;
  width: 97%;
  height: 2em;
  font-size: 1em;
  outline: none;
`;

export const CardWarpper = styled.div`
  display: flex;
  align-items: stretch;
  margin 1em 0.5em;
  height: 13em;
  &:hover > div {
    box-shadow: 4px 6px 4px ${COMPONENT_COLORS.CARD_BOX_SHADOW_HOVER};
  }
  &:hover .card-btn {
   display:block;
  }
`;

export const InfoSection = styled.div`
  padding: 0.6em;
`;

export const CardImage = styled.img`
  width: 90%;
  max-height: 12em;
  max-width: 9em;
  padding: 0.6em;
`;

export const CuteImage = styled.img`
  height: 1.6em;
  padding: 0.5em 0.2em 0em 0em;
`;

export const Title = styled.div`
  font-family: Gaegu;
  font-size: 1.4em;
`;

export const ActionButton = styled.div`
  display: none;
  font-size: 1.2em;
  right: 0;
  color: ${COMPONENT_COLORS.BOTTOM_BAR_BACKGROUND};
`;

export const TubeContainer = styled.div`
  height: 20px;
  width: 100%;
  position: relative;
  margin: 5px 0px 0px 0px;
`;

export const TubeBaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 60px;
`;

export const TubeBackground = styled(TubeBaseBox)`
  background: ${COMPONENT_COLORS.LEVEL_TUBE_BACKGROUND};
  width: 100%;
`;

export const TubeProgress = styled(TubeBaseBox)`
  background: ${COMPONENT_COLORS.LEVEL_TUBE_VALUE_BACKGROUND};
  width: ${({ percent }) => percent}%;
`;
