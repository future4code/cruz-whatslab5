import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-start
`

const Mensagem = styled.div`
  display:flex;
  background-color: #EEE;
  width: 800px;
  min-height: 4em;
  border-radius: 8px;
  box-shadow: 5px 4px 3px gray;
  flex-direction: column;
  padding:5px;
  justify-content:space-around;
`
const Autor = styled.div`
  font-weight: bold;
`
const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  margin: 10px;
`



export default class extends React.Component {
  render(){
    return (
      <Container>
      <Avatar src='https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1615562533~hmac=a4d4a746381e3addff9a98d97147198c'/>
      <Mensagem>
        <Autor>{this.props.autor}</Autor>
        {this.props.texto}
      </Mensagem>
      </Container>
    )
  }
}