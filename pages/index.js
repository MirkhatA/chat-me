import Navbar from "@/components/Navbar";
import NavigationMenu from "@/components/NavigationMenu";
import Card from "@/components/Card";
import PostFormCard from "@/components/PostFormCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/4">
          <NavigationMenu />
        </div>
        <div className="grow">
          <PostFormCard />
        </div>
      </div>
    </div>
  );
}
