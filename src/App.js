import './App.css';
import UserState from './Context/UserState';
import Page from './Page';

function App() {
  return (
    <UserState>
    <Page/>
    </UserState>
  );
}

export default App;
