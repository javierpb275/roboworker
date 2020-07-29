//update the user to increase their coins:

const handleEarnCoins = (req, res, db) => {

    const { id } = req.body;

    db('users').where('id', '=', id)

    .increment('coins', 1)

    .returning('coins')

    .then(coins => {
        res.json(coins[0]);
    })

    .catch(err => res.status(400).json('unable to earn coins'));

}

module.exports = {

    handleEarnCoins: handleEarnCoins

};