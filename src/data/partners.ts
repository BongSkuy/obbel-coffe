export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'supplier' | 'partner' | 'payment' | 'delivery';
  link?: string;
}

export const partners: Partner[] = [
  {
    id: '1',
    name: 'GoFood',
    logo: '/images/partners/gofood.png',
    category: 'delivery',
    link: 'https://gofood.co.id'
  },
  {
    id: '2',
    name: 'Biji Kopi Premium',
    logo: '/images/partners/coffee-beans.png',
    category: 'supplier'
  },
  {
    id: '3',
    name: 'Indomaret',
    logo: '/images/partners/indomaret.png',
    category: 'partner'
  },
  {
    id: '4',
    name: 'Alfamart',
    logo: '/images/partners/alfamart.png',
    category: 'partner'
  },
  {
    id: '5',
    name: 'GrabFood',
    logo: '/images/partners/grabfood.png',
    category: 'delivery',
    link: 'https://food.grab.com'
  },
  {
    id: '6',
    name: 'QRIS',
    logo: '/images/partners/qris.png',
    category: 'payment'
  },
  {
    id: '7',
    name: 'Gula Aren Indonesia',
    logo: '/images/partners/gula-aren.png',
    category: 'supplier'
  },
  {
    id: '8',
    name: 'Susu Segar Jaya',
    logo: '/images/partners/susu.png',
    category: 'supplier'
  }
];

export const partnerCategories = [
  { id: 'all', name: 'Semua Partner' },
  { id: 'supplier', name: 'Supplier' },
  { id: 'partner', name: 'Partner' },
  { id: 'delivery', name: 'Delivery' },
  { id: 'payment', name: 'Payment' }
];
