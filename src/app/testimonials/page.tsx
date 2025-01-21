import React from 'react'
import Testimonials from '../../components/Testimonials'
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: {
    absolute:"drlaljikidneycenter testimonials: check what our patients say's"
  },
  description:"Check what our patients saying about Dr. lal ji kidney care center. check review of our patients with Dr. lal ji kidney care center . Reach out today!"
}

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

export default function Page() {
  return (
    <div>
      <Testimonials testimonials={TestimonialsData}/>
    </div>
  )
}
