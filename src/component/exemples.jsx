import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";

export default function Exemples() {
  const [SelectedTopic, setSelectedTopic] = useState(null);
  function HandelSlect(SlectedButtun) {
    setSelectedTopic(SlectedButtun);
  }
  {
    /*let tabContent = <p>please select a topic </p> 
    if (setSelectedTopic) {
      tabContent = (
        <div id='tab-content'>
            <h3>{EXAMPLES[SelectedTopic].title}</h3>
            <p>{EXAMPLES[SelectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[SelectedTopic].code}</code>
            </pre>
          </div> 
      )
    }*/
  }
  return (
    <section id="examples">
      <h2>exemples</h2>
      <menu>
        <TabButton
          isSelected={SelectedTopic === "components"}
          onSelect={() => HandelSlect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={SelectedTopic === "jsx"}
          onSelect={() => HandelSlect("jsx")}
        >
          Jsx
        </TabButton>
        <TabButton
          isSelected={SelectedTopic === "props"}
          onSelect={() => HandelSlect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={SelectedTopic === "state"}
          onSelect={() => HandelSlect("state")}
        >
          State
        </TabButton>
      </menu>

      {!SelectedTopic && <p>please slect a topic</p>}
      {SelectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[SelectedTopic].title}</h3>
          <p>{EXAMPLES[SelectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[SelectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
