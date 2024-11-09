import { useState } from 'react';
import { ArrowButton } from '../arrow-button';
import { Button } from '../button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Spacing } from '../spacing';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyClasses,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from '../separator';

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
					<Select
						title='Шрифт'
						selected={{
							title: 'Open Sans',
							value: 'Open Sans',
							className: fontFamilyClasses[0],
						}}
						options={fontFamilyOptions}
					/>
					<Spacing size={50} />
					<RadioGroup
						title='Размер шрифта'
						name='size'
						selected={{
							title: '18px',
							value: '18px',
							className: 'font-size-18',
						}}
						options={fontSizeOptions}
					/>
					<Spacing size={50} />
					<Select
						title='Цвет шрифта'
						selected={{
							title: 'Черный',
							value: '#000000',
							className: 'font-black',
							optionClassName: 'option-black',
						}}
						options={fontColors}
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						title='Цвет фонта'
						selected={{
							title: 'Белый',
							value: '#FFFFFF',
							className: 'bg-white',
							optionClassName: 'option-white',
						}}
						options={backgroundColors}
					/>
					<Spacing size={50} />
					<Select
						title='Ширина контента'
						selected={{
							title: 'Широкий',
							value: '1394px',
							className: 'width-wide',
							optionClassName: 'option-wide',
						}}
						options={contentWidthArr}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
