import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";


export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
	const [menuIsOpen, setmenuIsOpen] = useState(false);
	const onBurgerBtnClick = () => { setmenuIsOpen(!menuIsOpen) }				/** ! - менеяет значение переменной на противоположное*/
	return (
		<S.MobileMenu>
			<S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>	{/**задали атрибут для нажатия, передаем,что в переменной: false или true*/}
				<span></span>
			</S.BurgerButton>

			<S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => { setmenuIsOpen(false) }}>		{/**закрывает меню при нажатии в любом месте*/}
				<Menu menuItems={props.menuItems} />
			</S.MobileMenuPopup>
		</S.MobileMenu >
	);
};
