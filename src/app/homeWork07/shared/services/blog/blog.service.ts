import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBlogResponse } from '../../interfaces/blog/blog.interface';
import { IBlogRequest } from '../../interfaces/blog/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = environment.BACKEND_URL
  private api ={
    blogs: `${this.url}/blogs`,
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllBlogs():Observable<IBlogResponse[]>{
    return this.http.get<IBlogResponse[]>(this.api.blogs);
  }

  createNewBlog(blogs:IBlogRequest):Observable<IBlogRequest[]>{
    return this.http.post<IBlogRequest[]>(this.api.blogs, blogs);
  }

  delBlog(id:number): Observable<void>{
    return this.http.delete<void>(`${this.api.blogs}/${id}`)
  }

  update(blogsArr: IBlogRequest, id:number): Observable<void>{
    return this.http.patch<void>(`${this.api.blogs}/${id}`,blogsArr)
  }
}
