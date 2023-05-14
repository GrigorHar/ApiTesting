import apiEndpoints from '../../config/apiEndpoints.json';

const unixTimestampConverterEndpoint = apiEndpoints.unixTimestampConverter;
const baseUrl = unixTimestampConverterEndpoint.baseUrl;

function getUnixToDateString(unixTimestamp) {
  return cy.request('GET', `${baseUrl}${unixTimestampConverterEndpoint.endpoints.unixToDateString}${unixTimestamp}`);
}

function getDateStringToUnix(dateString) {
  return cy.request('GET', `${baseUrl}${unixTimestampConverterEndpoint.endpoints.dateStringToUnix}${dateString}`);
}

function getDateStringToUnixWithFormat(dateString, format) {
  const encodedFormat = encodeURIComponent(format);
  return cy.request('GET', `${baseUrl}${unixTimestampConverterEndpoint.endpoints.dateStringToUnixWithFormat}${encodedFormat}${dateString}`);
}

export default {
  getUnixToDateString,
  getDateStringToUnix,
  getDateStringToUnixWithFormat
}