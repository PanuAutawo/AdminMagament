import { useParams } from "react-router-dom";
import CarGrid from "../../../components/CarGrid";
import { carList } from "../../../data/carList";

function CreateRentCar() {
  const { id } = useParams(); // ดึง id จาก URL (string | undefined)
  
  // หาเฉพาะรถที่ id ตรงกัน
  const car = carList.find(c => c.id === Number(id));

  if (!car) {
    return <div>ไม่พบรถที่ต้องการ</div>;
  }

  // CarGrid ต้องการ array จึงต้องห่อ car ด้วย [ ]
  return (
    <div>
      <h1>กรอกข้อมูลการให้เช่าเพิ่มเติม</h1>
      <CarGrid cars={[car]} />
    </div>
  );
}

export default CreateRentCar;
