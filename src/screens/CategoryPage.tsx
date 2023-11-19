import { useEffect, useState } from "react";
import Specialist from "../components/CategoryCard"
import axios from 'axios'
import DotLoader from "react-spinners/DotLoader";
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
          const {data} = await axios.get('https://care-jar-server.vercel.app/api/specialists')
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
    <div className="flex flex-col px-2 2xl:mt-[250px] justify-center items-center">
        <div className="flex flex-col items-start">
        <h1 className="font-bold tracking-wider  mb-1 text-3xl">Book an appointment for an in-clinic Consultation</h1>
        <h1 className="font-medium text-lg mb-3">Find experienced doctors across all the specialities</h1>
      
      
    {loading ? <div className="mt-10 w-full flex flex-col items-center justify-center">
           <DotLoader color="#36d7b7" />
           <h1 className="text-xl font-semibold text-blue-500">Loading...</h1>
           </div> : <div className="flex flex-row flex-wrap items-center justify-center gap-10 mb-10"> 
      {
        specialists.map((specialist , index) =>{ 
          return(
            <Specialist key={index} {...specialist}  />
        )})
      }
        </div>}
        {
        blank ? <div className="h-screen flex items-center justify-center">
        <h1 className="font-bold text-2xl tracking-widest">No Categories found</h1>
      </div> : null
    }
    </div>
    
   
    </div>
  )
}

export default CategoryPage