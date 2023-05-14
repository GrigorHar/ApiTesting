// Test for edge case input:

// Test the API with the minimum and maximum Unix timestamps, which are January 1, 1970 (00:00:00 UTC) and 03:14:07 UTC on 19 January 2038, respectively.
// Test the API with the smallest and largest date strings that it can handle, to ensure that it can handle a wide range of inputs.
// Test for invalid Unix timestamps and date strings:
// Test the API with invalid Unix timestamps (e.g. negative values) and date strings (e.g. empty strings).
// Test the API with date strings that are in an invalid format.
// Test for performance and reliability:
// Test the API with a large number of requests to ensure that it can handle high traffic and does not crash or become unresponsive.
// Test the API with network latency and intermittent failures to ensure that it can handle real-world network conditions.
// Test for security:
// Test the API with malicious inputs to ensure that it is not vulnerable to injection attacks.


import api from '../../support/services/api';

describe('Unix Timestamp Converter API - Improvements', () => {
  
    it('should handle Unix timestamp outside the 32-bit range in getUnixToDateString()', () => {
      api.getUnixToDateString(2147483648)
        .its('status')
        .should('equal', 400)
    })
  
    it('should handle invalid date format in getDateStringToUnixWithFormat()', () => {
      api.getDateStringToUnixWithFormat('2021/05/12 10:30:00', 'Y-m-d H:i:s')
        .its('status')
        .should('equal', 400)
    })
  
    it('should handle invalid date string in getDateStringToUnixWithFormat()', () => {
      api.getDateStringToUnixWithFormat('abc', 'Y-m-d H:i:s')
        .its('status')
        .should('equal', 400)
    })
  
    it('should handle Unix timestamp with milliseconds in getDateStringToUnixWithFormat()', () => {
      api.getDateStringToUnixWithFormat('2021-05-12 10:30:00.123', 'Y-m-d H:i:s.u')
        .its('body')
        .should('equal', 1620815400.123)
    })

  })