import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { HeaderMenu } from "./headerMenu/HeaderMunu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./mobileMenu/MobileMunu";


const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<FlexWrapper justify={"space-between"} align={"center"}>
					<Logo />
					<HeaderMenu menuItems={items} />
					<MobileMenu menuItems={items} />
				</FlexWrapper>
			</Container>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	background: rgba(31, 31, 32, 0.90);
	padding: 20px 0;
	position: fixed;   /**постоянно виден вверху экрана */
	top: 0; 				/**прижат к верхнему краю экрана*/
	left: 0; 			/**приклеен к левому краю экрана*/
	right: 0;			/**тянется на всю ширину экрана*/
	z-index: 99999;	/**большая цифра, чтоб всегда был выше всех остальных элементов*/
`