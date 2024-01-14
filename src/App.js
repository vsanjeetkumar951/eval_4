import logo from "./logo.svg";
import "./App.css";
import DisplayComponants from "./componants/DisplayComponants";

function App() {
  return (
    <div>
      <h1>products</h1>
      <div className="App">
        <DisplayComponants
          img="https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927864_1280.jpg"
          name="Sanjeet"
          desc=""
          price="$12"
        />
         <DisplayComponants
          img="https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927864_1280.jpg"
          name="Baby"
          desc="This is the baby"
          price="$12"
        />
         <DisplayComponants
          img="https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927864_1280.jpg"
          name="Sanjeet"
          desc="This is the baby"
          price="$12"
        />
         <DisplayComponants
          img="https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927864_1280.jpg"
          name="Sanjeet"
          desc="This is the baby"
          price="$12"
        />
      
      </div>
    </div>
  );
}

export default App;
