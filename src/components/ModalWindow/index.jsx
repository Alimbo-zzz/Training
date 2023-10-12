import React, { useRef, useEffect } from 'react';
import cls from './style.module.scss';
import { Button } from '@/components';


function ModalWindow({ isOpen, setter }) {
	const formRef = useRef(null);
	const closeModal = () => setter(false);
	const formReset = () => formRef.current?.reset();

	useEffect(() => {
		if (isOpen === true) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		}
	}, [isOpen])

	const sendRequest = (e) => {
		e.preventDefault();
		formReset();
		closeModal();
		console.log(e)
	};

	return (<>
		<div className={cls.modal} data-open={isOpen} onMouseUp={closeModal} >
			<form ref={formRef} data-open={isOpen} onMouseUp={e => e.stopPropagation()} className={cls.modal__form} autoComplete='off' onSubmit={sendRequest}>
				<button type='reset' className={cls.modal__close} onClick={closeModal}>×</button>
				<h3 className={cls.modal__title}>Начни прямо сейчас!</h3>
				<p className={cls.modal__text}>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
				<input className={cls.modal__inp} required placeholder='Ваш email' type="email" name="email" autoComplete='newPassword' />
				<Button type='submit'>Отправить</Button>
			</form>
		</div>
	</>);
}

export default ModalWindow;