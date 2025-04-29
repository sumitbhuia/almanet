# Almanet: Product Requirements Document

**Version:** 1.1  
**Date:** June 10, 2024  
**Author:** Almanet Product Team

## 1. Introduction

### 1.1 Purpose

This document outlines the product requirements for Almanet, a comprehensive alumni and student engagement platform designed for universities and educational institutions. It serves as the definitive source of information for the product's features, capabilities, user experience, and technical specifications.

### 1.2 Product Vision

Almanet aims to create a secure, private network where alumni and students can connect, collaborate, and support each other within their institutional community. It addresses the gap between generic social networks and institution-specific engagement by providing a tailored platform for each university.

### 1.3 Target Audience

- **Educational Institutions:** Universities, colleges, schools seeking alumni engagement solutions
- **Alumni Offices:** Departments responsible for alumni relations and development
- **Students & Alumni:** End-users looking to network within their institutional community
- **Donors & Supporters:** Individuals contributing to fundraising initiatives
- **Student Entrepreneurs:** Students seeking funding and mentorship for startup ideas

## 2. Market Analysis

### 2.1 Industry Overview

The alumni engagement software market is projected to grow significantly as educational institutions increasingly recognize the importance of maintaining active alumni networks for fundraising, mentorship, and institutional reputation.

### 2.2 Competitor Analysis

| Competitor      | Strengths                                              | Weaknesses                                                |
| --------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| **Almabase**    | Strong CRM integration, comprehensive analytics        | Higher pricing, complex setup                             |
| **Graduway**    | Wide adoption (500+ institutions), established brand   | Limited customization, separate add-ons for core features |
| **Hivebrite**   | All-in-one platform, mobile app, robust group features | Expensive, steep learning curve                           |
| **Alumnifire**  | Budget-friendly, quick implementation                  | Limited advanced features                                 |
| **PeopleGrove** | Strong career advancement focus, mentorship tools      | Less comprehensive in other areas                         |

### 2.3 Market Opportunity

Almanet can capture market share by offering:

- More affordable pricing for small-to-medium institutions
- Modern, intuitive UX that doesn't require extensive training
- Fully integrated features without add-on pricing
- Emphasis on student-alumni connection (not just alumni-alumni)
- Developer-friendly architecture with open API access

## 3. User Personas

### 3.1 Institution Administrator

**Profile:** Alumni relations director or staff member responsible for managing the institution's alumni network.
**Goals:**

- Increase alumni engagement and participation
- Manage events and fundraising campaigns
- Track engagement metrics and ROI
- Maintain up-to-date alumni data

### 3.2 Alumni User

**Profile:** Graduate of the institution seeking to maintain connection with alma mater and fellow alumni.
**Goals:**

- Network with other alumni professionally
- Stay updated on institution news and events
- Give back through mentorship or donations
- Access career opportunities and resources

### 3.3 Student User

**Profile:** Current student looking to build connections and prepare for post-graduation.
**Goals:**

- Connect with alumni in desired career fields
- Find mentorship opportunities
- Discover internships and job openings
- Participate in networking events

### 3.4 Development Officer

**Profile:** Fundraising professional at the institution seeking to increase donations.
**Goals:**

- Launch and manage fundraising campaigns
- Track donation metrics and donor engagement
- Identify potential major donors
- Communicate impact of donations

## 4. Product Features

### 4.1 Core Features

#### 4.1.1 User Management & Profiles

- Secure authentication system with email verification
- Customizable user profiles with education, experience, skills
- Privacy controls for information sharing
- Role-based access (admin, moderator, user)
- Profile verification system for alumni
- Media uploads for profile pictures and cover images

#### 4.1.2 Networking & Directory

- Searchable member directory with advanced filtering
- Connection requests and networking tools
- Alumni map showing geographic distribution
- Tagging system for skills, interests, and industries
- Smart recommendations for connections

#### 4.1.3 Groups & Communities

- Creation of interest-based groups and chapters
- Regional/geographic chapters with local admins
- Class year groups for cohort-based networking
- Industry-specific groups for professional connections
- Discussion forums within groups with rich text formatting
- Media sharing (images, videos, documents) in group discussions
- Topic organization and pinned posts
- Reactions and threaded replies

#### 4.1.4 Communication Hub

- Direct messaging between users (text, images, files)
- Group chats for teams and projects
- Video calling with screen sharing capabilities
- Audio-only calling option
- Presence indicators (online, away, offline)
- Read receipts and typing indicators
- Message formatting and emoji support
- Link previews for shared URLs

#### 4.1.5 Event Management

- Event creation and promotion tools
- RSVP and ticketing functionality
- Calendar integration (Google, Outlook, iCal)
- Virtual event hosting capabilities
- Post-event surveys and feedback collection
- Analytics on attendance and engagement

#### 4.1.6 Mentorship Program

- Mentor-mentee matching system
- Scheduling and meeting management
- Goal setting and progress tracking
- Feedback and rating system
- Resource sharing between mentors and mentees

#### 4.1.7 Job Board & Career Resources

- Job posting system for alumni and employers
- Resume/CV repository
- Career resource library
- Industry insights and reports
- Internship opportunities for students

#### 4.1.8 Fundraising & Donations

- Campaign creation and management
- Secure payment processing
- Recurring donation options
- Class giving challenges and competitions
- Impact reporting and transparency
- Donor recognition and acknowledgment

#### 4.1.9 Startup Funding Platform

- Student startup profile creation
- Pitch deck and video uploads
- Funding goal setting and progress tracking
- Investor matching with interested alumni
- Milestone updates and reporting
- Mentor connection for guidance

#### 4.1.10 Analytics & Reporting

- Engagement metrics dashboard
- User activity reports
- Event performance analytics
- Fundraising campaign tracking
- Export capabilities for data analysis

### 4.2 Technical Features

#### 4.2.1 Security & Privacy

- End-to-end encryption for messages
- GDPR and CCPA compliance
- Data backup and recovery systems
- Two-factor authentication
- Privacy controls and content permissions

#### 4.2.2 Media Handling

- Image upload and optimization
- Video upload and streaming
- Document sharing and previews
- Storage optimization and CDN integration
- Media moderation tools

#### 4.2.3 Performance Optimization

- Redis caching for frequently accessed data
- Lazy loading for media content
- Infinite scrolling for feed-based views
- Data prefetching for common navigation paths
- Backend query optimization

#### 4.2.4 Integration Capabilities

- API for third-party integrations
- CRM system integration (Salesforce, Blackbaud)
- Single Sign-On (SSO) capabilities
- Calendar integration
- Social media sharing

#### 4.2.5 Accessibility

- WCAG 2.1 AA compliance
- Screen reader compatibility
- Keyboard navigation support
- Color contrast considerations
- Multilingual support (future)

## 5. User Experience

### 5.1 Information Architecture

```
├── Public Pages
│   ├── Home/Landing
│   ├── About
│   ├── Features
│   ├── Pricing
│   └── Contact
├── Authentication
│   ├── Sign In
│   ├── Sign Up
│   ├── Password Reset
│   └── Email Verification
├── Dashboard
│   ├── Activity Feed
│   ├── Upcoming Events
│   ├── Notifications
│   └── Quick Actions
├── Directory
│   ├── Search
│   ├── Filters
│   ├── Map View
│   └── Connection Management
├── Groups
│   ├── My Groups
│   ├── Discover Groups
│   ├── Group Pages
│   └── Discussions
├── Events
│   ├── Calendar View
│   ├── List View
│   ├── Event Details
│   └── My RSVPs
├── Mentorship
│   ├── Mentor Matching
│   ├── My Mentorships
│   ├── Resources
│   └── Feedback
├── Career Center
│   ├── Job Listings
│   ├── Applications
│   ├── Career Resources
│   └── Saved Jobs
├── Giving
│   ├── Active Campaigns
│   ├── Donation History
│   ├── Impact Reports
│   └── Payment Methods
└── Settings
    ├── Profile
    ├── Privacy
    ├── Notifications
    └── Account Management
```

### 5.2 User Flows

#### 5.2.1 User Registration

1. User visits landing page
2. Clicks "Sign Up" and enters email with institutional domain
3. Receives verification email
4. Completes profile setup
5. Receives welcome tour of features

#### 5.2.2 Finding & Connecting with Alumni

1. User navigates to directory
2. Applies filters (year, industry, location)
3. Views alumni profiles matching criteria
4. Sends connection request with personalized message
5. Receives notification when request is accepted

#### 5.2.3 Event Creation & Management

1. Admin creates new event with details
2. Sets up registration/ticketing options
3. Publishes event to community
4. Sends invitations to relevant groups
5. Manages RSVPs and attendee communications
6. Collects post-event feedback

#### 5.2.4 Launching a Fundraising Campaign

1. Admin creates campaign with goal, timeline, description
2. Sets up donation tiers and perks
3. Launches campaign with initial promotion
4. Tracks progress and sends updates
5. Closes campaign and reports on results
6. Acknowledges donors and shares impact

## 6. Technical Specifications

### 6.1 Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Supabase (Authentication, Database, Storage, Functions)
- **Real-time Features**: Supabase Realtime, WebSockets
- **Caching**: Redis for performance optimization
- **Media Processing**: FFmpeg for video, Sharp for image processing
- **State Management**: React Context, Zustand
- **Email**: React Email, Resend
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions
- **Analytics**: Custom analytics with Supabase

### 6.2 Database Schema (Core Entities)

```
Users
  - id (PK)
  - email
  - full_name
  - avatar_url
  - graduation_year
  - major
  - location
  - industry
  - company
  - title
  - bio
  - skills
  - privacy_settings
  - created_at
  - updated_at

Connections
  - id (PK)
  - requestor_id (FK -> Users.id)
  - recipient_id (FK -> Users.id)
  - status (pending, accepted, rejected)
  - created_at
  - updated_at

Groups
  - id (PK)
  - name
  - description
  - type (interest, chapter, class_year)
  - privacy (public, private)
  - cover_image_url
  - created_by (FK -> Users.id)
  - created_at
  - updated_at

GroupMembers
  - id (PK)
  - group_id (FK -> Groups.id)
  - user_id (FK -> Users.id)
  - role (admin, moderator, member)
  - joined_at

Events
  - id (PK)
  - title
  - description
  - start_time
  - end_time
  - location
  - is_virtual
  - meeting_link
  - max_attendees
  - created_by (FK -> Users.id)
  - group_id (FK -> Groups.id, nullable)
  - created_at
  - updated_at

EventAttendees
  - id (PK)
  - event_id (FK -> Events.id)
  - user_id (FK -> Users.id)
  - status (registered, attended, cancelled)
  - registered_at

MentorshipPrograms
  - id (PK)
  - name
  - description
  - start_date
  - end_date
  - created_by (FK -> Users.id)
  - created_at
  - updated_at

MentorshipRelationships
  - id (PK)
  - program_id (FK -> MentorshipPrograms.id)
  - mentor_id (FK -> Users.id)
  - mentee_id (FK -> Users.id)
  - status (active, completed, cancelled)
  - created_at

Jobs
  - id (PK)
  - title
  - company
  - location
  - description
  - application_url
  - posted_by (FK -> Users.id)
  - expires_at
  - created_at
  - updated_at

Campaigns
  - id (PK)
  - title
  - description
  - goal_amount
  - current_amount
  - start_date
  - end_date
  - status (draft, active, completed)
  - created_by (FK -> Users.id)
  - created_at
  - updated_at

Donations
  - id (PK)
  - campaign_id (FK -> Campaigns.id)
  - user_id (FK -> Users.id)
  - amount
  - is_anonymous
  - message
  - transaction_id
  - created_at

Messages
  - id (PK)
  - sender_id (FK -> Users.id)
  - recipient_id (FK -> Users.id, nullable)
  - group_id (FK -> Groups.id, nullable)
  - message_type (text, image, video, file)
  - content
  - read_at
  - created_at
  - updated_at

Forums
  - id (PK)
  - group_id (FK -> Groups.id)
  - name
  - description
  - created_by (FK -> Users.id)
  - created_at
  - updated_at

ForumThreads
  - id (PK)
  - forum_id (FK -> Forums.id)
  - title
  - content
  - is_pinned
  - created_by (FK -> Users.id)
  - created_at
  - updated_at

ForumPosts
  - id (PK)
  - thread_id (FK -> ForumThreads.id)
  - parent_id (FK -> ForumPosts.id, nullable)
  - content
  - created_by (FK -> Users.id)
  - created_at
  - updated_at

MediaFiles
  - id (PK)
  - user_id (FK -> Users.id)
  - file_type (image, video, document)
  - file_name
  - file_size
  - file_path
  - content_type
  - entity_type (profile, message, forum, startup)
  - entity_id
  - created_at

Startups
  - id (PK)
  - founder_id (FK -> Users.id)
  - name
  - description
  - industry
  - stage (idea, prototype, seed, etc)
  - funding_goal
  - current_funding
  - pitch_deck_url
  - created_at
  - updated_at

StartupTeamMembers
  - id (PK)
  - startup_id (FK -> Startups.id)
  - user_id (FK -> Users.id)
  - role
  - joined_at

Investments
  - id (PK)
  - startup_id (FK -> Startups.id)
  - investor_id (FK -> Users.id)
  - amount
  - created_at

VideoCalls
  - id (PK)
  - initiator_id (FK -> Users.id)
  - room_id
  - status (scheduled, active, completed)
  - start_time
  - end_time
  - created_at

VideoCallParticipants
  - id (PK)
  - call_id (FK -> VideoCalls.id)
  - user_id (FK -> Users.id)
  - joined_at
  - left_at
```

### 6.3 API Endpoints

Almanet will use a combination of RESTful APIs and GraphQL to provide flexible data access. Key API categories include:

- User Management
- Authentication
- Networking
- Groups
- Events
- Mentorship
- Jobs
- Donations
- Analytics

Detailed API documentation will be maintained separately.

### 6.4 Third-Party Integrations

- Payment processors (Stripe)
- Email service providers (Resend)
- Calendar services (Google, Outlook)
- Video conferencing (Zoom, Google Meet)
- CRM systems (Salesforce, Blackbaud)
- Social media sharing (LinkedIn, Twitter, Facebook)
- File storage (Supabase Storage)

## 7. Monetization Strategy

### 7.1 Pricing Model

Almanet will operate on a tiered subscription model based on institution size:

| Tier             | Institution Size    | Price        | Key Features                                                              |
| ---------------- | ------------------- | ------------ | ------------------------------------------------------------------------- |
| **Starter**      | <1,000 alumni       | $499/month   | Core features, limited analytics                                          |
| **Growth**       | 1,000-5,000 alumni  | $999/month   | Full features, standard analytics                                         |
| **Professional** | 5,000-15,000 alumni | $1,999/month | Full features, advanced analytics, priority support                       |
| **Enterprise**   | 15,000+ alumni      | Custom       | Full features, advanced analytics, dedicated support, custom integrations |

### 7.2 Add-on Services

- Data migration services
- Custom integration development
- White-labeled mobile applications
- Branded email domains
- Training and onboarding packages
- Premium support packages

## 8. Launch & Go-to-Market Strategy

### 8.1 Launch Timeline

| Phase                 | Timeline   | Key Deliverables                             |
| --------------------- | ---------- | -------------------------------------------- |
| **Alpha**             | Q3 2024    | Core features, internal testing              |
| **Beta**              | Q4 2024    | Limited release to 5-10 partner institutions |
| **Public Launch**     | Q1 2025    | General availability                         |
| **Feature Expansion** | Q2-Q4 2025 | Advanced features, mobile apps               |

### 8.2 Marketing Channels

- Direct outreach to institutions
- Industry conferences and events
- Digital marketing campaigns
- Content marketing (blog, case studies)
- Partnerships with higher education consultants
- Referral program for institutions

### 8.3 Success Metrics

- Number of institutions onboarded
- User activation rate
- Monthly active users (MAU)
- Event participation rates
- Donation volume through platform
- Mentorship match completion rate
- Net Promoter Score (NPS)
- Customer retention rate

## 9. Future Roadmap

### 9.1 Short-term (6-12 months)

- Mobile apps for iOS and Android
- Enhanced analytics dashboard
- Advanced AI-powered mentorship matching
- Virtual event hosting capabilities
- Expanded payment options for donations
- Improved video call quality and features

### 9.2 Mid-term (12-24 months)

- AI-powered networking recommendations
- Integration marketplace for third-party services
- Multi-language support
- Gamification features (achievements, points)
- Enhanced career services tools
- Expanded startup funding features

### 9.3 Long-term (24+ months)

- Alumni-specific learning management system
- Corporate partnership portal
- Advanced alumni data intelligence
- Global alumni networking features
- Blockchain credentials verification

## 10. Risks & Mitigations

| Risk                   | Impact | Likelihood | Mitigation                                                      |
| ---------------------- | ------ | ---------- | --------------------------------------------------------------- |
| Privacy concerns       | High   | Medium     | Strong data protection, transparent policies, granular controls |
| Low user adoption      | High   | Medium     | Intuitive UX, onboarding assistance, value demonstration        |
| Integration challenges | Medium | High       | Robust API design, pre-built connectors, technical support      |
| Competing platforms    | Medium | High       | Competitive pricing, unique features, focus on UX               |
| Scaling issues         | High   | Low        | Cloud architecture, performance testing, monitoring             |

## 11. Conclusion

Almanet presents a significant opportunity to transform how educational institutions engage with their alumni and student communities. By focusing on user experience, modern technology, and comprehensive features at accessible price points, we aim to become the leading platform in this space.

---

## Appendix A: Glossary

- **Alumni**: Former students or graduates of an educational institution
- **Engagement**: Meaningful interaction between users and the platform
- **CRM**: Customer Relationship Management
- **SSO**: Single Sign-On
- **MAU**: Monthly Active Users
- **ROI**: Return on Investment
- **API**: Application Programming Interface

## Appendix B: References

1. Alumni Engagement Benchmark Report 2023
2. Higher Education Digital Transformation Survey
3. Alumni Relations Technology Adoption Study
4. Digital Fundraising Trends in Education Report
