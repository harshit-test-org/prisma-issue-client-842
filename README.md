# Introduction

Reproduction for https://github.com/prisma/prisma-client-js/issues/842

## Steps

1. Clone the repo and run `yarn`
2. Replace credentials in `prisma/.env`
3. Run `npx prisma migrate save --experimental && npx prisma migrate up --experimental`
4. Run `npx prisma generate` 
5. Run `yarn start`


## Version info
```
Environment variables loaded from prisma/.env
@prisma/cli          : 2.5.1-dev.3
Current platform     : darwin
Query Engine         : query-engine 9a670138b1db276001d785a2adcba1584c869d24 (at node_modules/@prisma/cli/query-engine-darwin)
Migration Engine     : migration-engine-cli 9a670138b1db276001d785a2adcba1584c869d24 (at node_modules/@prisma/cli/migration-engine-darwin)
Introspection Engine : introspection-core 9a670138b1db276001d785a2adcba1584c869d24 (at node_modules/@prisma/cli/introspection-engine-darwin)
Format Binary        : prisma-fmt 9a670138b1db276001d785a2adcba1584c869d24 (at node_modules/@prisma/cli/prisma-fmt-darwin)
Studio               : 0.261.0
```


### Engine queries
2.5.1-dev.3
```graphql
query {
 findManyUser(where: {
   profile: {
     is: {
       bio: {
         not: null
       }
     }
   }
 }) {
   id
   email
   name
 }
}
```

2.4.1
```graphql
query {
 findManyUser(where: {
   profile: {
     bio_not: null
   }
 }) {
   id
   email
   name
 }
}
```
