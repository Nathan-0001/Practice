import { useSelector } from 'react-redux';

const SuperCoins = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
    const calculateSuperCoins = (amount) => {
        const coins = Math.floor(amount / 10);
        return Math.min(coins, 1000000);
    };

    return (
        <div>
            <div className="super-coins" style={{textAlign:'center'}}>
                <h2 className="super-coins-title">Super Coins</h2>
                <p className="super-coins-info">You will earn {calculateSuperCoins(totalAmount)} super coins with this purchase.</p>
            </div>
        </div>
    )
}

export default SuperCoins;


