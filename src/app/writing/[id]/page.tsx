import { RiRobot2Line } from 'react-icons/ri';

export default function WritingPractice() {
  return (
    <>
      <div className="py-12">
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
      </div>
      <div className="border-b pb-10">
        <div className="mb-4">
          <RiRobot2Line className="mb-1 h-7 w-7 text-violet-600 drop-shadow-sm" />
          <h3 className="text-2xl font-semibold">AI 답변</h3>
        </div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
      </div>
      <div className="py-12">
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
      </div>
      <div className="border-b pb-10">
        <div className="mb-4">
          <RiRobot2Line className="mb-2 h-7 w-7 text-violet-600 drop-shadow-sm" />
          <h3 className="text-2xl font-semibold">AI 답변</h3>
        </div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
        <div>안녕하세요... 어쩌구저쩌구......</div>
      </div>
      <div className="mt-10 w-full border bg-neutral-50">
        <textarea
          className="mt-3 w-full resize-none bg-neutral-50 px-4 outline-none"
          rows={5}
          spellCheck={false}
          autoFocus={true}
          autoCorrect="off"
        />
        <div className="flex w-full justify-end">
          <button className="px-4 pb-2 pt-1 font-semibold text-violet-600 transition-opacity hover:opacity-50">
            전송
          </button>
        </div>
      </div>
    </>
  );
}
