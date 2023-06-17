import { Inter } from "@next/font/google";
import SlideShow from "../components/SlideShow";
import Category from "../components/Category/Category";
import AuthorRanking from "../components/AuthorRanking/AuthorRanking";
import MusicSpotlight from "../components/MusicSpotlight/MusicSpotlight";
import Features from "../components/Features/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="px-10 pt-1">
      <Category />
      <SlideShow />
      <AuthorRanking />
      <MusicSpotlight />
      <Features />
    </div>
  );
}
