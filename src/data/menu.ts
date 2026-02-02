export interface MenuItem {
  id: string;
  name: string;
  price: number;
  promoPrice?: number;
  description: string;
  image: string;
  category: string;
  isBestSeller?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'americano-series',
    name: '☕ Americano Series',
    items: [
      {
        id: 'americano',
        name: 'Americano',
        price: 18500,
        promoPrice: 13000,
        description: 'Americano tanpa gula',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      },
      {
        id: 'peach-americano',
        name: 'Peachtazio Americano',
        price: 24000,
        promoPrice: 16800,
        description: 'Espresso, peach, simple sirup',
        image: '/images/menu/coffee-milk-category.jpg',
        category: 'kopi'
      },
      {
        id: 'apple-americano',
        name: 'Apple Awe Americano',
        price: 24000,
        promoPrice: 16800,
        description: 'Espresso, apple, simple sirup',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      }
    ]
  },
  {
    id: 'coffee-milk',
    name: '🥛 Coffee Milk',
    items: [
      {
        id: 'almond-milk',
        name: 'Almond',
        price: 18500,
        promoPrice: 13000,
        description: 'Simple sirup, milk, espresso',
        image: '/images/menu/coffee-milk-category.jpg',
        category: 'kopi',
        isBestSeller: true
      },
      {
        id: 'brown-sugar-milk',
        name: 'Brown Sugar',
        price: 18500,
        promoPrice: 13000,
        description: 'Gula aren, milk, espresso',
        image: '/images/menu/coffee-milk-category.jpg',
        category: 'kopi',
        isBestSeller: true
      },
      {
        id: 'salted-caramel',
        name: 'Salted Caramel',
        price: 18500,
        promoPrice: 13000,
        description: 'Simple sirup, milk, espresso',
        image: '/images/menu/coffee-milk-category.jpg',
        category: 'kopi'
      },
      {
        id: 'butter-scotch',
        name: 'Butter Scotch',
        price: 18500,
        promoPrice: 13000,
        description: 'Simple sirup, milk, espresso',
        image: '/images/menu/coffee-milk-category.jpg',
        category: 'kopi'
      },
      {
        id: 'original-milk',
        name: 'Original',
        price: 15500,
        promoPrice: 10900,
        description: 'Milk, espresso',
        image: '/images/menu/coffee-milk-category.jpg',
        category: 'kopi',
        isBestSeller: true
      },
      {
        id: 'pandan-milk',
        name: 'Pandan',
        price: 18500,
        promoPrice: 13000,
        description: 'Milk, espresso, simple sirup',
        image: '/images/menu/coffee-milk-category.jpg',
        category: 'kopi'
      }
    ]
  },
  {
    id: 'signature-150ml',
    name: '⭐ Signature (150 ml)',
    items: [
      {
        id: 'premium-150',
        name: 'Premium 150 ml',
        price: 25500,
        promoPrice: 17900,
        description: 'Milk, extra shot espresso',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi',
        isBestSeller: true
      },
      {
        id: 'be-butter-150',
        name: 'Be Butter 150 ml',
        price: 25500,
        promoPrice: 17900,
        description: 'Milk, espresso, simple sirup',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      },
      {
        id: 'malt-moe-150',
        name: 'Malt Moe 150 ml',
        price: 25500,
        promoPrice: 17900,
        description: 'Milk, espresso, choco',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      },
      {
        id: 'gulo-klopo-150',
        name: 'Gulo Klopo 150 ml',
        price: 25500,
        promoPrice: 17900,
        description: 'Milk, espresso, simple sirup',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      }
    ]
  },
  {
    id: 'signature-can',
    name: '⭐ Signature Can (330 ml)',
    items: [
      {
        id: 'premium-330',
        name: 'Premium Can 330 ml',
        price: 40000,
        promoPrice: 32000,
        description: 'Milk, extra shot espresso',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi',
        isBestSeller: true
      },
      {
        id: 'be-butter-330',
        name: 'Be Butter 330 ml',
        price: 40000,
        promoPrice: 32000,
        description: 'Milk, espresso, simple sirup',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      },
      {
        id: 'malt-moe-330',
        name: 'Malt Moe 330 ml',
        price: 40000,
        promoPrice: 32000,
        description: 'Milk, espresso, choco',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      },
      {
        id: 'gulo-klopo-330',
        name: 'Gulo Klopo 330 ml',
        price: 40000,
        promoPrice: 32000,
        description: 'Milk, espresso, simple sirup',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      }
    ]
  },
  {
    id: 'signature-botol',
    name: '⭐ Signature Botol (1000 ml)',
    items: [
      {
        id: 'premium-1000',
        name: 'Premium 1000 ml',
        price: 102500,
        promoPrice: 82000,
        description: 'Milk, extra shot espresso',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      },
      {
        id: 'be-butter-1000',
        name: 'Be Butter 1000 ml',
        price: 123000,
        promoPrice: 98400,
        description: 'Milk, espresso, simple sirup',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      },
      {
        id: 'malt-moe-1000',
        name: 'Malt Moe 1000 ml',
        price: 102500,
        promoPrice: 82000,
        description: 'Milk, espresso, choco',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      },
      {
        id: 'gulo-klopo-1000',
        name: 'Gulo Klopo 1000 ml',
        price: 102500,
        promoPrice: 82000,
        description: 'Milk, espresso, simple sirup',
        image: '/images/menu/signature-premium.jpg',
        category: 'kopi'
      }
    ]
  },
  {
    id: 'non-coffee',
    name: '🍵 Non Coffee',
    items: [
      {
        id: 'matcha',
        name: 'Matcha',
        price: 18500,
        promoPrice: 13000,
        description: 'Powder matcha, milk',
        image: '/images/menu/matcha.jpg',
        category: 'non-kopi',
        isBestSeller: true
      },
      {
        id: 'taro',
        name: 'Taro',
        price: 18500,
        promoPrice: 13000,
        description: 'Powder taro, milk',
        image: '/images/menu/chocolate.jpg',
        category: 'non-kopi'
      },
      {
        id: 'chocolate',
        name: 'Chocolate',
        price: 18500,
        promoPrice: 13000,
        description: 'Powder coklat, milk',
        image: '/images/menu/chocolate.jpg',
        category: 'non-kopi',
        isBestSeller: true
      },
      {
        id: 'red-velvet',
        name: 'Red Velvet',
        price: 18500,
        promoPrice: 13000,
        description: 'Powder red velvet, milk',
        image: '/images/menu/matcha.jpg',
        category: 'non-kopi'
      }
    ]
  }
];

export const getBestSellers = (): MenuItem[] => {
  return menuData.flatMap(category =>
    category.items.filter(item => item.isBestSeller)
  );
};

export const getMenuItemById = (id: string): MenuItem | undefined => {
  return menuData.flatMap(category => category.items).find(item => item.id === id);
};

export const getMenuByCategory = (categoryId: string): MenuItem[] => {
  const category = menuData.find(cat => cat.id === categoryId);
  return category?.items || [];
};
