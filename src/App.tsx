import { BrowserRouter, Route, Routes } from "react-router-dom"
import CategoryPage from "./screens/CategoryPage"
import DoctorsPage from "./screens/DoctorsPage"


const App = ():JSX.Element => {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
          <Route  path="/" element={<CategoryPage />}></Route>
          <Route  path={`/doctors/:role`} element={<DoctorsPage />}></Route>
        </Routes>
     </BrowserRouter>
     
     
    </>
   
  )
}

export default App