const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <h1 className="text-6xl font-bold font-sfpro text-center">
        <span className="text-[#2752E7]">Your one stop solution</span>
      </h1>
      <h1 className="text-6xl font-bold font-sfpro text-center mt-3">
        <span>for Ether Exchange</span>
      </h1>

      <p className="mt-4 text-[#626262] text-xl">
        Open a free account in minutes right from your phone and make your money go further
      </p>

      {/* Email form */}
      <form className="flex flex-row mt-8 gap-3" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter Address..."
          className="px-9 py-4 border border-solid border-[#CACACA] focus:outline-none rounded-xl"
        />
        <button className="bg-[#2752E7] text-white font-semibold  px-10 py-4 rounded-xl">
          Get Started
        </button>
      </form>

      {/* Image */}
      <div class="relative mt-28">
        <img
          src="/assets/hero/hero-dash.png"
          alt="hero"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-white/100  via-transparent to-transparent"></div>
      </div>

      {/* Company names in row */}
      <div className="flex flex-row mt-24 gap-28">
        <img src="/assets/hero/company1.png" alt="company1" />
        <img src="/assets/hero/company2.png" alt="company2" />
        <img src="/assets/hero/company3.png" alt="company3" />
        <img src="/assets/hero/company4.png" alt="company4" />
        <img src="/assets/hero/company5.png" alt="company5" />
      </div>
    </div>
  )
}

export default Hero
