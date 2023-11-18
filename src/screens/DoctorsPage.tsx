import Doctor from "../components/Doctor";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export interface DoctorType {
  name: string;
  image: string;
  role: string;
  experience: number;
  fees: number;
  place: string;
  chamber: string;
  rating: number;
  patients: number;
  availability: boolean;
}
import DotLoader from "react-spinners/DotLoader";

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState<DoctorType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [blank, setBlank] = useState<boolean>(false);
  const { role } = useParams<string>();
  console.log(role)
  const encodedRole = encodeURIComponent(role!);
  const fetchDoctors = async () => {
    
    try {
  
      const { data } = await axios.get(
        `http://localhost:5000/api/doctors/${encodedRole}`
      );
      if (data.doctorsbyrole.length > 0) {
        setDoctors(data.doctorsbyrole);
        setBlank(false);

        
      } else {
        console.log("No doctors found");
        setBlank(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
   useEffect(() => {
    setLoading(true)
     fetchDoctors();
     setTimeout(()=>{
        setLoading(false)
     },1500)
   }, [role]);
   
  return (
    <>
      <div className="flex flex-col justify-center  items-center mt-[3%] mb-[5%] ">
        <div className="flex flex-col  gap-5">
          { <h1 className={` font-bold px-3 xl:px-0  text-start text-slate-600 text-2xl xl:text-3xl`}>{role}s </h1>}
          {loading ? (
           <div className="h-screen flex flex-col items-center justify-center">
           <DotLoader color="#36d7b7" />
           <h1 className="text-xl font-semibold text-blue-500">Loading...</h1>
           </div>
          ) : (
            <div className="flex flex-col flex-wrap items-center  justify-center gap-10">
              {doctors.map((doctor: DoctorType, index) => {
                return <Doctor key={index} {...doctor} />;
              })}
            </div>
          )}
          {blank ? <div className="h-screen flex items-center justify-center">
            <h1 className="font-bold text-2xl tracking-widest">No {role}s found</h1>
          </div> : null}
        </div>
      </div>
    </>
  );
};

export default DoctorsPage;
