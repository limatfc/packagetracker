export default function dateConverter(date) {
  const convertToString = date.toString();
  const sliceDate = convertToString.slice(0, 10);
  const convertedToHumanFormat = sliceDate.split("-").reverse().join("/");
  return convertedToHumanFormat;
}
