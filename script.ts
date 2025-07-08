import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  const user = await prisma.user.findMany({
    where: {
      NOT: [
        { email: { startsWith: "sally" }}, 
        { age: { gt: 20}}
        ],
    },
  })

  console.log(user)
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
 