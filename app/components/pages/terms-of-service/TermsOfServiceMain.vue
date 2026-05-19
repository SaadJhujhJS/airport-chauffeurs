<template>
  <BaseContainer>
    <article
      class="my-12 md:my-16 p-6 sm:p-8 lg:p-12 bg-white rounded-2xl shadow-lg"
    >
      <p class="text-sm text-gray-500 font-[Lato] mb-6">
        Last updated: {{ lastUpdated }}
      </p>

      <p class="text-lg text-gray-700 font-[Lato] leading-relaxed mb-10">
        These Terms of Service ("Terms") govern your use of the Premium Airport
        Chauffeurs website, booking platform, and chauffeur services. By booking
        a service or using our website, you agree to be bound by these Terms.
      </p>

      <section v-for="(section, index) in sections" :key="index" class="mb-10">
        <h2
          class="text-2xl md:text-3xl font-[Sarpanch] font-bold text-[#222222] mb-4"
        >
          {{ section.heading }}
        </h2>
        <div class="space-y-4 text-gray-700 font-[Lato] leading-relaxed">
          <p v-if="section.intro">{{ section.intro }}</p>
          <ul
            v-if="section.items"
            class="list-disc pl-6 space-y-2 marker:text-[#D4A574]"
          >
            <li v-for="(item, i) in section.items" :key="i">{{ item }}</li>
          </ul>
          <p v-if="section.outro">{{ section.outro }}</p>
        </div>
      </section>

      <section class="mt-12 pt-8 border-t border-gray-200">
        <h2
          class="text-2xl md:text-3xl font-[Sarpanch] font-bold text-[#222222] mb-4"
        >
          Questions About These Terms
        </h2>
        <p class="text-gray-700 font-[Lato] leading-relaxed mb-2">
          For any questions or concerns about these Terms, contact us at:
        </p>
        <ul class="font-[Lato] text-gray-700 space-y-1">
          <li>
            Email:
            <a
              href="mailto:bookings@airportchauffeurs.com.au"
              class="text-[#D4A574] hover:underline"
              >bookings@airportchauffeurs.com.au</a
            >
          </li>
          <li>
            Phone:
            <a
              href="tel:+61461302970"
              class="text-[#D4A574] hover:underline"
              >+61 461 302 970</a
            >
          </li>
          <li>Address: Unit 2, 535-537 Cross Road, Plympton SA 5038</li>
        </ul>
      </section>
    </article>
  </BaseContainer>
</template>

<script setup lang="ts">
const lastUpdated = 'April 2026';

const sections = [
  {
    heading: 'Bookings and Confirmation',
    outro:
      'All bookings are subject to vehicle and chauffeur availability. A booking is only confirmed once you receive written confirmation from us by email or SMS. You are responsible for ensuring pickup details, dates, and times are accurate.',
  },
  {
    heading: 'Pricing and Payment',
    intro:
      'Pricing is quoted at the time of booking and may vary based on distance, duration, vehicle category, stops, and special requirements. Unless otherwise agreed:',
    items: [
      'Payment is due at the time of booking or immediately upon service completion',
      'Additional charges may apply for waiting time, extra stops, tolls, or parking',
      'All prices are in Australian Dollars (AUD) and include applicable GST',
    ],
  },
  {
    heading: 'Cancellations and Changes',
    intro:
      'We understand plans change. Our cancellation policy is:',
    items: [
      'Cancellations made more than 24 hours before pickup: full refund',
      'Cancellations within 24 hours of pickup: 50% of the booking fee may apply',
      'No-shows or cancellations at the time of pickup: full booking fee applies',
      'Airport pickups missed due to flight delays outside our control are handled case-by-case',
    ],
  },
  {
    heading: 'Passenger Conduct',
    intro:
      'To ensure safety and comfort for everyone, passengers agree to:',
    items: [
      'Treat chauffeurs and vehicles with respect at all times',
      'Refrain from smoking, consuming illegal substances, or behaving dangerously',
      'Comply with all Australian road and seatbelt laws',
      'Accept responsibility for any damage caused to the vehicle during the service',
    ],
    outro:
      'We reserve the right to refuse or terminate service for passengers who breach these conditions, without refund.',
  },
  {
    heading: 'Luggage and Personal Items',
    outro:
      'Luggage is carried at the passenger\'s own risk. We recommend keeping valuables on your person. Premium Airport Chauffeurs is not responsible for items lost, damaged, or left in vehicles, though we will make reasonable efforts to return any found items.',
  },
  {
    heading: 'Delays and Service Availability',
    outro:
      'While we take every step to ensure punctual service, we are not liable for delays caused by traffic, weather, road closures, mechanical issues, or other circumstances beyond our reasonable control. Where a vehicle is unavailable, we will arrange a comparable replacement wherever possible.',
  },
  {
    heading: 'Liability',
    outro:
      'To the maximum extent permitted by law, our liability is limited to the cost of the service booked. We exclude liability for indirect, consequential, or incidental losses. Nothing in these Terms limits rights you may have under the Australian Consumer Law.',
  },
  {
    heading: 'Intellectual Property',
    outro:
      'All content on this website — including text, images, logos, and designs — is owned by Premium Airport Chauffeurs or licensed to us. You may not reproduce, distribute, or use this content without our written permission.',
  },
  {
    heading: 'Governing Law',
    outro:
      'These Terms are governed by the laws of South Australia. Any disputes arising under these Terms will be subject to the exclusive jurisdiction of the courts of South Australia.',
  },
  {
    heading: 'Changes to These Terms',
    outro:
      'We may update these Terms from time to time. Material changes will be reflected in the "Last updated" date. Continued use of our services after changes constitutes acceptance of the revised Terms.',
  },
];
</script>
