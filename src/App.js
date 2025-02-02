import { useState } from "react";

import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";

const friends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState([]);

  function handleSetShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleSetFriendsList(friendObj) {
    setFriendsList(...friendsList, friendObj);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friendsList={friendsList} />
        <AddFriendForm
          showAddFriend={showAddFriend}
          handleSetFriendsList={handleSetFriendsList}
        />
        <Button onClickFunction={handleSetShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <SplitBillForm />
    </div>
  );
}

export default App;
