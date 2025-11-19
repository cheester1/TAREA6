import { Component } from '@angular/core';
import { Home1 } from '../home-1/home-1';
import { Home2 } from '../home-2/home-2';
import { Home3 } from '../home-3/home-3';
import { Home4 } from '../home-4/home-4';
import { Home5 } from '../home-5/home-5';
import { Home6 } from '../home-6/home-6';
import { Home7 } from '../home-7/home-7';
import { Home8 } from '../home-8/home-8';
import { Home9 } from '../home-9/home-9';

@Component({
  selector: 'app-home',
  imports: [Home1,Home2,Home3,Home4,Home5,Home6,Home7,Home8,Home9],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
