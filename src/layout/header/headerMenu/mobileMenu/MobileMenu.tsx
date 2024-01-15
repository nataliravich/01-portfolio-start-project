import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";


export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
	return (
		<S.MobileMenu>
			<S.BurgerButton isOpen={false}>					{/**задали атрибут для нажатия*/}
				<span></span>
			</S.BurgerButton>
			<S.MobileMenuPopup isOpen={false}>				{/**задали атрибут для нажатия*/}
				<Menu menuItems={props.menuItems} />
			</S.MobileMenuPopup>
		</S.MobileMenu >
	);
};
