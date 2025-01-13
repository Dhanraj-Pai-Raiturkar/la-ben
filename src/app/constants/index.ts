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
    image: "/attractions-colva-beach-1.jpg",
    link: "https://en.wikipedia.org/wiki/Colva_Beach",
  },
  {
    title: "Our Lady Of Merces Church",
    description:
      "Our Lady of Mercy Church is a beautiful church located in the village of Colva in South Goa.",
    image: "/attractions-our-lady-merces-church.jpg",
    link: "https://en.wikipedia.org/wiki/Our_Lady_of_Mercy_Church,_Colva",
  },
  {
    title: "Boomerang beach bar",
    description:
      "Boomerang Beach Bar is a beach shack located on the Colva Beach in South Goa.",
    image: "/attractions-boomerang-restaurant.jpg",
    link: "https://www.facebook.com/boomerangbeachbar/",
  },
  {
    title: "The gatsby pub",
    description:
      "The Gatsby Pub is a popular pub located in the village of Colva in South Goa.",
    image: "/attraction-gatsby.jpg",
    link: "https://www.facebook.com/thegatsbygoa/",
  },
  {
    title: "Club margarita",
    description:
      "Club Margarita is a popular nightclub located in the village of Colva in South Goa.",
    image: "/club-margarita-1.webp",
    link: "https://www.facebook.com/clubmargaritagoa/",
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

export const sliderAutoplayConfig = {
  delay: 5000,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};
