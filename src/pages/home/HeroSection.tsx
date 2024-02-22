import style from './home.module.scss';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    image: string;
    popularCities: { name: string, roomsLink: string, roomatesLink: string }[];
}

export default function HeroSection({ title, subtitle, image, popularCities }: HeroSectionProps) {
    return (
        <div className={style.heroSection} style={{ backgroundImage: `url(${image})` }}>
            <div className="container">
                <h1 className='text-white max-w-[1000px] mx-auto font-display font-bold'>{title}</h1>
                <p className='text-white mt-4 font-body text-xl tracking-wide'>{subtitle}</p>
                <div className='flex justify-center mt-12 gap-8 flex-wrap'>
                    {
                        popularCities.map((city, index) => (
                            <div key={index} className='rounded-2xl border-opacity-50 px-8 py-4 flex flex-col gap-2 text-white backdrop-blur-md shadow-xl border-[1px] border-white'>
                                <h5 className='text-white'>{city.name}</h5>
                                <a href={city.roomatesLink}>Rooms</a>
                                <a href={city.roomatesLink}>Roommates</a>
                            </div>
                        )) 
                    }
                </div>
            </div>
        </div>
    );
}