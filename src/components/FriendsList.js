import Friend from "./Friend";

function FriendsList({ friends, onSelection }) {
  return (
    friends && (
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} onSelection={onSelection} />
        ))}
      </ul>
    )
  );
}

export default FriendsList;
