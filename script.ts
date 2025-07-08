import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 27,
        name: "Kyle",
      },
    },
  })

  console.log(user)
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
 