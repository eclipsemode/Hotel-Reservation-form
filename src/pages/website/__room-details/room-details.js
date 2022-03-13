/* eslint-disable no-unused-vars */
import { dp } from "../../../components/calendar/calendar";
import { dateDropdownBorder } from "../../../components/date-dropdown/date-dropdown";
import { dropdown } from "../../../components/dropdown/dropdown";
import { like } from "../../../components/like-button/like-button";
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
    SubTitle
  } from "chart.js";

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

const ctx = document.getElementById("myChart");

const textInside = document.querySelector(".room__chart-value").textContent;

const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: [
            "Великолепно",
            "Хорошо",
            "Удовлетворительно",
            "Разачарован"
          ],
          datasets: [{
            label: "My First Dataset",
            data: [130, 65, 65, 0],
            backgroundColor: [
              '#FFE39C',
              '#6FCF97',
              '#BC9CFF',
              '#909090'
            ],
            hoverOffset: 4,
            borderWidth: 3,
            cutout: "89%",
            reverse: true
          }]
    },
    options: {
        plugins:
        {
            legend: {
                position: "right",
                labels: {
                    usePointStyle: true,
                    boxWidth: 10,
                        font: {
                            size: 14,
                            family: "'Montserrat', sans-serif"
                            }
                        }
          },    
        },
        layout: {
            padding: {
                left: -100
            }
        },
        responsive: true,
        maintainAspectRatio: false,
}
});

dropdown();
dateDropdownBorder();