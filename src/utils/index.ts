import dayjs from 'dayjs';
import Joi from 'joi';

export const convertObjectToArray = (data: {}): [string, string | number][] => {
  return Object.entries(data);
};

export function addSpaceBeforeCapitalLetters(str: string) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}

export const formatDateTime = (value: string | Date) =>
  dayjs(value).format('DD-MMMM-YYYY hh:mm a');

export const truncateText = (text: string, maxLength = 50) =>
  text.length > maxLength ? text.substring(0, maxLength).trim() + '...' : text;

export const joiPasswordValidation = Joi.string()
  .min(8)
  .max(255)
  .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'))
  .required()
  .messages({
    'string.pattern.base':
      'Password must contain at least one lowercase letter, one uppercase letter, and one number.',
    'any.required': 'Password is required.',
  });

export function generateRandomNumber(min = 100, max = 999_999_999) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function capitalizeFirstLetter(word) {
  if (!word) return '';
  // Check if the input is not empty
  if (word?.length === 0) {
    return '';
  }
  // Capitalize the first letter and concatenate it with the rest of the word
  return word?.charAt(0).toUpperCase() + word.slice(1);
}
