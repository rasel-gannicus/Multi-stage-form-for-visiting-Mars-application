# Next.js Multi Stage Form Validation for Visiting Mars

A multi-step form for visiting Mars. Users have to go through three stages of submitting the form. Users can navigate back and forth to edit their submission. There is an authentication system so that users can register and log in to save their information in a MongoDB database.

## Technologies Used

- **Frontend:** Next.js, TypeScript, Redux, Tailwind CSS, HTML, CSS, React TailwindCSS Datepicker, React Icons, React Hot Toast  
- **Backend:** Node.js, Express, MongoDB, Firebase
- **Authentication:** NextAuth, JWT Token 
- **State Management:** RTK Query, Redux

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `env.example` to `.env`.
4. Run the server using `npm run dev`.

## Configuration

### Environment Variables

- `NEXT_PUBLIC_GITHUB_ID`: GitHub client ID.
- `NEXT_PUBLIC_GITHUB_SECRET`: GitHub client secret.
- `NEXT_PUBLIC_GOOGLE_ID`: Google client ID.
- `NEXT_PUBLIC_GOOGLE_SECRET`: Google client secret.
- `NEXT_PUBLIC_SECRET`: Any secret key for enabling popup login page for Google/GitHub authentication.
- `NEXT_PUBLIC_CLIENT_SITE_URL`: Callback URL for automatic redirecting after login with Google/GitHub.
- `NEXT_PUBLIC_BACKEND_URL`: Backend URL to access MongoDB data with Express.js.

## Dependencies

- `bcrypt`: Library for hashing passwords.
- `cors`: Express middleware for enabling CORS.
- `dotenv`: Loads environment variables from `.env` file.
- `express`: Web framework for Node.js.
- `jsonwebtoken`: Library for generating and verifying JWT tokens.
- `mongodb`: MongoDB driver for Node.js.
- `nodemon`: Utility for automatically restarting the server during development.

### Live Site

Live site: [here](https://multi-stage-form-for-mars-visit-application.vercel.app/).

### GitHub Repository

- Client: [here](https://github.com/rasel-gannicus/Multi-stage-form-for-visiting-Mars-application).
- Server: [here](https://github.com/rasel-gannicus/Server-for-multi-stage-form-visiting-mars).
