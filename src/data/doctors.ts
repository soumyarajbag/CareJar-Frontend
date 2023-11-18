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

export const doctors: Array<DoctorType> =[
    {
      name: "Dr. Alice Johnson",
      image: "https://example.com/profile1.jpg",
      role: "Cardiologist",
      experience: 12,
      fees: 1100,
      place: "City Hospital",
      chamber: "A-101",
      rating: 95,
      patients: 130,
      availability: true
    },
    {
      name: "Dr. Michael Smith",
      image: "https://example.com/profile2.jpg",
      role: "Pediatrician",
      experience: 15,
      fees: 1200,
      place: "Central Clinic",
      chamber: "B-202",
      rating: 93,
      patients: 150,
      availability: true
    },
    {
      name: "Dr. Emily Brown",
      image: "https://www.cochrane.org/sites/default/files/public/styles/social_media/public/uploads/news/young-confident-asian-male-dentist-medical-treatment-to-a-female-patient-at-the-clinic.-dental-clinic-concept-911844046_1257x838_3.jpeg?itok=o_u29Fn3",
      role: "Dermatologist",
      experience: 18,
      fees: 1300,
      place: "Metro Hospital",
      chamber: "C-303",
      rating: 90,
      patients: 140,
      availability: false
    },
    {
      name: "Dr. Daniel Wilson",
      image: "https://example.com/profile4.jpg",
      role: "Psychiatrist",
      experience: 20,
      fees: 1400,
      place: "Community Clinic",
      chamber: "D-404",
      rating: 96,
      patients: 160,
      availability: true
    },
    {
      name: "Dr. Olivia Clark",
      image: "https://example.com/profile5.jpg",
      role: "Orthopedic Surgeon",
      experience: 22,
      fees: 1500,
      place: "General Hospital",
      chamber: "E-505",
      rating: 88,
      patients: 120,
      availability: true
    },
    {
      name: "Dr. William Garcia",
      image: "https://example.com/profile6.jpg",
      role: "Ophthalmologist",
      experience: 17,
      fees: 1250,
      place: "Specialty Clinic",
      chamber: "F-606",
      rating: 94,
      patients: 170,
      availability: false
    },
    {
      name: "Dr. Sophia Martinez",
      image: "https://example.com/profile7.jpg",
      role: "Gynecologist",
      experience: 19,
      fees: 1350,
      place: "Regional Hospital",
      chamber: "G-707",
      rating: 92,
      patients: 180,
      availability: true
    },
    {
      name: "Dr. Ethan Wilson",
      image: "https://example.com/profile8.jpg",
      role: "Neurologist",
      experience: 16,
      fees: 1150,
      place: "University Clinic",
      chamber: "H-808",
      rating: 97,
      patients: 110,
      availability: true
    },
    {
      name: "Dr. Ava Thompson",
      image: "https://example.com/profile9.jpg",
      role: "ENT Specialist",
      experience: 21,
      fees: 1450,
      place: "Private Practice Clinic",
      chamber: "I-909",
      rating: 91,
      patients: 190,
      availability: false
    },
    {
      name: "Dr. Benjamin Davis",
      image: "https://example.com/profile10.jpg",
      role: "Urologist",
      experience: 14,
      fees: 1050,
      place: "Family Clinic",
      chamber: "J-1010",
      rating: 98,
      patients: 200,
      availability: true
    }
  ]
  
  
  
