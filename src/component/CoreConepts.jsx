import { CORE_CONCEPTS } from "../data";
import Coreconsept from "./CoreConsept";
export default function Coreconsepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        <Coreconsept
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
        />
        <Coreconsept {...CORE_CONCEPTS[1]} />
        <Coreconsept {...CORE_CONCEPTS[2]} />
        <Coreconsept {...CORE_CONCEPTS[3]} />
      </ul>
    </section>
  );
}
