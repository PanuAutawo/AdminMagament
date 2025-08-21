import { useParams } from "react-router-dom";
import CarGrid from "../../../components/CarGrid";
import { carList } from "../../../data/carList";
import "../../../styles/CreateSellCarPage.css"
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
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
const salePersons = [
  { SalePerson_ID: 1, name: 'สมชาย' },
  { SalePerson_ID: 2, name: 'สมศรี' },
  { SalePerson_ID: 3, name: 'John Doe' },
];



function CreateSellCar() {
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
      <div >
        <h1 style={{ marginTop: 90, marginLeft: 30 }}>กรอกข้อมูลการขายเพิ่มเติม</h1>
        <div style={{ display: "flex", paddingRight: 10, paddingLeft: 10, width: '100%'}}>
          <div style={{ marginTop: 20 }}>
            <div className="showCar">
              <CarGrid cars={[car]} />
            </div>
          </div>
          <div style={{marginLeft:150 ,width:'100%',marginTop:40}}>
            <Form
              {...formItemLayout}
              form={form}
              variant={variant || 'outlined'}
              style={{ maxWidth: 500 }}
              initialValues={{ variant: 'outlined' }}
            >
              <Form.Item
                label="ป้อนคำโฆษณา"
                name="TextArea"
                rules={[{ required: true, message: 'โปรดป้อนคำอธิบาย' }]}
              >
                <Input.TextArea placeholder="กรอกคำอธิบายเพิ่มเติม..." size="large" />
              </Form.Item>

              <Form.Item
                label="ระบุราคาขาย"
                name="InputPrice"
                rules={[{ required: true, message: 'โปรดป้อนราคาขาย' }]}
              >
                <InputNumber<number>
                  style={{ width: '100%' }}
                  placeholder="กรอกราคาขาย"
                  size="large"
                  formatter={(value) =>
                    value !== undefined && value !== null
                      ? `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                      : ''
                  }
                  parser={(displayValue) => {
                    const n = Number((displayValue ?? '').replace(/[^\d.-]/g, ''));
                    return Number.isNaN(n) ? NaN : n; // ต้องคืน number เสมอ
                  }}
                  min={0}
                />
              </Form.Item>

              <Form.Item label="ระบุส่วนลด" name="InputDiscount">
                <InputNumber<number>
                  style={{ width: '100%' }}
                  placeholder="กรอกส่วนลด"
                  size="large"
                  formatter={(value) =>
                    value !== undefined && value !== null ? `${value}%` : ''
                  }
                  parser={(displayValue) => {
                    const n = Number((displayValue ?? '').replace(/[^\d.-]/g, ''));
                    return Number.isNaN(n) ? NaN : n;
                  }}
                  min={0}
                  max={100}
                />
              </Form.Item>

              <Form.Item
                label="เลือกพนักงาน"
                name="SalePerson_ID"
                rules={[{ required: true, message: 'โปรดเลือกพนักงาน!' }]}
              >
                <Select placeholder="เลือกพนักงาน" size="large">
                  {salePersons.map((sp) => (
                    <Select.Option key={sp.SalePerson_ID} value={sp.SalePerson_ID}>
                      {sp.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <div>
                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                  <Button type="primary" htmlType="submit" size="large">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateSellCar;
