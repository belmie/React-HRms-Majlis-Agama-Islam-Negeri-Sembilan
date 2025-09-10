import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from "@/components/ui/label"
// import { DateDisplay } from "@/components/DateDisplay";

export function CardCuti() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    //const res = await axios.get("http://localhost:3000/api/users");
    const res = await axios.get("http://localhost:3000/api/cuti/2025");
    setUsers(res.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Tahun <br /> Semasa
                  </CardTitle>
                   <CardDescription>
                    Anda telah membuat 265 jualan bulan ini.
                  </CardDescription>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='text-muted-foreground h-4 w-4'
                  >
                    <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                  </svg>
                </CardHeader>
                <CardContent>
                  {users.map((user) => (
                    <Label key={user.id}># {user.id}</Label>
                  ))}
                  <p className='text-muted-foreground text-xs'></p>
                </CardContent>
              </Card>
  );
}
