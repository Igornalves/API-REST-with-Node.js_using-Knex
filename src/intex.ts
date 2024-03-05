interface User {
    anivesario: number
}

function calculoDeIdade(user: User) {
    return new Date().getFullYear() - user.anivesario
}

calculoDeIdade({
    anivesario:2004
});

