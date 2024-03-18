import { useState } from "react";

import { ConuterProvider } from "./context/CounterContext";
import CounterDisplay from "./component/CounterDisplay";
import CounterButton from "./component/CounterButton";

function App() {




  return (
    <ConuterProvider>
      <CounterDisplay/>
      <CounterButton />
    </ConuterProvider>
    );
}

