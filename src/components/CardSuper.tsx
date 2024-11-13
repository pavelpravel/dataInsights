import { CChart } from "@coreui/react-chartjs";
import React from "react";

const CardSuper = ({ title, type, styles }) => {
    const signUpElem = (
        <CChart
            type="line"
            data={{
                labels: ["0", "1/2023", "2/2023", "3/2023", "4/2023"],
                datasets: [
                    {
                        label: "My First dataset",
                        backgroundColor: "#E37659",
                        borderColor: "#E37659",
                        pointBackgroundColor: "#E37659",
                        pointBorderColor: "#fff",
                        data: [200, 300, 320, 340, 360],
                    },
                    {
                        label: "My Second dataset",
                        backgroundColor: "rgba(151, 187, 205, 1)",
                        borderColor: "rgba(151, 187, 205, 1)",
                        pointBackgroundColor: "rgba(151, 187, 205, 1)",
                        pointBorderColor: "#fff",
                        data: [120, 200, 270, 200, 240],
                    },
                ],
            }}
        />
    );

    const totalElem = (
        <CChart
            type="doughnut"
            data={{
				labels: [
				  'Red',
				  'Blue',
				  'Yellow'
				],
				datasets: [{
				  label: 'My First Dataset',
				  data: [300, 50, 100],
				  backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)'
				  ],
				  hoverOffset: 4
				}]
			  }}
            
        />
    );

	const barChart = <CChart
	type="bar"
	data={{
	  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	  datasets: [
		{
		  label: 'GitHub Commits',
		  backgroundColor: '#f87979',
		  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
		},
	  ],
	}}
	labels="months"
	options={{
	  plugins: {
		legend: {
		  labels: {
			color: '',
		  }
		}
	  },
	  scales: {
		x: {
		  grid: {
			color: '',
		  },
		  ticks: {
			color: '',
		  },
		},
		y: {
		  grid: {
			color: '',
		  },
		  ticks: {
			color: '',
		  },
		},
	  },
	}}
  />

    let content =
        type === "signups" ? signUpElem : type === "total" ? totalElem : type === "barChart" ? barChart : '';

    return (
        <div className={`${styles}  `}>
            <h3>{title}</h3>
            <hr></hr>
            <div className="flex justify-center">{content}</div>
        </div>
    );
};

export default CardSuper;
