import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Main = styled.section`
min-height: 100vh;
display: flex;						/**чтоб секция по умолчанию растянулась на всю высоту экрана*/
`

const PhotoWrapper = styled.div`
position: relative;
z-index: 0;								/**Чтобы фото было выше (над) линией цветной*/

	&::before {													/**строчный элемент*/
		content: "";											/**всегда указываем*/
		width: 360px;											/**взяли из Figma*/
		height: 470px;											/**взяли из Figma*/
		border: 5px solid ${theme.colors.accent};		/**взяли из Figma и глобальных стилей*/

		position: absolute;				/**относительно PhotoWrapper*/
		top: -24px;							/**подняли над верхним краем*/
		left: 24px;							/**отодвинули от левого края*/
		z-index: -1;						/**поместили за фото*/
		
		@media ${theme.media.mobile} {			/**уменьшили размер рамки у фото и отступы до фото для мобилки*/
			width: 314px;
			height: 414px;
			top: -17px;
			left: 20px;
		}
	}

	@media ${theme.media.mobile} {			/**уменьшили размер рамки у фото и отступы до фото для мобилки*/
	margin-top: 65px;						/**Отступ для мобильной версии*/
	}
`

const Photo = styled.img`
width: 350px;
height: 430px;
object-fit: cover;
margin-right: 20px;							/**нет в Figma, сами дописали для адаптива, тк фото выпадало из контейнера*/

@media ${theme.media.mobile} {				/**уменьшили размер фото для мобилки*/
	width: 310px;
	height: 380px;
}
`

const MainTitle = styled.h1`
${font({ weight: 400, Fmax: 27, Fmin: 20 })}		/**с помощью миксина передаем закомментированные свойства для десктопа + минимальный шрифт для мобилки*/
//font-size: 27px;
//font-weight: 400;
`

const Name = styled.h2`
${font({ family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36 })}		/**! шрифт в доп кавычкм, с помощью миксина пеердаем закомментированные свойства для десктопа + минимальный шрифт для мобилки*/
//font-family: 'Josefin Sans', sans-serif;  /**'Josefin Sans'- взяли в кавычки, дописали sans-serif*/
//font-size: 50px;
//font-weight: 700;
letter-spacing: 2.5px;
margin: 10px 0;									/**отступы между строками текста*/

span {
	position: relative;					/**относительно него позиционируется линия*/
	z-index: 0;								/**Чтобы текст был выше (над) линией цветной*/
	white-space: nowrap;				/**не переносить по словам*/

	&::before {								/**строчный элемент*/
		content: "";						/**всегда указываем*/
		display: inline - block;			/**у строчного элемента не бывает высоты, а нам надо, следовательно меняем отображение*/
		width: 100%;						/**на всю ширину родителя*/
		height: 20px;						/**взяли из Figma*/
		background-color: ${theme.colors.accent};			/**взяли из глобальных стилей*/

		position: absolute;				/**относительно span*/
		bottom: 0;							/**прижали к нижнему краю*/
		z-index: -1;						/**поместили за текст*/
	}
}

@media ${theme.media.mobile} {
	margin: 15px 0 22px;
}
`

const SmallText = styled.h2`
font-size: 14px;
font-weight: 400;
`

export const S = {   /**S - объект, в кот сидят все компоненты для Header через запятую */
	Main,
	PhotoWrapper,
	Photo,
	MainTitle,
	Name,
	SmallText
}