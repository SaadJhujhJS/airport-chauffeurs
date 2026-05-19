<template>
  <BaseContainer>
    <div
      class="w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 my-12 md:my-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg"
    >
      <!-- Form Section -->
      <div class="w-full lg:w-[60%]">
        <div class="mb-8">
          <h2
            class="text-4xl md:text-5xl lg:text-6xl font-[Sarpanch] text-[#222222] font-bold leading-tight mb-4"
          >
            Get Your
            <span class="text-[#D4A574]">Free</span>
            <br class="hidden sm:block" />
            Consultation
          </h2>
          <p class="text-lg text-gray-600 font-[Lato] leading-relaxed max-w-lg">
            Ready to experience premium chauffeur service? Fill out the form
            below and we'll get back to you within 24 hours with a personalized
            quote.
          </p>
        </div>
        <ContactForm />
      </div>

      <!-- Contact Information Section -->
      <div class="w-full lg:w-[40%] lg:pl-8">
        <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <h2
            class="text-2xl md:text-3xl font-[Sarpanch] font-bold text-[#222222] leading-tight mb-8"
          >
            Contact Information
          </h2>

          <div class="space-y-6">
            <!-- Phone -->
            <div class="group">
              <div
                class="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div
                  class="min-w-12 min-h-12 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  <IconPhone class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1"
                  >
                    Call Us
                  </h3>
                  <a
                    href="tel:+61461302970"
                    class="text-lg font-bold text-[#222222] hover:text-[#D4A574] transition-colors duration-300"
                  >
                    +61 461 302 970
                  </a>
                  <p class="text-sm text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="group">
              <div
                class="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div
                  class="min-w-12 min-h-12 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  <IconSolidEmail class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1"
                  >
                    Email Us
                  </h3>
                  <a
                    href="mailto:bookings@airportchauffeurs.com.au"
                    class="text-lg font-bold text-[#222222] hover:text-[#D4A574] transition-colors duration-300 break-all"
                  >
                    bookings@airportchauffeurs.com.au
                  </a>
                  <p class="text-sm text-gray-600">Quick response guaranteed</p>
                </div>
              </div>
            </div>

            <!-- Location -->
            <div class="group">
              <div
                class="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div
                  class="min-w-12 min-h-12 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  <IconLocation class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1"
                  >
                    Visit Us
                  </h3>
                  <a
                    href="https://www.google.com/maps?q=Unit+2,+535-537+Cross+Road,+Plympton+SA+5038,+Australia"
                    target="_blank"
                    class="text-lg font-bold text-[#222222] hover:text-[#D4A574] transition-colors duration-300"
                  >
                    Unit 2, 535-537 Cross Road, Plympton SA 5038
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="mt-8 pt-8 border-t border-gray-200">
            <h3 class="text-lg font-[Sarpanch] font-bold text-[#222222] mb-6">
              Follow Us
            </h3>
            <div class="flex items-center gap-6">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                class="group w-14 h-14 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center hover:from-[#E88A3F] hover:to-[#C4965A] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <IconTwitterFooter
                  class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
                />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                class="group w-14 h-14 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center hover:from-[#E88A3F] hover:to-[#C4965A] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <IconYoutubeFooter
                  class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
                  fill="white"
                />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                class="group w-14 h-14 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center hover:from-[#E88A3F] hover:to-[#C4965A] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <IconFaceBookFooter
                  class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
            <p class="text-sm text-gray-600 mt-4 text-center">
              Stay connected for updates and special offers
            </p>
          </div>

          <!-- Trust Indicators -->
          <div class="mt-8 pt-8 border-t border-gray-200">
            <div class="grid grid-cols-2 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-[#D4A574]">24/7</div>
                <div class="text-sm text-gray-600">Service</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#D4A574]">100%</div>
                <div class="text-sm text-gray-600">Reliable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
