import Hero from "./hero/Hero";
import React from "react";
import Conquistas from "./conquistas/Conquistas";
import StartTheFeaturettes from "./start the featurettes/StartTheFeaturettes";
import Eventos from "./eventos/Eventos";
import FormContato from "./FormContato/FormContato";
import Parceiros from "./Parceiros/Parceiros";

export default function Homepage() {
	return (
		<>
			<Hero></Hero>
			<Conquistas></Conquistas>
			<StartTheFeaturettes></StartTheFeaturettes>
			<Eventos></Eventos>
			<Parceiros />
			<FormContato />
		</>
	);
}
