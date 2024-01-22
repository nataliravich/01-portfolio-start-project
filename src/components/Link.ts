import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a<{ active?: boolean }>`
font-size: 14px;
font-weight: 400;
letter-spacing: 1px;
text-transform: uppercase;
padding: 10px;

position: relative;					/**относительно Link позиционируется линия*/
z-index: 0;								/**Чтобы текст был выше (над) линией цветной*/


&:hover {
	&::before {						/**для псевдоэлемента элемента Link*/
height: 10px;						/**высота синей линии, взяли из Figma*/
	}
}

	&::before {								/**строчный элемент*/
		content: "";						/**всегда указываем*/
		display: inline - block;		/**у строчного элемента не бывает высоты, а нам надо, следовательно меняем отображение*/
		
		background-color: ${theme.colors.accent};		/**взяли из глобальных стилей*/
		position: absolute;				/**относительно ListItem*/
		bottom: 5px;						/**отступили от нижнего края надписи, подобрали в инспекторе*/
		left: 0;								/**доп. отступы не нужны, тк линия на ширину ссылки с паддингами, а не только слова*/
		right: 0;							/**оп. отступы не нужны, тк линия на ширину ссылки с паддингами, а не только слова*/
		z-index: -1;						/**поместили за текст*/
		height: 0;							/**без заданной высоты не работает transition */
		transition: ${theme.animations.transition};	/**плавная анимация */	

	${props => props.active === true && css<{ active?: boolean }>`
	height: 10px;
	`}
}
`