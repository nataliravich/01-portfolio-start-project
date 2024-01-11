import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMobileMenu>
			<BurgerButton isOpen={true}>					{/**задали атрибут для нажатия*/}
				<span></span>
			</BurgerButton>
			<MobileMenuPopup isOpen={true}>				{/**задали атрибут для нажатия*/}
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
			</MobileMenuPopup>
		</StyledMobileMenu >
	);
};

const StyledMobileMenu = styled.nav`
	display: none;																/**меню всегда спрятано*/
	@media ${theme.media.tablet} {										/**на дисплеях планшета видно*/
		display: block;
	}
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>` 		/**ждет, что придет атрибут клик/нет*/
position: fixed;																/**на все окно браузера c учетом размеров ниже*/
top: 0;
bottom: 0;
right: 0;
left: 0;
z-index: 9999;																/**над всеми окнами*/
background-color: rgba(31, 31, 32, 0.90);
display: none;

${props => props.isOpen && css<{ isOpen: boolean }>`				/**действия для меню, если оно открыто*/
	display: flex;																/**flexфми выровняли меню по центру экрана*/
	justify-content: center;
	align-items: center;
`}

	ul {											/**перенесли из StyledMobileMenu, тк теперь лежит в этой компоненте*/
		display: flex;
		flex-direction: column;				/**переписали меню на вертикальную*/
		align-items: center;					/**выровняли по центру*/
		justify-content: center;			/**выровняли по центру*/
		gap: 30px;
		
	}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`				/**ждет, что придет атрибут клик/нет*/
position: fixed;										/**кнопка постоянно видна на странице*/
top: -100px;											/**в Figma кнопка 200х200 при этом 3/4 выходят за экран*/
right: -100px;
width: 200px;
height: 200px;
z-index: 9999999;

span {													/**центральная полосочка в кнопке-бургер*/
	display: block;									/**превратили span в блочный элемент*/
	width: 36px;
	height: 2px;
	background-color: ${theme.colors.font};

	position: absolute;								/**спозиционирован относительно BurgerButton*/
	left: 40px;
	bottom: 50px;

	${props => props.isOpen && css<{ isOpen: boolean }>`				/**действия для книпки, если она нажата*/
	background-color: rgba(255, 255, 255, 0);			/**прозрачный цвет, но не через opacity, чтоб ост эл не стали прозрачными, тк наход внутри спана*/
	`}

	&::before {											/**верхняя полосочка в кнопке-бургер*/
		content: "";
		display: block;
		width: 36px;
		height: 2px;
		background-color: ${theme.colors.font};
		position: absolute;
		transform: translateY(-10px);				/**подняли на 10рх вверх полосочку относительно центральной*/
	
		${props => props.isOpen && css<{ isOpen: boolean }>`				/**действия для верхней полосочки кнопки при нажатии*/
		transform: rotate(-45deg) translateY(0);			/**опустится и развернется на 45гр против часовой стрелки*/
		`}
	}
	
	&::after {											/**нижняя полосочка в кнопке-бургер*/
		content: "";
		display: block;
		width: 24px;
		height: 2px;
		background-color: ${theme.colors.font};
		position: absolute;
		transform: translateY(10px);				/**опустили на 10рх вниз полосочку относительно центральной*/
	
		${props => props.isOpen && css<{ isOpen: boolean }>`				/**действия для книпки, если она нажата*/
		transform: rotate(45deg) translateY(0);		/**опустится и развернется на 45гр против часовой стрелки*/
		width: 36px;											/**ширина увеличится, тк была короче*/
		`}
	}
}
`

const Link = styled.a`
text-align: center;
font-family: 'Josefin Sans', sans - serif;
font-size: 30px;
font-weight: 400px;
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