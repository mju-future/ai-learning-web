import { toast } from 'react-toastify';

type ToastType = 'success' | 'error';

const showToast = (message: string, type: ToastType = 'success') => {
  if (type === 'success') {
    toast.success(message, {
      className: 'py-4 px-6 min-w-[320] w-auto gap-0.5 text-neutral-600 !font-[pretendard]',
    });
  } else {
    toast.error(message, {
      className: 'py-4 px-6 min-w-[320] w-auto gap-0.5 text-neutral-600 !font-[pretendard]',
    });
  }
};

export default showToast;
