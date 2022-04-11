export interface CountryObject {
    countryPk: number;
    countryCode2: string;
    countryCode3: string;
    countryName: string;
    areaPk: number;
    areaCode?: any;
    areaName: string;
    regionPk: number;
    regionCode?: any;
    regionName: string;
    flag: string;
    currencyPK: number;
    currencyCode: string;
    currencyName: string;
    currencySymbol: string;
    isdCode: string;
    timeZone: string;
    active: number;
    versionNo: number;
    userFK: number;
}

