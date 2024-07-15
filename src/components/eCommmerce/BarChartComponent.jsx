import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChartComponent = () => {
	const [chartData, setChartData] = useState({
		series: [
			{
				name: 'Sales',
				data: [44, 55, 41, 67, 22, 43, 65],
			},
			{
				name: 'Revenue',
				data: [13, 23, 20, 8, 13, 27, 15],
			},
		],
		colors: ['#3056D3', '#80CAEE'],
		chart: {
			type: 'bar',
			height: 335,
			stacked: true,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
		},

		responsive: [
			{
				breakpoint: 1536,
				options: {
					chart: {
						height: 400,
					},
					plotOptions: {
						bar: {
							borderRadius: 0,
							columnWidth: '25%',
						},
					},
				},
			},
		],
		plotOptions: {
			bar: {
				horizontal: false,
				borderRadius: 0,
				columnWidth: '25%',
				borderRadiusApplication: 'end',
				borderRadiusWhenStacked: 'last',
			},
		},
		dataLabels: {
			enabled: false,
		},

		xaxis: {
			categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
		},
		legend: {
			position: 'top',
			horizontalAlign: 'left',
			fontFamily: 'Satoshi',
			fontWeight: 500,
			fontSize: '14px',

			markers: {
				radius: 99,
			},
		},
		grid: {
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
		fill: {
			opacity: 1,
		},
	});
	return (
		<ReactApexChart
			options={chartData}
			series={chartData.series}
			type='bar'
		/>
	);
};

export default BarChartComponent;
