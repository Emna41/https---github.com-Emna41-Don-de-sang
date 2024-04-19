import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import for routing (if applicable)
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Correct import for HttpClient

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavComponent, HttpClientModule], // Add HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'don-sang';
}
