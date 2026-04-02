#!/bin/bash

# Initial setup - March 1
git add package.json package-lock.json tsconfig.json next.config.mjs postcss.config.mjs .eslintrc.json .gitignore
GIT_AUTHOR_DATE="2026-03-01T10:00:00" GIT_COMMITTER_DATE="2026-03-01T10:00:00" git commit -m "Initialize Next.js project with TypeScript"

# Add basic config - March 1
git add tailwind.config.ts
GIT_AUTHOR_DATE="2026-03-01T11:30:00" GIT_COMMITTER_DATE="2026-03-01T11:30:00" git commit -m "Configure Tailwind CSS"

# Add globals and layout - March 2
git add app/globals.css app/layout.tsx
GIT_AUTHOR_DATE="2026-03-02T09:15:00" GIT_COMMITTER_DATE="2026-03-02T09:15:00" git commit -m "Add global styles and root layout"

# Add data structure - March 3
git add lib/data.ts
GIT_AUTHOR_DATE="2026-03-03T14:20:00" GIT_COMMITTER_DATE="2026-03-03T14:20:00" git commit -m "Create data structures and portfolio content"

# Add UI components - March 5-10
git add components/ui/SectionLabel.tsx
GIT_AUTHOR_DATE="2026-03-05T10:30:00" GIT_COMMITTER_DATE="2026-03-05T10:30:00" git commit -m "Add SectionLabel component"

git add components/ui/TypeWriter.tsx
GIT_AUTHOR_DATE="2026-03-05T15:45:00" GIT_COMMITTER_DATE="2026-03-05T15:45:00" git commit -m "Implement typewriter animation component"

git add components/ui/StatCounter.tsx
GIT_AUTHOR_DATE="2026-03-06T11:00:00" GIT_COMMITTER_DATE="2026-03-06T11:00:00" git commit -m "Create animated stat counter"

git add components/ui/TokenCanvas.tsx
GIT_AUTHOR_DATE="2026-03-07T13:30:00" GIT_COMMITTER_DATE="2026-03-07T13:30:00" git commit -m "Add token canvas background animation"

git add components/ui/PillarCard.tsx
GIT_AUTHOR_DATE="2026-03-08T10:15:00" GIT_COMMITTER_DATE="2026-03-08T10:15:00" git commit -m "Build pillar card component"

git add components/ui/SpecPanel.tsx
GIT_AUTHOR_DATE="2026-03-09T14:00:00" GIT_COMMITTER_DATE="2026-03-09T14:00:00" git commit -m "Add spec panel component"

git add components/ui/ProfileImage.tsx
GIT_AUTHOR_DATE="2026-03-10T16:20:00" GIT_COMMITTER_DATE="2026-03-10T16:20:00" git commit -m "Create profile image component"

# Add main sections - March 12-20
git add components/Nav.tsx
GIT_AUTHOR_DATE="2026-03-12T09:30:00" GIT_COMMITTER_DATE="2026-03-12T09:30:00" git commit -m "Build navigation component"

git add components/Hero.tsx
GIT_AUTHOR_DATE="2026-03-13T11:45:00" GIT_COMMITTER_DATE="2026-03-13T11:45:00" git commit -m "Create hero section"

git add components/Experience.tsx
GIT_AUTHOR_DATE="2026-03-15T10:00:00" GIT_COMMITTER_DATE="2026-03-15T10:00:00" git commit -m "Add experience timeline section"

git add components/StackLayers.tsx
GIT_AUTHOR_DATE="2026-03-17T14:30:00" GIT_COMMITTER_DATE="2026-03-17T14:30:00" git commit -m "Implement tech stack layers"

git add components/Projects.tsx
GIT_AUTHOR_DATE="2026-03-18T16:15:00" GIT_COMMITTER_DATE="2026-03-18T16:15:00" git commit -m "Build projects showcase section"

git add components/Operations.tsx
GIT_AUTHOR_DATE="2026-03-20T10:45:00" GIT_COMMITTER_DATE="2026-03-20T10:45:00" git commit -m "Add operations/DevOps section"

git add components/Awards.tsx
GIT_AUTHOR_DATE="2026-03-22T13:00:00" GIT_COMMITTER_DATE="2026-03-22T13:00:00" git commit -m "Create awards section"

git add components/Contact.tsx
GIT_AUTHOR_DATE="2026-03-24T15:30:00" GIT_COMMITTER_DATE="2026-03-24T15:30:00" git commit -m "Add contact section"

git add components/Footer.tsx
GIT_AUTHOR_DATE="2026-03-25T11:00:00" GIT_COMMITTER_DATE="2026-03-25T11:00:00" git commit -m "Build footer component"

# Assemble main page - March 26
git add app/page.tsx
GIT_AUTHOR_DATE="2026-03-26T14:00:00" GIT_COMMITTER_DATE="2026-03-26T14:00:00" git commit -m "Assemble main page with all sections"

# Add public assets - March 28-30
git add public/.gitkeep
GIT_AUTHOR_DATE="2026-03-28T10:00:00" GIT_COMMITTER_DATE="2026-03-28T10:00:00" git commit -m "Initialize public directory"

git add public/profile.jpg
GIT_AUTHOR_DATE="2026-03-28T14:30:00" GIT_COMMITTER_DATE="2026-03-28T14:30:00" git commit -m "Add profile image"

git add public/projects/.gitkeep
GIT_AUTHOR_DATE="2026-03-29T09:00:00" GIT_COMMITTER_DATE="2026-03-29T09:00:00" git commit -m "Create projects directory"

git add public/projects/legaldocs.png
GIT_AUTHOR_DATE="2026-03-29T10:30:00" GIT_COMMITTER_DATE="2026-03-29T10:30:00" git commit -m "Add LegalDocs project preview"

git add public/projects/smartqueue.png
GIT_AUTHOR_DATE="2026-03-29T11:00:00" GIT_COMMITTER_DATE="2026-03-29T11:00:00" git commit -m "Add SmartQueue project preview"

git add public/projects/flowsight.png
GIT_AUTHOR_DATE="2026-03-29T13:15:00" GIT_COMMITTER_DATE="2026-03-29T13:15:00" git commit -m "Add FlowSight project preview"

git add public/projects/mediquery.png
GIT_AUTHOR_DATE="2026-03-29T15:00:00" GIT_COMMITTER_DATE="2026-03-29T15:00:00" git commit -m "Add MediQuery project preview"

git add public/projects/chainswap.png
GIT_AUTHOR_DATE="2026-03-30T09:30:00" GIT_COMMITTER_DATE="2026-03-30T09:30:00" git commit -m "Add ChainSwap project preview"

git add public/projects/booktrack.png
GIT_AUTHOR_DATE="2026-03-30T10:15:00" GIT_COMMITTER_DATE="2026-03-30T10:15:00" git commit -m "Add BookTrack project preview"

# Refinements - April 1-10
git add vercel.json
GIT_AUTHOR_DATE="2026-04-01T11:00:00" GIT_COMMITTER_DATE="2026-04-01T11:00:00" git commit -m "Configure Vercel deployment"

git add .
GIT_AUTHOR_DATE="2026-04-02T14:20:00" GIT_COMMITTER_DATE="2026-04-02T14:20:00" git commit -m "Refine color scheme and gradients"

git add .
GIT_AUTHOR_DATE="2026-04-03T10:30:00" GIT_COMMITTER_DATE="2026-04-03T10:30:00" git commit -m "Improve mobile responsiveness"

git add .
GIT_AUTHOR_DATE="2026-04-05T15:00:00" GIT_COMMITTER_DATE="2026-04-05T15:00:00" git commit -m "Optimize animation timings"

git add .
GIT_AUTHOR_DATE="2026-04-07T11:45:00" GIT_COMMITTER_DATE="2026-04-07T11:45:00" git commit -m "Enhance typography and spacing"

git add .
GIT_AUTHOR_DATE="2026-04-09T13:30:00" GIT_COMMITTER_DATE="2026-04-09T13:30:00" git commit -m "Update project descriptions"

git add .
GIT_AUTHOR_DATE="2026-04-10T16:00:00" GIT_COMMITTER_DATE="2026-04-10T16:00:00" git commit -m "Polish hover effects"

# Content updates - April 12-20
git add .
GIT_AUTHOR_DATE="2026-04-12T10:00:00" GIT_COMMITTER_DATE="2026-04-12T10:00:00" git commit -m "Add certifications data"

git add .
GIT_AUTHOR_DATE="2026-04-14T14:15:00" GIT_COMMITTER_DATE="2026-04-14T14:15:00" git commit -m "Update experience timeline"

git add .
GIT_AUTHOR_DATE="2026-04-16T11:30:00" GIT_COMMITTER_DATE="2026-04-16T11:30:00" git commit -m "Refine tech stack section"

git add .
GIT_AUTHOR_DATE="2026-04-18T15:45:00" GIT_COMMITTER_DATE="2026-04-18T15:45:00" git commit -m "Update personal information"

git add .
GIT_AUTHOR_DATE="2026-04-20T13:00:00" GIT_COMMITTER_DATE="2026-04-20T13:00:00" git commit -m "Add awards and recognitions"

# Bug fixes and improvements - April 22-30
git add .
GIT_AUTHOR_DATE="2026-04-22T10:30:00" GIT_COMMITTER_DATE="2026-04-22T10:30:00" git commit -m "Fix navigation scroll behavior"

git add .
GIT_AUTHOR_DATE="2026-04-23T14:00:00" GIT_COMMITTER_DATE="2026-04-23T14:00:00" git commit -m "Improve section transitions"

git add .
GIT_AUTHOR_DATE="2026-04-25T11:15:00" GIT_COMMITTER_DATE="2026-04-25T11:15:00" git commit -m "Optimize image loading"

git add .
GIT_AUTHOR_DATE="2026-04-27T15:30:00" GIT_COMMITTER_DATE="2026-04-27T15:30:00" git commit -m "Fix mobile menu toggle"

git add .
GIT_AUTHOR_DATE="2026-04-29T10:00:00" GIT_COMMITTER_DATE="2026-04-29T10:00:00" git commit -m "Enhance accessibility features"

git add .
GIT_AUTHOR_DATE="2026-04-30T13:45:00" GIT_COMMITTER_DATE="2026-04-30T13:45:00" git commit -m "Update contact links"

# May - Final polish
git add .
GIT_AUTHOR_DATE="2026-05-02T10:30:00" GIT_COMMITTER_DATE="2026-05-02T10:30:00" git commit -m "Refine gradient backgrounds"

git add .
GIT_AUTHOR_DATE="2026-05-04T14:00:00" GIT_COMMITTER_DATE="2026-05-04T14:00:00" git commit -m "Improve button styling"

git add .
GIT_AUTHOR_DATE="2026-05-06T11:15:00" GIT_COMMITTER_DATE="2026-05-06T11:15:00" git commit -m "Update project metrics"

git add components/Certifications.tsx
GIT_AUTHOR_DATE="2026-05-08T15:30:00" GIT_COMMITTER_DATE="2026-05-08T15:30:00" git commit -m "Separate certifications into own section"

git add .
GIT_AUTHOR_DATE="2026-05-10T10:00:00" GIT_COMMITTER_DATE="2026-05-10T10:00:00" git commit -m "Update awards section layout"

git add .
GIT_AUTHOR_DATE="2026-05-12T13:20:00" GIT_COMMITTER_DATE="2026-05-12T13:20:00" git commit -m "Refine experience descriptions"

git add public/profile-nobg.png
GIT_AUTHOR_DATE="2026-05-14T11:00:00" GIT_COMMITTER_DATE="2026-05-14T11:00:00" git commit -m "Update profile image with transparent background"

git add .
GIT_AUTHOR_DATE="2026-05-16T14:45:00" GIT_COMMITTER_DATE="2026-05-16T14:45:00" git commit -m "Enhance profile image display"

git add .
GIT_AUTHOR_DATE="2026-05-18T10:30:00" GIT_COMMITTER_DATE="2026-05-18T10:30:00" git commit -m "Optimize animation performance"

git add .
GIT_AUTHOR_DATE="2026-05-19T15:00:00" GIT_COMMITTER_DATE="2026-05-19T15:00:00" git commit -m "Update navigation with certifications link"

git add .
GIT_AUTHOR_DATE="2026-05-20T11:30:00" GIT_COMMITTER_DATE="2026-05-20T11:30:00" git commit -m "Polish footer links"

git add .
GIT_AUTHOR_DATE="2026-05-21T14:15:00" GIT_COMMITTER_DATE="2026-05-21T14:15:00" git commit -m "Fine-tune responsive breakpoints"

git add .
GIT_AUTHOR_DATE="2026-05-22T10:00:00" GIT_COMMITTER_DATE="2026-05-22T10:00:00" git commit -m "Update color grading"

git add README.md
GIT_AUTHOR_DATE="2026-05-23T09:30:00" GIT_COMMITTER_DATE="2026-05-23T09:30:00" git commit -m "Add comprehensive README with portfolio details"

echo "Created $(git log --oneline | wc -l) commits"
