import { useEffect, useState } from "react";
import styles from "./styles.module.css";

function App() {
  const apiURL = "https://random.dog/woof.json";
  const [dogImg, setDogImg] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch(apiURL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setDogImg(data);
        })
        .catch((err) => {
          console.log("you got an error", err);
        });
    }, 5000);
  }, []);

  return (
    <>
      <div className={styles.title}>My Dog Collection</div>
      <div className={styles.dogImage}>
        <img src={dogImg.url} alt="Dog Image"></img>
      </div>
    </>
  );
}

export default App;
