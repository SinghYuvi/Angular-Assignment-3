import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterOutlet, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Angular-Assignment-3');
  showDetails = false;
  buttonClicks: any = [];

  onDisplayDetails() {
    this.showDetails = !this.showDetails;

    // Store click count
    this.buttonClicks.push(this.buttonClicks.length + 1);

    //Use timestamp to store click count
    //this.buttonClicks.push(new Date());
  }
}
