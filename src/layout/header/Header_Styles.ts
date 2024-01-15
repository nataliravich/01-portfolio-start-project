import styled from "styled-components";

const Header = styled.header`
	background: rgba(31, 31, 32, 0.90);
	padding: 20px 0;
	position: fixed;   /**постоянно виден вверху экрана */
	top: 0; 				/**прижат к верхнему краю экрана*/
	left: 0; 			/**приклеен к левому краю экрана*/
	right: 0;			/**тянется на всю ширину экрана*/
	z-index: 99999;	/**большая цифра, чтоб всегда был выше всех остальных элементов*/
`
export const S = {   /**S - объект, в кот сидят все компоненты для Header через запятую */
	Header
}