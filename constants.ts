import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCxg4GwdK-Mwdy_vPIVr-Lvg",
    handle: "StuStack",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/tonystackofficial/",
    handle: "StuStack",
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com/CountT13",
    handle: "StuStack"
  }
];

const title = "StuStack";
const description =
  "Student Newsletter";
const image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Downpatrick_Head_2021.jpg/220px-Downpatrick_Head_2021.jpg";

export const metaData: Metadata = {
  title: title,
  description: description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};
