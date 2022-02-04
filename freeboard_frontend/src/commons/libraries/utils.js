export function getDate(myDate) {
  const date = new Date(myDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart("2", 0);
  const day = String(date.getDate()).padStart("2", 0);
  return `${year}-${month}-${day}`; // 2021-11-10
}

export const timeDisplay = (getTime) => {
  const today = new Date();
  const timeValue = new Date(getTime);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return "moment ago";
  if (betweenTime < 60) {
    return `${betweenTime} minutes ago`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour} hours ago`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay} days ago`;
  }

  return `${Math.floor(betweenTimeDay / 365)} year ago`;
};
