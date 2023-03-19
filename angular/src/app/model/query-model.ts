export class QueryParam {

    paramName?: string;
    paramType?: string;
    paramValue?: string[];

    constructor(paramName? : string, paramType? : string, paramValue? : string[]) {
            this.paramName = paramName;
            this.paramType = paramType;
            this.paramValue = paramValue;
     }


}

export class QueryGetDto {
    queryName!: string;
    params!: QueryParam[];
}