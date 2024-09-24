const Testimonial = () => {
  return (
    <div className="mt-24">
      <h1 className="font-yukita text-5xl font-bold text-[#000000] text-center">What people are saying</h1>
      <div className="flex flex-wrap gap-12 justify-center items-center mt-12">
        <div class="relative">
          <img
            src="/assets/testimonial/T1.png"
            alt="hero"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-white/100  via-transparent to-transparent"></div>
        </div>
        <div class="relative">
          <img
            src="/assets/testimonial/T2.png"
            alt="hero"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-white/100  via-transparent to-transparent"></div>
        </div>
        <div class="relative">
          <img
            src="/assets/testimonial/T3.png"
            alt="hero"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-white/100  via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
