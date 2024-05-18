import { baseUrl, takeBase } from "@/config/base";
import { EmployeeInterface } from "../_inteface/employe-create-interface";
const POST = async (data: EmployeeInterface) => {
  const url = `${baseUrl}/api/employees`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Conexão com a rede está com problema");
  }
  const beneficio = await response.json();

  return beneficio;
};
const PUT = async (id: string, data: EmployeeInterface) => {
  const url = `${baseUrl}/api/employees/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Conexão com a rede está com problema");
  }
  const beneficio = await response.json();

  return beneficio;
};
export { POST, PUT };
