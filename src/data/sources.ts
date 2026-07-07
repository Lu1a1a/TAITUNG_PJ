import { sourceUrls } from "./images";
import type { Locale, SectionCopy } from "./shared";

export type SourcesContent = {
  sources: SectionCopy;
  sourceLinks: Array<{
    label: string;
    url: string;
  }>;
};

export const sourcesContent: Record<Locale, SourcesContent> = {
  cn: {
    sources: {
      eyebrow: "Sources",
      title: "Taitung / Travel Guide",
      body:
        "這個 demo 使用公開觀光、文化、百科與 Wikimedia Commons 圖片來源。正式商用網站可保留來源區，也可以替換成自有攝影、品牌內容與官方資料。",
    },
    sourceLinks: [
      { label: "台東觀光旅遊網", url: sourceUrls.officialTourism },
      { label: "三仙台參考資料", url: sourceUrls.sanxiantai },
      { label: "台東森林公園參考資料", url: sourceUrls.forestPark },
      { label: "台東鐵道藝術村參考資料", url: sourceUrls.railwayVillage },
      { label: "都蘭新東糖廠參考資料", url: sourceUrls.dulanSugarFactory },
      { label: "Wikimedia Commons 圖片來源", url: sourceUrls.commons },
    ],
  },
  en: {
    sources: {
      eyebrow: "Sources",
      title: "Taitung / Travel Guide",
      body:
        "This demo uses public tourism, culture, encyclopedia, and Wikimedia Commons references. A production site can keep this source area or replace it with owned photography and brand content.",
    },
    sourceLinks: [
      { label: "Taitung Tourism", url: sourceUrls.officialTourism },
      { label: "Sanxiantai Reference", url: sourceUrls.sanxiantai },
      { label: "Taitung Forest Park Reference", url: sourceUrls.forestPark },
      { label: "Taitung Railway Art Village Reference", url: sourceUrls.railwayVillage },
      { label: "Dulan Sugar Factory Reference", url: sourceUrls.dulanSugarFactory },
      { label: "Wikimedia Commons Image Sources", url: sourceUrls.commons },
    ],
  },
};
