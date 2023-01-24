import Card from "./Card";
import { Avatar, Button } from "antd";
import Link from "next/link";

export default function ProfileFormCard() {
  return (
    <Card>
      <div className="flex items-center">
        <Avatar
          size={{ xs: 64, sm: 72, md: 80, lg: 104, xl: 120, xxl: 140 }}
          src="profile.jpg"
        />
        <div className="ml-5">
          <h1 className="block">Alua Seidemet</h1>
          <p className=" text-gray-500">Aiymmyforeverlove</p>
          <div className="flex">
            <Link href="/">
              <p className="mr-5 hover:text-indigo-500 duration-300">
                1 followers
              </p>
            </Link>
            <Link href="/">
              <p className="mr-5 hover:text-indigo-500 duration-300">
                2 following
              </p>
            </Link>
            <Link href="/">
              <p className="mr-5 hover:text-indigo-500 duration-300">
                2 friends
              </p>
            </Link>
          </div>
          <div className="my-2">
            <Button className="text-white mr-2">Subscribe</Button>
            <Button className="text-white mr-2">Add friend</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
