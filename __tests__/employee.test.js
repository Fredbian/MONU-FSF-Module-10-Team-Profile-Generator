// import employee
const Employee = require('../lib/employee')

// testing Employee
// can be instantiated
test('can be instantiated', () => {
    const employee = new Employee(1, 'Fred', 'fred.testing@gmail.com')
    expect(employee).toBeInstanceOf(Employee)
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String))
})

// testing id in constructor
test('can set id in constructor ', () => {
    const id = 2
    const employee = new Employee(id, 'Fred', 'fred.testing@gmail.com')
    expect(employee.id).toBe(id)
})

// testing name in constructor
test('can set name in constructor', () => {
    const name = 'Fred'
    const employee = new Employee(1, name, 'fred.testing@gmail.com')
    expect(employee.name).toBe(name)
})

// testing email in constructor
test('can set email in constructor', () => {
    const email = 'fred.testing@gmail.com'
    const employee = new Employee(1, 'Fred', email)
    expect(employee.email).toBe(email)
})

// testing getId()
test('can get id by calling getId()', () => {
    const id = 1
    const employee = new Employee(id, 'Fred', 'fred.testing@gmail.com')
    const getId = employee.getId()
    expect(getId).toBe(id)
    expect(employee.getId()).toEqual(expect.any(Number))
})

// testing getName()
test('can get name by calling getName()', () => {
    const name = 'Fred'
    const employee = new Employee(1, name, 'fred.testing@gmail.com')
    const getName = employee.getName()
    expect(getName).toBe(name)
    expect(employee.getName()).toEqual(expect.any(String))
})

// testing getEmail()
test('can get email by calling getEmail()', () => {
    const email = 'fred.testing@gmail.com'
    const employee = new Employee(1, 'Fred', email)
    const getEmail = employee.getEmail()
    expect(getEmail).toBe(email)
    expect(employee.getEmail()).toEqual(expect.any(String))
})

// testing getRole()
test('can get role by calling getRole()', () => {
    const role = 'Employee'
    const employee = new Employee(1, 'Fred', 'fred.testing@gmail.com')
    const getRole = employee.getRole()
    expect(getRole).toBe(role)
})
