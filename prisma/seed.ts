import prisma from "../lib/prisma";

async function main() {
    const tiger = await prisma.animal.upsert({

        where: { abbr: 'sib-tiger' },
    
        update: {},
    
        create: {
          abbr: 'sib-tiger',
          name: 'Sibirischer Tiger',
          age:  15,
          genre: {
            create: {
                title: 'Eigentliche Großkatze',
            }
          },
          origin: {
            create: {
                title: 'Asien'
            }
          },
          keeper: {
            create: {
                name: 'Mark'
            }
          }
        },
      });
    const wolf = await prisma.animal.upsert({

        where: { abbr: 'wolf' },
    
        update: {},
    
        create: {
          abbr: 'wolf',
          name: 'Wolf',
          age:  15,
          genre: {
            create: {
                title: 'Raubtier',
            }
          },
          origin: {
            create: {
                title: 'Tirol'
            }
          },
          keeper: {
            create: {
                name: 'Manuel'
            }
          }
        },
      })
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    });