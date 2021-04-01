import SelectParty from '../SelectParty/SelectParty';
import MakeParty from '../MakeParty/MakeParty';
import QueryInput from '../QueryInput/QueryInput';
import Query from '../Query/Query';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path="/query">
        <Query />
      </Route>
      <Route path="/select">
        <SelectParty />
      </Route>
      <Route path="/make">
        <MakeParty />
      </Route>
    </>
  );
}

export default App;
