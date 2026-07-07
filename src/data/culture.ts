import { sourceUrls } from "./images";
import type { CultureItem, Locale, SectionCopy } from "./shared";

export type CultureContent = {
  cultureItems: CultureItem[];
  culture: SectionCopy;
};

export const cultureContent: Record<Locale, CultureContent> = {
  cn: {
    cultureItems: [
      {
        name: "阿美族",
        romanized: "Amis",
        note: "阿美族聚落、歌舞、年祭與海岸生活讓台東的太平洋路線不只是風景，而是有社群與時間感的地方。",
        tone: "海洋、歌聲、聚會",
        sourceUrl: sourceUrls.indigenous,
      },
      {
        name: "卑南族",
        romanized: "Puyuma",
        note: "卑南族與台東市周邊聚落、年祭、青年會所與傳統儀式連在一起，適合放進市區文化導覽。",
        tone: "聚落、儀式、記憶",
        sourceUrl: sourceUrls.indigenous,
      },
      {
        name: "達悟族",
        romanized: "Tao",
        note: "蘭嶼與達悟族海洋文化提醒旅人，台東也通往離島、飛魚季與更深的海上生活。",
        tone: "島嶼、海洋、飛魚",
        sourceUrl: sourceUrls.indigenous,
      },
      {
        name: "布農族",
        romanized: "Bunun",
        note: "布農族山林知識、祭儀與歌聲讓台東的山線不只是替代路線，而是另一種深度旅行入口。",
        tone: "山林、祭儀、合音",
        sourceUrl: sourceUrls.indigenous,
      },
    ],
    culture: {
      eyebrow: "Culture",
      title: "把地方文化放進旅程，而不是只放照片",
      body:
        "一個可被客戶採用的旅遊模板，需要景點、交通、文化、停留理由與可靠來源一起工作。這個區塊可改成族群、職人、店家、歷史或品牌故事。",
      readMoreLabel: "閱讀來源",
    },
  },
  en: {
    cultureItems: [
      {
        name: "Amis",
        romanized: "Amis",
        note:
          "Amis communities, song, ceremonies, and coastal life make Taitung's Pacific route more than scenery.",
        tone: "Ocean, song, gathering",
        sourceUrl: sourceUrls.indigenous,
      },
      {
        name: "Puyuma",
        romanized: "Puyuma",
        note:
          "Puyuma settlements, rituals, youth houses, and city-adjacent memory fit naturally into Taitung cultural routes.",
        tone: "Settlement, ritual, memory",
        sourceUrl: sourceUrls.indigenous,
      },
      {
        name: "Tao",
        romanized: "Tao",
        note:
          "Orchid Island and Tao ocean culture connect Taitung to island travel, flying fish season, and deeper sea life.",
        tone: "Island, ocean, flying fish",
        sourceUrl: sourceUrls.indigenous,
      },
      {
        name: "Bunun",
        romanized: "Bunun",
        note:
          "Bunun mountain knowledge, ceremonies, and singing turn the mountain line into a serious travel story.",
        tone: "Mountain, ritual, harmony",
        sourceUrl: sourceUrls.indigenous,
      },
    ],
    culture: {
      eyebrow: "Local Culture",
      title: "Place Culture Inside the Travel Route",
      body:
        "A strong travel template should not rely on photos alone. Culture, transport, stop reasons, and sources make stays, tours, and local brands feel credible.",
      readMoreLabel: "Read Source",
    },
  },
};
