import { render } from '@testing-library/react';
import React from 'react'
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
      mensagens: [
        {autor: 'Nicolas', texto: 'Mensagem de teste'},
        {autor: 'Alexandre', texto: 'Mensagem de teste'},
        {autor: 'eu', texto: 'Mensagem de teste'}
      ]
    }
  }

  adicionaMensagem = (mensagem) => {
    this.setState({mensagens: [...this.state.mensagens, mensagem]})
  }


  render() {
    const mensagens = this.state.mensagens.map((mensagem)=>{
      return <Mensagem autor={mensagem.autor} texto={mensagem.texto}/>
    })
    return (
      <div>
        <div>
          {mensagens}
        </div>
        <form adicionaMensagem={this.adicionaMensagem} />
      </div>
    );
  }
}

export default App;




