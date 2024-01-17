import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from "./Slider_Styles";
import "./../../styles/slider.css"


type SlidePropsType = {
	text: string
	userName: string
}

const Slide = (props: SlidePropsType) => {
	return (
		<S.Slide>
			<S.Text>{props.text}</S.Text>
			<S.Name>@{props.userName}</S.Name>
		</S.Slide>
	)
}

const items = [
	<Slide userName={"petr ivanow"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
	<Slide userName={"ivan ivanow"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
	<Slide userName={"slava ivanow"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />
];

export const Slider = () => (						/**слайдер из библиотеки*/
	<S.Slider>
		<AliceCarousel
			mouseTracking								/**мышкой ухватился и потащил сдайды - переключение без буллитов*/
			items={items}								/**сами слайды*/
		/>
	</S.Slider>
);