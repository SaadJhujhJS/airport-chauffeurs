<template>
  <div>
    <div class="relative w-full h-screen">
      <img
        src="/images/hero-image.webp"
        alt="Premium Airport Chauffeurs luxury car service in Australia"
        width="1920"
        height="1080"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        class="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 hover:scale-105"
      />
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      <div class="absolute inset-0 flex items-center z-40">
        <BaseContainer>
          <div
            class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 pt-10"
          >
            <div class="flex flex-col gap-5 text-white">
              <h1
                class="text-3xl sm:text-4xl lg:text-7xl font-[Sarpanch] font-semibold leading-tight"
              >
                Premium
                <span
                  class="text-[#D4A574] transition-colors duration-300 hover:text-[#D4A574]/80"
                >
                  Airport
                  <br class="hidden sm:block" />
                  Chauffeurs
                </span>
                Services
                <br class="hidden sm:block" />
                in Australia
              </h1>
              <p
                class="lg:text-xl font-[Lato] font-medium max-w-3xl mb-3.5 leading-relaxed"
              >
                Experience luxury transportation with our professional
                chauffeurs. From airport transfers and corporate events to
                weddings, VIP transport, scenic tours, and special occasions
                across Australia.
                <span class="text-[#D4A574] font-semibold">
                  Your journey, our priority.
                </span>
              </p>
              <div class="flex gap-4 font-[Lato] font-semibold">
                <NuxtLink
                  to="/services"
                  aria-label="View our premium chauffeur services"
                  title="Explore our premium chauffeur services"
                >
                  <button
                    name="view-detail"
                    class="px-6 py-3 rounded-full font-semibold text-[#151718] bg-[#D4A574] hover:bg-transparent hover:text-white border-[1.5px] border-[#D4A574] transition-all duration-300 shadow-md cursor-pointer transform hover:shadow-lg"
                  >
                    Our Services
                  </button>
                </NuxtLink>
                <NuxtLink
                  to="/booking"
                  aria-label="Book your chauffeur service online"
                  title="Book your chauffeur service online"
                >
                  <button
                    name="booking"
                    class="px-6 py-3 rounded-full font-semibold text-[#151718] bg-white hover:bg-transparent hover:text-white border-[1.5px] border-white hover:border-[#D4A574] transition-all duration-300 shadow-md cursor-pointer transform hover:shadow-lg"
                  >
                    Book Online
                  </button>
                </NuxtLink>
              </div>
            </div>
            <!-- <div
              class="bg-[#EBE7E4] rounded-3xl transition-all duration-500 mt-8 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div>
                <p
                  class="flex justify-between items-start text-[#151718] font-[Lato] font-semibold p-4"
                >
                  Starting From 80$
                  <NuxtLink
                    to="/booking"
                    aria-label="Book your chauffeur service now"
                    title="Book your chauffeur service now"
                    class="px-[13px] py-4 bg-[#151718] rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-[#151718]/90"
                    ><IconArrow class="transition-transform duration-300 hover:rotate-45"
                  /></NuxtLink>
                </p>
                <img
                  src="/images/hero-image2.webp"
                  srcset="/images/hero-image1@1x.webp 1x, /images/hero-image2@2x.webp 2x"
                  fetchpriority="high"
                  alt="Luxury chauffeur car starting from $80"
                  class="rounded-b-3xl w-[372px] h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div> -->
          </div>
        </BaseContainer>
      </div>
    </div>
  </div>
</template>
