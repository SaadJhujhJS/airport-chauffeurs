<template>
  <BaseContainer>
    <article
      class="my-12 md:my-16 p-6 sm:p-8 lg:p-12 bg-white rounded-2xl shadow-lg"
    >
      <p class="text-sm text-gray-500 font-[Lato] mb-6">
        Last updated: {{ lastUpdated }}
      </p>

      <p class="text-lg text-gray-700 font-[Lato] leading-relaxed mb-10">
        Premium Airport Chauffeurs ("we", "us", "our") respects your privacy and
        is committed to protecting the personal information you share with us.
        This policy explains what we collect, how we use it, and the choices you
        have — in accordance with the Australian Privacy Principles under the
        Privacy Act 1988 (Cth).
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
          Contact Us About Privacy
        </h2>
        <p class="text-gray-700 font-[Lato] leading-relaxed mb-2">
          If you have questions about this policy or wish to access, correct, or
          delete your personal information, contact us at:
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
    heading: 'Information We Collect',
    intro:
      'When you book a service, contact us, or use our website, we may collect the following information:',
    items: [
      'Contact details such as your name, email address, and phone number',
      'Booking details including pickup/drop-off locations, dates, and passenger numbers',
      'Payment information processed securely via third-party providers',
      'Technical data such as IP address, browser type, and pages visited',
    ],
  },
  {
    heading: 'How We Use Your Information',
    intro: 'We use the information we collect to:',
    items: [
      'Provide, manage, and confirm your chauffeur bookings',
      'Communicate with you about your journey, changes, or enquiries',
      'Process payments and maintain accurate transaction records',
      'Improve our website, services, and customer experience',
      'Comply with legal obligations and resolve disputes',
    ],
  },
  {
    heading: 'How We Share Your Information',
    intro:
      'We do not sell your personal information. We may share it only with:',
    items: [
      'Our chauffeurs and operations team, solely to fulfil your booking',
      'Payment processors and IT service providers under confidentiality terms',
      'Government or law enforcement agencies where required by law',
    ],
  },
  {
    heading: 'Cookies and Analytics',
    outro:
      'Our website uses cookies and analytics tools (such as Google Analytics) to understand usage patterns and improve performance. You can disable cookies through your browser settings; some features may not function as intended if you do.',
  },
  {
    heading: 'Data Security',
    outro:
      'We take reasonable steps to protect your information from misuse, loss, and unauthorised access — including encrypted transmission, restricted access, and secure storage. No method of transmission over the internet is 100% secure, so we cannot guarantee absolute security.',
  },
  {
    heading: 'Your Rights',
    intro:
      'Under Australian privacy law, you have the right to:',
    items: [
      'Access the personal information we hold about you',
      'Request corrections to inaccurate or incomplete information',
      'Ask us to delete your information, subject to legal requirements',
      'Withdraw consent to marketing communications at any time',
    ],
  },
  {
    heading: 'Changes to This Policy',
    outro:
      'We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the latest revision. Continued use of our services after changes constitutes acceptance of the updated policy.',
  },
];
</script>
