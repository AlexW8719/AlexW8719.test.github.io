import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/homeWork07/shared/services/blog/blog.service';
import { IBlogResponse } from '../../shared/interfaces/blog/blog.interface';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss']
})
export class AdminBlogsComponent implements OnInit {

  public adminBlogs!:IBlogResponse[];

  public title!:string;
  public description!:string;
  public author!:string;
  public idEdit!:number;
  
  public bthBlogs:boolean = false; 
  public saveBlogs:boolean = true; 

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlogs()
  }

  getBlogs():void{
    this.blogService.getAllBlogs().subscribe(data=>{
      this.adminBlogs = data;
    })
  }

  resetForm():void{
    this.title = ``;
    this.description = ``;
    this.author = ``;
    this.idEdit = Number();
  }

  addBlogs():void{
    const newBlog ={
      title : this.title,
      description : this.description,
      author : this.author,
      imgPath: `https://images.wallpaperscraft.com/image/single/vietnam_tropics_sea_84476_2780x2780.jpg`,
    }

    this.blogService.createNewBlog(newBlog).subscribe(()=>{
      this.getBlogs();
      this.resetForm();
    })
  }

  deleteBlog(id:number):void{
    if(confirm(`Ви впевненні, що хочете видалити?`)){
      this.blogService.delBlog(id).subscribe(() =>{
        this.getBlogs()
      })
    }
  }
  
  upBlogs( i:number, blog:Array<IBlogResponse>):void{
    this.saveBlogs = !this.saveBlogs;
    this.bthBlogs = true;

    this.title = blog[i].title;
    this.description = blog[i].description;
    this.author = blog[i].author;
    this.idEdit = blog[i].id
    console.log(this.title)
    console.log(this.description)
    console.log(this.author)
    

   
  }
    

  saveBlog():void{
    const updateBlog ={
      title : this.title,
      description : this.description,
      author : this.author,
      imgPath: `https://images.wallpaperscraft.com/image/single/vietnam_tropics_sea_84476_2780x2780.jpg`,
    }
    const id =  this.idEdit
    this.blogService.update(updateBlog, id).subscribe(()=>{
      this.getBlogs();
      this.resetForm();
      this.saveBlogs = !this.saveBlogs;
      this.bthBlogs = false;
    })
  }

}
