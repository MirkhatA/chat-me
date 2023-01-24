import Card from "./Card";
import { Switch } from "antd";
import { AliwangwangOutlined } from "@ant-design/icons";

export default function Navbar() {
  return (
    <Card>
      <div className="flex justify-between items-center px-5">
        <AliwangwangOutlined style={{ fontSize: '30px'}}/>

        <form className="w-full mx-10">
          <input
            className="w-full p-2 rounded bg-darkThemeBg border border-gray-900 focus:outline-0 text-gray-400"
            type="search"
            placeholder="Search..."
          />
        </form>

        <div>
          <Switch checkedChildren="1" unCheckedChildren="0" />
        </div>
      </div>
    </Card>
  );
}
