import React from 'react';
import cls from './style.module.scss';
import { useGallery } from '@/hooks';
const allImages = import.meta.glob('@images/**/*.png', { eager: true });
import classNames from 'classnames';

function PreviewImage({ className }) {
	const image = useGallery(allImages)?.obj;

	return (<>
		<div className={classNames([className, cls.wrap])}>
			<div data-img='grad' className='circle-grad' />
			<img data-img='man' src={image['businessman.png']} />
			<img data-img='smile' src={image['smile.png']} />
			<img data-img='pig' src={image['pig.png']} />
			<img data-img='money' src={image['money.png']} />
			<img data-img='light-1' src={image['lightning-1.png']} />
			<img data-img='light-2' src={image['lightning-2.png']} />
		</div>
	</>);
}

export default PreviewImage;