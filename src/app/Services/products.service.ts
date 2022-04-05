import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
api="http://127.0.0.1:8000/api/employee/";

  constructor(private http:HttpClient) { }


getAllProducts():Observable <any>{
 return this.http.get(this.api)

}
deleteProducts(id:number):Observable<any>{

  return this.http.delete(`${this.api}${id}`);
}
addProducts(data:any):Observable<any>{
  return this.http.post(this.api,JSON.stringify(data),this.httpOptions)


}
getProductsById(id:number):Observable<any>{
  return this.http.get(`${this.api}${id}`)
}
editProduct(id:number,data:any):Observable<any>{

  return this.http.put(`${this.api}${id}`,JSON.stringify(data),this.httpOptions)
}
}
