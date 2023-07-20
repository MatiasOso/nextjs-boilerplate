import { PrismaClient } from '@prisma/client'
//import { faker } from '@faker-js/faker';

// Okey aqui mas abajo esta para buscar los chocolates (productos, en realidad no son chocolates pero no iba a buscar varias colecciones para unos pocos resultados ;) )

const prisma = new PrismaClient()

export const getUser = async (data) => {
    try {
        console.log("PRISMA ACCEDIENDO A users ",data)
        // const allElement = await prisma.Usuarios.findFirst({ where: { email: data.username } })
        const allElement = await prisma.usuarios.findMany({})
        await prisma.$disconnect()
        console.log(allElement)
        return allElement
    } catch (error) {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

export const getCategory = async () => {

    // ... you will write your Prisma Client queries here
    try {
        const allElement = await prisma.category.findMany()
        await prisma.$disconnect()
        console.log(allElement)
        return allElement
    } catch (error) {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }

}
export const getProduct = async () => {

    // ... you will write your Prisma Client queries here
    try {
        const allElement = await prisma.Chocolates.findMany()
        await prisma.$disconnect()
        console.log(allElement)
        return allElement
    } catch (error) {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }

}
export const postProduct = async (data) => {
    
        // ... you will write your Prisma Client queries here
        try {
            const allElement = await prisma.products.create({
                data: data
            })
            await prisma.$disconnect()
            console.log(allElement)
            return allElement
        } catch (error) {
            console.error(error)
            await prisma.$disconnect()
            process.exit(1)
        } finally {
            await prisma.$disconnect()
        }
    
    }
export const postUser = async (body) => {
        try {
        const respuesta = await prisma.usuarios.create({
            data: body, 
        });
        await prisma.$disconnect();
        return respuesta;   
    }   catch (error) {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}
/*

    const generateRandomProduct = () => {
      return {
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: faker.commerce.price(),
        stock: faker.number({ min: 0, max: 100 }),
        owner: faker.firstName(),
        image: faker.image(),
        category_id: faker.uuid(),
        tags_id: faker.uuid(),
        brand_id: faker.uuid(),
        dimensions: `${faker.number({ min: 1, max: 10 })}x${faker.number({ min: 1, max: 10 })}x${faker.number({ min: 1, max: 10 })}`,
        weight: faker.number({ min: 1, max: 10 }),
        features: JSON.stringify({ color: faker.commerce.color(), size: faker.word() }),
        barcode: faker.uuid(),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      };
    };
    
export const insertRandomProducts = async () => {
        try {
          const productsToInsert = [];
      
          for (let i = 0; i < 10; i++) {
            const randomProduct = generateRandomProduct();
            productsToInsert.push(randomProduct);
          }
      console.log(productsToInsert);
          await prisma.products.createMany({
            data: productsToInsert,
            skipDuplicates: true,
          }).catch(e => {
            console.log(e);
            return [];
          });
      
          console.log('Random products inserted successfully.');
        } catch (error) {
          console.error('Error inserting random products:', error);
        } finally {
          await prisma.$disconnect();
        }
      };
      */