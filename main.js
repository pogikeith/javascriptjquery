console.log('it works')

var person = {
    name: 'kevin',
    age: 25, 
    LivingInCopenhagen: true,
    hobbies: ['biking' , 'snow']
}

$(document).ready(function () {
    $('.name').text(person.name)
    $('.age').text(person.age)
    $('.living').text(person.living)
    $('.hobbies').text(person.hobbies)

    $('.redbox').click(function (){
        $('.redbox').fadeOut()
    
    })
})