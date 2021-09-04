function myFunction() {
  const games = ['game1', 'game2', 'Rest',];
  const courses = ['Frontend', 'Backend', 'DevOps', 'Android', 'AWS', 'React', 'Podcasts', 'Codewars',];
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cells = sheet.getActiveRangeList().getRanges();
  
  console.log(cells)
  for (var i = 0; i < cells.length; i++) {
    console.log(cells[i])
    for (var j = 0; j < cells[i].getNumRows(); j++){
      var rand = Math.floor((Math.random() * 100) + 1)
      if (rand < 51){
          var entry = 'Task1'
          var bg = '#f9cb9c'
      } else if (rand < 71){
          var entry = 'Task2'
          var bg = '#b6d7a8'
      } else if (rand < 81){
          var entry = games[Math.floor(Math.random() * games.length)];
          var bg = '#b7b7b7'
      } else{
          var entry = courses[Math.floor(Math.random() * courses.length)];
          var bg = '#a4c2f4'
      }
      cells[i].getCell(1+j,1).setValue(entry).setBackground(bg)
    }
  }
}
