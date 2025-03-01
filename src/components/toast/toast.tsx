import { toast } from 'react-toastify';

type ToastType = 'success' | 'error';

const ShowToast = (message: string, type: ToastType = 'success') => {
  if (type === 'success') {
    toast.success(message);
  } else {
    toast.error(message);
  }
};

export default ShowToast;
