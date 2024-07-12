import './App.css';
import Card from './Playercard/Card';
import gian from './gian.webp'
import jam from './jam.webp'
import kyre from './kyrieirving-1061271464.webp'

function App() {
  return (
    <div className="App">
     <Card img={gian} position='POWER FORWARD' name='GIANNIS ANTET' min='25' points='21' assists='3.5' steal='0.7' />
     <Card img={jam} position='SHOTING GUARD' name='JAMES HARDIN' min='35' points='28' assists='3.9' steal='0.9' />
     <Card img={kyre} position='POINT GUARD' name='KYRIE IRVING' min='40' points='32' assists='3.5' steal='0.3' />
    </div>
  );
}

export default App;
