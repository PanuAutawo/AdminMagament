import CarForm from '../../../components/CarForm';
import { useParams, useNavigate } from 'react-router-dom';
import { carList } from '../../../data/carList';

const EditCarTentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carList.find(c => c.id === Number(id));

  if (!car) return <div>ไม่พบรถ</div>;

  const handleSubmit = (data: any) => {
    console.log("แก้ไขรถในเตนท์:", data);
    navigate('/stock/edit');
  };

  return (
    <div>
      <h2>แก้ไขรถในเตนท์</h2>
      <CarForm initialData={car} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditCarTentPage;
