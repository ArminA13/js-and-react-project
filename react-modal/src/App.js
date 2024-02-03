import './App.css';
import OpenForm from './component/OpenForm';
import CustomizedDialogs from './component/OpenModal';


function App() {
  return (
    <div className="App">
      <CustomizedDialogs title= "User Form">
        <OpenForm/>
      </CustomizedDialogs>
    </div>
  );
}

export default App;
