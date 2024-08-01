# Next.Js Multi Stage form validation for Visiting Mars

## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `env.example` to `.env`.
4. Run the server using `npm run dev`.

## Configuration:

### Environment Variables:


- `NEXT_PUBLIC_GITHUB_ID`: Github client id.
- `NEXT_PUBLIC_GITHUB_SECRET`: Github client secret
- `NEXT_PUBLIC_GOOGLE_ID`: Google client id
- `NEXT_PUBLIC_GOOGLE_SECRET`: Google client secret
- `NEXT_PUBLIC_SECRET`: Any secret id/code to enable popup login page for google/github authentication. 
- `NEXT_PUBLIC_CLIENT_SITE_URL`: Callback url for automatic redirecting after login with google/github
- `NEXT_PUBLIC_BACKENED_URL`: Backened url to access mongodb data with expressJs. 

## Dependencies:

- `bcrypt`: Library for hashing passwords.
- `cors`: Express middleware for enabling CORS.
- `dotenv`: Loads environment variables from `.env` file.
- `express`: Web framework for Node.js.
- `jsonwebtoken`: Library for generating and verifying JWT tokens.
- `mongodb`: MongoDB driver for Node.js.
- `nodemon`: Utility for automatically restarting the server during development.

### Live Site

live site : [here](https://multi-stage-form-for-mars-visit-application.vercel.app/).

### Github Repository

Client : [here](https://github.com/rasel-gannicus/Multi-stage-form-for-visiting-Mars-application).

Server : [here](https://github.com/rasel-gannicus/Server-for-multi-stage-form-visiting-mars).