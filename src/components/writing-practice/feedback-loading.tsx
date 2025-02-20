import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function FeedbackLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-500 bg-opacity-10">
      <DotLottieReact src="/loading.lottie" loop autoplay className="mb-8 h-20" />
      <div className="mb-20 text-2xl font-semibold text-violet-600">
        AI가 피드백을 생성 중이에요
      </div>
    </div>
  );
}
