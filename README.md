# Reels - Video Platform

A modern video platform built with Next.js, MongoDB, and TypeScript.

## Features

- User authentication with secure password hashing
- Video upload and management
- Optimized video playback with customizable dimensions
- MongoDB integration for data persistence
- TypeScript for enhanced type safety
- Tailwind CSS with DaisyUI for styling

## Tech Stack

- **Framework**: Next.js 15.2
- **Database**: MongoDB with Mongoose
- **Authentication**: Custom implementation with bcryptjs
- **Styling**: Tailwind CSS + DaisyUI
- **Language**: TypeScript
- **Font**: Geist (Sans + Mono)

## Prerequisites

- Node.js 18 or higher
- MongoDB database
- Environment variables setup

## Environment Variables

Create a `.env` file in the root directory with:

```env
MONGODB_URI=your_mongodb_connection_string
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd reels
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/app` - Next.js application routes and layouts
- `/lib` - Utility functions and database connection
- `/models` - Mongoose models (User, Video)
- `/public` - Static assets
- `/types` - TypeScript type definitions

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Models

### User Model
- Email (unique)
- Password (hashed)
- Timestamps

### Video Model
- Title
- Description
- Video URL
- Thumbnail URL
- Customizable dimensions and quality
- Timestamps

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is private and not licensed for public use.