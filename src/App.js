import About from "./views/About";
import LandingPage from "./views/LandingPage";
import User from "./views/User";
import Error from "./views/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./componens/TodoList";
import { GoHome } from "./componens/GoHome";
import StoreProvider from "./store/StoreProvider";

function App() {

  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GoHome/>}>
            <Route path="/about" element= {<About/>} /> 
            <Route index element={<LandingPage/>} />
            <Route path='user/:username' element={<User/>} />
            <Route path="*" element={<Error/>} />
            <Route path="list" element={<TodoList/>} />
          </Route>

        </Routes>
      </BrowserRouter>
     </div>
   )
}
 
export default App;