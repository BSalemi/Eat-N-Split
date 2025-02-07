import { useState } from "react";

function SplitBillForm({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [paidByFriend, setPaidByFriend] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        disabled={whoIsPaying === "user"}
        value={paidByUser}
        onChange={(e) => setPaidByUser(e.target.value)}
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input
        type="text"
        disabled={whoIsPaying === "you"}
        value={paidByFriend}
        onChange={(e) => setPaidByFriend(e.target.value)}
      />

      <label>🤑 Who is paying the bill?</label>
      <select
        selected={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="you"> {selectedFriend.name} </option>
      </select>
    </form>
  );
}

export default SplitBillForm;
