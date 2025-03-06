import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function FeedbackLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-600 bg-opacity-10">
      <div className="mb-16 rounded-3xl bg-white px-16 py-12">
        <DotLottieReact src="/loading.lottie" loop autoplay className="mx-auto mb-8 w-[91.2px]" />
        <div className="text-xl font-semibold text-violet-600">AI가 피드백을 생성 중이에요</div>
      </div>
    </div>
  );
}
