import { SpecialistType } from "../data/specialist"
const Specialist = (props:SpecialistType) => {
    const { description, image , title} = props ;
  return (
    <div className="flex flex-col p-4 rounded-xl items-start w-[320px] border border-black">
        <img className=" h-[200px] object-cover" src={image} alt="doctor" />
        <h1 className="text-2xl font-bold tracking-wide">{title}</h1>
        <p className="text-lg">{description}</p>
    </div>
  )
}

export default Specialist