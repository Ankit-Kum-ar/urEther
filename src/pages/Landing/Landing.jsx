import Benefit from "./components/Benefit"
import CTA from "./components/CTA"
import Feature from "./components/Feature"
import Hero from "./components/Hero"
import Testimonial from "./components/Testimonial"
import Work from "./components/Work"

const Landing = () => {
  return (
    <div>
      <Hero />
      <Benefit />
      <Feature />
      <Work />
      <Testimonial />
      <CTA />
    </div>
  )
}

export default Landing
