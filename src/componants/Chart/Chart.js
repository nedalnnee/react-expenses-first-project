import "./Chart.css"
import ChartBar from "./ChartBar";

const Chart = (props) => {

    let maxValue = 0;
    for (let i = 0; i < props.dataPoints.length; i++) {
        if (maxValue < props.dataPoints[i].value) {
            maxValue = props.dataPoints[i].value;
        }
    }
    console.log("Max =="+ maxValue)

    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => {
                        return <ChartBar
                            key={dataPoint.label}
                            value={dataPoint.value}
                            maxValue={maxValue}
                            label={dataPoint.label}
                        />
                    }
                )
            }
        </div>
    );
}


export default Chart;