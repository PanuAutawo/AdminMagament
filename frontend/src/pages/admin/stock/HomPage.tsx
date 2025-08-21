// HomePage.tsx
import React, { useState, useMemo } from 'react';
import Filter from '../../../components/Filter';
import { carList } from '../../../data/carList';
import CarGrid from '../../../components/CarGrid';
import '../../../styles/sidebar.css';
import Sorter from '../../../components/Sorter';
import { Button} from 'antd';
import { Link } from 'react-router-dom';

const conditionOrder = ['ดี', 'ปานกลาง', 'แย่'];

const HomePage: React.FC = () => {
  const [filters, setFilters] = useState<FilterValues | null>(null);
  const [sortOption, setSortOption] = useState<SortOption | undefined>(undefined);

  const filteredCars = useMemo(() => {
    let result = carList;

    if (filters) {
      result = result.filter((c) => {
        if (filters.brand && c.brand !== filters.brand) return false;
        if (filters.model && c.model !== filters.model) return false;
        if (filters.priceRange) {
          const p = c.price ?? 0;
          if (p < filters.priceRange[0] || p > filters.priceRange[1]) return false;
        }
        if (filters.yearRange) {
          const y = c.yearManufactured ?? 0;
          if (y < filters.yearRange[0] || y > filters.yearRange[1]) return false;
        }
        if (filters.mileageMax !== null && filters.mileageMax !== undefined) {
          if ((c.mileage ?? 0) > (filters.mileageMax ?? Number.MAX_SAFE_INTEGER)) return false;
        }
        if (filters.isAvailable && !c.status?.includes('available')) return false;
        if (filters.conditions && filters.conditions.length > 0) {
          if (!filters.conditions.includes(c.condition ?? '')) return false;
        }
        return true;
      });
    }

    // 🔹 ส่วน sorting ต้องอยู่ใน useMemo ด้วย
    if (sortOption) {
      result = [...result].sort((a, b) => {
        switch (sortOption) {
          case 'priceAsc': return (a.price ?? 0) - (b.price ?? 0);
          case 'priceDesc': return (b.price ?? 0) - (a.price ?? 0);
          case 'mileageAsc': return (a.mileage ?? 0) - (b.mileage ?? 0);
          case 'mileageDesc': return (b.mileage ?? 0) - (a.mileage ?? 0);
          case 'condition':
            return (conditionOrder.indexOf(a.condition ?? 'แย่')) - (conditionOrder.indexOf(b.condition ?? 'แย่'));
          case 'yearUsedAsc': return (a.yearUsed ?? 0) - (b.yearUsed ?? 0);
          case 'yearUsedDesc': return (b.yearUsed ?? 0) - (a.yearUsed ?? 0);
          default: return 0;
        }
      });
    }

    return result;
  }, [filters, sortOption]);


  return (
    <>

      <div style={{ display: 'Flex' }}>
        <div style={{ zIndex: 2 }}>
          <Filter
            carList={carList}
            width={300}
            onApply={(v) => setFilters(v)}
            onClear={() => setFilters(null)}
          />
        </div>
        <div style={{ marginLeft: 280, marginTop:45 }}>
          <main className="mainWithSidebar">
            <div style={{ height: 80,display: 'Flex', alignItems:'center',position:'fixed',width:'100%',backgroundColor:'#FFD700',zIndex:10,justifyContent:'space-between', padding:20}}>
              <h2>รถทั้งหมดในเตนท์</h2>
              <Sorter value={sortOption} onChange={setSortOption} />
              <div style={{marginRight:300}}>
                 <Link to="/stock/registerNewcar">
                  <Button type="primary">+ ลงทะเบียนรถใหม่</Button>
                  </Link>
              </div>
            </div>
            <div style={{paddingTop:80,paddingLeft:30}}>
            <CarGrid cars={filteredCars} sellBasePath="/sell/add" rentBasePath="/rent/add" addBasePath="/stock/add" editBasePath="/stock/edit" />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;
