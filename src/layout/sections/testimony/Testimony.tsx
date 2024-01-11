import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../skills/skill/Skill";


export const Testimony = () => {
	return (
		<StyledTestimony>
			<SectionTitle>Testimony</SectionTitle>
			<FlexWrapper direction={"column"} align={"center"}>
				<IconWrapper>                                                {/*export из Skill.tsx*/}
					<Icon iconId={"quote"} />
				</IconWrapper>
				<Slider />
			</FlexWrapper>
		</StyledTestimony>
	);
};

const StyledTestimony = styled.section`
min-height: 50vh;

${IconWrapper} {					/*сам exportирован из Skill.tsx, но в этой секции есть отступы*/
	margin: 40px 0 72px;
}
`