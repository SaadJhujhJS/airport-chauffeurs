<template>
  <div>
    <CommenceJourney title1="GET STARTED WITH" title2="THE FINEST" />

    <!-- Fleet Comparison Table -->
    <BaseContainer>
      <div class="pb-16 bg-white rounded-2xl shadow-lg mb-16">
        <div class="text-center mb-12">
          <h2
            class="text-4xl md:text-5xl font-[Sarpanch] font-bold text-[#222222] mb-4"
          >
            Fleet Comparison
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare our vehicles to find the perfect match for your needs
          </p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th
                  class="text-left py-4 px-6 font-[Sarpanch] font-bold text-[#222222]"
                >
                  Vehicle
                </th>
                <th
                  class="text-center py-4 px-6 font-[Sarpanch] font-bold text-[#222222]"
                >
                  Passengers
                </th>
                <th
                  class="text-center py-4 px-6 font-[Sarpanch] font-bold text-[#222222]"
                >
                  Luggage
                </th>
                <th
                  class="text-center py-4 px-6 font-[Sarpanch] font-bold text-[#222222]"
                >
                  Quote Available
                </th>
                <th
                  class="text-center py-4 px-6 font-[Sarpanch] font-bold text-[#222222]"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="vehicle in allVehicles"
                :key="vehicle.id"
                class="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
              >
                <td class="py-4 px-6">
                  <div class="flex items-center gap-4">
                    <div
                      class="w-20 h-14 flex items-center justify-center rounded-lg overflow-hidden"
                    >
                      <img
                        :src="vehicle.image"
                        :alt="`${vehicle.name} ${vehicle.category} luxury chauffeur vehicle`"
                        class="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div>
                      <p class="font-semibold text-[#222222] whitespace-nowrap">
                        {{ vehicle.name }}
                      </p>
                      <p class="text-sm text-gray-500">
                        {{ vehicle.category }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="text-center py-4 px-6 font-semibold">
                  {{ vehicle.passengers }}
                </td>
                <td class="text-center py-4 px-6 text-sm">
                  {{ vehicle.luggage }}
                </td>
                <td class="text-center py-4 px-6">
                  <NuxtLink
                    to="/contact-us"
                    class="px-3 py-1 bg-[#D4A574] text-white text-sm font-semibold rounded-full whitespace-nowrap"
                  >
                    Get Quote
                  </NuxtLink>
                </td>
                <td class="text-center py-4 px-6">
                  <NuxtLink
                    to="/booking"
                    class="bg-[#D4A574] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#E88A3F] transition-colors duration-300"
                  >
                    Book
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
// Use centralized fleet data
const { getAllVehicles } = useFleetData();
const allVehicles = getAllVehicles();
</script>
