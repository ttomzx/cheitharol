export const KINGS = [
  {
    id: 'pakhangba',
    name: 'Nongda Lairen Pakhangba',
    meiteiName: 'ꯅꯣꯡꯗ ꯂꯥꯏꯔꯦꯟ ꯄꯥꯈꯪꯕ',
    transliteration: 'Nongda Lairen Pakhangba',
    reign: '33 CE – 154 CE',
    startYear: 33,
    endYear: 154,
    eraId: 'ancient',
    salai: 'Ningthouja',
    predecessor: 'First Sovereign King of Unified Manipur',
    successor: 'Khui Yoi Tompok',
    queen: 'Laisna',
    title: 'Divine Founder of the Ningthouja Dynasty',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    significance: 'The foundational ruler of the Ningthouja Dynasty who ascended the throne at Kangla in 33 CE. He unified the seven Salais (clans) of the Kangleipak valley and established the divine royal chronicle tradition.',
    achievements: [
      'Ascended the throne of Kangla in 33 CE, marking the formal epoch of Manipuri recorded statehood.',
      'Unified the seven autonomous Yek Salais into a confederated monarchical framework under the Ningthouja clan.',
      'Established the coronation ceremony (Phengjou Tamba) and divine iconography of the sacred coiled dragon-serpent (Pakhangba Paphal).',
      'Instituted the system of administrative appointments (Lallup) and village governance.'
    ],
    majorEvents: [
      { year: 33, title: 'Ascension at Kangla', description: 'Coronation alongside Queen Laisna, marking year 1 of the Ningthouja royal era.' },
      { year: 50, title: 'Consolidation of 7 Salais', description: 'Peace treaty and administrative union between Ningthouja, Luwang, Khuman, Angom, Moirang, Kha-Nganba, and Salai-Leishangthem.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history', 'jhalajit_history']
  },
  {
    id: 'khui_yoi_tompok',
    name: 'Khui Yoi Tompok',
    meiteiName: 'ꯈꯨꯏ ꯌꯣꯏ ꯇꯣꯝꯄꯣꯛ',
    transliteration: 'Khui Yoi Tompok',
    reign: '154 CE – 264 CE',
    startYear: 154,
    endYear: 264,
    eraId: 'ancient',
    salai: 'Ningthouja',
    predecessor: 'Nongda Lairen Pakhangba',
    successor: 'Taothingmang',
    queen: 'Ngangoi Yaoshibi',
    title: 'Pioneer of Agricultural Infrastructure',
    significance: 'Son of Pakhangba who initiated major drainage, land reclamation, and agricultural irrigation works across the Imphal valley.',
    achievements: [
      'Constructed embankments along the Imphal and Iril rivers to prevent valley flooding.',
      'Standardized metal tools and iron plowshares for rice cultivation.',
      'Organized early defense outposts along the foothill frontiers.'
    ],
    majorEvents: [
      { year: 180, title: 'Great Valley Drainage Project', description: 'Reclaimed marshlands around Kangla for royal agriculture.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history']
  },
  {
    id: 'taothingmang',
    name: 'Taothingmang',
    meiteiName: 'ꯇꯥꯎꯊꯤꯡꯃꯥꯡ',
    transliteration: 'Taothingmang',
    reign: '264 CE – 364 CE',
    startYear: 264,
    endYear: 364,
    eraId: 'ancient',
    salai: 'Ningthouja',
    predecessor: 'Khui Yoi Tompok',
    successor: 'Khui Ningonba',
    title: 'Architect of Early Kangla Citadel',
    significance: 'Expanded the defensive ramparts of Kangla Fort and established ceremonial rituals for royal succession.',
    achievements: [
      'Fortified Kangla Fort with earthen ramparts and timber gates.',
      'Codified early judicial customs and clan arbitration laws.'
    ],
    majorEvents: [
      { year: 300, title: 'Expansion of Kangla Boundary', description: 'Demarcated the sacred inner sanctum of Kangla (Uttra Sangba).' }
    ],
    sources: ['cheitharol_kumbaba']
  },
  {
    id: 'naophangba',
    name: 'Naophangba',
    meiteiName: 'ꯅꯥꯑꯣꯐꯥꯡꯕ',
    transliteration: 'Naophangba',
    reign: '428 CE – 518 CE',
    startYear: 428,
    endYear: 518,
    eraId: 'ancient',
    salai: 'Ningthouja',
    predecessor: 'Sameirang',
    successor: 'Kabui Salanthang',
    title: 'Patron of Metallurgy & Craft',
    significance: 'Promoted bronze and iron metallurgy in Manipur, leading to enhanced weaponry and ceremonial art.',
    achievements: [
      'Established bronze casting guilds for royal weapons and ceremonial bell artifacts.',
      'Fostered diplomatic gifts with surrounding hill chiefdoms.'
    ],
    majorEvents: [
      { year: 450, title: 'Bronze Age Craft Era', description: 'Introduction of specialized bell-metal casting traditions.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history']
  },
  {
    id: 'kiyamba',
    name: 'King Kiyamba (Ningthouremba)',
    meiteiName: 'ꯀꯤꯌꯥꯝꯕ',
    transliteration: 'Kiyamba',
    reign: '1467 CE – 1508 CE',
    startYear: 1467,
    endYear: 1508,
    eraId: 'ancient',
    salai: 'Ningthouja',
    predecessor: 'Ningthou Khomba',
    successor: 'Koirengba',
    title: 'Conqueror of Kabaw & Receiver of Lord Vishnu',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    significance: 'A monumental ruler who allied with King Khekhomba of Shan (Pong kingdom) to conquer Kyang (Kabaw Valley). He received the sacred Vishnu Chakra idol and built the historic brick Vishnu Temple at Bishnupur in 1475.',
    achievements: [
      'Formed a strategic military alliance with Shan King Khekhomba of Pong in 1470 CE to defeat Kyang.',
      'Received the holy idol of Lord Vishnu from the Shan King, marking early Vaishnavite cultural contact in Manipur.',
      'Constructed the historic brick temple of Vishnu at Lamangdong (modern Bishnupur) in 1475 CE, which stands to this day.',
      'Commissioned systematic daily entries in the Cheitharol Kumbaba royal chronicle.'
    ],
    majorEvents: [
      { year: 1470, title: 'Conquest of Kyang (Kabaw Valley)', description: 'Joint Manipur-Pong military campaign securing eastern borders.' },
      { year: 1475, title: 'Construction of Bishnupur Vishnu Temple', description: 'Oldest surviving brick monument in Manipur state.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history', 'roy_manipur']
  },
  {
    id: 'khagemba',
    name: 'Ningthou Khagemba (Meidingu Khagemba)',
    meiteiName: 'ꯈꯥꯒꯦꯝꯕ',
    transliteration: 'Khagemba',
    reign: '1597 CE – 1652 CE',
    startYear: 1597,
    endYear: 1652,
    eraId: 'ancient',
    salai: 'Ningthouja',
    predecessor: 'Mungyamba',
    successor: 'Paikhomba',
    title: 'Conqueror of the Chinese & Father of Modern Infrastructure',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80',
    significance: 'Earned the title "Khagemba" (Conqueror of the Chinese) after defeating a Chinese invasion force in 1631 CE. He introduced firearms, brick manufacturing, silk weaving, and expanded Kangla Fort.',
    achievements: [
      'Defeated a Chinese invasion force at the eastern borders in 1631 CE, taking skilled Chinese prisoners who settled and introduced brick masonry and silk weaving.',
      'Introduced gunpowder, cannons, and firearms (Nongmei) into the Manipuri military arsenal.',
      'Built the famous brick wall and moat around Kangla Fort and constructed the wooden royal palace.',
      'Codified rules for Sagol Kangjei (Polo) and established competitive sports tournaments.'
    ],
    majorEvents: [
      { year: 1606, title: 'Defeat of Mughal-backed Prince Sanongba', description: 'Repelled invasion by Cachar-backed prince and captured Muslim soldiers (Pangals), granting them land settlements in Manipur.' },
      { year: 1631, title: 'Battle against Chinese Raiders', description: 'Victory resulting in the title Khagemba and introduction of brick masonry.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history', 'hodson_meitheis']
  },
  {
    id: 'charairongba',
    name: 'King Charairongba',
    meiteiName: 'ꯆꯔꯥꯏꯔꯣꯡꯕ',
    transliteration: 'Charairongba',
    reign: '1697 CE – 1709 CE',
    startYear: 1697,
    endYear: 1709,
    eraId: 'ancient',
    salai: 'Ningthouja',
    predecessor: 'Paikhomba',
    successor: 'Garib Niwaz (Pamheiba)',
    title: 'Architect of Vaishnavite Transition',
    significance: 'The precursor monarch who embraced Nimandi Vaishnavism in 1704 CE under Rai Ramananda, constructing the Krishna temple at Brahmapur.',
    achievements: [
      'Formally initiated royal patronage of Vaishnavism in 1704 CE.',
      'Constructed the brick Krishna Temple at Brahmapur Guru Aribam Leikai.',
      'Strengthened defense posts along the Kabaw Valley border.'
    ],
    majorEvents: [
      { year: 1704, title: 'Royal Initiation into Nimandi Vaishnavism', description: 'King and court formally adopt Vaishnavite spiritual rites.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history']
  },
  {
    id: 'pamheiba',
    name: 'Meidingu Pamheiba (Garib Niwaz)',
    meiteiName: 'ꯒꯔꯤꯕ ꯅꯤꯋꯥꯖ (ꯄꯥꯝꯍꯩꯕ)',
    transliteration: 'Pamheiba / Garib Niwaz',
    reign: '1709 CE – 1748 CE',
    startYear: 1709,
    endYear: 1748,
    eraId: 'medieval',
    salai: 'Ningthouja',
    predecessor: 'Charairongba',
    successor: 'Chit Sai',
    title: 'Empirical Military Master & Religious Reformer',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    significance: 'A formidable military ruler who repeatedly invaded Toungoo Burma, reaching Sagaing and Ava. Under the influence of preacher Shantidas Goswami, he adopted Ramanandi Vaishnavism, made Bengali script dominant, and orchestrated the Puya Meithaba (burning of ancient Puyas) in 1729.',
    achievements: [
      'Led multiple victorious military expeditions deep into Burma (1725, 1735, 1738), capturing Sagaing.',
      'Adopted Ramanandi Vaishnavism in 1729 CE as the official state religion.',
      'Orchestrated Puya Meithaba (burning of 123 ancient Meitei scriptures) in 1729 CE, a controversial watershed cultural moment.',
      'Constructed the iconic Kalika Temple and Ningthoukhong shrines.'
    ],
    majorEvents: [
      { year: 1729, title: 'Puya Meithaba', description: 'Public burning of ancient Meitei Puyas (scriptures) at Kangla Uttra.' },
      { year: 1738, title: 'Siege of Sagaing', description: 'Manipuri army under Pamheiba strikes the Burmese capital at Sagaing.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history', 'parratt_cheitharol']
  },
  {
    id: 'bhagyachandra',
    name: 'Rajarshi Bhagyachandra (Ching-Thang Khomba / Jai Singh)',
    meiteiName: 'ꯔꯥꯖꯔꯁꯤ ꯚꯥꯒ꯭ꯌꯆꯟꯗ꯭ꯔ (ꯆꯤꯡꯊꯪ ꯈꯣꯝꯕ)',
    transliteration: 'Rajarshi Bhagyachandra',
    reign: '1759 CE – 1798 CE',
    startYear: 1759,
    endYear: 1798,
    eraId: 'medieval',
    salai: 'Ningthouja',
    predecessor: 'Gaurisiam',
    successor: 'Labyanachandra',
    queen: 'Khurai Leima',
    title: 'Saint-King, Creator of Maha Raas Leela & Nat Sankirtana',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    significance: 'Revered as "Rajarshi" (Saint-King). Despite frequent Burmese invasions that forced temporary exiled periods in Assam, he crafted the world-renowned Manipuri Classical Dance (Maha Raas Leela), sculpted the idol of Lord Govindajee from a jackfruit tree at Kaina, and signed the first Anglo-Manipur Treaty in 1762.',
    achievements: [
      'Envisioned in a divine dream and sculpted the holy idol of Shri Shri Govindajee at Kaina hill in 1776 CE.',
      'Choreographed and premiered the exquisite Manipuri Maha Raas Leela dance at Langthabal in 1779 CE.',
      'Instituted Nat Sankirtana (UNESCO Intangible Cultural Heritage of Humanity).',
      'Signed the historical First Anglo-Manipur Defense Treaty with Mr. Verelst of the British East India Company in Chittagong (1762 CE).'
    ],
    majorEvents: [
      { year: 1762, title: 'First Anglo-Manipur Defense Treaty', description: 'Strategic alliance with British East India Company against Burmese invasions.' },
      { year: 1779, title: 'Premiere of Maha Raas Leela', description: 'First performance of Maha Raas Leela featuring Princess Bimbavati as Radha.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history', 'jhalajit_history', 'roy_manipur']
  },
  {
    id: 'marjit_singh',
    name: 'King Marjit Singh',
    meiteiName: 'ꯃꯥꯔꯖꯤꯠ ꯁꯤꯡꯍ',
    transliteration: 'Marjit Singh',
    reign: '1813 CE – 1819 CE',
    startYear: 1813,
    endYear: 1819,
    eraId: 'medieval',
    salai: 'Ningthouja',
    predecessor: 'Chourajit Singh',
    successor: 'Burmese Occupation (Chahi Taret Khuntakpa)',
    title: 'Ruler Prior to the Seven Years Devastation',
    significance: 'Secured the throne with assistance from King Bagyidaw of Burma. When he refused to attend the Burmese coronation in 1819, Burma launched a catastrophic invasion, triggering the Chahi Taret Khuntakpa.',
    achievements: [
      'Introduced royal polo games with gold-embroidered saddle trappings.',
      'Constructed the gilded dragon posts at Kangla Fort.'
    ],
    majorEvents: [
      { year: 1819, title: 'Burmese Invasion of Manipur', description: 'Refusal to render homage to Ava results in the 1819 invasion and flight to Cachar.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history']
  },
  {
    id: 'gambhir_singh',
    name: 'Raja Gambhir Singh (Chinglen Nongdrenkhomba)',
    meiteiName: 'ꯒꯝꯚꯤꯔ ꯁꯤꯡꯍ (ꯆꯤꯡꯂꯦꯟ ꯅꯣꯡꯗ꯭ꯔꯦꯟꯈꯣꯝꯕ)',
    transliteration: 'Gambhir Singh',
    reign: '1825 CE – 1834 CE',
    startYear: 1825,
    endYear: 1834,
    eraId: 'medieval',
    salai: 'Ningthouja',
    predecessor: 'Interregnum (Burmese Occupation)',
    successor: 'Chandrakirti Singh (Regency under Nara Singh)',
    title: 'Liberator of Manipur & Commander of Manipur Levy',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    significance: 'The heroic liberator of Manipur who, alongside military genius Nara Singh and the British-backed Manipur Levy (500 troops), drove out the Burmese forces in 1826, ending the disastrous Seven Years Devastation (Chahi Taret Khuntakpa).',
    achievements: [
      'Formed the Manipur Levy with Nara Singh and British captain F.J. Grant in 1825.',
      'Liberated Manipur from Burmese occupation in 1826 and pushed the boundary beyond the Ningthi (Chindwin) River.',
      'Treaty of Yandabo (Feb 24, 1826) formally recognized Gambhir Singh as the sovereign King of Manipur.',
      'Established the royal capital at Langthabal (Canchipur).'
    ],
    majorEvents: [
      { year: 1826, title: 'Treaty of Yandabo', description: 'End of First Anglo-Burmese War and international recognition of Manipur statehood.' },
      { year: 1834, title: 'Handover of Kabaw Valley', description: 'British transfer Kabaw Valley to Burma in exchange for a monthly compensation fee to Manipur.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history', 'roy_manipur']
  },
  {
    id: 'nara_singh',
    name: 'Maharaja Nara Singh',
    meiteiName: 'ꯅꯔ ꯁꯤꯡꯍ',
    transliteration: 'Nara Singh',
    reign: '1844 CE – 1850 CE',
    startYear: 1844,
    endYear: 1850,
    eraId: 'medieval',
    salai: 'Ningthouja',
    predecessor: 'Regency of Maharani Kumudini',
    successor: 'Chandrakirti Singh',
    title: 'Heroic General & Sovereign King',
    significance: 'Originally Regent for infant Chandrakirti, Nara Singh took full sovereign control in 1844 after repelling a palace conspiracy. Reconstructed the iconic Kangla Sha dragon statues at Kangla.',
    achievements: [
      'Erected the majestic 30-foot plaster Kangla Sha statues at Kangla Fort in 1844.',
      'Maintained internal order and defeated multiple rebel claimant incursions.',
      'Rebuilt judicial and defense infrastructure destroyed during the Burmese invasion.'
    ],
    majorEvents: [
      { year: 1844, title: 'Erection of Kangla Sha Statues', description: 'Sacred dragon-lion emblems erected in front of Kangla Uttra.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history']
  },
  {
    id: 'chandrakirti_singh',
    name: 'Maharaja Chandrakirti Singh (KCSI)',
    meiteiName: 'ꯃꯍꯥꯔꯥꯖꯥ ꯆꯟꯗ꯭ꯔꯀꯤꯔꯇꯤ ꯁꯤꯡꯍ',
    transliteration: 'Chandrakirti Singh',
    reign: '1850 CE – 1886 CE',
    startYear: 1850,
    endYear: 1886,
    eraId: 'medieval',
    salai: 'Ningthouja',
    predecessor: 'Nara Singh',
    successor: 'Surachandra Singh',
    title: 'Architect of Modern Stability & Knight Commander',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    significance: 'Reigned for 36 prosperous years. He assisted the British during the 1857 Sepoy Mutiny and the 1879 Naga Expedition, for which Queen Victoria bestowed upon him the title of KCSI (Knight Commander of the Star of India).',
    achievements: [
      'Hosted the historic 1874 Silchar Summit with British Viceroy Lord Northbrook.',
      'Organized the 64 Sankirtana Pung Cholom drum rhythms and patronized classical Manipuri arts.',
      'Awarded KCSI by the British Empire in 1880.',
      'Conducted the boundary demarcation of Manipur\'s northern and southern hill ranges.'
    ],
    majorEvents: [
      { year: 1874, title: 'Silchar Summit with Viceroy Northbrook', description: 'High-level diplomatic conference affirming Manipur sovereignty under British alliance.' },
      { year: 1879, title: 'Kohima Expedition', description: 'Manipuri army led by Prince Bir Tikendrajit rescues British garrison at Kohima.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history', 'parratt_cheitharol']
  },
  {
    id: 'kulachandra_singh',
    name: 'Maharaja Kulachandra Singh',
    meiteiName: 'ꯀꯨꯂꯥꯆꯟꯗ꯭ꯔ ꯁꯤꯡꯍ',
    transliteration: 'Kulachandra Singh',
    reign: '1890 CE – 1891 CE',
    startYear: 1890,
    endYear: 1891,
    eraId: 'medieval',
    salai: 'Ningthouja',
    predecessor: 'Surachandra Singh',
    successor: 'British Crown Administration (Churachand Singh)',
    title: 'Monarch of the 1891 Anglo-Manipur War',
    significance: 'Ascended the throne after the 1890 palace revolution. His refusal to surrender Crown Prince Bir Tikendrajit led to Chief Commissioner J.W. Quinton\'s ill-fated march on Imphal, triggering the 1891 Anglo-Manipur War.',
    achievements: [
      'Defended Manipuri sovereignty against the British expeditionary force in March–April 1891.',
      'Commanded the army during the historic Battle of Khongjom.'
    ],
    majorEvents: [
      { year: 1891, title: '1891 Anglo-Manipur War', description: 'British three-pronged invasion of Imphal following the execution of Quinton and officers.' },
      { year: 1891, title: 'Exile to Andaman Islands', description: 'After British victory, Kulachandra was exiled to Kala Pani (Andaman Islands).' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history', 'roy_manipur']
  },
  {
    id: 'churachand_singh',
    name: 'Maharaja Sir Churachand Singh (KCSI, CBE)',
    meiteiName: 'ꯁꯔ ꯆꯨꯔꯥꯆꯥꯟꯗ ꯁꯤꯡꯍ',
    transliteration: 'Churachand Singh',
    reign: '1891 CE – 1941 CE',
    startYear: 1891,
    endYear: 1941,
    eraId: 'colonial',
    salai: 'Ningthouja',
    predecessor: 'Kulachandra Singh',
    successor: 'Bodhchandra Singh',
    title: 'Colonial Rebuilding & Modernization Regent',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80',
    significance: 'Selected by the British as a minor king in 1891, ending direct combat. His 50-year reign saw modern education, roads, hospitals, sports associations, and the Navadvipa Vaishnavite pilgrimages.',
    achievements: [
      'Established modern schools, Johnstone Higher Secondary School, and civil hospitals.',
      'Founded the Nupi Lan resistance contexts (1904 & 1939) and codified modern land revenues.',
      'Patronized the All Manipur Sports Association and modern football & polo leagues.'
    ],
    majorEvents: [
      { year: 1904, title: 'First Nupi Lan', description: 'Women\'s uprising against British forced labor (Lallup) to rebuild Assistant Political Agent\'s bungalow.' },
      { year: 1939, title: 'Second Nupi Lan', description: 'Mass movement by Manipuri women against unbridled rice export causing local famine.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history', 'jhalajit_history']
  },
  {
    id: 'bodhchandra_singh',
    name: 'Maharaja Bodhchandra Singh',
    meiteiName: 'ꯃꯍꯥꯔꯥꯖꯥ ꯕꯣꯙꯆꯟꯗ꯭ꯔ ꯁꯤꯡꯍ',
    transliteration: 'Bodhchandra Singh',
    reign: '1941 CE – 1949 CE',
    startYear: 1941,
    endYear: 1949,
    eraId: 'transition',
    salai: 'Ningthouja',
    predecessor: 'Churachand Singh',
    successor: 'Integration into Union of India (1949)',
    queen: 'Maharani Ishwari Devi',
    title: 'Last Sovereign Monarch of Manipur State',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    significance: 'The last ruling Maharaja of Manipur. Steered Manipur through World War II (Battle of Imphal 1944), enacted the democratic Manipur State Constitution Act 1947, and signed the Manipur Merger Agreement under intense diplomatic pressure at Shillong on September 21, 1949.',
    achievements: [
      'Navigated Manipur during the devastations of World War II (1942–1945).',
      'Promulgated the historic Manipur State Constitution Act 1947, establishing adult franchise and constitutional monarchy.',
      'Inaugurated Manipur\'s first elected Legislative Assembly in October 1948 with MK Priyobrata Singh as Chief Minister.',
      'Signed the Merger Agreement on September 21, 1949 at Shillong, transferring administration to India on October 15, 1949.'
    ],
    majorEvents: [
      { year: 1947, title: 'Enactment of Manipur Constitution Act', description: 'First democratic constitution in the region based on universal adult suffrage.' },
      { year: 1949, title: 'Signing of Manipur Merger Agreement', description: 'Merger signed under house detention at Shillong, ending 1,916 years of Ningthouja monarchical rule.' }
    ],
    sources: ['cheitharol_kumbaba', 'kamei_history', 'roy_manipur', 'constitution_1947']
  }
];
