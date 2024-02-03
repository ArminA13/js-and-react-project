import './App.css';
import OpenForm from './component/openForm';
import CustomizedDialogs from './component/openModal';


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
