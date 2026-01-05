import { minutesInDay } from './constants.js';

const minutes = 1000;

// Becomes just "minutes", since the rest of the line is treated as a comment 
globalThis.days = minutes/minutesInDay;

// Triggers a syntax error
if (minutes/minutesInDay) {}
