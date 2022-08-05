import { Component, OnInit } from '@angular/core';
import { IBlogss, IUsers } from '../shered/interfaces/blogs.interface';

import { BlogsService } from '../shered/services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public statusUsers = false;
  public statusSingIn = false;
  public statusSingUp = false;
  public statusModal = false;
  public statusAddPost = false;
  public statusEditPost = false;
  public arraysUser = true;

  public usersBlogs: IUsers[] = [];
  public postsBlogs: IBlogss[] = [];

  public accountPost!: IBlogss[];

  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;

  public topic!: string;
  public postedBy!: string;
  public date!: Date;
  public message!: string;

  public topicEd!: string;
  public postedByEd!: string;
  public dateEd!: Date;
  public messageEd!: string;

  public userNames!: string;

  private _num!:number;

  constructor(
    private blogsService: BlogsService

  ) { }

  ngOnInit(): void {
    this.getUser()
    this.getPost()
  }

  getUser(): void {
    this.usersBlogs = this.blogsService.getUsers();
  }

  getPost(): void {
    this.postsBlogs = this.blogsService.getBlogs();
  }

  singIn(): void {
    this.statusModal = true;
    this.statusSingIn = true;
  }

  openSingUp(): void {
    this.clear()
    this.statusModal = true;
    this.statusSingUp = true;
  }

  singUp(): void {
    for(let i = 0; i<this.usersBlogs.length; i++){
      if(this.usersBlogs[i].username.toLowerCase() == this.username.toLowerCase()){
        alert(`Такий користувач уже існує`)
      }
      else if(this.usersBlogs[i].email.toLowerCase() == this.email.toLowerCase()){
        alert(`Користувач з таким емейлом існує`)
      }
      else{
        const newUser = {
          username: this.username,
          email: this.email,
          password: this.password,
          id: this.usersBlogs[this.usersBlogs.length - 1].id + 10 + Math.floor(Math.random() * 10),
        }
    
        this.blogsService.addUser(newUser)
        this.enterAccount()
        this.username = ``
        this.email = ``
        this.password = ``
        break
      }
    }
    
    // console.log(this.usersBlogs)
    // console.log(this.postsBlogs)
  }

  enterAccount(): void {
    for (let i = 0; i < this.usersBlogs.length; i++) {
      if (this.usersBlogs[i].email == this.email && this.usersBlogs[i].password == this.password) {
        this.userNames = this.usersBlogs[i].username
        let names = this.userNames
        if (this.usersBlogs[i].email == `admin@gmail.com`) {
          this.close()
          this.statusUsers = true;
        }
        else {
          this.close()
          this.statusUsers = true;
          this.postsBlogs = this.postsBlogs.filter(function (element) { return element.postedBy == names })
        }
      }
    }
  }

  sOut(): void {
    this.statusUsers = false;
    this.postsBlogs = this.blogsService.getBlogs();
  }

  openAddMod(): void {
    this.statusModal = true;
    this.statusAddPost = true;
    this.clear()
  }

  addPosts(): void {
    console.log(`blogs===>>  `, this.blogsService.getBlogs())
    let a = this.usersBlogs[0].username;
    this.date = new Date()
    let i = `${this.userNames}- ` + this.postsBlogs.length + 10 + Math.floor(Math.random() * 10);
    const newPost = {
      postedBy: this.userNames,
      topic: this.topic,
      message: this.message,
      date: new Date(),
      id: i,
    }

    if (this.userNames == `admin`) {
      this.blogsService.addPost(newPost)
    } else {
      this.blogsService.addPost(newPost)
      this.postsBlogs.push(newPost)
    }

    this.statusSingIn = false;
    this.statusSingUp = false;
    this.statusModal = false;
    this.statusAddPost = false;
  }

  close() {
    this.statusUsers = false;
    this.statusSingIn = false;
    this.statusSingUp = false;
    this.statusModal = false;
    this.statusAddPost = false;
    this.statusEditPost = false;
  }

  closeEd() {

    this.statusSingIn = false;
    this.statusSingUp = false;
    this.statusModal = false;
    this.statusAddPost = false;
    this.statusEditPost = false;
    this.clear()
  }

  delete(i: number): void {
    if (this.userNames == `admin`) {
      this.postsBlogs.splice(i, 1)
    }
    else {
      let ids = this.postsBlogs[i].id;
      let arrP = this.blogsService.getBlogs();
      for (let index = 0; index < arrP.length; index++) {
        if (arrP[index].id == ids) {
          this.postsBlogs.splice(i, 1)
          this.blogsService.deletePost(index)
        }
      }

    }
  }

  openEditor(i: number): number {
    this.clear()
    this.statusModal = true;
    this.statusEditPost = true;
    this.topic = this.postsBlogs[i].topic
    this.message = this.postsBlogs[i].message
    return this._num = i;
  }

  editPost():void{
    if(this.postsBlogs[this._num].postedBy == `admin`){
      this.postsBlogs[this._num].message = this.message
      this.postsBlogs[this._num].topic = this.topic
    }
    else {
      let ids = this.postsBlogs[this._num].id;
      let arrP = this.blogsService.getBlogs();
      for (let index = 0; index < arrP.length; index++) {
        if (arrP[index].id == ids) {
          this.postsBlogs[this._num].message = this.message
          this.postsBlogs[this._num].topic = this.topic
          this.statusEditPost = false;
          this.statusModal = false;
          return this.blogsService.editor(index, this.topic, this.message)
        }
      }

    }
    this.statusEditPost = false;
    this.statusModal = false;
  }

  clear():void{
    this.topic=``;
    this.message=``;
    this.username=``;
    this.email=``;
    this.password=``;
  }
}
