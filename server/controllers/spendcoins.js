//update the user to decrease their coins when select a product:

const handleSpendCoins = (req, res, db) =>  {

    const { id, price } = req.body;

    db('users').where('id', '=', id).then(user => {

        if (typeof user !== "undefined") {

            if (user[0].coins >= price) {
    
                return db('users').where('id', '=', id)
    
                .decrement('coins', price)
    
                .returning('coins')
    
                .then(coins => {
                    res.json(coins[0]);
                })
    
                .catch(err => res.status(400).json('unable to spend coins'));
            }
    
            else {
                return res.status(202).json('You can`t afford this product. Keep Working!');
            }
        }
    
        else {
            res.status(404).json('user id not found');
        }
    })
    
}

module.exports = {

    handleSpendCoins: handleSpendCoins

};