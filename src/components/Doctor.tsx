import { DoctorType } from "../data/doctors"

const Doctor = (props:DoctorType) => {
    
    const {name , image , role , experience , fees , rating , place , chamber , patients , availability} = props ;
  return (
    <div className="flex flex-row  gap-10 p-4 border-t border-b border-black w-fit rounded-xl">
        <div className="flex items-start   ">
            <img className="h-48 w-48 rounded-full" src={image} alt="doctor" />
        </div>
        <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl text-blue-500 font-bold tracking-wider">{name}</h1>
            <h1 className="text-slate-600 text-lg font-semibold">{role}</h1>
            <h1 className="text-slate-600 text-lg font-semibold">{experience} Years experience overall</h1>
            <span className="flex gap-1"><h1 className="font-bold">{place}</h1> • {chamber}</span>
            <h1 className="text-slate-600 text-lg font-semibold">₹{fees} Consultation fee at clinic</h1>
            </div>
            <div className="flex flex-row gap-5">
                  <div className="bg-green-500 text-white font-semibold px-2">{rating}%</div>    
                  <h1 className="text-slate-800 font-semibold underline">{patients} Patient Stories</h1>  
            </div>
            
        </div>
        <div className="flex gap-3 flex-col items-center justify-end">
               {availability ?  <h1 className="text-green-500 font-bold tracking-wider text-lg">Available Today</h1> : <h1 className="text-red-500 font-bold tracking-wider text-lg">Unavailable Today</h1>}
                <button className="bg-sky-500 rounded-xl text-white px-7 py-1 text-center">
                    <h1 className="font-bold text-md tracking-wider">Book Appointment</h1>
                    <h1 className="text-sm">No Booking Fee</h1>
                </button>
        </div>
    </div>
  )
}

export default Doctor