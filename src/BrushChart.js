import Chart from "react-apexcharts";

export default function BrushChart(props) {
	const { data } = props;
	const options = {
		chart: {
			id: "chart2",
			type: "line",
			toolbar: {
				autoSelected: "pan",
				show: false,
			},
		},
		colors: ["#546E7A"],
		stroke: {
			width: 3,
		},
		dataLabels: {
			enabled: false,
		},
		fill: {
			opacity: 1,
		},
		markers: {
			size: 0,
		},
		xaxis: {
			type: "datetime",
		},
		annotations: {
			yaxis: [
				{
					y: 100,
					borderColor: "#00E396",
					label: {
						borderColor: "#00E396",
						style: {
							color: "#fff",
							background: "#00E396",
						},
						text: "This is a test",
					},
				},
				{
					y: 200,
					borderColor: "#00E396",
					label: {
						borderColor: "#00E396",
						style: {
							color: "#fff",
							background: "#00E396",
						},
						text: "This is a test 2",
					},
				},
				{
					y: 300,
					borderColor: "#00E396",
					label: {
						borderColor: "#00E396",
						style: {
							color: "#fff",
							background: "#00E396",
						},
						text: "This is a test 3",
					},
				},
			],
		},
	};
	const options2 = {
		chart: {
			id: "chart1",
			type: "area",
			brush: {
				target: "chart2",
				enabled: true,
			},
			selection: {
				enabled: true,
			},
		},
		colors: ["#008FFB"],
		fill: {
			type: "gradient",
			gradient: {
				opacityFrom: 1,
				opacityTo: 1,
			},
		},
		xaxis: {
			type: "datetime",
			tooltip: {
				enabled: false,
			},
		},
		yaxis: {
			tickAmount: 2,
		},
	};

	return (
		<>
			<Chart
				options={options}
				series={[{ data }]}
				width="100%"
				height={500}
			/>
			<Chart
				options={options2}
				series={[{ data }]}
				width="100%"
				height={500}
			/>
		</>
	);
}
