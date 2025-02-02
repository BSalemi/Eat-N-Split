import { useState } from "react";
import Button from "./Button";

function AddFriendForm({ showAddFriend, handleSetFriendsList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  return (
    showAddFriend && (
      <form className="form-add-friend">
        <label>👫 Friend name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>🌄 Image URL</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button>Add</Button>
      </form>
    )
  );
}

export default AddFriendForm;
