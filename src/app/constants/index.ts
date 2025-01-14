import { title } from "process";

export const navigationMenu = [
  { title: "rooms" },
  { title: "restaurants" },
  { title: "attractions" },
];

export const nearbyAttractions = [
  {
    title: "The Beach",
    description:
      "Enjoy the sun, sand, and sea at the nearby pristine beach, perfect for relaxation and water activities.",
    image: "/attraction-beach.jpg",
    link: "#",
  },
  {
    title: "Our Lady Church",
    description:
      "Visit the historic Church, a beautiful example of colonial architecture and a place of serene worship.",
    image: "/attraction-church3.jpg",
    link: "#",
  },
  {
    title: "Beach Bar",
    description:
      "Unwind with a refreshing drink at the nearby vibrant beach bar, offering stunning ocean views.",
    image: "/attraction-beach-bar1.jpg",
    link: "#",
  },
  {
    title: "Resto Pub",
    description:
      "Enjoy a lively atmosphere with great food and drinks the nearby Resto Pub.",
    image: "/attraction-pub1.jpg",
    link: "#",
  },
  {
    title: "Club Ibiza",
    description:
      "Dance the night away at Club Ibiza, the hottest spot for nightlife and entertainment.",
    image: "/attraction-club1.jpeg",
    link: "#",
  },
];

export const roomsData = [
  {
    title: "Deluxe Room",
    description:
      "Experience luxury and comfort in our spacious Deluxe Rooms, featuring modern amenities and elegant decor.",
    image: "/room11.jpg",
    link: "#",
  },
  {
    title: "Standard Room",
    description:
      "Relax in our comfortable Standard Rooms, offering a cozy and affordable stay with essential amenities.",
    image: "/room12.jpeg",
    link: "#",
  },
  {
    title: "Suite",
    description:
      "Indulge in our luxurious Suites, featuring separate living areas, premium amenities, and exquisite decor.",
    image: "/room14.webp",
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

export const restaurantsData = [
  {
    title: "The Lounge",
    description:
      "Enjoy a casual dining experience at The Lounge, offering a variety of snacks, beverages, and light meals.",
    image: "/restaurant1.jpg",
    link: "#",
  },
  {
    title: "The Terrace",
    description:
      "Savor delicious meals and refreshing drinks at The Terrace, our rooftop restaurant with stunning views.",
    image: "/restaurant2.jpg",
    link: "#",
  },
];
