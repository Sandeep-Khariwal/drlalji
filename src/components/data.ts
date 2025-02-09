export interface ServiceType {
  id: number;
  image: string;
  tittle: string;
  desc: string;
  achievement?: string;
  education?: string;
}

export const Doctors: ServiceType[] = [
  {
    id: 1,
    image: "/doctors/drSahil.jpg",
    tittle: "Dr. Sahil Rally",
    education: "MS,MBBS",
    achievement:
      "He has 8 national and international publications in his name and has even presented his work in various national and international conferences. He is also a life member of the Indian Society of Organ Transplantation and Indian Association of Gastrointestinal & Endo-Surgeons.",
    desc: "Dr. Sahil Rally is an expert kidney transplant surgeon with more than 4 years of experience in the field of kidney and pancreas transplant surgery and vascular access surgery. He has independently performed over 100 kidney transplant surgeries, about 600 vascular access & access salvage procedures and has assisted in about 300 kidney transplant surgeries. He has done his MBBS, MS (General Surgery) from GMC, Amritsar. Later he joined as a registrar in Transplant Surgery Department of PGIMER, Chandigarh and got his Fellowship in Renal and Pancreas Transplant Surgery from there. He has been actively involved in doing living donor and deceased donor transplant (both DBD/DCD) and ABO incompatible as well as swap transplants. Dr Sahil has also received training in various vascular access surgeries and vascular access salvage procedures.",
  },
  {
    id: 2,
    image: "/doctors/drAankanksha.jpg",
    tittle: "Dr. Aakanksha Sharma",
    education: "AIIMS (All India Institute of Medical Sciences, New Delhi)",
    achievement:
      "Dr. Aakanksha Sharma Monga has achieved numerous accolades in her illustrious career. An alumna of AIIMS, New Delhi, and PGIMER, Chandigarh, she has been recognized for her excellence in nephrology and kidney transplants. She has contributed to groundbreaking research, presented at leading conferences, and implemented innovative treatments. Her dedication to patient care and community health awareness sets her apart as a leader in her field.",
    desc: "Dr. Aakanksha Sharma Monga is a highly qualified and experienced Consultant Nephrologist and Kidney Transplant Physician associated with Edison Hospital, Sector 91, Mohali. With an MD from AIIMS, New Delhi, and a DM in Nephrology from PGIMER, Chandigarh, Dr. Aakanksha has dedicated her career to providing exceptional care for kidney-related diseases. Her expertise spans a wide range of conditions, including chronic kidney disease, diabetic kidney disease, hypertension, kidney infections, and kidney transplants. Dr. Aakanksha is committed to improving her patients quality of life by offering comprehensive solutions tailored to individual needs. Her compassionate approach and dedication make her a trusted name in nephrology.",
  },
  {
    id: 3,
    image: "/doctors/dr-avinash-pic.jpg",
    tittle: "Dr. Avinash Srivastava",
    education: "MBBS. MS. MCH ( UROLOGY )",
    achievement:
      "He is a life member of the Urological Society of India, North Zone Chapter of Urology Society of India, Indian Society of Organ Transplant. He has presented various papers and posters in both National and International conferences. He has also been invited as Chairperson in various Urological conferences and forums at national and Zone levels",
    desc: "Dr. Avinash Srivastava has an experience of more than 20 years in the field of Urology and Renal Transplant. He has set up the Urology department in this hospital and has been running it successfully for over 20 years now. He is adept in all urological procedures like TURP including laser TURP, PCNL, URS, Radical nephrectomise and complicated laparoscopic surgeries. His field of interest include reconstructive surgeries for stricture urethra, etc",
  },
  {
    id: 4,
    image: "/doctors/dr-rakha-kaushal-pic.jpg",
    tittle: "Dr. Raka Kaushal",
    education: "MBBS. MD. DM ( NEPHROLOGY )",
    achievement:
      "She is a life member of the Indian Society of Nephrology, North Zone Chapter of Indian Society Of Nephrology, Indian Society of Organ Transplant. She has presented various papers and posters in both National and International conferences. She has also been invited as Chairperson in various Nephrological conferences and forums at national and Zone levels.",
    desc: "Dr. Raka Kaushal has an experience of more than 20 years in the field of Nephrology and Renal Transplant. She has set up one of the largest dialysis centres in North India with world’s latest machines and supportive equipment. As a Leading Nephrologist of the region, She has Supervised over 1,00,000 dialysis and over 800 Renal Transplants.",
  },
  {
    id: 5,
    image: "/doctors/dr-attri.jpg",
    tittle: "Dr. Tarun Attri",
    education: "Dr. Tarun Attri holds DEM, FDM, FAM, PGDMLE, an MBA in Hospital Healthcare, and certifications in Operation Management and Artificial Intelligence in Healthcare.",
   achievement:"Dr. Attri boasts over a decade of vast experience in clinical services, particularly focusing on nephrology and hemodialysis. His extensive expertise, leadership as Medical Superintendent, and innovative contributions to healthcare have earned him recognition and accolades throughout his career.",
    desc:"Dr. Tarun Attri is a dedicated medical professional with over 10 years of experience in the field of medicine. With a specialization and keen interest in nephrology and patient care, he consistently strives to blend traditional and modern approaches to enhance the well-being of his patients. Currently serving as the Medical Superintendent, Dr. Attri is committed to delivering exceptional clinical services and improving healthcare outcomes."
    },
    {
      id:6,
      image:"/doctors/dr-saptarghya.jpg",
      tittle:"Dr. Saptarghya Mandal",
      education:"Dr. Saptarghya Mandal earned his M.D. in Internal Medicine from PGIMER, Chandigarh (2021–2023) and completed his MBBS from Medical College & Hospital, Kolkata (2014–2020).",
      achievement:"Dr. Saptarghya Mandalbrings years of hands-on experience in managing critical cases, with expertise in ICU management, patient handling, and advanced procedures like intubation, central lines, and chest tubes. His skills extend to managing complex illnesses, including coronary artery disease, heart failure, chronic kidney disease, and autoimmune diseases. With multilingual capabilities in English, Hindi, Bengali, and Punjabi, Dr. Mandal ensures effective communication with a diverse range of patients.",
      desc:"Dr. Saptarghya Mandal is a dedicated and hardworking medical professional with extensive experience in patient assessment, differential diagnosis, and treatment prescription. Currently serving in multiple capacities, including Senior Resident roles in Critical Care Units and Consultant in Internal Medicine, Dr. Mandal has a strong commitment to providing exceptional patient care across various healthcare settings."
    },
    // {
    //   id:6,
    //   image:"",
    //   tittle:"",
    //   education:"",
    //   achievement:"",
    //   desc:""
    // },
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
}

export const TestimonialsData: Testimonial[] = [
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
    id: 4,
    name: "Ashok singh",
    role: "Patient",
    feedback:
      "They are very helpful and kind Staff is very cooperative, i bring my father for dialysis over here twice a week, good hygiene is also maintained, they treat us like family, Dr Taufeeq Samad is very humble,  thank you for your services",
  },
  {
    id: 5,
    name: "Vinod singh",
    role: "Patient",
    feedback:
      "Lal ji Dileysis center is very good sarvice Cleanliness is very good. Tofik sir and nusrat madam are very good team leaders Rajkishor and kumkum maam they do thair work very well or take good care of the patients Everything is Excellent",
  },
  {
    id: 6,
    name: "Manish Kumar",
    role: "Patient",
    feedback:
      "Nice all staf are very good 👍 and helpful,  and every dialysis change daylaser ,so no infection , I am so happy....... And spacly thanks and helpful good man Raj sir very nice person.",
  },
  {
    id: 7,
    name: "Preeti",
    role: "Patient",
    feedback:
      "Mere friend ke father ka yaha dialysis hota tha unki bhot khrab condition thi but this hospital hats off all staff and doctors. So wonderable technician's",
  },
  {
    id: 8,
    name: "Payal Sadwal",
    role: "Patient",
    feedback:
      "Thank you for the excellent care and treatment offered by doctors and his team at DR. Lal ji kidney care centre  ..... LLP the nursing staff is well-trained , caring, and supportive ❤🌺🙏❤ …",
  },
];

export const Gallery: string[] = [
  "/gallery/dialysis.jpg",
  "/gallery/hospital.jpg",
  "/gallery/ward.jpg",
  "/gallery/ward1.jpg",
  "/gallery/ward2.jpg",
  "/gallery/ward3.jpg",
];

export const Videos: string[] = [
  "https://www.youtube.com/embed/K5Fn0esgpss",
  "https://www.youtube.com/embed/LWDPa2zYgbE",
  "https://www.youtube.com/embed/veaAoaZGNc",
  "https://www.youtube.com/embed/j3OfwPAWlDo"
];
