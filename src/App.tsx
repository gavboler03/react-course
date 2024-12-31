import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const [alertVisible, setAlertVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  let heading = "Cities";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClick={() => setAlertVisible(false)}>Warning</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Submit</Button>
      {isLiked === true ? (
        <Like color="red" onClick={() => setIsLiked(false)} />
      ) : (
        <Like color="black" onClick={() => setIsLiked(true)} />
      )}
    </div>
  );
}

export default App;
