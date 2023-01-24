import Card from "./Card";
import Link from "next/link";
import {
  HomeOutlined,
  SearchOutlined,
  TeamOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function NavigationMenu() {
  return (
    <Card>
      <div className="p-6 ">
        <h3 className="pb-3 text-slate-500">Navigation</h3>
        <Link href="/">
          <p className="flex gap-2 py-3 items-center">
            <HomeOutlined />
            Home
          </p>
        </Link>

        <a href="#" className="flex gap-2 py-3 items-center">
          <SearchOutlined />
          Search
        </a>
        <a href="#" className="flex gap-2 py-3 items-center">
          <TeamOutlined />
          Friends
        </a>
        <a href="#" className="flex gap-2 py-3 items-center">
          <MessageOutlined />
          Messages
        </a>
        <Link href="/profile">
          <p className="flex gap-2 py-3 items-center">
            <UserOutlined />
            Profile
          </p>
        </Link>
      </div>
    </Card>
  );
}
