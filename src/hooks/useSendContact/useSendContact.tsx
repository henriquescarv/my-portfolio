import { useContext, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SnackbarContext } from '../../providers/SnackbarProvider/SnackbarProvider';
import { sendEmailProps } from './useSendContact.types';
import { LocaleContext } from '../../providers/LocaleProvider/LocaleProvider';

const useSendContact = () => {
	const [loading, setLoading] = useState(false);
	const { setDisplaySnackbar } = useContext(SnackbarContext);

	const { locale } = useContext(LocaleContext);
	const ContactModalLocale = locale.contactsModal;

	const sendEmail = ({ templateParams, handleExecute }: sendEmailProps) => {
		setLoading(true);
		emailjs.send('service_sotc48h', 'template_2quaj4f', templateParams, 'noSDoE-pcEX5OJzEc')
			.then(() => {
				setDisplaySnackbar({
					message: ContactModalLocale.sendSuccess,
					status: 'success',
				});
				handleExecute?.();
				setLoading(false);
			})
			.catch(() => {
				setDisplaySnackbar({
					message: ContactModalLocale.sendError,
					status: 'problem',
				});
				handleExecute?.();
				setLoading(false);
			});
	};

	return {
		loading,
		sendEmail,
	};
};

export default useSendContact;
