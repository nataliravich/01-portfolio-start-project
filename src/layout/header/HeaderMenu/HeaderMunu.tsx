import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledHeaderMenu>
			<ul>
				{props.menuItems.map((item: string, index: number) => {
					return <ListItem key={index}>
						<Link href="">
							{item}
							<Mask>
								<span>{item}</span>
							</Mask>
							<Mask>
								<span>{item}</span>
							</Mask>
						</Link>
					</ListItem>
				})}
			</ul>
		</StyledHeaderMenu>
	);
};

const StyledHeaderMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
		justify-content: center;
	}

	@media ${theme.media.tablet} {
		display: none;
	}
`

const Link = styled.a`
text-align: center;
font-family: 'Josefin Sans', sans-serif;
font-size: 30px;
font-weight: 400;
color: transparent;						/**прозрачный цвет для item, без которого схлопнется меню*/
`

const Mask = styled.span`				/**можно div*/
position: absolute;						/**относительно li*/
top: 0;										/**прижат к верхнему краю li*/
left: 0;										/**прижат к левому краю li*/
display: inline-block;					/**тк у нас span, а надо задать высоту, то меняем*/
height: 50%;								/**50%, потому что это половина маски, кот будет уезжать в 1 из сторон*/
overflow-y: hidden;						/**прячим все, что в 50% не влазит*/
//outline: 1px solid red;					/**временная граница, чтоб видеть наш элемент*/
color: ${theme.colors.accent};		/**из глобальных стилей*/

	& + & {					/**синтаксис SASS .. Амперсанд+амперсанд (&=ссылка на родительский селектор. Вместо него подставляется родитель) ..  + - для смежных селекторы, те для 2ого элемента действуют все свойства ниже*/
	top: 50%;				/**у него паддинг будет 50%=верх будет на середине блочка ссылки*/

	span {									/**для 2ого спана*/
		display: inline-block;			/**для того, чтоб transform применился, тк для спана он не работает*/
		transform: translateY(-50%);	/**подняли второй элемент на 50% и увидели низ записи*/
	}
}
`

const ListItem = styled.li`
position: relative;						/**относительно li мы будем располагать наших 2 масочных элемента*/

&::before {						/**строчный элемент*/
	content: "";				/**всегда указываем*/
	display: inline-block;		/**у строчного элемента не бывает высоты, а нам надо, следовательно меняем отображение*/
	height: 3px;					/**померили в Figma*/
	background-color: ${theme.colors.accent};		/**взяли из глобальных стилей*/

	position: absolute;			/**позиционирование уже есть, поэтому объявляем сразу*/
	top: 50%;						/**Задаем верх элемента*/
	left: -10px;					/**чтобы края выходили за буквы + не задаем четкую ширину, тк все слова разной длины*/
	right: -10px;					/**чтобы края выходили за буквы*/
	z-index: 1;						/**чтобы была поверх*/

	transform: scale(0);			/**псевдоэлемент не виден*/
}

&:hover {
	&::before {
		transform: scale(1);		/**псевдоэлемент появляется на hover*/
	}	

	${Mask} {
		transform: skewX(12deg) translateX(5px);	
		color: ${theme.colors.font};					/**смена цвета при наведении, цвет из глобальных стилей*/

		& + ${Mask} {										/**для 2ой маски*/
		transform: skewX(12deg) translateX(-5px);
	}
	}
}
`