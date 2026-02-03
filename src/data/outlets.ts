export interface Outlet {
  id: string;
  name: string;
  address: string;
  hours: {
    open: string;
    close: string;
    days: string;
  };
  mapsUrl: string;
}

export const outlets: Outlet[] = [
  {
    id: '1',
    name: 'Depan Rumah Dinas Bupati',
    address: 'Jl. Polo Griya Pulisen Lama, Boyolali',
    hours: {
      open: '08:00',
      close: '16:30',
      days: 'Senin - Sabtu'
    },
    mapsUrl: 'https://maps.app.goo.gl/ZEfrRekWk5yg4ppv6'
  },
  {
    id: '2',
    name: 'Barat Pasar Ngebong',
    address: 'Barat Pasar Ngebong, Boyolali',
    hours: {
      open: '06:00',
      close: '22:00',
      days: 'Senin - Minggu'
    },
    mapsUrl: 'https://maps.app.goo.gl/ZEfrRekWk5yg4ppv6'
  },
  {
    id: '3',
    name: 'Depan Galaxy Mall Jl. Pandanaran',
    address: 'Galaxy Mall Jl. Pandanaran, Boyolali',
    hours: {
      open: '06:00',
      close: '22:00',
      days: 'Senin - Minggu'
    },
    mapsUrl: 'https://maps.app.goo.gl/ZEfrRekWk5yg4ppv6'
  },
  {
    id: '4',
    name: 'Depan Pom Bensin Kemiri',
    address: 'Pom Bensin Kemiri, Boyolali',
    hours: {
      open: '08:00',
      close: '17:00',
      days: 'Senin - Sabtu'
    },
    mapsUrl: 'https://maps.app.goo.gl/ZEfrRekWk5yg4ppv6'
  },
  {
    id: '5',
    name: 'Depan SMP 3 Boyolali',
    address: 'SMP 3 Boyolali, Boyolali',
    hours: {
      open: '08:00',
      close: '17:00',
      days: 'Senin - Sabtu'
    },
    mapsUrl: 'https://maps.app.goo.gl/ZEfrRekWk5yg4ppv6'
  },
  {
    id: '6',
    name: 'Depan Satlantas Boyolali',
    address: 'Satlantas Boyolali, Boyolali',
    hours: {
      open: '08:00',
      close: '17:00',
      days: 'Senin - Sabtu'
    },
    mapsUrl: 'https://maps.app.goo.gl/ZEfrRekWk5yg4ppv6'
  },
  {
    id: '7',
    name: 'Depan Gacoan Boyolali',
    address: 'Gacoan Boyolali, Boyolali',
    hours: {
      open: '11:30',
      close: '20:30',
      days: 'Senin - Sabtu'
    },
    mapsUrl: 'https://maps.app.goo.gl/ZEfrRekWk5yg4ppv6'
  },
  {
    id: '8',
    name: 'Jl. Randusari Teras Boyolali',
    address: 'Teras Boyolali, Boyolali',
    hours: {
      open: '12:00',
      close: '21:00',
      days: 'Senin - Sabtu'
    },
    mapsUrl: 'https://maps.app.goo.gl/ZEfrRekWk5yg4ppv6'
  }
];
