import React from 'react';

export default function MemberChat({ text }: { text: string }) {
  return (
    <div className="py-12">
      {text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}
