import React from 'react';

const DishList = ({ dishes = [] }) => {
  return (
    <div className="min-h-screen bg-yellow-500 flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">Dishes</h2>
        {dishes.length > 0 ? (
          dishes.map((dish) => (
            <div key={dish._id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h3 className="text-lg font-semibold mb-2">{dish.name}</h3>
              <div className="mb-2">
                <strong>Ingredients:</strong> {dish.ingredients.join(', ')}
              </div>
              <div className="mb-4">
                <strong>Instructions:</strong> {dish.instructions}
              </div>
            </div>
          ))
        ) : (
          <p>No dishes available.</p>
        )}
      </div>
    </div>
  );
};

export default DishList;
