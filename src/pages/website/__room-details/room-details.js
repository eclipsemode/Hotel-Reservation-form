/* eslint-disable no-unused-vars */
import {
  dp
} from '../../../components/calendar/calendar';
import {
  dateDropdownBorder
} from '../../../components/date-dropdown/date-dropdown';
import {
  dropdown
} from '../../../components/dropdown/dropdown';
import {
  like
} from '../../../components/like-button/like-button';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const ctx = document.getElementById('myChart').getContext('2d');

let gradient1 = ctx.createLinearGradient(0, 0, 0, 175);
gradient1.addColorStop(0.0, '#FFE39C');
gradient1.addColorStop(1.0, '#FFBA9C');

let gradient2 = ctx.createLinearGradient(0, 0, 400, 400);
gradient2.addColorStop(0, '#6FCF97');
gradient2.addColorStop(1, '#66D2EA');

let gradient3 = ctx.createLinearGradient(0, 0, 0, 175);
gradient3.addColorStop(0, '#BC9CFF');
gradient3.addColorStop(1, '#8BA4F9');

let gradient4 = ctx.createLinearGradient(0, 0, 0, 175);
gradient4.addColorStop(1, '#909090');
gradient4.addColorStop(0, '#3D4975');

const data = {
  labels: [
    'Великолепно',
    'Хорошо',
    'Удовлетворительно',
    'Разачарован'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [130, 65, 65, 0],
    backgroundColor: [
      gradient1,
      gradient2,
      gradient3,
      gradient4
    ],
    hoverOffset: 4,
    borderWidth: 3,
    cutout: '89%',
    rotation: 180,
    reverse: true
  }]
};

const config = {
  type: 'doughnut',
  data,
  options: {
    plugins: {
      legend: {
        position: 'right',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          font: {
            size: 14,
            family: '\'Montserrat\', sans-serif'
          }
        }
      },
    },

    layout: {
      padding: {
        right: 0,
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  plugins: [{
    id: 'textInside',
    beforeDraw: function (chart, a, b) {
      let width = chart.width,
        height = chart.height,
        ctx = chart.ctx;

      ctx.restore();
      ctx.font = 'bold 24px \'Montserrat\', sans-serif';
      ctx.fillStyle = '#BC9CFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      let dataSum = data.datasets[0].data.reduce((prev, curr) => prev + curr, 0);

      let text = dataSum,
        textX = Math.round((width - ctx.measureText(text).width) / 3.45),
        textY = height / 2.3;

      ctx.fillText(text, textX, textY);

      ctx.save();
    }
  }, {
    id: 'textInside2',
    beforeDraw: function (chart, a, b) {
      let width = chart.width,
        height = chart.height,
        ctx = chart.ctx;

      ctx.restore();
      ctx.font = '12px ' + '\'Montserrat\', sans-serif';
      ctx.fillStyle = '#BC9CFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      let text2 = 'голосов',
        textX2 = Math.round((width - ctx.measureText(text2).width) / 3.4),
        textY2 = height / 1.7;

      ctx.fillText(text2, textX2, textY2);

      ctx.save();
    }
  }
]
};

const myChart = new Chart(ctx, config);

dropdown();
dateDropdownBorder();