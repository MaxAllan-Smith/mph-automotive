export const categories = [
  {
    id: 'braking',
    name: 'Braking',
    count: '1,240 parts',
    description: 'Pads, discs, sensors and fitting kits for daily drivers and vans.',
    accent: 'bg-red-600',
  },
  {
    id: 'service',
    name: 'Service Parts',
    count: '980 parts',
    description: 'Oil, air, fuel and cabin filters matched to manufacturer intervals.',
    accent: 'bg-zinc-950',
  },
  {
    id: 'lighting',
    name: 'Lighting',
    count: '730 parts',
    description: 'Bulbs, headlamp units, warning beacons and workshop lighting.',
    accent: 'bg-red-600',
  },
  {
    id: 'batteries',
    name: 'Batteries',
    count: '310 parts',
    description: 'AGM, EFB and standard batteries with fitment confidence.',
    accent: 'bg-zinc-950',
  },
  {
    id: 'fluids',
    name: 'Engine Oils',
    count: '460 parts',
    description: 'Correct-grade oils, antifreeze, additives and workshop fluids.',
    accent: 'bg-red-600',
  },
  {
    id: 'performance',
    name: 'Performance',
    count: '285 parts',
    description: 'Filters, plugs, fluids and upgrades for sharper response.',
    accent: 'bg-zinc-950',
  },
]

export const products = [
  {
    id: 'brembo-front-brake-disc-set',
    categoryId: 'braking',
    categoryGroup: 'Braking Essentials',
    name: 'Brembo Front Brake Disc Set',
    brand: 'Brembo',
    code: 'MPH-BRK-2041',
    price: 64.99,
    wasPrice: 78.99,
    stockQty: 34,
    rating: 4.9,
    reviews: 184,
    fitment: 'Audi A3, VW Golf, Seat Leon',
    tag: 'Best seller',
    badge: 'OE specification',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=82',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=82',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=82',
    ],
    summary:
      'Balanced braking performance with corrosion-resistant coating and OE-style fitment for popular VAG platforms.',
    bullets: [
      'High-carbon cast iron construction',
      'Ready-to-fit coated surface',
      'Supplied as an axle pair',
      'Compatible with ABS sensor systems',
    ],
    specs: [
      { label: 'Position', value: 'Front axle' },
      { label: 'Diameter', value: '288 mm' },
      { label: 'Thickness', value: '25 mm' },
      { label: 'Warranty', value: '24 months' },
    ],
  },
  {
    id: 'ceramic-brake-pad-kit',
    categoryId: 'braking',
    categoryGroup: 'Braking Essentials',
    name: 'Ceramic Brake Pad Kit',
    brand: 'MPH Select',
    code: 'MPH-PAD-7742',
    price: 32.5,
    wasPrice: 39.99,
    stockQty: 52,
    rating: 4.8,
    reviews: 129,
    fitment: 'Ford Fiesta, Focus, Transit Connect',
    tag: 'Low dust',
    badge: 'Quiet compound',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=82',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=82',
    ],
    summary:
      'A low-dust ceramic pad set tuned for quiet road use and repeatable bite in everyday driving.',
    bullets: [
      'Includes anti-rattle clips',
      'Reduced wheel dust formula',
      'Chamfered edges for quiet bedding',
      'ECE R90 approved',
    ],
    specs: [
      { label: 'Position', value: 'Front axle' },
      { label: 'Material', value: 'Ceramic blend' },
      { label: 'Approval', value: 'ECE R90' },
      { label: 'Warranty', value: '18 months' },
    ],
  },
  {
    id: 'abs-wheel-speed-sensor',
    categoryId: 'braking',
    categoryGroup: 'Braking Essentials',
    name: 'ABS Wheel Speed Sensor',
    brand: 'Febi Bilstein',
    code: 'MPH-ABS-1188',
    price: 21.95,
    stockQty: 18,
    rating: 4.7,
    reviews: 73,
    fitment: 'BMW 1 Series, 3 Series',
    tag: 'OE match',
    badge: 'Direct replacement',
    image:
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=82',
    ],
    summary:
      'Direct-fit ABS wheel speed sensor for clean signal recovery and dashboard fault resolution.',
    bullets: [
      'Plug-and-play connector',
      'Heat-resistant cable sleeve',
      'OE-style mounting point',
      'Tested signal stability',
    ],
    specs: [
      { label: 'Connector', value: '2 pin' },
      { label: 'Cable length', value: '820 mm' },
      { label: 'Position', value: 'Rear axle' },
      { label: 'Warranty', value: '24 months' },
    ],
  },
  {
    id: 'premium-oil-filter',
    categoryId: 'service',
    categoryGroup: 'Service & Maintenance',
    name: 'Premium Oil Filter',
    brand: 'Mann-Filter',
    code: 'MPH-FIL-6601',
    price: 8.99,
    stockQty: 96,
    rating: 4.9,
    reviews: 212,
    fitment: 'Vauxhall Corsa, Astra, Mokka',
    tag: 'Fast moving',
    badge: 'Service staple',
    image:
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=82',
    ],
    summary: 'Premium filtration media for routine oil servicing and extended engine protection.',
    bullets: [
      'High dirt-holding capacity',
      'Pressure-stable cartridge',
      'Includes sealing ring',
      'Built for manufacturer service intervals',
    ],
    specs: [
      { label: 'Filter type', value: 'Cartridge' },
      { label: 'Height', value: '105 mm' },
      { label: 'Seal included', value: 'Yes' },
      { label: 'Warranty', value: '12 months' },
    ],
  },
  {
    id: '5w-30-fully-synthetic-oil-5l',
    categoryId: 'fluids',
    categoryGroup: 'Service & Maintenance',
    name: '5W-30 Fully Synthetic Oil 5L',
    brand: 'Castrol',
    code: 'MPH-OIL-5305',
    price: 29.99,
    wasPrice: 35.99,
    stockQty: 64,
    rating: 4.8,
    reviews: 166,
    fitment: 'Ford EcoBoost and EcoBlue engines',
    tag: 'ACEA approved',
    badge: 'Low SAPS',
    image:
      'https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=1200&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=1200&q=82',
    ],
    summary: 'Fully synthetic 5W-30 engine oil formulated for modern petrol and diesel engines.',
    bullets: [
      'ACEA C3 approval',
      'Low-emission compatible',
      'Cold-start protection',
      '5 litre workshop pack',
    ],
    specs: [
      { label: 'Viscosity', value: '5W-30' },
      { label: 'Volume', value: '5 L' },
      { label: 'Spec', value: 'ACEA C3' },
      { label: 'Type', value: 'Fully synthetic' },
    ],
  },
  {
    id: 'cabin-pollen-filter-carbon',
    categoryId: 'service',
    categoryGroup: 'Service & Maintenance',
    name: 'Cabin Pollen Filter Carbon',
    brand: 'Bosch',
    code: 'MPH-CAB-4016',
    price: 13.45,
    stockQty: 41,
    rating: 4.7,
    reviews: 88,
    fitment: 'Audi, BMW, Volkswagen',
    tag: 'Carbon media',
    badge: 'Air quality',
    image:
      'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1200&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1200&q=82',
    ],
    summary: 'Activated carbon cabin filter designed to reduce pollen, odours and fine cabin dust.',
    bullets: [
      'Activated carbon layer',
      'Improves cabin air quality',
      'Simple service replacement',
      'Recommended yearly change',
    ],
    specs: [
      { label: 'Media', value: 'Activated carbon' },
      { label: 'Length', value: '254 mm' },
      { label: 'Width', value: '235 mm' },
      { label: 'Service interval', value: '12 months' },
    ],
  },
  {
    id: 'h7-night-vision-bulb-twin-pack',
    categoryId: 'lighting',
    categoryGroup: 'Lighting & Electrical',
    name: 'H7 Night Vision Bulb Twin Pack',
    brand: 'Osram',
    code: 'MPH-BULB-H7NV',
    price: 18.75,
    stockQty: 78,
    rating: 4.6,
    reviews: 143,
    fitment: 'Universal H7 fitment',
    tag: 'Road legal',
    badge: 'Twin pack',
    image:
      'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1200&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1200&q=82',
    ],
    summary: 'Road-legal H7 halogen bulbs with improved night visibility and crisp beam output.',
    bullets: [
      'Up to 150% brighter beam',
      'E-marked road legal',
      'Twin pack convenience',
      'No wiring changes required',
    ],
    specs: [
      { label: 'Bulb type', value: 'H7' },
      { label: 'Voltage', value: '12 V' },
      { label: 'Wattage', value: '55 W' },
      { label: 'Pack size', value: '2 bulbs' },
    ],
  },
  {
    id: 'start-stop-agm-battery-096',
    categoryId: 'batteries',
    categoryGroup: 'Lighting & Electrical',
    name: 'Start-Stop AGM Battery 096',
    brand: 'Yuasa',
    code: 'MPH-BAT-096AGM',
    price: 119.99,
    wasPrice: 139.99,
    stockQty: 12,
    rating: 4.9,
    reviews: 97,
    fitment: 'Modern start-stop cars and vans',
    tag: '4 year warranty',
    badge: 'AGM power',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=82',
    ],
    summary:
      'Heavy-duty AGM battery for start-stop vehicles with strong cold-cranking performance.',
    bullets: [
      'AGM start-stop technology',
      'High cycle durability',
      'Sealed maintenance-free case',
      'Four year warranty',
    ],
    specs: [
      { label: 'Size', value: '096' },
      { label: 'Capacity', value: '70 Ah' },
      { label: 'CCA', value: '760 A' },
      { label: 'Warranty', value: '4 years' },
    ],
  },
  {
    id: 'alternator-150a-exchange-unit',
    categoryId: 'lighting',
    categoryGroup: 'Lighting & Electrical',
    name: 'Alternator 150A Exchange Unit',
    brand: 'MPH Reman',
    code: 'MPH-ALT-150X',
    price: 156,
    stockQty: 7,
    rating: 4.5,
    reviews: 54,
    fitment: 'Transit Custom 2.0 EcoBlue',
    tag: 'Exchange',
    badge: 'Remanufactured',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=82',
    ],
    summary: 'Bench-tested exchange alternator for high-demand van electrical systems.',
    bullets: [
      '150 amp rated output',
      'Pulley included',
      'Bench tested before dispatch',
      'Exchange surcharge may apply',
    ],
    specs: [
      { label: 'Output', value: '150 A' },
      { label: 'Pulley', value: 'Included' },
      { label: 'Voltage', value: '12 V' },
      { label: 'Warranty', value: '24 months' },
    ],
  },
]

export function getProductById(productId) {
  return products.find((product) => product.id === productId)
}

export function getRelatedProducts(productId, limit = 3) {
  const product = getProductById(productId)

  if (!product) return products.slice(0, limit)

  return products
    .filter((item) => item.id !== product.id)
    .sort((first, second) => {
      const firstScore = first.categoryId === product.categoryId ? 0 : 1
      const secondScore = second.categoryId === product.categoryId ? 0 : 1

      return firstScore - secondScore
    })
    .slice(0, limit)
}
