export class CustomAggregate {
    collectionName?:    string;
    aggregationName?:   string;
    aggregationParams?: AggregationParam[];
}

export class AggregationParam {
    aggregationParamName?:  string;
    aggregationParamValue?: string;
}