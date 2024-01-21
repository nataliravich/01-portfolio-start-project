import React from "react";
import photo from "../../../assets/images/photo.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {			/**сделали функциональной компонентой*/
	return (
		<S.Main id={"home"} >
			<Container>
				<FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>		{/**сейчас они в строку, но могут скидываться, потому что wrap*/}
					<div>
						<S.SmallText>Hi There</S.SmallText>
						<S.Name>I am <span>Svetlana Dyablo</span></S.Name>
						{/*<S.MainTitle>A Web Developer.</S.MainTitle>*/}
						<S.MainTitle>
							<p>A Web Developer.</p>							{/**спрятанный заголовок для SEO */}
							<Typewriter											/**с помощью этой компоненты будет печататься текст */
								options={{										/**атрибут компоненты */
									strings: ['A Web Developer.'],			/**апечатаются такие-то строки */
									autoStart: true,							/**автоматически запускается, если true*/
									loop: true,									/**бесконечно будет печататься и стираться, если true*/
									delay: 150									/**задержка печатания*/
								}}
							/>
						</S.MainTitle>
					</div>
					<Tilt>														{/**компонента от библиотеки, фото двигается*/}
						<S.PhotoWrapper>
							<S.Photo src={photo} alt="" />
						</S.PhotoWrapper>
					</Tilt>
				</FlexWrapper>
			</Container>
		</S.Main >
	);
};

