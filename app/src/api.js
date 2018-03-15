export default {
    login: (data, success, error) => fetch(
        'http://project-hogwarts.ht.cloudbalkan.com/login',
        {
            method: 'POST',
            body: data,
            mode: 'cors'
        }
    ).then(resp => {
        console.log(resp)
    }),

    register: (data) => fetch(
        'http://project-hogwarts.ht.cloudbalkan.com/login',
        {
            method: "POST",
            body: data,
            mode: 'cors'
        }
    ).then(resp => {
        console.log(resp)
    })
}