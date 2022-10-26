import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MootsTooltipService } from 'moots-tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(private tooltip: MootsTooltipService) {}

  ngAfterViewInit() {
    console.log(document.querySelector('#target')?.getBoundingClientRect());
    setTimeout(() => {
      this.tooltip.addTooltip('target', 'This is a tooltip', 'bottom-end');
    }, 1500);
  }
}
