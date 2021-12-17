//'use strict';

const now = new Date();
console.log(now);

const customDate = new Date('August 23, 1989');
console.log("Custom date: " + customDate);
console.log("getFullYear: " + customDate.getFullYear()); // 1989
console.log("getMonth: " + customDate.getMonth());
console.log("getDate: " + customDate.getDate());
console.log("getDay: " + customDate.getDay());
console.log("getHours: " + customDate.getHours());
console.log("getMinutes: " + customDate.getMinutes());
console.log("getSeconds: " + customDate.getSeconds());
console.log("toISOString: " + customDate.toISOString());

// Date difference
const date1 = new Date('August 23, 1989');
const date2 = new Date('August 28, 1989');

// Converting date difference to days
console.log(((date2 - date1) / 1000) / 60 / 60 / 24); // 5

// Internationalization
const usDate = new Intl.DateTimeFormat('en-US').format(customDate);
console.log(usDate); // 8/23/1989

const guIn = new Intl.DateTimeFormat('gu-IN').format(customDate);
console.log(guIn); // 23/8/1989

// Formating date using options
const showTimeOnlyOptions = {
    hour: 'numeric',
    minute: 'numeric'
};
console.log(new Intl.DateTimeFormat('en-US', showTimeOnlyOptions).format(customDate)); // 12:00 AM

const showCompleteDateOptions = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
};
console.log(new Intl.DateTimeFormat('en-US', showCompleteDateOptions).format(customDate)); // Wednesday, August 23, 1989, 12:00 AM
console.log(new Intl.DateTimeFormat('hi-IN', showCompleteDateOptions).format(customDate)); // बुधवार, 23 अगस्त 1989, 12:00 am
console.log(new Intl.DateTimeFormat('ar-TN', showCompleteDateOptions).format(customDate)); // الأربعاء، 23 أوت 1989, 12:00 ص

showCompleteDateOptions.weekday = 'short';
console.log(new Intl.DateTimeFormat('en-US', showCompleteDateOptions).format(customDate)); //Wed, August 23, 1989, 12:00 AM

showCompleteDateOptions.weekday = 'narrow';
console.log(new Intl.DateTimeFormat('en-US', showCompleteDateOptions).format(customDate)); //W, August 23, 1989, 12:00 AM