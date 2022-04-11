import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-lists',
  templateUrl: './select-lists.component.html',
  styleUrls: ['./select-lists.component.scss']
})
export class SelectListsComponent implements OnInit {
  checkSwitch: boolean;
  dropdownList = [];
  selectedItems = []; 
  selectedItems1 = [];
  selectedItems2 = [];
  dropdownSettings = {};
  dropdownSettings1 = {};

  constructor() { }

  ngOnInit() {
    
    // dropdownSettings
    this.dropdownSettings = {
      singleSelection: false,
      label: "Select",
      placeholder: "Select",
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'Clear All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      badgeShowLimit:3,
      disabled: false,
      required: true,
      isCheckBoxVisible: true,
      isHintTextDisplay: true,
      isTagDisplay: true,
      taggedColumns: '',
      taggedButtonDisplay: true
    };

    
    this.dropdownSettings1 = {
      singleSelection: true,
      label: "Select",
      placeholder: "Select",
      selectAllText: 'Select All',
      unSelectAllText: 'Clear All',
      enableSearchFilter: false,
      classes: "myclass custom-class",
      disabled: false,
      required: true,
      isCheckBoxVisible: false
    };    

    //existing value
    // this.selectedItems = [
    //   { "text": "Afghanistan", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AF", "status": false, "asd":"xchj" },
    //   { "text": "Åland Islands", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AX", "status": false },
    //   { "text": "Albania", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AL", "status": false },
    //   { "text": "Algeria", "id": "DZ", "status": false },
    //   { "text": "American Samoa", "id": "AS", "status": false },
    //   { "text": "Singapore", "id": "SG", "status": false },
    //   { "text": "Australia", "id": "AU", "status": false },
    //   { "text": "Canada", "id": "CA", "status": false },
    //   { "text": "South Korea", "id": "KP", "status": false }
    // ];

    //Dropdown List
    this.dropdownList = [
      { "text": "Afghanistan", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AF", "status": false },
      { "text": "Åland Islands", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AX", "status": false },
      { "text": "Albania", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AL" },
      { "text": "Algeria", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "DZ" },
      { "text": "American Samoa", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AS" },
      { "text": "AndorrA", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AD" },
      { "text": "Angola", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AO" },
      { "text": "Anguilla", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AI" },
      { "text": "Antarctica", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AQ" },
      { "text": "Antigua and Barbuda", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AG" },
      { "text": "Argentina", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AR" },
      { "text": "Armenia", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AM" },
      { "text": "Aruba", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AW" },
      { "text": "Australia", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AU" },
      { "text": "Austria", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AT" },
      { "text": "Azerbaijan", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "AZ" },
      { "text": "Bahamas", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BS" },
      { "text": "Bahrain", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BH" },
      { "text": "Bangladesh", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BD" },
      { "text": "Barbados", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BB" },
      { "text": "Belarus", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BY" },
      { "text": "Belgium", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BE" },
      { "text": "Belize", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BZ" },
      { "text": "Benin", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BJ" },
      { "text": "Bermuda", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BM" },
      { "text": "Bhutan", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BT" },
      { "text": "Bolivia", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BO" },
      { "text": "Bosnia and Herzegovina", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BA" },
      { "text": "Botswana", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BW" },
      { "text": "Bouvet Island", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BV" },
      { "text": "Brazil", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BR" },
      { "text": "British Indian Ocean Territory", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "IO" },
      { "text": "Brunei Darussalam", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BN" },
      { "text": "Bulgaria", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BG" },
      { "text": "Burkina Faso", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BF" },
      { "text": "Burundi", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "BI" },
      { "text": "Cambodia", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "KH" },
      { "text": "Cameroon", "taggedLabel": "Example Text", "taggedButton": "Example Button", "id": "CM" },
      { "text": "Canada", "id": "CA" },
      { "text": "Cape Verde", "id": "CV" },
      { "text": "Cayman Islands", "id": "KY" },
      { "text": "Central African Republic", "id": "CF" },
      { "text": "Chad", "id": "TD" },
      { "text": "Chile", "id": "CL" },
      { "text": "China", "id": "CN" },
      { "text": "Christmas Island", "id": "CX" },
      { "text": "Cocos (Keeling) Islands", "id": "CC" },
      { "text": "Colombia", "id": "CO" },
      { "text": "Comoros", "id": "KM" },
      { "text": "Congo", "id": "CG" },
      { "text": "Congo, The Democratic Republic of the", "id": "CD" },
      { "text": "Cook Islands", "id": "CK" },
      { "text": "Costa Rica", "id": "CR" },
      { "text": "Cote D\"Ivoire", "id": "CI" },
      { "text": "Croatia", "id": "HR" },
      { "text": "Cuba", "id": "CU" },
      { "text": "Cyprus", "id": "CY" },
      { "text": "Czech Republic", "id": "CZ" },
      { "text": "Denmark", "id": "DK" },
      { "text": "Djibouti", "id": "DJ" },
      { "text": "Dominica", "id": "DM" },
      { "text": "Dominican Republic", "id": "DO" },
      { "text": "Ecuador", "id": "EC" },
      { "text": "Egypt", "id": "EG" },
      { "text": "El Salvador", "id": "SV" },
      { "text": "Equatorial Guinea", "id": "GQ" },
      { "text": "Eritrea", "id": "ER" },
      { "text": "Estonia", "id": "EE" },
      { "text": "Ethiopia", "id": "ET" },
      { "text": "Falkland Islands (Malvinas)", "id": "FK" },
      { "text": "Faroe Islands", "id": "FO" },
      { "text": "Fiji", "id": "FJ" },
      { "text": "Finland", "id": "FI" },
      { "text": "France", "id": "FR" },
      { "text": "French Guiana", "id": "GF" },
      { "text": "French Polynesia", "id": "PF" },
      { "text": "French Southern Territories", "id": "TF" },
      { "text": "Gabon", "id": "GA" },
      { "text": "Gambia", "id": "GM" },
      { "text": "Georgia", "id": "GE" },
      { "text": "Germany", "id": "DE" },
      { "text": "Ghana", "id": "GH" },
      { "text": "Gibraltar", "id": "GI" },
      { "text": "Greece", "id": "GR" },
      { "text": "Greenland", "id": "GL" },
      { "text": "Grenada", "id": "GD" },
      { "text": "Guadeloupe", "id": "GP" },
      { "text": "Guam", "id": "GU" },
      { "text": "Guatemala", "id": "GT" },
      { "text": "Guernsey", "id": "GG" },
      { "text": "Guinea", "id": "GN" },
      { "text": "Guinea-Bissau", "id": "GW" },
      { "text": "Guyana", "id": "GY" },
      { "text": "Haiti", "id": "HT" },
      { "text": "Heard Island and Mcdonald Islands", "id": "HM" },
      { "text": "Holy See (Vatican City State)", "id": "VA" },
      { "text": "Honduras", "id": "HN" },
      { "text": "Hong Kong", "id": "HK" },
      { "text": "Hungary", "id": "HU" },
      { "text": "Iceland", "id": "IS" },
      { "text": "India", "id": "IN" },
      { "text": "Indonesia", "id": "ID" },
      { "text": "Iran, Islamic Republic Of", "id": "IR" },
      { "text": "Iraq", "id": "IQ" },
      { "text": "Ireland", "id": "IE" },
      { "text": "Isle of Man", "id": "IM" },
      { "text": "Israel", "id": "IL" },
      { "text": "Italy", "id": "IT" },
      { "text": "Jamaica", "id": "JM" },
      { "text": "Japan", "id": "JP" },
      { "text": "Jersey", "id": "JE" },
      { "text": "Jordan", "id": "JO" },
      { "text": "Kazakhstan", "id": "KZ" },
      { "text": "Kenya", "id": "KE" },
      { "text": "Kiribati", "id": "KI" },
      { "text": "Korea, Democratic People\"S Republic of", "id": "KP" },
      { "text": "Korea, Republic of", "id": "KR" },
      { "text": "Kuwait", "id": "KW" },
      { "text": "Kyrgyzstan", "id": "KG" },
      { "text": "Lao People\"S Democratic Republic", "id": "LA" },
      { "text": "Latvia", "id": "LV" },
      { "text": "Lebanon", "id": "LB" },
      { "text": "Lesotho", "id": "LS" },
      { "text": "Liberia", "id": "LR" },
      { "text": "Libyan Arab Jamahiriya", "id": "LY" },
      { "text": "Liechtenstein", "id": "LI" },
      { "text": "Lithuania", "id": "LT" },
      { "text": "Luxembourg", "id": "LU" },
      { "text": "Macao", "id": "MO" },
      { "text": "Macedonia, The Former Yugoslav Republic of", "id": "MK" },
      { "text": "Madagascar", "id": "MG" },
      { "text": "Malawi", "id": "MW" },
      { "text": "Malaysia", "id": "MY" },
      { "text": "Maldives", "id": "MV" },
      { "text": "Mali", "id": "ML" },
      { "text": "Malta", "id": "MT" },
      { "text": "Marshall Islands", "id": "MH" },
      { "text": "Martinique", "id": "MQ" },
      { "text": "Mauritania", "id": "MR" },
      { "text": "Mauritius", "id": "MU" },
      { "text": "Mayotte", "id": "YT" },
      { "text": "Mexico", "id": "MX" },
      { "text": "Micronesia, Federated States of", "id": "FM" },
      { "text": "Moldova, Republic of", "id": "MD" },
      { "text": "Monaco", "id": "MC" },
      { "text": "Mongolia", "id": "MN" },
      { "text": "Montserrat", "id": "MS" },
      { "text": "Morocco", "id": "MA" },
      { "text": "Mozambique", "id": "MZ" },
      { "text": "Myanmar", "id": "MM" },
      { "text": "Namibia", "id": "NA" },
      { "text": "Nauru", "id": "NR" },
      { "text": "Nepal", "id": "NP" },
      { "text": "Netherlands", "id": "NL" },
      { "text": "Netherlands Antilles", "id": "AN" },
      { "text": "New Caledonia", "id": "NC" },
      { "text": "New Zealand", "id": "NZ" },
      { "text": "Nicaragua", "id": "NI" },
      { "text": "Niger", "id": "NE" },
      { "text": "Nigeria", "id": "NG" },
      { "text": "Niue", "id": "NU" },
      { "text": "Norfolk Island", "id": "NF" },
      { "text": "Northern Mariana Islands", "id": "MP" },
      { "text": "Norway", "id": "NO" },
      { "text": "Oman", "id": "OM" },
      { "text": "Pakistan", "id": "PK" },
      { "text": "Palau", "id": "PW" },
      { "text": "Palestinian Territory, Occupied", "id": "PS" },
      { "text": "Panama", "id": "PA" },
      { "text": "Papua New Guinea", "id": "PG" },
      { "text": "Paraguay", "id": "PY" },
      { "text": "Peru", "id": "PE" },
      { "text": "Philippines", "id": "PH" },
      { "text": "Pitcairn", "id": "PN" },
      { "text": "Poland", "id": "PL" },
      { "text": "Portugal", "id": "PT" },
      { "text": "Puerto Rico", "id": "PR" },
      { "text": "Qatar", "id": "QA" },
      { "text": "Reunion", "id": "RE" },
      { "text": "Romania", "id": "RO" },
      { "text": "Russian Federation", "id": "RU" },
      { "text": "RWANDA", "id": "RW" },
      { "text": "Saint Helena", "id": "SH" },
      { "text": "Saint Kitts and Nevis", "id": "KN" },
      { "text": "Saint Lucia", "id": "LC" },
      { "text": "Saint Pierre and Miquelon", "id": "PM" },
      { "text": "Saint Vincent and the Grenadines", "id": "VC" },
      { "text": "Samoa", "id": "WS" },
      { "text": "San Marino", "id": "SM" },
      { "text": "Sao Tome and Principe", "id": "ST" },
      { "text": "Saudi Arabia", "id": "SA" },
      { "text": "Senegal", "id": "SN" },
      { "text": "Serbia and Montenegro", "id": "CS" },
      { "text": "Seychelles", "id": "SC" },
      { "text": "Sierra Leone", "id": "SL" },
      { "text": "Singapore", "id": "SG" },
      { "text": "Slovakia", "id": "SK" },
      { "text": "Slovenia", "id": "SI" },
      { "text": "Solomon Islands", "id": "SB" },
      { "text": "Somalia", "id": "SO" },
      { "text": "South Africa", "id": "ZA" },
      { "text": "South Georgia and the South Sandwich Islands", "id": "GS" },
      { "text": "Spain", "id": "ES" },
      { "text": "Sri Lanka", "id": "LK" },
      { "text": "Sudan", "id": "SD" },
      { "text": "Suri", "id": "SR" },
      { "text": "Svalbard and Jan Mayen", "id": "SJ" },
      { "text": "Swaziland", "id": "SZ" },
      { "text": "Sweden", "id": "SE" },
      { "text": "Switzerland", "id": "CH" },
      { "text": "Syrian Arab Republic", "id": "SY" },
      { "text": "Taiwan, Province of China", "id": "TW" },
      { "text": "Tajikistan", "id": "TJ" },
      { "text": "Tanzania, United Republic of", "id": "TZ" },
      { "text": "Thailand", "id": "TH" },
      { "text": "Timor-Leste", "id": "TL" },
      { "text": "Togo", "id": "TG" },
      { "text": "Tokelau", "id": "TK" },
      { "text": "Tonga", "id": "TO" },
      { "text": "Trin ad and Tobago", "id": "TT" },
      { "text": "Tunisia", "id": "TN" },
      { "text": "Turkey", "id": "TR" },
      { "text": "Turkmenistan", "id": "TM" },
      { "text": "Turks and Caicos Islands", "id": "TC" },
      { "text": "Tuvalu", "id": "TV" },
      { "text": "Uganda", "id": "UG" },
      { "text": "Ukraine", "id": "UA" },
      { "text": "United Arab Emirates", "id": "AE" },
      { "text": "United Kingdom", "id": "GB" },
      { "text": "United States", "id": "US" },
      { "text": "United States Minor Outlying Islands", "id": "UM" },
      { "text": "Uruguay", "id": "UY" },
      { "text": "Uzbekistan", "id": "UZ" },
      { "text": "Vanuatu", "id": "VU" },
      { "text": "Venezuela", "id": "VE" },
      { "text": "Viet Nam", "id": "VN" },
      { "text": "Virgin Islands, British", "id": "VG" },
      { "text": "Virgin Islands, U.S.", "id": "VI" },
      { "text": "Wallis and Futuna", "id": "WF" },
      { "text": "Western Sahara", "id": "EH" },
      { "text": "Yemen", "id": "YE" },
      { "text": "Zambia", "id": "ZM" },
      { "text": "Zimbabwe", "id": "ZW" }

    ];

    // {singleSelection: false, text:"Select", selectAllText:'Select All', unSelectAllText:'Clear All', enableSearchFilter: true, classes:"myclass custom-class", disabled: false, required: true}
  }
  
  edit: boolean = true;
  clickEdit() {
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select",
      selectAllText: 'Select All',
      unSelectAllText: 'Clear All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      disabled: false,
      required: true
    };     
  }
  
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeSelectAll(items: any) {
    console.log(items);
  }

  switchChange () {
     console.log(this.checkSwitch);
  }
}
