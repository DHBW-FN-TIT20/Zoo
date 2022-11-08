#!/bin/sh
npx prisma db seed
npx prisma migrate deploy
npm start