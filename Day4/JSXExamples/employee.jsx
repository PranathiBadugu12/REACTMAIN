class Employee{
	var empId=0;
	var ename="";
	var salary=0;

	function constructor(){
		log("Default constructor of Employee is called");
		this.empId=0;
		this.ename="";
		this.salary=0;
	}

	function constructor(id:number,name:string,sal:number){
		log("Parameterised constructor of Employee is called");
		this.empId=id;
		this.ename=name;
		this.salary=sal;
	}

	function showDetails() : void{
		log("Employee details are "+this.empId+" "+this.ename+" "+this.salary);
	}

}


class _Main {
    static function main(args : string[]) : void {
                var e1=new Employee(101,"Eshan",10000);
        //e1.showDetails();
        const numbers = [1,2,3,4,5];
        const listItem = numbers.map((number) => "<li key="+number.toString()+">"+number+"</li>");
        	log(listItem);
    }
}





