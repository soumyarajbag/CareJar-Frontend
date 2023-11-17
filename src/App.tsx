import Specialist from "./components/Specialist"
import { specialists } from "./data/specialist"

const App = ():JSX.Element => {
  return (
    <div className="flex flex-row items-center justify-center gap-10"> 
      {
        specialists.map((specialist , index) =>{ 
          return(
            <Specialist key={index} {...specialist}  />
        )})
      }
    </div>
  )
}

export default App