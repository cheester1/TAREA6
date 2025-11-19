import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
 @Input() avatars: string[] = [
    'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
  ];

  icons: string[] = ['home', 'search', 'history', 'video'];

  // Map para mostrar el string correcto para el icono material
  materialIcon(icon: string): string {
    return icon === 'video' ? 'videocam' : icon;
  }
}
