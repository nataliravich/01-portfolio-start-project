import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
${font({ family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30 })}		/**с помощью миксина передаем закомментированные свойства для десктопа + минимальный шрифт для мобилки*/
text-align: center;
//font-family: 'Josefin Sans', sans-serif;
//font-size: 36px;
//font-weight: 600;
letter-spacing: 5px;
margin-bottom: 90px;						/**расстояние от h2 до следующего эелемента, взяли из Figma, не меняется в моб макете*/

position: relative;						/**относительно SectionTitle позиционируется линия*/

	&::before {								/**черта под заголовком, строчный элемент*/
		content: "";						/**всегда указываем*/
		display: inline - block;		/**у строчного элемента не бывает высоты, а нам надо, следовательно меняем отображение*/
		width: 55px;						/**взяли из Figma*/
		height: 1px;						/**взяли из Figma*/
		background-color: ${theme.colors.accent};			/**взяли из глобальных стилей*/

		position: absolute;				/**относительно SectionTitle*/
		left: 50%;							/**выставили по центру элемента вместе с transform: translateX(-50%);*/
		bottom: -30px;						/**опустили от текста на 30рх*/
		transform: translateX(-50%);	/**выставили по центру элемента вместе с left: 50%*/

		@media ${theme.media.mobile} {
			bottom: -24px;						/**опустили от h2 до черты на моб*/
		}
	}
`