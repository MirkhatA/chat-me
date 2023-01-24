import Card from "./Card";
import UserHeaderCard from "./UserHeaderCard";

export default function FriendListCard() {
  return (
    <Card>
      Friend list
      <UserHeaderCard />
      <UserHeaderCard />
      <UserHeaderCard />
      <UserHeaderCard />
    </Card>
  );
}
