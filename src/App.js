import { render } from '@testing-library/react';
import React from 'react'
import './App.css';
import styled from 'styled-components'
import { Whatslab } from './components/Whatslab';
import Mensagem from './components/Mensagem.js'


// const ContainerDoApp = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   max-width: 600px;
//   height: 100vh;
//   border: 1px solid black;
// `;

// const ContainerDaMensagem = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   padding: 20px;
//   justify-content: flex-end;
// `


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      mensagens: []
    }
  }

  adicionaMensagem = (mensagem) => {
    this.setState({mensagens: [...this.state.mensagens, mensagem]})
  }

  render() {
    return (
      <div>
        <div>
          {this.state.mensagens.map((mensagem, index) => <p key={index}><span>{mensagem.usuario}</span>{': ' + mensagem.texto}</p>)}
        </div>
        <form adicionaMensagem={this.adicionaMensagem} />
      </div>
    );
  }
}

export default App;




