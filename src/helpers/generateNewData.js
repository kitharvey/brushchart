export default function generateNewData(rawData) {
	return rawData.map((data) => {
		const date = new Date(data["Date"]).getTime();
		const value = Number(data["Revenue"].replace(/[^0-9.-]+/g, ""));
		return [date, value];
	});
}
