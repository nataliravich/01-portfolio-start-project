import styled from "styled-components"
import { theme } from "../styles/Theme"

export const Button = styled.button`
font-size: 14px;
font-weight: 400;
letter-spacing: 1px;
text-transform: uppercase;
width: 170px;
height: 32px;
position: relative;
z-index: 0;							/**текст выше заливки кнопки*/

&:hover {
	&::before {						/**вместо подчеркивания, заливка на всю кнопку*/
		width: 100%;
		height: 100%;
	}
}

&::before {									/**строчный элемент*/
		content: "";						/**всегда указываем*/
		display: inline - block;		/**у строчного элемента не бывает высоты, а нам надо, следовательно меняем отображение*/
		width: 50%;							/**на 50% ширины родителя*/
		height: 10px;						/**взяли из Figma*/
		background-color: ${theme.colors.accent};		/**взяли из глобальных стилей*/

		position: absolute;				/**относительно Button*/
		bottom: 0;
		left: 50%;							/**отодвинули вместе с transform: translateX(-50%); в центр*/
		transform: translateX(-50%);	/**отодвинули вместе с left: 50%; в центр*/
		z-index: -1;						/**заливка ниже текста на кнопке*/
	}

`