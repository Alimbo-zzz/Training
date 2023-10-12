import React, { useState } from 'react';
import classNames from 'classnames';
import cls from './style.module.scss';
import { Card } from '@/components';
import circle_img_1 from '@images/circle-1.png';
import circle_img_2 from '@images/circle-2.png';
import circle_img_3 from '@images/circle-3.png';

function Info(props) {
	const [cards] = useState([
		{ icon: "1", text: "Откроешь свой первый криптокошелек и научишься с ним работать" },
		{ icon: "2", text: "Поймёшь, как выбирать правильные дропы" },
		{ icon: "3", text: "Построишь план по быстрому приумножению заработанных средств" },
		{ icon: "4", text: "Узнаешь кто такие холдеры и флипперы" },
	])


	return (<>
		<section id='info' className={cls.info} >
			<div className={classNames(["container", cls.info__grid])}>
				<h2 data-aos="zoom-in" className={cls.info__title}>Что даст тебе обучение?</h2>

				<ul className={cls.info__list}>
					{cards.map((el, i) => (
						<li className={cls.info__item} key={i} data-aos="flip-up" data-aos-delay={(i + 1) * 100}>
							<Card {...el} />
						</li>
					))}
				</ul>

				<img data-circle='1' src={circle_img_1} />
				<img data-aos="zoom-in" data-circle='2' src={circle_img_2} />
				<img data-aos="zoom-in" data-circle='3' src={circle_img_3} />

				<div data-grad='1' className={classNames(['circle-grad', cls.info__grad])} />
				<div data-grad='2' className={classNames(['circle-grad', cls.info__grad])} />
			</div>
		</section>
	</>);
}

export default Info;