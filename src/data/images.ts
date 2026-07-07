import { commonsFile, type Locale, type SiteImage } from "./shared";

export type SiteImageKey =
  | "sanxiantai"
  | "sanxiantaiHover"
  | "forestPark"
  | "forestParkHover"
  | "railwayVillage"
  | "railwayVillageHover"
  | "dulanSugarFactory"
  | "dulanSugarFactoryHover";

export type SiteImages = Record<SiteImageKey, SiteImage>;

const imageLibrary: Record<SiteImageKey, Omit<SiteImage, "alt">> = {
  sanxiantai: {
    src: commonsFile("Sansiantai 01.jpg"),
    width: 1600,
    height: 1067,
    credit: "Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Sansiantai_01.jpg",
  },
  sanxiantaiHover: {
    src: commonsFile("Clouds over beautiful blue sea at Sanxiantai on 4 February 2014.jpg"),
    width: 1600,
    height: 1067,
    credit: "Wikimedia Commons",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Clouds_over_beautiful_blue_sea_at_Sanxiantai_on_4_February_2014.jpg",
  },
  forestPark: {
    src: commonsFile("2010 07 16590 6272 Taitung City, Taiwan, Lakes of Taitung City.JPG"),
    width: 1600,
    height: 1067,
    credit: "Wikimedia Commons",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:2010_07_16590_6272_Taitung_City,_Taiwan,_Lakes_of_Taitung_City.JPG",
  },
  forestParkHover: {
    src: commonsFile("台東森林公園鷺鷥湖.jpg"),
    width: 1600,
    height: 1067,
    credit: "Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:%E5%8F%B0%E6%9D%B1%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9C%92%E9%B7%BA%E9%B7%A5%E6%B9%96.jpg",
  },
  railwayVillage: {
    src: commonsFile("Lanterns in Taitung Railway Art Village.jpg"),
    width: 1600,
    height: 1067,
    credit: "Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Lanterns_in_Taitung_Railway_Art_Village.jpg",
  },
  railwayVillageHover: {
    src: commonsFile("TRA Old Taitung Station 01.jpg"),
    width: 1600,
    height: 1067,
    credit: "Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:TRA_Old_Taitung_Station_01.jpg",
  },
  dulanSugarFactory: {
    src: commonsFile("Dulan Taiwan Sugar-Factory-01.jpg"),
    width: 1600,
    height: 1067,
    credit: "Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Dulan_Taiwan_Sugar-Factory-01.jpg",
  },
  dulanSugarFactoryHover: {
    src: commonsFile("Xing-Tung Sugar Factory01.jpg"),
    width: 1600,
    height: 1067,
    credit: "Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Xing-Tung_Sugar_Factory01.jpg",
  },
};

export const sourceUrls = {
  sanxiantai: "https://en.wikipedia.org/wiki/Sanxiantai",
  forestPark: "https://en.wikipedia.org/wiki/Taitung_Forest_Park",
  railwayVillage: "https://en.wikipedia.org/wiki/Taitung_Railway_Art_Village",
  dulanSugarFactory: "https://en.wikipedia.org/wiki/Sintung_Sugar_Factory_Culture_Park",
  officialTourism: "https://tour.taitung.gov.tw/en",
  eastCoastCulture: "https://www.eastcoast-nsa.gov.tw/en",
  indigenous: "https://www.cip.gov.tw/en/",
  localGovernment: "https://www.taitung.gov.tw/",
  commons: "https://commons.wikimedia.org",
};

const imageAltText: Record<Locale, Record<SiteImageKey, string>> = {
  cn: {
    sanxiantai: "台東三仙台海岸與八拱橋",
    sanxiantaiHover: "三仙台海面與海岸風景",
    forestPark: "台東森林公園湖面與綠蔭",
    forestParkHover: "台東森林公園鷺鷥湖景色",
    railwayVillage: "台東鐵道藝術村燈籠與舊站區",
    railwayVillageHover: "台東舊火車站與鐵道藝術村",
    dulanSugarFactory: "都蘭新東糖廠文化園區建築",
    dulanSugarFactoryHover: "都蘭新東糖廠園區外觀",
  },
  en: {
    sanxiantai: "Sanxiantai coast and eight-arch bridge in Taitung",
    sanxiantaiHover: "Pacific sea view near Sanxiantai in Taitung",
    forestPark: "Lake and green paths inside Taitung Forest Park",
    forestParkHover: "Egret Lake scenery inside Taitung Forest Park",
    railwayVillage: "Lanterns and old station area at Taitung Railway Art Village",
    railwayVillageHover: "Old Taitung Station and Railway Art Village",
    dulanSugarFactory: "Buildings at Dulan Sintung Sugar Factory Culture Park",
    dulanSugarFactoryHover: "Exterior view of Dulan Sintung Sugar Factory",
  },
};

const withAlt = (image: Omit<SiteImage, "alt">, alt: string): SiteImage => ({
  ...image,
  alt,
});

export const getSiteImages = (locale: Locale): SiteImages => ({
  sanxiantai: withAlt(imageLibrary.sanxiantai, imageAltText[locale].sanxiantai),
  sanxiantaiHover: withAlt(imageLibrary.sanxiantaiHover, imageAltText[locale].sanxiantaiHover),
  forestPark: withAlt(imageLibrary.forestPark, imageAltText[locale].forestPark),
  forestParkHover: withAlt(imageLibrary.forestParkHover, imageAltText[locale].forestParkHover),
  railwayVillage: withAlt(imageLibrary.railwayVillage, imageAltText[locale].railwayVillage),
  railwayVillageHover: withAlt(imageLibrary.railwayVillageHover, imageAltText[locale].railwayVillageHover),
  dulanSugarFactory: withAlt(imageLibrary.dulanSugarFactory, imageAltText[locale].dulanSugarFactory),
  dulanSugarFactoryHover: withAlt(imageLibrary.dulanSugarFactoryHover, imageAltText[locale].dulanSugarFactoryHover),
});
