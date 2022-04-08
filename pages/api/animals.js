export default function animals(req, res) {
    const animals = [
        'cat',
        'dog',
        'capybara',
        'alpaca',
        'ostrich',
        'pangolin',
        'bull',
        'armadillo'
    ]

    // get a random animal
    const rando = animals[Math.floor(Math.random() * animals.length)]
    res.status(200).json({ rando })
}