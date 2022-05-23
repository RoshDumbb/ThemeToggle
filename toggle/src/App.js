import logo from './logo.svg';
import './App.css';
import Auth0ProviderWithHistory from './Components/Authentication';
import Toggle from './Components/Toggle';

function App() {
  return (
    <div className="App">
      <Auth0ProviderWithHistory/>
    {/* <Toggle/> */}
    </div>
  );
}

export default App;
