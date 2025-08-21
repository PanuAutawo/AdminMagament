import React, { useState } from 'react';
import { carList } from '../data/carList';

const CarFilter: React.FC = () => {
  // State เก็บค่ากรอง
  const [brandFilter, setBrandFilter] = useState('');
  const [conditionFilter, setConditionFilter] = useState('');

  // กรอง carList ตาม brand และ condition
  const filteredCars = carList.filter(car => {
    return (
      (brandFilter === '' || car.brand.toLowerCase().includes(brandFilter.toLowerCase())) &&
      (conditionFilter === '' || car.condition.toLowerCase().includes(conditionFilter.toLowerCase()))
    );
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>กรองรถยนต์</h2>

      <div style={{ marginBottom: 20 }}>
        <label>
          Brand: &nbsp;
          <input
            type="text"
            placeholder="เช่น Toyota, Honda"
            value={brandFilter}
            onChange={e => setBrandFilter(e.target.value)}
          />
        </label>

        &nbsp;&nbsp;&nbsp;

        <label>
          Condition: &nbsp;
          <input
            type="text"
            placeholder="เช่น สวย, ปานกลาง"
            value={conditionFilter}
            onChange={e => setConditionFilter(e.target.value)}
          />
        </label>
      </div>

      <div>
        <h3>ผลลัพธ์ {filteredCars.length} รายการ</h3>
        <ul>
          {filteredCars.map(car => (
            <li key={car.id}>
              <strong>{car.brand} {car.model} {car.subModel}</strong> - สภาพ: {car.condition} - ราคา: {car.price.toLocaleString()} บาท
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarFilter;
