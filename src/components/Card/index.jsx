import React from 'react';
import cls from './style.module.scss';
import { useGallery } from '@/hooks';

const allSmiles = import.meta.glob('@images/smile-*.png', { eager: true })

function Card({ icon = '1', text = "some text" }) {
	const smile = useGallery(allSmiles)?.obj;

	return (<>
		<div className={cls.card}>
			<div className={cls.card__decor} />
			<div className={cls.card__content}>
				<img src={smile[`smile-${icon}.png`]} className={cls.card__smile} />
				<p className={cls.card__text}>{text}</p>
			</div>
		</div>
	</>);
}

export default Card;