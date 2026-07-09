import { Preloader } from '@/components/preloader';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/sections/services';
import { Destinations } from '@/components/sections/destinations';
import { Packages } from '@/components/sections/packages';
import { Villas } from '@/components/sections/villas';
import { CarRentals } from '@/components/sections/car-rentals';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Reviews } from '@/components/sections/reviews';
import { Gallery } from '@/components/sections/gallery';
import { TravelProcess } from '@/components/sections/travel-process';
import { Faqs } from '@/components/sections/faqs';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { FloatingActions } from '@/components/floating-actions';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <Packages />
        <Villas />
        <CarRentals />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <TravelProcess />
        <Faqs />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
