import { useState } from "react";

import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <AddFriendForm />
        <Button
          onClick={() => setIsFormOpen(!isFormOpen)}
          isFormOpen={isFormOpen}
        >
          {isFormOpen ? "Close" : "Add friend"}
        </Button>
      </div>
      <SplitBillForm />
    </div>
  );
}

export default App;
