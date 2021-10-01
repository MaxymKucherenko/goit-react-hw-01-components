import user from "./data/users.json";
import statistical from "./data/statistical.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import { Profile } from "./components/profile/";
import { Statistics } from "./components/statistics/";
import { Friends } from "./components/frieds/";
import { TransactionHistory } from "./components/transaction/";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
     <h2>Task 1</h2>
      <div className="Profile">
        <Profile users={user} />
      </div>
      <h2>Task 2</h2>
      <div className="Statistics">
        <Statistics statistical={statistical} />
      </div>
      <h2>Task 3</h2>
      <div className="Friends">
        <Friends friends={friends} />
      </div>
      <h2>Task 4</h2>
      <div className="TransactionHistory">
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
