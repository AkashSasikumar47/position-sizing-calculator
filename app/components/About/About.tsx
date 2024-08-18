import React from 'react'

const About = () => {
  return (

    <section
      className="relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/Img/bg-black-1.jpg')" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 py-6 md:px-8 md:py-10">
        <div className="mx-auto mb-10">
          <h2 className="max-w-screen-sm mb-4 md:mb-6 font-sans font-semibold text-white text-2xl sm:text-4xl">
            Emotion and functionality form a cohesive unit
          </h2>
        </div>
        <a
          href="#"
          className="group relative flex h-56 items-end overflow-hidden rounded-xl sm:rounded-2xl md:h-[36rem]"
        >
          <img
            src="/assets/Img/image-1.jpg"
            loading="lazy"
            alt="HealthTech Solutions"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
      </div>
    </section>

  )
}

export default About