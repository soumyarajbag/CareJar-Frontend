import Doctor from "./components/Doctor"
import Specialist from "./components/Specialist"
import { doctors } from "./data/doctors"
import { specialists } from "./data/specialist"

const App = ():JSX.Element => {
  return (
    <>
     <div className="flex flex-row items-center justify-center gap-10 mb-10"> 
      {
        specialists.map((specialist , index) =>{ 
          return(
            <Specialist key={index} {...specialist}  />
        )})
      }
    </div>
    <div className="flex flex-col items-center justify-center gap-10"> 
      {
        doctors.map((doctor , index) =>{ 
          return(
            <Doctor key={index} {...doctor}  />
        )})
      }
    </div>
    </>
   
  )
}

export default App