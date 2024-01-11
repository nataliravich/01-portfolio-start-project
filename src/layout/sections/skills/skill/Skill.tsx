import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
	iconId: string
	title: string
	description: string
}

export const Skill = (props: SkillPropsType) => {
	return (
		<StyledSkill>
			<FlexWrapper direction={"column"} align={"center"}>
				<IconWrapper>
					<Icon iconId={props.iconId} />
				</IconWrapper>
				<SkillTitle>{props.title}</SkillTitle>
				<SkillText>{props.description}</SkillText>
			</FlexWrapper>
		</StyledSkill>
	);
};

const StyledSkill = styled.div`
width: 380px;
padding: 62px 20px 40px;				/**Отступы внутри каждой карточки до контента*/
`
export const IconWrapper = styled.div`		/**обертка для иконки, чтоб сделать ромб*/
	position: relative;					/**относительно него позиционируется ромб*/

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