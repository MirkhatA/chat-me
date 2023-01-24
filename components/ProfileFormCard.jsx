import Card from "@/components/Card";
import { Avatar } from "antd";

export default function ProfileFormCard() {
  return (
    <Card>
      <div className="flex">
        <Avatar
          size={{ xs: 64, sm: 72, md: 80, lg: 104, xl: 120, xxl: 140 }}
          src="profile.jpg"
        />
        <div>
          <h1 className="block">Alua Seidemet</h1>
          <p className=" text-gray-500">Aiymmyforeverlove</p>
        </div>
      </div>
    </Card>
  );
}
