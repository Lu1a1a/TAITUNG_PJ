import type { Locale, PosterHeroCopy, SiteMeta } from "./shared";

export type HeroContent = {
  meta: SiteMeta;
  skipLabel: string;
  hero: PosterHeroCopy;
};

export const heroContent: Record<Locale, HeroContent> = {
  cn: {
    meta: {
      lang: "zh-Hant",
      title: "台東 Taitung｜城市旅遊導覽",
      description:
        "台東旅遊網站 demo，串起三仙台、台東森林公園、台東鐵道藝術村與都蘭新東糖廠，適合城市導覽、旅宿、包車與在地品牌使用。",
    },
    skipLabel: "跳到主要內容",
    hero: {
      brandLabel: "Taitung",
      titleLines: ["TAI", "TUNG"],
      navAriaLabel: "主要導覽",
      routeNavLabel: "路線",
      placesNavLabel: "景點",
      contactNavLabel: "規劃行程",
      pictureLabel: "Guide:",
      pictureValue: "台東慢旅",
      posterLabel: "Route:",
      posterValue: "海岸到城市",
      positionLabel: "Start:",
      positionValue: "三仙台海岸",
      modeLabel: "Trip style:",
      modeValue: "一日到週末",
      dividerLabel: "East Taiwan",
      eyebrow: "Taitung Travel Guide",
      description:
        "從三仙台的海面與八拱橋開始，停留都蘭的糖廠文化，再回到森林公園與舊站街區。這是一個可重複套用到城市、旅宿、包車與地方品牌的台東旅遊網站 demo。",
      primaryCtaLabel: "查看路線",
      secondaryCtaLabel: "規劃行程",
      imageBadge: "Pacific Morning",
      photoVia: "photo via",
      languageToggleLabel: "EN",
      languageToggleAriaLabel: "切換英文",
    },
  },
  en: {
    meta: {
      lang: "en",
      title: "Taitung Slow Travel Guide",
      description:
        "A Taitung travel website demo featuring Sanxiantai, Taitung Forest Park, Taitung Railway Art Village, Dulan Sugar Factory, itinerary routes, and trip inquiry CTAs.",
    },
    skipLabel: "Skip to main content",
    hero: {
      brandLabel: "Taitung",
      titleLines: ["TAI", "TUNG"],
      navAriaLabel: "Primary navigation",
      routeNavLabel: "Route",
      placesNavLabel: "Places",
      contactNavLabel: "Plan Trip",
      pictureLabel: "Guide:",
      pictureValue: "Taitung slow travel",
      posterLabel: "Route:",
      posterValue: "Coast to City",
      positionLabel: "Start:",
      positionValue: "Sanxiantai Coast",
      modeLabel: "Trip style:",
      modeValue: "Day to weekend",
      dividerLabel: "East Taiwan",
      eyebrow: "Taitung Travel Guide",
      description:
        "Start with Pacific light at Sanxiantai, slow down at Dulan Sugar Factory, then return to Taitung Forest Park and the old station district. A reusable travel guide demo for stays, tours, local brands, and city campaigns.",
      primaryCtaLabel: "View route",
      secondaryCtaLabel: "Plan your trip",
      imageBadge: "Pacific Morning",
      photoVia: "photo via",
      languageToggleLabel: "中文",
      languageToggleAriaLabel: "Switch to Chinese",
    },
  },
};
