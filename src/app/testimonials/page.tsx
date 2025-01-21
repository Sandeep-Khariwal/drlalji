import React from 'react'
import Testimonials from '../../components/Testimonials'
import { Metadata } from 'next';
import { TestimonialsData } from '@/components/data';

export const metadata:Metadata = {
  title: {
    absolute:"drlaljikidneycenter testimonials: check what our patients say's"
  },
  description:"Check what our patients saying about Dr. lal ji kidney care center. check review of our patients with Dr. lal ji kidney care center . Reach out today!"
}

export default function Page() {
  return (
    <div>
      <Testimonials testimonials={TestimonialsData}/>
    </div>
  )
}
