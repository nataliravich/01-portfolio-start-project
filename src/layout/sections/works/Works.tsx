import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from './../../../assets/images/proj-1.png'
import timerImg from "./../../../assets/images/proj-2.png"
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles";
import { AnimatePresence, motion } from "framer-motion";

//const tabsItems = ["All", "landing page", "React", "spa"]

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
	{
		title: "All",
		status: "all"						/**status=type из const worksData*/
	},
	{
		title: "landing page",
		status: "landing"
	},
	{
		title: "React",
		status: "react"
	},
	{
		title: "spa",
		status: "spa"
	},
]

const worksData = [
	{
		title: "Social Network",
		src: socialImg,
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		type: "spa",							/**type=status из const tabsItems*/
		id: 1										/**для библиотеки */
	},

	{
		title: "Timer",
		src: timerImg,
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.",
		type: "react",
		id: 2
	}
]

export const Works: React.FC = () => {
	const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
	let filteredWorks = worksData

	if (currentFilterStatus === "landing") {
		filteredWorks = worksData.filter(work => work.type === "landing")
	}

	if (currentFilterStatus === "react") {
		filteredWorks = worksData.filter(work => work.type === "react")
	}

	if (currentFilterStatus === "spa") {
		filteredWorks = worksData.filter(work => work.type === "spa")
	}

	function changeFilterStatus(value: TabsStatusType) {
		setCurrentFilterStatus(value)
	}


	return (
		<S.Works id={"works"}>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TabMenu tabsItems={tabsItems}
					changeFilterStatus={changeFilterStatus}
					currentFilterStatus={currentFilterStatus} />
				<FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>  {/**wrap заставляет карточки скидываться */}

					<AnimatePresence>							{/**компонента библиотеки для анимации появления/исчезновения проектов */}
						{filteredWorks.map((w) => {
							return (
								<motion.div						/**анимация для элемента */
									style={{ width: "330px", flexGrow: 1, maxWidth: "540px" }}	/**вынесли из Works_Styles.ts */
									layout
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									key={w.id}
								>
									<Work
										title={w.title}
										src={w.src}
										text={w.text}
										key={w.id}
									/>
								</motion.div>
							)
						})}
					</AnimatePresence>

				</FlexWrapper>
			</Container>
		</S.Works >
	);
};

