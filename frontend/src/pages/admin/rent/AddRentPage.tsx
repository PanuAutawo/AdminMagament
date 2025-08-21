import CarGrid from '../../../components/CarGrid';
import { carList } from '../../../data/carList';
import { carSellList } from '../../../data/carSellList';
import { carRentList } from '../../../data/carRentList';

const AddRentPage = () => {
  const filteredCars = carList.filter(car =>
    !carSellList.some(sellCar => sellCar.id === car.id) && (!carRentList.some(carRent => carRent.id === car.id))
  );
  return (
    <div>
      <h2>เพิ่มรถให้เช่า</h2>
      <CarGrid cars={filteredCars}
        rentBasePath="/rent/add"
      />
    </div>
  );
};

export default AddRentPage;
