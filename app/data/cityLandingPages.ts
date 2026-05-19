import type { BlogFaq } from './blogPosts';

export interface CityPricingTier {
  title: string;
  summary: string;
}

export interface CityLandingContent {
  slug: string;
  cityName: string;
  seoTitle: string;
  seoDescription: string;
  cardDescription: string;
  keywords: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroDescription: string;
  breadcrumbCurrent: string;
  image: string;
  imageAlt: string;
  introHeading: string;
  introParagraphs: string[];
  airportHeading: string;
  airportParagraphs: string[];
  landmarksHeading: string;
  landmarksParagraphs: string[];
  serviceHeading: string;
  serviceParagraphs: string[];
  whyHeading: string;
  whyParagraphs: string[];
  pricingHeading: string;
  pricingIntro: string;
  pricingTiers: CityPricingTier[];
  pricingFootnote: string;
  faqs: BlogFaq[];
}

export const CITY_LANDING_SLUGS = ['sydney', 'melbourne', 'adelaide'] as const;

const sydney: CityLandingContent = {
  slug: 'sydney',
  cityName: 'Sydney',
  seoTitle: 'Airport Chauffeur Sydney | Luxury Airport Transfer Sydney',
  seoDescription:
    'Explore complete information about Premium luxury airport transfer Sydney and professional airport chauffeur Sydney.',
  cardDescription:
    'Explore a premium airport chauffeur in Sydney for Kingsford Smith (SYD) arrivals and departures. Luxury airport transfer Sydney with meet and greet, flight monitoring, and premium vehicles to the CBD, Barangaroo, and eastern suburbs.',
  keywords:
    'airport chauffeur Sydney, luxury airport transfer Sydney, SYD chauffeur pickup, Sydney airport private driver, Kingsford Smith transfer, Premium Airport Chauffeurs Sydney',
  heroTitleLine1: 'Sydney Airport',
  heroTitleLine2: 'Chauffeur & Transfers',
  heroDescription:
    'Premium luxury airport transfer Sydney and professional airport chauffeur Sydney — punctual meet and greet, premium vehicles from our Mercedes, BMW, and Audi fleet, and 24/7 support from Kingsford Smith to the CBD, Barangaroo, and beyond.',
  breadcrumbCurrent: 'Sydney',
  image: '/images/about-banner.webp',
  imageAlt: 'Luxury airport transfer and chauffeur service in Sydney Australia',
  introHeading:
    'Why travellers choose a Premium Airport Chauffeurs Sydney service',
  introParagraphs: [
    "Sydney is Australia's busiest gateway for international arrivals and a hub for domestic connections. Between baggage reclaim, customs queues, and the first impression you want to make for guests or family, the last thing you need is uncertainty at the kerb. A Premium Airport Chauffeurs Sydney service removes that friction: your driver is briefed on your flight, your terminal, and the vehicle class that matches your luggage profile before you even land.",
    'When people search for a luxury airport transfer Sydney experience, they are asking for more than a point-to-point ride. They want flight-aware timing, a professionally presented chauffeur from our 50-plus agent network, assistance with bags, and a cabin quiet enough to take a call before a Circular Quay meeting or a Barangaroo conference. Premium Airport Chauffeurs has delivered that standard across Australia since 2000, with Sydney itineraries planned around real traffic patterns on the M1, Eastern Distributor, and Western Distributor corridors.',
    "Whether you are touching down at Kingsford Smith after a long haul, connecting domestically between T2 and T3, or departing from a hotel tower in the financial district, we align pickup instructions with your itinerary. That includes clear meet-and-greet options inside the terminal where required, kerbside coordination when faster, and realistic buffers during morning and evening peaks when the city's motorways carry the heaviest volumes.",
  ],
  airportHeading:
    'Sydney Kingsford Smith Airport (SYD): terminals, pickups, and timing',
  airportParagraphs: [
    'Sydney Airport (IATA: SYD), also known as Kingsford Smith Airport, sits beside Botany Bay with domestic and international traffic split across multiple terminals. International long-haul flights typically use Terminal 1, while major domestic carriers operate from Terminals 2 and 3. Knowing your airline and terminal is essential for a smooth luxury airport transfer Sydney handover — it determines the correct kerbside lane, the shortest walking route for meet-and-greet inside the building, and the most sensible staging point when kerbside dwell time is limited.',
    "Premium Airport Chauffeurs pickups at SYD are planned around live flight information, because Sydney's inbound banks can cluster during peak periods and weather can disrupt schedules across the east coast network. We factor realistic connection times if you are transferring between international and domestic legs, and we coordinate with you when terminals change or when baggage delivery runs longer than usual after immigration.",
    'The airport precinct connects to the CBD via the M1 and local arterial roads through suburbs such as Mascot, Alexandria, and Zetland. During peak hour, travel times to Circular Quay or North Sydney can vary significantly compared with midday. A professional airport chauffeur Sydney booking should include not only your landing time but also your true ready-to-leave-kerb expectation — especially for corporate groups collecting bags from multiple carousels.',
    'For departures, we recommend pickup times that respect SYD security queues during holiday peaks and school breaks. Your chauffeur can advise on typical morning compression for business routes into T2/T3, and on international check-in windows from hotels in The Rocks, Wynyard, and Barangaroo. The goal is the same on every leg: you reach the correct terminal door with calm margin, not a rushed sprint from a rideshare pin that moved twice.',
  ],
  landmarksHeading: 'Local landmarks and areas we serve from Sydney Airport',
  landmarksParagraphs: [
    "Sydney's iconography is known worldwide: the Sydney Opera House and Sydney Harbour Bridge frame the harbour, while Circular Quay links ferries, rail, and the city's historic Rocks precinct. Many visitors request a first drive past these landmarks after an overnight flight — not as a full tour, but as a gentle orientation before checking in. A luxury airport transfer Sydney itinerary can respect that wish while still prioritising your hotel or office as the primary destination.",
    "Beyond the harbour ring, corporate traffic often flows to Barangaroo's commercial towers, the financial streets around Martin Place, and technology and media pockets near Surry Hills and Chippendale. Eastern suburbs destinations such as Double Bay, Rose Bay, and Bondi remain popular for leisure travellers and conference guests who want beach proximity after long international legs. Each area has different kerbside and concierge conventions; briefing your chauffeur in advance avoids confusion at tower lobbies where loading zones are tightly managed.",
    'Western corridors towards Parramatta and Olympic Park carry major event and convention traffic, while North Sydney and Lower North Shore suburbs require Harbour Bridge or Tunnel routing that changes with incidents and maintenance. Premium Airport Chauffeurs plans every Sydney route with that geography in mind so your airport chauffeur Sydney service feels effortless even when the city is at its busiest.',
  ],
  serviceHeading:
    'What luxury airport transfer Sydney means with Premium Airport Chauffeurs',
  serviceParagraphs: [
    'Luxury is not only leather seats — it is certainty. With Premium Airport Chauffeurs you receive a confirmed booking, a vehicle matched to your party and luggage from our executive sedan, premium SUV, or luxury minibus fleet, and a chauffeur trained in professional presentation and defensive driving. Meet-and-greet can be arranged with name-board visibility in arrivals, and we welcome corporate accounts that need consistent purchase order documentation for finance teams.',
    'If your programme combines Sydney legs with other Australian cities — Adelaide, Melbourne, Brisbane, or Perth — align ground transport early through our 24/7 team so vehicle class and billing stay coherent across regions. Use our online booking for straightforward airport transfers, and contact us when your Sydney schedule includes multi-stop days, VIP visitors, or complex arrival patterns across SYD terminals.',
  ],
  whyHeading: 'Why Premium Airport Chauffeurs for Sydney ground transport',
  whyParagraphs: [
    'We are structured around premium Australian chauffeur travel — not ad-hoc rideshare matching. That matters in Sydney where small delays cascade quickly across bridges and tunnels. Our 100-percent reliability record, five-star customer rating, and 50-plus professional agents mean your airport chauffeur Sydney experience feels composed from the moment you see your driver.',
    'Clients choose Premium Airport Chauffeurs when impressions count: board visitors, family milestones, and executive weeks where punctuality is non-negotiable. Ask about flight-linked pickups, luggage-heavy SUV options from our BMW X5, Mercedes-Benz GLS, and Audi Q7 range, and return bookings that lock both directions at once.',
  ],
  pricingHeading: 'Sydney airport chauffeur pricing (indicative guide)',
  pricingIntro:
    'Exact quotes depend on date, time, vehicle class, meet-and-greet level, and route. The tiers below describe how most Sydney luxury airport transfer enquiries are structured — request a firm quote for your specific SYD leg.',
  pricingTiers: [
    {
      title: 'Executive sedan (1–3 passengers)',
      summary:
        'Suited to typical CBD and inner-east runs from SYD with standard luggage. Our Mercedes-Benz E-Class, BMW 5 Series, and Audi A6 cover this tier — pricing reflects distance band, time of day, and any extended wait after delayed international arrivals.',
    },
    {
      title: 'Premium SUV (small groups and extra luggage)',
      summary:
        'Popular for families, golf bags, and road-show kit. SUVs from our BMW X5, Mercedes-Benz GLS, and Audi Q7 range attract a higher bracket than sedans but eliminate boot-space risk on pickup day.',
    },
    {
      title: 'Multi-stop and hourly patterns',
      summary:
        'If you need SYD to city to second venue, or standby time between meetings, hourly or packaged structures may apply instead of a single transfer rate. Our luxury minibus and van fleet suits larger groups.',
    },
  ],
  pricingFootnote:
    'Published figures are not real-time fares. Use our online booking form or contact our 24/7 team with your flight number, terminal, and address for an accurate Sydney airport chauffeur quote.',
  faqs: [
    {
      question:
        'Do you offer airport chauffeur Sydney pickups at Terminal 1 international?',
      answer:
        'Yes. Share your airline, flight number, and whether you want kerbside or meet-and-greet inside arrivals so we can brief the driver and vehicle correctly for your SYD arrival.',
    },
    {
      question:
        'How is a luxury airport transfer Sydney different from a standard taxi?',
      answer:
        'Pre-booked vehicle class from a premium fleet, flight-aware timing, professional chauffeur presentation, luggage assistance, and a quiet cabin suited to business calls — not a random vehicle match at the kerb.',
    },
    {
      question:
        'Can you pick up from Barangaroo or Circular Quay hotels for SYD departures?',
      answer:
        'Yes. Precise tower lobby or porte-cochère instructions help Premium Airport Chauffeurs position quickly in dense precincts during peak periods.',
    },
    {
      question: 'Do you only operate in Sydney?',
      answer:
        'We support premium chauffeur and airport transfer needs across Australia — Adelaide, Sydney, Melbourne, Canberra, Brisbane, Perth, Sunshine Coast, and Hobart airports are all covered.',
    },
    {
      question: 'How far ahead should I book a Sydney airport chauffeur?',
      answer:
        'Book as soon as flights are confirmed to secure your preferred vehicle class — especially in December, school holidays, and around major harbour events when our fleet fills quickly.',
    },
  ],
};

const melbourne: CityLandingContent = {
  slug: 'melbourne',
  cityName: 'Melbourne',
  seoTitle: 'Airport Chauffeur Melbourne | Luxury Airport Transfer Melbourne',
  seoDescription:
    'Explore our premium airport chauffeur Melbourne for Tullamarine (MEL), Avalon, and Essendon fields.',
  cardDescription:
    'Explore a premium airport chauffeur Melbourne for Tullamarine (MEL), Avalon, and Essendon fields. Luxury airport transfer Melbourne with meet and greet, 24/7 support, and premium vehicles to the CBD, Southbank, and inner suburbs.',
  keywords:
    'airport chauffeur Melbourne, luxury airport transfer Melbourne, MEL chauffeur pickup, Tullamarine private transfer, Premium Airport Chauffeurs Melbourne',
  heroTitleLine1: 'Melbourne Airport',
  heroTitleLine2: 'Chauffeur & Transfers',
  heroDescription:
    'Luxury airport transfer Melbourne and airport chauffeur Melbourne services with flight-aware timing, professional meet and greet, and premium vehicles from our Mercedes, BMW, and Tesla fleet across the CBD grid, Southbank, and inner suburbs.',
  breadcrumbCurrent: 'Melbourne',
  image: '/images/services-banner.webp',
  imageAlt: 'Luxury airport chauffeur transfer in Melbourne Victoria',
  introHeading:
    'Melbourne airport chauffeur services built around Tullamarine traffic reality',
  introParagraphs: [
    "Melbourne's airport landscape is more complex than a single-gateway city: most international and domestic jet traffic uses Melbourne Airport (Tullamarine, MEL), while Avalon (AVV) and Essendon fields serve selected carriers, charters, and corporate movements. When travellers search for an airport chauffeur Melbourne provider, they need confidence that the operator understands which field they mean, what terminal sequence applies, and how peak-hour run times behave on the Tullamarine Freeway and CityLink corridors.",
    "A luxury airport transfer Melbourne booking should begin with plain facts: flight number, airport code, terminal, and whether you are heading to the Hoddle Grid CBD, Southbank towers, Carlton and Parkville health and education precincts, or southeast bayside suburbs. Premium Airport Chauffeurs uses that briefing to match the right vehicle from our executive sedan, premium SUV, and luxury minibus fleet, plan kerbside versus meet-and-greet, and set buffers that respect Melbourne's famously changeable motorway pace.",
    "Melbourne rewards drivers who read the city's conditions: hook turns in the CBD, tram stops on Collins and Bourke, and event-day compression around the MCG and Rod Laver Arena. Your Premium Airport Chauffeurs driver's job is to shield you from those micro-decisions after you land — especially when you still have jet lag and a board meeting within the hour.",
  ],
  airportHeading:
    'Melbourne Airport (MEL), Avalon, and Essendon: what changes the plan',
  airportParagraphs: [
    "Melbourne Airport at Tullamarine is the state's primary international gateway, with two major terminals handling Qantas and Jetstar groupings on one side and a mix of international and domestic carriers across piers and satellite gates. International arrivals can involve long walks from gate to immigration; domestic turnarounds can be tight if you are self-connecting. Your airport chauffeur Melbourne pickup should reflect realistic wheels-rolling time, not only the scheduled touchdown.",
    'Avalon is positioned further southwest toward Geelong. It suits some low-cost international routes and domestic patterns, but road times into the Melbourne CBD differ materially from Tullamarine. If your luxury airport transfer Melbourne quote assumed the wrong field, every downstream assumption fails — always confirm AVV versus MEL at booking with our 24/7 team.',
    'Essendon Fields supports private jet and charter traffic for executives and entertainment touring. Kerbside protocols and security expectations differ from commercial terminals. Brief Premium Airport Chauffeurs on tail number timing, FBO procedures, and onward city legs so we can align the correct vehicle staging and clearance messaging from our 50-plus professional agent network.',
    'Weather and wind patterns occasionally shift runway configuration at Tullamarine, which can change taxi times on the airfield. Our chauffeurs monitor inbound progress and maintain SMS or call contact with passengers, reducing kerb confusion when those operational variations occur.',
  ],
  landmarksHeading: 'Landmarks and precincts we connect from Melbourne Airport',
  landmarksParagraphs: [
    "Corporate Melbourne clusters along Collins Street, William Street, and the Southbank promenade beside the Yarra. Convention traffic flows to Melbourne Convention and Exhibition Centre (MCEC) and Crown complex surrounds. Leisure visitors still ask for an orientation past Federation Square, Flinders Street Station's façade, and the laneway culture around Degraves Street — small touches that make a long travel day feel more welcoming.",
    'North of the grid, Parkville carries major hospital and university traffic; further out, inner-north suburbs such as Fitzroy and Brunswick attract creative and technology visitors. Southeast, St Kilda Road and Chapel Street corridors feed different hotel markets. Each pocket has different kerbside behaviour; your luxury airport transfer Melbourne plan should name tower entrances and concierge contacts where possible so Premium Airport Chauffeurs positions correctly.',
    'Sporting and concert calendars swing traffic dramatically toward Jolimont and Richmond bridges. If your chauffeur leg coincides with a major final or stadium concert, we build realistic detours and staging into the briefing so you are not caught between a closed street and a moving rideshare pin that cannot find the kerb.',
  ],
  serviceHeading: 'Luxury airport transfer Melbourne: inclusions that matter',
  serviceParagraphs: [
    'Expect a pre-confirmed vehicle category from our meticulously maintained fleet, professional chauffeur presentation, luggage assistance at the terminal kerb or inside arrivals per your brief, and a cabin suited to quiet calls along CityLink. We document special requests — child seats, extra luggage, mobility assistance — at booking so there is no improvisation at MEL kerbside on arrival day.',
    'Combine Melbourne legs with national programmes through our 24/7 team so Sydney, Adelaide, Brisbane, or Perth gateway pickups follow the same Premium Airport Chauffeurs service standard and billing expectations across every city.',
  ],
  whyHeading: 'Why book Premium Airport Chauffeurs in Melbourne',
  whyParagraphs: [
    "Melbourne's grid and weather patterns punish last-minute improvisation. Premium Airport Chauffeurs prefers early briefing, realistic buffers, and clear 24/7 communication when your schedule moves — backed by our 100-percent reliability record and five-star customer rating since 2000.",
    'Use our online booking flow for straightforward Tullamarine CBD transfers; contact our team for Avalon legs, Essendon charter connections, and multi-day corporate road programmes across Victoria.',
  ],
  pricingHeading: 'Melbourne airport chauffeur pricing (indicative guide)',
  pricingIntro:
    'Fares vary by field (MEL vs AVV vs Essendon), distance, time of day, and vehicle class. The summary below explains typical brackets — confirm a written quote with our team before travel.',
  pricingTiers: [
    {
      title: 'Tullamarine sedan baseline',
      summary:
        'CBD and inner-city bands from MEL in executive sedans — Mercedes-Benz E-Class, BMW 5 Series, or Audi A6 — for one to three passengers with standard luggage remain the most common Melbourne enquiry pattern.',
    },
    {
      title: 'SUV and van scaling',
      summary:
        'Families, boards, and touring kit move to our BMW X5, Mercedes-Benz GLS, or people movers including the Toyota Granvia and Kia Carnival; pricing steps up with capacity and boot volume.',
    },
    {
      title: 'Avalon and Essendon adjustments',
      summary:
        'Different road miles and dwell patterns apply — always disclose airport code up front so your luxury airport transfer Melbourne quote from Premium Airport Chauffeurs is accurate.',
    },
  ],
  pricingFootnote:
    'Indicative descriptions only. Submit flight details to our 24/7 team for a firm Melbourne airport chauffeur quote with no hidden fees.',
  faqs: [
    {
      question: 'Is Melbourne Airport the same as Tullamarine?',
      answer:
        'Yes — travellers often say Tullamarine for the same IATA code MEL. Always confirm with Premium Airport Chauffeurs if you mean Avalon (AVV) instead, as pricing and timing differ.',
    },
    {
      question: 'Can you meet international arrivals inside MEL Terminal 2?',
      answer:
        'Meet-and-greet can be arranged with name-board visibility where terminal rules allow. Share airline and flight number when booking so we brief the chauffeur correctly.',
    },
    {
      question: 'Do you offer luxury airport transfer Melbourne for Avalon?',
      answer:
        'Yes, when briefed correctly — road times and pricing differ from Tullamarine, so airport code and confirmed landing time are essential at booking.',
    },
    {
      question: 'Can chauffeurs wait if my flight is delayed?',
      answer:
        'Premium Airport Chauffeurs aligns pickup timing with live flight data where available and our 24/7 team communicates revised ready times with you directly.',
    },
    {
      question: 'How do I book?',
      answer:
        'Use our online booking form for simple Tullamarine legs, or contact our 24/7 team for corporate, charter, or multi-stop Melbourne programmes requiring tailored coordination.',
    },
  ],
};

const adelaide: CityLandingContent = {
  slug: 'adelaide',
  cityName: 'Adelaide',
  seoTitle: 'Airport Chauffeur Adelaide | Luxury Airport Transfer Adelaide',
  seoDescription:
    'Explore a premium airport chauffeur Adelaide with meet and greet, real-time flight monitoring, luxury vehicles, and McLaren Vale wine regions.',
  cardDescription:
    'Explore a premium airport chauffeur Adelaide at ADL with meet and greet, real-time flight monitoring, and luxury vehicles to the CBD, North Adelaide, Glenelg, Barossa Valley, and McLaren Vale wine regions.',
  keywords:
    'airport chauffeur Adelaide, luxury airport transfer Adelaide, ADL chauffeur pickup, Adelaide airport private car, Premium Airport Chauffeurs Adelaide',
  heroTitleLine1: 'Adelaide Airport',
  heroTitleLine2: 'Chauffeur & Transfers',
  heroDescription:
    'Luxury airport transfer Adelaide and airport chauffeur Adelaide services at ADL — ideal for Barossa Valley and Hills wine touring, Adelaide Fringe festival weeks, and corporate CBD arrivals with calm, professional Premium Airport Chauffeurs drivers since 2000.',
  breadcrumbCurrent: 'Adelaide',
  image: '/images/airport-services-banner.webp',
  imageAlt:
    'Premium chauffeur airport transfer at Adelaide Airport South Australia',
  introHeading:
    'Adelaide airport chauffeur services rooted in South Australian expertise',
  introParagraphs: [
    'Adelaide Airport (ADL) is compact compared with Sydney or Melbourne, but that does not make arrivals stress-free. Adelaide Fringe, WOMADelaide, cricket weeks at Adelaide Oval, and cruise ship turnarounds can compress kerbside space and taxi queues fast. A Premium Airport Chauffeurs Adelaide booking gives you a named pickup plan, a vehicle matched to your luggage, and a driver who understands how quickly Glenelg beach runs, Hills winery access, or CBD hotel towers can diverge once you leave Sir Donald Bradman Drive.',
    "When guests search for a luxury airport transfer Adelaide experience, they often combine city legs with wine country — the Barossa Valley, Adelaide Hills, and McLaren Vale are within striking distance for well-planned day returns. Premium Airport Chauffeurs is rooted in South Australian chauffeur culture since 2000; we speak the region's timing language and wine-country road patterns, not generic interstate templates pasted onto a map.",
    'Whether you are touching down for the Adelaide Fringe, a corporate programme along North Terrace institutions, or a winery tour day after arrival, we align your airport chauffeur Adelaide service with realistic buffers, clear meet instructions, and return options that respect curfew and noise patterns in residential precincts.',
  ],
  airportHeading:
    'Adelaide Airport (ADL): terminals, peaks, and pickup etiquette',
  airportParagraphs: [
    'ADL combines domestic and international operations in a single linear terminal precinct with straightforward walking distances compared with larger hubs. That efficiency helps luxury airport transfer Adelaide timing when bags arrive quickly — but not when multiple international wide-bodies overlap during cruise peaks or busy holiday mornings when kerbside pressure rises.',
    'Kerbside management at ADL is attentive; dwell rules mean your Premium Airport Chauffeurs driver stages intelligently rather than circling. Meet-and-greet inside the terminal remains popular for VIP and family arrivals where name-board visibility and luggage assistance matter more than saving two minutes at the door.',
    'Road access feeds toward the city via Sir Donald Bradman Drive and Anzac Highway for western beach suburbs like Glenelg, or toward the Hills via the South Eastern Freeway for Stirling, Mount Barker, and wine-region days in the Barossa and McLaren Vale. Each vector has different peak behaviour; briefing your true destination keeps routing honest at quote stage.',
    'Departures from hotels along North Terrace, Hindmarsh Square, or the East End should factor Adelaide Fringe road closures and Oval event detours. Your airport chauffeur Adelaide departure time should reflect those city calendars, not only raw distance to ADL, and our 24/7 team can advise on timing.',
  ],
  landmarksHeading: 'Landmarks and regions we connect from Adelaide Airport',
  landmarksParagraphs: [
    'North Terrace frames world-class institutions, the Adelaide Oval precinct, and the Australian Innovation Institute at Lot Fourteen — a magnet for tech, sport, and concert traffic. Rundle Mall and the East End laneways carry retail and dining energy, while the Riverbank and Adelaide Festival Centre anchor the arts calendar. Visitors love a gentle orientation past Victoria Square and the Central Market when time allows before hotel check-in.',
    "Glenelg's Jetty Road strip remains the classic beachside first night for interstate and international guests, while Adelaide Hills towns of Stirling, Hahndorf, and Mount Lofty offer cooler-climate escapes within an hour from ADL. The Barossa Valley and McLaren Vale sit further out but define South Australia's global wine identity — many luxury airport transfer Adelaide programmes extend into those regions on day two or three of the visit.",
    'Corporate and government traffic flows toward Pirie Street, Frome Street technology precincts, and innovation nodes near Lot Fourteen. Each destination benefits from early kerbside instructions so your Premium Airport Chauffeurs driver reaches the correct tower entrance without doubling the block during one-way street trials.',
  ],
  serviceHeading: 'Luxury airport transfer Adelaide: what you should expect',
  serviceParagraphs: [
    "Expect real-time flight coordination, transparent vehicle classing from our executive sedan and premium SUV fleet, and Adelaide-experienced chauffeurs who understand ADL's compact kerb culture. Child seats, extra luggage for wine purchases, and multi-stop day extensions should be flagged at booking so the correct wagon or van is allocated from our fleet.",
    'Pair Adelaide airport legs with Barossa Valley winery touring, Adelaide Fringe festival weeks, or corporate conference days through one Premium Airport Chauffeurs coordinator so vehicle continuity and billing stay simple across the week.',
  ],
  whyHeading: 'Why Premium Airport Chauffeurs in Adelaide',
  whyParagraphs: [
    'We are a South Australian premium chauffeur brand first — Adelaide Airport is our home rhythm since 2000. That shows in how we brief drivers for Hills climbs, wine-day luggage including purchased cases, Oval event detours, and CBD festival road closures during the busiest weeks on the calendar.',
    'Ask us about meet-and-greet with name-board signage, corporate accounts with purchase order billing, and return bookings that lock both directions before busy festival or conference weeks.',
  ],
  pricingHeading: 'Adelaide airport chauffeur pricing (indicative guide)',
  pricingIntro:
    'Quotes depend on time, vehicle class, meet-and-greet level, and whether you extend into wine country or repeat movements across festival week. Tiers below are descriptive, not live fares — contact our 24/7 team for a firm figure.',
  pricingTiers: [
    {
      title: 'CBD and inner-ring sedan transfers',
      summary:
        'Typical ADL to CBD, North Adelaide, or Glenelg patterns for one to three passengers with standard luggage — covered by our Mercedes-Benz E-Class, BMW 5 Series, and Audi A6 executive sedans.',
    },
    {
      title: 'SUV and estate scaling',
      summary:
        'Families, corporate boards, and wine-day groups with purchased cases move to our BMW X5, Mercedes-Benz GLS, or Audi Q7 with adjusted pricing for capacity and boot space.',
    },
    {
      title: 'Regional and wine-day extensions',
      summary:
        'Barossa Valley, Adelaide Hills, or Fleurieu Peninsula legs add distance and typically use hourly or packaged day rates rather than a single transfer band.',
    },
  ],
  pricingFootnote:
    'Request a firm Adelaide luxury airport transfer quote from our 24/7 team with flight number, terminal, and full destination address. No hidden fees.',
  faqs: [
    {
      question: 'Do you monitor flights for Adelaide Airport pickups?',
      answer:
        'Yes — share your airline and flight number so Premium Airport Chauffeurs can align kerbside or meet-and-greet timing with your real arrival progress, not just the scheduled time.',
    },
    {
      question:
        'Can I book a luxury airport transfer Adelaide to the Barossa Valley?',
      answer:
        'Yes — Barossa Valley and McLaren Vale are among our most popular regional extensions. Contact our 24/7 team for combined airport arrival plus winery touring day planning.',
    },
    {
      question: 'Is meet-and-greet available at ADL international arrivals?',
      answer:
        'Yes, with name-board signage and luggage assistance where terminal rules permit. Brief us on passenger mobility and any language support needs at the time of booking.',
    },
    {
      question: 'Do you serve Glenelg and beachside hotels?',
      answer:
        'Yes — Anzac Highway patterns are common for Glenelg; specify hotel name and side-street access for the smoothest kerbside handover from your ADL chauffeur.',
    },
    {
      question: 'How do corporate accounts work?',
      answer:
        "Contact Premium Airport Chauffeurs with your billing requirements and approval-flow details; we recommend booking patterns and documentation formats that match your finance team's needs.",
    },
  ],
};

export const cityLandingPages: Record<string, CityLandingContent> = {
  sydney,
  melbourne,
  adelaide,
};

export function getCityLandingPage(
  slug: string
): CityLandingContent | undefined {
  return cityLandingPages[slug];
}

/** Card data for the `/locations` index — keeps copy in sync with each city page. */
export interface CityLandingCard {
  slug: string;
  cityName: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
}

export function getCityLandingSummaries(): CityLandingCard[] {
  return CITY_LANDING_SLUGS.map(slug => {
    const p = cityLandingPages[slug];
    return {
      slug: p.slug,
      cityName: p.cityName,
      cardDescription: p.cardDescription,
      image: p.image,
      imageAlt: p.imageAlt,
    };
  });
}
