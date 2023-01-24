import Navbar from "@/components/Navbar"
import NavigationMenu from "@/components/NavigationMenu"
import ProfileFormCard from "@/components/ProfileFormCard"
import PostFormCard from "@/components/PostFormCard"

export default function profile() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/4">
          <NavigationMenu />
        </div>
        <div className="grow">
          <ProfileFormCard />
          <PostFormCard />
        </div>
      </div>
    </div>
  )
}
