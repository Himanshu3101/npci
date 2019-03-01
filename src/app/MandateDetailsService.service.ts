import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs'
import {mandatebody} from './mandatebody';

@Injectable({
  providedIn: 'root'
})
export class MandateDetailsService {

  constructor(private httpclient:HttpClient) { }

  // getcomments(): Observable<any>{
  //   return this.httpclient.get("http://10.10.10.49:8080/getAll")
  // }

  // getcommentsbyparam():Observable<any>{
  //   let params1 = new HttpParams().set('MandateId',"2");
  //   let params2 = new HttpParams().set('QueryType',"XMLMandate");
  //   return this.httpclient.get("http://10.10.10.49:8080/getAll",{params:params1})
  // }

  post(oMandate:mandatebody):Observable<any>{
    return this.httpclient.post("http://10.10.10.49:8080/getAll",oMandate);
  }


  _cardSelected(){
    
  }

}

