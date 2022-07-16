// import engineer
const Engineer = require('../lib/engineer')

// testing Engineer
// can be instantiated
test('can create an new Engineer', () => {
    const engineer = new Engineer(1, 'Fred', 'fred.testing@gmail.com', 'Fredbian')
    expect(engineer).toBeInstanceOf(Engineer)
})

// testing getGithub()
test('can get Github by calling getGithub()', () => {
    const github = 'Fredbian'
    const engineer = new Engineer(1, 'Fred', 'fred.testing@gmail.com', 'Fredbian')
    const getGithub = engineer.getGithub()
    expect(getGithub).toBe(github)
    expect(engineer.github) .toEqual(expect.any(String))
})

// testing getRole()
test('can get role by calling getRole()', () => {
    const role = 'Engineer'
    const engineer = new Engineer(1, 'Fred', 'fred.testing@gmail.com', 'Fredbian')
    const getRole = engineer.getRole()
    expect(getRole).toBe(role)
})
