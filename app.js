var employee=[{name:"PRIYA",Age:20,salary:"Rs.150000",address:{city:"Tirupur",state:"Tamilnadu",pincode:604602}},
 {name:"SUPRIYA",Age:20,salary:"Rs.152000",address:{city:"Tirupur",state:"Tamilnadu",pincode:604602}},
{name:"SRI PRIYA",Age:20,salary:"Rs.51000",address:{city:"Tirupur",state:"Tamilnadu",pincode:604602}},
{name:"ARUN",Age:20,salary:"Rs.150000",address:{city:"Tirupur",state:"Tamilnadu",pincode:604602}},
{name:"KRISH",Age:20,salary:"Rs.150000",address:{city:"Tirupur",state:"Tamilnadu",pincode:604602}}];

for (var i in employee)
console.log("NAME:"+employee[i].name+"\nAGE:"+employee[i].Age+"\nsalary:"+employee[i].salary+"\nCITY:"+employee[i].address.city+"\nstate:"+employee[i].address.state+"\npincode:"+employee[i].address.pincode+"\n\n\n");