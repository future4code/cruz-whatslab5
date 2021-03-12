import Mensagem from './components/Mensagem.js'

function App() {
  return (
    <div style={{backgroundColor:'gainsboro', width:'1000px', display:'flex', flexDirection:'column'}}>
      <Mensagem autor='Nicolas' texto='Está é mensagem!'/>
      <Mensagem autor='Eu' texto='E está é a minha mensagem!'/>
      <Mensagem autor='Lorem' texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis mauris vitae dui laoreet sodales. Proin feugiat a libero et porta. Praesent id auctor nibh, sit amet cursus massa. Maecenas pretium eget nisi vitae malesuada. Proin tincidunt sodales velit, at commodo arcu. Donec ut justo consequat diam tempus sagittis vitae sit amet justo.'/>
      <Mensagem autor='eu' texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis mauris vitae dui laoreet sodales. Proin feugiat a libero et porta. Praesent id auctor nibh, sit amet cursus massa. Maecenas pretium eget nisi vitae malesuada. Proin tincidunt sodales velit, at commodo arcu. Donec ut justo consequat diam tempus sagittis vitae sit amet justo.'/>

    </div>
  );
}

export default App;
