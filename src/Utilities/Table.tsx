import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Configurations } from "../Components/Home";
import "../Styles/Table.scss";

interface Props {
  configuration: Configurations[];
}

const TableForm = ({ configuration }: Props) => {
  return (
    <Table striped bordered hover className="boots-table" variant="dark">
      <thead>
        <tr>
          <th>Vendor</th>

          <th>Condition Parameter 1</th>

          <th>Condition Operator</th>

          <th>Condition Parameter 2</th>

          <th>Edit</th>
        </tr>
      </thead>

      <tbody>
        {configuration &&
          configuration.map((item) => (
            <tr key={item.return_value}>
              <td>{item.return_value}</td>

              <td>{item.condition.condition_parameter_1}</td>

              <td>{item.condition.condition_operator}</td>

              <td>{item.condition.condition_parameter_2}</td>

              <td>
                <Link to={`/dashboard/${item.return_value}`}>
                  <Button type='button' variant="secondary">
                    Edit
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default TableForm;
