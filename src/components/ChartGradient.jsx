import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartType,
} from 'chart.js';
import { Line } from 'react-chartjs-2'
import React, { useRef } from 'react'

ChartJS.register(
    BarElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
)

export default function GradientChart() {
    const chartRef = useRef();
    
    const options = {

    };

    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr','Mai','Jun', 'Jul'],
        datasets: [
            {
                label: "Volume de vendas",
                data: [210, 333, 119, 357, 890, 670, 770],
                backgroundColor: '#000',
                fill: {
                    value:25
                },              
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],                
                borderWidth: 1,
            },
        ]
    }

    const config = {
        type: 'line',
        data: data,
        options: {
          responsive:true,
        },
    };

    return (
        <>
            <Line
                data={data}
                options={{maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        filler: {
                            propagate: true
                        }
                    }        
                
                }}
                ref={chartRef}
            >

            </Line>
        </>
    )
}