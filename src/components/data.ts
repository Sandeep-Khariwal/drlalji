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
