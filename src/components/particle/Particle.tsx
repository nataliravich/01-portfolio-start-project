import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export const Particle = () => {												/**созвездия в Main и Slogan*/
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		await console.log(container);
	}, []);
	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				//background: {
				//	color: {
				//		value: "#0d47a1",
				//	},
				//},
				fpsLimit: 120,
				interactivity: {
					events: {
						//onClick: {						/**создаются новые звездочки */
						//	enable: true,
						//	mode: "push",
						//},
						onHover: {						/**разбегаются звездочки */
							enable: true,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {						/**параметры отвечают за вид частичек */
					color: {
						value: "#ffffff",
					},
					links: {							/**белые полосочки между точками */
						color: "#ffffff",
						distance: 200,				/**количество полосочек */
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 2,					/**скорость движение созвездий */
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 1000,				/**расстояние между точками */
						},
						value: 50,					/**количество точек */
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "circle",					/**форма того, что внутри, у нас это кружок */
					},
					size: {
						value: { min: 0.2, max: 1 },					/**размер shape */
					},
				},
				detectRetina: true,
			}}
		/>
	);
};