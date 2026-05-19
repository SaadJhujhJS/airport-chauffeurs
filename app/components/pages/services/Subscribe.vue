<template>
  <BaseContainer class="mb-12 md:mb-22">
    <div
      class="relative w-full text-white px-4 sm:px-12 py-12 bg-[#425A4D] rounded-xl z-0 overflow-hidden"
    >
      <h2
        class="text-4xl md:text-5xl font-[Sarpanch] font-semibold leading-tight mb-4"
      >
        Subscribe
      </h2>
      <p class="text-lg md:text-xl font-[Lato] font-medium max-w-xl">
        Keep connected with our exclusive fleet of limited edition cars and
        vintage vehicles while on the move.
      </p>

      <div class="relative w-full md:w-[350px] mt-5">
        <input
          type="email"
          name="email"
          placeholder="Enter"
          class="w-full px-4 py-3 pr-32 font-[Lato] font-medium border border-white rounded-full bg-[#FFFFFF1A] outline-none focus:border-[#D4A574]"
        />
        <button
          name="subscribe"
          class="absolute top-1 right-1 flex items-center gap-2 font-[Lato] font-semibold py-2 px-4 sm:px-6 bg-[#D4A574] text-sm sm:text-base text-[#161618] rounded-full uppercase hover:bg-[#ffbf8e] transition-colors duration-300 cursor-pointer"
        >
          <span><IconArrowRight /></span>
          Subscribe
        </button>
      </div>

      <div class="lg:absolute lg:bottom-0 lg:right-0 z-10">
        <img
          src="/images/car.webp"
          alt="Luxury Car"
          class="mt-6 sm:mt-0 w-[320px] md:w-[400px] lg:w-[500px] xl:w-[580px] object-contain"
        />
      </div>
    </div>
  </BaseContainer>
</template>
