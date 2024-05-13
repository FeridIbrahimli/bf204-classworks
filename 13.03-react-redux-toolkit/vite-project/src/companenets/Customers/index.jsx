import { Button, Table } from "antd";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteCustomerByIDMutation, useGetAllCustomerQuery } from "../../services/customerApi";
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const CustomerTable = () => {
  const {data,refetch}=useGetAllCustomerQuery()
  const [deleteCustomerByID]=useDeleteCustomerByIDMutation()
  const columns = [
    {
      title: "Customer id",
      dataIndex: "id",
    },
    {
      title: "Customer Name",
      dataIndex: "companyName",
    },
    {
      title: "Address",
      render:(record)=>{
        return `${record.address?.city}, ${record.address?.country}`
      }
    },
    {
      title: "Phone",
      
      render:(record)=>{
        return `${record.address?.phone}`
      }
    },
    {
      title: "Add to Favorites",
      dataIndex: "",
    },
    {
      title: "Delete",
      render:( record)=>{
        return (<>
        <Button onClick={async ()=>{
          await deleteCustomerByID(record.id)
          refetch()
          

        }}>
         <DeleteIcon/>
        </Button>
        </>)
      }
    },
  ];
  return (
    <Table
      columns={columns}
     dataSource={data}
      onChange={onChange}
      rowKey={"id"}
      pagination={{
        pageSize: 15,
      }}
    />
  );
};

export default CustomerTable;
