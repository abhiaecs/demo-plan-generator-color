var counter = 0;
var counter2 = 0;

function check(form) {
  var src = document.forms["Form"]["table"].value;
  var target = document.forms["Form"]["Hive_Table_Name"].value;
  var message = "This Configuration will be applied to all the input DDLs";
  message += "\r\r\n\n";
  message += "Do you still want to continue?";

  var message1 = "This Configuration will be applied to one input DDL";
  message1 += "\r\r\n\n";
  message1 += "Do you still want to continue?";

  var noUpload = document.getElementById("dontUpload");
  if (noUpload.checked == true) {
    if (src == null || src == "" && target == null || target == "") {
      return confirm(message);
    }else {
      return confirm(message1);
    }
  }
}


function download(file) {
  if (file == '---Select---') return;
  window.location = file;

}

function showUpload() {
  var noUpload = document.getElementById("dontUpload");
  var displayUpload = document.getElementById("displayUpload");

  var yesUpload = document.getElementById("yesUpload");
  var displayEntire = document.getElementById("displayEntire");

  //var sourceCheck=document.getElementById('source');
  //var sc=sourceCheck.options[sourceCheck.selectedIndex].value;
  //var targetCheck=document.getElementById('target');
  //var tar=targetCheck.options[targetCheck.selectedIndex].value;
  //var displayEntireForm=document.getElementById('displayEntireForm');
  var sCheck = document.getElementById('source').value;
  var tCheck = document.getElementById('target').value;
  var check = document.getElementById('displayEntireForm');

  if (noUpload.checked == true) {
    displayEntire.style.display = "block";
    displayUpload.style.display = "none";
    document.getElementById("uploadConfigFlag").value = "false";
    if (sCheck !== "select" && tCheck!=="select") {
      check.style.display = "block";
    }
    //   if(sc=="select"&& tar=="select"){
    //     displayEntireForm.style.display='block';
    //    }

  } else if (yesUpload.checked == true) {
    displayUpload.style.display = "block";
    displayEntire.style.display = "none";
    document.getElementById("uploadConfigFlag").value = "true"
  }



}

function showDropdown() {
  var Yes = document.getElementById("Yes");
  var displayDropdown = document.getElementById("displayDropdown");
  if (Yes.checked == true) {
    displayDropdown.style.display = 'block';
  } else {
    displayDropdown.style.display = 'none';
  }
}

function addField(argument) {
  var myTable = document.getElementById("myTable");
  var currentIndex = myTable.rows.length;
  var currentRow = myTable.insertRow(-1);

  var ColumnNameBox = document.createElement("input");
  ColumnNameBox.setAttribute("type", "text");
  ColumnNameBox.setAttribute("id", "ColumnName" + currentIndex);
  ColumnNameBox.setAttribute("name", "ColumnName" + currentIndex);
  ColumnNameBox.setAttribute("placeholder", "ColumnName");

  var ColumnTypeBox = document.createElement("input");
  ColumnTypeBox.setAttribute("type", "text");
  ColumnTypeBox.setAttribute("id", "ColumnType" + currentIndex);
  ColumnTypeBox.setAttribute("name", "ColumnType" + currentIndex);
  ColumnTypeBox.setAttribute("placeholder", "ColumnType");

  var currentCell = currentRow.insertCell(-1);
  currentCell.appendChild(ColumnNameBox);

  currentCell = currentRow.insertCell(-1);
  currentCell.appendChild(ColumnTypeBox);

  currentCell = currentRow.insertCell(-1);
  counter++;
  document.getElementById("numFields").value = document.getElementById("myTable").rows.length
}

function removeField(argument) {
  var myTable = document.getElementById('myTable')
  if (counter > 0) {
    var delRow = myTable.deleteRow(counter + 1);
    counter--;
  }
}

function propTable() {

  var AddColumn = document.getElementById("AddColumn");
  var myTable = document.getElementById("myTable");

  var AddColumnFamily = document.getElementById("AddColumnFamily");
  var myTable2 = document.getElementById("myTable2");

  if (AddColumn.checked == true) {
    myTable.style.display = "block";
    myTable2.style.display = "none";
    document.getElementById("uploadConfigFlag").value = "false"
  } else {
    myTable.style.display = "none";

  }
  if (AddColumnFamily.checked == true) {
    myTable2.style.display = "block";
    document.getElementById("uploadConfigFlag").value = "false"
  } else {
    myTable2.style.display = "none";
  }
}


function addField2(argument) {
  var myTable = document.getElementById("myTable2");
  var currentIndex = myTable.rows.length;
  var currentRow = myTable.insertRow(-1);

  var ColumnNameBox = document.createElement("input");
  ColumnNameBox.setAttribute("type", "text");
  ColumnNameBox.setAttribute("id", "ColumnFamily" + currentIndex);
  ColumnNameBox.setAttribute("name", "ColumnFamily" + currentIndex);
  ColumnNameBox.setAttribute("placeholder", "ColumnFamily");

  var ColumnTypeBox = document.createElement("input");
  ColumnTypeBox.setAttribute("type", "text");
  ColumnTypeBox.setAttribute("id", "ColumnNames" + currentIndex);
  ColumnTypeBox.setAttribute("name", "ColumnNames" + currentIndex);
  ColumnTypeBox.setAttribute("placeholder", "ColumnName");

  var currentCell = currentRow.insertCell(-1);
  currentCell.appendChild(ColumnNameBox);

  currentCell = currentRow.insertCell(-1);
  currentCell.appendChild(ColumnTypeBox);

  currentCell = currentRow.insertCell(-1);
  counter2++;
  document.getElementById("numFieldsT2").value = document.getElementById("myTable2").rows.length


}

function removeField2(argument) {
  var myTable = document.getElementById('myTable2')
  if (counter2 > 0) {
    var delRow = myTable2.deleteRow(counter2 + 1);
    counter2--;
  }
}

function showHive(argument) {
  alert();
}

function showHbase(control) {
  if (control.value == "Hbase") {
    document.getElementById('HiveBucket').style.display = 'none';
    document.getElementById('HivePartition').style.display = 'none';
    document.getElementById('HiveNumBuckets').style.display = 'none';
    document.getElementById('HiveLocation').style.display = 'none';
    document.getElementById('HiveFieldT').style.display = 'none';
    document.getElementById('HiveStorage').style.display = 'none';
    document.getElementById('HiveLineT').style.display = 'none';
    document.getElementById('HiveProps').style.display = 'none';
    //	document.getElementById('AddColumnFamily').disabled = false;
    document.getElementById('AddColumnFamilyLabel').style.display = 'block';
  } else {
    document.getElementById('HiveBucket').style.display = 'block';
    document.getElementById('HivePartition').style.display = 'block';
    document.getElementById('HiveNumBuckets').style.display = 'block';
    document.getElementById('HiveLocation').style.display = 'block';
    document.getElementById('HiveFieldT').style.display = 'block';
    document.getElementById('HiveStorage').style.display = 'block';
    document.getElementById('HiveLineT').style.display = 'block';
    document.getElementById('HiveProps').style.display = 'block';
    document.getElementById('AddColumnFamilyLabel').style.display = 'none';
    //  document.getElementById('AddColumnFamily').disabled = true;

  }
}

function showSequence(argument) {
  if (argument.value == "Text") {
    document.getElementById("HiveStorageText").style.display = "block";
    document.getElementById("HiveStorageORC").style.display = "none";
  } else if (argument.value == "ORC") {
    document.getElementById("HiveStorageORC").style.display = "block";
    document.getElementById("myTable3").style.display = "block";
    document.getElementById("HiveStorageText").style.display = "none";
  } else {
    document.getElementById("HiveStorageText").style.display = "none";
    document.getElementById("HiveStorageORC").style.display = "none";
  }
}
