import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";

export const Slider = () => {
	return (
		<StyledSlider>
			<FlexWrapper>
				<Slide>
					<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
					<Name>@ivan ivanow</Name>
				</Slide>
			</FlexWrapper>
			<Pagination>
				<span> </span>
				<span className={"active"}> </span>
				<span> </span>
			</Pagination>
		</StyledSlider >
	);
};

const StyledSlider = styled.div`
	border: 1px solid red;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	text-align: center;
`

const Slide = styled.div`
		text-align: center;
`

const Text = styled.p`		/**стиллизован в глобальных стилях*/
	
`

const Name = styled.span`
font-family: 'Josefin Sans', sans-serif;
font-size: 16px;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
margin: 22px 0 42px;			/**top и bottom не будет работать, тк span*/
display: inline-block; 		/**чтоб работали margin, меняем вид*/
`

const Pagination = styled.div`		/**буллиты слайдера*/
	span {
		display: inline-block;
		width: 7px;
		height: 7px;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 20px;

		& + span {			/**для всех span, кот будут идти после span отступ слева*/
			margin-left: 5px;
		}

		&.active {			/**активный буллит*/
			background-color: ${theme.colors.accent};
			width: 20px;
		}
	}
`


