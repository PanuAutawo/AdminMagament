import type { CarInfo } from '../interfaces/Car';
import CarCard from './CarCard';
import { Link } from 'react-router-dom';

interface CarGridProps {
  cars: CarInfo[];
  editBasePath?: string;
  addBasePath?: string;
  deleteBasePath?: string;
  rentBasePath?: string;
  sellBasePath?: string;
}

const CarGrid: React.FC<CarGridProps> = ({
  cars,
  editBasePath,
  addBasePath,
  deleteBasePath,
  rentBasePath,
  sellBasePath,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // fix 3 columns
        gap: '5px',
        padding: '10px',
      }}
    >
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          editPath={editBasePath ? `${editBasePath}/${car.id}` : undefined}
          deletePath={deleteBasePath ? `${deleteBasePath}/${car.id}` : undefined}
          rentPath={rentBasePath ? `${rentBasePath}/${car.id}` : undefined}
          sellPath={sellBasePath ? `${sellBasePath}/${car.id}` : undefined}
        />
      ))}
      {addBasePath && (
        <Link
          to={addBasePath}
          style={{
            border: '2px dashed #999',
            borderRadius: 8,
            width: 500,
            padding:'10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            minHeight:300
            
          }}
        >
          ➕
        </Link>
      )}
    </div>
  );
};

export default CarGrid;
