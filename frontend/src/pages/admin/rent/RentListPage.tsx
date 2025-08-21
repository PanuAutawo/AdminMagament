import { carList } from '../../../data/carList';
import CarGrid from '../../../components/CarGrid';
import { carRentList } from '../../../data/carRentList';

const RentListPage = () => {
  const filteredCars = carList.filter(car =>
      carRentList.some(rentcar => rentcar.id === car.id)
    );

  return (
    <div>
      <h2>รถที่กำลังให้เช่า</h2>
      <CarGrid 
        cars={filteredCars}
        editBasePath="/rent/edit"
        addBasePath="/rent/add"
        />
    </div>
  );
};

export default RentListPage;
