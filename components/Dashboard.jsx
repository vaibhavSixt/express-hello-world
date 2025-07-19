import React from 'react';

const menu = {
    breakfast: [
        { name: 'Pancakes', description: 'Fluffy pancakes with maple syrup', price: '$5' },
        { name: 'Omelette', description: 'Cheese & veggie omelette', price: '$4' },
        { name: 'Fruit Bowl', description: 'Seasonal fresh fruits', price: '$3' },
    ],
    lunch: [
        { name: 'Grilled Chicken Sandwich', description: 'Served with fries', price: '$7' },
        { name: 'Caesar Salad', description: 'Classic Caesar with chicken', price: '$6' },
        { name: 'Tomato Soup', description: 'Creamy tomato soup', price: '$4' },
    ],
    dinner: [
        { name: 'Steak', description: 'Grilled steak with veggies', price: '$12' },
        { name: 'Pasta Alfredo', description: 'Creamy Alfredo sauce', price: '$9' },
        { name: 'Roasted Salmon', description: 'Served with rice', price: '$11' },
    ],
};

function getMenuType() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 11) return 'breakfast';
    if (hour >= 11 && hour < 17) return 'lunch';
    return 'dinner';
}

const Dashboard = () => {
    const menuType = getMenuType();
    const items = menu[menuType];

    return (
        <div style={{
            fontFamily: 'sans-serif',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            minHeight: '100vh',
            padding: '40px',
        }}>
            <h1 style={{ textAlign: 'center', color: '#4f46e5', marginBottom: '24px' }}>
                {menuType.charAt(0).toUpperCase() + menuType.slice(1)} Menu
            </h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '32px',
                flexWrap: 'wrap',
            }}>
                {items.map((item, idx) => (
                    <div key={idx} style={{
                        background: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0 4px 16px rgba(79,70,229,0.08)',
                        padding: '24px',
                        minWidth: '220px',
                        maxWidth: '260px',
                        textAlign: 'center',
                        transition: 'transform 0.2s',
                    }}>
                        <h2 style={{ color: '#6366f1', marginBottom: '8px' }}>{item.name}</h2>
                        <p style={{ color: '#64748b', marginBottom: '12px' }}>{item.description}</p>
                        <span style={{
                            display: 'inline-block',
                            background: '#6366f1',
                            color: '#fff',
                            borderRadius: '8px',
                            padding: '6px 16px',
                            fontWeight: 'bold',
                        }}>{item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;