import { Component } from '@angular/core';
import { wishItem } from '../shared/modules/wishItem';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : wishItem[] = [
    new wishItem('Learn Angular'),
    new wishItem('Get Coffee', true),
    new wishItem('Find some water')
  ];
  title = 'wishlist';
}
