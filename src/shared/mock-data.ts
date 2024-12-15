export type TBranch = {
  title: string;
  phone: string[];
  fax: string[];
  address: string;
  oreratingMode: string;
  location: {
    lat: number;
    long: number;
  };
  card: string;
}

export const branches: TBranch[] = [
  {
    title: 'Москва',
    phone: ['+7 (499) 136-17-18', '+7 (903) 467-98-51'],
    address: '115114, ул. Дербеневская, д. 1, стр. 1, подъезд 44, офис 6 (станция метро "Павелецкая"),',
    fax: [],
    oreratingMode: 'Режим работы: c 10:00 до 18:00',
    location: {
      lat: 55.755864,
      long: 37.617698,
    },
    card: 'small'

  },

  {
    title: 'Волгоград',
    phone: ['+7 (8442) 36-17-18', '+7 (8442) 67-98-51'],
    address: '400080, ул. Командира Рудь, 14А',
    fax: [],
    oreratingMode: 'Режим работы: c 08:00 до 17:00',
    location: {
      lat: 48.707067,
      long:  44.516975,
    },
    card: 'small',
  },

  {
    title: 'Краснодар',
    phone: ['+7 (861) 136-17-18', '+7 (861) 467-98-51'],
    address: '350015, ул. Митрофана Садина, 176',
    fax: [],
    oreratingMode: 'Режим работы: c 08:00 до 17:00',
    location: {
      lat: 45.035470,
      long: 38.975313,
    },
    card: 'small',
  },

  {
    title: 'Саратов',
    phone: ['+7 (27) 136-17-18', '+7 (903) 467-98-51'],
    address: '410080, пр-т Строителей, 1',
    fax: [],
    oreratingMode: 'Режим работы: c 10:00 до 18:00',
    location: {
      lat: 51.533562,
      long: 46.034266,
    },
    card: 'small',
  },

  {
    title: 'Воронеж',
    phone: ['+7 (272) 136-17-18', '+7 (903) 467-98-51'],
    address: '394030, ул. Комиссаржевской, 10',
    fax: [],
    oreratingMode: 'Режим работы: c 10:00 до 18:00',
    location: {
      lat: 51.660781,
      long: 39.200296,
    },
    card: 'small',
  },

  {
    title: 'Ереван',
    phone: ['+7 (000) 136-17-18', '+7 (111) 467-98-51'],
    address: 'Район Аван 4, дом 2',
    fax: [],
    oreratingMode: 'Режим работы: c 10:00 до 18:00',
    location: {
      lat: 40.177628,
      long: 44.512546,
    },
    card: 'small',
  },

  {
    title: 'Новосибирск',
    phone: ['+7 (000) 136-17-18', '+7 (111) 467-98-51', '+7 (960) 872-66-22'],
    address: '630039, ул. Никитин 116, к.3',
    fax: ['+7 (27) 136-17-18', '+7 (903) 467-98-51'],
    oreratingMode: 'Режим работы: c 10:00 до 18:00',
    location: {
      lat: 55.030204,
      long: 82.920430,
    },
    card: 'big',
  },
]
