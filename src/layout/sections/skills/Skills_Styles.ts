import styled from "styled-components"
import { theme } from "../../../styles/Theme"


// Skills
const Skills = styled.section`
position: relative;
`

// Skill
const Skill = styled.div`
width: 330px;								/**ширину переписали из моб макета, чтоб улучшить адаптив*/
flex-grow: 1;								/**кажд скилл занимает все свободное пространство, соответств не прижимается к краям*/
padding: 42px 20px 52px;				/**Отступы внутри каждой карточки до контента*/
@media ${theme.media.mobile} {		/**Отступы на мобилке поменялись*/
	padding: 62px 0 40px;
}
`
export const IconWrapper = styled.div`		/**обертка для иконки, чтоб сделать ромб*/
	position: relative;					/**относительно IconWrapper позиционируется ромб*/

	&::before {								/**серый ромб, строчный элемент*/
		content: "";						/**всегда указываем*/
		display: inline - block;		/**у строчного элемента не бывает высоты, а нам надо, следовательно меняем отображение*/
		width: 80px;						/**взяли из Figma*/
		height: 80px;						/**взяли из Figma*/
		background-color: rgba(255, 255, 255, 0.10);	/**взяли из Figma*/
		transform: rotate(45deg) translate(-50%, -50%);	/**rotate из Figma, translate здесь, чтоб не перезатереть, выравнивает ромб в центре*/

		position: absolute;				/**относительно IconWrapper*/
		left: 50%;							/**отодвинули + transform: translate(-50%, -50%); в центр*/
		top: 50%;							/**отодвинули + transform: translate(-50%, -50%); в центр*/
		transform-origin: top left;	/**точка, вокруг которой происходит трансформация, те считается центром*/
	}
`

const SkillTitle = styled.h3`
	margin: 70px 0 15px;					/**Отступы между элементами контента, задали центральному элементу*/
	text-transform: uppercase;
`

const SkillText = styled.p`
	text-align: center;					/**Выровнили текст внутри div*/
`

export const S = {   /**S - объект, в кот сидят все компоненты для Header через запятую */
	Skills,
	Skill,
	IconWrapper,
	SkillTitle,
	SkillText
}