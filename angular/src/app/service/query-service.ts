import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryGetDto, QueryParam } from '../model/query-model';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor() { }


  createQueryObject(queryName : string, params : QueryParam[]) : HttpParams {

    let paramList: QueryParam[] = [];
    let queryGetDto = new QueryGetDto();
    queryGetDto.queryName = queryName;

    queryGetDto.params = params;

    console.log(JSON.stringify(queryGetDto))

    return new HttpParams().set("queryGetDto" , JSON.stringify(queryGetDto))

  }

}
