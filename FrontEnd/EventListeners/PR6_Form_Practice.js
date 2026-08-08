let button = document.querySelector('button')
let student = []

button.addEventListener('click', (e) => {
    e.preventDefault()
    let obj = {}
    let name = document.querySelector('#name')
    let age = document.querySelector('#age')
    let gender = document.querySelector('input[name="gender"]:checked')

    let skills = Array.from(document.querySelectorAll('input.skill:checked')).map(skills => skills.value)
    let courseList = document.querySelector('#course')
    let course = courseList.options[courseList.options.selectedIndex].value

    obj.name = name.value
    obj.age = age.value
    obj.gender = gender.value
    obj.skills = skills
    obj.course = course
    student.push(obj)
    console.log(student)
    
    
    let names = document.createElement('h1')
    let ages = document.createElement('h1')
    let genders = document.createElement('h1')
    let skill = document.createElement('h1')
    let courses = document.createElement('h1')
    names.textContent = obj.name
    ages.textContent = obj.age
    genders.textContent = obj.gender
    skill.textContent = obj.skills
    courses.textContent = obj.course

    let div = document.createElement('div')


    div.append(names)
    div.append(ages)
    div.append(genders)
    div.append(skill)
    div.append(courses)

    document.body.appendChild(div)
})