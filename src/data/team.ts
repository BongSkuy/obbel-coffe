export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    instagram?: string;
    linkedin?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    role: 'Founder & CEO',
    image: '/images/team/founder.jpg',
    bio: 'Pengusaha muda dengan passion tinggi di dunia kopi. Mendirikan Obbel Coffee untuk menghadirkan kopi berkualitas dengan harga terjangkau.',
    social: {
      instagram: 'https://instagram.com/obbelcoffee',
      linkedin: 'https://linkedin.com/in/budi-santoso'
    }
  },
  {
    id: '2',
    name: 'Ahmad Pratama',
    role: 'Head Barista',
    image: '/images/team/head-barista.jpg',
    bio: 'Barista profesional dengan pengalaman lebih dari 7 tahun di industri kopi. Ahli dalam menciptakan cita rasa kopi yang konsisten.',
    social: {
      instagram: 'https://instagram.com/ahmadbarista'
    }
  },
  {
    id: '3',
    name: 'Siti Aminah',
    role: 'Operations Manager',
    image: '/images/team/ops-manager.jpg',
    bio: 'Memastikan semua operasional berjalan smooth dari supplier hingga pelanggan. Fokus pada kualitas dan efisiensi.',
    social: {
      instagram: 'https://instagram.com/sitiobbel',
      linkedin: 'https://linkedin.com/in/siti-aminah'
    }
  },
  {
    id: '4',
    name: 'Rizky Pratama',
    role: 'Marketing Lead',
    image: '/images/team/marketing-lead.jpg',
    bio: 'Kreatif dan inovatif dalam membangun brand awareness. Membantu Obbel Coffee tumbuh dan dikenal di Boyolali.',
    social: {
      instagram: 'https://instagram.com/rizkymarketing',
      linkedin: 'https://linkedin.com/in/rizky-pratama'
    }
  },
  {
    id: '5',
    name: 'Dewi Kartika',
    role: 'Senior Barista',
    image: '/images/team/senior-barista.jpg',
    bio: 'Berdedikasi tinggi dan detail-oriented. Selalu menjamin setiap cangkir kopi yang keluar sesuai standar kualitas.',
    social: {
      instagram: 'https://instagram.com/dewibarista'
    }
  },
  {
    id: '6',
    name: 'Andi Prasetyo',
    role: 'Business Development',
    image: '/images/team/biz-dev.jpg',
    bio: 'Membuka peluang baru dan membangun relasi untuk ekspansi Obbel Coffee. Fokus pada pertumbuhan franchise.',
    social: {
      instagram: 'https://instagram.com/andibizdev',
      linkedin: 'https://linkedin.com/in/andi-prasetyo'
    }
  }
];
