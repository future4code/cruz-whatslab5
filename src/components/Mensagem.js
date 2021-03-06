import React from "react";
import styled from "styled-components";
import icon from '../img/user.png';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 5px;
`;

const Mensagem = styled.div`
  display: flex;
  background-color: #DDF7C8;
  max-width: 600px;
  min-height: 4em;
  border-radius: 8px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  padding: 10px;
  justify-content: space-around;
`;
const Autor = styled.div`
  color: #9AAC8C;
  font-size: 13px;
  text-transform: capitalize;
  font-weight: bold;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  margin: 10px;
`;

export default class extends React.Component {
  render() {
    const mensagem = () => {
      if (this.props.autor.toLowerCase() === "eu") {
        return (
          <Container style={{ alignSelf: "flex-end" }}>
            <Mensagem>{this.props.texto}</Mensagem>
            <Avatar src={icon} />
          </Container>
        );
      } else {
        return (
          <Container>
            <Avatar src={icon} />
            <Mensagem style={{backgroundColor:'white'}}>
              <Autor>{this.props.autor}</Autor>
              {this.props.texto}
            </Mensagem>
          </Container>
        );
      }
    };
    return <>{mensagem()}</>;
  }
}
