import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { toyService } from '../services/toy.service.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export function Chart() {
    const [data, setData] = useState(null)

    useEffect(() => {
        toyService.getLabelCountsAndLabels().then((stats) => {
            const labels = stats[0]
            const counts = stats[1]

            const chartData = {
                labels: labels,
                datasets: [
                    {
                        label: '# of Labels',
                        data: counts,
                        backgroundColor: [
                            'rgba(240, 125, 163, 0.2)',
                            'rgba(131, 13, 52, 0.2)',
                            'rgba(190, 35, 87, 0.2)',
                            'rgba(239, 153, 182, 0.2)',
                        ],
                        borderColor: [
                            'rgba(240, 125, 163, 1)',
                            'rgba(131, 13, 52, 1)',
                            'rgba190, 35, 87, 1)',
                            'rgba(239, 153, 182, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            }

            setData(chartData);
        })
    }, [])

    if (!data) {
        return null
    }

    return <Pie data={data} />
}
