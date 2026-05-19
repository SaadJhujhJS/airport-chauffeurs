<template>
  <div class="space-y-8">
    <div class="overflow-hidden">
      <div class="w-full flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2">
          <div class="space-y-8 sm:px-5">
            <!-- Journey Details Section -->
            <div class="space-y-6">
              <div
                class="flex items-center gap-3 pb-4 border-b border-gray-100"
              >
                <div
                  class="w-10 h-10 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center"
                >
                  <IconLocation class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3
                    class="text-xl font-semibold font-[Sarpanch] text-[#222222]"
                  >
                    Journey Details
                  </h3>
                  <p class="text-sm text-gray-600 font-[Lato]">
                    Where would you like to go?
                  </p>
                </div>
              </div>

              <!-- Transfer Type Selection -->
              <div class="space-y-3">
                <h3
                  class="text-lg font-semibold font-[Sarpanch] text-[#222222]"
                >
                  Transfer Type
                </h3>
                <div class="grid grid-cols-2 gap-3 mt-2">
                  <div
                    @click="transferType = 'one-way'"
                    :class="[
                      'p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-md',
                      transferType === 'one-way'
                        ? 'border-[#D4A574] bg-[#D4A574]/10'
                        : 'border-gray-200 bg-white hover:border-[#D4A574]/50',
                    ]"
                  >
                    <div class="flex items-center justify-center">
                      <div
                        :class="[
                          'w-4 h-4 rounded-full border-2 mr-3 transition-all duration-300',
                          transferType === 'one-way'
                            ? 'border-[#D4A574] bg-[#D4A574]'
                            : 'border-gray-300',
                        ]"
                      >
                        <div
                          v-if="transferType === 'one-way'"
                          class="w-full h-full rounded-full bg-white scale-50"
                        ></div>
                      </div>
                      <div class="text-center">
                        <div class="font-semibold text-[#222222]">One Way</div>
                        <div class="text-xs text-gray-600">Single journey</div>
                      </div>
                    </div>
                  </div>

                  <div
                    @click="transferType = 'return'"
                    :class="[
                      'p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-md',
                      transferType === 'return'
                        ? 'border-[#D4A574] bg-[#D4A574]/10'
                        : 'border-gray-200 bg-white hover:border-[#D4A574]/50',
                    ]"
                  >
                    <div class="flex items-center justify-center">
                      <div
                        :class="[
                          'w-4 h-4 rounded-full border-2 mr-3 transition-all duration-300',
                          transferType === 'return'
                            ? 'border-[#D4A574] bg-[#D4A574]'
                            : 'border-gray-300',
                        ]"
                      >
                        <div
                          v-if="transferType === 'return'"
                          class="w-full h-full rounded-full bg-white scale-50"
                        ></div>
                      </div>
                      <div class="text-center">
                        <div class="font-semibold text-[#222222]">Return</div>
                        <div class="text-xs text-gray-600">Round trip</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pickup & Dropoff -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Location Access Help -->
                <div class="relative" ref="pickupSection">
                  <ClientOnly>
                    <input
                      ref="pickupInput"
                      v-model="pickUpLocation"
                      name="pickUpLocation"
                      type="text"
                      placeholder="Pick Up Location"
                      :class="[
                        'w-full p-3 pr-12 rounded-md bg-white text-black placeholder-gray-400 border outline-none transition-all duration-300 hover:shadow-sm',
                        isPickupMissing
                          ? 'border-red-500'
                          : 'border-[#F5F5F5] focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]',
                      ]"
                    />
                  </ClientOnly>
                  <button
                    type="button"
                    @click="getCurrentLocation('pickup')"
                    :disabled="isGettingLocation"
                    class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-[#D4A574] text-white hover:bg-[#FD9C51] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Use current location"
                  >
                    <IconCurrentLocation v-if="!isGettingLocation" />
                    <IconLoading v-else />
                  </button>
                </div>

                <div class="relative" ref="dropoffSection">
                  <ClientOnly>
                    <input
                      ref="dropoffInput"
                      v-model="dropOffLocation"
                      name="dropOffLocation"
                      type="text"
                      placeholder="Drop Off Location"
                      required
                      :class="[
                        'w-full p-3 pr-12 rounded-md bg-white text-black placeholder-gray-400 border outline-none transition-all duration-300 hover:shadow-sm',
                        isDropoffMissing
                          ? 'border-red-500'
                          : 'border-[#F5F5F5] focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]',
                      ]"
                    />
                  </ClientOnly>
                  <button
                    type="button"
                    @click="getCurrentLocation('dropoff')"
                    :disabled="isGettingLocation"
                    class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-[#D4A574] text-white hover:bg-[#FD9C51] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Use current location"
                  >
                    <IconCurrentLocation v-if="!isGettingLocation" />
                    <IconLoading v-else />
                  </button>
                </div>
              </div>
              <!-- Stops -->
              <div class="mt-4 space-y-3" ref="stopsSection">
                <div
                  v-for="(stop, index) in stops"
                  :key="index"
                  class="flex items-center gap-2"
                >
                  <ClientOnly>
                    <input
                      :ref="el => (stopRefs[index] = el as HTMLInputElement)"
                      v-model="stop.value"
                      type="text"
                      :placeholder="`Stop ${index + 1}`"
                      :class="[
                        'w-full p-3 rounded-md bg-white text-black placeholder-gray-400 border outline-none transition-all duration-300 hover:shadow-sm',
                        isStopsMissing
                          ? 'border-red-500'
                          : 'border-[#F5F5F5] focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]',
                      ]"
                    />
                  </ClientOnly>
                  <button
                    type="button"
                    class="hover:bg-gray-200 text-white rounded-md cursor-pointer"
                    @click="removeStop(index)"
                    aria-label="Remove stop"
                  >
                    <IconDelete />
                  </button>
                </div>

                <button
                  type="button"
                  :disabled="stops.length >= 3"
                  :class="[
                    'px-4 py-2 rounded-md transition cursor-pointer',
                    stops.length >= 3
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#FD9C51] text-white hover:bg-[#E88A3F]',
                  ]"
                  @click="addStop"
                >
                  {{ stops.length >= 3 ? 'Maximum 3 stops' : 'Add Stop' }}
                </button>
              </div>
            </div>

            <!-- Service Configuration Section -->
            <div class="space-y-6">
              <div
                class="flex items-center gap-3 pb-4 border-b border-gray-100"
              >
                <div
                  class="w-10 h-10 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center"
                >
                  <IconBriefCase class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3
                    class="text-xl font-semibold font-[Sarpanch] text-[#222222]"
                  >
                    Service Configuration
                  </h3>
                  <p class="text-sm text-gray-600 font-[Lato]">
                    Customise your service and add extras
                  </p>
                </div>
              </div>

              <div class="relative">
                <select
                  v-model="serviceType"
                  aria-label="childSeat"
                  name="childSeat"
                  class="w-full p-3 rounded-md bg-white text-black !placeholder-gray-400 border border-[#F5F5F5] focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none transition-all duration-300 hover:shadow-sm appearance-none"
                >
                  <option disabled selected value="">
                    Select service type
                  </option>
                  <option>Airport Transfer</option>
                  <option>Winery Tours</option>
                  <option>Festival Events</option>
                  <option>Corporate Events</option>
                  <option>Weddings</option>
                  <option>Cruise Transfers</option>
                  <option>Hotel Transfers</option>
                  <option>Formal Events</option>
                  <option>Luxury Tours</option>
                  <option>VIP Transport</option>
                  <option>Event Transfers</option>
                  <option>Other</option>
                </select>
                <div
                  class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black"
                >
                  <IconArrowDown color="#4a5565" />
                </div>
              </div>

              <!-- Additional Info -->
              <div class="relative">
                <textarea
                  v-model="additionalInfo"
                  name="additionalInfo"
                  rows="4"
                  placeholder="Additional Information (e.g., flight details, luggage, baby seat, etc.)"
                  class="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 border border-[#F5F5F5] focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none resize-none transition-all duration-300 hover:shadow-sm"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 bg-gray-100 p-5 rounded-xl">
          <div class="h-full flex flex-col">
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 bg-gradient-to-r from-[#F4C7A4] to-[#D4A574] rounded-full flex items-center justify-center"
              >
                <IconLocation class="w-5 h-5 text-white" />
              </div>
              <div>
                <h3
                  class="text-xl font-semibold font-[Sarpanch] text-[#222222]"
                >
                  Route Preview
                </h3>
                <p class="text-sm text-gray-600 font-[Lato]">
                  See your journey on the map
                </p>
              </div>
            </div>

            <div
              class="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <ClientOnly>
                <div ref="mapRef" class="w-full h-full min-h-[400px]"></div>
              </ClientOnly>
            </div>

            <!-- Map Info -->
            <div
              class="mt-4 p-4 bg-white/80 rounded-xl border border-gray-200 backdrop-blur-sm"
            >
              <div
                class="flex items-center gap-2 text-sm text-gray-600 font-[Lato]"
              >
                <img
                  src="https://maps.google.com/mapfiles/ms/icons/green-dot.png"
                  alt=""
                  aria-hidden="true"
                  class="w-4 h-4"
                />
                <span>Pickup</span>
                <img
                  src="https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                  alt=""
                  aria-hidden="true"
                  class="w-4 h-4 ml-4"
                />
                <span>Dropoff</span>
                <img
                  src="https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                  alt=""
                  aria-hidden="true"
                  class="w-4 h-4 ml-4"
                />
                <span>Stop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/// <reference types="@types/google.maps" />
import { ref, onMounted, watch, nextTick, computed } from 'vue';
import Swal from 'sweetalert2';
import { useBookingForm } from '~/composables/useBookingForm';
import { useGoogleMaps } from '~/composables/useGoogleMaps';
// Props for validation highlighting
const props = defineProps<{
  missingFields?: string[];
  showValidation?: boolean;
  formSectionRefs?: Record<string, HTMLElement | null>;
}>();

// Emit route validation state
const emit = defineEmits<{
  routeValidationChange: [isValid: boolean];
}>();

// Route validation state
const isRouteValid = ref(true);

const {
  name,
  phoneNumber,
  email,
  pickUpLocation,
  dropOffLocation,
  pickupPlace,
  dropoffPlace,
  stops,
  serviceType,
  additionalInfo,
  numberOfPassengers,
  transferType,
} = useBookingForm();

const mapRef = ref<HTMLElement | null>(null);
const pickupInput = ref<HTMLInputElement | null>(null);
const dropoffInput = ref<HTMLInputElement | null>(null);
const stopRefs = ref<(HTMLInputElement | null)[]>([]);
const stopMarkers = ref<google.maps.Marker[]>([]);
const pickupMarker = ref<google.maps.Marker | null>(null);
const dropoffMarker = ref<google.maps.Marker | null>(null);

// Form section refs for mobile scrolling
const pickupSection = ref<HTMLElement | null>(null);
const dropoffSection = ref<HTMLElement | null>(null);
const stopsSection = ref<HTMLElement | null>(null);

// Global marker management for better tracking
let allMarkers: google.maps.Marker[] = [];
let pickupMarkers: google.maps.Marker[] = [];
let dropoffMarkers: google.maps.Marker[] = [];

const isPhoneValid = ref(true);
const isGettingLocation = ref(false);

// Computed properties for field validation highlighting
const isPickupMissing = computed(
  () => props.missingFields?.includes('pickup') && props.showValidation
);
const isDropoffMissing = computed(
  () => props.missingFields?.includes('dropoff') && props.showValidation
);
const isStopsMissing = computed(
  () => props.missingFields?.includes('stops') && props.showValidation
);

// Watch route validation and emit changes
watch(isRouteValid, newValue => {
  emit('routeValidationChange', newValue);
});

// Watch stops changes to clear validation highlighting
watch(
  stops,
  () => {
    if (props.showValidation && isStopsMissing.value) {
      // Clear validation highlighting when stops are filled
      const allStopsFilled =
        stops.value.length === 0 ||
        stops.value.every(stop => stop.value.trim() !== '');
      if (allStopsFilled) {
        // Emit an event to parent to clear validation
        emit('routeValidationChange', true);
      }
    }
  },
  { deep: true }
);

// Watch for map container visibility to restore state
watch(mapRef, newRef => {
  if (newRef && map && directionsService && directionsRenderer) {
    // Map container is visible again, restore state
    nextTick(() => {
      restoreMapState();
    });
  }
});

// Update parent form section refs when component mounts
onMounted(() => {
  if (props.formSectionRefs) {
    props.formSectionRefs.pickup = pickupSection.value;
    props.formSectionRefs.dropoff = dropoffSection.value;
    props.formSectionRefs.stops = stopsSection.value;
  }
});

// --- Google Maps ---
const { loadGoogleMaps } = useGoogleMaps();
let map: google.maps.Map;
let directionsService: google.maps.DirectionsService;
let directionsRenderer: google.maps.DirectionsRenderer;

onMounted(async () => {
  try {
    await loadGoogleMaps();

    // Double-check that Google Maps is available
    if (!window.google || !window.google.maps || !window.google.maps.Map) {
      throw new Error('Google Maps API not properly loaded');
    }

    // Ensure mapRef is available
    if (!mapRef.value) {
      throw new Error('Map container not found');
    }

    map = new google.maps.Map(mapRef.value as HTMLElement, {
      center: { lat: -34.9285, lng: 138.6007 }, // Adelaide, Australia
      zoom: 10,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
      },
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
    });
    directionsRenderer.setMap(map);

    // Initialize autocomplete only after map is ready
    if (pickupInput.value) {
      initAutocomplete(pickupInput.value, 'pickup');
    }
    if (dropoffInput.value) {
      initAutocomplete(dropoffInput.value, 'dropoff');
    }

    watch(
      stopRefs,
      newRefs => {
        newRefs.forEach((input, i) => {
          if (input) initAutocomplete(input, 'stop', i);
        });
      },
      { deep: true }
    );

    // Restore existing markers and route if data exists
    nextTick(() => {
      restoreMapState();
    });
  } catch (error) {
    console.error('Failed to initialize Google Maps:', error);
    // You could show a user-friendly error message here
  }
});

function restoreMapState() {
  // Ensure map is initialized
  if (!map || !directionsService || !directionsRenderer) {
    return;
  }

  // Clear existing markers first to prevent duplicates
  clearPickupMarkers();
  clearDropoffMarkers();
  clearAllMarkersFromMap();

  // Restore pickup marker if place data exists
  if (pickupPlace.value && pickupPlace.value.geometry) {
    const pos = pickupPlace.value.geometry.location;
    const newPickupMarker = new google.maps.Marker({
      map,
      position: pos,
      icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
      title: 'Pickup',
      animation: google.maps.Animation.DROP,
      zIndex: 1000,
    });
    pickupMarkers.push(newPickupMarker);
    pickupMarker.value = newPickupMarker;
  } else if (pickUpLocation.value) {
    // Fallback to geocoding if place data is not available
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: pickUpLocation.value }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        const pos = results[0].geometry.location;
        const newPickupMarker = new google.maps.Marker({
          map,
          position: pos,
          icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
          title: 'Pickup',
          animation: google.maps.Animation.DROP,
          zIndex: 1000,
        });
        pickupMarkers.push(newPickupMarker);
        pickupMarker.value = newPickupMarker;
      }
    });
  }

  // Restore dropoff marker if place data exists
  if (dropoffPlace.value && dropoffPlace.value.geometry) {
    const pos = dropoffPlace.value.geometry.location;
    const newDropoffMarker = new google.maps.Marker({
      map,
      position: pos,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
      title: 'Dropoff',
      animation: google.maps.Animation.DROP,
      zIndex: 1000,
    });
    dropoffMarkers.push(newDropoffMarker);
    dropoffMarker.value = newDropoffMarker;
  } else if (dropOffLocation.value) {
    // Fallback to geocoding if place data is not available
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: dropOffLocation.value }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        const pos = results[0].geometry.location;
        const newDropoffMarker = new google.maps.Marker({
          map,
          position: pos,
          icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
          title: 'Dropoff',
          animation: google.maps.Animation.DROP,
          zIndex: 1000,
        });
        dropoffMarkers.push(newDropoffMarker);
        dropoffMarker.value = newDropoffMarker;
      }
    });
  }

  // Draw route if both pickup and dropoff exist (this will handle stop markers)
  if (pickUpLocation.value && dropOffLocation.value) {
    drawRoute();
  }
}

function initAutocomplete(
  input: HTMLInputElement,
  type: 'pickup' | 'dropoff' | 'stop',
  stopIndex = 0
) {
  const autocomplete = new (google.maps.places as any).Autocomplete(input, {
    types: ['establishment', 'geocode'],
    componentRestrictions: { country: 'au' }, // Restrict to Australia for better results
  });
  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      Swal.fire({
        icon: 'info',
        text: 'Please select a valid location from suggestions.',
      });
      return;
    }

    const pos = place.geometry.location!;
    const address = place.formatted_address || place.formatted_address || '';

    if (type === 'pickup') {
      pickUpLocation.value = address;
      pickupPlace.value = place;
      clearPickupMarkers();
      const newPickupMarker = new google.maps.Marker({
        map,
        position: pos,
        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
        title: 'Pickup',
        animation: google.maps.Animation.DROP,
        zIndex: 1000,
      });
      pickupMarkers.push(newPickupMarker);
      pickupMarker.value = newPickupMarker;
    } else if (type === 'dropoff') {
      dropOffLocation.value = address;
      dropoffPlace.value = place;
      clearDropoffMarkers();
      const newDropoffMarker = new google.maps.Marker({
        map,
        position: pos,
        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        title: 'Dropoff',
        animation: google.maps.Animation.DROP,
        zIndex: 1000,
      });
      dropoffMarkers.push(newDropoffMarker);
      dropoffMarker.value = newDropoffMarker;
    } else if (type === 'stop') {
      stops.value[stopIndex].place = place;
      stops.value[stopIndex].value = address;
    }

    drawRoute();
  });
}

function drawRoute() {
  // Clear all existing stop markers from the map
  clearAllStopMarkers();

  if (!pickUpLocation.value || !dropOffLocation.value) return;

  // Clear existing pickup and dropoff markers before recreating
  clearPickupMarkers();
  clearDropoffMarkers();

  // Ensure pickup and dropoff markers exist
  if (pickupPlace.value && pickupPlace.value.geometry) {
    const pos = pickupPlace.value.geometry.location;
    const newPickupMarker = new google.maps.Marker({
      map,
      position: pos,
      icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
      title: 'Pickup',
      animation: google.maps.Animation.DROP,
      zIndex: 1000,
    });
    pickupMarkers.push(newPickupMarker);
    pickupMarker.value = newPickupMarker;
  }

  if (dropoffPlace.value && dropoffPlace.value.geometry) {
    const pos = dropoffPlace.value.geometry.location;
    const newDropoffMarker = new google.maps.Marker({
      map,
      position: pos,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
      title: 'Dropoff',
      animation: google.maps.Animation.DROP,
      zIndex: 1000,
    });
    dropoffMarkers.push(newDropoffMarker);
    dropoffMarker.value = newDropoffMarker;
  }

  const waypoints =
    stops.value
      .filter(s => s.place && s.place.geometry)
      .map(s => ({
        location: s.place.geometry.location,
        stopover: true,
      })) || [];

  directionsService.route(
    {
      origin: pickUpLocation.value,
      destination: dropOffLocation.value,
      waypoints,
      travelMode: google.maps.TravelMode.DRIVING,
      region: 'AU', // Australia
    },
    (res, status) => {
      if (status === 'OK' && res) {
        isRouteValid.value = true;
        directionsRenderer.setDirections(res);
        const bounds = new google.maps.LatLngBounds();
        res.routes[0].legs.forEach(leg => {
          bounds.extend(leg.start_location);
          bounds.extend(leg.end_location);
        });
        map.fitBounds(bounds);

        // Only add stop markers for stops that have valid places
        const validStops = stops.value.filter(s => s.place?.geometry);
        validStops.forEach((s, i) => {
          const stopMarker = new google.maps.Marker({
            map,
            position: s.place.geometry.location,
            icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            title: `Stop ${i + 1}`,
            animation: google.maps.Animation.DROP,
            zIndex: 1000,
          });
          stopMarkers.value.push(stopMarker);
          allMarkers.push(stopMarker); // Also store in global array
        });
      } else if (status === 'ZERO_RESULTS') {
        isRouteValid.value = false;
        Swal.fire({
          icon: 'warning',
          title: 'No Route Found',
          text: 'Please select specific nearby cities or landmarks instead of a whole country.',
        });
      } else {
        isRouteValid.value = false;
      }
    }
  );
}

function clearAllStopMarkers() {
  // Clear all stop markers from the map using global array
  allMarkers.forEach(marker => {
    if (marker) {
      marker.setMap(null);
    }
  });

  // Clear both arrays
  allMarkers = [];
  stopMarkers.value = [];
}

function clearPickupMarkers() {
  // Clear all pickup markers from the map
  pickupMarkers.forEach(marker => {
    if (marker) {
      marker.setMap(null);
    }
  });

  // Clear pickup markers array
  pickupMarkers = [];
}

function clearDropoffMarkers() {
  // Clear all dropoff markers from the map
  dropoffMarkers.forEach(marker => {
    if (marker) {
      marker.setMap(null);
    }
  });

  // Clear dropoff markers array
  dropoffMarkers = [];
}

function clearAllMarkersFromMap() {
  // Nuclear option: clear ALL markers from the map
  // This ensures no orphaned markers remain
  allMarkers.forEach(marker => {
    if (marker) {
      marker.setMap(null);
    }
  });
  allMarkers = [];
  stopMarkers.value = [];

  // Also clear pickup and dropoff markers
  if (pickupMarker.value) {
    pickupMarker.value.setMap(null);
    pickupMarker.value = null;
  }
  if (dropoffMarker.value) {
    dropoffMarker.value.setMap(null);
    dropoffMarker.value = null;
  }
}

function addStop() {
  if (stops.value.length < 3) {
    stops.value.push({ value: '' });
    nextTick(() => drawRoute());
  }
}

function removeStop(i: number) {
  // Remove the stop from the array
  stops.value.splice(i, 1);

  // Use nuclear option to clear ALL markers immediately
  clearAllMarkersFromMap();

  // Also clear any markers that might be orphaned
  // Force a complete map refresh by clearing directions first
  if (directionsRenderer) {
    directionsRenderer.setMap(null);
    directionsRenderer.setMap(map);
  }

  // Force immediate cleanup and redraw
  drawRoute();
}

// Geolocation functionality
async function getCurrentLocation(type: 'pickup' | 'dropoff') {
  if (!navigator.geolocation) {
    Swal.fire({
      icon: 'error',
      title: 'Geolocation not supported',
      text: 'Your browser does not support geolocation. Please enter the location manually.',
      confirmButtonColor: '#D4A574',
    });
    return;
  }

  // Check if geolocation is blocked by permissions policy
  if (navigator.permissions) {
    try {
      const permission = await navigator.permissions.query({
        name: 'geolocation',
      });
      if (permission.state === 'denied') {
        Swal.fire({
          icon: 'error',
          title: 'Location Access Blocked',
          html: `
            <p>Location access is blocked by your browser's security settings.</p>
            <p><strong>To fix this:</strong></p>
            <ul style="text-align: left; margin: 10px 0;">
              <li>Click the lock/shield icon in your browser address bar</li>
              <li>Allow location access for this website</li>
              <li>Refresh the page and try again</li>
            </ul>
            <p>Or simply type your address manually in the field.</p>
          `,
          confirmButtonColor: '#D4A574',
        });
        return;
      }
    } catch (error) {
      // Permissions API not supported, continue with normal flow
      console.log(
        'Permissions API not supported, continuing with geolocation request'
      );
    }
  }

  isGettingLocation.value = true;

  try {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes
        });
      }
    );

    const { latitude, longitude } = position.coords;

    // Use Google Maps Geocoding to get address from coordinates
    const geocoder = new google.maps.Geocoder();
    const latlng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode({ location: latlng }, (results, status) => {
      isGettingLocation.value = false;

      if (status === 'OK' && results && results[0]) {
        const address = results[0].formatted_address;

        if (type === 'pickup') {
          pickUpLocation.value = address;
          // Store place data for restoration
          pickupPlace.value = {
            geometry: { location: latlng },
            formatted_address: address,
          };
          // Update pickup marker
          clearPickupMarkers();
          const newPickupMarker = new google.maps.Marker({
            map,
            position: latlng,
            icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
            title: 'Pickup',
            animation: google.maps.Animation.DROP,
            zIndex: 1000,
          });
          pickupMarkers.push(newPickupMarker);
          pickupMarker.value = newPickupMarker;
        } else if (type === 'dropoff') {
          dropOffLocation.value = address;
          // Store place data for restoration
          dropoffPlace.value = {
            geometry: { location: latlng },
            formatted_address: address,
          };
          // Update dropoff marker
          clearDropoffMarkers();
          const newDropoffMarker = new google.maps.Marker({
            map,
            position: latlng,
            icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
            title: 'Dropoff',
            animation: google.maps.Animation.DROP,
            zIndex: 1000,
          });
          dropoffMarkers.push(newDropoffMarker);
          dropoffMarker.value = newDropoffMarker;
        }

        // Redraw route if both locations are set
        if (pickUpLocation.value && dropOffLocation.value) {
          drawRoute();
        }

        // Center map on the new location
        map.setCenter(latlng);
        map.setZoom(15);

        Swal.fire({
          icon: 'success',
          title: 'Location found!',
          text: `Current location set as ${type === 'pickup' ? 'pickup' : 'dropoff'} point.`,
          confirmButtonColor: '#D4A574',
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Address not found',
          text: 'Could not determine your address from location. Please enter it manually.',
          confirmButtonColor: '#D4A574',
        });
      }
    });
  } catch (error) {
    isGettingLocation.value = false;

    let errorMessage = 'Unable to get your current location.';
    let errorTitle = 'Location Error';

    if (error instanceof GeolocationPositionError) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorTitle = 'Location Access Denied';
          errorMessage =
            'Location access denied. Please click the lock/shield icon in your browser address bar and allow location access, then try again.';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage =
            'Location information unavailable. Please check your device location settings or enter the address manually.';
          break;
        case error.TIMEOUT:
          errorMessage =
            'Location request timed out. Please try again or enter the address manually.';
          break;
      }
    } else if (
      error instanceof Error &&
      error.message.includes('Permissions policy')
    ) {
      errorTitle = 'Permissions Policy Violation';
      errorMessage =
        'Location access is blocked by browser security policy. Please allow location access in your browser settings or enter the address manually.';
    }

    Swal.fire({
      icon: 'error',
      title: errorTitle,
      text: errorMessage,
      confirmButtonColor: '#D4A574',
    });
  }
}
</script>
