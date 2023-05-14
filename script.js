function insert_Row() {
    //Write your code here
	var table = document.getElementById("SampleTable");

	var newRow = table.insertRow(0);

	var leftCell = newRow.insertCell(0);
	var rightCell = newRow.insertCell(1);

	leftCell.innerHTML = "New Cell1";
	rightCell.innerHTML = "New Cell2";
}
