/**
 * Provides utility functions for establishing the presence of defined, non-empty values in objects
 */

/**
 * Verifies if the object or its descendents is empty of defined values
 * @param obj The object to check for defined values
 * @returns True if the object or its descendents are empty of defined values, false otherwise
 */
export function isEmptyOfDefinedValues(obj: Object): boolean {
  if (obj === undefined || obj === null || Object.keys(obj).length === 0) {
    return true;
  }
  if (Array.isArray(obj)) {
    return obj.length === 0 || obj.every(isEmptyOfDefinedValues);
  }
  if (typeof obj === "object" && obj !== null) {
    return (
      Object.keys(obj).length === 0 ||
      Object.values(obj).every(isEmptyOfDefinedValues)
    );
  }
  return false;
}

/**
 * Verifies if the object or its descendents contain any defined values
 * @param obj The object to check for defined values
 * @returns True if the object or its descendents contain defined values, false otherwise
 */
export function containsDefinedValues(obj: Object): boolean {
  return !isEmptyOfDefinedValues(obj);
}
