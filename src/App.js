import { useState, useEffect } from "react";
import Nav from "./component/functional/nav";
import Foot from "./component/functional/foot";
import Info from "./component/functional/info";
import HookState1 from "./component/functional/HookState1";
import HookState2 from "./component/functional/HookState2";
import HookState3_1 from "./component/functional/HookState3_1";
import HookState3_2 from "./component/functional/HookState3_2";
import Car from "./component/class/Car";
import "./style/app.css";

function App() {
  const myFriends = [
    { number: 1, name: "Tim", age: 38 },
    { number: 2, name: "Ivy", age: 39 },
    { number: 3, name: "Oliver", age: 5 },
  ];

  const noinput = () => {
    alert("touchMe");
  };

  const touchMe = (data) => {
    window.alert(data);
  };

  let [common, setCommon] = useState([]);

  // window.onbeforeunload = function () {
  //   return "你還沒有完成你的文章，就這樣離開了嗎？";
  // };

  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    var confirmationMessage = "你還沒有完成你的文章，就這樣離開了嗎？";

    e.returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Webkit, Safari, Chrome
  });

  let [btnWord, setbtnWord] = useState("Btn");

  useEffect(() => {
    console.log(`Btn Name is ${btnWord}`);
  }, [btnWord]);

  const btnChange = (e) => {
    e.preventDefault();
    Math.random() * 10 > 5 ? setbtnWord("btn") : setbtnWord("Btn");
  };

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <h1 style={{ marginLeft: "10px", marginRight: "10px" }}>
          This is App.js H1's Tag GOGOGO. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Veritatis ullam debitis natus
          dignissimos expedita dolor dolore temporibus adipisci dolorum odit?
        </h1>

        <section className="section-cs">
          {myFriends.map((element, index) => {
            // console.log(index);
            return (
              <Info
                key={index}
                number={element.number}
                name={element.name}
                age={element.age}
              ></Info>
            );
          })}
        </section>
        <section className="section-cs">
          <div>
            <button onClick={noinput}>touchMe</button>
            <button
              onClick={() => {
                touchMe("Good");
              }}
            >
              touchMe2
            </button>
          </div>
        </section>
        <section>
          <div className="div-cs">
            <HookState1></HookState1>
          </div>
          <div className="div-cs">
            <HookState2></HookState2>
          </div>
          <div className="div-cs">
            <div className="div-flext">
              <div>
                <HookState3_1
                  common={common}
                  setCommon={setCommon}
                ></HookState3_1>
              </div>
              <div>
                <HookState3_2 common={common}></HookState3_2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <button
            onClick={(e) => {
              btnChange(e);
            }}
          >
            {btnWord}
          </button>
        </section>
        <section>
          <Car color={"Black"}></Car>
        </section>
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
