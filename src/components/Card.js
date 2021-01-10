import React, { useEffect } from "react";
import styled from "styled-components";
import { COMPONENT_COLORS } from "../constant/theme";

//////////////// APP COMPONENTS ////////////////
import {
  Row,
  Col,
  CardWarpper,
  InfoSection,
  CardImage,
  CuteImage,
  Title,
  ActionButton,
} from "./shared/StyledComponents";
import LevelTube from "./LevelTube";
import cuteImage from "../cute.png";

const FindPokemonHP = (hp) => {
  let val = hp;
  return val > 100 ? 100 : val;
};

const FindPokemonStrength = (attacks) => {
  let val = attacks.length * 50;
  return val > 100 ? 100 : val;
};

const FindPokemonWeaknesses = (weaknesses) => {
  let val = weaknesses.length * 100;
  return val > 100 ? 100 : val;
};

const FindPokemonCuteRank = (hp, attacks, weakness) => {
  let totalDamage = 0;

  attacks.map((ele) => {
    let damage = ele.damage == "" ? [0] : ele.damage.match(/\d+/g);

    damage = damage.join("");

    totalDamage += parseInt(damage);
  });
  let cuteRank = hp / 10 + (totalDamage / 10 + 10) - weakness / 5;

  return cuteRank;
};

const Card = (props) => {
  const hp = FindPokemonHP(props.hp);
  const strength = FindPokemonStrength(props.attacks);
  const weaknesses = FindPokemonWeaknesses(props.weaknesses);
  const cuteRank = FindPokemonCuteRank(hp, props.attacks, weaknesses);

  const cuteList = [];
  for (let index = 0; index < cuteRank; index++) {
    cuteList[index] = <CuteImage key={"_cimg" + index} src={cuteImage} />;
  }
  // console.log(hp, strength, weaknesses);
  useEffect(() => {}, []);

  return (
    <CardWarpper>
      <Col width={35} bgColor={COMPONENT_COLORS.CARD_BACKGROUND}>
        <CardImage src={props.imageUrl} />
      </Col>
      <Col width={65} bgColor={COMPONENT_COLORS.CARD_BACKGROUND}>
        <InfoSection>
          <Row>
            <Col width={92}>
              <Title>{props.name}</Title>
            </Col>
            <Col width={8}>
              {props.type === "add" ? (
                <ActionButton
                  className="card-btn"
                  onClick={(e) =>
                    props.actionFunc({
                      id: props.id,
                      imageUrl: props.imageUrl,
                      name: props.name,
                      hp: props.hp,
                      attacks: props.attacks,
                      weaknesses: props.weaknesses,
                    })
                  }
                >
                  Add
                </ActionButton>
              ) : (
                <ActionButton
                  className="card-btn"
                  onClick={(e) =>
                    props.actionFunc({
                      id: props.id,
                      imageUrl: props.imageUrl,
                      name: props.name,
                      hp: props.hp,
                      attacks: props.attacks,
                      weaknesses: props.weaknesses,
                    })
                  }
                >
                  X
                </ActionButton>
              )}
            </Col>
          </Row>
          <Row>
            <Col width={30}>HP</Col>
            <Col width={70}>
              <LevelTube percent={hp} />
            </Col>
          </Row>
          <Row>
            <Col width={30}>STR</Col>
            <Col width={70}>
              <LevelTube percent={strength} />
            </Col>
          </Row>
          <Row>
            <Col width={30}>WEAK</Col>
            <Col width={70}>
              <LevelTube percent={weaknesses} />
            </Col>
          </Row>
          <Row>
            <Col width={100}>{cuteList.map((ele) => ele)}</Col>
          </Row>
        </InfoSection>
      </Col>
    </CardWarpper>
  );
};

export default Card;
