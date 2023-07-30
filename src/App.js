
import Createstudent from "./createstudent/createstudent";
import Student from "./student/student"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Update from "./update/update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Student/>}/>
      <Route path="/student/create" element={ <Createstudent/>}/>
      <Route path="/update/:id" element={ <Update/>}/>
      
      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
