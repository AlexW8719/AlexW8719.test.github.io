import { Component, OnInit } from '@angular/core';
import { IBlogResponse } from '../../shared/interfaces/blog/blog.interface';
import { BlogService } from '../../shared/services/blog/blog.service';

@Component({
  selector: 'app-blogs07',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent07 implements OnInit {

  public userBlogs!:IBlogResponse[];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getUserBlogs();
  }

  getUserBlogs():void{
    this.blogService.getAllBlogs().subscribe(data =>{
      this.userBlogs=data;
    })
  }
}
