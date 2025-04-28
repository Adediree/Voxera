import {DateTime, DateTimeFormatOptions} from "luxon";
import moment from "moment";

export class TimeUtil {
    static now(): string {
        const currentDateTime = DateTime.local();
        return currentDateTime.toISO() != null ? currentDateTime.toISO().toString() : "";
    }

    static differentInDays(dataTime1: string, dataTime2: string): number {
        const dataTime1Iso = DateTime.fromISO(dataTime1);
        const dataTime2Iso = DateTime.fromISO(dataTime2);
        const diff = dataTime2Iso.toSeconds() - dataTime1Iso.toSeconds();
        return diff / 60 / 60 / 24;
    }

    static time(dataTime: string, timeFormat: "12" | "24" = "24"): string {
        const dataTimeIso = DateTime.fromISO(dataTime);
        return dataTimeIso.toLocaleString(timeFormat == "24" ? DateTime.TIME_24_SIMPLE : DateTime.TIME_SIMPLE);
    }

    static date(dataTime: string): string {
        const dataTimeIso = DateTime.fromISO(dataTime);
        return dataTimeIso.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
    }

    static timeStamp(dataTime: string): number {
        const dataTimeIso = DateTime.fromISO(dataTime);
        return dataTimeIso.toMillis();
    }

    static localDateTime(dateTime: string) {
        return DateTime.fromISO(
            moment(Date.parse(DateTime.fromISO(dateTime).toString()))
                .format()
                .toString()
        ).toString();
    }

    static decorateTime(dataTime: string): string {
        const currentDateTime = DateTime.local();
        const dataTimeIso = DateTime.fromISO(dataTime);
        const diff = TimeUtil.differentInDays(dataTimeIso.toString(), currentDateTime.toString());
        // if (diff <= 1) return  dataTimeIso.toLocaleString(DateTime.TIME_24_SIMPLE) Fri, Oct 14, 1983
        if (dataTimeIso.hasSame(currentDateTime, "day")) {
            return this.time(dataTimeIso.toString());
        } else if (dataTimeIso.hasSame(currentDateTime.minus({days: 1}), "day")) {
            return "Yesterday";
        } else if (diff >= 2 && diff <= 6) {
            return `${moment(this.localDateTime(dataTimeIso.toString())).format("ddd")}`;
        } else {
            return dataTimeIso.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY).substring(0, 11);
        }
    }

    static decorateDate(dataTime: string): string {
        const currentDateTime = DateTime.local();
        const dataTimeIso = DateTime.fromISO(dataTime);
        const diff = TimeUtil.differentInDays(dataTimeIso.toString(), dataTime);
        // if (diff <= 1) return  dataTimeIso.toLocaleString(DateTime.TIME_24_SIMPLE) Fri, Oct 14, 1983
        if (dataTimeIso.hasSame(currentDateTime, "day")) {
            return "Today";
        } else if (dataTimeIso.hasSame(currentDateTime.minus({days: 1}), "day")) {
            return "Yesterday";
        } else if (diff >= 2 && diff <= 6) {
            return `${moment(this.localDateTime(dataTimeIso.toString())).format("ddd")}`;
        } else {
            return dataTimeIso.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY).substring(0, 11);
        }
    }

    // Function to get the ordinal suffix for a given number
    static getOrdinalSuffix = (num: number) => {
        const suffixes = ["th", "st", "nd", "rd"];
        const remainder = num % 100;
        return suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
    };

    static getDecoratedDate(dataTime: string): string {
        const isoStringWithTAndZ = dataTime.replace(" ", "T") + "Z";
        const eventDateTime = DateTime.fromISO(isoStringWithTAndZ);

        const currentDateTime = DateTime.local();
        // const diff = TimeUtil.differentInDays(eventDateTime.toString(), currentDateTime.toString());

        if (eventDateTime.hasSame(currentDateTime, "day")) {
            return "TODAY";
        } else if (eventDateTime.hasSame(currentDateTime.minus({days: 1}), "day")) {
            return "YESTERDAY";
            // } else if (diff >= 2 && diff <= 6) {
            //   return eventDateTime.toFormat("EEE").toUpperCase(); // Format as day of the week (e.g., Mon, Tue, etc.)
        } else {
            const formattedDate = eventDateTime.toFormat("LLL d");
            if (eventDateTime.year !== currentDateTime.year) {
                // Display full date with month, day, year and ordinal suffix
                const ordinalDay = eventDateTime.toFormat("d");
                const formattedYear = eventDateTime.toFormat("yyyy");
                return `${formattedDate}, ${ordinalDay}${this.getOrdinalSuffix(parseInt(ordinalDay))}, ${formattedYear}`;
            } else {
                // Display month and day with ordinal suffix
                return formattedDate;
            }
        }
    }

    // Function to format the date string with the ordinal suffix
    // static formatDateString = (dateString: string) => {
    //     // Mar 14th, 2024 00:00:00
    //     const isoStringWithTAndZ = dateString.replace(" ", "T") + "Z";
    //     // const inputFormat = "yyyy-MM-dd HH:mm:ss.SSS";
    //     // const dateTime = DateTime.fromFormat(dateString, inputFormat);
    //     // console.log(isoStringWithTAndZ);
    //     const dateTime = DateTime.fromISO(isoStringWithTAndZ);
    //     // console.log(dateTime);
    //     const formattedDateString = dateTime.toFormat("LLL d' 'yyyy HH:mm:ss");
    //     const [month, day, year, time] = formattedDateString.split(" ");
    //     const dayWithSuffix = `${parseInt(day)}${this.getOrdinalSuffix(parseInt(day))}`;
    //     return `${month} ${dayWithSuffix}, ${year} ${time}`;
    // };

    static formatDateString = (dateString: string) => {
        if (!dateString) return dateString
        const consistentDateString = dateString.replace("T", " ");
        // Check if the dateString matches the new format
        const newFormatRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}\+\d{2}:\d{2}$/;
        let dateTime;

        if (newFormatRegex.test(consistentDateString)) {
            // Parse the new date format
            dateTime = DateTime.fromISO(consistentDateString);
        } else {
            // Fallback to the original format
            const isoStringWithTAndZ = consistentDateString.replace(" ", "T") + "Z";
            dateTime = DateTime.fromISO(isoStringWithTAndZ);
        }

        const formattedDateString = dateTime.toFormat("LLL d' 'yyyy HH:mm:ss");
        const [month, day, year, time] = formattedDateString.split(" ");
        const dayWithSuffix = `${parseInt(day)}${this.getOrdinalSuffix(parseInt(day))}`;
        return `${month} ${dayWithSuffix}, ${year} ${time}`;
    };
// Function to format the date string with the ordinal suffix
    static getFormattedDateStringWithoutTime = (dateString: string, showOrdinalSuffix = true) => {
        // Mar 14th, 2024 00:00:00
        const isoStringWithTAndZ = dateString.replace(" ", "T") + "Z";

        // const inputFormat = "yyyy-MM-dd HH:mm:ss.SSS";
        // const dateTime = DateTime.fromFormat(dateString, inputFormat);
        // console.log(isoStringWithTAndZ);
        const dateTime = DateTime.fromISO(isoStringWithTAndZ);
        // console.log(dateTime);
        const formattedDateString = dateTime.toFormat("LLL d' 'yyyy HH:mm:ss");
        const [month, day, year] = formattedDateString.split(" ");// returns [month, day, year, time]
        const dayWithSuffix = `${parseInt(day)}${this.getOrdinalSuffix(parseInt(day))}`;
        return showOrdinalSuffix ? `${month} ${dayWithSuffix}, ${year}` : `${month} ${day}, ${year}`;
    };

    static formatDateToMonDayYear = (dateString: string) => {
        // dateString should be in the format "YYYY/MM/DD"
        // formats date to Mar 16, 2024
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // Split the date string into year, month, and day
        const [year, monthIndex, day] = dateString.split("/").map(Number);

        // Create a Date object
        const date = new Date(year, monthIndex - 1, day); // Month indexes are 0-based in JavaScript

        // Get the month name
        const monthName = months[date.getMonth()];

        // Format the date
        return `${monthName} ${day}, ${year}`;
    };

    static formatToDashedDate = (dateString: string) => {
        // formats date to YYYY-MM-DD from YYYY/MM/DD
        return dateString.replace(/\//g, "-");
    };

    static formatGetTimeInMinSecHrAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();

        const diff = Math.abs(now.getTime() - date.getTime());
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} day${days > 1 ? "s" : ""} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
        } else {
            return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
        }
    };

    static convertToTargetISO(dateTime: string): string {
        // Ensure milliseconds part has exactly three digits
        const correctedDateTime = dateTime.replace(/(\.\d{1,2})$/, (match) => {
            return match.length === 3 ? match + "0" : match.length === 2 ? match + "00" : match + "000";
        });

        // Parse the original datetime string
        const originalDateTime = DateTime.fromFormat(correctedDateTime, "yyyy-MM-dd HH:mm:ss.SSS", {zone: 'utc'});

        // Set the correct time zone offset (+01:00)
        const adjustedDateTime = originalDateTime.setZone("UTC+1");

        // Format the datetime to the desired ISO string with milliseconds and timezone offset
        return adjustedDateTime.toISO({includeOffset: true}) || "";
    }

    static convertToISOWithMilliseconds(dateTime: string): string {
        // Ensure milliseconds part has exactly three digits
        const correctedDateTime = dateTime.replace(/(\.\d{1,2})$/, (match) => {
            return match.length === 3 ? match + "0" : match.length === 2 ? match + "00" : match + "000";
        });

        // Parse the original datetime string
        const originalDateTime = DateTime.fromFormat(correctedDateTime, "yyyy-MM-dd HH:mm:ss.SSS", {zone: 'utc'});

        // Format the datetime to the desired ISO string with milliseconds and UTC ('Z') suffix
        return originalDateTime.toISO({suppressMilliseconds: false, includeOffset: false}) + 'Z';
    }


    // Format datetime for filtering and comparison
    static formatDateTimeForFilter(dateTime: string): string {
        const isoStringWithTAndZ = dateTime.replace(" ", "T") + "Z";
        const dateTimeIso = DateTime.fromISO(isoStringWithTAndZ);
        return dateTimeIso.toISO() || "";
    }

    //
    // static formatDateTime(dateTime: string): string {
    //     return DateTime.fromISO(dateTime).toFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    // }

    static formatDateTime(date: string) {
        return date.split('T')[0]; // Simplified date formatting
    }

    // static isValidDate(dateString: string) {
    //     if (!dateString) return false;
    //     const formats = [
    //         'YYYY-MM-DD HH:mm:ss.SSS', // 3-digit milliseconds
    //         'YYYY-MM-DD HH:mm:ss.SS',  // 2-digit milliseconds
    //         'YYYY-MM-DD HH:mm:ss.S',   // 1-digit milliseconds
    //         'YYYY-MM-DD HH:mm:ss'      // No milliseconds
    //     ];
    //     if (moment(dateString, formats, true).isValid()) return true;
    //
    //     const datePattern = /^(?:\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])(?:T(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d{1,3})?)?)?)?$/;
    //
    //     // Trim the date string to remove leading/trailing whitespace
    //
    //     if (!datePattern.test(dateString)) {
    //         return false;
    //     }
    //
    //     const normalizedDateString = dateString.trim().replace(" ", "T");
    //     const date = new Date(normalizedDateString);
    //
    //     return !isNaN(date.getTime());
    // }

    static isValidDate(dateString: string) {
        if (!dateString) return false;
        const formats = [
            'YYYY-MM-DD HH:mm:ss.SSS', // 3-digit milliseconds
            'YYYY-MM-DD HH:mm:ss.SS',  // 2-digit milliseconds
            'YYYY-MM-DD HH:mm:ss.S',   // 1-digit milliseconds
            'YYYY-MM-DD HH:mm:ss',      // No milliseconds
            'YYYY-MM-DD HH:mm',      // No seconds
            'YYYY-MM-DD HH',      // No minutes
            'YYYY-MM-DD',      // No time
        ];
        if (moment(dateString, formats, true).isValid()) return true;

        const datePattern = /^(?:\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])(?:T(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d{1,3})?)?)?)?$/;

        // Trim the date string to remove leading/trailing whitespace

        if (!datePattern.test(dateString)) {
            return false;
        }

        const normalizedDateString = dateString.toString().trim().replace(" ", "T");
        const date = new Date(normalizedDateString);

        return !isNaN(date.getTime());
    }

    // New function to handle both date and time formatting
    static getFormatDateTime = (dateTimeString: string, options?: {
        formatDateAs?: DateTimeFormatOptions,
        formatTimeAs?: DateTimeFormatOptions
    }) => {
        if (!dateTimeString) return {
            formattedDate: "Invalid date",
            formattedTime: "Invalid DateTime",
            isDateTimeValid: false
        }
        const consistentDateString = `${dateTimeString.replace(" ", "T")}${(dateTimeString?.includes(":") && !dateTimeString?.includes("Z")) ? "Z" : ""}`;
        // const dateTime = DateTime.fromISO(consistentDateString, {zone: "local"});
        const dateTime = DateTime.fromISO(consistentDateString);

        // console.log("dateTimeString, consistentDateString, dateTime :", consistentDateString,)
        // console.log("consistentDateString", consistentDateString, "dateTime", dateTime)
        // Check if dateTime is valid
        if (!dateTime.isValid) {
            return {formattedDate: "Invalid date", formattedTime: "Invalid DateTime", isDateTimeValid: false};
        }

        const formattedDate = dateTime.toLocaleString(options?.formatDateAs ?? DateTime.DATE_MED); // Example: Aug 26, 2024
        const formattedTime = dateTime.toLocaleString(options?.formatDateAs ?? DateTime.TIME_24_SIMPLE) == "00:00" ? "" : dateTime.toLocaleString(options?.formatDateAs ?? DateTime.TIME_24_SIMPLE); // Example: 3:15 PM
        // console.log("{formattedDate, formattedTime}", {formattedDate, formattedTime})
        return ({formattedDate, formattedTime, isDateTimeValid: true});
    };


    // static isValidDate(dateString: string) {
    //     // Regular expression to match YYYY-MM-DD and YYYY-MM-DDTHH:MM:SS.sss
    //
    //     // const datePattern = /^(?:\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])(?:T(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d{1,3})?)?)?)?$/;
    //     const datePattern = /^(?:\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])(?:T(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d{1,3})?)?)?)?$/;
    //
    //     // Trim the date string to remove leading/trailing whitespace
    //     dateString = dateString?.trim();        // const datePattern2 = /^(?:\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])(?:[T\s](?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d{1,3})?)?)?)?$/;
    //
    //
    //     if (!datePattern.test(dateString)) {
    //         console.log("Invalid date format: ", dateString);
    //         return false;
    //     }
    //
    //     const normalizedDateString = dateString.trim().replace(" ", "T");
    //     console.log("Normalized date string:", normalizedDateString);
    //
    //     const date = new Date(normalizedDateString);
    //     console.log("Created date object:", date);
    //
    //     return !isNaN(date.getTime());
    // }
}
