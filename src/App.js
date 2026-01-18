import NewComp from "./componetA";
import useCustome from "./custom";
import "./styles.css";
import ScrollFunction from "./scrollEffect";

export default function App() {
  const { count, plusCount, MinCount } = useCustome();

  return (
    <div>
      {/* <NewComp /> */}
      <ScrollFunction />
      {/* <div className="App">
        {count}
        <button
          onClick={() => {
            plusCount();
          }}
        >
          Plus
        </button>
        <button
          onClick={() => {
            MinCount();
          }}
        >
          Min
        </button>
      </div> */}
    </div>
  );
}
