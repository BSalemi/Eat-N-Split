import Friend from "./Friend";

function FriendsList({ friendsList }) {
  return (
    friendsList && (
      <ul>
        {friendsList.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    )
  );
}

export default FriendsList;
