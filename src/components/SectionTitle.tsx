import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
text-align: center;
font-family: 'Josefin Sans', sans-serif;
font-size: 36px;
font-weight: 600;
letter-spacing: 5px;
margin-bottom: 90px;						/**расстояние от черты до следующего текста, взяли из Figma*/

position: relative;						/**относительно SectionTitle позиционируется линия*/

	&::before {								/**строчный элемент*/
		content: "";						/**всегда указываем*/
		display: inline - block;		/**у строчного элемента не бывает высоты, а нам надо, следовательно меняем отображение*/
		width: 55px;						/**взяли из Figma*/
		height: 1px;						/**взяли из Figma*/
		background-color: ${theme.colors.accent};			/**взяли из глобальных стилей*/

		position: absolute;				/**относительно SectionTitle*/
		left: 50%;							/**выставили по центру элемента вместе с transform: translateX(-50%);*/
		bottom: -30px;						/**опустили от текста на 30рх*/
		transform: translateX(-50%);	/**выставили по центру элемента вместе с left: 50%*/
	}
`