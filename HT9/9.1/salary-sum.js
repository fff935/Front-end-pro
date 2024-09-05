let company = {
    sales: [
      { name: "John", salary: 1000 },
      { name: "Alice", salary: 600 },
    ],
    development: {
      web: [
        { name: "Peter", salary: 2000 },
        { name: "Alex", salary: 1800 },
      ],
      internals: [{ name: "Jack", salary: 1300 }],
    },
  };
  
  function calculateTotalSalary(department) {
    let total = 0;
  
    if (Array.isArray(department)) {
      for (let worker of department) {
        total += worker.salary;
      }
    // } else {
    //   for (let subDepartment in department) {
    //     total += calculateTotalSalary(department[subDepartment]);
    //   }
    // }
  
    return total;
  }
  
  let totalSalary = calculateTotalSalary(company);
  
  console.log(totalSalary);
  