import React, { ElementRef, useRef } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contact_Styles";
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
	const form = useRef<ElementRef<'form'>>(null);				/**отправка формы */

	const sendEmail = (e: any) => {									/**здесь сидит содержимое формы и позже мы будем его очищать*/
		e.preventDefault();

		if (!form.current) return										/**если false, то f выполняться не будет*/

		emailjs.sendForm('service_q6pusyy', 'template_jok1wxl', form.current, 'FYkkFkHsbY4N5p4ch') /**из созданных шаблонов */
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		e.target.reset()													/**очистили форму*/
	};

	return (
		<S.Contact id={"contact"}>
			<Container>
				<SectionTitle>Contact</SectionTitle>
				<S.Form ref={form} onSubmit={sendEmail}>			{/**вызов функции */}
					<S.Field required placeholder={"name"} name={'user_name'} />
					<S.Field required placeholder={"email"} name={'email'} />
					<S.Field required placeholder={"subject"} name={'subject'} />
					<S.Field required placeholder={"message"} as={"textarea"} name={'message'} />
					<Button type="submit">Send message</Button>
				</S.Form>
			</Container>
		</S.Contact>
	);
};
