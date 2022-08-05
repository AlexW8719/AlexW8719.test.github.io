import { Injectable } from '@angular/core';

import { IUsers, IBlogss } from '../interfaces/blogs.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private users: Array<IUsers> = [{
    id: 1,
    username: `admin`,
    email: `admin@gmail.com`,
    password: `qwerty123`,
  }];

  private blogs: Array<IBlogss> = [{
    id: `1`,
    topic: `First post`,
    postedBy: `admin`,
    date: new Date(),
    message: `Sing up to create your account and start to use Angular Blog`,
  },];

  constructor() { }

  getUsers(): Array<IUsers> {
    return this.users
  }

  getBlogs(): Array<IBlogss> {
    return this.blogs
  }

  addUser(users: IUsers): void {
    this.users.push(users)
  }

  addPost(blogs: IBlogss): void {
    this.blogs.push(blogs)
  }

  deletePost(index: number): void {
    this.blogs.splice(index, 1)
  }

  editor(index: number, topic:string, message:string): void {
    this.blogs[index].topic = topic;
    this.blogs[index].message = message;
  }
}


