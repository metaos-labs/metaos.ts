import moment from "moment";

moment.locale("en-ca");

export function formatMoment(value: string, pattern = "YYYY/MM/DD HH:mm:ss") {
  return moment(+value).format(pattern);
}

export function formatUnixMoment(value: string, pattern = "MM/DD HH:mm:ss") {
  return moment(+value * 1000).format(pattern);
}

export const formatTime = (time: string) => {
  return moment(time).format("YYYY-MM-DD HH:mm:ss");
};

export const formatDiffTime = (time: string) => {
  return moment(time).fromNow();
};
