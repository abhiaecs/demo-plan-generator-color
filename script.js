var counter = 0;
var counter2 = 0;

function check(form) {}


function download(file) {
  if (file == '---Select---') return;
  window.location = file;

}

function enterDev() {
  var rows = document.getElementById('myTable').rows.length;
  var Environment;
  var Task;
  if (document.getElementById('prod').checked || document.getElementById('uat').checked) {
    if (document.getElementById('prod').checked) {
      Environment = "-PROD-";
      document.getElementById('myTable').rows[17].cells[3].innerHTML = "Zameer";
    } else {
      Environment = "-UAT-";
    }
  } else {
    Environment = "-INT-";
  }

if(document.getElementById('rollbackNo').checked ){
  document.getElementById('myTable').rows[4].style="display:none";
  document.getElementById('myTable').rows[5].style="display:none";
  document.getElementById('myTable').rows[6].style="display:none";
  document.getElementById('myTable').rows[7].style="display:none";
  document.getElementById('myTable').rows[8].style="display:none";
  document.getElementById('myTable').rows[9].style="display:none";
  document.getElementById('myTable').rows[10].style="display:none";

}else{

}

  for (var i = 1; i < rows; i++) {
    switch (i) {

      case 1:
        Task = "Deployment Entry Tasks";
        break;
      case 2:
        Task = "Deployment Runbook and Pre-deployment checklist review";
        break;
      case 4:
        Task = "Rollback of NiFi Components";
        break;
      case 5:
        Task = "Rollback of Kafka Components";
        break;
      case 6:
        Task = "Rollback of Hive Components";
        break;
      case 7:
        Task = "Rollback of Hadoop Components";
        break;
      case 8:
        Task = "Rollback of NAS Components";
        break;
      case 9:
        Task = "Rollback of OGG Components";
        break;
        case 10:
          Task = "Rollback of Exadata Components";
          break;
      case 11:
        Task = "Deployment of Unix Components";
        break;
      case 12:
        Task = "Deployment of HDFS Components";
        break;
      case 13:
        Task = "Deployment of Hive Components";
        break;
      case 14:
        Task = "Deployment of NiFi Components";
        break;
      case 16:
        Task = "Deployment of Kafka Components";
        break;
      case 17:
        Task = "Deployment of Exadata Components";
        break;
    }
    if (i == 3) {
      Task = "Code to be locked and dumped on NAS for deployment";
      document.getElementById('myTable').rows[i].cells[2].innerHTML = "RM-" + document.getElementById('domain').value + "-" + document.getElementById('source').value + Environment + Task;
    } else if (i == 15 ||i==9) {
      Task = "Deployment of OGG Components";
      document.getElementById('myTable').rows[i].cells[2].innerHTML = "Exelon-" + document.getElementById('domain').value + "-" + document.getElementById('source').value + Environment + Task;
    } else {
      document.getElementById('myTable').rows[i].cells[2].innerHTML = "SPP-" + document.getElementById('domain').value + "-" + document.getElementById('source').value + Environment + Task;
    }
    document.getElementById('myTable').rows[i].cells[5].innerHTML = document.getElementById('devpoc').value;
  }
  document.getElementById('myTable').rows[1].cells[3].innerHTML = document.getElementById('devpoc').value;
  document.getElementById('dwn').style.display="none";
  document.getElementById('export2').style.display="block";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  //  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function changeColor(i) {
  var e = document.getElementById('myDropdown' + i);
  var strUser = e.options[e.selectedIndex].value;
  switch (strUser) {
    case 'select':
      document.getElementById('myTable').rows[i].cells[6].style = "background-color:black";
      break;
    case 'notStarted':
      document.getElementById('myTable').rows[i].cells[6].style = "background-color:rgba(236, 100, 75, 1)";
      break;
    case 'inProgress':
      document.getElementById('myTable').rows[i].cells[6].style = "background-color:yellow";
      break;
    case 'resolved':
      document.getElementById('myTable').rows[i].cells[6].style = "background-color:rgba(107, 185, 240, 1)";
      break;
    case 'completed':
      document.getElementById('myTable').rows[i].cells[6].style = "background-color:rgba(123, 239, 178, 1)";
      break;
    default:
  }
  var e = document.getElementById('Dropdown' + i);
  var strUser = e.options[e.selectedIndex].value;
  switch (strUser) {
    case 'select':
      document.getElementById('myTable').rows[i].cells[7].style = "background-color:black";
      break;
    case 'notStarted':
      document.getElementById('myTable').rows[i].cells[7].style = "background-color:rgba(236, 100, 75, 1)";
      break;
    case 'inProgress':
      document.getElementById('myTable').rows[i].cells[7].style = "background-color:yellow";
      break;
    case 'resolved':
      document.getElementById('myTable').rows[i].cells[7].style = "background-color:rgba(107, 185, 240, 1)";
      break;
    case 'completed':
      document.getElementById('myTable').rows[i].cells[7].style = "background-color:rgba(123, 239, 178, 1)";
      break;
    default:
  }
}
