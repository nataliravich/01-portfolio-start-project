import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn = () => {

	const [showBtn, setshowBtn] = useState(false)		/**по умолчанию кнопка скрыта */
	useEffect(() => {
		window.addEventListener("scroll", () => { 		/**1 параметр = f, кот будет что-то делать*/
			if (window.scrollY > 200) {						/**2 параметр =зависимости для f= переменные при изменении кот вызывается f*/
				setshowBtn(true)
			} else {
				setshowBtn(false)
			}
		})
	}, [])

	return (

		<>											{/**условный рендеринг, надо написать логику в {}, но чтоб не было родителя */}
			{showBtn && (						/**оператор сравнения=&&, кот возвращает разметку, если true*/
				<StyledGoTopBtn onClick={() => { scroll.scrollToTop() }}>
					<Icon iconId={"arrowGoTop"} height={"30"} width={"30"} viewBox={"0 0 30 30"} />
				</StyledGoTopBtn>
			)}
		</>
	);
};

const StyledGoTopBtn = styled.button`
background-color: rgba(0, 0, 0, 0.3);
padding: 8px;
position: fixed;
right: 30px;
bottom: 30px;
`