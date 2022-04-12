import React from "react";
import './styles.scss'

//Component
import CounterClass from "./CounterFunc";
// import CounterFunc from "./CounterFunc";
const itemRemaining = 5;

const CounterApp = () => {
  return(
    <main className="Application">
      <section className="Counters">
        <CounterClass max={itemRemaining} min={-5} step={1} />
        {/* <CounterFunc /> */}
      </section>
    </main>
  )
}

export default CounterApp