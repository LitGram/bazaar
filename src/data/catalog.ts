export interface Product {
  id: string;
  name: string;
  nameEn?: string; // keeping for compatibility during migration if needed
  nameHi?: string; // keeping for compatibility during migration if needed
  category: 
    | 'agriculture' 
    | 'grocery' 
    | 'mandi' 
    | 'dairy' 
    | 'medical' 
    | 'hardware' 
    | 'clothing' 
    | 'electronics' 
    | 'services' 
    | 'food' 
    | 'education' 
    | 'transport';
  image: string;
  description: string;
  price: number;
  priceUnit: string;
  availability: boolean;
  vendor: {
    name: string;
    phone: string;
  };
}

export const catalog: Product[] = [
  {
    id: 'ag1',
    name: 'HD-2967 Wheat Seeds',
    category: 'agriculture',
    image: 'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-yield wheat variety popular in Rajasthan.',
    price: 3200,
    priceUnit: 'per bag (40kg)',
    availability: true,
    vendor: { name: 'Ramesh Seeds Store', phone: '9812345678' }
  },
  {
    id: 'ag2',
    name: 'DAP Fertilizer (IFFCO)',
    category: 'agriculture',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Essential DAP fertilizer for rabi crops.',
    price: 1350,
    priceUnit: 'per bag',
    availability: true,
    vendor: { name: 'Jaitsar Kisan Kendra', phone: '9922334455' }
  },
  {
    id: 'ag3',
    name: 'Guar (Gwar) Seeds',
    category: 'agriculture',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800', // Placeholder for Gwar
    description: 'Certified Gwar seeds for desert climate.',
    price: 4500,
    priceUnit: 'per bag',
    availability: true,
    vendor: { name: 'Suratgarh Agro Services', phone: '9414455667' }
  },
  {
    id: 'dr1',
    name: 'Pure Sahiwal Cow Milk',
    category: 'dairy',
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Fresh A2 milk from Sahiwal cows in Jaitsar.',
    price: 65,
    priceUnit: 'per litre',
    availability: true,
    vendor: { name: 'Bishnoi Dairy Farm', phone: '9828011223' }
  },
  {
    id: 'dr2',
    name: 'Village Desi Ghee',
    category: 'dairy',
    image: 'https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional bilona ghee made by local SHG.',
    price: 850,
    priceUnit: 'per kg',
    availability: true,
    vendor: { name: 'Jaitsar Mahila Bachat Gat', phone: '9636554433' }
  },
  {
    id: 'gr1',
    name: 'Kachi Ghani Mustard Oil',
    category: 'grocery',
    image: 'https://images.pexels.com/photos/459340/pexels-photo-459340.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pure cold-pressed oil from Suratgarh mustard.',
    price: 165,
    priceUnit: 'per litre',
    availability: true,
    vendor: { name: 'Shiva Oil Mill', phone: '9414211223' }
  },
  {
    id: 'mn1',
    name: 'Fresh Kinnow (Jaitsar)',
    category: 'mandi',
    image: 'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sweet and juicy seasonal Kinnow from Ganganagar orchards.',
    price: 400,
    priceUnit: 'per crate',
    availability: true,
    vendor: { name: 'Suratgarh Fruit Agency', phone: '9887766554' }
  },
  {
    id: 'mn2',
    name: 'Ganganagar Narma (Cotton)',
    category: 'mandi',
    image: 'https://images.pexels.com/photos/1120286/pexels-photo-1120286.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-quality cotton stock directly from farmers.',
    price: 7200,
    priceUnit: 'per quintal',
    availability: true,
    vendor: { name: 'Jaitsar Cotton Market', phone: '9812121212' }
  },
  {
    id: 'el1',
    name: 'Solar Water Pump Service',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Installation and repair of solar pumps for farms.',
    price: 1500,
    priceUnit: 'service charge',
    availability: true,
    vendor: { name: 'Desert Solar Solutions', phone: '7023334455' }
  },
  {
    id: 'sv1',
    name: 'Tractor Spares & Repair',
    category: 'services',
    image: 'https://images.pexels.com/photos/162625/grinder-work-workshop-iron-162625.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Specialized in Massey and Swaraj tractors.',
    price: 500,
    priceUnit: 'inspection fee',
    availability: true,
    vendor: { name: 'Punjab Auto Spares', phone: '9414522334' }
  }
];
