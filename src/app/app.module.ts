import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson02Component } from './lesson02/lesson02.component';
import { Lesson03Component } from './lesson03/lesson03.component';
import { Child03Component } from './lesson03/child03/child03.component';
import { RepeatlessonsComponent } from './repeatlessons/repeatlessons.component';
import { ChildComponent } from './repeatlessons/child/child.component';
import { Lesson04Component } from './lesson04/lesson04.component';
import { Child04Component } from './lesson04/child04/child04.component';
import { HW05Component } from './hw05/hw05.component';
import { SearchPipe } from './hw05/search.pipe';
import { SortPipe } from './hw05/sort.pipe';
import { HomeWork05Component } from './home-work05/home-work05.component';

import { MainComponent } from './hw-routes/components/main/main.component';
import { NavComponent } from './hw-routes/components/nav/nav.component';
import { HeaderComponent } from './hw-routes/components/header/header.component';

import { HomeComponent } from './hw-routes/angular-pages/home/home/home.component';
import { CenzorComponent } from './hw-routes/angular-pages/works/cenzor/cenzor.component';
import { UserListComponent } from './hw-routes/angular-pages/works/user-list/user-list.component';
import { TaskListComponent } from './hw-routes/angular-pages/works/task-list/task-list.component';


@NgModule({
  declarations: [
    AppComponent,
    Lesson02Component,
    Lesson03Component,
    Child03Component,
    RepeatlessonsComponent,
    ChildComponent,
    Lesson04Component,
    Child04Component,
    HW05Component,
    SearchPipe,
    SortPipe,
    HomeWork05Component,

    MainComponent,
    NavComponent,
    HeaderComponent,

    HomeComponent,
    CenzorComponent,
    UserListComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
