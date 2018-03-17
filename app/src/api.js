export default {
    login: (data, success, error) => fetch(
        'http://'+ window.location.hostname + ':5000/login',
        {
            method: 'POST',
            body: data,
            mode: 'cors'
        }
    ).then(resp => resp.json()).then(resp => {
        if (resp.code === "1") {
            sessionStorage.setItem('uid', resp.id)
            sessionStorage.setItem('logged_in', true)
            success(resp)
        } else {
            error(resp)
        }
    }),

    register: (data, success, error) => fetch(
        'http://'+ window.location.hostname + ':5000/register',
        {
            method: "POST",
            body: data,
            mode: 'cors'
        }
    ).then(resp => resp.json()).then(resp => {
        if (resp.code === "1") {
            success(resp)
        } else {
            error(resp)
        }
    }),

    get_folder_structure: (success, error) => fetch(
        'http://' + window.location.hostname + ':5000/get_filesystem',
        {
            method: "POST",
            mode: 'cors'
        }
    ).then(resp => resp.json()).then(resp => {
        if (resp.code === "1") {
            success(resp)
        } else {
            error(resp)
        }
    }),

    get_file_content: (path, success, error) => {
        var form_data = new FormData()
        form_data.append('path', path)
        fetch('http://' + window.location.hostname + ':5000/get_file_content',
            {
                method:'POST',
                body: form_data,
                mode: 'cors'
            }
        ).then(resp => resp.json()).then(resp => {
            if (resp.code === "1") {
                success(resp)
            } else {
                error(resp)
            }
        })
    }
}