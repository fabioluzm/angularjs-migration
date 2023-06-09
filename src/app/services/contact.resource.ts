import * as angular from "angular";
import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {downgradeInjectable} from "@angular/upgrade/static";
import "rxjs/add/operator/toPromise";

@Injectable()
export class Contact {
  private apiRoot: string = "http://localhost:3000/contacts";
  // private $http;

  constructor(@Inject(HttpClient) private http: HttpClient) {
    // this.$http = $http;
  }

  query(params: {string: string}) {
    console.log(
      "OBSERVABLE",
      this.http.get(this.apiRoot, {params}).toPromise()
    );
    return this.http.get(this.apiRoot, {params}).toPromise();
  }
  get(id, params?: {string: string}) {
    return this.http.get(`${this.apiRoot}/${id}`, {params}).toPromise();
  }
  save(data: any) {
    return this.http.post(this.apiRoot, data);
  }
  update(data: any) {
    return this.http.put(`${this.apiRoot}/${data.id}`, data).toPromise();
  }
  remove(data: any) {
    return this.http.delete(`${this.apiRoot}/${data.id}`).toPromise();
  }
}

// angular.module("codecraft").service("Contact", Contact);
angular.module("codecraft").factory("Contact", downgradeInjectable(Contact));
