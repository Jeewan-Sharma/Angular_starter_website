import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserspostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  detailsurl: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.posts();
  }

  posts() {
    return this.http.get(this.url);
  }

  getPostDetailById(id: any) {
    this.detailsurl = this.url + '/' + id;
    return this.http.get(this.detailsurl);
  }

  // data from django api
  // get
  djapidata() {
    return this.http.get('http://127.0.0.1:8000/api/task-list/');
  }
  // post
  djapidatapost(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/task-create/', data);
  }
}
