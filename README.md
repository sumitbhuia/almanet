# Almanet: Student and Alumni Connect Platform

Almanet is a secure, scalable platform designed to foster networking, collaboration, and engagement between students and alumni within a university or campus. Think of it as a closed-circle LinkedIn, enabling users to share opportunities, collaborate on startup ideas, fundraise, and connect over academic and industry prospects. Each institute has its own private community, powered by a robust tech stack including **Next.js**, **Supabase**, **TypeScript**, and **Shadcn UI**.

## ✨ Features

- **Secure Networking**: Connect with students and alumni in a private, institute-specific environment with advanced search and filtering.
- **Event Management**: Create, discover, and manage events with registration, RSVP tracking, and calendar integration.
- **Fundraising Campaigns**: Launch, manage, and track fundraising campaigns with secure payment processing.
- **Mentorship Programs**: Connect students with alumni mentors through intelligent matching algorithms.
- **Job Board & Opportunities**: Share and discover job openings, internships, and professional opportunities.
- **Group & Community Management**: Create and join interest-based groups, chapters, and communities.
- **Rich User Profiles**: Showcase education, experience, skills, and achievements on customizable profiles.
- **Communication Tools**: Stay connected through direct messaging, notifications, and email updates.
- **Resource Sharing**: Access shared resources, documents, and knowledge repositories.
- **Mobile Access**: Engage with the platform on-the-go through responsive design and optimization.
- **Analytics Dashboard**: Track engagement metrics and community growth with detailed insights.
- **Strong Data Protection**: Enterprise-grade security with granular privacy controls for users.

## 🚀 Competitive Advantage

Almanet stands out from other alumni networking platforms by offering:

- **Institute-Specific Focus**: Custom-tailored networking spaces for each educational institution.
- **Modern Tech Stack**: Built with the latest technologies ensuring speed, security, and scalability.
- **Seamless User Experience**: Intuitive, accessible interface with minimal learning curve.
- **Affordable Pricing**: Cost-effective solution compared to enterprise alternatives.
- **Developer-Friendly**: Open architecture with integration capabilities for institutional systems.
- **Continuous Innovation**: Regular updates with new features and improvements.

## 🔧 Tech Stack

- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Supabase (Authentication, Database, Storage, Realtime)
- **State Management**: React Context (`store/useStore.ts`) and Zustand
- **Email**: React Email and Resend
- **Deployment**: Vercel
- **Analytics**: Custom analytics with Supabase
- **Utilities**: Custom hooks (`hooks/useEvents.tsx`, `hooks/useProfile.tsx`) and Supabase utilities (`utils/supabase/`)

## 📁 Project Structure

```
├── app/                    # Next.js pages and layouts
│   ├── (auth)/             # Authentication routes (sign-in, sign-up, etc.)
│   ├── donate/             # Donation page
│   ├── events/             # Events page
│   ├── funds/              # Fundraising page
│   ├── home/               # Home page
│   └── profile/            # User profile page
├── actions/                # Server actions (e.g., authActions.ts)
├── components/             # Shared React components
│   ├── design/             # Design utilities and providers
│   ├── forms/              # Form components
│   ├── sections/           # Section components (hero, header, etc.)
│   └── ui/                 # Shadcn UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Shared utilities
├── public/                 # Static assets (logos, icons, images)
├── store/                  # State management
├── utils/                  # Helper functions and Supabase utilities
└── middleware.ts           # Next.js middleware
```

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/almanet.git
   cd almanet
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

### Adding Shadcn UI Components

To add a new Shadcn UI component, run:

```bash
npx shadcn@latest add <component-name>
```

Example:

```bash
npx shadcn@latest add button
```

## 🛠️ Development Workflow

- **Version Control**: Use Git with descriptive commit messages following the format:

  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for formatting changes
  - `refactor:` for code refactoring
  - `test:` for adding tests
  - `chore:` for maintenance tasks

- **Code Review**: Submit pull requests for all changes with clear descriptions.
- **Testing**: Test in multiple environments (development, staging, production).
- **Releases**: Follow semantic versioning and maintain a changelog.

## 🔌 Supabase Integration

Almanet uses Supabase for authentication and database operations. Key utilities are located in `utils/supabase/`:

- `client.ts`: Initializes the Supabase client for client-side operations.
- `server.ts`: Server-side Supabase utilities with enhanced security.
- `admin.ts`: Admin-level Supabase operations for privileged actions.
- `middleware.ts`: Authentication middleware for route protection.

## 🔮 Future Roadmap

- **AI-Powered Matching**: Enhanced algorithms for connecting alumni and students.
- **Advanced Analytics**: Deeper insights into network engagement and growth.
- **Mobile Apps**: Native mobile applications for iOS and Android.
- **Integration Marketplace**: Expand connectivity with third-party services.
- **Virtual Events**: Built-in virtual event hosting and management.
- **Enhanced Fundraising Tools**: More sophisticated campaign management.
- **Internationalization**: Support for multiple languages and regions.

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-feature`).
3. Commit changes with clear messages (`git commit -m "feat: add new feature"`).
4. Push to the branch (`git push origin feat/your-feature`).
5. Open a pull request with a detailed description.

<!-- ## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

 ## 📞 Contact

For questions or support, contact the Almanet team at support@almanet.io.

```

``` -->
