import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
	return (
		<StyledMain >
			<Container>
				<FlexWrapper align={"center"} justify={"space-between"}>
					<div>
						<SmallText>Hi There</SmallText>
						<Name>I am <span>Svetlana Dyablo</span></Name>
						<MainTitle>A Web Developer.</MainTitle>
					</div>
					<PhotoWrapper>
						<Photo src={photo} alt="" />
					</PhotoWrapper>
				</FlexWrapper>
			</Container>
		</StyledMain >
	);
};

const StyledMain = styled.section`
min-height: 100vh;
background-color: #c2c491;
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
	}
`

const Photo = styled.img`
width: 350px;
height: 430px;
object-fit: cover;
`

const MainTitle = styled.h1`
font-size: 27px;
font-weight: 400;
`

const Name = styled.h2`
font-family: 'Josefin Sans', sans-serif;  /**'Josefin Sans'- взяли в кавычки, дописали sans-serif*/
font-size: 50px;
font-weight: 700;
letter-spacing: 2.5px;
margin: 10px 0;									/**отступы между строками текста*/

span {
	position: relative;					/**относительно него позиционируется линия*/
	z-index: 0;								/**Чтобы текст был выше (над) линией цветной*/

	&::before {								/**строчный элемент*/
		content: "";						/**всегда указываем*/
		display: inline - block;			/**у строчного элемента не бывает высоты, а нам надо, следовательно меняем отображение*/
		width: 100 %;						/**на всю ширину родителя*/
		height: 20px;						/**взяли из Figma*/
		background-color: ${theme.colors.accent};			/**взяли из глобальных стилей*/

		position: absolute;				/**относительно span*/
		bottom: 0;							/**прижали к нижнему краю*/
		z-index: -1;						/**поместили за текст*/
	}
}
`

const SmallText = styled.h2`
font-size: 14px;
font-weight: 400;
`