import { useState } from 'react';
import { ArrowButton } from '../arrow-button';
import { Button } from '../button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

export const ArticleParamsForm = () => {
	const [open, setOpen] = useState(false);
	const toggleOpen = () => {
		setOpen(!open);
	};
	return (
		<>
			<ArrowButton open={open} toggleOpen={toggleOpen} />
			<aside className={clsx(styles.container, open && styles.container_open)}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
