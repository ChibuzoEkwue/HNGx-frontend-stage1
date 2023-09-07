const currentDayOfTheWeek = document.getElementById("dayOfTheWeek");

const currentUtcTime = document.getElementById("currentTime");

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const date = new Date();


currentDayOfTheWeek.textContent = `Current Day of the Week: ${
	days[date.getDay()]
}`;

currentUtcTime.textContent = `Current UTC Time: ${date.getTime()}`;
