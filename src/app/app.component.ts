import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from "./post/post/index/index.component";
import { CreateComponent } from "./post/post/create/create.component";
import { EditComponent } from "./post/post/edit/edit.component";
import { Route, Router } from '@angular/router';
import { PostService } from './post/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, IndexComponent, CreateComponent, EditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'table';

  constructor( public postServices:PostService, private router:Router){

  }

  submit(){
    this.router.navigateByUrl('post/index')
  }
}


