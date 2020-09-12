function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 100;
  }
  
  const totalCost= costOfMonitors(7,8)
  
  console.log(totalCost)
  