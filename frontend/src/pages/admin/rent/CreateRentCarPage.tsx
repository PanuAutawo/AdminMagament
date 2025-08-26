import { useParams } from "react-router-dom";
import CarGrid from "../../../components/CarGrid";
import { carList } from "../../../data/carList";
import "../../../styles/CreateSellCarPage.css"
import RentDateRange from "../../../components/RentDateRange";
import {
  Button,
  Form,
  Input,
} from 'antd';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 30 },
  },
};

function CreateRentCarPage() {
  const { id } = useParams(); // ดึง id จาก URL (string | undefined)
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);


  // หาเฉพาะรถที่ id ตรงกัน
  const car = carList.find(c => c.id === Number(id));

  if (!car) {
    return <div>ไม่พบรถที่ต้องการ</div>;
  }
  return (
    <>
      <div style={{width:'100%'}}>
        <h1 style={{ marginTop: 90, marginLeft: 30 }}>กรอกข้อมูลการขายเพิ่มเติม</h1>
        <div style={{ display: "flex", paddingRight: 10, paddingLeft: 10, width: '100%' }}>
          <div style={{ marginTop: 20 }}>
            <div className="showCar">
              <CarGrid cars={[car]} />
            </div>
          </div>
          <div style={{ marginLeft: 150, width: '100%', marginTop: 40 }}>
            <Form
              {...formItemLayout}
              form={form}
              variant={variant || "outlined"}
              style={{ maxWidth: 500 }}
              initialValues={{ variant: "outlined" }}
              onFinish={(values) => {
                console.log("Form submitted:", values);
              }}
            >
              <Form.Item
                
                name="TextArea"
                rules={[{ required: true, message: "โปรดป้อนคำอธิบาย" }]}
              >
                <Input.TextArea
                  placeholder="กรอกคำอธิบายเพิ่มเติม..."
                  size="large"
                />
              </Form.Item>

              {/* ✅ ตรงนี้คือ component ที่เชื่อมกับ form */}
              <Form.Item
                
                name="rentPeriods"
                valuePropName="value"
                
              >
                <RentDateRange />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit" size="large">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateRentCarPage;
