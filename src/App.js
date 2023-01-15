import './App.css';
import {SelectName} from "./selectName";
import {users} from "./Users";
function App() {
  return (
      <div className={"site"}>
          <h1>user information</h1>
            <SelectName data={users} title="users"></SelectName>

      </div>
  );
}

export default App;
