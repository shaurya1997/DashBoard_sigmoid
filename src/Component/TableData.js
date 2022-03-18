import { useSelector } from "react-redux";

const TableData = () => {
  const { tableData } = useSelector((state) => state.dashData);

  return (
    <div className="table-data">
      <table>
        <tr>
          <th>publisherId</th>
          <th>impressions_offered</th>
        </tr>
        {tableData &&
          tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.publisherId}</td>
                <td>{item.impressions_offered}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};
export default TableData;
