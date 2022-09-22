export const getPlayerToolPower = (playerTools) => {
	let toolPower = 0;
	playerTools.forEach(tool => {
		toolPower += tool.toolLevel;
	});

	return (toolPower / 3).toFixed(2);
}