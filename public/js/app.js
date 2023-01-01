'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {

    //write constructor ,and in javaScript constructor is key word to write it
    function Person(name, address, phone) {
        _classCallCheck(this, Person);

        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    _createClass(Person, [{
        key: 'displayInfo',
        value: function displayInfo() {
            console.log('name:' + this.name);
            console.log('address:' + this.address);
            console.log('phone:' + this.phone);
            console.log('');
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(rollno, course, name, address, phone) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, address, phone));

        _this.rollno = rollno;
        _this.course = course;
        return _this;
    }

    _createClass(Student, [{
        key: 'displayInfo',
        value: function displayInfo() {
            console.log('Rollno:' + this.rollno);
            console.log('course:' + this.course);
            _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'displayInfo', this).call(this);
        }
    }]);

    return Student;
}(Person);

var p = new Person('Pritam', 'pune', '+147822639');
p.displayInfo();
var s = new Student(143, 'DAC', 'Pritam', 'pune', '+963257');
s.displayInfo();
