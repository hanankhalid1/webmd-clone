// menuItems.ts

export interface MenuItem {
    href: string;
    label: string;
  }
  
  export const conditionsMenu: MenuItem[] = [
    { href: "/conditions/add-adhd", label: "ADD/ADHD" },
    { href: "/conditions/allergies", label: "Allergies" },
    { href: "/conditions/arthritis", label: "Arthritis" },
    // Add more condition items as needed
  ];
  
  export const drugsMenu: MenuItem[] = [
    { href: "/drugs-supplements/drugs", label: "Drugs" },
    { href: "/drugs-supplements/supplements", label: "Supplements" },
    { href: "/drugs-supplements/pill-identifier", label: "Pill Identifier" },
    // Add more drugs items as needed
  ];
  
  export const wellbeingMenu: MenuItem[] = [
    { href: "/wellbeing/aging-well", label: "Aging Well" },
    { href: "/wellbeing/baby", label: "Baby" },
    { href: "/wellbeing/birth-control", label: "Birth Control" },
    // Add more wellbeing items as needed
  ];
  
  export const moreMenu: MenuItem[] = [
    { href: "/more/news", label: "News" },
    { href: "/more/blogs", label: "Blogs" },
    { href: "/more/podcasts", label: "Podcasts" },
    // Add more more items as needed
  ];
  