import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-purpose-pie',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './purpose-pie.component.html',
  styleUrl: './purpose-pie.component.scss'
})
export class PurposePieComponent {
  data: any;

  options: any;
 
  ngOnInit() {
    let data = [
      { value: 100, name: 'House Keeping' },
      { value: 100, name: 'CCTV Service' },
      { value: 48, name: 'Vendor Meetings' },
      { value: 48, name: 'Chief guest' },
      { value: 48, name: 'Laptop technicians' },
      { value: 28, name: 'Customer visit' },
      { value: 96, name: 'Fire extinguisher service' },
      { value: 40, name: 'Plumbing related service' },
      { value: 19, name: 'Pest control service' },
      { value: 19, name: 'Water Purifier service' },
      { value: 96, name: 'Access door service' },
      { value: 0, name: 'Server room related' },
      { value: 28, name: 'Laptop Vendors' },
      { value: 48, name: 'Laptop technicians' },
      { value: 0, name: 'Training' },
      { value: 48, name: 'Chief guest' },
      { value: 0, name: 'F&B Vendors' }
    ];

    let { top6, otherItems } = this.prepareData(data);

    const colors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF'
    ];

    this.data = {
      labels: top6.map((item: { name: any; }) => item.name),
      datasets: [
        {
          data: top6.map((item: { value: any; }) => item.value),
          backgroundColor: colors
        }
      ]
    };

    this.options = {
      plugins: {
        title: {
          display: true,
          text: 'Visitor Purposes',
          font: {
            size: 16
          }
        },
        legend: {
          position: 'right'
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              if (context.label === 'Others') {
                return otherItems;
              } else {
                let value = context.raw;
                let total = context.chart.getDatasetMeta(0).total;
                let percentage = Math.round((value / total) * 100);
                return `${context.label}: ${value} (${percentage}%)`;
              }
            }
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false
    };
  

    this.createRadarChart();

  }
  prepareData(data: any[]) {
    // Sort the data in descending order
    data.sort((a, b) => b.value - a.value);

    // Extract the top 6 values
    let top6 = data.slice(0, 6);

    // Create the "Others" slice with the remaining values
    let others = data.slice(6);
    let othersValue = others.reduce((acc, item) => acc + item.value, 0);
    top6.push({
      value: othersValue,
      name: 'Others'
    });

    // Prepare the otherItems array
    let otherItems = others.map((item) => `${item.name}: ${item.value}`);

    return { top6, otherItems };
  }
  
  createRadarChart(): void {
    const canvas = document.getElementById('myRadarChart') as HTMLCanvasElement;
    if (canvas) {
      canvas.height = 600;  // Replace with your desired height
      canvas.width = 600; // Replace with your desired width
      new Chart(canvas, {
        
        type: 'radar',
        data: {
          labels: ['House Keeping',
            'Customer visit',
            'Vendor Meetings',
            'Interview',
            'AC Service',
            'CCTV Service',
            'Fire extinguisher service',
            'Plumbing related service',
            'Pest control service',
            'Water Purifier service',
            'Access door service',
            'Server room related',
            'Laptop Vendors',
            'Laptop technicians',
            'Training',
            'Chief guest',
            'F&B Vendors',
            'Others'],
          datasets: [
        
            {
              label: 'Experion visitor purpose',

              data: [  100,28, 48, 0, 19, 100,96, 0,40, 19, 96, 0,28, 48,0, 48, 0, 10],
              fill: true,
              backgroundColor: 'rgba(100, 10, 20, 0.2)',
              borderColor: '#952991',
              pointBackgroundColor: '#952991',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#FF858C',
              pointHoverBorderColor: '#952991'
            }
          ]
        },
        options: {
          maintainAspectRatio: false, // Add this line
          responsive: true, // Add this line if you want the chart to be responsive
          // aspectRatio:false,
          elements: {
            line: {
              borderWidth: 3
            }
          }
        }
      });
    }
  }

}
