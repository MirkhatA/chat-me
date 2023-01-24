import Avatar from "antd/es/avatar/avatar";
import Link from "next/link";

export default function UserHeaderCard() {
  return (
    <div className="flex items-center mt-2">
      <Avatar size={48} src="profile.jpg" />
      <div className="mx-3">
        <p>
          <a className="font-semibold">Alua Seidemet</a>
        </p>
        <p className="text-gray-500 text-sm">2 hours ago</p>
      </div>
    </div>
  );
}
