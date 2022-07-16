// import intern
const Intern = require('../lib/intern')

// testing Intern
// can be instantiated
test('can create an new Intern', () => {
    const intern = new Intern(1, 'Fred', 'fred.testing@gmail.com', 'Monash Uni')
    expect(intern).toBeInstanceOf(Intern)
})

// testing getSchool()
test('can get school by calling getSchool()', () => {
    const school = 'Monash Uni'
    const intern = new Intern(1, 'Fred', 'fred.testing@gmail.com', 'Monash Uni')
    const getSchool = intern.getSchool()
    expect(getSchool).toBe(school)
    expect(intern.school) .toEqual(expect.any(String))
})

// testing getRole()
test('can get role by calling getRole()', () => {
    const role = 'Intern'
    const intern = new Intern(1, 'Fred', 'fred.testing@gmail.com', 'Monash Uni')
    const getRole = intern.getRole()
    expect(getRole).toBe(role)
})
