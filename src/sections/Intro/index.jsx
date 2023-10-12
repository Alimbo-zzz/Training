import React, { useState, useEffect } from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';
import { Header, PreviewImage, ModalWindow, Button } from '@/components';

import circle_img from '@images/circle-4.png';


function Intro(props) {
	const [windowOpen, setWindowOpen] = useState(false);

	const openModal = () => setWindowOpen(true);


	return (<>
		<section id='intro' className={cls.intro}>
			<div className={classNames(['circle-grad', cls.intro__decor])} />
			<Header />
			<div className={classNames(['container', cls.intro__grid])}>
				<h1 className={cls.intro__title} data-aos="fade-right">
					Не упусти <br /> возможность войти <br /> в <b>прибыльную нишу</b>
				</h1>
				<p className={cls.intro__text} data-aos="fade-up">Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
				<Button onClick={openModal} data-aos="fade-left" data-btn>Начать зарабатывать на NFT</Button>

				<PreviewImage className={cls.intro__preview} />
				<img src={circle_img} data-decor='circle' data-aos="zoom-in" />
			</div>
			<ModalWindow isOpen={windowOpen} setter={setWindowOpen} />
		</section>
	</>);
}

export default Intro;