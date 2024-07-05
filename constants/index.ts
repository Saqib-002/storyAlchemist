import { SidebarLink } from "@/types";

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dashboard.svg",
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    imgURL: "/icons/videos.svg",
    route: "/videos",
    label: "My Videos",
  },
  {
    imgURL: "/icons/add.svg",
    route: "/createNew",
    label: "Create New Video",
  },
];
export const AUDIOS = [
  {
    src: "/voices/john.mp3",
    value: "john",
    label: "John Doe - Deep",
  },
  {
    src: "/voices/nassim.mp3",
    value: "nassim",
    label: "Nassim - Corporate Narration",
  },
  {
    src: "/voices/hope.mp3",
    value: "hope",
    label: "Hope - upbeat and clear",
  },
];
