import Friend from "./Friend";

function FriendsList({ friends }) {
  return (
    friends && (
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    )
  );
}

export default FriendsList;
