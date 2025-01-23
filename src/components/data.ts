export interface ServiceType {
  id: number;
  image: string;
  tittle: string;
  desc: string;
  achievement?:string;
  education?:string
}

export const Doctors: ServiceType[] = [
  {
    id: 1,
    image: "/drSahil.jpg",
    tittle: "Dr. Sahil Rally",
    education:"MS,MBBS",
    achievement:"He has 8 national and international publications in his name and has even presented his work in various national and international conferences. He is also a life member of the Indian Society of Organ Transplantation and Indian Association of Gastrointestinal & Endo-Surgeons.",
    desc: "Dr. Sahil Rally is an expert kidney transplant surgeon with more than 4 years of experience in the field of kidney and pancreas transplant surgery and vascular access surgery. He has independently performed over 100 kidney transplant surgeries, about 600 vascular access & access salvage procedures and has assisted in about 300 kidney transplant surgeries. He has done his MBBS, MS (General Surgery) from GMC, Amritsar. Later he joined as a registrar in Transplant Surgery Department of PGIMER, Chandigarh and got his Fellowship in Renal and Pancreas Transplant Surgery from there. He has been actively involved in doing living donor and deceased donor transplant (both DBD/DCD) and ABO incompatible as well as swap transplants. Dr Sahil has also received training in various vascular access surgeries and vascular access salvage procedures.",
  },
  {
    id: 2,
    image: "/drAankanksha.jpg",
    tittle: "Dr. Aakanksha Sharma",
    education:"AIIMS (All India Institute of Medical Sciences, New Delhi)",
    achievement:"Dr. Aakanksha Sharma Monga has achieved numerous accolades in her illustrious career. An alumna of AIIMS, New Delhi, and PGIMER, Chandigarh, she has been recognized for her excellence in nephrology and kidney transplants. She has contributed to groundbreaking research, presented at leading conferences, and implemented innovative treatments. Her dedication to patient care and community health awareness sets her apart as a leader in her field.",
    desc: "Dr. Aakanksha Sharma Monga is a highly qualified and experienced Consultant Nephrologist and Kidney Transplant Physician associated with Edison Hospital, Sector 91, Mohali. With an MD from AIIMS, New Delhi, and a DM in Nephrology from PGIMER, Chandigarh, Dr. Aakanksha has dedicated her career to providing exceptional care for kidney-related diseases. Her expertise spans a wide range of conditions, including chronic kidney disease, diabetic kidney disease, hypertension, kidney infections, and kidney transplants. Dr. Aakanksha is committed to improving her patients quality of life by offering comprehensive solutions tailored to individual needs. Her compassionate approach and dedication make her a trusted name in nephrology.",
  },
];

export interface Testimonial {
  id: number; 
  name: string;
  role: string;
  feedback: string;
}


export const TestimonialsData:Testimonial[] = [
    {
      id: 1,
      name: "Sujeet kumar",
      role: "Patient",
      feedback:
        "It has been 3months I got my dialysis done here, I am personally like my dialysis here, good staff, and experience technician and the owner Abhishek sir too polite with patients and caring too.",
    },
    {
      id: 2,
      name: "Vinod kumar",
      role: "Patient",
      feedback:
        "Lal ji Dileysis center is very good sarvice Cleanliness is very good.Tofik sir and nusrat madam are very good team leaders Rajkishor and kumkum maam they do thair work very well or take good care of the patients Everything is Excellent",
    },
    {
      id: 3,
      name: "Anjali",
      role: "Patient",
      feedback:
        "Thank you for the excellent care and treatment offered by Doctors  and his team at Dr. Lal Ji Kidney Care Centre (LLP). The nursing staff is well-trained, caring, and supportive.",
    },
    {
      id: 3,
      name: "Ashok singh",
      role: "Patient",
      feedback:
        "They are very helpful and kind Staff is very cooperative, i bring my father for dialysis over here twice a week, good hygiene is also maintained, they treat us like family, Dr Taufeeq Samad is very humble,  thank you for your services",
    },
    {
      id: 3,
      name: "Vinod singh",
      role: "Patient",
      feedback:
        "Lal ji Dileysis center is very good sarvice Cleanliness is very good. Tofik sir and nusrat madam are very good team leaders Rajkishor and kumkum maam they do thair work very well or take good care of the patients Everything is Excellent",
    },
    {
      id: 3,
      name: "Manish Kumar",
      role: "Patient",
      feedback:
        "Nice all staf are very good 👍 and helpful,  and every dialysis change daylaser ,so no infection , I am so happy....... And spacly thanks and helpful good man Raj sir very nice person.",
    },
    {
      id: 3,
      name: "Preeti",
      role: "Patient",
      feedback:
        "Mere friend ke father ka yaha dialysis hota tha unki bhot khrab condition thi but this hospital hats off all staff and doctors. So wonderable technician's",
    },
    {
      id: 3,
      name: "Payal Sadwal",
      role: "Patient",
      feedback:
        "Thank you for the excellent care and treatment offered by doctors and his team at DR. Lal ji kidney care centre  ..... LLP the nursing staff is well-trained , caring, and supportive ❤🌺🙏❤ …",
    },
    
  ];

  export const Gallery:string[] = [
   "/gallery/dialysis.jpg",
   "/gallery/dialysis.jpg",
   "/gallery/dialysis.jpg",
   "/gallery/hospital.jpg",
   "/gallery/hospital.jpg",
   "/gallery/hospital.jpg",
   "/gallery/ward.jpg",
   "/gallery/ward.jpg",
   "/gallery/ward.jpg",
  ]

  export const Videos:string[] =[
    "https://www.youtube.com/embed/CbhEVSrmZMk",
    "https://www.youtube.com/embed/CbhEVSrmZMk",
    "https://www.youtube.com/embed/CbhEVSrmZMk",
    "https://www.youtube.com/embed/CbhEVSrmZMk",
    "https://www.youtube.com/embed/CbhEVSrmZMk",
    "https://www.youtube.com/embed/CbhEVSrmZMk",
    "https://www.youtube.com/embed/CbhEVSrmZMk",
    "https://www.youtube.com/embed/CbhEVSrmZMk",
  ]
