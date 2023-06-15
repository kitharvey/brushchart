import "./App.css";
import BrushChart from "./BrushChart";
import ButtonAppBar from "./ButtonAppBar";
import generateNewData from "./helpers/generateNewData";
import sampleData from "./sample-data.json";

function App() {
	const data = generateNewData(sampleData);
	return (
		<div className="App">
			<ButtonAppBar />
			<BrushChart data={data} />
		</div>
	);
}

export default App;
