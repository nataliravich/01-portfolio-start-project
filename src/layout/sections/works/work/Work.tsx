import React from "react";
import styled from "styled-components";
import { Link } from "../../../../components/Link";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
	title: string
	text: string
	src: string
}

export const Work = (props: WorkPropsType) => {
	return (
		<StyledWork>
			<ImagWrapper>
				<Image src={props.src} alt="" />
				<Button>view project</Button>
			</ImagWrapper>
			<Description>
				<Title>{props.title}</Title>
				<Text>{props.text}</Text>
				<Link href="#">demo</Link>
				<Link href="#">code</Link>
			</Description>
		</StyledWork>
	);
};

const StyledWork = styled.div`
background-color: ${theme.colors.secondaryBg};
width: 330px;						/**ширина для мобилки, + точка после которой происходит скидывание*/
//max-width: 540px;					/**ширина для десктопа*/
flex-grow: 1;						/**возможность занимать все свободное пространство, что дает резиновость*/

${Link} {						/**внутри StyledWork есть стилизованная компонента {Link}, кот именно здесь с особенностями*/
	padding: 10px 0;			/**размер линии =ссылка+паддинги. паддинг=0, линия не выступает за слово ссылки*/

	& + ${Link} {
		margin-left: 20px;	/**отступ между ссылками: если у тебя есть слева Link, то у тебя отступ*/
	}
}

@media ${theme.media.desktop} {
	max-width: 540px;					/**ограничение ширины для десктопа только на заданном брейкпоинте*/
}
`

const ImagWrapper = styled.div`
	position: relative;

	&::before {									/**блюр на картинку, строчный элемент*/
		content: "";							/**всегда указываем*/
		position: absolute;					/**относительно PhotoWrapper*/
		top: 0;					/**задали по всем сторонам 0, чтоб элемент растянулся на весь размер родителя, тк должен прижаться ко всем сторонам*/
		bottom: 0;
		right: 0;
		left: 0;	
		background: rgba(0, 0, 0, 0.30); 	/**из Figma*/
		backdrop-filter: blur(4px);			/**из Figma*/		
		opacity: 0;								/**спрятали блюр*/			
	}

	${Button} {					/**поведение стилизованной компоненты только в этой секции*/
		opacity: 0;				/**спрятали кнопку*/
		position: absolute;
		left: 50%;				/**этот +3 пункта = кнопка по центру картинки*/
		top: 50%;
		transform: translate(-50%, -50%);

		&::before { 			/**кнопка без черты, полностью синяя, псевдоэлемент 100% у кнопки в этой секции на картинке*/
			width: 100%;
			height: 100%;
		}
	}

	&:hover {								/**все происходит при ховер*/
	&::before {								/**блюр появляется на картинке при ховере*/	
		opacity: 1;		
	}	
	${Button} {				/**поведение стилизованной компоненты только в этой секции на ховер*/
		opacity: 1;			/**кнопка появляется на картинке при наведениимна ховер*/
	}
}

@media ${theme.media.tablet} {
	&::before {								/**блюр виден на картинке постоянно на планшете и моб*/	
		opacity: 1;		
	}	
	${Button} {			
		opacity: 1;			/**кнопка появляется на картинке постоянно на планшете и моб*/
	}
}
`

const Image = styled.img`
width: 100%;
height: 260px;
object-fit: cover;
`

const Description = styled.div`
padding: 25px 20px;					/**отступы внутри див, чтоб текст отлип от краев */
`

const Title = styled.h3`
`

const Text = styled.p`
margin: 14px 0 10px;					/**отступы между элементами, от среднего вверх и вниз*/
`