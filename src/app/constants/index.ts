export const navigationMenu = [
  { title: "rooms" },
  { title: "restaurants" },
  { title: "location" },
];

export const nearbyAttractions = [
  {
    title: "Colva beach",
    description:
      "Colva Beach is the oldest, largest and the most spectacular beaches of South Goa.",
    image: "/attraction-beach.jpg",
    link: "#",
  },
  {
    title: "Our Lady Of Merces Church",
    description:
      "Our Lady of Mercy Church is a beautiful church located in the village of Colva in South Goa.",
    image: "/attraction-church3.jpg",
    link: "#",
  },
  {
    title: "Boomerang beach bar",
    description:
      "Boomerang Beach Bar is a beach shack located on the Colva Beach in South Goa.",
    image: "/attraction-beach-bar1.jpg",
    link: "#",
  },
  {
    title: "The gatsby pub",
    description:
      "The Gatsby Pub is a popular pub located in the village of Colva in South Goa.",
    image: "/attraction-pub1.jpg",
    link: "#",
  },
  {
    title: "Club margarita",
    description:
      "Club Margarita is a popular nightclub located in the village of Colva in South Goa.",
    image: "/attraction-club1.jpeg",
    link: "#",
  },
];

export const roomsData = [
  {
    title: "Deluxe Room",
    description:
      "Experience luxury and comfort in our spacious Deluxe Rooms, featuring modern amenities and elegant decor.",
    image: "/room1.jpg",
    link: "#",
  },
  {
    title: "Standard Room",
    description:
      "Relax in our comfortable Standard Rooms, offering a cozy and affordable stay with essential amenities.",
    image: "/room3.jpeg",
    link: "#",
  },
  {
    title: "Suite",
    description:
      "Indulge in our luxurious Suites, featuring separate living areas, premium amenities, and exquisite decor.",
    image: "/room10.jpg",
    link: "#",
  },
];

export const sliderBreakpoints = {
  640: {
    slidesPerView: 1, // For small screens (e.g., mobile)
  },
  768: {
    slidesPerView: 2, // For medium screens (e.g., tablets)
  },
  1024: {
    slidesPerView: 3, // For large screens (e.g., desktops)
  },
  1280: {
    slidesPerView: 3, // For extra-large screens
  },
};

export const sliderBreakpointsRooms = {
  640: {
    slidesPerView: 1, // For small screens (e.g., mobile)
  },
  768: {
    slidesPerView: 2, // For medium screens (e.g., tablets)
  },
  1024: {
    slidesPerView: 2, // For large screens (e.g., desktops)
  },
  1280: {
    slidesPerView: 2, // For extra-large screens
  },
};

export const sliderAutoplayConfig = {
  delay: 5000,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};
