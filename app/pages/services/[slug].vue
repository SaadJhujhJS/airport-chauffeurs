<template>
  <div>
    <!-- Service Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-[#2F3B35] via-[#3a4f42] to-[#425A4D]"
    >
      <!-- Background decorative elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#F4C7A4]/10 to-[#D4A574]/10 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-[#F4C7A4]/8 to-[#D4A574]/8 rounded-full blur-3xl animate-pulse delay-1000"
        ></div>
      </div>

      <BaseContainer class="py-16 md:py-24 relative z-10">
        <div class="text-center text-white">
          <!-- Breadcrumb -->
          <div class="mb-8">
            <nav class="flex items-center justify-center gap-2 text-sm">
              <NuxtLink
                to="/"
                class="text-white/70 hover:text-[#D4A574] transition-colors"
              >
                Home
              </NuxtLink>
              <span class="text-white/50">/</span>
              <NuxtLink
                to="/services"
                class="text-white/70 hover:text-[#D4A574] transition-colors"
              >
                Services
              </NuxtLink>
              <span class="text-white/50">/</span>
              <span class="text-[#D4A574]">{{ serviceData?.name }}</span>
            </nav>
          </div>

          <!-- Service Title -->
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-[Sarpanch] font-bold mb-6 leading-tight"
          >
            {{ serviceData?.name }}
            <span
              class="block bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] bg-clip-text text-transparent"
            >
              Service
            </span>
          </h1>

          <!-- Service Description -->
          <p
            class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            {{ serviceData?.description }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/booking">
              <button
                class="px-8 py-4 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] text-[#151718] font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 cursor-pointer"
              >
                Book This Service
              </button>
            </NuxtLink>
            <NuxtLink to="/contact-us">
              <button
                class="px-8 py-4 bg-transparent border-2 border-white text-white font-[Sarpanch] font-semibold text-lg rounded-2xl transition-all duration-500 hover:bg-white hover:text-[#151718] cursor-pointer"
              >
                Get Quote
              </button>
            </NuxtLink>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Service Details Section -->
    <section class="py-16 md:py-24 bg-white">
      <BaseContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <h2
              class="text-3xl md:text-4xl font-[Sarpanch] font-bold text-[#222222] mb-6"
            >
              Why Choose Our {{ serviceData?.name }}?
            </h2>

            <div class="space-y-6 mb-8">
              <div
                v-for="(feature, index) in serviceData?.features"
                :key="index"
                class="flex items-start gap-4"
              >
                <div
                  class="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mt-1"
                >
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-[#222222] mb-2">
                    {{ feature.title }}
                  </h3>
                  <p class="text-[#555555] leading-relaxed">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Service Visual Design -->
          <div class="relative">
            <div class="relative group">
              <div
                class="absolute inset-0 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700"
              ></div>
              <div
                class="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 group-hover:shadow-3xl transition-all duration-700"
              >
                <!-- Service-specific visual design -->
                <div class="w-full h-80 flex items-center justify-center">
                  <!-- Airport Transfers -->
                  <div v-if="slug === 'airport-transfers'" class="text-center">
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        ✈️
                      </div>
                      <div class="text-sm text-[#555555]">Flight Tracking</div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🛄</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">👋</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🚗</span>
                      </div>
                    </div>
                  </div>

                  <!-- Winery Tours -->
                  <div v-else-if="slug === 'winery-tours'" class="text-center">
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        🍷
                      </div>
                      <div class="text-sm text-[#555555]">
                        Wine Region Tours
                      </div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🍇</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🏔️</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🚗</span>
                      </div>
                    </div>
                  </div>

                  <!-- Festival Events -->
                  <div
                    v-else-if="slug === 'festival-events'"
                    class="text-center"
                  >
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        🎭
                      </div>
                      <div class="text-sm text-[#555555]">Cultural Events</div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🎪</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🎵</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🏁</span>
                      </div>
                    </div>
                  </div>

                  <!-- Corporate Events -->
                  <div
                    v-else-if="slug === 'corporate-events'"
                    class="text-center"
                  >
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        💼
                      </div>
                      <div class="text-sm text-[#555555]">
                        Executive Transport
                      </div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🏢</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">📊</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🤝</span>
                      </div>
                    </div>
                  </div>

                  <!-- Weddings -->
                  <div v-else-if="slug === 'weddings'" class="text-center">
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        💒
                      </div>
                      <div class="text-sm text-[#555555]">Special Day</div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">💐</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🎀</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">📸</span>
                      </div>
                    </div>
                  </div>

                  <!-- Cruise Transfers -->
                  <div
                    v-else-if="slug === 'cruise-transfers'"
                    class="text-center"
                  >
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        🚢
                      </div>
                      <div class="text-sm text-[#555555]">Cruise Terminal</div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🌊</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🛄</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">⏰</span>
                      </div>
                    </div>
                  </div>

                  <!-- Hotel Transfers -->
                  <div
                    v-else-if="slug === 'hotel-transfers'"
                    class="text-center"
                  >
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        🏨
                      </div>
                      <div class="text-sm text-[#555555]">Hotel Service</div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🔑</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">📍</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🎯</span>
                      </div>
                    </div>
                  </div>

                  <!-- Formal Events -->
                  <div v-else-if="slug === 'formal-events'" class="text-center">
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        🎓
                      </div>
                      <div class="text-sm text-[#555555]">
                        Special Occasions
                      </div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">👗</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">👔</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">📸</span>
                      </div>
                    </div>
                  </div>

                  <!-- Luxury Tours -->
                  <div v-else-if="slug === 'luxury-tours'" class="text-center">
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        🗺️
                      </div>
                      <div class="text-sm text-[#555555]">Scenic Routes</div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🌅</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🏞️</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🏖️</span>
                      </div>
                    </div>
                  </div>

                  <!-- VIP Transport -->
                  <div v-else-if="slug === 'vip-transport'" class="text-center">
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        👑
                      </div>
                      <div class="text-sm text-[#555555]">
                        Exclusive Service
                      </div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🔒</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🛡️</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">⭐</span>
                      </div>
                    </div>
                  </div>

                  <!-- Event Transfers -->
                  <div
                    v-else-if="slug === 'event-transfers'"
                    class="text-center"
                  >
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        🎪
                      </div>
                      <div class="text-sm text-[#555555]">Event Transport</div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🎵</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🏟️</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">🌙</span>
                      </div>
                    </div>
                  </div>

                  <!-- Default design for any other services -->
                  <div v-else class="text-center">
                    <div class="relative mb-6">
                      <div
                        class="w-24 h-24 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          />
                        </svg>
                      </div>
                      <div class="text-2xl font-bold text-[#222222] mb-2">
                        🚗
                      </div>
                      <div class="text-sm text-[#555555]">Premium Service</div>
                    </div>
                    <div class="flex justify-center space-x-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">⭐</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">👨‍✈️</span>
                      </div>
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-[#F4C7A4]/20 to-[#D4A574]/20 rounded-full flex items-center justify-center"
                      >
                        <span class="text-2xl">💎</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Related Services Section -->
    <section class="py-16 md:py-24 bg-gray-50">
      <BaseContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-[Sarpanch] font-bold text-[#222222] mb-4"
          >
            Other Services You Might Like
          </h2>
          <p class="text-lg text-[#555555] max-w-2xl mx-auto">
            Explore our comprehensive range of premium transportation services
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="relatedService in relatedServices"
            :key="relatedService.slug"
            class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            @click="navigateTo(`/services/${relatedService.slug}`)"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            >
              <div class="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3
              class="text-xl font-semibold text-[#222222] mb-3 group-hover:text-[#D4A574] transition-colors"
            >
              {{ relatedService.name }}
            </h3>
            <p class="text-[#555555] leading-relaxed">
              {{ relatedService.shortDescription }}
            </p>
          </div>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// Service data - in a real app, this would come from an API or CMS
const serviceDataMap: Record<string, any> = {
  'airport-transfers': {
    name: 'Airport Transfers',
    description:
      'Professional airport pickup and drop-off services with luxury vehicles and experienced chauffeurs.',
    features: [
      {
        title: 'Flight Monitoring',
        description:
          'We track your flight status to ensure timely pickup, even for delays.',
      },
      {
        title: 'Meet & Greet',
        description:
          'Professional chauffeur will meet you at arrivals with a name board.',
      },
      {
        title: 'Luggage Assistance',
        description: 'Help with luggage handling and loading into the vehicle.',
      },
    ],
  },
  'corporate-events': {
    name: 'Corporate Events',
    description:
      'Executive transportation for business meetings, conferences, and corporate events.',
    features: [
      {
        title: 'Executive Vehicles',
        description:
          'Premium fleet including luxury sedans and SUVs for business travel.',
      },
      {
        title: 'Flexible Scheduling',
        description:
          'Accommodate last-minute changes and extended waiting times.',
      },
      {
        title: 'Professional Service',
        description:
          'Discrete, professional chauffeurs trained in corporate etiquette.',
      },
    ],
    image: '/images/blogs/blog-details/2.webp',
  },
  weddings: {
    name: 'Weddings',
    description:
      'Elegant transportation for your special day with luxury vehicles and professional service.',
    features: [
      {
        title: 'Wedding Packages',
        description:
          'Complete wedding transportation packages including bridal car and guest transport.',
      },
      {
        title: 'Decorated Vehicles',
        description:
          'Beautifully decorated vehicles with ribbons, flowers, and personal touches.',
      },
      {
        title: 'Timely Service',
        description:
          'Punctual service ensuring you arrive on time for your ceremony.',
      },
    ],
    image: '/images/blogs/blog-details/3.webp',
  },
  'luxury-tours': {
    name: 'Luxury Tours',
    description:
      'Scenic drives, wine tours, and coastal journeys in premium comfort.',
    features: [
      {
        title: 'Scenic Routes',
        description: 'Expert knowledge of beautiful routes and hidden gems.',
      },
      {
        title: 'Flexible Itinerary',
        description:
          'Customisable tours based on your interests and preferences.',
      },
      {
        title: 'Comfort & Style',
        description:
          'Luxury vehicles with premium amenities for long journeys.',
      },
    ],
    image: '/images/blogs/blog-details/4.webp',
  },
  'vip-transport': {
    name: 'VIP Transport',
    description:
      'Exclusive transportation for celebrities, executives, and high-profile clients.',
    features: [
      {
        title: 'Discrete Service',
        description:
          'Complete privacy and discretion for high-profile clients.',
      },
      {
        title: 'Security Features',
        description:
          'Advanced security features and trained security personnel.',
      },
      {
        title: 'Premium Fleet',
        description: 'Top-of-the-line luxury vehicles with maximum comfort.',
      },
    ],
    image: '/images/blogs/blog-details/5.webp',
  },
  'event-transfers': {
    name: 'Event Transfers',
    description:
      'Transportation for concerts, festivals, sports events, and special occasions.',
    features: [
      {
        title: 'Event Expertise',
        description:
          'Knowledge of event venues, parking, and traffic patterns.',
      },
      {
        title: 'Group Transport',
        description: 'Vehicles accommodating groups of various sizes.',
      },
      {
        title: 'Extended Hours',
        description:
          'Service available for late-night events and early morning departures.',
      },
    ],
    image: '/images/blogs/blog-details/6.webp',
  },
  'cruise-transfers': {
    name: 'Cruise Transfers',
    description:
      'Reliable transportation to and from cruise terminals with luggage handling.',
    features: [
      {
        title: 'Terminal Knowledge',
        description:
          'Familiarity with all major cruise terminals and procedures.',
      },
      {
        title: 'Luggage Service',
        description: 'Assistance with multiple bags and cruise luggage.',
      },
      {
        title: 'Timing Precision',
        description:
          'Careful coordination with cruise departure and arrival times.',
      },
    ],
    image: '/images/blogs/blog-details/7.webp',
  },
  'hotel-transfers': {
    name: 'Hotel Transfers',
    description:
      'Convenient transportation between hotels, airports, and destinations.',
    features: [
      {
        title: 'Hotel Partnerships',
        description: 'Relationships with major hotels for seamless service.',
      },
      {
        title: 'Multi-Stop Service',
        description:
          'Efficient routing for multiple hotel pickups and drop-offs.',
      },
      {
        title: 'Concierge Service',
        description: 'Coordination with hotel concierge for guest convenience.',
      },
    ],
    image: '/images/blogs/blog-details/8.webp',
  },
  'formal-events': {
    name: 'Formal Events',
    description:
      'Elegant transportation for proms, school formals, and special celebrations.',
    features: [
      {
        title: 'Special Occasions',
        description:
          'Perfect for prom, graduation, and milestone celebrations.',
      },
      {
        title: 'Group Bookings',
        description: 'Accommodate groups of friends and classmates.',
      },
      {
        title: 'Photo Opportunities',
        description: 'Beautiful vehicles perfect for memorable photos.',
      },
    ],
  },
  'winery-tours': {
    name: 'Winery Tours',
    description:
      'Luxury transportation for wine tasting tours and vineyard visits.',
    features: [
      {
        title: 'Wine Region Expertise',
        description:
          'Knowledge of Adelaide Hills, Barossa Valley, and other wine regions.',
      },
      {
        title: 'Designated Driver',
        description: 'Safe transportation allowing you to enjoy wine tastings.',
      },
      {
        title: 'Flexible Itinerary',
        description: 'Customisable tours based on your wine preferences.',
      },
    ],
    image: '/images/blogs/blog-details/2.webp',
  },
  'festival-events': {
    name: 'Festival Events',
    description:
      'Transportation for Adelaide Fringe Festival, Adelaide Festival, and cultural events.',
    features: [
      {
        title: 'Festival Knowledge',
        description: 'Understanding of festival venues, timing, and logistics.',
      },
      {
        title: 'Cultural Events',
        description:
          'Experience with Adelaide Fringe, Festival, and Motorsport events.',
      },
      {
        title: 'Flexible Service',
        description: 'Adaptable to changing festival schedules and locations.',
      },
    ],
    image: '/images/blogs/blog-details/3.webp',
  },
};

const route = useRoute();
const slug = route.params.slug as string;

const serviceData = computed(() => serviceDataMap[slug]);

const relatedServices = computed(() => {
  const allServices = Object.entries(serviceDataMap).map(([key, value]) => ({
    slug: key,
    name: value.name,
    shortDescription: value.description.substring(0, 100) + '...',
  }));

  return allServices.filter(service => service.slug !== slug).slice(0, 3);
});

const serviceName = serviceData.value?.name || 'Chauffeur Service';
const serviceDescription =
  serviceData.value?.description ||
  'Premium chauffeur services across Australia with luxury vehicles and professional drivers.';
const serviceImage = serviceData.value?.image || '/images/services-banner.webp';

usePageSeo({
  title: `${serviceName} | Premium Chauffeur Service in Australia`,
  description: serviceDescription,
  path: `/services/${slug}`,
  image: serviceImage,
  imageAlt: `${serviceName} chauffeur service`,
  ogType: 'article',
  robots: serviceData.value ? 'index, follow' : 'noindex, follow',
  keywords: `${serviceName.toLowerCase()}, ${slug.replace(/-/g, ' ')}, chauffeur service Australia, luxury transport`,
});

if (serviceData.value) {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: serviceName, path: `/services/${slug}` },
  ]);

  const service = serviceSchema({
    name: serviceName,
    description: serviceDescription,
    path: `/services/${slug}`,
    image: serviceImage,
    serviceType: serviceName,
    areaServed: ['Adelaide', 'Australia'],
  });

  useStructuredData([breadcrumb, service], `service-${slug}-schema`);
}
</script>
