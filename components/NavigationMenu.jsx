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
          <p className="flex gap-2 py-3 items-center hover:text-indigo-500 duration-300">
            <HomeOutlined />
            Home
          </p>
        </Link>

        <Link href="/">
          <p className="flex gap-2 py-3 items-center hover:text-indigo-500 duration-300">
            <SearchOutlined />
            Search
          </p>
        </Link>

        <Link href="/friends">
          <p className="flex gap-2 py-3 items-center hover:text-indigo-500 duration-300">
            <TeamOutlined />
            Friends
          </p>
        </Link>

        <Link href="/">
          <p className="flex gap-2 py-3 items-center hover:text-indigo-500 duration-300">
            <MessageOutlined />
            Messages
          </p>
        </Link>

        <Link href="/profile">
          <p className="flex gap-2 py-3 items-center hover:text-indigo-500 duration-300">
            <UserOutlined />
            Profile
          </p>
        </Link>
      </div>
    </Card>
  );
}
