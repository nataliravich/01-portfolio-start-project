import styled from "styled-components"
import { theme } from "../../../styles/Theme"


const Contact = styled.section`
position: relative;
`

const Form = styled.form`
max-width: 540px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center; 			/**выравнивание  по центру по второстепенной оси = горизонталь*/
gap: 16px;							/**отступ и до копнопки тоже, тк она часть формы*/
margin: 0 auto;

textarea {					/**у нас input, кот ведет себя как textarea, поэтому обращаемся к ниму так. образом*/
	resize: none;			/**нельзя изменять размер*/
	height: 155px;			/**из Figma*/
}
`

const Field = styled.input`
width: 100%;						/**теперь ширина подстраивается и = ширине родителя= StyledForm = max-width: 540px;*/
border: 1px solid ${theme.colors.borderColor};	/**для input обязательно оставлять*/
background-color: ${theme.colors.secondaryBg};	/**не background, а background-color*/
padding: 7px 15px;				/**Высоту элементу не задаем, но делаем отступы внутри*/

font-family: "Poppins", sans-serif;		/**для input обязательно оставлять*/
font-size: 12px;
font-weight: 400;
letter-spacing: 0.6px;
color: ${theme.colors.font};		/**сами пишем, в Firma инфы нет, там placeholder*/

&::placeholder {										/**тк псевдоэлемент, то стили прописываются таким образом*/
	color: ${theme.colors.placeholderColor};	/**из Firma = цвет для текста*/
	text-transform: capitalize;					/**каждое слово с большой буквы, тк у нас по 1, то норм*/
}

&:focus-visible {							/**граница при щелканье на элемент + при Tab*/
	outline: 1px solid ${theme.colors.borderColor};  /**цвет=border, поэтому почти невидимо*/
}
`

export const S = {   /**S - объект, в кот сидят все компоненты для Header через запятую */
	Contact,
	Form,
	Field
}