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
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from '../separator';

export const ArticleParamsForm = () => {
	const [open, setOpen] = useState(false);

	const [font, setFont] = useState(fontFamilyOptions[0]);
	const [size, setSize] = useState(fontSizeOptions[0]);
	const [fontColor, setFontColor] = useState(fontColors[0]);
	const [bgColor, setBgColor] = useState(backgroundColors[0]);
	const [width, setWidth] = useState(contentWidthArr[0]);

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
						selected={font}
						options={fontFamilyOptions}
						setValue={setFont}
					/>
					<Spacing size={50} />
					<RadioGroup
						title='Размер шрифта'
						name='size'
						selected={size}
						options={fontSizeOptions}
						onChange={setSize}
					/>
					<Spacing size={50} />
					<Select
						title='Цвет шрифта'
						selected={fontColor}
						options={fontColors}
						setValue={setFontColor}
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						title='Цвет фонта'
						selected={bgColor}
						options={backgroundColors}
						setValue={setBgColor}
					/>
					<Spacing size={50} />
					<Select
						title='Ширина контента'
						selected={width}
						options={contentWidthArr}
						setValue={setWidth}
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
