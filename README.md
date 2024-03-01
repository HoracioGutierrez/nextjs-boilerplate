# NextJS Boilerplate

This is a personal boilerplate in case I need to create a new NextJS application. It comes already integrated with some stuff.

## Technologies

* NextJS
* Auth.js
* Tailwind
* ShadCN
* Next Themes
* Prisma
* MongoDB
* Google OAuth

## Usage

1. clone the project 

```
> git clone http://...
```

2. move to the cloned folder

```
> cd {folder}
```

3. install everything

```
> npm i
```

4. complete with your own enviroment variables

```
#.env
DATABASE_URL=xxxxx
```

```
#.env.local
GOOGLE_CLIENT_ID = xxxxx
GOOGLE_CLIENT_SECRET = xxxxx
NEXTAUTH_SECRET = xxxxx
```

5. setup Prisma

```
> npx prisma generate
> npx prisma db push
```

6. start the application

```
npm run dev
```


Enjoy!