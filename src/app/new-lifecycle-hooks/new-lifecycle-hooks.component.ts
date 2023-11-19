import {
  afterNextRender,
  afterRender,
  AfterRenderPhase,
  Component,
  ElementRef,
  inject,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Chart, BarController, BarElement, LinearScale, CategoryScale } from 'chart.js';
import { MatButtonModule } from '@angular/material/button';

Chart.register(BarController, BarElement, LinearScale, CategoryScale);

const MOCK_CHART_DATA = {
  labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz'],
  datasets: [
    {
      label: 'Example',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      borderWidth: 1,
    },
  ],
};

@Component({
  template: ` <div class="buttons">
      <button mat-raised-button color="primary" (click)="destroyChart()">Destroy Chart</button>
      <button mat-button color="warn" (click)="reDrawChart()">Redraw Chart</button>
    </div>
    <canvas #chartContainer></canvas>`,
  styleUrl: './new-lifecycle-hooks.component.scss',
  standalone: true,
  imports: [MatButtonModule],
})
export default class NewLifecycleHooksComponent implements OnDestroy {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef<HTMLCanvasElement>;

  private chartRef: Chart | undefined;
  private zone = inject(NgZone);
  constructor() {
    afterRender(() => console.log('after render'));
    afterNextRender(() => this.initializeChart(), { phase: AfterRenderPhase.Write });
  }

  destroyChart() {
    this.chartRef?.destroy();
    this.chartRef = undefined;
  }

  reDrawChart() {
    if (this.chartRef) return;
    this.initializeChart();
  }

  private initializeChart() {
    this.zone.runOutsideAngular(() => {
      this.chartRef = new Chart(this.chartContainer.nativeElement, {
        type: 'bar',
        data: MOCK_CHART_DATA,
        options: {
          scales: {
            y: { beginAtZero: true },
          },
        },
      });
    });
  }

  ngOnDestroy() {
    this.destroyChart();
  }
}
