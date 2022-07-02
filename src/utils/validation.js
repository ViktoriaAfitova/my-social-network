// import maxLength from '../components/Profile/MyPosts';

export const required = (value) => {
  if (value) return undefined;

  return 'Required';
}

let maxLength;

export const maxLengthCreator = (maxLength) = (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
}

