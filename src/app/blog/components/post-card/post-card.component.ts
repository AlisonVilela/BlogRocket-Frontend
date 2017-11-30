import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html'
})
export class PostCardComponent {
  @Input() post: any

  constructor() {

  }

  updateUrl() {
    this.post.img = ''
  }
  
}
