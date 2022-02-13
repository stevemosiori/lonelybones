import logo from './logo.svg';
import 'bulma/css/bulma.min.css'
import './App.css'
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function App() {
  return (
    <div style={{
      background: '#16202a',
    }} className="container">
      <Header />
      <Section1 />
      <Section2 />
      <Section2 />
    </div>
  );
}

export default App;
