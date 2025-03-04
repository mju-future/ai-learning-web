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
      <div className="mb-10 w-full max-w-xl border bg-white p-8">
        <h2 className="text-xl font-semibold">단어 검색 결과</h2>
        <div className="mt-10 flex justify-end gap-2.5 font-semibold">
          <button
            onClick={onClose}
            className="bg-neutral-100 px-4 py-2 text-neutral-600 transition-colors hover:bg-neutral-200"
          >
            닫기
          </button>
          {wordInfo ? (
            <div>
              <h2>단어 : {wordInfo.word}</h2>
              <p>품사 : {wordInfo.partOfSpeech}</p>
              {wordInfo.definition.map((definition, index) => (
                <div key={index}>
                  <p>영어 : {definition.english}</p>
                  <p>한글 : {definition.korean}</p>
                </div>
              ))}
              <div>
                <h3>예문 : </h3>
                {wordInfo.example.map((example, index) => (
                  <div key={index}>
                    <p>영어 : {example.english}</p>
                    <p>한글 : {example.korean}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>단어 정보를 입력해 주세요!</p>
          )}
        </div>
      </div>
    </Modal>
  );
}
