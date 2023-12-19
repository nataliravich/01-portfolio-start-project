import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
	iconId: string
	title: string
	description: string
}

export const Skill = (props: SkillPropsType) => {
	return (
		<StyledSkill>
			<Icon iconId={props.iconId} />
			<SkillTitle>{props.title}</SkillTitle>
			<SkillText>{props.description}</SkillText>
		</StyledSkill>
	);
};

const StyledSkill = styled.div`
width: 30%;
background-color: #ede6e6;
margin: 10px;
`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`

`