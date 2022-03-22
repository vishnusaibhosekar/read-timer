import React, { useMemo } from 'react';
import { getReadingTime } from '../helpers';

export function ArticleStats({ showExplanation, text, transformer }) {
  // slow
  const readingTime = getReadingTime(text);

  // fast
  // const readingTime = useMemo(() => getReadingTime(text), [text]);

  return (
    <div>
      <h4>Reading time</h4>
      {showExplanation && (
        <p className='explanation'>
          Reading time: Predicts the amount of time it will take to read this
          article. Based on an average reading speed of 238 words per minute.
        </p>
      )}
      <p>{readingTime}</p>
    </div>
  );
}
