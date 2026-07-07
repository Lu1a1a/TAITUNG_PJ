import { sourceUrls } from "./images";
import type { Locale, SectionCopy, StoryStep } from "./shared";

export type StoryContent = {
  storySteps: StoryStep[];
  story: SectionCopy;
};

export const storyContent: Record<Locale, StoryContent> = {
  cn: {
    storySteps: [
      {
        label: "09:00 / Sea",
        title: "三仙台打開海岸線",
        body: "先把視線放到太平洋、八拱橋與海蝕地形，讓整趟旅程有清楚的東海岸開場。",
        duration: "停留 60-90 分鐘",
        tip: "適合日出、團體集合、第一張社群照片與包車路線起點。",
        sourceUrl: sourceUrls.sanxiantai,
      },
      {
        label: "12:00 / Dulan",
        title: "都蘭糖廠放慢節奏",
        body: "用舊糖廠、工作室、咖啡與展演把海岸路線從風景帶進文化與生活。",
        duration: "停留 60-120 分鐘",
        tip: "可以接午餐、咖啡、音樂活動或都蘭住宿推薦。",
        sourceUrl: sourceUrls.dulanSugarFactory,
      },
      {
        label: "15:00 / Forest",
        title: "森林公園回到城市呼吸",
        body: "進入台東市後，把湖、林蔭與單車路線變成旅人可以真正停下來的段落。",
        duration: "停留 45-90 分鐘",
        tip: "適合親子、單車、旅宿周邊介紹，也能做低強度下午行程。",
        sourceUrl: sourceUrls.forestPark,
      },
      {
        label: "18:00 / Station",
        title: "舊站街區收在夜色裡",
        body: "最後把晚餐、散步、展演與鐵道藝術村串在一起，讓手機上的地圖 CTA 有明確終點。",
        duration: "停留 90-120 分鐘",
        tip: "可替換成訂位、活動報名、LINE 諮詢或 Google Maps 導航。",
        sourceUrl: sourceUrls.railwayVillage,
      },
    ],
    story: {
      eyebrow: "Route Notes",
      title: "一日台東：海岸、都蘭、森林、舊站",
      body: "同一套模組可改成半日包車、兩天一夜、旅宿周邊推薦或地方活動頁。重點是每一段都有時間、停留原因、提醒與來源。",
      sourceLabel: "Source",
    },
  },
  en: {
    storySteps: [
      {
        label: "09:00 / Sea",
        title: "Open the Coast at Sanxiantai",
        body:
          "Start with Pacific light, the eight-arch bridge, and a clear East Coast signal before moving south.",
        duration: "60-90 min stop",
        tip: "Useful for sunrise starts, group meeting points, first photos, and driver routes.",
        sourceUrl: sourceUrls.sanxiantai,
      },
      {
        label: "12:00 / Dulan",
        title: "Slow Down at Dulan Sugar Factory",
        body:
          "Use the old factory, studios, coffee, and events to move the route from scenery into local culture.",
        duration: "60-120 min stop",
        tip: "Works for lunch, coffee, music events, and Dulan stay recommendations.",
        sourceUrl: sourceUrls.dulanSugarFactory,
      },
      {
        label: "15:00 / Forest",
        title: "Breathe Inside Taitung Forest Park",
        body:
          "When the route returns to the city, the lake paths and cycling roads create a slower urban stop.",
        duration: "45-90 min stop",
        tip: "Good for families, bike rentals, hotel pages, and low-intensity afternoons.",
        sourceUrl: sourceUrls.forestPark,
      },
      {
        label: "18:00 / Station",
        title: "End Around the Old Station",
        body:
          "Close with dinner, lights, performances, and Railway Art Village as a map-friendly endpoint.",
        duration: "90-120 min stop",
        tip: "Replace this with booking, event signup, LINE, or Google Maps CTAs.",
        sourceUrl: sourceUrls.railwayVillage,
      },
    ],
    story: {
      eyebrow: "Suggested Route",
      title: "One Day in Taitung: Coast, Dulan, Forest, Old Station",
      body:
        "The same module can become a half-day route, weekend stay guide, private driver itinerary, or local event page with timing, reasons to stop, tips, and sources.",
      sourceLabel: "Source",
    },
  },
};
