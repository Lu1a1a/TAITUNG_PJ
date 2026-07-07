import { sourceUrls, type SiteImages } from "./images";
import type { FeatureCard, Locale, SectionCopy } from "./shared";

export const featuresContent: Record<Locale, SectionCopy> = {
  cn: {
    eyebrow: "Taitung Layers",
    title: "把海岸、森林、舊站與都蘭排進同一趟旅程",
    body: "這個區塊可以替換成景點、飯店周邊、包車路線或地方品牌推薦；每張卡都保留圖片、摘要、補充說明與來源連結。",
  },
  en: {
    eyebrow: "Featured Places",
    title: "Four Stops That Shape a Day in Taitung",
    body: "Use these sections for nearby attractions, city guides, private tour routes, or local brand recommendations.",
  },
};

export const getFeatureCards = (locale: Locale, images: SiteImages): FeatureCard[] => {
  if (locale === "en") {
    return [
      {
        id: "sanxiantai",
        eyebrow: "Pacific coast",
        title: "Sanxiantai Coast",
        summary:
          "Open the route with ocean light, black-rock shoreline, and the long eight-arch bridge facing the Pacific.",
        detail:
          "Best for sunrise starts, coastal photography, family stops, and East Coast day-trip positioning.",
        sourceLabel: "View reference",
        sourceUrl: sourceUrls.sanxiantai,
        image: images.sanxiantai,
        hoverImage: images.sanxiantaiHover,
      },
      {
        id: "forest-park",
        eyebrow: "City green",
        title: "Taitung Forest Park",
        summary:
          "A quiet city anchor with lake paths, bicycles, birdwatching, and shade close to the downtown grid.",
        detail:
          "Use this stop for relaxed city routes, hotel neighborhood pages, bike rentals, and slower itineraries.",
        sourceLabel: "View reference",
        sourceUrl: sourceUrls.forestPark,
        image: images.forestPark,
        hoverImage: images.forestParkHover,
      },
      {
        id: "railway-art-village",
        eyebrow: "Old station",
        title: "Railway Art Village",
        summary:
          "The old station district adds evening lights, pedestrian-friendly streets, and an easy cultural endpoint.",
        detail:
          "Good for night walks, restaurant pages, event listings, and map-first directions from the city center.",
        sourceLabel: "View reference",
        sourceUrl: sourceUrls.railwayVillage,
        image: images.railwayVillage,
        hoverImage: images.railwayVillageHover,
      },
      {
        id: "dulan-sugar-factory",
        eyebrow: "Dulan culture",
        title: "Dulan Sugar Factory",
        summary:
          "A former sugar factory turned cultural stop, useful for music, studios, coffee, and East Coast rhythm.",
        detail:
          "Use it for creative travel, boutique stays, surf routes, and coastal brand storytelling with more texture.",
        sourceLabel: "View reference",
        sourceUrl: sourceUrls.dulanSugarFactory,
        image: images.dulanSugarFactory,
        hoverImage: images.dulanSugarFactoryHover,
      },
    ];
  }

  return [
    {
      id: "sanxiantai",
      eyebrow: "Coast",
      title: "三仙台海岸",
      summary: "用太平洋的光、礫石海岸與八拱橋打開台東行程，第一眼就讓旅人知道這是東海岸。",
      detail: "適合日出、家庭停留、海岸攝影、包車一日遊，也能作為城市導覽的第一張主視覺卡。",
      sourceLabel: "閱讀來源",
      sourceUrl: sourceUrls.sanxiantai,
      image: images.sanxiantai,
      hoverImage: images.sanxiantaiHover,
    },
    {
      id: "forest-park",
      eyebrow: "Green",
      title: "台東森林公園",
      summary: "湖面、林蔭、自行車與慢步道，把台東市區從交通節點轉成可以停留的日常風景。",
      detail: "適合旅宿周邊介紹、親子路線、單車租借、慢旅行推薦，也能接到市區餐廳與住宿 CTA。",
      sourceLabel: "閱讀來源",
      sourceUrl: sourceUrls.forestPark,
      image: images.forestPark,
      hoverImage: images.forestParkHover,
    },
    {
      id: "railway-art-village",
      eyebrow: "Station",
      title: "舊站與鐵道藝術村",
      summary: "舊火車站、燈籠、展演與散步街區，讓傍晚之後的台東市中心有明確目的地。",
      detail: "適合夜間散步、美食地圖、活動頁、城市導覽，也方便用 Google Maps 直接帶路。",
      sourceLabel: "閱讀來源",
      sourceUrl: sourceUrls.railwayVillage,
      image: images.railwayVillage,
      hoverImage: images.railwayVillageHover,
    },
    {
      id: "dulan-sugar-factory",
      eyebrow: "Dulan",
      title: "都蘭新東糖廠",
      summary: "舊糖廠轉成文化停留點，讓東海岸路線多了音樂、工藝、咖啡與創作的節奏。",
      detail: "適合都蘭住宿、衝浪路線、東海岸品牌故事與深度旅遊頁面，讓景點不只停在拍照。",
      sourceLabel: "閱讀來源",
      sourceUrl: sourceUrls.dulanSugarFactory,
      image: images.dulanSugarFactory,
      hoverImage: images.dulanSugarFactoryHover,
    },
  ];
};
