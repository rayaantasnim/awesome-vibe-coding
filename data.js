/**
 * Awesome Vibe Coding — Curated Database (105 Verified Items)
 * Attaches global `window.VIBE_DATA` (browser) and exports `VIBE_DATA` (CommonJS/Node)
 * Categories: editors (30), prompts (30), debugging (25), hosting (20)
 */
(function (root) {
  "use strict";

  const VIBE_DATA = {
    editors: [
      {
        id: "claude",
        name: "Claude",
        categoryTag: "App Builder",
        pricing: "Freemium",
        description:
          "Anthropic flagship reasoning assistant with interactive React/HTML Artifacts.\nGenerates clean UI prototypes and complex architectural plans in seconds.",
        bestFor:
          "Interactive UI Artifacts, system design, and nuanced refactoring",
        url: "https://claude.ai",
      },
      {
        id: "claude-code",
        name: "Claude Code",
        categoryTag: "CLI",
        pricing: "Paid",
        description:
          "Agentic command-line coding tool running directly inside your local terminal.\nReads repositories, runs test suites, and commits verified multi-file edits.",
        bestFor:
          "Autonomous terminal engineering and large codebase migrations",
        url: "https://docs.anthropic.com/en/docs/claude-code",
      },
      {
        id: "google-ai-studio",
        name: "Google AI Studio",
        categoryTag: "App Builder",
        pricing: "Free",
        description:
          "Browser-based Gemini workspace featuring massive context windows and live app building.\nLets you test structured schemas, multimodal inputs, and deployable prototypes free.",
        bestFor:
          "Long-context codebase analysis and zero-cost Gemini app prototyping",
        url: "https://aistudio.google.com",
      },
      {
        id: "cursor",
        name: "Cursor",
        categoryTag: "IDE",
        pricing: "Freemium",
        description:
          "AI-native VS Code fork built around multi-file Composer edits and predictive Tab completion.\nIndexes your entire repository with `.cursorrules` support for consistent output.",
        bestFor:
          "Daily full-stack development inside production Git repositories",
        url: "https://www.cursor.com",
      },
      {
        id: "windsurf",
        name: "Windsurf",
        categoryTag: "IDE",
        pricing: "Freemium",
        description:
          "Agentic IDE by Codeium powered by the Cascade reasoning engine.\nCoordinates cross-file edits, terminal commands, and live preview checks automatically.",
        bestFor:
          "Hands-off multi-file feature implementation with deep repo context",
        url: "https://windsurf.com",
      },
      {
        id: "bolt-new",
        name: "Bolt.new",
        categoryTag: "App Builder",
        pricing: "Freemium",
        description:
          "Full-stack browser IDE powered by StackBlitz WebContainers.\nInstalls npm packages, boots Node servers, and previews edits without local setup.",
        bestFor:
          "Instant full-stack Vite, Next.js, and Astro apps in the browser",
        url: "https://bolt.new",
      },
      {
        id: "lovable",
        name: "Lovable",
        categoryTag: "App Builder",
        pricing: "Freemium",
        description:
          "Prompt-to-production web app builder with native Supabase database and auth wiring.\nIncludes visual element selection and continuous two-way GitHub repository sync.",
        bestFor:
          "Shipping SaaS MVPs with Postgres, authentication, and clean UI",
        url: "https://lovable.dev",
      },
      {
        id: "v0",
        name: "v0 by Vercel",
        categoryTag: "UI",
        pricing: "Freemium",
        description:
          "Generative UI studio built specifically for React, Tailwind CSS, and shadcn/ui.\nProduces copy-ready, accessible component trees with instant interactive previews.",
        bestFor:
          "High-craft React dashboards, landing sections, and UI components",
        url: "https://v0.dev",
      },
      {
        id: "replit-agent",
        name: "Replit Agent",
        categoryTag: "App Builder",
        pricing: "Freemium",
        description:
          "Autonomous cloud workspace agent that plans dependencies, databases, and routes.\nBuilds, debugs, and hosts live full-stack web apps from natural language.",
        bestFor:
          "End-to-end cloud prototypes with built-in PostgreSQL and hosting",
        url: "https://replit.com",
      },
      {
        id: "cline",
        name: "Cline",
        categoryTag: "IDE",
        pricing: "Free",
        description:
          "Open-source autonomous coding extension for VS Code with human-in-the-loop approvals.\nSupports Bring-Your-Own-Key models, MCP tools, and headless browser checks.",
        bestFor: "Transparent, BYOK agentic coding inside standard VS Code",
        url: "https://cline.bot",
      },
      {
        id: "roo-code",
        name: "Roo Code",
        categoryTag: "IDE",
        pricing: "Free",
        description:
          "Open-source VS Code coding agent offering specialized Architect, Code, and Debug modes.\nLets teams customize per-mode models, auto-approval rules, and local Ollama endpoints.",
        bestFor: "Custom multi-mode agent workflows and local LLM development",
        url: "https://roocode.com",
      },
      {
        id: "aider",
        name: "Aider",
        categoryTag: "CLI",
        pricing: "Free",
        description:
          "Battle-tested open-source terminal pair programmer that maps your entire Git repo.\nApplies clean diffs and generates descriptive Git commits after every verified change.",
        bestFor: "Fast, keyboard-first terminal edits with clean Git history",
        url: "https://aider.chat",
      },
      {
        id: "github-copilot",
        name: "GitHub Copilot",
        categoryTag: "IDE",
        pricing: "Freemium",
        description:
          "Multi-model AI coding assistant integrated across VS Code, JetBrains, and GitHub.\nCombines inline autocomplete, multi-file Agent mode, and PR issue resolution.",
        bestFor:
          "Enterprise teams standardized on GitHub workflows and JetBrains/VS Code",
        url: "https://github.com/features/copilot",
      },
      {
        id: "firebase-studio",
        name: "Firebase Studio",
        categoryTag: "IDE",
        pricing: "Free",
        description:
          "Google cloud agentic development workspace combining IDX, Gemini, and Firebase.\nScaffolds web and mobile apps with built-in emulators and one-click App Hosting.",
        bestFor:
          "Full-stack apps backed by Firestore, Firebase Auth, and Cloud Functions",
        url: "https://firebase.studio",
      },
      {
        id: "tempo-labs",
        name: "Tempo Labs",
        categoryTag: "UI",
        pricing: "Freemium",
        description:
          "Visual React editor merging a Figma-style canvas directly with underlying TSX code.\nLets designers and developers edit Tailwind layouts visually without breaking logic.",
        bestFor:
          "Visual React + Tailwind refinement and design-system collaboration",
        url: "https://www.tempo.new",
      },
      {
        id: "softgen",
        name: "Softgen",
        categoryTag: "App Builder",
        pricing: "Paid",
        description:
          "AI web application builder focused on Next.js, Firebase, Tailwind, and Stripe.\nAutomates project scaffolding, user authentication, and payment flows from a spec.",
        bestFor:
          "Monetized SaaS prototypes requiring Stripe and auth out of the box",
        url: "https://softgen.ai",
      },
      {
        id: "devin",
        name: "Devin",
        categoryTag: "CLI",
        pricing: "Paid",
        description:
          "Cloud-hosted autonomous software engineer equipped with its own shell, editor, and browser.\nPicks up Slack or Linear tickets, writes fixes, runs CI, and opens pull requests.",
        bestFor:
          "Delegating self-contained bug tickets, migrations, and PRs asynchronously",
        url: "https://devin.ai",
      },
      {
        id: "openhands",
        name: "OpenHands",
        categoryTag: "CLI",
        pricing: "Free",
        description:
          "Open-source platform for autonomous AI software development agents in Docker sandboxes.\nExecutes bash commands, edits codebases, and browses docs with full self-hosting.",
        bestFor: "Self-hosted autonomous coding agents and research automation",
        url: "https://www.all-hands.dev",
      },
      {
        id: "marblism",
        name: "Marblism",
        categoryTag: "App Builder",
        pricing: "Freemium",
        description:
          "Full-stack SaaS generator producing clean React frontends paired with Node/Postgres APIs.\nBreaks prompts into architecture diagrams, database schemas, and editable pages.",
        bestFor:
          "Structured React + Node.js SaaS boilerplates you own completely",
        url: "https://www.marblism.com",
      },
      {
        id: "pythagora",
        name: "Pythagora",
        categoryTag: "IDE",
        pricing: "Freemium",
        description:
          "Spec-driven AI engineering extension for VS Code powered by GPT Pilot.\nBreaks large requirements into iterative tasks with automated debugging checkpoints.",
        bestFor:
          "Structured, step-by-step backend and full-stack feature generation",
        url: "https://www.pythagora.ai",
      },
      {
        id: "zed-ai",
        name: "Zed AI",
        categoryTag: "IDE",
        pricing: "Freemium",
        description:
          "Ultra-fast GPU-accelerated code editor written in Rust with native Agent Panel.\nSupports inline transforms, slash-command context, and low-latency edit predictions.",
        bestFor: "Developers prioritizing raw editor speed and crisp native UX",
        url: "https://zed.dev",
      },
      {
        id: "trae",
        name: "Trae",
        categoryTag: "IDE",
        pricing: "Free",
        description:
          "Adaptive AI IDE featuring an autonomous Builder mode and multimodal screenshot input.\nAnalyzes project structure to scaffold, preview, and repair full applications.",
        bestFor:
          "Free access to frontier coding models inside a clean VS Code interface",
        url: "https://www.trae.ai",
      },
      {
        id: "void-editor",
        name: "Void",
        categoryTag: "IDE",
        pricing: "Free",
        description:
          "Open-source alternative to Cursor built on VS Code with privacy-first architecture.\nRoutes prompts directly to local Ollama models or any frontier API without middlemen.",
        bestFor:
          "Privacy-sensitive teams wanting open-source AI IDE capabilities",
        url: "https://voideditor.com",
      },
      {
        id: "continue-dev",
        name: "Continue",
        categoryTag: "IDE",
        pricing: "Free",
        description:
          "Open-source AI code assistant for VS Code and JetBrains with declarative YAML configs.\nSupports custom context providers, autocomplete, and shared team prompt rules.",
        bestFor:
          "Teams building custom internal AI coding workflows and local RAG",
        url: "https://www.continue.dev",
      },
      {
        id: "augment-code",
        name: "Augment Code",
        categoryTag: "IDE",
        pricing: "Freemium",
        description:
          "Context-first coding agent engineered specifically for large, complex production codebases.\nDelivers fast codebase-wide retrieval and accurate multi-file refactors in VS Code/JetBrains.",
        bestFor:
          "Large multi-service repositories where shallow context windows fail",
        url: "https://www.augmentcode.com",
      },
      {
        id: "coderabbit",
        name: "CodeRabbit",
        categoryTag: "Code Reviewer",
        pricing: "Freemium",
        description:
          "Automated AI pull-request reviewer for GitHub and GitLab repositories.\nPosts line-by-line bug warnings, security checks, and one-click commit suggestions.",
        bestFor:
          "Catching AI-introduced edge cases and regressions during PR review",
        url: "https://www.coderabbit.ai",
      },
      {
        id: "sourcery",
        name: "Sourcery",
        categoryTag: "Code Reviewer",
        pricing: "Freemium",
        description:
          "Static and LLM-powered code reviewer delivering instant refactoring tips on PRs and IDEs.\nFlags duplicate logic, complexity spikes, and security antipatterns automatically.",
        bestFor:
          "Maintaining clean Python and TypeScript quality on fast-moving teams",
        url: "https://sourcery.ai",
      },
      {
        id: "greptile",
        name: "Greptile",
        categoryTag: "Code Reviewer",
        pricing: "Paid",
        description:
          "Graph-indexed AI code reviewer that understands cross-repository dependencies before commenting.\nPrevents breaking changes in PRs by tracing callers across your full codebase.",
        bestFor:
          "High-signal PR reviews on interconnected microservices and monorepos",
        url: "https://www.greptile.com",
      },
      {
        id: "openai-codex-cli",
        name: "OpenAI Codex CLI",
        categoryTag: "CLI",
        pricing: "Free",
        description:
          "Lightweight open-source terminal agent running inside OS-level network sandboxes.\nReads files, applies patches, and executes commands with configurable approval modes.",
        bestFor:
          "Fast, sandboxed terminal automation with OpenAI reasoning models",
        url: "https://github.com/openai/codex",
      },
      {
        id: "magic-patterns",
        name: "Magic Patterns",
        categoryTag: "UI",
        pricing: "Freemium",
        description:
          "Infinite-canvas UI prototyping studio generating parallel React + Tailwind design options.\nExports clean component code and Figma-ready layouts for rapid product discovery.",
        bestFor:
          "Exploring multiple visual directions before committing to one UI architecture",
        url: "https://www.magicpatterns.com",
      },
    ],

    prompts: [
      // Full-Stack (5)
      {
        id: "fs-schema-first",
        title: "Schema-First Full-Stack Architect",
        tag: "Full-Stack",
        promptText: `Act as a staff full-stack engineer. Before writing any UI components, design the database schema and shared TypeScript contracts first.
Build idempotent REST API handlers with strict input validation, proper HTTP status codes, and structured JSON error responses.
Keep all secrets strictly server-side using environment variables and never expose private keys in client bundles.
On the frontend, wire explicit loading skeletons, empty states, and actionable error banners with retry controls for every async call.
Deliver complete, working files with clean imports and zero placeholder comments or mock fallbacks.`,
      },
      {
        id: "fs-nextjs-app-router",
        title: "Next.js App Router Production Blueprint",
        tag: "Full-Stack",
        promptText: `Build this feature using Next.js App Router, TypeScript, and Server Actions with clear server/client boundaries.
Keep data fetching and authorization checks inside Server Components or validated route handlers, passing only serialized DTOs to Client Components.
Use optimistic UI updates only where paired with server-confirmed rollback handling on failure.
Validate all form payloads with Zod on both client and server, returning field-level error messages cleanly.
Ensure zero hydration mismatches, clean metadata exports, and responsive Tailwind CSS styling across all viewports.`,
      },
      {
        id: "fs-express-react-spa",
        title: "Express + React + Vite Monorepo Setup",
        tag: "Full-Stack",
        promptText: `Architect a cohesive full-stack application with an Express TypeScript API server and a React + Vite frontend on port 3000.
Organize backend logic into routes, controllers, and pure service helpers with centralized error-handling middleware.
Use a typed client fetch wrapper featuring AbortController timeouts, JSON parsing guards, and unified error extraction.
Never swallow failed API responses or silently revert to dummy arrays; render clear user-facing error recovery states instead.
Include health-check endpoints, CORS safety, and clean TypeScript interfaces shared across client and server.`,
      },
      {
        id: "fs-realtime-collab",
        title: "Real-Time WebSocket Sync Engine",
        tag: "Full-Stack",
        promptText: `Design a real-time collaborative feature backed by an authoritative server state and typed WebSocket event contracts.
Validate every incoming client event on the server before broadcasting state diffs to connected room participants.
Implement exponential-backoff reconnection, sequence ordering, and clear connection status feedback without noisy telemetry spam.
Prevent memory leaks by cleaning up socket listeners and timers cleanly inside component teardown hooks.
Handle optimistic local echoes gracefully while reconciling conflicts deterministically against server timestamps.`,
      },
      {
        id: "fs-file-upload-pipeline",
        title: "Direct-to-Cloud File Upload Pipeline",
        tag: "Full-Stack",
        promptText: `Build a secure file upload workflow using short-lived presigned URLs rather than routing large binary payloads through app servers.
Enforce strict MIME type allowlists, maximum byte limits, and sanitized filenames before issuing upload signatures.
Display real-time upload progress percentages using tabular numerals, cancel controls, and clear validation feedback for rejected files.
Persist uploaded asset metadata in the database only after verifying the object upload succeeded.
Include accessible drag-and-drop plus keyboard file-picker triggers for full cross-device usability.`,
      },

      // UI/UX Design (5)
      {
        id: "ui-anti-slop-system",
        title: "High-Craft Anti-Slop UI Designer",
        tag: "UI/UX Design",
        promptText: `Act as a senior product designer and frontend engineer. Build an interface with unmistakable editorial restraint and visual clarity.
Apply a strict 60-30-10 color hierarchy: neutral canvas, subdued structural surfaces with 1px hairline borders, and one focused accent for actions.
Avoid decorative pulsing dots, excessive neon glows, nested cards within cards, and crowded pill badges around static text metadata.
Maintain WCAG AA contrast (4.5:1 body, 3:1 headings), visible focus-visible rings, and 40px+ interactive control targets.
Use tabular-nums for all metrics, counts, and tables so figures align cleanly without layout shift.`,
      },
      {
        id: "ui-bento-dashboard",
        title: "Data-Dense Analytics Dashboard Layout",
        tag: "UI/UX Design",
        promptText: `Design an executive analytics dashboard featuring a clean collapsible sidebar, top breadcrumb bar, and asymmetric Bento metric grid.
Keep all navigation links and action buttons single-line (whitespace-nowrap shrink-0) with clean truncation on narrow viewports.
Render KPI cards with crisp numeric hierarchy, explicit comparison timeframes, and zero fabricated vanity scores or telemetry tickers.
Pair every chart or data table with working date-range filters, search inputs, and an informative empty state with a reset action.
Ensure smooth 150ms hover transitions using compositor properties only (transform and opacity).`,
      },
      {
        id: "ui-accessible-modal-drawer",
        title: "Accessible Modal, Drawer & Command Palette",
        tag: "UI/UX Design",
        promptText: `Implement a keyboard-first modal, slide-over drawer, and command palette system with full ARIA compliance and focus management.
Trap keyboard Tab focus inside the active overlay, close cleanly on Escape or backdrop click, and restore focus to the trigger element on close.
Lock background body scrolling while open and respect prefers-reduced-motion for all entrance and exit transitions.
Support arrow-key navigation and Enter selection inside the command palette with live client-side fuzzy filtering.
Keep backdrop contrast high enough for effortless legibility in both light and dark surfaces.`,
      },
      {
        id: "ui-multi-step-form",
        title: "Frictionless Multi-Step Wizard Form",
        tag: "UI/UX Design",
        promptText: `Create a multi-step onboarding or checkout wizard with clear progress indicators, per-step validation, and persisted draft state.
Validate fields inline on blur and before advancing steps, highlighting exact corrective instructions paired with icons and text—never color alone.
Preserve user entries when navigating backward between steps and guard against accidental double-submission with loading button states.
Keep form measure comfortable (max-w-xl), label every input explicitly, and ensure crisp mobile keyboard ergonomics (inputMode, autoComplete).
Finish with a clear confirmation summary screen offering next actions.`,
      },
      {
        id: "ui-responsive-tailwind-grid",
        title: "Bulletproof Responsive Tailwind Grid",
        tag: "UI/UX Design",
        promptText: `Construct a responsive multi-breakpoint layout using Tailwind CSS that holds its geometry cleanly from 375px mobile to 1440px desktop.
Ensure outer container padding always equals or exceeds inner grid gaps, and prevent horizontal scrolling across every viewport width.
Use grid-cols-1 on mobile, scaling cleanly to md:grid-cols-2 and lg:grid-cols-3/4 with equal-height cards via flex-col justify-between.
Collapse desktop navigation links cleanly into a toggleable mobile drawer below the md breakpoint without exceeding 15% mobile header height.
Apply text-wrap: balance to all hero and section headings to eliminate orphan trailing words.`,
      },

      // SaaS MVP (4)
      {
        id: "saas-stripe-billing",
        title: "SaaS Subscription & Stripe Webhook Core",
        tag: "SaaS MVP",
        promptText: `Build a production-ready SaaS billing module integrating Stripe Checkout, Customer Portal, and verified webhook synchronization.
Verify Stripe webhook signatures using the raw request body before updating user plan entitlements or subscription statuses in the database.
Handle idempotency keys and duplicate webhook deliveries gracefully so account state never drifts out of sync.
Present a transparent pricing comparison grid stating concrete feature limits rather than vague marketing rows.
Include clear upgrade, downgrade, cancellation, and past-due billing recovery states inside the user settings view.`,
      },
      {
        id: "saas-rbac-teams",
        title: "Multi-Tenant Team & RBAC Workspace",
        tag: "SaaS MVP",
        promptText: `Architect a multi-tenant SaaS workspace supporting Organizations, Role-Based Access Control (Owner, Admin, Member), and email invitations.
Enforce organization membership and role checks inside every backend route and database query rather than relying solely on hidden UI buttons.
Support expiring single-use invite tokens, role updates with last-owner protection, and clean workspace switching in the client state.
Log key administrative actions (invites, role changes, billing updates) to an immutable audit trail visible to workspace owners.
Provide clear permission-denied feedback whenever a member attempts a restricted action.`,
      },
      {
        id: "saas-onboarding-checklist",
        title: "Interactive SaaS Activation Checklist",
        tag: "SaaS MVP",
        promptText: `Design a persistent product onboarding checklist that guides new SaaS users from signup to their first core value moment.
Derive step completion automatically from real user data (e.g., profile saved, first project created, teammate invited) rather than manual checkboxes.
Allow users to collapse or dismiss the checklist cleanly while storing preference state across sessions.
Deep-link each incomplete step directly to the relevant UI control or modal so users never hunt through menus.
Celebrate completion cleanly with a subtle confirmation state and transition smoothly to the standard workspace view.`,
      },
      {
        id: "saas-usage-metering",
        title: "API Keys & Usage Metering Dashboard",
        tag: "SaaS MVP",
        promptText: `Build a developer-facing API key management and usage metering panel for a B2B SaaS product.
Generate cryptographically random API keys, show the plaintext secret exactly once upon creation with a 1-click copy button, and store only hashed tokens.
Display masked key prefixes, creation dates, last-used timestamps, and instant one-click revocation with confirmation.
Track monthly quota consumption against plan limits using clean progress bars and tabular figures.
Expose clear cURL and TypeScript SDK quickstart snippets pre-populated with the endpoint URL.`,
      },

      // Landing Page (4)
      {
        id: "lp-saas-conversion",
        title: "High-Conversion SaaS Product Landing Page",
        tag: "Landing Page",
        promptText: `Act as a conversion-focused frontend developer and product marketer. Build a sharp SaaS landing page free of generic buzzwords.
Lead above the fold with a concrete headline (max 10 words) stating who it serves and what problem it solves, a 1-sentence subheadline, and one primary CTA.
Structure the page into 4 focused sections: Hero Proposition, Core Workflow (01-03), Pricing/Comparison Matrix, and Quiet Footer.
Replace vague clichés like "supercharge" or "revolutionize" with specific mechanics, realistic product previews, and clear outcomes.
Ensure fast initial paint, balanced headline wrapping, and crisp responsive stacking on mobile.`,
      },
      {
        id: "lp-waitlist-launch",
        title: "Pre-Launch Waitlist & Interactive Demo",
        tag: "Landing Page",
        promptText: `Create a sleek product pre-launch page featuring an interactive mini-demo alongside a validated email waitlist signup flow.
Validate email formatting cleanly on submit, prevent duplicate rapid clicks while pending, and show an immediate confirmation message on success.
Include a concise 3-step visual breakdown showing how the product works before asking for an email address.
Avoid fake countdown timers, fabricated user counters, or intrusive arrival popups that block the first view.
Keep typography bold, scannable, and strictly aligned to a 65ch prose measure.`,
      },
      {
        id: "lp-devtool-docs-hero",
        title: "Developer Tool & CLI Launch Page",
        tag: "Landing Page",
        promptText: `Design an authentic developer-tool landing page tailored for engineers evaluating an SDK, CLI, or API platform.
Place an interactive terminal install command (\`npx\` or \`npm install\`) with a working 1-click copy button directly beneath the hero CTA.
Showcase real syntax-highlighted code snippets comparing before-and-after ergonomics rather than abstract marketing illustrations.
Link clearly to Documentation, Changelog, and GitHub Repository in a clean 3-zone top navigation bar.
Use JetBrains Mono for code blocks and tabular-nums for latency or benchmark tables.`,
      },
      {
        id: "lp-agency-portfolio",
        title: "Studio & Technical Agency Showcase",
        tag: "Landing Page",
        promptText: `Build a refined digital studio or technical consultancy landing page prioritizing typography, whitespace, and concrete case studies.
Present 3 structured case studies pairing client context, technical constraint, and measurable delivery outcome.
Keep the top bar clean with only the studio wordmark, 4 concise section links, and one "Book Discovery Call" button.
Include an inline project inquiry form with scope selection, timeline validation, and instant confirmation feedback.
Use subtle hairline dividers and calm neutral surfaces so portfolio visuals command full attention.`,
      },

      // Database & Auth (4)
      {
        id: "db-supabase-rls",
        title: "Supabase Postgres Schema & Strict RLS",
        tag: "Database & Auth",
        promptText: `Design a normalized PostgreSQL schema for Supabase with Row Level Security (RLS) enabled on every user-facing table.
Write explicit SELECT, INSERT, UPDATE, and DELETE policies anchored to auth.uid() or verified team membership helper functions.
Add foreign-key indexes, updated_at triggers, and CHECK constraints so invalid states cannot enter the database even via direct API calls.
Include safe migration SQL plus typed TypeScript client queries that handle empty results and constraint errors cleanly.
Never bypass RLS with service-role keys inside browser-accessible code.`,
      },
      {
        id: "db-drizzle-migrations",
        title: "Drizzle ORM Type-Safe Data Layer",
        tag: "Database & Auth",
        promptText: `Implement a strictly typed Drizzle ORM data access layer with clean schema definitions, relations, and transactional helpers.
Define explicit composite indexes for frequent filter and sort queries and enforce NOT NULL defaults wherever sensible.
Wrap multi-table mutations inside database transactions so partial writes roll back cleanly on failure.
Separate pure repository query functions from HTTP route handlers to make business logic easy to test and reuse.
Return paginated cursor or offset results paired with total counts for predictable UI pagination.`,
      },
      {
        id: "db-jwt-session-auth",
        title: "Secure Session & OAuth Authentication Flow",
        tag: "Database & Auth",
        promptText: `Build an authentication system supporting email/password (Argon2/bcrypt hashing) and OAuth PKCE login with HTTP-only Secure cookies.
Rotate refresh tokens on use, enforce short access-token lifetimes, and implement CSRF protection for state-changing endpoints.
Handle account linking, expired verification tokens, and rate-limited login attempts with uniform, non-enumerating error messages.
Redirect unauthenticated route access cleanly while preserving the intended destination URL after sign-in.
Provide a full sign-out flow that invalidates server-side session state immediately.`,
      },
      {
        id: "db-firebase-security-rules",
        title: "Firestore Document Model & Security Rules",
        tag: "Database & Auth",
        promptText: `Architect a scalable Cloud Firestore data model paired with strict, field-validated security rules.
Separate public read profiles from private user subcollections and enforce ownership via request.auth.uid on every write path.
Validate required fields, data types, string lengths, and immutable server timestamps directly inside firestore.rules.
Prevent privilege escalation by disallowing client writes to role or subscription tier fields unless verified by admin claims.
Write client listeners with unsubscribe cleanup and graceful offline/permission-error handling.`,
      },

      // Chrome Extension (3)
      {
        id: "ext-mv3-scaffold",
        title: "Chrome Extension Manifest V3 Blueprint",
        tag: "Chrome Extension",
        promptText: `Scaffold a clean Chrome Extension using Manifest V3, TypeScript, Vite, and Tailwind CSS with minimal requested permissions.
Organize code strictly across popup/sidepanel UI, background service worker, and isolated content scripts using typed chrome.runtime messages.
Never rely on persistent background state in memory; persist user preferences and cache safely in chrome.storage.local or chrome.storage.sync.
Sanitize any DOM data read from host web pages before rendering inside extension views to prevent XSS.
Include clear host-permission guards and graceful fallbacks when invoked on restricted chrome:// tabs.`,
      },
      {
        id: "ext-sidepanel-ai",
        title: "Context-Aware Side Panel Assistant",
        tag: "Chrome Extension",
        promptText: `Build a Chrome Side Panel extension that extracts readable article or page context on user click—never scraping passively without consent.
Use a lightweight content script to extract clean title, URL, and selected text, forwarding it safely to the Side Panel UI.
Proxy any external API requests through a secure backend endpoint rather than shipping API keys inside the extension bundle.
Render streaming responses smoothly with a 1-click Copy button and keyboard shortcuts (Esc to clear, Cmd/Ctrl+Enter to run).
Handle tab switching cleanly so the side panel reflects the active tab context accurately.`,
      },
      {
        id: "ext-dom-overlay",
        title: "Shadow-DOM Page Enhancer Widget",
        tag: "Chrome Extension",
        promptText: `Create an injected page-helper widget mounted inside a closed or isolated Shadow DOM so host website CSS never breaks extension styling.
Observe dynamic SPA route changes cleanly using MutationObserver with debounced teardown to avoid duplicate widget mounts.
Keep injected bundle footprint tiny with zero global CSS pollution or conflicting event listeners on window.
Provide an accessible toggle shortcut and persistent per-domain disable switch stored in chrome.storage.
Clean up all DOM nodes and observers cleanly if the extension context invalidates.`,
      },

      // Mobile App (3)
      {
        id: "mob-expo-router",
        title: "React Native + Expo Router Production App",
        tag: "Mobile App",
        promptText: `Build a cross-platform mobile feature using Expo SDK, React Native, TypeScript, and file-based Expo Router navigation.
Handle SafeAreaView insets, KeyboardAvoidingView behavior, and platform-specific touch feedback across both iOS and Android.
Keep lists silky smooth at 60fps using FlatList or FlashList with stable keyExtractor, memoized row components, and pull-to-refresh.
Persist auth tokens strictly in expo-secure-store rather than plain AsyncStorage.
Ensure every touch target is at least 44x44pt with clear loading, offline-retry, and empty states.`,
      },
      {
        id: "mob-pwa-offline",
        title: "Mobile-First Offline-Capable PWA",
        tag: "Mobile App",
        promptText: `Design a mobile-first Progressive Web App featuring thumb-zone bottom navigation, Web App Manifest, and offline resilience.
Keep bottom navigation limited to 4-5 crisp destinations with 44px+ touch targets and active state indicators combining icon and text.
Cache static shell assets cleanly via Service Worker while serving network-first or stale-while-revalidate strategies for dynamic data.
Surface a subtle non-blocking offline banner when navigator.onLine drops and queue mutations cleanly for sync on reconnect.
Avoid hover-dependent interactions so every control feels native to touch.`,
      },
      {
        id: "mob-gesture-sheets",
        title: "Fluid Mobile Bottom Sheet & Haptics UX",
        tag: "Mobile App",
        promptText: `Implement an interactive mobile bottom sheet and swipeable action card pattern with natural spring physics and snap points.
Allow dragging the handle smoothly to expand, collapse, or dismiss, while keeping inner scrollable content free of gesture conflicts.
Trigger subtle haptic feedback only on meaningful state commits (e.g., item completed, deleted with undo toast).
Maintain readable 16px input font sizes on mobile web so iOS Safari never zooms the viewport on focus.
Provide an accessible close button alongside swipe dismissal for assistive technology users.`,
      },

      // Game Dev (2)
      {
        id: "game-canvas-loop",
        title: "60fps HTML5 Canvas Game Loop & ECS",
        tag: "Game Dev",
        promptText: `Build a responsive 2D browser game using HTML5 Canvas, fixed-timestep physics updates, and requestAnimationFrame delta clamping.
Decouple input handling, physics simulation, collision detection, and canvas rendering into pure modules with zero DOM layout thrashing.
Scale the canvas crisply for High-DPI (devicePixelRatio) displays and support both keyboard (WASD/Arrows) and touch controls.
Implement clean game state transitions: Title Screen, Active Play, Pause (Esc/P), and Game Over with instant restart and localStorage high score.
Pre-allocate particle pools or reuse entity arrays to avoid garbage-collection frame stutters.`,
      },
      {
        id: "game-turn-based-engine",
        title: "Deterministic Turn-Based Strategy Engine",
        tag: "Game Dev",
        promptText: `Create a turn-based puzzle or card game powered by a pure, deterministic state reducer separate from the UI renderer.
Represent valid moves, turn phases, win/loss conditions, and undo history as serializable immutable state objects.
Support keyboard shortcuts, clear hover previews of legal moves, and an optional heuristic AI opponent with an explicit thinking delay.
Use Web Audio API synthesized sound effects (with a persistent Mute toggle) instead of fragile external audio URLs.
Ensure the full game board fits comfortably inside a single 100vh desktop or mobile viewport without awkward page scrolling.`,
      },
    ],

    debugging: [
      {
        id: "dbg-fix-without-breaking",
        title: "Fix Without Breaking Existing Code",
        tag: "Debugging",
        scenario:
          "When fixing one bug repeatedly causes the AI to overwrite or break unrelated working features.",
        promptText: `Here is the failing behavior and the relevant file:
[PASTE EXPECTED VS ACTUAL BEHAVIOR + ERROR + CODE]

Diagnose the exact root cause before proposing any edit. Apply a surgical fix under these strict rules:
1. Modify ONLY the minimum lines strictly required to resolve this specific bug.
2. Do NOT rename existing functions/props, refactor unrelated modules, or remove working features.
3. Explain the root cause in 2 sentences, show the exact minimal diff, and list 2 edge cases to test afterward.`,
      },
      {
        id: "dbg-explain-stack-trace",
        title: "Explain Stack Trace Simply",
        tag: "Debugging",
        scenario:
          "When confronted with a noisy 40-line framework stack trace or cryptic bundler error.",
        promptText: `Trace this error back to the exact line and state condition in our application code that caused it:
[PASTE FULL STACK TRACE / CONSOLE OUTPUT / CODE SNIPPET]

Respond in 3 clear sections:
1. Plain-English Cause: What went wrong without framework jargon.
2. Trigger Condition: Why our code hit this state (e.g., undefined property, stale closure, missing await, CORS block).
3. Exact Fix: The minimal corrected snippet and one quick verification check.`,
      },
      {
        id: "dbg-hydration-mismatch",
        title: "React / Next.js Hydration Mismatch Solver",
        tag: "Debugging",
        scenario:
          'When SSR HTML differs from initial client render ("Hydration failed because the server rendered HTML didn\'t match").',
        promptText: `Identify why this component produces a hydration mismatch between server rendering and client mount:
[PASTE COMPONENT + HYDRATION WARNING]

Inspect for non-deterministic render values (Date.now, Math.random, window/localStorage access, invalid nested HTML tags like <button> inside <button> or <div> inside <p>).
Provide a clean fix using valid HTML nesting and deferred client-only state (useEffect mount guard or suppressHydrationWarning only where appropriate) without causing visual layout flash.`,
      },
      {
        id: "dbg-stale-closure-race",
        title: "Async Race Condition & Stale Closure Fix",
        tag: "Debugging",
        scenario:
          "When fast typing, tab switching, or rapid clicks show outdated API results or stale state values.",
        promptText: `Audit this component or hook for async race conditions, missing AbortController cleanup, and stale React closures:
[PASTE HOOK / EFFECT CODE]

Fix the concurrency bug so out-of-order network responses never overwrite newer requests, and event handlers always read fresh state.
Show the clean cleanup function inside useEffect (or functional state updater) and explain why the previous ordering failed.`,
      },
      {
        id: "dbg-cors-auth-cookies",
        title: "CORS, Cookies & Auth Redirect Debugger",
        tag: "Debugging",
        scenario:
          "When API calls work in Postman/curl but fail in the browser with CORS or missing cookie errors.",
        promptText: `Diagnose why this browser request fails while direct server requests succeed:
[PASTE FETCH CALL + SERVER CORS/COOKIE CONFIG + NETWORK ERROR]

Check origin matching (avoid wildcard "*" when credentials: "include" is set), preflight OPTIONS handling, SameSite/Secure cookie flags, and proxy rewrites.
Provide the exact corrected client fetch options and server headers needed for both localhost dev and HTTPS production.`,
      },
      {
        id: "dbg-css-layout-overflow",
        title: "Horizontal Overflow & Z-Index Bug Hunter",
        tag: "Debugging",
        scenario:
          "When a page unexpectedly scrolls horizontally on mobile or a dropdown clips behind a sibling card.",
        promptText: `Find the exact CSS/Tailwind classes causing horizontal overflow, text clipping, or stacking-context overlap in this markup:
[PASTE HTML/JSX SNIPPET]

Identify which element exceeds viewport width (e.g. unclipped pre/code block, missing min-w-0 on flex/grid child, fixed width) or creates an unintended stacking context (transform/backdrop-filter/z-index).
Return the minimal Tailwind class fix keeping desktop and 375px mobile layouts intact.`,
      },

      // Refactoring (5)
      {
        id: "ref-messy-ai-code",
        title: "Refactor Messy AI-Generated Spaghetti",
        tag: "Refactoring",
        scenario:
          "When rapid prompting leaves behind a 600-line monolithic file with duplicated logic and deep nesting.",
        promptText: `Refactor this module for readability, testability, and clean boundaries without changing any observable behavior:
[PASTE FILE]

Rules:
1. Preserve all exported symbols, component props, API signatures, and UI states identically.
2. Flatten nested conditionals using early returns and extract pure helper functions for repeated logic.
3. Separate pure data transformations from rendering components.
4. Summarize every structural change made and confirm zero edge-case checks were dropped.`,
      },
      {
        id: "ref-strict-typescript",
        title: 'Eliminate "any" & Tighten TypeScript Types',
        tag: "Refactoring",
        scenario:
          "When the AI used `any`, `as unknown as`, or `@ts-ignore` to silence compiler errors.",
        promptText: `Replace all unsafe \`any\`, \`@ts-ignore\`, and forced type assertions in this code with strict, idiomatic TypeScript:
[PASTE CODE + TSCONFIG CONTEXT]

Model async and multi-branch states using discriminated unions, narrow unknown inputs with runtime type guards, and preserve strict null checks.
Ensure \`tsc --noEmit\` passes cleanly without weakening compiler strictness or altering runtime behavior.`,
      },
      {
        id: "ref-prop-drilling-cleanup",
        title: "Clean State Lifting & Context Extraction",
        tag: "Refactoring",
        scenario:
          "When 8+ props are threaded through intermediate components that never use them.",
        promptText: `Eliminate excessive prop drilling in this component tree while keeping state updates predictable and easy to trace:
[PASTE PARENT + CHILD COMPONENTS]

Use component composition (children slots) first where possible, or extract a focused, memoized Context provider for truly global state.
Avoid over-engineering heavy external state libraries unless multiple unrelated subtrees mutate shared state frequently.`,
      },
      {
        id: "ref-legacy-to-hooks",
        title: "Decouple Side Effects Into Custom Hooks",
        tag: "Refactoring",
        scenario:
          "When a UI component mixes complex fetch/timer/subscription logic directly with JSX markup.",
        promptText: `Extract the stateful side effects, timers, and data-fetching logic from this component into a cohesive, single-purpose custom hook:
[PASTE COMPONENT]

Ensure the hook returns a clean, typed interface (\`data\`, \`isLoading\`, \`error\`, and action handlers), cleans up all listeners on unmount, and leaves the UI component purely declarative.`,
      },
      {
        id: "ref-dead-code-prune",
        title: "Dead Code, Unused Deps & Duplication Audit",
        tag: "Refactoring",
        scenario:
          "After several feature pivots when unused helpers, stale CSS classes, and redundant imports accumulate.",
        promptText: `Audit this module for dead code, unreachable branches, unused imports, duplicate helper functions, and obsolete state variables:
[PASTE CODE]

List each redundant symbol with why it is safe to remove, then provide the tightened, cleaner version without deleting any subtly referenced side effects or accessibility attributes.`,
      },

      // Security Audit (5)
      {
        id: "sec-full-owasp-audit",
        title: "OWASP Top-10 Pre-Launch Security Audit",
        tag: "Security Audit",
        scenario:
          "Before deploying a vibe-coded full-stack app to public users.",
        promptText: `Perform a pragmatic security audit on these routes and components looking for real exploitable vulnerabilities:
[PASTE SERVER ROUTES + AUTH/DB LOGIC]

Check specifically for: broken object-level authorization (IDOR), SQL/NoSQL injection, XSS via unescaped HTML injection, SSRF, missing rate limits, and leaked secrets in client responses.
Rank any findings by severity (Critical / High / Medium) and provide exact, copy-ready code patches for each issue.`,
      },
      {
        id: "sec-idor-authz-check",
        title: "Authorization & Tenant Isolation Check",
        tag: "Security Audit",
        scenario:
          "To verify users cannot access or mutate another user/organization record by changing an ID in the URL.",
        promptText: `Review every endpoint and database query below for Broken Object-Level Authorization (IDOR) and privilege escalation:
[PASTE API HANDLERS + QUERIES]

Verify that ownership (\`userId\` or \`orgId\` derived strictly from the verified session—never from \`req.body\`) is enforced on every single read, update, and delete query.
Rewrite any vulnerable handler to scope queries strictly to the authenticated principal.`,
      },
      {
        id: "sec-secret-leak-scan",
        title: "Client Bundle Secret & Env Var Exposure Audit",
        tag: "Security Audit",
        scenario:
          "To make sure API keys, webhook secrets, or database URLs are never bundled into browser JavaScript.",
        promptText: `Audit this frontend config, Vite/Next env usage, and client components for accidental secret exposure:
[PASTE ENV USAGE + CLIENT FILES + SERVER PROXY]

Flag any private key referenced with \`VITE_\` or \`NEXT_PUBLIC_\` prefixes or imported into client modules.
Show how to move privileged API calls behind a minimal \`/api/*\` server-side proxy route while keeping \`.env.example\` clean.`,
      },
      {
        id: "sec-xss-sanitization",
        title: "XSS & Untrusted HTML/Markdown Guardrail",
        tag: "Security Audit",
        scenario:
          "Whenever rendering user-generated text, Markdown, rich text, or AI output into the DOM.",
        promptText: `Inspect how untrusted user or LLM-generated strings are inserted into the DOM in this file:
[PASTE COMPONENT / VANILLA JS RENDERER]

Eliminate unsafe \`innerHTML\`, \`dangerouslySetInnerHTML\`, or unvalidated \`javascript:\` href links.
Replace them with safe \`textContent\` / JSX escaping, strict URL protocol allowlists (\`https:\` / \`http:\`), and explicit HTML sanitization if rich formatting is required.`,
      },
      {
        id: "sec-webhook-rate-limit",
        title: "Webhook Verification & Abuse Rate-Limiting",
        tag: "Security Audit",
        scenario:
          "When exposing public signup forms, AI proxy endpoints, or Stripe/GitHub webhook receivers.",
        promptText: `Harden these public API endpoints against spam, brute-force abuse, and forged webhook payloads:
[PASTE PUBLIC ENDPOINT CODE]

Implement constant-time HMAC/signature verification on raw request bodies for webhooks, strict payload size caps, input schema validation, and token-bucket rate limiting keyed by IP or user ID with proper 429 Retry-After responses.`,
      },

      // Performance (5)
      {
        id: "perf-react-rerender",
        title: "React Re-Render & State Bottleneck Profiler",
        tag: "Performance",
        scenario:
          "When typing in a search input or interacting with a table feels laggy or drops frames.",
        promptText: `Analyze why this React tree performs unnecessary re-renders or expensive recalculations on user input:
[PASTE COMPONENT + STATE STRUCTURE]

Fix the root cause by colocalizing fast-changing input state, splitting large context providers, debouncing heavy derived filters, or virtualizing long lists (>200 rows) rather than blindly wrapping everything in useMemo.`,
      },
      {
        id: "perf-n-plus-one-queries",
        title: "N+1 Database Query & Waterfall Eliminator",
        tag: "Performance",
        scenario:
          "When list pages or dashboards take seconds to load due to sequential loops of queries or fetches.",
        promptText: `Inspect this backend handler and frontend data loader for N+1 database queries and sequential network waterfalls:
[PASTE ROUTE HANDLER + DATA FETCHING CODE]

Consolidate looped queries into single SQL JOINs or batched \`WHERE id IN (...)\` lookups, run independent async calls in parallel with \`Promise.all\`, and select only the columns actually rendered by the UI.`,
      },
      {
        id: "perf-core-web-vitals",
        title: "Core Web Vitals (LCP, CLS, INP) Optimizer",
        tag: "Performance",
        scenario:
          "When page load flashes, images shift layout, or Lighthouse performance scores dip.",
        promptText: `Optimize this page for Core Web Vitals (LCP, CLS, and INP):
[PASTE PAGE HTML / COMPONENT]

Fix layout shifts (CLS) by adding explicit aspect-ratio/dimension containers on images, speed up LCP by preloading critical hero assets without render-blocking scripts, and improve INP by animating only compositor properties (transform, opacity) and avoiding heavy synchronous main-thread work.`,
      },
      {
        id: "perf-bundle-size-audit",
        title: "JavaScript Bundle Bloat & Tree-Shaking Check",
        tag: "Performance",
        scenario:
          "When production build warnings flag oversized chunks (>500 kB) or slow mobile startup.",
        promptText: `Review these imports and build setup for oversized dependencies and missed code-splitting opportunities:
[PASTE PACKAGE.JSON + IMPORTS]

Replace heavy monolithic libraries with lightweight alternatives or native browser APIs, convert barrel imports to direct module imports where needed, and lazy-load heavy secondary views (charts, editors, modals) via dynamic \`import()\`.`,
      },
      {
        id: "perf-caching-headers",
        title: "HTTP Cache-Control & Edge Caching Blueprint",
        tag: "Performance",
        scenario:
          "When static assets re-download on every visit or public API responses hit the database redundantly.",
        promptText: `Design an explicit HTTP caching strategy for these static assets and API routes:
[PASTE ROUTES / SERVER CONFIG]

Apply immutable long-lived \`Cache-Control\` headers to fingerprinted build assets, \`stale-while-revalidate\` on cacheable public reads, and strict \`no-store\` on authenticated user-specific responses so fresh data stays accurate without sacrificing speed.`,
      },

      // Anti-Hallucination (4)
      {
        id: "anti-hallucination-verify-apis",
        title: "Stop Fake Packages & Non-Existent APIs",
        tag: "Anti-Hallucination",
        scenario:
          "When an LLM invents npm package names, phantom SDK methods, or outdated v1 syntax.",
        promptText: `Before writing code for this task, verify every external package, import path, and API method against the installed versions in package.json:
[PASTE PACKAGE.JSON + TASK]

Strict Anti-Hallucination Rules:
1. Do NOT invent package names, unverified flags, or undocumented SDK methods.
2. If you are uncertain about an exact method signature in the installed version, state the uncertainty explicitly instead of guessing.
3. Cite the exact package version from package.json for every third-party import you write.`,
      },
      {
        id: "anti-hallucination-evidence-first",
        title: "File-Grounded Verification (No Guessing)",
        tag: "Anti-Hallucination",
        scenario:
          "When the AI assumes how another file in your repo works without actually reading it.",
        promptText: `Answer and modify code strictly based on the actual files provided below—make zero assumptions about unseen files:
[PASTE RELEVANT FILES]

Before proposing edits:
1. List the exact file paths and symbol names you observed in the provided context.
2. Identify any missing files or type definitions you need to inspect before proceeding safely.
3. Write code only for interfaces you have directly verified.`,
      },
      {
        id: "anti-hallucination-no-stubs",
        title: "Zero Placeholders, Stubs & Fake Fallbacks",
        tag: "Anti-Hallucination",
        scenario:
          'When the AI outputs "// TODO: implement logic here" or silently mocks failed API responses.',
        promptText: `Complete this implementation fully with zero shortcuts, placeholders, or mock fallbacks:
[PASTE TASK OR INCOMPLETE FILE]

Mandatory constraints:
- Never write \`// TODO\`, \`// ... rest of code\`, or empty stub handlers.
- Never catch an API error and silently return hardcoded fake arrays to make the UI look populated.
- Every button, form, and state branch must execute real, complete logic end-to-end.`,
      },
      {
        id: "anti-hallucination-step-check",
        title: "Pre-Edit Invariant & Regression Checklist",
        tag: "Anti-Hallucination",
        scenario:
          "Before asking an AI coding agent to perform a risky multi-file change.",
        promptText: `Before editing any file for this feature, write a concise 5-point invariant checklist covering:
1. Existing routes, types, and UI flows that must remain 100% intact.
2. Exact files you plan to touch and why each edit is required.
3. Edge cases (empty input, network failure, mobile 375px width) your change must handle.
Wait for confirmation or verify every invariant in your summary after editing.`,
      },
    ],

    hosting: [
      {
        id: "vercel",
        name: "Vercel",
        tag: "Hosting",
        freeTierLimit:
          "100 GB bandwidth/mo · Unlimited previews · 6,000 build mins",
        description:
          "Industry-standard Git-to-edge platform built for Next.js, Vite, Astro, and serverless functions.\nGenerates automatic preview URLs on every pull request with zero configuration.",
        url: "https://vercel.com",
      },
      {
        id: "netlify",
        name: "Netlify",
        tag: "Hosting",
        freeTierLimit:
          "100 GB bandwidth/mo · 300 build mins/mo · 125k serverless reqs",
        description:
          "Automated CI/CD hosting with drag-and-drop folder deploys, built-in forms, and edge functions.\nSupports instant atomic rollbacks and branch deploy previews out of the box.",
        url: "https://www.netlify.com",
      },
      {
        id: "github-pages",
        name: "GitHub Pages",
        tag: "Hosting",
        freeTierLimit:
          "1 GB published site · 100 GB/mo soft bandwidth · 10 builds/hr",
        description:
          "Free HTTPS static hosting served straight from any public GitHub branch or Actions workflow.\nIdeal for single-file tools, static multi-page directories, and technical docs.",
        url: "https://pages.github.com",
      },
      {
        id: "cloudflare-pages",
        name: "Cloudflare Pages",
        tag: "Hosting",
        freeTierLimit:
          "Unlimited static bandwidth & requests · 500 builds/mo · 100k Workers/day",
        description:
          "Global edge network hosting static frontends with truly unlimited static bandwidth.\nPair with a `/functions` folder to run serverless TypeScript APIs on Cloudflare Workers.",
        url: "https://pages.cloudflare.com",
      },
      {
        id: "render",
        name: "Render",
        tag: "Hosting",
        freeTierLimit:
          "100 GB static bandwidth · 750 free web service hrs/mo (sleeps on idle)",
        description:
          "Unified cloud host for static sites, Node/Python web services, cron jobs, and starter Postgres.\nSimplifies deploying full-stack Express or FastAPI backends directly from GitHub.",
        url: "https://render.com",
      },
      {
        id: "railway",
        name: "Railway",
        tag: "Hosting",
        freeTierLimit:
          "Free Trial ($5 starter credit) · Instant Git & Docker deploys",
        description:
          "Developer-first infrastructure canvas for containers, persistent backends, Redis, and SQL databases.\nProvisions live environments, logs, and environment variables in seconds from Git.",
        url: "https://railway.app",
      },
      {
        id: "fly-io",
        name: "Fly.io",
        tag: "Hosting",
        freeTierLimit:
          "Pay-as-you-go with small free allowance · Global Firecracker microVMs",
        description:
          "Runs full-stack Docker containers close to users across 30+ edge regions worldwide.\nGreat for stateful Node, Go, or SQLite/Litestream apps needing low-latency compute.",
        url: "https://fly.io",
      },
      {
        id: "coolify",
        name: "Coolify",
        tag: "Hosting",
        freeTierLimit: "100% Free & Open-Source (self-hosted on any $4/mo VPS)",
        description:
          "Self-hostable alternative to Vercel, Heroku, and Netlify that runs on your own Linux server.\nAutomates Git push deploys, Let's Encrypt SSL, Postgres, and Redis with zero vendor lock-in.",
        url: "https://coolify.io",
      },
      {
        id: "supabase",
        name: "Supabase",
        tag: "Database",
        freeTierLimit:
          "2 free projects · 500 MB Postgres · 50,000 MAU auth · 1 GB storage",
        description:
          "Open-source Firebase alternative powered by dedicated PostgreSQL, Row Level Security, and Auth.\nAuto-generates instant REST, GraphQL, and real-time WebSocket APIs from your schema.",
        url: "https://supabase.com",
      },
      {
        id: "neon",
        name: "Neon",
        tag: "Database",
        freeTierLimit:
          "0.5 GB storage · 100 CU-hours/mo · 10 projects & instant DB branching",
        description:
          "Serverless PostgreSQL that scales compute to zero on idle and wakes in milliseconds.\nOffers Git-style database branching so every PR preview gets an isolated database copy.",
        url: "https://neon.tech",
      },
      {
        id: "firebase",
        name: "Firebase",
        tag: "Backend",
        freeTierLimit:
          "Spark Plan: 1 GiB Firestore · 50k reads/day · 10 GB Hosting · Free Auth",
        description:
          "Google app backend suite combining Firestore NoSQL, Firebase Auth, Hosting, and Cloud Storage.\nShips real-time client SDKs and declarative security rules for rapid web and mobile apps.",
        url: "https://firebase.google.com",
      },
      {
        id: "pocketbase",
        name: "PocketBase",
        tag: "Backend",
        freeTierLimit:
          "100% Free & Open-Source single Go binary (embedded SQLite + Auth + Storage)",
        description:
          "Lightweight open-source backend packaged into a single executable with real-time subscriptions.\nIncludes a built-in admin dashboard, OAuth providers, and REST APIs on minimal RAM.",
        url: "https://pocketbase.io",
      },
      {
        id: "appwrite",
        name: "Appwrite",
        tag: "Backend",
        freeTierLimit:
          "Cloud Free Plan: 75k MAU · 2 GB DB · 2 GB storage · 750k function executions",
        description:
          "Open-source BaaS offering databases, authentication, file storage, messaging, and serverless functions.\nAvailable both as managed Cloud free tier and Docker self-hosted stack.",
        url: "https://appwrite.io",
      },
      {
        id: "turso",
        name: "Turso",
        tag: "Database",
        freeTierLimit:
          "5 GB storage · 500M row reads/mo · 10M row writes/mo · 100 databases",
        description:
          "Edge-hosted SQLite (libSQL) built for ultra-low-latency reads and per-tenant database isolation.\nIdeal for multi-tenant SaaS apps giving every user or workspace an isolated SQLite DB.",
        url: "https://turso.tech",
      },
      {
        id: "upstash",
        name: "Upstash",
        tag: "Database",
        freeTierLimit:
          "256 MB Redis · 500k commands/mo · Serverless pay-per-request HTTP API",
        description:
          "Serverless Redis, QStash message queues, and Vector DB accessible over standard HTTPS.\nWorks natively inside Cloudflare Workers, Vercel Edge Functions, and serverless Lambdas.",
        url: "https://upstash.com",
      },
      {
        id: "clerk",
        name: "Clerk",
        tag: "Auth",
        freeTierLimit:
          "10,000 Monthly Active Users free · Prebuilt React/Next.js UI & Organizations",
        description:
          "Drop-in authentication and user management featuring sleek prebuilt sign-in, MFA, and org switchers.\nSaves days of boilerplate when shipping SaaS MVPs with social OAuth and RBAC.",
        url: "https://clerk.com",
      },
      {
        id: "resend",
        name: "Resend",
        tag: "Email",
        freeTierLimit:
          "3,000 emails/mo · 100 emails/day · 1 custom domain free",
        description:
          "Developer-friendly transactional email API designed to pair cleanly with React Email templates.\nDelivers fast onboarding, magic-link, and webhook-tracked emails in three lines of code.",
        url: "https://resend.com",
      },
      {
        id: "cloudinary",
        name: "Cloudinary",
        tag: "Storage",
        freeTierLimit:
          "25 monthly credits (~25 GB storage or 25 GB bandwidth + transformations)",
        description:
          "Programmable media storage and CDN with on-the-fly URL image resizing, WebP/AVIF, and cropping.\nAutomates responsive thumbnails and video optimization without manual Sharp pipelines.",
        url: "https://cloudinary.com",
      },
      {
        id: "cloudflare-r2",
        name: "Cloudflare R2",
        tag: "Storage",
        freeTierLimit:
          "10 GB storage/mo · Zero egress bandwidth fees · 1M Class A / 10M Class B ops",
        description:
          "S3-compatible object storage with zero egress fees for serving user uploads and static media.\nDrops directly into existing AWS S3 SDK presigned-URL pipelines without surprise bandwidth bills.",
        url: "https://www.cloudflare.com/developer-platform/products/r2/",
      },
      {
        id: "uploadthing",
        name: "UploadThing",
        tag: "Storage",
        freeTierLimit:
          "2 GB storage · Unlimited uploads · Type-safe Next.js/React/Express hooks",
        description:
          "Type-safe file upload infrastructure built specifically for full-stack TypeScript developers.\nHandles presigned URLs, MIME validation, and prebuilt dropzone components out of the box.",
        url: "https://uploadthing.com",
      },
    ],
  };

  if (root) {
    root.VIBE_DATA = VIBE_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = VIBE_DATA;
  }
})(typeof window !== "undefined" ? window : globalThis);
