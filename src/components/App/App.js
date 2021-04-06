import './App.css';
import SelectParty from '../SelectParty/SelectParty';
import MakeParty from '../MakeParty/MakeParty';
import PartyMaker from '../PartyMaker/PartyMaker';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path="/search">
        <SelectParty />
      </Route>
      <Route path="/make">
        <PartyMaker />
      </Route>
    </>
  );
}

export default App;
