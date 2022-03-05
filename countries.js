const countries = [
  {
    country: "Afghanistan",
    code: "AF",
    latitude: "33",
    longitude: "65"
  },
  {
    country: "Albania",
    code: "AL",
    latitude: "41",
    longitude: "20"
  },
  {
    country: "Algeria",
    code: "DZ",
    latitude: "28",
    longitude: "3"
  },
  {
    country: "American Samoa",
    code: "AS",
    latitude: "-14.3333",
    longitude: "-170"
  },
  {
    country: "Andorra",
    code: "AD",
    latitude: "42.5",
    longitude: "1.6"
  },
  {
    country: "Angola",
    code: "AO",
    latitude: "-12.5",
    longitude: "18.5"
  },
  {
    country: "Anguilla",
    code: "AI",
    latitude: "18.25",
    longitude: "-63.1667"
  },
  {
    country: "Antiguaand Barbuda",
    code: "AG",
    latitude: "17.05",
    longitude: "-61.8"
  },
  {
    country: "Argentina",
    code: "AR",
    latitude: "-34",
    longitude: "-64"
  },
  {
    country: "Armenia",
    code: "AM",
    latitude: "40",
    longitude: "45"
  },
  {
    country: "Aruba",
    code: "AW",
    latitude: "12.5",
    longitude: "-69.9667"
  },
  {
    country: "Australia",
    code: "AU",
    latitude: "-27",
    longitude: "133"
  },
  {
    country: "Austria",
    code: "AT",
    latitude: "47.3333",
    longitude: "13.3333"
  },
  {
    country: "Azerbaijan",
    code: "AZ",
    latitude: "40.5",
    longitude: "47.5"
  },
  {
    country: "Bahamas",
    code: "BS",
    latitude: "24.25",
    longitude: "-76"
  },
  {
    country: "Bahrain",
    code: "BH",
    latitude: "26",
    longitude: "50.55"
  },
  {
    country: "Bangladesh",
    code: "BD",
    latitude: "24",
    longitude: "90"
  },
  {
    country: "Barbados",
    code: "BB",
    latitude: "13.1667",
    longitude: "-59.5333"
  },
  {
    country: "Belarus",
    code: "BY",
    latitude: "53",
    longitude: "28"
  },
  {
    country: "Belgium",
    code: "BE",
    latitude: "50.8333",
    longitude: "4"
  },
  {
    country: "Belize",
    code: "BZ",
    latitude: "17.25",
    longitude: "-88.75"
  },
  {
    country: "Benin",
    code: "BJ",
    latitude: "9.5",
    longitude: "2.25"
  },
  {
    country: "Bermuda",
    code: "BM",
    latitude: "32.3333",
    longitude: "-64.75"
  },
  {
    country: "Bhutan",
    code: "BT",
    latitude: "27.5",
    longitude: "90.5"
  },
  {
    country: "Bolivia",
    code: "BO",
    latitude: "-17",
    longitude: "-65"
  },
  {
    country: "Bosnia and Herzegovina",
    code: "BA",
    latitude: "44",
    longitude: "18"
  },
  {
    country: "Botswana",
    code: "BW",
    latitude: "-22",
    longitude: "24"
  },
  {
    country: "Bouvet Island",
    code: "BV",
    latitude: "-54.4333",
    longitude: "3.4"
  },
  {
    country: "Brazil",
    code: "BR",
    latitude: "-10",
    longitude: "-55"
  },
  {
    country: "British Indian Ocean Territory",
    code: "IO",
    latitude: "-6",
    longitude: "71.5"
  },
  {
    country: "Brunei",
    code: "BN",
    latitude: "4.5",
    longitude: "114.6667"
  },
  {
    country: "Bulgaria",
    code: "BG",
    latitude: "43",
    longitude: "25"
  },
  {
    country: "Burkina Faso",
    code: "BF",
    latitude: "13",
    longitude: "-2"
  },
  {
    country: "Burundi",
    code: "BI",
    latitude: "-3.5",
    longitude: "30"
  },
  {
    country: "Cambodia",
    code: "KH",
    latitude: "13",
    longitude: "105"
  },
  {
    country: "Cameroon",
    code: "CM",
    latitude: "6",
    longitude: "12"
  },
  {
    country: "Canada",
    code: "CA",
    latitude: "60",
    longitude: "-95"
  },
  {
    country: "Cape Verde",
    code: "CV",
    latitude: "16",
    longitude: "-24"
  },
  {
    country: "Cayman Islands",
    code: "KY",
    latitude: "19.5",
    longitude: "-80.5"
  },
  {
    country: "Central African Republic",
    code: "CF",
    latitude: "7",
    longitude: "21"
  },
  {
    country: "Chad",
    code: "TD",
    latitude: "15",
    longitude: "19"
  },
  {
    country: "Chile",
    code: "CL",
    latitude: "-30",
    longitude: "-71"
  },
  {
    country: "China",
    code: "CN",
    latitude: "35",
    longitude: "105"
  },
  {
    country: "Christmas Island",
    code: "CX",
    latitude: "-10.5",
    longitude: "105.6667"
  },
  {
    country: "Colombia",
    code: "CO",
    latitude: "4",
    longitude: "-72"
  },
  {
    country: "Comoros",
    code: "KM",
    latitude: "-12.1667",
    longitude: "44.25"
  },
  {
    country: "Congo",
    code: "CG",
    latitude: "-1",
    longitude: "15"
  },
  {
    country: "Cook Islands",
    code: "CK",
    latitude: "-21.2333",
    longitude: "-159.7667"
  },
  {
    country: "Costa Rica",
    code: "CR",
    latitude: "10",
    longitude: "-84"
  },
  {
    country: "Ivory Coast",
    code: "CI",
    latitude: "8",
    longitude: "-5"
  },
  {
    country: "Croatia",
    code: "HR",
    latitude: "45.1667",
    longitude: "15.5"
  },
  {
    country: "Cuba",
    code: "CU",
    latitude: "21.5",
    longitude: "-80"
  },
  {
    country: "Cyprus",
    code: "CY",
    latitude: "35",
    longitude: "33"
  },
  {
    country: "Czech Republic",
    code: "CZ",
    latitude: "49.75",
    longitude: "15.5"
  },
  {
    country: "Denmark",
    code: "DK",
    latitude: "56",
    longitude: "10"
  },
  {
    country: "Djibouti",
    code: "DJ",
    latitude: "11.5",
    longitude: "43"
  },
  {
    country: "Dominica",
    code: "DM",
    latitude: "15.4167",
    longitude: "-61.3333"
  },
  {
    country: "Dominican Republic",
    code: "DO",
    latitude: "19",
    longitude: "-70.6667"
  },
  {
    country: "Ecuador",
    code: "EC",
    latitude: "-2",
    longitude: "-77.5"
  },
  {
    country: "Egypt",
    code: "EG",
    latitude: "27",
    longitude: "30"
  },
  {
    country: "El Salvador",
    code: "SV",
    latitude: "13.8333",
    longitude: "-88.9167"
  },
  {
    country: "Equatorial Guinea",
    code: "GQ",
    latitude: "2",
    longitude: "10"
  },
  {
    country: "Eritrea",
    code: "ER",
    latitude: "15",
    longitude: "39"
  },
  {
    country: "Estonia",
    code: "EE",
    latitude: "59",
    longitude: "26"
  },
  {
    country: "Ethiopia",
    code: "ET",
    latitude: "8",
    longitude: "38"
  },
  {
    country: "Faroe Islands",
    code: "FO",
    latitude: "62",
    longitude: "-7"
  },
  {
    country: "Fiji",
    code: "FJ",
    latitude: "-18",
    longitude: "175"
  },
  {
    country: "Finland",
    code: "FI",
    latitude: "64",
    longitude: "26"
  },
  {
    country: "France",
    code: "FR",
    latitude: "46",
    longitude: "2"
  },
  {
    country: "French Guiana",
    code: "GF",
    latitude: "4",
    longitude: "-53"
  },
  {
    country: "French Polynesia",
    code: "PF",
    latitude: "-15",
    longitude: "-140"
  },
  {
    country: "French Southern Territories",
    code: "TF",
    latitude: "-43",
    longitude: "67"
  },
  {
    country: "Gabon",
    code: "GA",
    latitude: "-1",
    longitude: "11.75"
  },
  {
    country: "Gambia",
    code: "GM",
    latitude: "13.4667",
    longitude: "-16.5667"
  },
  {
    country: "Georgia",
    code: "GE",
    latitude: "42",
    longitude: "43.5"
  },
  {
    country: "Germany",
    code: "DE",
    latitude: "51",
    longitude: "9"
  },
  {
    country: "Ghana",
    code: "GH",
    latitude: "8",
    longitude: "-2"
  },
  {
    country: "Gibraltar",
    code: "GI",
    latitude: "36.1833",
    longitude: "-5.3667"
  },
  {
    country: "Greece",
    code: "GR",
    latitude: "39",
    longitude: "22"
  },
  {
    country: "Greenland",
    code: "GL",
    latitude: "72",
    longitude: "-40"
  },
  {
    country: "Grenada",
    code: "GD",
    latitude: "12.1167",
    longitude: "-61.6667"
  },
  {
    country: "Guadeloupe",
    code: "GP",
    latitude: "16.25",
    longitude: "-61.5833"
  },
  {
    country: "Guam",
    code: "GU",
    latitude: "13.4667",
    longitude: "144.7833"
  },
  {
    country: "Guatemala",
    code: "GT",
    latitude: "15.5",
    longitude: "-90.25"
  },
  {
    country: "Guernsey",
    code: "GG",
    latitude: "49.5",
    longitude: "-2.56"
  },
  {
    country: "Guinea",
    code: "GN",
    latitude: "11",
    longitude: "-10"
  },
  {
    country: "Guinea-Bissau",
    code: "GW",
    latitude: "12",
    longitude: "-15"
  },
  {
    country: "Guyana",
    code: "GY",
    latitude: "5",
    longitude: "-59"
  },
  {
    country: "Haiti",
    code: "HT",
    latitude: "19",
    longitude: "-72.4167"
  },
  {
    country: "Heard Island and McDonald Islands",
    code: "HM",
    latitude: "-53.1",
    longitude: "72.5167"
  },
  {
    country: "Honduras",
    code: "HN",
    latitude: "15",
    longitude: "-86.5"
  },
  {
    country: "Hong Kong",
    code: "HK",
    latitude: "22.25",
    longitude: "114.1667"
  },
  {
    country: "Hungary",
    code: "HU",
    latitude: "47",
    longitude: "20"
  },
  {
    country: "Iceland",
    code: "IS",
    latitude: "65",
    longitude: "-18"
  },
  {
    country: "India",
    code: "IN",
    latitude: "20",
    longitude: "77"
  },
  {
    country: "Indonesia",
    code: "ID",
    latitude: "-5",
    longitude: "120"
  },
  {
    country: "Iran",
    code: "IR",
    latitude: "32",
    longitude: "53"
  },
  {
    country: "Iraq",
    code: "IQ",
    latitude: "33",
    longitude: "44"
  },
  {
    country: "Ireland",
    code: "IE",
    latitude: "53",
    longitude: "-8"
  },
  {
    country: "Isleof Man",
    code: "IM",
    latitude: "54.23",
    longitude: "-4.55"
  },
  {
    country: "Israel",
    code: "IL",
    latitude: "31.5",
    longitude: "34.75"
  },
  {
    country: "Italy",
    code: "IT",
    latitude: "42.8333",
    longitude: "12.8333"
  },
  {
    country: "Jamaica",
    code: "JM",
    latitude: "18.25",
    longitude: "-77.5"
  },
  {
    country: "Japan",
    code: "JP",
    latitude: "36",
    longitude: "138"
  },
  {
    country: "Jersey",
    code: "JE",
    latitude: "49.21",
    longitude: "-2.13"
  },
  {
    country: "Jordan",
    code: "JO",
    latitude: "31",
    longitude: "36"
  },
  {
    country: "Kazakhstan",
    code: "KZ",
    latitude: "48",
    longitude: "68"
  },
  {
    country: "Kenya",
    code: "KE",
    latitude: "1",
    longitude: "38"
  },
  {
    country: "Kiribati",
    code: "KI",
    latitude: "1.4167",
    longitude: "173"
  },
  {
    country: "South Korea",
    code: "KR",
    latitude: "37",
    longitude: "127.5"
  },
  {
    country: "Kuwait",
    code: "KW",
    latitude: "29.3375",
    longitude: "47.6581"
  },
  {
    country: "Kyrgyzstan",
    code: "KG",
    latitude: "41",
    longitude: "75"
  },
  {
    country: "Latvia",
    code: "LV",
    latitude: "57",
    longitude: "25"
  },
  {
    country: "Lebanon",
    code: "LB",
    latitude: "33.8333",
    longitude: "35.8333"
  },
  {
    country: "Lesotho",
    code: "LS",
    latitude: "-29.5",
    longitude: "28.5"
  },
  {
    country: "Liberia",
    code: "LR",
    latitude: "6.5",
    longitude: "-9.5"
  },
  {
    country: "Libya",
    code: "LY",
    latitude: "25",
    longitude: "17"
  },
  {
    country: "Liechtenstein",
    code: "LI",
    latitude: "47.1667",
    longitude: "9.5333"
  },
  {
    country: "Lithuania",
    code: "LT",
    latitude: "56",
    longitude: "24"
  },
  {
    country: "Luxembourg",
    code: "LU",
    latitude: "49.75",
    longitude: "6.1667"
  },
  {
    country: "Macao",
    code: "MO",
    latitude: "22.1667",
    longitude: "113.55"
  },
  {
    country: "Macedonia",
    code: "MK",
    latitude: "41.8333",
    longitude: "22"
  },
  {
    country: "Madagascar",
    code: "MG",
    latitude: "-20",
    longitude: "47"
  },
  {
    country: "Malawi",
    code: "MW",
    latitude: "-13.5",
    longitude: "34"
  },
  {
    country: "Malaysia",
    code: "MY",
    latitude: "2.5",
    longitude: "112.5"
  },
  {
    country: "Maldives",
    code: "MV",
    latitude: "3.25",
    longitude: "73"
  },
  {
    country: "Mali",
    code: "ML",
    latitude: "17",
    longitude: "-4"
  },
  {
    country: "Malta",
    code: "MT",
    latitude: "35.8333",
    longitude: "14.5833"
  },
  {
    country: "Marshall Islands",
    code: "MH",
    latitude: "9",
    longitude: "168"
  },
  {
    country: "Martinique",
    code: "MQ",
    latitude: "14.6667",
    longitude: "-61"
  },
  {
    country: "Mauritania",
    code: "MR",
    latitude: "20",
    longitude: "-12"
  },
  {
    country: "Mauritius",
    code: "MU",
    latitude: "-20.2833",
    longitude: "57.55"
  },
  {
    country: "Mayotte",
    code: "YT",
    latitude: "-12.8333",
    longitude: "45.1667"
  },
  {
    country: "Mexico",
    code: "MX",
    latitude: "23",
    longitude: "-102"
  },
  {
    country: "Monaco",
    code: "MC",
    latitude: "43.7333",
    longitude: "7.4"
  },
  {
    country: "Mongolia",
    code: "MN",
    latitude: "46",
    longitude: "105"
  },
  {
    country: "Montenegro",
    code: "ME",
    latitude: "42",
    longitude: "19"
  },
  {
    country: "Montserrat",
    code: "MS",
    latitude: "16.75",
    longitude: "-62.2"
  },
  {
    country: "Morocco",
    code: "MA",
    latitude: "32",
    longitude: "-5"
  },
  {
    country: "Mozambique",
    code: "MZ",
    latitude: "-18.25",
    longitude: "35"
  },
  {
    country: "Myanmar",
    code: "MM",
    latitude: "22",
    longitude: "98"
  },
  {
    country: "Burma",
    code: "MM",
    latitude: "22",
    longitude: "98"
  },
  {
    country: "Namibia",
    code: "NA",
    latitude: "-22",
    longitude: "17"
  },
  {
    country: "Nauru",
    code: "NR",
    latitude: "-0.5333",
    longitude: "166.9167"
  },
  {
    country: "Nepal",
    code: "NP",
    latitude: "28",
    longitude: "84"
  },
  {
    country: "Netherlands",
    code: "NL",
    latitude: "52.5",
    longitude: "5.75"
  },
  {
    country: "New Caledonia",
    code: "NC",
    latitude: "-21.5",
    longitude: "165.5"
  },
  {
    country: "New Zealand",
    code: "NZ",
    latitude: "-41",
    longitude: "174"
  },
  {
    country: "Nicaragua",
    code: "NI",
    latitude: "13",
    longitude: "-85"
  },
  {
    country: "Niger",
    code: "NE",
    latitude: "16",
    longitude: "8"
  },
  {
    country: "Nigeria",
    code: "NG",
    latitude: "10",
    longitude: "8"
  },
  {
    country: "Niue",
    code: "NU",
    latitude: "-19.0333",
    longitude: "-169.8667"
  },
  {
    country: "NorfolkIsland",
    code: "NF",
    latitude: "-29.0333",
    longitude: "167.95"
  },
  {
    country: "Northern Mariana Islands",
    code: "MP",
    latitude: "15.2",
    longitude: "145.75"
  },
  {
    country: "Norway",
    code: "NO",
    latitude: "62",
    longitude: "10"
  },
  {
    country: "Oman",
    code: "OM",
    latitude: "21",
    longitude: "57"
  },
  {
    country: "Pakistan",
    code: "PK",
    latitude: "30",
    longitude: "70"
  },
  {
    country: "Palau",
    code: "PW",
    latitude: "7.5",
    longitude: "134.5"
  },
  {
    country: "Panama",
    code: "PA",
    latitude: "9",
    longitude: "-80"
  },
  {
    country: "Papua New Guinea",
    code: "PG",
    latitude: "-6",
    longitude: "147"
  },
  {
    country: "Paraguay",
    code: "PY",
    latitude: "-23",
    longitude: "-58"
  },
  {
    country: "Peru",
    code: "PE",
    latitude: "-10",
    longitude: "-76"
  },
  {
    country: "Philippines",
    code: "PH",
    latitude: "13",
    longitude: "122"
  },
  {
    country: "Pitcairn",
    code: "PN",
    latitude: "-24.7",
    longitude: "-127.4"
  },
  {
    country: "Poland",
    code: "PL",
    latitude: "52",
    longitude: "20"
  },
  {
    country: "Portugal",
    code: "PT",
    latitude: "39.5",
    longitude: "-8"
  },
  {
    country: "Puerto Rico",
    code: "PR",
    latitude: "18.25",
    longitude: "-66.5"
  },
  {
    country: "Qatar",
    code: "QA",
    latitude: "25.5",
    longitude: "51.25"
  },
  {
    country: "Romania",
    code: "RO",
    latitude: "46",
    longitude: "25"
  },
  {
    country: "Russia",
    code: "RU",
    latitude: "60",
    longitude: "100"
  },
  {
    country: "Rwanda",
    code: "RW",
    latitude: "-2",
    longitude: "30"
  },
  {
    country: "Saint Kitts and Nevis",
    code: "KN",
    latitude: "17.3333",
    longitude: "-62.75"
  },
  {
    country: "Saint Lucia",
    code: "LC",
    latitude: "13.8833",
    longitude: "-61.1333"
  },
  {
    country: "Saint Pierre and Miquelon",
    code: "PM",
    latitude: "46.8333",
    longitude: "-56.3333"
  },
  {
    country: "Saint Vincent and the Grenadines",
    code: "VC",
    latitude: "13.25",
    longitude: "-61.2"
  },
  {
    country: "Samoa",
    code: "WS",
    latitude: "-13.5833",
    longitude: "-172.3333"
  },
  {
    country: "San Marino",
    code: "SM",
    latitude: "43.7667",
    longitude: "12.4167"
  },
  {
    country: "Sao Tome and Principe",
    code: "ST",
    latitude: "1",
    longitude: "7"
  },
  {
    country: "Saudi Arabia",
    code: "SA",
    latitude: "25",
    longitude: "45"
  },
  {
    country: "Senegal",
    code: "SN",
    latitude: "14",
    longitude: "-14"
  },
  {
    country: "Serbia",
    code: "RS",
    latitude: "44",
    longitude: "21"
  },
  {
    country: "Seychelles",
    code: "SC",
    latitude: "-4.5833",
    longitude: "55.6667"
  },
  {
    country: "Sierra Leone",
    code: "SL",
    latitude: "8.5",
    longitude: "-11.5"
  },
  {
    country: "Singapore",
    code: "SG",
    latitude: "1.3667",
    longitude: "103.8"
  },
  {
    country: "Slovakia",
    code: "SK",
    latitude: "48.6667",
    longitude: "19.5"
  },
  {
    country: "Slovenia",
    code: "SI",
    latitude: "46",
    longitude: "15"
  },
  {
    country: "Solomon Islands",
    code: "SB",
    latitude: "-8",
    longitude: "159"
  },
  {
    country: "Somalia",
    code: "SO",
    latitude: "10",
    longitude: "49"
  },
  {
    country: "SouthAfrica",
    code: "ZA",
    latitude: "-29",
    longitude: "24"
  },
  {
    country: "South Georgia and the South Sandwich Islands",
    code: "GS",
    latitude: "-54.5",
    longitude: "-37"
  },
  {
    country: "South Sudan",
    code: "SS",
    latitude: "8",
    longitude: "30"
  },
  {
    country: "Spain",
    code: "ES",
    latitude: "40",
    longitude: "-4"
  },
  {
    country: "Sri Lanka",
    code: "LK",
    latitude: "7",
    longitude: "81"
  },
  {
    country: "Sudan",
    code: "SD",
    latitude: "15",
    longitude: "30"
  },
  {
    country: "Suriname",
    code: "SR",
    latitude: "4",
    longitude: "-56"
  },
  {
    country: "Svalbard and Jan Mayen",
    code: "SJ",
    latitude: "78",
    longitude: "20"
  },
  {
    country: "Swaziland",
    code: "SZ",
    latitude: "-26.5",
    longitude: "31.5"
  },
  {
    country: "Sweden",
    code: "SE",
    latitude: "62",
    longitude: "15"
  },
  {
    country: "Switzerland",
    code: "CH",
    latitude: "47",
    longitude: "8"
  },
  {
    country: "Syrian Arab Republic",
    code: "SY",
    latitude: "35",
    longitude: "38"
  },
  {
    country: "Taiwan",
    code: "TW",
    latitude: "23.5",
    longitude: "121"
  },
  {
    country: "Tajikistan",
    code: "TJ",
    latitude: "39",
    longitude: "71"
  },
  {
    country: "Tanzania",
    code: "TZ",
    latitude: "-6",
    longitude: "35"
  },
  {
    country: "Thailand",
    code: "TH",
    latitude: "15",
    longitude: "100"
  },
  {
    country: "Togo",
    code: "TG",
    latitude: "8",
    longitude: "1.1667"
  },
  {
    country: "Tokelau",
    code: "TK",
    latitude: "-9",
    longitude: "-172"
  },
  {
    country: "Tonga",
    code: "TO",
    latitude: "-20",
    longitude: "-175"
  },
  {
    country: "Trinidadand Tobago",
    code: "TT",
    latitude: "11",
    longitude: "-61"
  },
  {
    country: "Tunisia",
    code: "TN",
    latitude: "34",
    longitude: "9"
  },
  {
    country: "Turkey",
    code: "TR",
    latitude: "39",
    longitude: "35"
  },
  {
    country: "Turkmenistan",
    code: "TM",
    latitude: "40",
    longitude: "60"
  },
  {
    country: "Turks and Caicos Islands",
    code: "TC",
    latitude: "21.75",
    longitude: "-71.5833"
  },
  {
    country: "Tuvalu",
    code: "TV",
    latitude: "-8",
    longitude: "178"
  },
  {
    country: "Uganda",
    code: "UG",
    latitude: "1",
    longitude: "32"
  },
  {
    country: "Ukraine",
    code: "UA",
    latitude: "49",
    longitude: "32"
  },
  {
    country: "United Arab Emirates",
    code: "AE",
    latitude: "24",
    longitude: "54"
  },
  {
    country: "United Kingdom",
    code: "GB",
    latitude: "54",
    longitude: "-2"
  },
  {
    country: "United States",
    code: "US",
    latitude: "38",
    longitude: "-97"
  },
  {
    country: "Uruguay",
    code: "UY",
    latitude: "-33",
    longitude: "-56"
  },
  {
    country: "Uzbekistan",
    code: "UZ",
    latitude: "41",
    longitude: "64"
  },
  {
    country: "Vanuatu",
    code: "VU",
    latitude: "-16",
    longitude: "167"
  },
  {
    country: "Venezuela",
    code: "VE",
    latitude: "8",
    longitude: "-66"
  },
  {
    country: "VietNam",
    code: "VN",
    latitude: "16",
    longitude: "106"
  },
  {
    country: "Vietnam",
    code: "VN",
    latitude: "16",
    longitude: "106"
  },
  {
    country: "Wallis and Futuna",
    code: "WF",
    latitude: "-13.3",
    longitude: "-176.2"
  },
  {
    country: "Western Sahara",
    code: "EH",
    latitude: "24.5",
    longitude: "-13"
  },
  {
    country: "Yemen",
    code: "YE",
    latitude: "15",
    longitude: "48"
  },
  {
    country: "Zambia",
    code: "ZM",
    latitude: "-15",
    longitude: "30"
  },
  {
    country: "Zimbabwe",
    code: "ZW",
    latitude: "-20",
    longitude: "30"
  }
]
