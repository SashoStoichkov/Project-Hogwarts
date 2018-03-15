export default {
    login: (data, success, error) => fetch(
        'http://project-hogwarts.ht.cloudbalkan.com/login',
        {
            method: 'POST',
            body: data
        }
    ).then(resp => {
        print(resp)
    }),

    register: (data) => fetch(
        'http://project-hogwarts.ht.cloudbalkan.com/login'
    )
}