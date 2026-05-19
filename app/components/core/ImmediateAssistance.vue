<template>
  <section
    class="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
  >
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-10 -right-10 w-32 h-32 bg-[#D4A574] opacity-10 rounded-full blur-xl"
      ></div>
      <div
        class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D4A574] opacity-5 rounded-full blur-2xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-opacity-10 rounded-full mb-6"
        >
          <div class="w-2 h-2 bg-[#D4A574] rounded-full animate-pulse"></div>
          <span class="font-[Lato] font-medium uppercase tracking-wide">
            24/7 Support
          </span>
        </div>

        <h2
          class="text-4xl sm:text-5xl lg:text-6xl font-[Sarpanch] font-bold text-[#222222] mb-6 leading-tight"
        >
          Need immediate
          <span class="relative">
            <span class="text-[#D4A574]">assistance</span>
            <div
              class="absolute -bottom-2 left-0 w-full h-1 bg-[#D4A574] opacity-30 rounded-full"
            ></div>
          </span>
          ?
        </h2>

        <p
          class="text-xl font-[Lato] text-[#222222] opacity-70 max-w-2xl mx-auto leading-relaxed"
        >
          Our professional team is standing by to provide instant support,
          answer your questions, and ensure your journey is seamless.
        </p>
      </div>

      <!-- Contact Options -->
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <!-- Phone Call Card -->
        <div class="group">
          <a
            href="tel:+61461302970"
            aria-label="Call us immediately for assistance"
            class="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#D4A574] relative overflow-hidden"
          >
            <!-- Card background effect -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] opacity-0 group-hover:opacity-5 transition-opacity duration-500"
            ></div>

            <div class="relative z-10">
              <div class="flex items-center justify-between mb-6">
                <div
                  class="p-4 bg-[#D4A574] rounded-2xl group-hover:scale-110 transition-transform duration-300"
                >
                  <IconQuickPhone stroke="#ffffff" class="w-8 h-8" />
                </div>
                <div class="text-right">
                  <div
                    class="text-sm font-[Lato] font-medium text-[#D4A574] mb-1"
                  >
                    Available Now
                  </div>
                  <div
                    class="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                  ></div>
                </div>
              </div>

              <h3 class="text-2xl font-bold text-[#222222] mb-3">
                Call Us Directly
              </h3>
              <p
                class="font-[Lato] text-[#222222] opacity-70 mb-4 leading-relaxed"
              >
                Speak with our team instantly for immediate assistance with
                bookings, changes, or any questions.
              </p>

              <div class="flex items-center justify-between">
                <span class="text-2xl font-[Sarpanch] font-bold text-[#D4A574]">
                  +61 461 302 970
                </span>
                <div
                  class="flex items-center gap-2 text-sm font-[Lato] text-[#D4A574] font-medium"
                >
                  <span>Tap to call</span>
                  <IconArrowRight
                    class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- WhatsApp Card -->
        <div class="group">
          <a
            :href="whatsappLink"
            aria-label="Send us a WhatsApp message"
            target="_blank"
            rel="noopener noreferrer"
            class="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-500 relative overflow-hidden"
          >
            <!-- Card background effect -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
            ></div>

            <div class="relative z-10">
              <div class="flex items-center justify-between mb-6">
                <div
                  class="p-4 bg-green-500 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                >
                  <IconNewWhatsapp fill="#ffffff" class="w-8 h-8" />
                </div>
                <div class="text-right">
                  <div
                    class="text-sm font-[Lato] font-medium text-green-500 mb-1"
                  >
                    Quick Response
                  </div>
                  <div
                    class="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                  ></div>
                </div>
              </div>

              <h3 class="text-2xl font-bold text-[#222222] mb-3">
                WhatsApp Chat
              </h3>
              <p
                class="font-[Lato] text-[#222222] opacity-70 mb-4 leading-relaxed"
              >
                Send us a message for quick support, booking assistance, or to
                get instant quotes.
              </p>

              <div class="flex items-center justify-between">
                <span class="text-lg font-semibold text-green-500">
                  Send Message
                </span>
                <div
                  class="flex items-center gap-2 text-sm font-[Lato] text-green-500 font-medium"
                >
                  <span>Tap to chat</span>
                  <IconArrowRight
                    class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Additional Support Info -->
      <div class="text-center">
        <div
          class="inline-flex flex-col sm:flex-row items-center gap-6 font-[Lato] text-[#222222] opacity-60"
        >
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Average response time: 2 minutes</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-[#D4A574] rounded-full"></div>
            <span>Available 24/7/365</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Professional support</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const phone = '+61461302970';
const text = encodeURIComponent('Hello! I would like to book a service.');
const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
</script>
