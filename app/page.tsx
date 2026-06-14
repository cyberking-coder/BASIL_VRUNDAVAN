import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import ScrollSequence from "@/components/ScrollSequence";
import SectionAddress from "@/components/SectionAddress";
import SectionAmenities from "@/components/SectionAmenities";
import SectionResidences from "@/components/SectionResidences";
import SectionGallery from "@/components/SectionGallery";
import SectionLocation from "@/components/SectionLocation";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      <main>
        <ScrollSequence />
        <SectionAddress />
        <SectionAmenities />
        <SectionResidences />
        <SectionGallery />
        <SectionLocation />
        <SectionContact />
      </main>
      <Footer />
    </>
  );
}
