import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import cls from './style.module.scss';
import logo_svg from '@icons/logo.svg';
import { Button } from '@/components';

function Header(props) {
	const [menuOpen, setMenuOpen] = useState(false)

	const openMenu = () => setMenuOpen(true);
	const closeMenu = () => setMenuOpen(false);
	const toggleMenu = () => setMenuOpen(prev => !prev);


	useEffect(() => {
		document.addEventListener('click', closeMenu)

		return () => {
			document.removeEventListener('click', closeMenu);
		}
	}, [])


	return (<>
		<header className={cls.header} onClick={e => e.stopPropagation()}>
			<div className={classNames(["container", cls.header__grid])}>
				<a href="" className={cls.header__logo} data-active={menuOpen}>
					<img src={logo_svg} />
				</a>
				<div data-active={menuOpen} className={cls.header__block}>
					<nav className={cls.header__nav}>
						<a href="#top" onClick={closeMenu}>Главная</a>
						<a href="#info" onClick={closeMenu}>Что даст обучение</a>
					</nav>
					<Button styleType="outline" fontSize="16px">Личный кабинет</Button>
				</div>
				<div className={cls.header__hamburger} data-active={menuOpen} onClick={toggleMenu} />
			</div>
		</header>
	</>);
}

export default Header;