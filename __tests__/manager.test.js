// import manager
const Manager = require('../lib/manager')

// testing Manager
// can be instantiated
test('can create an new Manager', () => {
    const manager = new Manager(1, 'Fred', 'fred.testing@gmail.com', 12345)
    expect(manager).toBeInstanceOf(Manager)
})

// testing getOfficeNumber()
test('can get office number by calling getOfficeNumber()', () => {
    const officeNumber = 12345
    const manager = new Manager(1, 'Fred', 'fred.testing@gmail.com', 12345)
    const getOfficeNumber = manager.getOfficeNumber()
    expect(getOfficeNumber).toBe(officeNumber)
    expect(manager.officeNumber).toEqual(expect.any(Number))
})

// testing getRole()
test('can get role by calling getRole()', () => {
    const role = 'Manager'
    const manager = new Manager(1, 'Fred', 'fred.testing@gmail.com', 12345)
    const getRole = manager.getRole()
    expect(getRole).toBe(role)
})