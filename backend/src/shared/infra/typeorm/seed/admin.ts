import { hash } from "bcrypt";
import createConnection from '../index';
import { randomUUID } from "crypto"


async function create() {
  const connection = await createConnection("localhost");

  const id = randomUUID();
  const password = await hash("admin", 10);

  
  await connection.query(
    ` INSERT INTO USERS(id, name, email, password, user_dms , "is_admin", "is_active", create_at)
    VALUES('${id}', 'admin', 'admin@grandbrasil.com.br', '${password}', 'admin', true, true, 'now()')
    `
  );

  await connection.close;
}

create().then(() => console.log("User admin created"));