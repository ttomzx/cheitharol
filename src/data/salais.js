export const SALAIS = [
  {
    id: 'ningthouja',
    name: 'Ningthouja (Mangang)',
    meiteiName: 'ꯅꯤꯡꯊꯧꯖꯥ (ꯃꯉꯥꯡ)',
    color: '#D4AF37',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    ancestor: 'Iputhou Pakhangba',
    dynastyRole: 'Sovereign Royal Dynasty of Kangleipak',
    description: 'The premier royal lineage founded by Nongda Lairen Pakhangba in 33 CE. The Ningthouja rulers unified all seven Salais under Kangla.',
    notableMonarchs: ['Nongda Lairen Pakhangba', 'Kiyamba', 'Khagemba', 'Pamheiba', 'Bhagyachandra', 'Gambhir Singh', 'Bodhchandra Singh']
  },
  {
    id: 'luwang',
    name: 'Luwang',
    meiteiName: 'ꯂꯨꯋꯥꯡ',
    color: '#E2E8F0',
    badgeBg: 'bg-slate-200/20 text-slate-200 border-slate-300/40',
    ancestor: 'Poireiton / Luwang Ningthou Punshiba',
    dynastyRole: 'Guardians of Wisdom, Statecraft & Canal Engineering',
    description: 'Famed for legendary wisdom, early irrigation canal building, and administrative prowess in early Kangleipak.',
    notableMonarchs: ['Luwang Punshiba', 'Ningthou Lamgba']
  },
  {
    id: 'khuman',
    name: 'Khuman',
    meiteiName: 'ꯈꯨꯃꯟ',
    color: '#38BDF8',
    badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    ancestor: 'Khuman Pokpa',
    dynastyRole: 'Rulers of Southern Lakes & Martial Tradition',
    description: 'Holders of rich martial traditions centered around Loktak Lake and Mayang Imphal before integration with Ningthouja.',
    notableMonarchs: ['Khuman Tonba', 'Khuman Puremba']
  },
  {
    id: 'angom',
    name: 'Angom',
    meiteiName: 'ꯑꯡꯒꯣꯝ',
    color: '#FACC15',
    badgeBg: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
    ancestor: 'Pureiromba',
    dynastyRole: 'First Noble Rank (Angom Ningthou) & Judicial Custodians',
    description: 'Second in rank to the sovereign king. The Angom Ningthou traditionally performed key state ritual rites alongside the monarch.',
    notableMonarchs: ['Angom Ningthou Kwakpa', 'Angom Gopi']
  },
  {
    id: 'moirang',
    name: 'Moirang',
    meiteiName: 'ꯃꯣꯏꯔꯥꯡ',
    color: '#10B981',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    ancestor: 'Iputhou Thangching',
    dynastyRole: 'Cradle of Epic Romance (Khamba-Thoibi) & Southern Realm',
    description: 'Famous for the 7 cycles of divine incarnation, the epic romance of Khamba and Thoibi, and the sacred Thangching temple.',
    notableMonarchs: ['Moirang Ningthou Thangkor Punsiba', 'Chingkhu Telheiba']
  },
  {
    id: 'kha_nganba',
    name: 'Kha-Nganba',
    meiteiName: 'ꯈꯥ-ꯉꯥꯟꯕ',
    color: '#F97316',
    badgeBg: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    ancestor: 'Kha-Nganba Pokpa',
    dynastyRole: 'Keepers of Ancient Healing & Herbal Medicine',
    description: 'Ancestral custodians of traditional Maiba (priestly) medicine, sacred chants, and early metallurgy.',
    notableMonarchs: ['Kha-Nganba Ningthou']
  },
  {
    id: 'salai_leishangthem',
    name: 'Salai-Leishangthem',
    meiteiName: 'ꯁꯂꯥꯏ-ꯂꯩꯁꯥꯡꯊꯦꯝ',
    color: '#A855F7',
    badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    ancestor: 'Leishangthem Pokpa',
    dynastyRole: 'Custodians of Agricultural Abundance & Textile Arts',
    description: 'Renowned for agricultural innovations, sacred weaving of royal attire, and ceremonial ritual crafts.',
    notableMonarchs: ['Leishangthem Ningthou']
  }
];

export const LINEAGE_TREE = [
  {
    id: 'root',
    name: 'Nongda Lairen Pakhangba (33–154 CE)',
    meiteiName: 'ꯅꯣꯡꯗ ꯂꯥꯏꯔꯦꯟ ꯄꯥꯈꯪꯕ',
    role: 'Founder of Ningthouja Dynasty',
    children: ['khui_yoi'],
  },
  {
    id: 'khui_yoi',
    name: 'Khui Yoi Tompok (154–264 CE)',
    meiteiName: 'ꯈꯨꯏ ꯌꯣꯏ ꯇꯣꯝꯄꯣꯛ',
    role: '2nd Sovereign Ruler',
    children: ['taothingmang'],
  },
  {
    id: 'taothingmang',
    name: 'Taothingmang (264–364 CE)',
    meiteiName: 'ꯇꯥꯎꯊꯤꯡꯃꯥꯡ',
    role: '3rd Sovereign Ruler',
    children: ['ancient_branch'],
  },
  {
    id: 'ancient_branch',
    name: 'Medieval Transition Lineage',
    meiteiName: 'ꯃꯌꯥꯏ ꯑꯣꯏꯕ ꯇꯥꯡꯀꯛ',
    role: 'Kiyamba (1467) & Khagemba (1597)',
    children: ['pamheiba_branch'],
  },
  {
    id: 'pamheiba_branch',
    name: 'Pamheiba / Garib Niwaz (1709–1748 CE)',
    meiteiName: 'ꯒꯔꯤꯕ ꯅꯤꯋꯥꯖ (ꯄꯥꯝꯍꯩꯕ)',
    role: 'Emperor & Religious Reformer',
    children: ['bhagyachandra_branch'],
  },
  {
    id: 'bhagyachandra_branch',
    name: 'Rajarshi Bhagyachandra (1759–1798 CE)',
    meiteiName: 'ꯔꯥꯖꯔꯁꯤ ꯚꯥꯒ꯭ꯌꯆꯟꯗ꯭ꯔ',
    role: 'Saint-King & Cultural Architect',
    children: ['gambhir_branch', 'nara_branch'],
  },
  {
    id: 'gambhir_branch',
    name: 'Raja Gambhir Singh (1825–1834 CE)',
    meiteiName: 'ꯒꯝꯚꯤꯔ ꯁꯤꯡꯍ',
    role: 'Liberator of Manipur',
    children: ['chandrakirti_branch'],
  },
  {
    id: 'nara_branch',
    name: 'Maharaja Nara Singh (1844–1850 CE)',
    meiteiName: 'ꯅꯔ ꯁꯤꯡꯍ',
    role: 'Co-Liberator & Builder of Kangla Sha',
    children: [],
  },
  {
    id: 'chandrakirti_branch',
    name: 'Maharaja Chandrakirti Singh (1850–1886 CE)',
    meiteiName: 'ꯆꯟꯗ꯭ꯔꯀꯤꯔꯇꯤ ꯁꯤꯡꯍ',
    role: 'Knight Commander (KCSI)',
    children: ['kulachandra_branch', 'churachand_branch'],
  },
  {
    id: 'kulachandra_branch',
    name: 'Kulachandra & Prince Bir Tikendrajit (1891 CE)',
    meiteiName: 'ꯀꯨꯂꯥꯆꯟꯗ꯭ꯔ ꯑꯃꯁꯨꯡ ꯕꯤꯔ ꯇꯤꯀꯦꯟꯗ꯭ꯔꯖꯤꯠ',
    role: 'Patriots of 1891 War',
    children: [],
  },
  {
    id: 'churachand_branch',
    name: 'Maharaja Churachand Singh (1891–1941 CE)',
    meiteiName: 'ꯆꯨꯔꯥꯆꯥꯟꯗ ꯁꯤꯡꯍ',
    role: 'Colonial Rebuilding Monarch',
    children: ['bodhchandra_final'],
  },
  {
    id: 'bodhchandra_final',
    name: 'Maharaja Bodhchandra Singh (1941–1949 CE)',
    meiteiName: 'ꯕꯣꯙꯆꯟꯗ꯭ꯔ ꯁꯤꯡꯍ',
    role: 'Last Monarch of Manipur State',
    children: [],
  }
];
