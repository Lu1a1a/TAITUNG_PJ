import { sourceUrls } from "./images";
import type { Locale, TripInquiryCopy } from "./shared";

export const plannerContent: Record<Locale, TripInquiryCopy> = {
  cn: {
    eyebrow: "Plan Your Trip",
    title: "把台東排進可預訂、可詢問的行程",
    body:
      "這裡可以接 LINE、Email、Google Form、訂房頁或包車詢價。模板不只展示景點，也把旅人帶到下一步。",
    primaryLabel: "送出行程需求",
    secondaryLabel: "打開台東地圖",
    emailHref:
      "mailto:hello@taitung-guide.example?subject=Taitung%20Trip%20Inquiry&body=Travel%20dates:%0D%0ANumber%20of%20guests:%0D%0ARoute%20preference:",
    mapHref: "https://www.google.com/maps/search/Taitung+Sanxiantai+Dulan+Forest+Park+Railway+Art+Village",
    note: "正式上線前，把這裡換成你的 LINE 官方帳號、旅宿訂房頁、包車表單或活動報名頁。",
    info: [
      { label: "Start point", value: "台東車站 / 三仙台" },
      { label: "Best length", value: "1 天到 2 天" },
      { label: "Good for", value: "包車、旅宿、親子、東海岸慢旅" },
    ],
    plans: [
      {
        name: "東海岸半日線",
        duration: "4-5 hours",
        summary: "三仙台、都蘭糖廠、海岸咖啡或部落周邊停留，適合抵達日或包車半日。",
        highlights: ["海岸主視覺", "低負擔停留", "適合攝影與咖啡"],
        detailTitle: "東海岸半日線",
        detailBody:
          "從三仙台開始建立東海岸印象，再到都蘭糖廠放慢節奏。正式專案可加入餐廳、住宿、衝浪或部落導覽內容。",
        detailInfo: [
          { label: "Start point", value: "三仙台 / 台東市區" },
          { label: "Best length", value: "半日 4-5 小時" },
          { label: "Good for", value: "抵達日、包車、攝影、咖啡停留" },
        ],
        primaryLabel: "看三仙台",
        primaryHref: sourceUrls.sanxiantai,
        secondaryLabel: "看都蘭糖廠",
        secondaryHref: sourceUrls.dulanSugarFactory,
        note: "三仙台與都蘭糖廠適合做成同一條東海岸路線，正式版本可再加入交通時間與預約 CTA。",
      },
      {
        name: "市區森林與舊站",
        duration: "3-4 hours",
        summary: "森林公園、鐵道藝術村與市中心晚餐，適合旅宿周邊頁或不開車旅人。",
        highlights: ["市區好抵達", "親子友善", "晚餐與散步銜接"],
        detailTitle: "市區森林與舊站",
        detailBody:
          "下午進森林公園散步或騎車，傍晚轉到舊站與鐵道藝術村。這條線最適合放在飯店、民宿與市區品牌頁面。",
        detailInfo: [
          { label: "Start point", value: "台東市區 / 住宿點" },
          { label: "Best length", value: "3-4 小時" },
          { label: "Good for", value: "親子、無車旅人、城市散步" },
        ],
        primaryLabel: "看森林公園",
        primaryHref: sourceUrls.forestPark,
        secondaryLabel: "看鐵道藝術村",
        secondaryHref: sourceUrls.railwayVillage,
        note: "這條線可以很容易接訂房、餐廳訂位、租車或市區活動報名。",
      },
      {
        name: "兩天一夜慢旅",
        duration: "2 days",
        summary: "第一天東海岸，第二天市區森林與舊站，適合旅宿、包車與地方品牌提案。",
        highlights: ["可搭配住宿", "雙語內容完整", "可擴成多頁網站"],
        detailTitle: "兩天一夜慢旅",
        detailBody:
          "第一天走三仙台與都蘭，晚上回台東市區；第二天安排森林公園、舊站與市集或店家。模板可直接擴充成住宿頁、餐廳頁與交通頁。",
        detailInfo: [
          { label: "Start point", value: "台東車站 / 台東機場 / 旅宿" },
          { label: "Best length", value: "兩天一夜" },
          { label: "Good for", value: "旅宿、家庭、包車、品牌導覽" },
        ],
        primaryLabel: "看台東觀光",
        primaryHref: sourceUrls.officialTourism,
        secondaryLabel: "看東海岸文化",
        secondaryHref: sourceUrls.eastCoastCulture,
        note: "正式商用時，把這段換成真實方案價格、住宿限制、集合地點與付款流程。",
      },
    ],
  },
  en: {
    eyebrow: "Plan Your Trip",
    title: "Turn Taitung Into a Bookable Travel Flow",
    body:
      "Connect this section to LINE, email, Google Forms, booking pages, or private driver inquiries. The template shows places and gives visitors a next action.",
    primaryLabel: "Send trip request",
    secondaryLabel: "Open Taitung map",
    emailHref:
      "mailto:hello@taitung-guide.example?subject=Taitung%20Trip%20Inquiry&body=Travel%20dates:%0D%0ANumber%20of%20guests:%0D%0ARoute%20preference:",
    mapHref: "https://www.google.com/maps/search/Taitung+Sanxiantai+Dulan+Forest+Park+Railway+Art+Village",
    note: "Before launch, replace this with your hotel LINE account, booking page, driver inquiry form, or event signup path.",
    info: [
      { label: "Start point", value: "Taitung Station / Sanxiantai" },
      { label: "Best length", value: "1 to 2 days" },
      { label: "Good for", value: "Drivers, stays, families, East Coast slow travel" },
    ],
    plans: [
      {
        name: "East Coast Half Day",
        duration: "4-5 hours",
        summary: "Sanxiantai, Dulan Sugar Factory, coastal coffee, or nearby community stops for arrival days.",
        highlights: ["Strong coast visual", "Low intensity", "Photo and coffee friendly"],
        detailTitle: "East Coast Half Day",
        detailBody:
          "Start at Sanxiantai for the East Coast signal, then slow down at Dulan Sugar Factory. A real client project can add restaurants, stays, surf routes, or local tours.",
        detailInfo: [
          { label: "Start point", value: "Sanxiantai / Taitung City" },
          { label: "Best length", value: "Half day, 4-5 hours" },
          { label: "Good for", value: "Arrival days, drivers, photography, coffee stops" },
        ],
        primaryLabel: "View Sanxiantai",
        primaryHref: sourceUrls.sanxiantai,
        secondaryLabel: "View Dulan Factory",
        secondaryHref: sourceUrls.dulanSugarFactory,
        note: "Sanxiantai and Dulan Sugar Factory work as one East Coast route. Add transport time and booking CTAs for production.",
      },
      {
        name: "City Forest and Old Station",
        duration: "3-4 hours",
        summary: "Taitung Forest Park, Railway Art Village, and downtown dinner for guests without a car.",
        highlights: ["Easy city access", "Family friendly", "Dinner and walk sequence"],
        detailTitle: "City Forest and Old Station",
        detailBody:
          "Use the afternoon for Taitung Forest Park, then move to the old station and Railway Art Village around evening. This is ideal for hotel and city brand pages.",
        detailInfo: [
          { label: "Start point", value: "Taitung City / stay" },
          { label: "Best length", value: "3-4 hours" },
          { label: "Good for", value: "Families, no-car travelers, city walks" },
        ],
        primaryLabel: "View Forest Park",
        primaryHref: sourceUrls.forestPark,
        secondaryLabel: "View Railway Village",
        secondaryHref: sourceUrls.railwayVillage,
        note: "This route can connect to bookings, restaurant reservations, rentals, or city event signups.",
      },
      {
        name: "Weekend Slow Trip",
        duration: "2 days",
        summary: "East Coast on day one, city forest and old station on day two for stays, drivers, and local brands.",
        highlights: ["Stay-ready", "Bilingual-ready", "Expandable to multi-page"],
        detailTitle: "Weekend Slow Trip",
        detailBody:
          "Build day one around Sanxiantai and Dulan, then return to Taitung City. Day two can cover Forest Park, the old station district, markets, and selected shops.",
        detailInfo: [
          { label: "Start point", value: "Taitung Station / Airport / stay" },
          { label: "Best length", value: "Two days, one night" },
          { label: "Good for", value: "Stays, families, drivers, brand guides" },
        ],
        primaryLabel: "View Taitung Tourism",
        primaryHref: sourceUrls.officialTourism,
        secondaryLabel: "View East Coast Culture",
        secondaryHref: sourceUrls.eastCoastCulture,
        note: "For commercial use, replace this with real package pricing, stay limits, meeting points, and payment flow.",
      },
    ],
  },
};
