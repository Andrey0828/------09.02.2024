async function getUsers() {
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    let html = ''
    data['users'].forEach(user => {
        html += `
            <div class="card">
                <div class="card-header">
                    <img src="${user.image}" alt="${user.firstName}" class="card-image">
                    <h1 class="card-name">${user.firstName} ${user.lastName}</h1>
                    <p class="card-email">${user.email}</p>
                </div>
                <div class="card-body">
                    <table class="card-table">
                        <tr>
                            <td>Девичья фамилия</td>
                            <td>${user.maidenName}</td>
                        </tr>
                        <tr>
                            <td>Возраст</td>
                            <td>${user.age}</td>
                        </tr>
                        <tr>
                            <td>Пол</td>
                            <td>${user.gender}</td>
                        </tr>
                        <tr>
                            <td>Телефон</td>
                            <td>${user.phone}</td>
                        </tr>
                        <tr>
                            <td>Группа крови</td>
                            <td>${user.bloodGroup}</td>
                        </tr>
                        <tr>
                            <td>Рост</td>
                            <td>${user.height} см</td>
                        </tr>
                        <tr>
                            <td>Вес</td>
                            <td>${user.weight} кг</td>
                        </tr>
                        <tr>
                            <td>Цвет глаз</td>
                            <td>${user.eyeColor}</td>
                        </tr>
                        <tr>
                            <td>Цвет и тип волос</td>
                            <td>${user.hair.color} ${user.hair.type}</td>
                        </tr>
                        <tr>
                            <td>Адрес</td>
                            <td>${user.address.address}, ${user.address.city}, ${user.address.state} ${user.address.postalCode}</td>
                        </tr>
                        <tr>
                            <td>Координаты</td>
                            <td>${user.address.coordinates.lat}, ${user.address.coordinates.lng}</td>
                        </tr>
                    </table>
                </div>
            </div>
        `
    })

    document.getElementById('user-cards').innerHTML = html
}

getUsers()