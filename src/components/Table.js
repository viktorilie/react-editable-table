import { useState } from "react";

const data = [
  {
    id: "1",
    name: "Viktor Ilie",
    email: "viktor@mail.com",
    position: "Frontend Developer",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@mail.com",
    position: "Backend Developer",
  },
  {
    id: "3",
    name: "Joe Doe",
    email: "joe@mail.com",
    position: "UI/UX Designer",
  },
];

const Table = () => {
  const [employeeData, setEmployeeData] = useState(data);

  const onChangeInput = (e, employeeId) => {
    const { name, value } = e.target;

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    );

    setEmployeeData(editData);
  };
  return (
    <div className="container">
      <h1 className="title">React Editable Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({ employeeId, name, email, position }) => (
            <tr key={employeeId}>
              <td>
                <input
                  name="name"
                  value={name}
                  type="text"
                  placeholder="Type Name..."
                  onChangeInput={(e) => onChangeInput(e, employeeId)}
                />
              </td>
              <td>
                <input
                  name="email"
                  value={email}
                  type="text"
                  plaeholder="Type Email..."
                  onChangeInput={(e) => onChangeInput(e, employeeId)}
                />
              </td>
              <td>
                <input
                  name="position"
                  value={position}
                  type="text"
                  placeholder="Type position..."
                  onChangeInput={(e) => onChangeInput(e, employeeId)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
