/// <reference types="cypress" />
import api from '../../support/services/api';

describe('Unix Timestamp Converter API', () => {
    it('should convert Unix timestamp to date string', () => {
        api.getUnixToDateString(1620815400)
          .its('body')
          .should('equal', '2021-05-12 10:30:00')
      })
    
      it('should convert date string to Unix timestamp', () => {
        api.getDateStringToUnix('2021-05-12 10:30:00')
          .its('body')
          .should('equal', 1620815400)
      })
    
      it('should handle invalid input for date string to Unix timestamp conversion', () => {
        api.getDateStringToUnix('abc')
          .its('body')
          .should('equal', false)
      })
    
      it('should handle invalid input for Unix timestamp to date string conversion', () => {
        const invalidTimestamp = "asdfasd";
        api.getUnixToDateString(invalidTimestamp)
          .its('body')
          .should('equal', false)
      });
    
      it('should handle date string to Unix timestamp conversion with custom date format', () => {
        api.getDateStringToUnixWithFormat('2021/05/12 10:30:00', 'Y/m/d H:i:s')
          .its('body')
          .should('equal', 1620815400)
      })
    
      it('should handle Unix timestamp to date string conversion for the maximum Unix timestamp value', () => {
        api.getUnixToDateString(2147483647)
          .its('body')
          .should('equal', '2038-01-19 03:14:07')
      })

    it('should handle Unix timestamp as a string in getUnixToDateString()', () => {
          api.getUnixToDateString('1620815400')
            .its('body')
            .should('equal', '2021-05-12 10:30:00')
    })
      
    it('should handle Unix timestamp as a string in getDateStringToUnix()', () => {
          api.getDateStringToUnix('1620815400')
            .its('body')
            .should('equal', 1620815400)
    })
      
    it('should handle date string in different formats in getDateStringToUnix()', () => {
          api.getDateStringToUnix('12/05/2021 10:30:00')
            .its('body')
            .should('equal', 1620815400)
          api.getDateStringToUnix('12-05-2021 10:30:00')
            .its('body')
            .should('equal', 1620815400)
    })
      
    it('should handle Unix timestamp as a number in getDateStringToUnixWithFormat()', () => {
          api.getDateStringToUnixWithFormat(1620815400, 'Y/m/d H:i:s')
            .its('body')
            .should('equal', false)
    })
      
    it('should handle invalid date format in getDateStringToUnixWithFormat()', () => {
          api.getDateStringToUnixWithFormat('2021/05/12 10:30:00', 'Y-m-d H:i:s')
            .its('body')
            .should('equal', false)
    })
  })