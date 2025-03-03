import { toast } from 'react-toastify';

type ToastType = 'success' | 'error';

const showToast = (message: string, type: ToastType = 'success') => {
  const className =
    'py-4 px-6 min-w-[320px] w-auto gap-0.5 text-neutral-800 text-base !font-[pretendard]';

  if (type === 'success') {
    toast.success(message, { className });
  } else {
    toast.error(message, { className });
  }
};

export default showToast;
