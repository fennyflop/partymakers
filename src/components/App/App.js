import './App.css';
import SelectParty from '../SelectParty/SelectParty';
import MakeParty from '../MakeParty/MakeParty';
import PartyMaker from '../PartyMaker/PartyMaker';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path="/select">
        <SelectParty />
      </Route>
      <Route path="/maker">
        <PartyMaker />
      </Route>
    </>
  );
}

export default App;
