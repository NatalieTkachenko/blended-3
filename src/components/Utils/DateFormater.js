import { formatDistanceToNow, format } from 'date-fns';

export const dateToShow = (date) => {
	return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const dateToFormat = (date) => {
	return format(new Date(date), 'Pp');
};
