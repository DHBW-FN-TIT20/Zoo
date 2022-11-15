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
          age:  10,
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

      const fuchs = await prisma.animal.upsert({

        where: { abbr: 'fuchs' },
    
        update: {},
    
        create: {
          abbr: 'fuchs',
          name: 'Fuchs',
          age:  4,
          genre: {
            create: {
                title: 'Vulpes',
            }
          },
          origin: {
            create: {
                title: 'Baden-Württemberg'
            }
          },
          keeper: {
            create: {
                name: 'Uwe'
            }
          }
        },
      })

      const giraffe = await prisma.animal.upsert({

        where: { abbr: 'giraffe' },
    
        update: {},
    
        create: {
          abbr: 'giraffe',
          name: 'Giraffe',
          age:  3,
          genre: {
            create: {
                title: 'Paarhufer',
            }
          },
          origin: {
            create: {
                title: 'Afrika'
            }
          },
          keeper: {
            create: {
                name: 'Jürgen'
            }
          }
        },
      })

      const affe = await prisma.animal.upsert({

        where: { abbr: 'affe' },
    
        update: {},
    
        create: {
          abbr: 'affe',
          name: 'Affe',
          age:  7,
          genre: {
            create: {
                title: 'Primaten',
            }
          },
          origin: {
            create: {
                title: 'Amazonas'
            }
          },
          keeper: {
            create: {
                name: 'T. Schmidt'
            }
          }
        },
      })

      const ameisenbaer = await prisma.animal.upsert({

        where: { abbr: 'ameisenbaer' },
    
        update: {},
    
        create: {
          abbr: 'ameisenbaer',
          name: 'Ameisenbaer',
          age:  9,
          genre: {
            create: {
                title: 'Myrmecophaga',
            }
          },
          origin: {
            create: {
                title: 'Südamerika'
            }
          },
          keeper: {
            create: {
                name: 'Müller'
            }
          }
        },
      })

      const Elefant = await prisma.animal.upsert({

        where: { abbr: 'elefant' },
    
        update: {},
    
        create: {
          abbr: 'elefant',
          name: 'Elefant',
          age:  9,
          genre: {
            create: {
                title: 'Mammuthus',
            }
          },
          origin: {
            create: {
                title: 'Südafrika'
            }
          },
          keeper: {
            create: {
                name: 'Sabine'
            }
          }
        },
      })

      const christoph = await prisma.animal.upsert({

        where: { abbr: 'christoph' },
    
        update: {},
    
        create: {
          abbr: 'christoph',
          name: 'Christoph',
          age:  22,
          genre: {
            create: {
                title: 'Human',
            }
          },
          origin: {
            create: {
                title: 'Ulm'
            }
          },
          keeper: {
            create: {
                name: 'Koßlowski'
            }
          }
        },
      })

      const erdmaennchen = await prisma.animal.upsert({

        where: { abbr: 'erdmaennchen' },
    
        update: {},
    
        create: {
          abbr: 'erdmaennchen',
          name: 'Erdmaennchen',
          age:  2,
          genre: {
            create: {
                title: 'Suricata',
            }
          },
          origin: {
            create: {
                title: 'Botswana'
            }
          },
          keeper: {
            create: {
                name: 'Ulrike'
            }
          }
        },
      })

      const panda = await prisma.animal.upsert({

        where: { abbr: 'panda' },
    
        update: {},
    
        create: {
          abbr: 'panda',
          name: 'Panda',
          age:  6,
          genre: {
            create: {
                title: 'Ailuropodinae',
            }
          },
          origin: {
            create: {
                title: 'China'
            }
          },
          keeper: {
            create: {
                name: 'Mike'
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