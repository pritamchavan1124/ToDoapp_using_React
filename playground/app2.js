class Person{

    //write constructor ,and in javaScript constructor is key word to write it
    constructor(name,address,phone){
        this.name=name
        this.address=address
        this.phone=phone
    }
    displayInfo(){
        console.log(`name:${this.name}`)
        console.log(`address:${this.address}`)
        console.log(`phone:${this.phone}`)
        console.log('')
    }
}

class Student extends Person{
    constructor(rollno,course,name,address,phone){
        super(name,address,phone)
        this.rollno=rollno
        this.course=course
    }
    displayInfo(){
        console.log(`Rollno:${this.rollno}`)
        console.log(`course:${this.course}`)
        super.displayInfo()

    }
}
const p=new Person('Pritam','pune','+147822639')
p.displayInfo()
const s=new Student(143,'DAC','Pritam','pune','+963257')
s.displayInfo()