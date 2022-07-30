import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <h1>
        my project
      </h1>
      <Header />
      <Content/>
      <Footer/>
    </div>
   
  );
}
export default App;
