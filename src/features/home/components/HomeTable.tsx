import Card from "@/components/common/Card";
import { DataTable, type ColumnType } from "@/components/common/DataTable";
import HeaderSection from "@/components/common/HeaderSection";
import { homeData } from "@/constants/home.constant";
import type { HomeData } from "@/types/home.type";

const columns: ColumnType<HomeData>[] = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Description", dataIndex: "description", key: "description" },
  { title: "Date", dataIndex: "date", key: "date" },
];

const HomeTable = () => {
  return (
    <div className="space-y-4">
        <HeaderSection title="Tambah data" isButtonVisible buttonText="Tambah Data" />
      <Card>
        <DataTable columns={columns} dataSource={homeData} />
      </Card>
    </div>
  );
};

export default HomeTable;
