import React from "react";
import styled from "styled-components";
import { Link } from "../../../../components/Link";

export const TabMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledTabMenu>
			<ul>
				{props.menuItems.map((item: string, index: number) => {
					return <ListItem key={index}>
						<Link href="">{item}</Link>
					</ListItem>
				})}
			</ul>
		</StyledTabMenu>
	);
};

const StyledTabMenu = styled.nav`
//margin-bottom: 40px;				/**отступ от навигации до карточек*/
	ul {
		display: flex;
		//gap: 20px;				/**не нужны, тк space-between + max-width */
		justify-content: space-between;
		max-width: 352px;			/**из Figma; + width: 100% = резиновость*/
		width: 100%;				/**+ max-width: ..px; = резиновость*/
		border: 1px solid red;
		margin: 0 auto 40px;			/**выравниваем по центру + отступ от меню до карточек*/
	}
`

const ListItem = styled.li`
	
`


