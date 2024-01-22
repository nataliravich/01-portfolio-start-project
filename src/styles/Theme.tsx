

export const theme = {
	colors: {
		primaryBG: "#1F1F20", 			/**Обязательно все цвета в кавычки, иначе не распознает*/
		secondaryBg: "#252527",
		accent: "#7572D5",
		font: "#FFFFFF",

		borderColor: "#4A4A4A",
		placeholderColor: "#495057"
	}, 										/**обязательно запятая*/

	media: {									/**без @*/
		tablet: "screen and (max-width: 768px)",		/**для планшетов*/
		mobile: "screen and (max-width: 576px)",		/**для мобильников*/
		desktop: "screen and (min-width: 1140px)"		/**для компов*/
	},

	animations: {
		transition: ".2s, ease-in-out"			/**0.2s - считается приятной анимацией*/
	}
}
