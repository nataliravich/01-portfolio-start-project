import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
	return (
		<StyledSkills>
			<Container>
				<SectionTitle>My Skills</SectionTitle>
				<FlexWrapper wrap={"wrap"} justify={"space-between"}>
					<Skill iconId={"code"}
						title={"html5"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
					<Skill iconId={"css"}
						title={"css3"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
					<Skill iconId={"react"}
						title={"React"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
					<Skill iconId={"typeScript"}
						title={"typescript"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
					<Skill iconId={"styledComponents"}
						title={"styled components"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
					<Skill iconId={"figma"}
						title={"WEB DESIgN"}
						description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
				</FlexWrapper >
			</Container>
		</StyledSkills >
	);
};

const StyledSkills = styled.section`
min-height: 100vh;
`