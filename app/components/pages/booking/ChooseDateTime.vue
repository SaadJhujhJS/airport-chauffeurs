<template>
  <div class="space-y-6">
    <div class="text-[#222222]">
      <h2
        class="text-3xl md:text-4xl font-[Sarpanch] font-bold leading-none mb-4"
      >
        Step 1 – Choose Date & Time
      </h2>
      <p class="sm:text-lg font-[Lato] leading-none">
        Select a convenient day and time from the live calendar.
        <br />
        Evening and weekend slots are available so you can fit your appointment
        around work, school, or family plans.
      </p>
    </div>

    <div class="w-full flex flex-col md:flex-row gap-12 lg:gap-20">
      <div class="w-full md:w-[40%] flex flex-col items-center">
        <div
          ref="dateSection"
          :class="[
            'w-full bg-white rounded-3xl shadow-[0px_0px_15px_0px_#00000026] p-4 transition-all duration-300',
            isDateMissing ? 'border border-red-300' : '',
          ]"
        >
          <div class="flex justify-between items-center sm:px-4 mb-4 sm:mb-7.5">
            <button
              @click="prevMonth"
              class="flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 p-1 sm:p-2 rounded-full bg-[#474C590D] hover:bg-gray-200 cursor-pointer -rotate-180 transition-all duration-300 hover:scale-110"
            >
              <IconNavigation />
            </button>
            <div class="text-base sm:text-lg text-[#474C59] font-semibold">
              {{ monthYear }}
            </div>
            <button
              @click="nextMonth"
              class="flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 p-1 sm:p-2 rounded-full bg-[#474C590D] hover:bg-gray-200 cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <IconNavigation />
            </button>
          </div>

          <div
            class="grid grid-cols-7 text-center text-xs sm:text-base text-[#183959] font-semibold mb-2"
          >
            <span v-for="(day, index) in weekDays" :key="index">{{ day }}</span>
          </div>

          <div class="grid grid-cols-7 gap-2">
            <div
              v-for="(day, index) in daysInMonth"
              :key="index"
              class="flex justify-center items-center"
            >
              <!-- Current month days -->
              <button
                v-if="day.getMonth() === currentMonth"
                @click="selectDate(day)"
                :disabled="isPastDate(day)"
                class="w-10 h-10 transition-all duration-300 text-xs sm:text-base transform"
                :class="{
                  'bg-[radial-gradient(82.86%_82.86%_at_28.57%_17.14%,#D4A574_0%,#FD9C51_100%)] [box-shadow:1.36px_10.89px_14.97px_-1.36px_#18395978] rounded-xl text-white':
                    isSelected(day),
                  'border border-[#D4A574] text-[#343841]':
                    isToday(day) && !isPastDate(day),
                  'hover:bg-gray-200 rounded-xl text-[#343841] hover:scale-110':
                    !isSelected(day) && !isPastDate(day),
                  'text-gray-300 cursor-not-allowed opacity-50':
                    isPastDate(day),
                }"
              >
                {{ day.getDate() }}
              </button>

              <!-- Next month days -->
              <button
                v-else-if="isNextMonthDay(day)"
                @click="selectDate(day)"
                :disabled="isPastDate(day)"
                class="w-10 h-10 transition-all duration-300 text-xs sm:text-base transform"
                :class="{
                  'bg-[radial-gradient(82.86%_82.86%_at_28.57%_17.14%,#D4A574_0%,#FD9C51_100%)] [box-shadow:1.36px_10.89px_14.97px_-1.36px_#18395978] rounded-xl text-white':
                    isSelected(day),
                  'hover:bg-gray-200 rounded-xl text-[#343841] hover:scale-110':
                    !isSelected(day) && !isPastDate(day),
                  'text-gray-300 cursor-not-allowed opacity-50':
                    isPastDate(day),
                }"
              >
                {{ day.getDate() }}
              </button>

              <!-- Previous month days -->
              <span
                v-else
                class="w-10 h-10 flex items-center justify-center text-gray-300 text-xs sm:text-base"
              >
                {{ day.getDate() }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Time Selection -->
      <div class="w-full md:w-[50%]">
        <h2 class="text-[#232323] text-2xl font-medium mb-5">
          {{ formattedSelectedDate }}
        </h2>

        <!-- Hardcoded times -->
        <div
          ref="timeSection"
          :class="[
            'space-y-4 mb-6 transition-all duration-300',
            isTimeMissing ? 'border border-red-300 rounded-2xl p-4' : '',
          ]"
        >
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <div
              v-for="(time, index) in availableTimeSlots"
              :key="index"
              class="flex rounded-2xl border border-[#D4A574] overflow-hidden"
            >
              <button
                @click="selectHardcodedTime(time)"
                class="cursor-pointer flex-1 px-2 py-3 text-center transition-all duration-300 transform hover:scale-105"
                :class="
                  selectedTime === time
                    ? 'bg-[#D4A574] text-white'
                    : 'text-[#183959] hover:bg-[#D4A574]/20'
                "
              >
                {{ time }}
              </button>
            </div>
          </div>
        </div>

        <!-- Custom time -->
        <div class="flex items-center gap-2">
          <VueTimepicker
            type="time"
            v-model="customTime"
            placeholder="Choose your own time"
            class="custom-timepicker"
            :key="timepickerKey"
            @click="confirmCustomTime"
          />

          <!-- <button
            class="bg-[#222222] text-white px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-[#222222]/90 transform hover:scale-105"
            @click="confirmCustomTime"
          >
            Confirm
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueTimepicker from 'vue3-timepicker';
import 'vue3-timepicker/dist/VueTimepicker.css';
import { useBookingForm } from '~/composables/useBookingForm';
import Swal from 'sweetalert2';
import { onMounted, watch } from 'vue';

// Props for validation highlighting
const props = defineProps<{
  missingFields?: string[];
  showValidation?: boolean;
  formSectionRefs?: Record<string, HTMLElement | null>;
}>();

const today = new Date();
const currentMonth = ref(today.getMonth());
const currentYear = ref(today.getFullYear());
const { selectedDate, selectedTime } = useBookingForm();
const customTime = ref<string>('');
const timepickerKey = ref(0);

// Form section refs for mobile scrolling
const dateSection = ref<HTMLElement | null>(null);
const timeSection = ref<HTMLElement | null>(null);

// Sync customTime with selectedTime when component mounts or selectedTime changes
onMounted(() => {
  // If selectedTime exists and it's not in the available time slots, set it as customTime
  if (
    selectedTime.value &&
    !availableTimeSlots.value.includes(selectedTime.value)
  ) {
    customTime.value = selectedTime.value;
  }

  // Update parent form section refs
  if (props.formSectionRefs) {
    props.formSectionRefs.date = dateSection.value;
    props.formSectionRefs.time = timeSection.value;
  }
});

watch(selectedTime, newTime => {
  if (newTime && !availableTimeSlots.value.includes(newTime)) {
    customTime.value = newTime;
  } else if (!newTime) {
    customTime.value = '';
  }
});

// Computed properties for validation highlighting
const isDateMissing = computed(
  () => props.missingFields?.includes('date') && props.showValidation
);
const isTimeMissing = computed(
  () => props.missingFields?.includes('time') && props.showValidation
);

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const formatTime12Hour = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const displayMinutes = minutes.toString().padStart(2, '0');
  return `${displayHours}:${displayMinutes} ${ampm}`;
};

const getNext30MinuteSlot = (): Date => {
  const now = new Date();
  const minutes = now.getMinutes();

  // Calculate minutes to add to round up to next 30-minute slot
  const remainder = minutes % 30;
  const minutesToAdd = remainder === 0 ? 30 : 30 - remainder;

  const nextSlot = new Date(now);
  nextSlot.setMinutes(minutes + minutesToAdd);
  nextSlot.setSeconds(0);
  nextSlot.setMilliseconds(0);

  return nextSlot;
};

const availableTimeSlots = computed(() => {
  const slots: string[] = [];
  const startTime = getNext30MinuteSlot();

  for (let i = 0; i < 16; i++) {
    const slotTime = new Date(startTime);
    slotTime.setMinutes(slotTime.getMinutes() + i * 30);
    slots.push(formatTime12Hour(slotTime));
  }

  return slots;
});

const monthYear = computed(() =>
  new Date(currentYear.value, currentMonth.value).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
);

const daysInMonth = computed(() => {
  const days: Date[] = [];
  const firstDay = new Date(currentYear.value, currentMonth.value, 1);
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0);

  const prevMonthLastDay = new Date(currentYear.value, currentMonth.value, 0);
  const prevMonthDaysCount = firstDay.getDay();
  for (let i = prevMonthDaysCount - 1; i >= 0; i--) {
    days.push(
      new Date(
        currentYear.value,
        currentMonth.value - 1,
        prevMonthLastDay.getDate() - i
      )
    );
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    days.push(new Date(currentYear.value, currentMonth.value, day));
  }

  const nextMonthDaysCount = 42 - days.length;
  for (let i = 1; i <= nextMonthDaysCount; i++) {
    days.push(new Date(currentYear.value, currentMonth.value + 1, i));
  }

  return days;
});

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
}

function selectDate(day: Date) {
  if (!isPastDate(day)) {
    selectedDate.value = day;
    // Don't clear the selected time when selecting a date
  }
}

function isSelected(day: Date) {
  return (
    selectedDate.value &&
    day.toDateString() === selectedDate.value.toDateString()
  );
}

function isToday(day: Date) {
  return day.toDateString() === today.toDateString();
}

function isPastDate(day: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison
  const dayToCheck = new Date(day);
  dayToCheck.setHours(0, 0, 0, 0);
  return dayToCheck < today;
}

function isNextMonthDay(day: Date) {
  const dayMonth = day.getMonth();
  const dayYear = day.getFullYear();
  const nextMonth = currentMonth.value === 11 ? 0 : currentMonth.value + 1;
  const nextMonthYear =
    currentMonth.value === 11 ? currentYear.value + 1 : currentYear.value;
  return dayMonth === nextMonth && dayYear === nextMonthYear;
}

function confirmCustomTime() {
  if (customTime.value) {
    selectedTime.value = customTime.value;
    customTime.value = '';
  }
}

function selectHardcodedTime(time: string) {
  selectedTime.value = time;
  customTime.value = '';
  timepickerKey.value++; // ✅ Force timepicker to reset
}

const formattedSelectedDate = computed(() => {
  return selectedDate.value
    ? selectedDate.value.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      })
    : 'Select a date';
});
</script>
<style scoped>
.custom-timepicker {
  display: inline-block;
  width: 100%;
}
::v-deep(.custom-timepicker input) {
  width: 100%;
  padding: 1.5rem 1.5rem;
  border: 1px solid #d4a574;
  border-radius: 1rem;
  color: #374151;
  background: white;
  box-sizing: border-box;
  font-size: 1rem;
  transition: all 0.3s ease;
}

::v-deep(.custom-timepicker input:hover) {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

::v-deep(.custom-timepicker input:focus) {
  outline: none;
  box-shadow: 0 0 0 4px rgba(244, 199, 164, 0.12);
  border-color: #d4a574;
}
</style>
