import { digitalDayElement, digitalHoursElement, digitalMinutesElement, digitalMonthElement, digitalWeekDayElement, digitalYearElement } from "./dom";


const rootStyles = document.documentElement.style;

const days = [
	'Sunday',
	'Monday',
	'Tusday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const formatNumber = number => (number < 10 ? '0' + number : number);

const updateClock = () => {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const today = now.getDay();
	const date = now.getDate();
	const month = now.getMonth();
	const year = now.getFullYear();

	digitalHoursElement.textContent = formatNumber(hours);
	digitalMinutesElement.textContent = formatNumber(minutes);
	digitalWeekDayElement.textContent = days[today];
	digitalDayElement.textContent = date;
	digitalMonthElement.textContent = months[month];
	digitalYearElement.textContent = year;

	//  hours * 360 / 12
	const hourDegrees = hours * 30 + minutes / 2;
	rootStyles.setProperty('--hour-hand-rotate', hourDegrees + 'deg');

	// minutesDegrees = minutes * 360 / 60
	const minutesDegrees = minutes * 6 + seconds / 10;
	rootStyles.setProperty('--minutes-hand-rotate', minutesDegrees + 'deg');

	// secondsDegrees =  seconds * 360 / 60
	const secondsDegrees = seconds * 6;
	rootStyles.setProperty('--seconds-hand-rotate', secondsDegrees + 'deg');
};

export {updateClock}
