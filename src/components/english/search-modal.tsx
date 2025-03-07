'use client';
import { WordInfo } from '@/types';
import Modal from 'react-modal';

interface SearchModalProps {
  isOpen: boolean;
  wordInfo: WordInfo | null;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose, wordInfo }: SearchModalProps) {
  return (
    <Modal
      className="flex h-full w-full items-center justify-center"
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
    >

      <div className="flex w-full max-w-xl flex-col rounded-3xl border bg-white p-8">
        <h2 className="text-xl font-semibold">AI 단어 검색 결과</h2>
        <div className="mt-8 flex gap-2.5">
          {wordInfo ? (
            <div>
              <h2 className="text-3xl font-semibold text-violet-600">{wordInfo.word}</h2>
              <p>품사: {wordInfo.partOfSpeech}</p>
              <div className="mt-4">
                <h3 className="mb-1.5 font-semibold">정의:</h3>
                {wordInfo.definition && wordInfo.definition.length > 0 ? (
                  <div className="mb-2">
                    <p>영어: {wordInfo.definition[0].english}</p>
                    <p>한글: {wordInfo.definition[0].korean}</p>
                  </div>
                ) : (
                  <p>정의가 없습니다.</p>
                )}
              </div>
              <div className="mt-4">
                <h3 className="mb-1.5 font-semibold">예문:</h3>
                {wordInfo.examples && wordInfo.examples.length > 0 ? (
                  wordInfo.examples.map((examples, index) => (
                    <div key={index} className="mb-2">
                      <p>영어: {examples.english}</p>
                      <p>한글: {examples.korean}</p>
                    </div>
                  ))
                ) : (
                  <p>예문이 없습니다.</p>
                )}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-red-500">단어 정보를 불러올 수 없습니다. 다시 시도해 주세요!</p>
            </div>
          )}
        </div>
        <button
          onClick={onClose}
          className="mt-8 bg-neutral-100 py-2.5 font-semibold text-neutral-600 transition-colors hover:bg-neutral-200"
        >
          닫기
        </button>
      </div>
    </Modal>
  );
}
