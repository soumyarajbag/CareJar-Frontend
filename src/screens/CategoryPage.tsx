import { useEffect, useState } from "react";
import Specialist from "../components/Specialist"
import axios from 'axios'
export interface SpecialistType {
  image : string;
  title : string;
  description : string;
}
const CategoryPage = ():JSX.Element => {
    const [specialists , setSpecialists] = useState<SpecialistType[]>([])
    const [loading , setLoading] = useState<boolean>(true)
    const [blank , setBlank] = useState<boolean>(false)
    const fetchSpecialists = async ()=>{
        try{
          const {data} = await axios.get('http://localhost:5000/api/specialists')
          if(data.specialists.length > 0){
            setSpecialists(data.specialists)
            setBlank(false)
            setLoading(false)
            console.log(data.specialists)
          }
          else{
              console.log('No Category found')
              setLoading(false)
              setBlank(true)
          }
        }
        catch(err){
          setLoading(false)
          console.log(err)
        }
    }
    useEffect(()=>{
      fetchSpecialists()
    } , [])
    
  return (
    <div className="flex flex-col px-2 xl:h-screen justify-center items-center">
        <div className="flex flex-col items-start">
        <h1 className="font-bold tracking-wider mb-1 text-3xl">Book an appointment for an in-clinic Consultation</h1>
        <h1 className="font-medium text-lg mb-3">Find experienced doctors across all the specialities</h1>
      
      
    {loading ? <h1>Loading...</h1> : <div className="flex flex-row flex-wrap items-center justify-center gap-10 mb-10"> 
      {
        specialists.map((specialist , index) =>{ 
          return(
            <Specialist key={index} {...specialist}  />
        )})
      }
        </div>}
        {
        blank ? <h1>No doctors found</h1> : null
    }
    </div>
    
   
    </div>
  )
}

export default CategoryPage