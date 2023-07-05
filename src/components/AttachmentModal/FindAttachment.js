import coneSplitter from '../../data_mockup/coneSplitter';

const FindAttachment = (answers) => {
  const matchingIndexes = [];

  for (const index in coneSplitter) {
    const splitter = coneSplitter[index];

    if (
      splitter.compatible_attach.includes(answers.attach) &&
      splitter.compatible_weight.includes(answers.weight) &&
      splitter.compatible_flow.includes(answers.flow) &&
      splitter.compatible_length.includes(answers.length)
    ) {
      matchingIndexes.push(coneSplitter[index]);

      if (matchingIndexes.length >= 3) {
        break;
      }
    }
  }

  return matchingIndexes;
};

export default FindAttachment;
