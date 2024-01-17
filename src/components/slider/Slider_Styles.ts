import styled from "styled-components"
import { theme } from "../../styles/Theme"


const Slider = styled.div`
	border: 1px solid red;
	max-width: 500px;
	width: 100%;				/**добавили, чтоб слайдер не глючил */
	display: flex;
	flex-direction: column;
	text-align: center;
`

const Slide = styled.div`
		text-align: center;
`

const Text = styled.p`		/**стиллизован в глобальных стилях*/
	
`

const Name = styled.span`
font-family: 'Josefin Sans', sans-serif;
font-size: 16px;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
margin: 22px 0 32px;			/**top и bottom не будет работать, тк span*/
display: inline-block; 		/**чтоб работали margin, меняем вид*/
`

const Pagination = styled.div`		/**буллиты слайдера, можно удалять*/
	span {
		display: inline-block;
		width: 7px;
		height: 7px;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 20px;

		& + span {			/**для всех span, кот будут идти после span отступ слева*/
			margin-left: 5px;
		}

		&.active {			/**активный буллит*/
			background-color: ${theme.colors.accent};
			width: 20px;
		}
	}
`

export const S = {   /**S - объект, в кот сидят все компоненты для Header через запятую */
	Slider,
	Slide,
	Text,
	Name,
	Pagination,
}