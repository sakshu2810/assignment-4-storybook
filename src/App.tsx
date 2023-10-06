import { Button } from './stories/button/Button';
import Textfield from './stories/textField/Textfield';

function App() {
  return (
    <div className="App" style={{display:'flex', flexDirection: 'column', gap: '16px'}}>
      <Textfield label='Name' placeholder='Enter your name' handleChange={(e)=>{console.log(e)}} />
      <Button label='Click me' backgroundColor='#f05a28' size='large' onClick={()=>{console.log('button clicked')}}/>
    </div>
  );
}

export default App;
