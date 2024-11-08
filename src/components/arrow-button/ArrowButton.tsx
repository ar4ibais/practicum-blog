import clsx from 'clsx';
import arrow from '../../images/arrow.svg';

import styles from './ArrowButton.module.scss';

type Props = {
	open: boolean;
	toggleOpen: () => void;
};

export const ArrowButton = ({ open, toggleOpen }: Props) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<>
			<div
				role='button'
				aria-label='Открыть/Закрыть форму параметров статьи'
				tabIndex={0}
				className={styles.container}>
				<img
					src={arrow}
					alt='иконка стрелочки'
					className={open ? styles.arrow : styles.arrow_open}
					onClick={toggleOpen}
				/>
			</div>
		</>
	);
};
