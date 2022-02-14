import 'bulma/css/bulma.min.css'
import './App.css'
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

function App() {
  return (
    <div style={{
      
    }} className="">
      <div style={{
        background: '#16202a'
      }}>
        <Header />
        <Section1 />
        <Section2 />
      </div>
      <Section3 />
      <div style={{
        // background: '#fede91'
      }}>
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
}

export default App;
