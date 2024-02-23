import HeroSection from "./HeroSection";
import bg from "../../assets/img/bg.jpg";
import FeaturedSection from "./FeaturedSection";

const data = {
  title: "Looking for a room or a roommate? We've got you covered!",
  subtitle: "Explore affordable and convenient room rentals. Your ideal space is just a click away! ",
  image: "https://img.freepik.com/premium-photo/3drendered-drawing-room-model-with-orange-color-theme_1066261-43119.jpg?w=1380",
  popularCities: [
    {
      name: "Dublin",
      roomsLink: "/rooms/dublin",
      roomatesLink: "/roommates/dublin",
    },
    { name: "Limerick", 
      roomsLink: "/rooms/limerick", 
      roomatesLink: "/roommates/limerick", 
    }, 
    { name: "Galway", 
      roomsLink: "/rooms/galway", 
      roomatesLink: "/roommates/galway", 
    }, 
    { name: "Cork", 
      roomsLink: "/rooms/cork", 
      roomatesLink: "/roommates/cork", 
    },
  ]
};

export default function Home() {
  return (
    <>
      <HeroSection title={data.title} subtitle={data.subtitle} image={bg} popularCities={data.popularCities} />
      <FeaturedSection />
    </>
  )
}