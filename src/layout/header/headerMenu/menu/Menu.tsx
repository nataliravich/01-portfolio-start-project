import React from "react";
import { S } from "./../HeaderMenu_Styles";

//const items = ["Home", "Skills", "Works", "Testimony", "Contact"]
const items = [
	{
		title: "Home",
		href: "home"				/*=id*/
	},

	{
		title: "Skills",
		href: "skills"				/*=id*/
	},

	{
		title: "Works",
		href: "works"				/*=id*/
	},

	{
		title: "Testimony",
		href: "testimony"				/*=id*/
	},

	{
		title: "Contact",
		href: "contact"				/*=id*/
	}
]

export const Menu: React.FC = () => {
	return (
		<ul>
			{items.map((item, index) => {
				return <S.MenuItem key={index}>
					<S.NavLink
						activeClass="active"	/**ссылка меню активна, если раздел отображается на экране */
						to={item.href}			/**вместо href=to, тк на базе { Link } from "react-scroll" */
						smooth={true}			/**отвечает за плавность скролла*/
						spy={true}				/**необходимо, чтоб библиотека понимала, что выбран раздел меню */
					>
						{item.title}
						<S.Mask>
							<span>{item.title}</span>
						</S.Mask>
						<S.Mask>
							<span>{item.title}</span>
						</S.Mask>
					</S.NavLink>
				</S.MenuItem>
			})}
		</ul >
	)
}

