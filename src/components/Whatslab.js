import React from 'react';
import styled from "styled-components"


// const ContainerApp = styled.div`
//     display: flex;
// `

// const InputUsuario = styled.input`
//     width: 100px;
// `

// const InputTexto = styled.input`
//     flex: 1;
// `



export class Whatslab extends React.Component {

constructor(props) {
    super(props)

    this.state = {

        valorUsuario: '',
        valorTexto: ''

    }
}

    onChangeUsuario = (event) => {
        this.setState({
            valorUsuario: event.target.value
        })
    }
    
    onChangeTexto = (event) => {
        this.setState({
            valorTexto: event.target.value
        })
    }
    
    onSendMensagem = () => {
        const mensagem = {
            usuario: this.target.value,
            texto: this.target.value
        }

        this.props.adicionaMensagem(mensagem)
    
        this.setState({valorTexto: ''})
    }
    
    render () {
        return (
            <div>
                <input type="text" placeholder={'Usuário'} onChange={this.onChangeUsuario} value={this.state.valorUsuario} />
                <input type="text" placeholder={'Mensagem'} onChange={this.onChangeTexto} value={this.state.valorMensagem}/>
                <button onClick={this.onSendMensagem}>Enviar</button>
            </div>
        );
    }
}
