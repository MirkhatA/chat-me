import { Avatar } from "antd";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import Card from "./Card";

export default function PostFormCard() {
  return (
    <Card>
      <div className="flex items-center">
        <Avatar size={48} src="profile.jpg" />
        <div className="mx-3">
          <p>
            <a className="font-semibold">Alua Seidemet</a>
          </p>
          <p className="text-gray-500 text-sm">2 hours ago</p>
        </div>
      </div>
      <div className="my-3">
        <h1>Подарите книгу пж</h1>
      </div>

      <div className="flex items-center">
        <HeartOutlined />
        <p className="ml-1 mr-5 text-gray-400">16</p>
        <CommentOutlined />
        <p className="ml-1 text-gray-400">6</p>
      </div>
    </Card>
  );
}
