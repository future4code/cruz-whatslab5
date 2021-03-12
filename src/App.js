import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import { Whatslab } from "./components/Whatslab";
import Mensagem from "./components/Mensagem";

const ContainerMensagem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30%;  
  justify-content: flex-end;
  align-items: center;
  background-color: #d0e1e1;
  flex: 1 1 0%;
  height: 100vh;
  border: 1px solid black;

`

const UsuarioInput = styled.input`
  padding: 5px;
  font-size: 16px;
  border: medium none;
  border-radius: 5px;
  margin: 8px;
`

const TextoInput = styled.input`
  padding: 5px;
  font-size: 16px;
  border: medium none;
  border-radius: 5px;
  margin: 8px;
`

const BotaoEnviar = styled.button`
  border: medium none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
  margin: 10px;
  background-color: white;
`

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mensagens: [
        {usuario: 'eu', texto: 'teste'},
        {usuario: 'Usuario', texto: 'teste'}
      ],

      inputUsuario: '',
      InputMensagem: '',
    };
  }



  usuarioHandle = (event) =>{
    this.setState({inputUsuario: event.target.value})
  }
  mensagemHandle = (event) =>{
    this.setState({InputMensagem: event.target.value})
  }
  apagarMensagem = (usuario) => {
    let novasMensagens = this.state.mensagens.filter((mensagem)=>
    {
      if(!(mensagem.usuario === usuario)){
        return true;
      }
    })
    this.setState({mensagens: novasMensagens})
  }
  adicionaMensagem = () => {
    let novaMensagem = {
      usuario: this.state.inputUsuario,
      texto: this.state.InputMensagem,
    }
    if(novaMensagem.usuario === undefined || novaMensagem.usuario === '' || novaMensagem.texto === '' || novaMensagem.texto === undefined){
      return(alert('Preencha todos os campos'));
    }
    this.setState({ mensagens: [...this.state.mensagens, novaMensagem] });
  };

  render() {
    const mensagens = this.state.mensagens.map((mensagem) => {
      return <div style={{display:"flex", flexDirection:'column'}} onDoubleClick={()=>this.apagarMensagem(mensagem.usuario)}><Mensagem  autor={mensagem.usuario} texto={mensagem.texto} /></div>;
    });

    return (
      <ContainerMensagem>
      <div>
        {mensagens}
        <UsuarioInput value={this.state.inputUsuario} onChange={this.usuarioHandle} placeholder="Usuario" />
        <TextoInput value={this.state.InputMensagem} onChange={this.mensagemHandle} placeholder="Mensagem" />
        <BotaoEnviar onClick={this.adicionaMensagem} >Enviar</BotaoEnviar>
      </div>
      </ContainerMensagem>
    );
  }
}

export default App;