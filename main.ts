import { PrismaClient } from "@prisma/client";

async function main() {
  const client = new PrismaClient();

  const data = await client.user.findMany({
    where: {
      profile: {
        bio: { not: null },
      },
    },
  });
  console.log(data);
  client.disconnect();
}

main();
