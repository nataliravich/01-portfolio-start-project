import React from "react";
import styled from "styled-components";
import { Link } from "../../../../components/Link";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
	tabsItems: Array<{ status: TabsStatusType, title: string }>
	changeFilterStatus: (value: TabsStatusType) => void
	currentFilterStatus: string
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
	return (
		<StyledTabMenu>
			<ul>
				{props.tabsItems.map((item, index) => {
					return <ListItem key={index}>
						<Link active={props.currentFilterStatus === item.status} as={"button"} onClick={() => { props.changeFilterStatus(item.status) }}>{item.title}</Link>
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


