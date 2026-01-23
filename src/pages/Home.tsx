import CategorySection from "../components/home/CategorySection";
import Hero from "../components/home/Hero";
import LatestStylesSection from "../components/home/LatestStyleSection";

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-rosebrown-50 text-gray-900">
                <Hero />
                <CategorySection />
                <LatestStylesSection />
                
            </div>
        </>
    );
}