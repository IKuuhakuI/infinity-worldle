const countries = [
  {
    country: "Afghanistan",
    code: "AF",
    latitude: "33",
    longitude: "65",
    continent: "Asia",
    ptBr: "Afeganistão"
  },
  {
    country: "Albania",
    code: "AL",
    latitude: "41",
    longitude: "20",
    continent: "Europe",
    ptBr: "Albânia"
  },
  {
    country: "Algeria",
    code: "DZ",
    latitude: "28",
    longitude: "3",
    continent: "Africa",
    ptBr: "Argélia"
  },
  {
    country: "American Samoa",
    code: "AS",
    latitude: "-14.3333",
    longitude: "-170",
    continent: "Oceania",
    ptBr: "Samoa Americana"
  },
  {
    country: "Andorra",
    code: "AD",
    latitude: "42.5",
    longitude: "1.6",
    continent: "Europe",
    ptBr: "Andorra"
  },
  {
    country: "Angola",
    code: "AO",
    latitude: "-12.5",
    longitude: "18.5",
    continent: "Africa",
    ptBr: "Angola"
  },
  {
    country: "Anguilla",
    code: "AI",
    latitude: "18.25",
    longitude: "-63.1667",
    continent: "America",
    ptBr: "Anguilla"
  },
  {
    country: "Argentina",
    code: "AR",
    latitude: "-34",
    longitude: "-64",
    continent: "America",
    ptBr: "Argentina"
  },
  {
    country: "Armenia",
    code: "AM",
    latitude: "40",
    longitude: "45",
    continent: "Asia",
    ptBr: "Armênia"
  },
  {
    country: "Aruba",
    code: "AW",
    latitude: "12.5",
    longitude: "-69.9667",
    continent: "America",
    ptBr: "Aruba"
  },
  {
    country: "Australia",
    code: "AU",
    latitude: "-27",
    longitude: "133",
    continent: "Oceania",
    ptBr: "Austrália"
  },
  {
    country: "Austria",
    code: "AT",
    latitude: "47.3333",
    longitude: "13.3333",
    continent: "Europe",
    ptBr: "Áustria"
  },
  {
    country: "Azerbaijan",
    code: "AZ",
    latitude: "40.5",
    longitude: "47.5",
    continent: "Europe",
    ptBr: "Azerbaijão"
  },
  {
    country: "Bahamas",
    code: "BS",
    latitude: "24.25",
    longitude: "-76",
    continent: "America",
    ptBr: "Bahamas"
  },
  {
    country: "Bahrain",
    code: "BH",
    latitude: "26",
    longitude: "50.55",
    continent: "Asia",
    ptBr: "Bahrein"
  },
  {
    country: "Bangladesh",
    code: "BD",
    latitude: "24",
    longitude: "90",
    continent: "Asia",
    ptBr: "Bangladesh"
  },
  {
    country: "Barbados",
    code: "BB",
    latitude: "13.1667",
    longitude: "-59.5333",
    continent: "Asia",
    ptBr: "Bangladesh"
  },
  {
    country: "Belarus",
    code: "BY",
    latitude: "53",
    longitude: "28",
    continent: "Europe",
    ptBr: "Belarus"
  },
  {
    country: "Belgium",
    code: "BE",
    latitude: "50.8333",
    longitude: "4",
    continent: "Europe",
    ptBr: "Bélgica"
  },
  {
    country: "Belize",
    code: "BZ",
    latitude: "17.25",
    longitude: "-88.75",
    continent: "America",
    ptBr: "Belize"
  },
  {
    country: "Benin",
    code: "BJ",
    latitude: "9.5",
    longitude: "2.25",
    continent: "Africa",
    ptBr: "Benin"
  },
  {
    country: "Bermuda",
    code: "BM",
    latitude: "32.3333",
    longitude: "-64.75",
    continent: "America",
    ptBr: "Bermudas"
  },
  {
    country: "Butão",
    code: "BT",
    latitude: "27.5",
    longitude: "90.5",
    continent: "Asia",
    ptBr: "Albânia"
  },
  {
    country: "Bolivia",
    code: "BO",
    latitude: "-17",
    longitude: "-65",
    continent: "America",
    ptBr: "Bolívia"
  },
  {
    country: "Bosnia and Herzegovina",
    code: "BA",
    latitude: "44",
    longitude: "18",
    continent: "Europe",
    ptBr: "Bósnia e Herzegovina"
  },
  {
    country: "Botswana",
    code: "BW",
    latitude: "-22",
    longitude: "24",
    continent: "Africa",
    ptBr: "Botsuana"
  },
  {
    country: "Bouvet Island",
    code: "BV",
    latitude: "-54.4333",
    longitude: "3.4",
    continent: "Africa",
    ptBr: "Ilha Bouvet"
  },
  {
    country: "Brazil",
    code: "BR",
    latitude: "-10",
    longitude: "-55",
    continent: "America",
    ptBr: "Brasil"
  },
  {
    country: "British Indian Ocean Territory",
    code: "IO",
    latitude: "-6",
    longitude: "71.5",
    continent: "Asia",
    ptBr: "Território do Oceano Índico Britânico"
  },
  {
    country: "Brunei",
    code: "BN",
    latitude: "4.5",
    longitude: "114.6667",
    continent: "Asia",
    ptBr: "Brunei"
  },
  {
    country: "Bulgaria",
    code: "BG",
    latitude: "43",
    longitude: "25",
    continent: "Europe",
    ptBr: "Bulgária"
  },
  {
    country: "Burkina Faso",
    code: "BF",
    latitude: "13",
    longitude: "-2",
    continent: "Africa",
    ptBr: "Burkina Faso"
  },
  {
    country: "Burundi",
    code: "BI",
    latitude: "-3.5",
    longitude: "30",
    continent: "Africa",
    ptBr: "Burundi"
  },
  {
    country: "Cambodia",
    code: "KH",
    latitude: "13",
    longitude: "105",
    continent: "Asia",
    ptBr: "Cambodja"
  },
  {
    country: "Cameroon",
    code: "CM",
    latitude: "6",
    longitude: "12",
    continent: "Africa",
    ptBr: "Camarões"
  },
  {
    country: "Canada",
    code: "CA",
    latitude: "60",
    longitude: "-95",
    continent: "America",
    ptBr: "Canadá"
  },
  {
    country: "Cape Verde",
    code: "CV",
    latitude: "16",
    longitude: "-24",
    continent: "Africa",
    ptBr: "Cabo Verde"
  },
  {
    country: "Cayman Islands",
    code: "KY",
    latitude: "19.5",
    longitude: "-80.5",
    continent: "America",
    ptBr: "Ilhas Cayman"
  },
  {
    country: "Central African Republic",
    code: "CF",
    latitude: "7",
    longitude: "21",
    continent: "Africa",
    ptBr: "República Centro-Africana"
  },
  {
    country: "Chad",
    code: "TD",
    latitude: "15",
    longitude: "19",
    continent: "Africa",
    ptBr: "Chade"
  },
  {
    country: "Chile",
    code: "CL",
    latitude: "-30",
    longitude: "-71",
    continent: "America",
    ptBr: "Chile"
  },
  {
    country: "China",
    code: "CN",
    latitude: "35",
    longitude: "105",
    continent: "Asia",
    ptBr: "China"
  },
  {
    country: "Christmas Island",
    code: "CX",
    latitude: "-10.5",
    longitude: "105.6667",
    continent: "Oceania",
    ptBr: "Ilha Christmas"
  },
  {
    country: "Colombia",
    code: "CO",
    latitude: "4",
    longitude: "-72",
    continent: "America",
    ptBr: "Colômbia"
  },
  {
    country: "Comoros",
    code: "KM",
    latitude: "-12.1667",
    longitude: "44.25",
    continent: "Africa",
    ptBr: "Comores"
  },
  {
    country: "Cook Islands",
    code: "CK",
    latitude: "-21.2333",
    longitude: "-159.7667",
    continent: "Oceania",
    ptBr: "Ilhas Cook"
  },
  {
    country: "Costa Rica",
    code: "CR",
    latitude: "10",
    longitude: "-84",
    continent: "America",
    ptBr: "Costa Rica"
  },
  {
    country: "Ivory Coast",
    code: "CI",
    latitude: "8",
    longitude: "-5",
    continent: "Africa",
    ptBr: "Costa do Marfim"
  },
  {
    country: "Croatia",
    code: "HR",
    latitude: "45.1667",
    longitude: "15.5",
    continent: "Europe",
    ptBr: "Croácia"
  },
  {
    country: "Cuba",
    code: "CU",
    latitude: "21.5",
    longitude: "-80",
    continent: "America",
    ptBr: "Cuba"
  },
  {
    country: "Cyprus",
    code: "CY",
    latitude: "35",
    longitude: "33",
    continent: "Europe",
    ptBr: "Chipre"
  },
  {
    country: "Czech Republic",
    code: "CZ",
    latitude: "49.75",
    longitude: "15.5",
    continent: "Europe",
    ptBr: "Tchéquia"
  },
  {
    country: "Denmark",
    code: "DK",
    latitude: "56",
    longitude: "10",
    continent: "Europe",
    ptBr: "Dinamarca"
  },
  {
    country: "Djibouti",
    code: "DJ",
    latitude: "11.5",
    longitude: "43",
    continent: "Africa",
    ptBr: "Djibouti"
  },
  {
    country: "Dominica",
    code: "DM",
    latitude: "15.4167",
    longitude: "-61.3333",
    continent: "America",
    ptBr: "Dominica"
  },
  {
    country: "Dominican Republic",
    code: "DO",
    latitude: "19",
    longitude: "-70.6667",
    continent: "America",
    ptBr: "República Dominicana"
  },
  {
    country: "Ecuador",
    code: "EC",
    latitude: "-2",
    longitude: "-77.5",
    continent: "America",
    ptBr: "Equador"
  },
  {
    country: "Egypt",
    code: "EG",
    latitude: "27",
    longitude: "30",
    continent: "Africa",
    ptBr: "Egito"
  },
  {
    country: "El Salvador",
    code: "SV",
    latitude: "13.8333",
    longitude: "-88.9167",
    continent: "America",
    ptBr: "El Salvador"
  },
  {
    country: "Equatorial Guinea",
    code: "GQ",
    latitude: "2",
    longitude: "10",
    continent: "Africa",
    ptBr: "Guiné Equatorial"
  },
  {
    country: "Eritrea",
    code: "ER",
    latitude: "15",
    longitude: "39",
    continent: "Africa",
    ptBr: "Eritreia"
  },
  {
    country: "Estonia",
    code: "EE",
    latitude: "59",
    longitude: "26",
    continent: "Europe",
    ptBr: "Estônia"
  },
  {
    country: "Ethiopia",
    code: "ET",
    latitude: "8",
    longitude: "38",
    continent: "Africa",
    ptBr: "Etiópia"
  },
  {
    country: "Faroe Islands",
    code: "FO",
    latitude: "62",
    longitude: "-7",
    continent: "Europe",
    ptBr: "Ilhas Faroé"
  },
  {
    country: "Fiji",
    code: "FJ",
    latitude: "-18",
    longitude: "175",
    continent: "Oceania",
    ptBr: "Fiji"
  },
  {
    country: "Finland",
    code: "FI",
    latitude: "64",
    longitude: "26",
    continent: "Europe",
    ptBr: "Finlândia"
  },
  {
    country: "France",
    code: "FR",
    latitude: "46",
    longitude: "2",
    continent: "Europe",
    ptBr: "França"
  },
  {
    country: "French Guiana",
    code: "GF",
    latitude: "4",
    longitude: "-53",
    continent: "America",
    ptBr: "Guiana Francesa"
  },
  {
    country: "French Polynesia",
    code: "PF",
    latitude: "-15",
    longitude: "-140",
    continent: "Oceania",
    ptBr: "Polinésia Francesa"
  },
  {
    country: "French Southern Territories",
    code: "TF",
    latitude: "-43",
    longitude: "67",
    continent: "Oceania",
    ptBr: "Terras Austrais e Antárticas Francesas"
  },
  {
    country: "Gabon",
    code: "GA",
    latitude: "-1",
    longitude: "11.75",
    continent: "Africa",
    ptBr: "Gabão"
  },
  {
    country: "Gambia",
    code: "GM",
    latitude: "13.4667",
    longitude: "-16.5667",
    continent: "Africa",
    ptBr: "Gâmbia"
  },
  {
    country: "Georgia",
    code: "GE",
    latitude: "42",
    longitude: "43.5",
    continent: "Europe",
    ptBr: "Geórgia"
  },
  {
    country: "Germany",
    code: "DE",
    latitude: "51",
    longitude: "9",
    continent: "Europe",
    ptBr: "Alemanha"
  },
  {
    country: "Ghana",
    code: "GH",
    latitude: "8",
    longitude: "-2",
    continent: "Africa",
    ptBr: "Gana"
  },
  {
    country: "Gibraltar",
    code: "GI",
    latitude: "36.1833",
    longitude: "-5.3667",
    continent: "Europe",
    ptBr: "Gibraltar"
  },
  {
    country: "Greece",
    code: "GR",
    latitude: "39",
    longitude: "22",
    continent: "Europe",
    ptBr: "Grécia"
  },
  {
    country: "Greenland",
    code: "GL",
    latitude: "72",
    longitude: "-40",
    continent: "America",
    ptBr: "Groelândia"
  },
  {
    country: "Grenada",
    code: "GD",
    latitude: "12.1167",
    longitude: "-61.6667",
    continent: "America",
    ptBr: "Granada"
  },
  {
    country: "Guadeloupe",
    code: "GP",
    latitude: "16.25",
    longitude: "-61.5833",
    continent: "America",
    ptBr: "Guadalupe"
  },
  {
    country: "Guam",
    code: "GU",
    latitude: "13.4667",
    longitude: "144.7833",
    continent: "Oceania",
    ptBr: "Guam"
  },
  {
    country: "Guatemala",
    code: "GT",
    latitude: "15.5",
    longitude: "-90.25",
    continent: "America",
    ptBr: "Guatemala"
  },
  {
    country: "Guernsey",
    code: "GG",
    latitude: "49.5",
    longitude: "-2.56",
    continent: "Europe",
    ptBr: "Guernsey"
  },
  {
    country: "Guinea",
    code: "GN",
    latitude: "11",
    longitude: "-10",
    continent: "Africa",
    ptBr: "Guiné"
  },
  {
    country: "Guinea-Bissau",
    code: "GW",
    latitude: "12",
    longitude: "-15",
    continent: "Africa",
    ptBr: "Guiné-Bissau"
  },
  {
    country: "Guyana",
    code: "GY",
    latitude: "5",
    longitude: "-59",
    continent: "America",
    ptBr: "Guiana"
  },
  {
    country: "Haiti",
    code: "HT",
    latitude: "19",
    longitude: "-72.4167",
    continent: "America",
    ptBr: "Haiti"
  },
  {
    country: "Heard Island and McDonald Islands",
    code: "HM",
    latitude: "-53.1",
    longitude: "72.5167",
    continent: "Africa",
    ptBr: "Ilha Heard e Ilhas McDonald"
  },
  {
    country: "Honduras",
    code: "HN",
    latitude: "15",
    longitude: "-86.5",
    continent: "America",
    ptBr: "Honduras"
  },
  {
    country: "Hong Kong",
    code: "HK",
    latitude: "22.25",
    longitude: "114.1667",
    continent: "Asia",
    ptBr: "Hong Kong"
  },
  {
    country: "Hungary",
    code: "HU",
    latitude: "47",
    longitude: "20",
    continent: "Europe",
    ptBr: "Hungria"
  },
  {
    country: "Iceland",
    code: "IS",
    latitude: "65",
    longitude: "-18",
    continent: "Europe",
    ptBr: "Islândia"
  },
  {
    country: "India",
    code: "IN",
    latitude: "20",
    longitude: "77",
    continent: "Asia",
    ptBr: "Índia"
  },
  {
    country: "Indonesia",
    code: "ID",
    latitude: "-5",
    longitude: "120",
    continent: "Asia",
    ptBr: "Indonésia"
  },
  {
    country: "Iran",
    code: "IR",
    latitude: "32",
    longitude: "53",
    continent: "Asia",
    ptBr: "Irã"
  },
  {
    country: "Iraq",
    code: "IQ",
    latitude: "33",
    longitude: "44",
    continent: "Asia",
    ptBr: "Iraq"
  },
  {
    country: "Ireland",
    code: "IE",
    latitude: "53",
    longitude: "-8",
    continent: "Europe",
    ptBr: "Irlanda"
  },
  {
    country: "Isle of Man",
    code: "IM",
    latitude: "54.23",
    longitude: "-4.55",
    continent: "Europe",
    ptBr: "Ilha de Man"
  },
  {
    country: "Israel",
    code: "IL",
    latitude: "31.5",
    longitude: "34.75",
    continent: "Israel",
    ptBr: "Asia"
  },
  {
    country: "Italy",
    code: "IT",
    latitude: "42.8333",
    longitude: "12.8333",
    continent: "Europe",
    ptBr: "Itália"
  },
  {
    country: "Jamaica",
    code: "JM",
    latitude: "18.25",
    longitude: "-77.5",
    continent: "America",
    ptBr: "Jamaica"
  },
  {
    country: "Japan",
    code: "JP",
    latitude: "36",
    longitude: "138",
    continent: "Asia",
    ptBr: "Japão"
  },
  {
    country: "Jersey",
    code: "JE",
    latitude: "49.21",
    longitude: "-2.13",
    continent: "Europe",
    ptBr: "Jersey"
  },
  {
    country: "Jordan",
    code: "JO",
    latitude: "31",
    longitude: "36",
    continent: "Asia",
    ptBr: "Jordânia"
  },
  {
    country: "Kazakhstan",
    code: "KZ",
    latitude: "48",
    longitude: "68",
    continent: "Asia",
    ptBr: "Cazaquistão"
  },
  {
    country: "Kenya",
    code: "KE",
    latitude: "1",
    longitude: "38",
    continent: "Africa",
    ptBr: "Quênia"
  },
  {
    country: "Kiribati",
    code: "KI",
    latitude: "1.4167",
    longitude: "173",
    continent: "Oceania",
    ptBr: "Quiribati"
  },
  {
    country: "South Korea",
    code: "KR",
    latitude: "37",
    longitude: "127.5",
    continent: "Asia",
    ptBr: "Coreia do Sul"
  },
  {
    country: "Kuwait",
    code: "KW",
    latitude: "29.3375",
    longitude: "47.6581",
    continent: "Asia",
    ptBr: "Kuwait"
  },
  {
    country: "Kyrgyzstan",
    code: "KG",
    latitude: "41",
    longitude: "75",
    continent: "Asia",
    ptBr: "Quirguistão"
  },
  {
    country: "Latvia",
    code: "LV",
    latitude: "57",
    longitude: "25",
    continent: "Europe",
    ptBr: "Letônia"
  },
  {
    country: "Lebanon",
    code: "LB",
    latitude: "33.8333",
    longitude: "35.8333",
    continent: "Asia",
    ptBr: "Líbano"
  },
  {
    country: "Lesotho",
    code: "LS",
    latitude: "-29.5",
    longitude: "28.5",
    continent: "Africa",
    ptBr: "Lesoto"
  },
  {
    country: "Liberia",
    code: "LR",
    latitude: "6.5",
    longitude: "-9.5",
    continent: "Africa",
    ptBr: "Libéria"
  },
  {
    country: "Libya",
    code: "LY",
    latitude: "25",
    longitude: "17",
    continent: "Africa",
    ptBr: "Líbia"
  },
  {
    country: "Liechtenstein",
    code: "LI",
    latitude: "47.1667",
    longitude: "9.5333",
    continent: "Europe",
    ptBr: "Liechtenstein"
  },
  {
    country: "Lithuania",
    code: "LT",
    latitude: "56",
    longitude: "24",
    continent: "Europe",
    ptBr: "Lituânia"
  },
  {
    country: "Luxembourg",
    code: "LU",
    latitude: "49.75",
    longitude: "6.1667",
    continent: "Europe",
    ptBr: "Luxemburgo"
  },
  {
    country: "Macao",
    code: "MO",
    latitude: "22.1667",
    longitude: "113.55",
    continent: "Asia",
    ptBr: "Macau"
  },
  {
    country: "Macedonia",
    code: "MK",
    latitude: "41.8333",
    longitude: "22",
    continent: "Europe",
    ptBr: "Macedônia"
  },
  {
    country: "Madagascar",
    code: "MG",
    latitude: "-20",
    longitude: "47",
    continent: "Africa",
    ptBr: "Madagascar"
  },
  {
    country: "Malawi",
    code: "MW",
    latitude: "-13.5",
    longitude: "34",
    continent: "Africa",
    ptBr: "Malawi"
  },
  {
    country: "Malaysia",
    code: "MY",
    latitude: "2.5",
    longitude: "112.5",
    continent: "Asia",
    ptBr: "Malásia"
  },
  {
    country: "Maldives",
    code: "MV",
    latitude: "3.25",
    longitude: "73",
    continent: "Asia",
    ptBr: "Maldivas"
  },
  {
    country: "Mali",
    code: "ML",
    latitude: "17",
    longitude: "-4",
    continent: "Africa",
    ptBr: "Mali"
  },
  {
    country: "Malta",
    code: "MT",
    latitude: "35.8333",
    longitude: "14.5833",
    continent: "Europe",
    ptBr: "Malta"
  },
  {
    country: "Marshall Islands",
    code: "MH",
    latitude: "9",
    longitude: "168",
    continent: "Oceania",
    ptBr: "Ilhas Marshall"
  },
  {
    country: "Martinique",
    code: "MQ",
    latitude: "14.6667",
    longitude: "-61",
    continent: "America",
    ptBr: "Martinica"
  },
  {
    country: "Mauritania",
    code: "MR",
    latitude: "20",
    longitude: "-12",
    continent: "Africa",
    ptBr: "Mauritânia"
  },
  {
    country: "Mauritius",
    code: "MU",
    latitude: "-20.2833",
    longitude: "57.55",
    continent: "Africa",
    ptBr: "Ilhas Maurício"
  },
  {
    country: "Mayotte",
    code: "YT",
    latitude: "-12.8333",
    longitude: "45.1667",
    continent: "Africa",
    ptBr: "Mayotte"
  },
  {
    country: "Mexico",
    code: "MX",
    latitude: "23",
    longitude: "-102",
    continent: "America",
    ptBr: "México"
  },
  {
    country: "Monaco",
    code: "MC",
    latitude: "43.7333",
    longitude: "7.4",
    continent: "Europe",
    ptBr: "Mônaco"
  },
  {
    country: "Mongolia",
    code: "MN",
    latitude: "46",
    longitude: "105",
    continent: "Asia",
    ptBr: "Mongólia"
  },
  {
    country: "Montenegro",
    code: "ME",
    latitude: "42",
    longitude: "19",
    continent: "Europe",
    ptBr: "Montenegro"
  },
  {
    country: "Montserrat",
    code: "MS",
    latitude: "16.75",
    longitude: "-62.2",
    continent: "America",
    ptBr: "Montserrat"
  },
  {
    country: "Morocco",
    code: "MA",
    latitude: "32",
    longitude: "-5",
    continent: "Marrocos",
    ptBr: "Marrocos"
  },
  {
    country: "Mozambique",
    code: "MZ",
    latitude: "-18.25",
    longitude: "35",
    continent: "Africa",
    ptBr: "Moçambique"
  },
  {
    country: "Myanmar",
    code: "MM",
    latitude: "22",
    longitude: "98",
    continent: "Asia",
    ptBr: "Myanmar"
  },
  {
    country: "Namibia",
    code: "NA",
    latitude: "-22",
    longitude: "17",
    continent: "Africa",
    ptBr: "Namíbia"
  },
  {
    country: "Nauru",
    code: "NR",
    latitude: "-0.5333",
    longitude: "166.9167",
    continent: "Oceania",
    ptBr: "Nauru"
  },
  {
    country: "Nepal",
    code: "NP",
    latitude: "28",
    longitude: "84",
    continent: "Asia",
    ptBr: "Nepal"
  },
  {
    country: "Netherlands",
    code: "NL",
    latitude: "52.5",
    longitude: "5.75",
    continent: "Europe",
    ptBr: "Holanda"
  },
  {
    country: "New Caledonia",
    code: "NC",
    latitude: "-21.5",
    longitude: "165.5",
    continent: "Oceania",
    ptBr: "Nova Caledônia"
  },
  {
    country: "New Zealand",
    code: "NZ",
    latitude: "-41",
    longitude: "174",
    continent: "Oceania",
    ptBr: "Nova Zelândia"
  },
  {
    country: "Nicaragua",
    code: "NI",
    latitude: "13",
    longitude: "-85",
    continent: "America",
    ptBr: "Nicarágua"
  },
  {
    country: "Niger",
    code: "NE",
    latitude: "16",
    longitude: "8",
    continent: "Africa",
    ptBr: "Níger"
  },
  {
    country: "Nigeria",
    code: "NG",
    latitude: "10",
    longitude: "8",
    continent: "Africa",
    ptBr: "Nigéria"
  },
  {
    country: "Niue",
    code: "NU",
    latitude: "-19.0333",
    longitude: "-169.8667",
    continent: "Oceania",
    ptBr: "Niue"
  },
  {
    country: "Norfolk Island",
    code: "NF",
    latitude: "-29.0333",
    longitude: "167.95",
    continent: "Oceania",
    ptBr: "Ilha Norfolk"
  },
  {
    country: "Northern Mariana Islands",
    code: "MP",
    latitude: "15.2",
    longitude: "145.75",
    continent: "Oceania",
    ptBr: "Ilhas Marianas do Norte"
  },
  {
    country: "Norway",
    code: "NO",
    latitude: "62",
    longitude: "10",
    continent: "Europe",
    ptBr: "Noruega"
  },
  {
    country: "Oman",
    code: "OM",
    latitude: "21",
    longitude: "57",
    continent: "Asia",
    ptBr: "Omã"
  },
  {
    country: "Pakistan",
    code: "PK",
    latitude: "30",
    longitude: "70",
    continent: "Asia",
    ptBr: "Paquistão"
  },
  {
    country: "Palau",
    code: "PW",
    latitude: "7.5",
    longitude: "134.5",
    continent: "Oceania",
    ptBr: "Palau"
  },
  {
    country: "Panama",
    code: "PA",
    latitude: "9",
    longitude: "-80",
    continent: "America",
    ptBr: "Panamá"
  },
  {
    country: "Papua New Guinea",
    code: "PG",
    latitude: "-6",
    longitude: "147",
    continent: "Oceania",
    ptBr: "Papua-Nova Guiné"
  },
  {
    country: "Paraguay",
    code: "PY",
    latitude: "-23",
    longitude: "-58",
    continent: "America",
    ptBr: "Paraguai"
  },
  {
    country: "Peru",
    code: "PE",
    latitude: "-10",
    longitude: "-76",
    continent: "Peru",
    ptBr: "America"
  },
  {
    country: "Philippines",
    code: "PH",
    latitude: "13",
    longitude: "122",
    continent: "Oceania",
    ptBr: "Filipinas"
  },
  {
    country: "Pitcairn",
    code: "PN",
    latitude: "-24.7",
    longitude: "-127.4",
    continent: "Oceania",
    ptBr: "Ilhas Pitcairn"
  },
  {
    country: "Poland",
    code: "PL",
    latitude: "52",
    longitude: "20",
    continent: "Europe",
    ptBr: "Polônia"
  },
  {
    country: "Portugal",
    code: "PT",
    latitude: "39.5",
    longitude: "-8",
    continent: "Europe",
    ptBr: "Portugal"
  },
  {
    country: "Puerto Rico",
    code: "PR",
    latitude: "18.25",
    longitude: "-66.5",
    continent: "America",
    ptBr: "Porto Rico"
  },
  {
    country: "Qatar",
    code: "QA",
    latitude: "25.5",
    longitude: "51.25",
    continent: "Asia",
    ptBr: "Catar"
  },
  {
    country: "Romania",
    code: "RO",
    latitude: "46",
    longitude: "25",
    continent: "Europe",
    ptBr: "Romênia"
  },
  {
    country: "Russia",
    code: "RU",
    latitude: "60",
    longitude: "100",
    continent: "Asia",
    ptBr: "Rússia"
  },
  {
    country: "Rwanda",
    code: "RW",
    latitude: "-2",
    longitude: "30",
    continent: "Africa",
    ptBr: "Ruanda"
  },
  {
    country: "Saint Kitts and Nevis",
    code: "KN",
    latitude: "17.3333",
    longitude: "-62.75",
    continent: "America",
    ptBr: "São Cristóvão e Névis"
  },
  {
    country: "Saint Lucia",
    code: "LC",
    latitude: "13.8833",
    longitude: "-61.1333",
    continent: "America",
    ptBr: "Santa Lúcia"
  },
  {
    country: "Saint Pierre and Miquelon",
    code: "PM",
    latitude: "46.8333",
    longitude: "-56.3333",
    continent: "America",
    ptBr: "Saint-Pierre e Miquelon"
  },
  {
    country: "Saint Vincent and the Grenadines",
    code: "VC",
    latitude: "13.25",
    longitude: "-61.2",
    continent: "America",
    ptBr: "São Vicente e Granadinas"
  },
  {
    country: "Samoa",
    code: "WS",
    latitude: "-13.5833",
    longitude: "-172.3333",
    continent: "Oceania",
    ptBr: "Samoa"
  },
  {
    country: "San Marino",
    code: "SM",
    latitude: "43.7667",
    longitude: "12.4167",
    continent: "Europe",
    ptBr: "San Marino"
  },
  {
    country: "Sao Tome and Principe",
    code: "ST",
    latitude: "1",
    longitude: "7",
    continent: "Africa",
    ptBr: "São Tomé e Príncipe"
  },
  {
    country: "Saudi Arabia",
    code: "SA",
    latitude: "25",
    longitude: "45",
    continent: "Asia",
    ptBr: "Arábia Saudita"
  },
  {
    country: "Senegal",
    code: "SN",
    latitude: "14",
    longitude: "-14",
    continent: "Africa",
    ptBr: "Senegal"
  },
  {
    country: "Serbia",
    code: "RS",
    latitude: "44",
    longitude: "21",
    continent: "Europe",
    ptBr: "Sérvia"
  },
  {
    country: "Seychelles",
    code: "SC",
    latitude: "-4.5833",
    longitude: "55.6667",
    continent: "Africa",
    ptBr: "Seychelles"
  },
  {
    country: "Sierra Leone",
    code: "SL",
    latitude: "8.5",
    longitude: "-11.5",
    continent: "Africa",
    ptBr: "Serra Leoa"
  },
  {
    country: "Singapore",
    code: "SG",
    latitude: "1.3667",
    longitude: "103.8",
    continent: "Asia",
    ptBr: "Singapura"
  },
  {
    country: "Slovakia",
    code: "SK",
    latitude: "48.6667",
    longitude: "19.5",
    continent: "Europe",
    ptBr: "Eslováquia"
  },
  {
    country: "Slovenia",
    code: "SI",
    latitude: "46",
    longitude: "15",
    continent: "Europe",
    ptBr: "Eslovênia"
  },
  {
    country: "Solomon Islands",
    code: "SB",
    latitude: "-8",
    longitude: "159",
    continent: "Oceania",
    ptBr: "Ilhas Salomão"
  },
  {
    country: "Somalia",
    code: "SO",
    latitude: "10",
    longitude: "49",
    continent: "Africa",
    ptBr: "Somália"
  },
  {
    country: "South Africa",
    code: "ZA",
    latitude: "-29",
    longitude: "24",
    continent: "Africa",
    ptBr: "África do Sul"
  },
  {
    country: "South Georgia and the South Sandwich Islands",
    code: "GS",
    latitude: "-54.5",
    longitude: "-37",
    continent: "America",
    ptBr: "Ilhas Geórgia do Sul e Sandwich do Sul"
  },
  {
    country: "Spain",
    code: "ES",
    latitude: "40",
    longitude: "-4",
    continent: "Europe",
    ptBr: "Espanha"
  },
  {
    country: "Sri Lanka",
    code: "LK",
    latitude: "7",
    longitude: "81",
    continent: "Asia",
    ptBr: "Sri Lanka"
  },
  {
    country: "Sudan",
    code: "SD",
    latitude: "15",
    longitude: "30",
    continent: "Africa",
    ptBr: "Sudão"
  },
  {
    country: "Suriname",
    code: "SR",
    latitude: "4",
    longitude: "-56",
    continent: "Oceania",
    ptBr: "Suriname"
  },
  {
    country: "Svalbard and Jan Mayen",
    code: "SJ",
    latitude: "78",
    longitude: "20",
    continent: "Europe",
    ptBr: "Svalbard e Jan Mayen"
  },
  {
    country: "Swaziland",
    code: "SZ",
    latitude: "-26.5",
    longitude: "31.5",
    continent: "Africa",
    ptBr: "Suazilândia"
  },
  {
    country: "Sweden",
    code: "SE",
    latitude: "62",
    longitude: "15",
    continent: "Europe",
    ptBr: "Suécia"
  },
  {
    country: "Switzerland",
    code: "CH",
    latitude: "47",
    longitude: "8",
    continent: "Europe",
    ptBr: "Suíça"
  },
  {
    country: "Syrian Arab Republic",
    code: "SY",
    latitude: "35",
    longitude: "38",
    continent: "Asia",
    ptBr: "Síria"
  },
  {
    country: "Taiwan",
    code: "TW",
    latitude: "23.5",
    longitude: "121",
    continent: "Asia",
    ptBr: "Taiwan"
  },
  {
    country: "Tajikistan",
    code: "TJ",
    latitude: "39",
    longitude: "71",
    continent: "Asia",
    ptBr: "Tajiquistão"
  },
  {
    country: "Tanzania",
    code: "TZ",
    latitude: "-6",
    longitude: "35",
    continent: "Africa",
    ptBr: "Tanzânia"
  },
  {
    country: "Thailand",
    code: "TH",
    latitude: "15",
    longitude: "100",
    continent: "Asia",
    ptBr: "Tailândia"
  },
  {
    country: "Togo",
    code: "TG",
    latitude: "8",
    longitude: "1.1667",
    continent: "Asia",
    ptBr: "Togo"
  },
  {
    country: "Tokelau",
    code: "TK",
    latitude: "-9",
    longitude: "-172",
    continent: "Oceania",
    ptBr: "Tokelau"
  },
  {
    country: "Tonga",
    code: "TO",
    latitude: "-20",
    longitude: "-175",
    continent: "Oceania",
    ptBr: "Tonga"
  },
  {
    country: "Trinidad and Tobago",
    code: "TT",
    latitude: "11",
    longitude: "-61",
    continent: "America",
    ptBr: "Trindade e Tobago"
  },
  {
    country: "Tunisia",
    code: "TN",
    latitude: "34",
    longitude: "9",
    continent: "Africa",
    ptBr: "Tunísia"
  },
  {
    country: "Turkey",
    code: "TR",
    latitude: "39",
    longitude: "35",
    continent: "Asia",
    ptBr: "Turquia"
  },
  {
    country: "Turkmenistan",
    code: "TM",
    latitude: "40",
    longitude: "60",
    continent: "Asia",
    ptBr: "Turcomenistão"
  },
  {
    country: "Turks and Caicos Islands",
    code: "TC",
    latitude: "21.75",
    longitude: "-71.5833",
    continent: "America",
    ptBr: "Turks e Caicos"
  },
  {
    country: "Tuvalu",
    code: "TV",
    latitude: "-8",
    longitude: "178",
    continent: "Oceania",
    ptBr: "Tuvalu"
  },
  {
    country: "Uganda",
    code: "UG",
    latitude: "1",
    longitude: "32",
    continent: "Africa",
    ptBr: "Uganda"
  },
  {
    country: "Ukraine",
    code: "UA",
    latitude: "49",
    longitude: "32",
    continent: "Europe",
    ptBr: "Ucrânia"
  },
  {
    country: "United Arab Emirates",
    code: "AE",
    latitude: "24",
    longitude: "54",
    continent: "Asia",
    ptBr: "Emirados Árabes Unidos"
  },
  {
    country: "United Kingdom",
    code: "GB",
    latitude: "54",
    longitude: "-2",
    continent: "Europe",
    ptBr: "Reino Unido"
  },
  {
    country: "United States",
    code: "US",
    latitude: "38",
    longitude: "-97",
    continent: "America",
    ptBr: "Estados Unidos"
  },
  {
    country: "Uruguay",
    code: "UY",
    latitude: "-33",
    longitude: "-56",
    continent: "America",
    ptBr: "Uruguai"
  },
  {
    country: "Uzbekistan",
    code: "UZ",
    latitude: "41",
    longitude: "64",
    continent: "Asia",
    ptBr: "Uzbequistão"
  },
  {
    country: "Vanuatu",
    code: "VU",
    latitude: "-16",
    longitude: "167",
    continent: "Oceania",
    ptBr: "Vanuatu"
  },
  {
    country: "Venezuela",
    code: "VE",
    latitude: "8",
    longitude: "-66",
    continent: "America",
    ptBr: "Venezuela"
  },
  {
    country: "Vietnam",
    code: "VN",
    latitude: "16",
    longitude: "106",
    continent: "Asia",
    ptBr: "Vietnã"
  },
  {
    country: "Wallis and Futuna",
    code: "WF",
    latitude: "-13.3",
    longitude: "-176.2",
    continent: "Oceania",
    ptBr: "Wallis e Futuna"
  },
  {
    country: "Western Sahara",
    code: "EH",
    latitude: "24.5",
    longitude: "-13",
    continent: "Africa",
    ptBr: "Saara Ocidental"
  },
  {
    country: "Yemen",
    code: "YE",
    latitude: "15",
    longitude: "48",
    continent: "Asia",
    ptBr: "Iêmen"
  },
  {
    country: "Zambia",
    code: "ZM",
    latitude: "-15",
    longitude: "30",
    continent: "Africa",
    ptBr: "Zâmbia"
  },
  {
    country: "Zimbabwe",
    code: "ZW",
    latitude: "-20",
    longitude: "30",
    continent: "Africa",
    ptBr: "Zimbábue"
  }
]
