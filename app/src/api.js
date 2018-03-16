export default {
    login: (data, success, error) => fetch(
        'http://project-hogwarts.ht.cloudbalkan.com/login',
        {
            method: 'POST',
            body: data,
            mode: 'cors'
        }
    ).then(resp => resp.json()).then(resp => {
        if (resp.code === "1") {
            sessionStorage.setItem('uid', resp.id)
            sessionStorage.setItem('logged_in', true)
            success()
        } else {
            error()
        }
    }),

    register: (data, success, error) => fetch(
        'http://project-hogwarts.ht.cloudbalkan.com/login',
        {
            method: "POST",
            body: data,
            mode: 'cors'
        }
    ).then(resp => resp.json()).then(resp => {
        if (resp.code === "1") {
            success()
        } else {
            error()
        }
    })
}