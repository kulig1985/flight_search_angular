export const environment = {
  production: false,
  all_flight_request : "http://127.0.0.1:2233/api/getAllFlightSearchRequest",
  all_flight_result_instance : "http://127.0.0.1:2233/api/getAllFlightSearchInstanceByFsreId?fsreId=",
  all_flight_result_details : "http://127.0.0.1:2233/api/getFlightResultByFsinIn?fsinId=",
  native_query : "http://127.0.0.1:2233/api/getDataByCustomQuery",
  custom_mongo : "http://127.0.0.1:2233/api/getCustomAggregationResult"
};