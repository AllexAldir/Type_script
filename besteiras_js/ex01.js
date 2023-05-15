var constador = 0

$('#generator').on('click', function () {
    constador++
    if (constador >= 4) return $('.modal').modal('show')
    $('#spinner1').addClass('spinner-border')

    async function requi() {

        try {
            let teste = await fetch('https://jsonplaceholder.typicode.com/photos')
                .then(data => data.json())

            if (teste) $('#spinner1').removeClass('spinner-border')
            teste.forEach(e => {
                $('#old').append(`<tr><td>${e.albumId}</td><td>${e.id}</td><td>${e.thumbnailUrl}</td><td>${e.title}</td><td>${e.url}</td></tr>`)
            });


        } catch (error) {
            console.error(error)
        }

    }

    requi()
})


