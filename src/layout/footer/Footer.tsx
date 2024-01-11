import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

export const Footer = () => {
	return (
		<StyledFooter>
			<FlexWrapper direction={"column"} align={"center"}>
				<Name>Svetlana</Name>
				<SocialList>
					<SocialItem>
						<SocialLink>
							<Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"} />
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"} />
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"} />
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"} />
						</SocialLink>
					</SocialItem>
				</SocialList>
				<Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
			</FlexWrapper>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
background-color: ${theme.colors.primaryBG};
padding: 40px 0;
`

const Name = styled.span`
font-family: "Josefin Sans", sans-serif;
font-size: 22px;
font-weight: 700;
letter-spacing: 3px;
`

const SocialList = styled.ul`
display: flex;
gap: 20px;
margin: 30px 0;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`							/**строчный элемент, не можем задавать W и H, из Figma при выделении группы*/
border-radius: 50%;										/**вместо px 50% точно = круг*/
background-color: rgba(255, 255, 255, 0.10);	/**добавили -color*/
width: 35px;												/**из Figma*/
height: 35px;												/**из Figma*/
display: flex;												/**простой способ выравнивания строчных элементов родители по центру + заработали W и H*/
justify-content: center;
align-items: center;

color: ${theme.colors.accent};						/**цвет для значка иконки*/

&:hover {
	color: ${theme.colors.primaryBG};				/**цвет для hover*/
	transform: translateY(-4px);						/**Подпрыгивает вверх*/
	background-color: ${theme.colors.accent};		/**меняет цвет на hover*/
}
`

const Copyright = styled.small`
font-size: 12px;
font-weight: 400;
text-align: center;
opacity: 0.5;
`