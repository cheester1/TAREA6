import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { Home } from './PRINCIPAL/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Sidebar,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tarea6');
}
