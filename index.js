class student{
    static c=0;
    constructor(name,age,phno,marks){
        student.c+=1;
        this.name=name;
        this.age=age;
        this.phno=phno;
        this.marks=marks;
    }
    setPlacementage(age){
        return (marks)=>{
            if(this.marks>marks && this.age>age)
            {
            console.log("is ready for placement");
            return true;}
            else{
            console.log("not ready for placement");
            return false;}
        }
    }
}

var obj=new student("a",20,12,80);
obj.setPlacementage(10)(50);

var a=[new student("abc",20,12,40),new student("a",20,12,80)];

for(let i of a){
    if(i.setPlacementage(10)(50)){
        console.log(i.name);
    }
}
