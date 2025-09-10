import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// import { DateDisplay } from "@/components/DateDisplay";

export function UserTable() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    //const res = await axios.get("http://localhost:3000/api/users");
    const res = await axios.get("http://localhost:3000/api/cuti/6/2025");
    setUsers(res.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Senarai Maklumat Pemohonan Cuti</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tiket Cuti ID</TableHead>
            <TableHead>Jenis Cuti</TableHead>
            <TableHead>Tarikh Mohon</TableHead>
            <TableHead>Tarikh Cuti</TableHead>
            <TableHead>Bil. Cuti</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Sokongan</TableHead>
            <TableHead>Tarikh Sokongan</TableHead>
            <TableHead>Kelulusan</TableHead>
            <TableHead>Tarikh Kelulusan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell># {user.id}</TableCell>
              <TableCell>{user.leavetype}</TableCell>
              <TableCell>{user.createddate}</TableCell>
              <TableCell>{user.date}</TableCell>
              <TableCell>{user.days}</TableCell>
              <TableCell>{user.isactive}</TableCell>
              <TableCell>{user.checker}</TableCell>
              <TableCell>{user.checkerDate}</TableCell>
              <TableCell>{user.approver}</TableCell>
              <TableCell>{user.approvelDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={fetchUsers} className="mt-4">
        Refresh
      </Button>
    </div>
  );
}
