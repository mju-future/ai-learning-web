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
              <h2 className="text-lg font-bold">단어 : {wordInfo.word}</h2>
              <p>품사 : {wordInfo.partOfSpeech}</p>
              <div className="mt-4">
                <h3 className="font-semibold">정의 :</h3>
                {wordInfo.definition && wordInfo.definition.length > 0 ? (
                  wordInfo.definition.map((definition, index) => (
                    <div key={index} className="mb-2">
                      <p>영어 : {definition.english}</p>
                      <p>한글 : {definition.korean}</p>
                    </div>
                  ))
                ) : (
                  <p>정의가 없습니다.</p>
                )}
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">예문 :</h3>
                {wordInfo.examples && wordInfo.examples.length > 0 ? (
                  wordInfo.examples.map((examples, index) => (
                    <div key={index} className="mb-2">
                      <p>영어 : {examples.english}</p>
                      <p>한글 : {examples.korean}</p>
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
      </div>
    </Modal>
  );
}
