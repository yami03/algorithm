function solution(words, queries) {
  return  queries.map(query => {
    const questionFirstIndex = query.indexOf('?');
    const questionLastIndex = query.lastIndexOf('?');
    const queryLength = query.length;

    if(!questionFirstIndex) {
      const IncludedWord = query.slice(questionLastIndex + 1);
      return words.filter(word => word.length === queryLength && word.endsWith(IncludedWord))
                  .length;
    } else {
      const IncludedWord = query.slice(0, questionFirstIndex);
      return words.filter(word => word.length === queryLength && word.startsWith(IncludedWord))
                  .length;
    }
  });
}

console.log(solution(["frodo", "front", "frost", "frozen", "frame", "kakao"], ["fro??", "????o", "fr???", "fro???", "pro?"]))