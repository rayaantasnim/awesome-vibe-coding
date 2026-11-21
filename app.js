/**
 * Awesome Vibe Coding — Central Data & DOM Engine (app.js)
 * Contains 105 curated resources on `window.VIBE_DATA` and powers
 * dynamic rendering, live search, tag filtering, prompt preview modals,
 * and 1-click copy across all 5 pages via `body[data-page]`.
 */
(function (root) {
  "use strict";

  const VIBE_DATA = {
    editors: [
      {
        id: "claude",
        name: "Claude",
        tag: "App Builder",
        pricing: "Freemium",
        desc: "Anthropic flagship reasoning assistant with interactive React/HTML Artifacts. Generates clean UI prototypes and complex architectural plans in seconds.",
        bestFor:
          "Interactive UI Artifacts, system design, and nuanced refactoring",
        url: "https://claude.ai",
      },
      {
        id: "claude-code",
        name: "Claude Code",
        tag: "CLI Agent",
        pricing: "Paid",
        desc: "Agentic command-line coding tool running directly inside your local terminal. Reads repositories, runs test suites, and commits verified multi-file edits.",
        bestFor:
          "Autonomous terminal engineering and large codebase migrations",
        url: "https://docs.anthropic.com/en/docs/claude-code",
      },
      {
        id: "google-ai-studio",
        name: "Google AI Studio",
        tag: "App Builder",
        pricing: "Free",
        desc: "Browser-based Gemini workspace featuring massive context windows and live app building. Test structured schemas, multimodal inputs, and deployable prototypes free.",
        bestFor:
          "Long-context codebase analysis and zero-cost Gemini prototyping",
        url: "https://aistudio.google.com",
      },
      {
        id: "cursor",
        name: "Cursor",
        tag: "AI IDE",
        pricing: "Freemium",
        desc: "AI-native VS Code fork built around multi-file Composer edits and predictive Tab completion. Indexes your entire repository with rules support for consistent code.",
        bestFor:
          "Daily full-stack development inside production Git repositories",
        url: "https://www.cursor.com",
      },
      {
        id: "windsurf",
        name: "Windsurf",
        tag: "AI IDE",
        pricing: "Freemium",
        desc: "Agentic IDE by Codeium powered by the Cascade reasoning engine. Coordinates cross-file edits, terminal commands, and live preview checks automatically.",
        bestFor:
          "Hands-off multi-file feature implementation with deep repo context",
        url: "https://windsurf.com",
      },
      {
        id: "bolt-new",
        name: "Bolt.new",
        tag: "App Builder",
        pricing: "Freemium",
        desc: "Full-stack browser IDE powered by StackBlitz WebContainers. Installs npm packages, boots Node servers, and previews edits without local setup.",
        bestFor:
          "Instant full-stack Vite, Next.js, and Astro apps in the browser",
        url: "https://bolt.new",
      },
      {
        id: "lovable",
        name: "Lovable",
        tag: "App Builder",
        pricing: "Freemium",
        desc: "Prompt-to-production web app builder with native Supabase database and auth wiring. Includes visual element selection and two-way GitHub repository sync.",
        bestFor:
          "Shipping SaaS MVPs with Postgres, authentication, and clean UI",
        url: "https://lovable.dev",
      },
      {
        id: "v0",
        name: "v0 by Vercel",
        tag: "UI Generator",
        pricing: "Freemium",
        desc: "Generative UI studio built specifically for React, Tailwind CSS, and shadcn/ui. Produces copy-ready, accessible component trees with interactive previews.",
        bestFor:
          "High-craft React dashboards, landing sections, and UI components",
        url: "https://v0.dev",
      },
      {
        id: "replit-agent",
        name: "Replit Agent",
        tag: "App Builder",
        pricing: "Freemium",
        desc: "Autonomous cloud workspace agent that plans dependencies, databases, and routes. Builds, debugs, and hosts live full-stack web apps from natural language.",
        bestFor:
          "End-to-end cloud prototypes with built-in PostgreSQL and hosting",
        url: "https://replit.com",
      },
      {
        id: "cline",
        name: "Cline",
        tag: "AI IDE",
        pricing: "Free",
        desc: "Open-source autonomous coding extension for VS Code with human-in-the-loop approvals. Supports Bring-Your-Own-Key models, MCP tools, and browser checks.",
        bestFor: "Transparent, BYOK agentic coding inside standard VS Code",
        url: "https://cline.bot",
      },
      {
        id: "roo-code",
        name: "Roo Code",
        tag: "AI IDE",
        pricing: "Free",
        desc: "Open-source VS Code coding agent offering specialized Architect, Code, and Debug modes. Lets teams customize per-mode models and local Ollama endpoints.",
        bestFor: "Custom multi-mode agent workflows and local LLM development",
        url: "https://roocode.com",
      },
      {
        id: "aider",
        name: "Aider",
        tag: "CLI Agent",
        pricing: "Free",
        desc: "Battle-tested open-source terminal pair programmer that maps your entire Git repo. Applies clean diffs and generates descriptive Git commits after every change.",
        bestFor: "Fast, keyboard-first terminal edits with clean Git history",
        url: "https://aider.chat",
      },
      {
        id: "github-copilot",
        name: "GitHub Copilot",
        tag: "AI IDE",
        pricing: "Freemium",
        desc: "Multi-model AI coding assistant integrated across VS Code, JetBrains, and GitHub. Combines inline autocomplete, multi-file Agent mode, and PR issue resolution.",
        bestFor:
          "Enterprise teams standardized on GitHub workflows and JetBrains",
        url: "https://github.com/features/copilot",
      },
      {
        id: "firebase-studio",
        name: "Firebase Studio",
        tag: "AI IDE",
        pricing: "Free",
        desc: "Google cloud agentic workspace combining IDX, Gemini, and Firebase tooling. Scaffolds web and mobile apps with built-in emulators and App Hosting.",
        bestFor:
          "Full-stack apps backed by Firestore, Firebase Auth, and Cloud Run",
        url: "https://firebase.studio",
      },
      {
        id: "tempo-labs",
        name: "Tempo Labs",
        tag: "UI Generator",
        pricing: "Freemium",
        desc: "Visual React editor merging a Figma-style canvas directly with underlying TSX code. Lets designers and developers edit Tailwind layouts without breaking logic.",
        bestFor: "Visual React + Tailwind refinement and design-system work",
        url: "https://www.tempo.new",
      },
      {
        id: "softgen",
        name: "Softgen",
        tag: "App Builder",
        pricing: "Paid",
        desc: "AI web application builder focused on Next.js, Firebase, Tailwind, and Stripe. Automates project scaffolding, user authentication, and payment flows.",
        bestFor:
          "Monetized SaaS prototypes requiring Stripe and auth out of the box",
        url: "https://softgen.ai",
      },
      {
        id: "devin",
        name: "Devin",
        tag: "CLI Agent",
        pricing: "Paid",
        desc: "Cloud-hosted autonomous software engineer equipped with its own shell, editor, and browser. Picks up tickets, writes fixes, runs CI, and opens pull requests.",
        bestFor:
          "Delegating self-contained bug tickets and migrations asynchronously",
        url: "https://devin.ai",
      },
      {
        id: "openhands",
        name: "OpenHands",
        tag: "CLI Agent",
        pricing: "Free",
        desc: "Open-source platform for autonomous AI software development agents in Docker sandboxes. Executes bash commands, edits codebases, and browses docs.",
        bestFor: "Self-hosted autonomous coding agents and research automation",
        url: "https://www.all-hands.dev",
      },
      {
        id: "marblism",
        name: "Marblism",
        tag: "App Builder",
        pricing: "Freemium",
        desc: "Full-stack SaaS generator producing clean React frontends paired with Node/Postgres APIs. Breaks prompts into architecture diagrams and editable pages.",
        bestFor:
          "Structured React + Node.js SaaS boilerplates you own completely",
        url: "https://www.marblism.com",
      },
      {
        id: "pythagora",
        name: "Pythagora",
        tag: "AI IDE",
        pricing: "Freemium",
        desc: "Spec-driven AI engineering extension for VS Code powered by GPT Pilot. Breaks large requirements into iterative tasks with automated debug checkpoints.",
        bestFor: "Structured, step-by-step backend and full-stack generation",
        url: "https://www.pythagora.ai",
      },
      {
        id: "zed-ai",
        name: "Zed AI",
        tag: "AI IDE",
        pricing: "Freemium",
        desc: "Ultra-fast GPU-accelerated code editor written in Rust with native Agent Panel. Supports inline transforms, slash-command context, and edit predictions.",
        bestFor: "Developers prioritizing raw editor speed and crisp native UX",
        url: "https://zed.dev",
      },
      {
        id: "trae",
        name: "Trae",
        tag: "AI IDE",
        pricing: "Free",
        desc: "Adaptive AI IDE featuring an autonomous Builder mode and multimodal screenshot input. Analyzes project structure to scaffold, preview, and repair apps.",
        bestFor:
          "Free access to frontier coding models inside a clean VS Code UI",
        url: "https://www.trae.ai",
      },
      {
        id: "void-editor",
        name: "Void",
        tag: "AI IDE",
        pricing: "Free",
        desc: "Open-source alternative to Cursor built on VS Code with privacy-first architecture. Routes prompts directly to local Ollama models or frontier APIs.",
        bestFor:
          "Privacy-sensitive teams wanting open-source AI IDE capabilities",
        url: "https://voideditor.com",
      },
      {
        id: "continue-dev",
        name: "Continue",
        tag: "AI IDE",
        pricing: "Free",
        desc: "Open-source AI code assistant for VS Code and JetBrains with declarative YAML configs. Supports custom context providers and shared team prompt rules.",
        bestFor:
          "Teams building custom internal AI coding workflows and local RAG",
        url: "https://www.continue.dev",
      },
      {
        id: "augment-code",
        name: "Augment Code",
        tag: "AI IDE",
        pricing: "Freemium",
        desc: "Context-first coding agent engineered specifically for large, complex production codebases. Delivers fast codebase-wide retrieval and multi-file refactors.",
        bestFor: "Large multi-service repositories where shallow context fails",
        url: "https://www.augmentcode.com",
      },
      {
        id: "coderabbit",
        name: "CodeRabbit",
        tag: "Code Reviewer",
        pricing: "Freemium",
        desc: "Automated AI pull-request reviewer for GitHub and GitLab repositories. Posts line-by-line bug warnings, security checks, and one-click commit fixes.",
        bestFor:
          "Catching AI-introduced edge cases and regressions during PR review",
        url: "https://www.coderabbit.ai",
      },
      {
        id: "sourcery",
        name: "Sourcery",
        tag: "Code Reviewer",
        pricing: "Freemium",
        desc: "Static and LLM-powered code reviewer delivering instant refactoring tips on PRs and IDEs. Flags duplicate logic, complexity spikes, and security issues.",
        bestFor:
          "Maintaining clean Python and TypeScript quality on fast teams",
        url: "https://sourcery.ai",
      },
      {
        id: "greptile",
        name: "Greptile",
        tag: "Code Reviewer",
        pricing: "Paid",
        desc: "Graph-indexed AI code reviewer that understands cross-repository dependencies before commenting. Prevents breaking changes by tracing callers codebase-wide.",
        bestFor:
          "High-signal PR reviews on interconnected microservices and monorepos",
        url: "https://www.greptile.com",
      },
      {
        id: "openai-codex-cli",
        name: "OpenAI Codex CLI",
        tag: "CLI Agent",
        pricing: "Free",
        desc: "Lightweight open-source terminal agent running inside OS-level network sandboxes. Reads files, applies patches, and executes commands with approval modes.",
        bestFor:
          "Fast, sandboxed terminal automation with OpenAI reasoning models",
        url: "https://github.com/openai/codex",
      },
      {
        id: "magic-patterns",
        name: "Magic Patterns",
        tag: "UI Generator",
        pricing: "Freemium",
        desc: "Infinite-canvas UI prototyping studio generating parallel React + Tailwind design options. Exports clean component code and Figma-ready layouts.",
        bestFor:
          "Exploring multiple visual directions before committing to one UI",
        url: "https://www.magicpatterns.com",
      },
    ],

    prompts: [
      {
        id: "fs-schema-first",
        title: "Schema-First Full-Stack Architect",
        tag: "Full-Stack",
        prompt: `Act as a staff full-stack engineer. Before writing any UI components, design the database schema and shared TypeScript contracts first.
Build idempotent REST API handlers with strict input validation, proper HTTP status codes, and structured JSON error responses.
Keep all secrets strictly server-side using environment variables and never expose private keys in client bundles.
On the frontend, wire explicit loading skeletons, empty states, and actionable error banners with retry controls for every async call.
Deliver complete, working files with clean imports and zero placeholder comments or mock fallbacks.`,
      },
      {
        id: "fs-nextjs-app-router",
        title: "Next.js App Router Production Blueprint",
        tag: "Full-Stack",
        prompt: `Build this feature using Next.js App Router, TypeScript, and Server Actions with clear server/client boundaries.
Keep data fetching and authorization checks inside Server Components or validated route handlers, passing only serialized DTOs to Client Components.
Use optimistic UI updates only where paired with server-confirmed rollback handling on failure.
Validate all form payloads with Zod on both client and server, returning field-level error messages cleanly.
Ensure zero hydration mismatches, clean metadata exports, and responsive Tailwind CSS styling across all viewports.`,
      },
      {
        id: "fs-express-react-spa",
        title: "Express + React + Vite Monorepo Setup",
        tag: "Full-Stack",
        prompt: `Architect a cohesive full-stack application with an Express TypeScript API server and a React + Vite frontend on port 3000.
Organize backend logic into routes, controllers, and pure service helpers with centralized error-handling middleware.
Use a typed client fetch wrapper featuring AbortController timeouts, JSON parsing guards, and unified error extraction.
Never swallow failed API responses or silently revert to dummy arrays; render clear user-facing error recovery states instead.
Include health-check endpoints, CORS safety, and clean TypeScript interfaces shared across client and server.`,
      },
      {
        id: "fs-realtime-collab",
        title: "Real-Time WebSocket Sync Engine",
        tag: "Full-Stack",
        prompt: `Design a real-time collaborative feature backed by an authoritative server state and typed WebSocket event contracts.
Validate every incoming client event on the server before broadcasting state diffs to connected room participants.
Implement exponential-backoff reconnection, sequence ordering, and clear connection status feedback without noisy telemetry spam.
Prevent memory leaks by cleaning up socket listeners and timers cleanly inside component teardown hooks.
Handle optimistic local echoes gracefully while reconciling conflicts deterministically against server timestamps.`,
      },
      {
        id: "fs-file-upload-pipeline",
        title: "Direct-to-Cloud File Upload Pipeline",
        tag: "Full-Stack",
        prompt: `Build a secure file upload workflow using short-lived presigned URLs rather than routing large binary payloads through app servers.
Enforce strict MIME type allowlists, maximum byte limits, and sanitized filenames before issuing upload signatures.
Display real-time upload progress percentages using tabular numerals, cancel controls, and clear validation feedback for rejected files.
Persist uploaded asset metadata in the database only after verifying the object upload succeeded.
Include accessible drag-and-drop plus keyboard file-picker triggers for full cross-device usability.`,
      },
      {
        id: "ui-anti-slop-system",
        title: "High-Craft Anti-Slop UI Designer",
        tag: "UI/UX",
        prompt: `Act as a senior product designer and frontend engineer. Build an interface with unmistakable editorial restraint and visual clarity.
Apply a strict 60-30-10 color hierarchy: neutral canvas, subdued structural surfaces with 1px hairline borders, and one focused accent for actions.
Avoid decorative pulsing dots, excessive neon glows, nested cards within cards, and crowded pill badges around static text metadata.
Maintain WCAG AA contrast (4.5:1 body, 3:1 headings), visible focus-visible rings, and 40px+ interactive control targets.
Use tabular-nums for all metrics, counts, and tables so figures align cleanly without layout shift.`,
      },
      {
        id: "ui-bento-dashboard",
        title: "Data-Dense Analytics Dashboard Layout",
        tag: "UI/UX",
        prompt: `Design an executive analytics dashboard featuring a clean collapsible sidebar, top breadcrumb bar, and asymmetric Bento metric grid.
Keep all navigation links and action buttons single-line (whitespace-nowrap shrink-0) with clean truncation on narrow viewports.
Render KPI cards with crisp numeric hierarchy, explicit comparison timeframes, and zero fabricated vanity scores or telemetry tickers.
Pair every chart or data table with working date-range filters, search inputs, and an informative empty state with a reset action.
Ensure smooth 150ms hover transitions using compositor properties only (transform and opacity).`,
      },
      {
        id: "ui-accessible-modal-drawer",
        title: "Accessible Modal, Drawer & Command Palette",
        tag: "UI/UX",
        prompt: `Implement a keyboard-first modal, slide-over drawer, and command palette system with full ARIA compliance and focus management.
Trap keyboard Tab focus inside the active overlay, close cleanly on Escape or backdrop click, and restore focus to the trigger element on close.
Lock background body scrolling while open and respect prefers-reduced-motion for all entrance and exit transitions.
Support arrow-key navigation and Enter selection inside the command palette with live client-side fuzzy filtering.
Keep backdrop contrast high enough for effortless legibility in both light and dark surfaces.`,
      },
      {
        id: "ui-multi-step-form",
        title: "Frictionless Multi-Step Wizard Form",
        tag: "UI/UX",
        prompt: `Create a multi-step onboarding or checkout wizard with clear progress indicators, per-step validation, and persisted draft state.
Validate fields inline on blur and before advancing steps, highlighting exact corrective instructions paired with icons and text—never color alone.
Preserve user entries when navigating backward between steps and guard against accidental double-submission with loading button states.
Keep form measure comfortable (max-w-xl), label every input explicitly, and ensure crisp mobile keyboard ergonomics (inputMode, autoComplete).
Finish with a clear confirmation summary screen offering next actions.`,
      },
      {
        id: "ui-responsive-tailwind-grid",
        title: "Bulletproof Responsive Tailwind Grid",
        tag: "UI/UX",
        prompt: `Construct a responsive multi-breakpoint layout using Tailwind CSS that holds its geometry cleanly from 375px mobile to 1440px desktop.
Ensure outer container padding always equals or exceeds inner grid gaps, and prevent horizontal scrolling across every viewport width.
Use grid-cols-1 on mobile, scaling cleanly to md:grid-cols-2 and lg:grid-cols-3/4 with equal-height cards via flex-col justify-between.
Collapse desktop navigation links cleanly into a toggleable mobile drawer below the md breakpoint without exceeding 15% mobile header height.
Apply text-wrap: balance to all hero and section headings to eliminate orphan trailing words.`,
      },
      {
        id: "saas-stripe-billing",
        title: "SaaS Subscription & Stripe Webhook Core",
        tag: "SaaS",
        prompt: `Build a production-ready SaaS billing module integrating Stripe Checkout, Customer Portal, and verified webhook synchronization.
Verify Stripe webhook signatures using the raw request body before updating user plan entitlements or subscription statuses in the database.
Handle idempotency keys and duplicate webhook deliveries gracefully so account state never drifts out of sync.
Present a transparent pricing comparison grid stating concrete feature limits rather than vague marketing rows.
Include clear upgrade, downgrade, cancellation, and past-due billing recovery states inside the user settings view.`,
      },
      {
        id: "saas-rbac-teams",
        title: "Multi-Tenant Team & RBAC Workspace",
        tag: "SaaS",
        prompt: `Architect a multi-tenant SaaS workspace supporting Organizations, Role-Based Access Control (Owner, Admin, Member), and email invitations.
Enforce organization membership and role checks inside every backend route and database query rather than relying solely on hidden UI buttons.
Support expiring single-use invite tokens, role updates with last-owner protection, and clean workspace switching in the client state.
Log key administrative actions (invites, role changes, billing updates) to an immutable audit trail visible to workspace owners.
Provide clear permission-denied feedback whenever a member attempts a restricted action.`,
      },
      {
        id: "saas-onboarding-checklist",
        title: "Interactive SaaS Activation Checklist",
        tag: "SaaS",
        prompt: `Design a persistent product onboarding checklist that guides new SaaS users from signup to their first core value moment.
Derive step completion automatically from real user data (e.g., profile saved, first project created, teammate invited) rather than manual checkboxes.
Allow users to collapse or dismiss the checklist cleanly while storing preference state across sessions.
Deep-link each incomplete step directly to the relevant UI control or modal so users never hunt through menus.
Celebrate completion cleanly with a subtle confirmation state and transition smoothly to the standard workspace view.`,
      },
      {
        id: "saas-usage-metering",
        title: "API Keys & Usage Metering Dashboard",
        tag: "SaaS",
        prompt: `Build a developer-facing API key management and usage metering panel for a B2B SaaS product.
Generate cryptographically random API keys, show the plaintext secret exactly once upon creation with a 1-click copy button, and store only hashed tokens.
Display masked key prefixes, creation dates, last-used timestamps, and instant one-click revocation with confirmation.
Track monthly quota consumption against plan limits using clean progress bars and tabular figures.
Expose clear cURL and TypeScript SDK quickstart snippets pre-populated with the endpoint URL.`,
      },
      {
        id: "lp-saas-conversion",
        title: "High-Conversion SaaS Product Landing Page",
        tag: "Landing Page",
        prompt: `Act as a conversion-focused frontend developer and product marketer. Build a sharp SaaS landing page free of generic buzzwords.
Lead above the fold with a concrete headline (max 10 words) stating who it serves and what problem it solves, a 1-sentence subheadline, and one primary CTA.
Structure the page into 4 focused sections: Hero Proposition, Core Workflow (01-03), Pricing/Comparison Matrix, and Quiet Footer.
Replace vague clichés like "supercharge" or "revolutionize" with specific mechanics, realistic product previews, and clear outcomes.
Ensure fast initial paint, balanced headline wrapping, and crisp responsive stacking on mobile.`,
      },
      {
        id: "lp-waitlist-launch",
        title: "Pre-Launch Waitlist & Interactive Demo",
        tag: "Landing Page",
        prompt: `Create a sleek product pre-launch page featuring an interactive mini-demo alongside a validated email waitlist signup flow.
Validate email formatting cleanly on submit, prevent duplicate rapid clicks while pending, and show an immediate confirmation message on success.
Include a concise 3-step visual breakdown showing how the product works before asking for an email address.
Avoid fake countdown timers, fabricated user counters, or intrusive arrival popups that block the first view.
Keep typography bold, scannable, and strictly aligned to a 65ch prose measure.`,
      },
      {
        id: "lp-devtool-docs-hero",
        title: "Developer Tool & CLI Launch Page",
        tag: "Landing Page",
        prompt: `Design an authentic developer-tool landing page tailored for engineers evaluating an SDK, CLI, or API platform.
Place an interactive terminal install command (\`npx\` or \`npm install\`) with a working 1-click copy button directly beneath the hero CTA.
Showcase real syntax-highlighted code snippets comparing before-and-after ergonomics rather than abstract marketing illustrations.
Link clearly to Documentation, Changelog, and GitHub Repository in a clean 3-zone top navigation bar.
Use JetBrains Mono for code blocks and tabular-nums for latency or benchmark tables.`,
      },
      {
        id: "lp-agency-portfolio",
        title: "Studio & Technical Agency Showcase",
        tag: "Landing Page",
        prompt: `Build a refined digital studio or technical consultancy landing page prioritizing typography, whitespace, and concrete case studies.
Present 3 structured case studies pairing client context, technical constraint, and measurable delivery outcome.
Keep the top bar clean with only the studio wordmark, 4 concise section links, and one "Book Discovery Call" button.
Include an inline project inquiry form with scope selection, timeline validation, and instant confirmation feedback.
Use subtle hairline dividers and calm neutral surfaces so portfolio visuals command full attention.`,
      },
      {
        id: "api-resilient-client",
        title: "Typed API Client & Retry Resilience",
        tag: "APIs",
        prompt: `Implement a resilient API integration layer with strict TypeScript response models, timeouts, and clean error recovery.
Wrap fetch requests in a central client using AbortController timeouts, explicit JSON error parsing, and safe HTTP status validation.
Cancel in-flight search or filter requests whenever new input arrives so stale responses never overwrite fresher state.
Display actionable error messages paired with a working "Retry" action while disabling duplicate form clicks during mutations.
Never leak raw stack traces, internal URLs, or bearer credentials into client error banners.`,
      },
      {
        id: "api-webhook-processor",
        title: "Idempotent Webhook Receiver & Queue",
        tag: "APIs",
        prompt: `Build an HTTP webhook ingestion endpoint designed for reliability under retries and bursts.
Verify HMAC signatures against the raw request buffer using constant-time comparison before parsing JSON payloads.
Persist incoming event IDs in an idempotency table so duplicate webhook deliveries never trigger double side effects.
Acknowledge valid events quickly with HTTP 200/202 and process heavy downstream jobs asynchronously with dead-letter logging.
Validate all payload fields with strict schemas and return explicit 4xx codes for malformed requests.`,
      },
      {
        id: "db-supabase-rls",
        title: "Supabase Postgres Schema & Strict RLS",
        tag: "APIs",
        prompt: `Design a normalized PostgreSQL schema for Supabase with Row Level Security (RLS) enabled on every user-facing table.
Write explicit SELECT, INSERT, UPDATE, and DELETE policies anchored to auth.uid() or verified team membership helper functions.
Add foreign-key indexes, updated_at triggers, and CHECK constraints so invalid states cannot enter the database even via direct API calls.
Include safe migration SQL plus typed TypeScript client queries that handle empty results and constraint errors cleanly.
Never bypass RLS with service-role keys inside browser-accessible code.`,
      },
      {
        id: "db-drizzle-migrations",
        title: "Drizzle ORM Type-Safe Data Layer",
        tag: "APIs",
        prompt: `Implement a strictly typed Drizzle ORM data access layer with clean schema definitions, relations, and transactional helpers.
Define explicit composite indexes for frequent filter and sort queries and enforce NOT NULL defaults wherever sensible.
Wrap multi-table mutations inside database transactions so partial writes roll back cleanly on failure.
Separate pure repository query functions from HTTP route handlers to make business logic easy to test and reuse.
Return paginated cursor or offset results paired with total counts for predictable UI pagination.`,
      },
      {
        id: "ext-mv3-scaffold",
        title: "Chrome Extension Manifest V3 Blueprint",
        tag: "Chrome Extension",
        prompt: `Scaffold a clean Chrome Extension using Manifest V3, TypeScript, Vite, and Tailwind CSS with minimal requested permissions.
Organize code strictly across popup/sidepanel UI, background service worker, and isolated content scripts using typed chrome.runtime messages.
Never rely on persistent background state in memory; persist user preferences and cache safely in chrome.storage.local or chrome.storage.sync.
Sanitize any DOM data read from host web pages before rendering inside extension views to prevent XSS.
Include clear host-permission guards and graceful fallbacks when invoked on restricted chrome:// tabs.`,
      },
      {
        id: "ext-sidepanel-ai",
        title: "Context-Aware Side Panel Assistant",
        tag: "Chrome Extension",
        prompt: `Build a Chrome Side Panel extension that extracts readable article or page context on user click—never scraping passively without consent.
Use a lightweight content script to extract clean title, URL, and selected text, forwarding it safely to the Side Panel UI.
Proxy any external API requests through a secure backend endpoint rather than shipping API keys inside the extension bundle.
Render streaming responses smoothly with a 1-click Copy button and keyboard shortcuts (Esc to clear, Cmd/Ctrl+Enter to run).
Handle tab switching cleanly so the side panel reflects the active tab context accurately.`,
      },
      {
        id: "ext-dom-overlay",
        title: "Shadow-DOM Page Enhancer Widget",
        tag: "Chrome Extension",
        prompt: `Create an injected page-helper widget mounted inside a closed or isolated Shadow DOM so host website CSS never breaks extension styling.
Observe dynamic SPA route changes cleanly using MutationObserver with debounced teardown to avoid duplicate widget mounts.
Keep injected bundle footprint tiny with zero global CSS pollution or conflicting event listeners on window.
Provide an accessible toggle shortcut and persistent per-domain disable switch stored in chrome.storage.
Clean up all DOM nodes and observers cleanly if the extension context invalidates.`,
      },
      {
        id: "mob-expo-router",
        title: "React Native + Expo Router Production App",
        tag: "Mobile App",
        prompt: `Build a cross-platform mobile feature using Expo SDK, React Native, TypeScript, and file-based Expo Router navigation.
Handle SafeAreaView insets, KeyboardAvoidingView behavior, and platform-specific touch feedback across both iOS and Android.
Keep lists silky smooth at 60fps using FlatList or FlashList with stable keyExtractor, memoized row components, and pull-to-refresh.
Persist auth tokens strictly in expo-secure-store rather than plain AsyncStorage.
Ensure every touch target is at least 44x44pt with clear loading, offline-retry, and empty states.`,
      },
      {
        id: "mob-pwa-offline",
        title: "Mobile-First Offline-Capable PWA",
        tag: "Mobile App",
        prompt: `Design a mobile-first Progressive Web App featuring thumb-zone bottom navigation, Web App Manifest, and offline resilience.
Keep bottom navigation limited to 4-5 crisp destinations with 44px+ touch targets and active state indicators combining icon and text.
Cache static shell assets cleanly via Service Worker while serving network-first or stale-while-revalidate strategies for dynamic data.
Surface a subtle non-blocking offline banner when navigator.onLine drops and queue mutations cleanly for sync on reconnect.
Avoid hover-dependent interactions so every control feels native to touch.`,
      },
      {
        id: "mob-gesture-sheets",
        title: "Fluid Mobile Bottom Sheet & Haptics UX",
        tag: "Mobile App",
        prompt: `Implement an interactive mobile bottom sheet and swipeable action card pattern with natural spring physics and snap points.
Allow dragging the handle smoothly to expand, collapse, or dismiss, while keeping inner scrollable content free of gesture conflicts.
Trigger subtle haptic feedback only on meaningful state commits (e.g., item completed, deleted with undo toast).
Maintain readable 16px input font sizes on mobile web so iOS Safari never zooms the viewport on focus.
Provide an accessible close button alongside swipe dismissal for assistive technology users.`,
      },
      {
        id: "game-canvas-loop",
        title: "60fps HTML5 Canvas Game Loop & ECS",
        tag: "Game Dev",
        prompt: `Build a responsive 2D browser game using HTML5 Canvas, fixed-timestep physics updates, and requestAnimationFrame delta clamping.
Decouple input handling, physics simulation, collision detection, and canvas rendering into pure modules with zero DOM layout thrashing.
Scale the canvas crisply for High-DPI (devicePixelRatio) displays and support both keyboard (WASD/Arrows) and touch controls.
Implement clean game state transitions: Title Screen, Active Play, Pause (Esc/P), and Game Over with instant restart and localStorage high score.
Pre-allocate particle pools or reuse entity arrays to avoid garbage-collection frame stutters.`,
      },
      {
        id: "game-turn-based-engine",
        title: "Deterministic Turn-Based Strategy Engine",
        tag: "Game Dev",
        prompt: `Create a turn-based puzzle or card game powered by a pure, deterministic state reducer separate from the UI renderer.
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
        prompt: `Here is the failing behavior and the relevant file:
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
        prompt: `Trace this error back to the exact line and state condition in our application code that caused it:
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
          "When SSR HTML differs from initial client render during hydration.",
        prompt: `Identify why this component produces a hydration mismatch between server rendering and client mount:
[PASTE COMPONENT + HYDRATION WARNING]

Inspect for non-deterministic render values (Date.now, Math.random, window/localStorage access, invalid nested HTML tags like <button> inside <button> or <div> inside <p>).
Provide a clean fix using valid HTML nesting and deferred client-only state without causing visual layout flash.`,
      },
      {
        id: "dbg-stale-closure-race",
        title: "Async Race Condition & Stale Closure Fix",
        tag: "Debugging",
        scenario:
          "When fast typing, tab switching, or rapid clicks show outdated API results or stale state values.",
        prompt: `Audit this component or hook for async race conditions, missing AbortController cleanup, and stale React closures:
[PASTE HOOK / EFFECT CODE]

Fix the concurrency bug so out-of-order network responses never overwrite newer requests, and event handlers always read fresh state.
Show the clean cleanup function inside useEffect (or functional state updater) and explain why the previous ordering failed.`,
      },
      {
        id: "dbg-cors-auth-cookies",
        title: "CORS, Cookies & Auth Redirect Debugger",
        tag: "Debugging",
        scenario:
          "When API calls work in Postman or curl but fail in the browser with CORS or missing cookie errors.",
        prompt: `Diagnose why this browser request fails while direct server requests succeed:
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
        prompt: `Find the exact CSS/Tailwind classes causing horizontal overflow, text clipping, or stacking-context overlap in this markup:
[PASTE HTML/JSX SNIPPET]

Identify which element exceeds viewport width (e.g. unclipped pre/code block, missing min-w-0 on flex/grid child, fixed width) or creates an unintended stacking context (transform/backdrop-filter/z-index).
Return the minimal Tailwind class fix keeping desktop and 375px mobile layouts intact.`,
      },
      {
        id: "ref-messy-ai-code",
        title: "Refactor Messy AI-Generated Spaghetti",
        tag: "Refactoring",
        scenario:
          "When rapid prompting leaves behind a 600-line monolithic file with duplicated logic and deep nesting.",
        prompt: `Refactor this module for readability, testability, and clean boundaries without changing any observable behavior:
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
        prompt: `Replace all unsafe \`any\`, \`@ts-ignore\`, and forced type assertions in this code with strict, idiomatic TypeScript:
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
        prompt: `Eliminate excessive prop drilling in this component tree while keeping state updates predictable and easy to trace:
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
        prompt: `Extract the stateful side effects, timers, and data-fetching logic from this component into a cohesive, single-purpose custom hook:
[PASTE COMPONENT]

Ensure the hook returns a clean, typed interface (\`data\`, \`isLoading\`, \`error\`, and action handlers), cleans up all listeners on unmount, and leaves the UI component purely declarative.`,
      },
      {
        id: "ref-dead-code-prune",
        title: "Dead Code, Unused Deps & Duplication Audit",
        tag: "Refactoring",
        scenario:
          "After several feature pivots when unused helpers, stale CSS classes, and redundant imports accumulate.",
        prompt: `Audit this module for dead code, unreachable branches, unused imports, duplicate helper functions, and obsolete state variables:
[PASTE CODE]

List each redundant symbol with why it is safe to remove, then provide the tightened, cleaner version without deleting any subtly referenced side effects or accessibility attributes.`,
      },
      {
        id: "sec-full-owasp-audit",
        title: "OWASP Top-10 Pre-Launch Security Audit",
        tag: "Security Audit",
        scenario:
          "Before deploying a vibe-coded full-stack app to public users.",
        prompt: `Perform a pragmatic security audit on these routes and components looking for real exploitable vulnerabilities:
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
        prompt: `Review every endpoint and database query below for Broken Object-Level Authorization (IDOR) and privilege escalation:
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
        prompt: `Audit this frontend config, Vite/Next env usage, and client components for accidental secret exposure:
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
        prompt: `Inspect how untrusted user or LLM-generated strings are inserted into the DOM in this file:
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
        prompt: `Harden these public API endpoints against spam, brute-force abuse, and forged webhook payloads:
[PASTE PUBLIC ENDPOINT CODE]

Implement constant-time HMAC/signature verification on raw request bodies for webhooks, strict payload size caps, input schema validation, and token-bucket rate limiting keyed by IP or user ID with proper 429 Retry-After responses.`,
      },
      {
        id: "perf-react-rerender",
        title: "React Re-Render & State Bottleneck Profiler",
        tag: "Performance",
        scenario:
          "When typing in a search input or interacting with a table feels laggy or drops frames.",
        prompt: `Analyze why this React tree performs unnecessary re-renders or expensive recalculations on user input:
[PASTE COMPONENT + STATE STRUCTURE]

Fix the root cause by colocalizing fast-changing input state, splitting large context providers, debouncing heavy derived filters, or virtualizing long lists (>200 rows) rather than blindly wrapping everything in useMemo.`,
      },
      {
        id: "perf-n-plus-one-queries",
        title: "N+1 Database Query & Waterfall Eliminator",
        tag: "Performance",
        scenario:
          "When list pages or dashboards take seconds to load due to sequential loops of queries or fetches.",
        prompt: `Inspect this backend handler and frontend data loader for N+1 database queries and sequential network waterfalls:
[PASTE ROUTE HANDLER + DATA FETCHING CODE]

Consolidate looped queries into single SQL JOINs or batched \`WHERE id IN (...)\` lookups, run independent async calls in parallel with \`Promise.all\`, and select only the columns actually rendered by the UI.`,
      },
      {
        id: "perf-core-web-vitals",
        title: "Core Web Vitals (LCP, CLS, INP) Optimizer",
        tag: "Performance",
        scenario:
          "When page load flashes, images shift layout, or Lighthouse performance scores dip.",
        prompt: `Optimize this page for Core Web Vitals (LCP, CLS, and INP):
[PASTE PAGE HTML / COMPONENT]

Fix layout shifts (CLS) by adding explicit aspect-ratio/dimension containers on images, speed up LCP by preloading critical hero assets without render-blocking scripts, and improve INP by animating only compositor properties (transform, opacity) and avoiding heavy synchronous main-thread work.`,
      },
      {
        id: "perf-bundle-size-audit",
        title: "JavaScript Bundle Bloat & Tree-Shaking Check",
        tag: "Performance",
        scenario:
          "When production build warnings flag oversized chunks (>500 kB) or slow mobile startup.",
        prompt: `Review these imports and build setup for oversized dependencies and missed code-splitting opportunities:
[PASTE PACKAGE.JSON + IMPORTS]

Replace heavy monolithic libraries with lightweight alternatives or native browser APIs, convert barrel imports to direct module imports where needed, and lazy-load heavy secondary views (charts, editors, modals) via dynamic \`import()\`.`,
      },
      {
        id: "perf-caching-headers",
        title: "HTTP Cache-Control & Edge Caching Blueprint",
        tag: "Performance",
        scenario:
          "When static assets re-download on every visit or public API responses hit the database redundantly.",
        prompt: `Design an explicit HTTP caching strategy for these static assets and API routes:
[PASTE ROUTES / SERVER CONFIG]

Apply immutable long-lived \`Cache-Control\` headers to fingerprinted build assets, \`stale-while-revalidate\` on cacheable public reads, and strict \`no-store\` on authenticated user-specific responses so fresh data stays accurate without sacrificing speed.`,
      },
      {
        id: "anti-hallucination-verify-apis",
        title: "Stop Fake Packages & Non-Existent APIs",
        tag: "Anti-Hallucination",
        scenario:
          "When an LLM invents npm package names, phantom SDK methods, or outdated v1 syntax.",
        prompt: `Before writing code for this task, verify every external package, import path, and API method against the installed versions in package.json:
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
        prompt: `Answer and modify code strictly based on the actual files provided below—make zero assumptions about unseen files:
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
        prompt: `Complete this implementation fully with zero shortcuts, placeholders, or mock fallbacks:
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
        prompt: `Before editing any file for this feature, write a concise 5-point invariant checklist covering:
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
        tag: "Static & Edge",
        freeLimit:
          "100 GB bandwidth/mo · Unlimited previews · 6,000 build mins",
        desc: "Industry-standard Git-to-edge platform built for Next.js, Vite, Astro, and serverless functions. Generates automatic preview URLs on every pull request with zero configuration.",
        url: "https://vercel.com",
      },
      {
        id: "netlify",
        name: "Netlify",
        tag: "Static & Edge",
        freeLimit:
          "100 GB bandwidth/mo · 300 build mins/mo · 125k serverless reqs",
        desc: "Automated CI/CD hosting with drag-and-drop folder deploys, built-in forms, and edge functions. Supports instant atomic rollbacks and branch deploy previews out of the box.",
        url: "https://www.netlify.com",
      },
      {
        id: "github-pages",
        name: "GitHub Pages",
        tag: "Static & Edge",
        freeLimit:
          "1 GB published site · 100 GB/mo soft bandwidth · 10 builds/hr",
        desc: "Free HTTPS static hosting served straight from any public GitHub branch or Actions workflow. Ideal for single-file tools, static multi-page directories, and technical docs.",
        url: "https://pages.github.com",
      },
      {
        id: "cloudflare-pages",
        name: "Cloudflare Pages",
        tag: "Static & Edge",
        freeLimit:
          "Unlimited static bandwidth · 500 builds/mo · 100k Workers reqs/day",
        desc: "Global edge network hosting static frontends with truly unlimited static bandwidth. Pair with a functions directory to run serverless TypeScript APIs on Cloudflare Workers.",
        url: "https://pages.cloudflare.com",
      },
      {
        id: "render",
        name: "Render",
        tag: "Full-Stack",
        freeLimit: "100 GB static bandwidth · 750 free web service hrs/mo",
        desc: "Unified cloud host for static sites, Node/Python web services, cron jobs, and starter Postgres. Simplifies deploying full-stack Express or FastAPI backends directly from GitHub.",
        url: "https://render.com",
      },
      {
        id: "railway",
        name: "Railway",
        tag: "Full-Stack",
        freeLimit:
          "Free Trial ($5 starter credit) · Instant Git & Docker deploys",
        desc: "Developer-first infrastructure canvas for containers, persistent backends, Redis, and SQL databases. Provisions live environments, logs, and env variables in seconds from Git.",
        url: "https://railway.app",
      },
      {
        id: "fly-io",
        name: "Fly.io",
        tag: "Full-Stack",
        freeLimit: "Pay-as-you-go free allowance · Global Firecracker microVMs",
        desc: "Runs full-stack Docker containers close to users across 30+ edge regions worldwide. Great for stateful Node, Go, or SQLite/Litestream apps needing low-latency compute.",
        url: "https://fly.io",
      },
      {
        id: "coolify",
        name: "Coolify",
        tag: "Full-Stack",
        freeLimit: "100% Free & Open-Source (self-hosted on any VPS)",
        desc: "Self-hostable alternative to Vercel, Heroku, and Netlify that runs on your own Linux server. Automates Git push deploys, SSL, Postgres, and Redis with zero vendor lock-in.",
        url: "https://coolify.io",
      },
      {
        id: "supabase",
        name: "Supabase",
        tag: "Database",
        freeLimit:
          "2 free projects · 500 MB Postgres · 50k MAU auth · 1 GB storage",
        desc: "Open-source Firebase alternative powered by dedicated PostgreSQL, Row Level Security, and Auth. Auto-generates instant REST, GraphQL, and real-time WebSocket APIs.",
        url: "https://supabase.com",
      },
      {
        id: "neon",
        name: "Neon",
        tag: "Database",
        freeLimit:
          "0.5 GB storage · 100 CU-hours/mo · 10 projects & DB branching",
        desc: "Serverless PostgreSQL that scales compute to zero on idle and wakes in milliseconds. Offers Git-style database branching so every PR preview gets an isolated DB copy.",
        url: "https://neon.tech",
      },
      {
        id: "firebase",
        name: "Firebase",
        tag: "Full-Stack",
        freeLimit:
          "Spark Plan: 1 GiB Firestore · 50k reads/day · 10 GB Hosting",
        desc: "Google app backend suite combining Firestore NoSQL, Firebase Auth, Hosting, and Cloud Storage. Ships real-time client SDKs and declarative security rules for web and mobile.",
        url: "https://firebase.google.com",
      },
      {
        id: "pocketbase",
        name: "PocketBase",
        tag: "Full-Stack",
        freeLimit:
          "100% Free & Open-Source Go binary (SQLite + Auth + Storage)",
        desc: "Lightweight open-source backend packaged into a single executable with real-time subscriptions. Includes a built-in admin dashboard, OAuth providers, and REST APIs.",
        url: "https://pocketbase.io",
      },
      {
        id: "appwrite",
        name: "Appwrite",
        tag: "Full-Stack",
        freeLimit:
          "Cloud Free: 75k MAU · 2 GB DB · 2 GB storage · 750k executions",
        desc: "Open-source BaaS offering databases, authentication, file storage, messaging, and serverless functions. Available both as managed Cloud free tier and Docker self-hosted stack.",
        url: "https://appwrite.io",
      },
      {
        id: "turso",
        name: "Turso",
        tag: "Database",
        freeLimit: "5 GB storage · 500M row reads/mo · 10M writes/mo · 100 DBs",
        desc: "Edge-hosted SQLite (libSQL) built for ultra-low-latency reads and per-tenant database isolation. Ideal for multi-tenant SaaS apps giving every workspace its own SQLite DB.",
        url: "https://turso.tech",
      },
      {
        id: "upstash",
        name: "Upstash",
        tag: "Database",
        freeLimit: "256 MB Redis · 500k commands/mo · Serverless HTTP API",
        desc: "Serverless Redis, QStash message queues, and Vector DB accessible over standard HTTPS. Works natively inside Cloudflare Workers, Vercel Edge Functions, and serverless Lambdas.",
        url: "https://upstash.com",
      },
      {
        id: "clerk",
        name: "Clerk",
        tag: "Auth & Email",
        freeLimit:
          "10,000 Monthly Active Users free · Prebuilt UI & Organizations",
        desc: "Drop-in authentication and user management featuring sleek prebuilt sign-in, MFA, and org switchers. Saves days of boilerplate when shipping SaaS MVPs with social OAuth.",
        url: "https://clerk.com",
      },
      {
        id: "resend",
        name: "Resend",
        tag: "Auth & Email",
        freeLimit: "3,000 emails/mo · 100 emails/day · 1 custom domain free",
        desc: "Developer-friendly transactional email API designed to pair cleanly with React Email templates. Delivers fast onboarding, magic-link, and webhook-tracked emails in 3 lines.",
        url: "https://resend.com",
      },
      {
        id: "cloudinary",
        name: "Cloudinary",
        tag: "Storage",
        freeLimit: "25 monthly credits (~25 GB storage/bandwidth + transforms)",
        desc: "Programmable media storage and CDN with on-the-fly URL image resizing, WebP/AVIF, and cropping. Automates responsive thumbnails and video optimization without Sharp pipelines.",
        url: "https://cloudinary.com",
      },
      {
        id: "cloudflare-r2",
        name: "Cloudflare R2",
        tag: "Storage",
        freeLimit:
          "10 GB storage/mo · Zero egress fees · 1M Class A / 10M Class B",
        desc: "S3-compatible object storage with zero egress fees for serving user uploads and static media. Drops directly into AWS S3 SDK presigned-URL pipelines without bandwidth bills.",
        url: "https://www.cloudflare.com/developer-platform/products/r2/",
      },
      {
        id: "uploadthing",
        name: "UploadThing",
        tag: "Storage",
        freeLimit: "2 GB storage · Unlimited uploads · Type-safe TS hooks",
        desc: "Type-safe file upload infrastructure built specifically for full-stack TypeScript developers. Handles presigned URLs, MIME validation, and prebuilt dropzone components.",
        url: "https://uploadthing.com",
      },
    ],
  };

  const ITEM_GUIDES = {
    // ── AI EDITORS (30) ──────────────────────────────────────────
    claude: {
      overview:
        "Claude pairs Anthropic frontier reasoning models with live Artifacts that render React components, SVG diagrams, and interactive HTML apps side-by-side with chat. Its large context window handles multi-file specs, design systems, and edge-case architecture reviews without losing coherence mid-session. Developers rely on Claude to draft clean, idiomatic TypeScript before moving code into a local repository.",
      features: [
        "Interactive Artifacts sandbox renders live React + Tailwind previews instantly in the browser.",
        "Strong instruction adherence for strict architectural rules, accessibility, and zero-placeholder output.",
        "Project knowledge bases let you pin schema files and style guides across every conversation.",
      ],
      proTip:
        "Paste your schema, package.json, and visual rules into a Claude Project first so every Artifact inherits your exact stack and naming conventions.",
    },
    "claude-code": {
      overview:
        "Claude Code operates directly inside your local shell as an autonomous engineering partner with direct access to your files, git status, and test runner. Instead of copy-pasting snippets from a browser tab, it inspects dependencies across folders, edits multiple files atomically, and runs build checks to verify fixes. It excels at tedious migrations, test generation, and root-cause debugging across unfamiliar repos.",
      features: [
        "Executes local bash commands, linters, and test suites with explicit user permission gates.",
        "Maintains repository-level context via CLAUDE.md conventions and git diff awareness.",
        "Resolves merge conflicts, multi-file refactors, and TypeScript compiler errors end-to-end.",
      ],
      proTip:
        "Add a concise CLAUDE.md file at your repo root documenting your build command, folder layout, and forbidden patterns to cut hallucinated edits dramatically.",
    },
    "google-ai-studio": {
      overview:
        "Google AI Studio provides direct browser access to Gemini models with industry-leading context windows up to 1–2 million tokens and built-in app prototyping. You can upload entire repository trees, PDFs, or UI screenshots alongside structured JSON schema outputs and live code generation. Its generous free tier makes it ideal for rapid experimentation, multimodal prompts, and full-repo auditing.",
      features: [
        "Massive context window ingests whole codebases, logs, and API docs in a single prompt.",
        "Built-in live app builder scaffolds and previews full-stack TypeScript web apps directly.",
        "Export ready-to-run @google/genai SDK code with structured outputs and grounding toggles.",
      ],
      proTip:
        "Use AI Studio when you need to audit 30+ files together or test multimodal screenshot-to-code prompts before wiring the Gemini API into production.",
    },
    cursor: {
      overview:
        "Cursor forks VS Code to embed semantic codebase indexing, predictive multi-line Tab edits, and multi-file Composer agents into one cohesive workspace. Every prompt can reference specific files, docs URLs, or git commits using @-mentions for grounded edits. Teams standardize behavior with .cursor/rules files so AI output matches project linting and UI standards.",
      features: [
        "Composer Agent plans and applies coordinated edits across frontend, API, and test files.",
        "Cursor Tab predicts next cursor jumps and multi-line completions based on recent diffs.",
        "Project-scoped .cursor/rules enforce framework conventions automatically on every prompt.",
      ],
      proTip:
        "Keep Composer sessions focused on one feature per thread and attach exact files with @filename instead of letting the agent guess across unrelated folders.",
    },
    windsurf: {
      overview:
        "Windsurf combines a polished VS Code foundation with Codeium Cascade, an agentic engine that tracks your terminal commands, editor state, and recent edits continuously. Because Cascade shares live awareness of what you just typed or ran, prompts require far less manual context pasting. It handles multi-file builds, lint-error auto-repair, and live browser previews smoothly.",
      features: [
        "Cascade maintains continuous timeline awareness of file saves, terminal errors, and edits.",
        "Automatic lint-and-compile self-healing loops catch broken imports before handing control back.",
        "Supports custom global and workspace rules alongside MCP server integrations.",
      ],
      proTip:
        "Let Cascade inspect failing terminal output directly right after a build error—its shared timeline context fixes import and type mismatches in one pass.",
    },
    "bolt-new": {
      overview:
        "Bolt.new runs a full Node.js runtime directly inside Chrome via StackBlitz WebContainers, eliminating local setup friction completely. You prompt a full-stack Vite, Next.js, or Express application and watch it install npm packages, boot the dev server, and render live in seconds. Built-in error capture feeds runtime stack traces straight back to the AI for instant repair.",
      features: [
        "Zero-install WebContainer environment runs real npm scripts and dev servers in-browser.",
        "One-click Netlify deployment and GitHub export for moving prototypes into local git repos.",
        "Targeted file locking prevents the model from overwriting stable files during follow-up edits.",
      ],
      proTip:
        "Lock your working config and database schema files inside Bolt before asking for major UI restyles so core wiring stays untouched.",
    },
    lovable: {
      overview:
        "Lovable bridges natural-language app building with production engineering by pairing a visual React + Tailwind canvas with native Supabase and GitHub sync. Every generated screen maps cleanly to real TypeScript components pushed directly to your repository rather than proprietary lock-in. Its visual selector lets you click any button or card to request surgical styling tweaks.",
      features: [
        "Two-way GitHub synchronization keeps generated React code clean and version-controlled.",
        "First-class Supabase integration scaffolds Postgres tables, RLS policies, and auth flows.",
        "Point-and-click visual element targeting eliminates ambiguous UI edit prompts.",
      ],
      proTip:
        "Connect GitHub on day one and review generated SQL migrations in Supabase carefully before adding sensitive user data.",
    },
    v0: {
      overview:
        "v0 by Vercel specializes in generating crisp, production-ready React, Tailwind CSS, and shadcn/ui interfaces with live interactive sandboxes. Rather than bloated monolithic HTML, it outputs modular component trees following Radix accessibility patterns and clean responsive grids. You can iterate visually, fork public community components, or pull files directly via the shadcn CLI.",
      features: [
        "Tailored specifically for Next.js App Router, Tailwind CSS, Lucide icons, and shadcn/ui.",
        "Instant interactive preview lets you test tabs, drawers, charts, and responsive breakpoints.",
        "One-command CLI installation drops generated components cleanly into existing repos.",
      ],
      proTip:
        "Use v0 specifically to craft complex UI blocks—like data tables, pricing grids, and modals—then wire backend state inside Cursor or Windsurf.",
    },
    "replit-agent": {
      overview:
        "Replit Agent acts as an end-to-end cloud developer inside Replit containers, taking a plain-English idea from package setup to live hosted URL. It automatically provisions PostgreSQL databases, environment secrets, backend servers, and responsive frontends while testing routes inside a headless browser. Non-technical founders and solo builders use it to validate ideas rapidly without local tooling.",
      features: [
        "Automated provisioning of Replit PostgreSQL databases, secrets, and Nix system packages.",
        "Built-in checkpoint rollbacks let you rewind broken iterations with a single click.",
        "Instant cloud deployment with custom domains directly from the same workspace.",
      ],
      proTip:
        "Prompt Replit Agent in small vertical slices—core auth and schema first, then UI views—using checkpoints before any large refactor.",
    },
    cline: {
      overview:
        "Cline is a transparent, open-source autonomous coding agent extension for standard VS Code with zero subscription lock-in. Every file creation, shell command, and headless browser check pauses for your explicit approval before executing. Because you connect your own API keys or local models, you retain complete control over privacy, model selection, and token spend.",
      features: [
        "Human-in-the-loop diff and terminal approval keeps you in full command of every edit.",
        "Plan Mode vs. Act Mode separates architectural planning from file modification cleanly.",
        "Native Model Context Protocol (MCP) support connects databases, docs, and custom tools.",
      ],
      proTip:
        "Always start complex tasks in Cline Plan Mode to verify which files it intends to touch before switching to Act Mode.",
    },
    "roo-code": {
      overview:
        "Roo Code extends open-source agentic VS Code workflows with customizable specialist modes—such as Architect, Code, Ask, and Debug—each bound to its own model and rules. Teams route heavy architectural planning to reasoning models while assigning routine edits or boilerplate to faster, lower-cost endpoints. Granular auto-approval rules streamline repetitive test runs safely.",
      features: [
        "Per-mode model routing lets you pair frontier reasoning with fast local or budget coders.",
        "Custom Boomering/Orchestrator workflows delegate subtasks across specialized agent roles.",
        "Full support for OpenRouter, Anthropic, Gemini, Bedrock, and local Ollama servers.",
      ],
      proTip:
        "Bind Architect mode to a top reasoning model and Code mode to a fast coding model to get higher quality at roughly half the token cost.",
    },
    aider: {
      overview:
        "Aider is a beloved open-source CLI pair programmer engineered around clean Git diffs and repository tree-mapping. Using tree-sitter AST maps, it locates relevant symbols across large repos without blowing context budgets and automatically creates descriptive Git commits for every accepted change. Its keyboard-first terminal workflow stays fast even over SSH.",
      features: [
        "Repo-map AST indexing gives models structural awareness of large codebases concisely.",
        "Automatic atomic Git commits make inspecting or reverting AI edits effortless via git diff.",
        "Supports /architect mode, voice-to-code input, and built-in lint/test auto-fixing.",
      ],
      proTip:
        "Keep your Git working tree clean before launching Aider so you can run /undo or git reset cleanly whenever an experiment misses the mark.",
    },
    "github-copilot": {
      overview:
        "GitHub Copilot embeds multi-model AI assistance natively across VS Code, JetBrains IDEs, Xcode, and GitHub pull requests. Beyond fast ghost-text autocomplete, its Agent Mode edits multiple files, runs terminal diagnostics, and assigns background coding tasks straight from GitHub Issues. Enterprise governance, IP indemnity, and organization policy controls make it easy for regulated teams to adopt.",
      features: [
        "Model picker lets developers switch between Claude, GPT, and Gemini inside one subscription.",
        "Workspace Agent Mode iterates across edits and terminal errors automatically.",
        "Deep GitHub integration summarizes PRs, explains security alerts, and drafts commit messages.",
      ],
      proTip:
        "Create .github/copilot-instructions.md in your repo to standardize coding style and preferred libraries across every teammate.",
    },
    "firebase-studio": {
      overview:
        "Firebase Studio unifies cloud-hosted VS Code workspaces, Gemini coding agents, and local Firebase emulators inside a zero-setup browser IDE. It scaffolds Next.js, Flutter, or Express templates pre-wired with Firestore security rules, Firebase Auth, and App Hosting pipelines. Developers move seamlessly from natural-language prototyping to full emulator testing and Cloud Run deployment.",
      features: [
        "Pre-configured Nix cloud workspaces with live web, Android, and iOS preview emulators.",
        "Integrated Gemini App Prototyping agent generates full UI + backend templates rapidly.",
        "Direct deployment integration with Firebase App Hosting and Cloud Firestore rules.",
      ],
      proTip:
        "Use the built-in Firebase Emulator Suite inside Firebase Studio to verify Firestore security rules thoroughly before deploying to production.",
    },
    "tempo-labs": {
      overview:
        "Tempo Labs bridges design tools and frontend code by letting product designers and engineers edit live React + Tailwind JSX on a Figma-like visual canvas. Instead of exporting brittle throwaway code, visual spacing, typography, and layout tweaks write directly back to clean repository files. Teams also generate PRD flows and Storybook-like component galleries side-by-side.",
      features: [
        "Direct visual property inspector edits Tailwind utility classes straight in TSX source files.",
        "Component canvas visualizes multiple states and breakpoints simultaneously without manual clicks.",
        "Clean GitHub PR workflow keeps visual polish synced with engineering branches.",
      ],
      proTip:
        "Generate your functional React hooks first, then open Tempo Labs to dial in spacing, typography rhythm, and responsive layouts visually.",
    },
    softgen: {
      overview:
        "Softgen is a specialized AI SaaS builder tuned around the Next.js, Tailwind CSS, Firebase, and Stripe production stack. Rather than inventing random dependencies per prompt, it follows an opinionated template covering user authentication, transactional emails, and subscription billing. Founders can validate paid B2B or B2C concepts quickly and export clean source code.",
      features: [
        "Opinionated Next.js + Firebase + Stripe architecture reduces integration mismatches.",
        "Step-by-step project planner turns plain product specs into structured feature roadmaps.",
        "Built-in error detection tests generated routes and UI views before previewing.",
      ],
      proTip:
        "Provide exact Stripe plan names, Firebase collections, and user roles in your initial prompt so Softgen wires permissions cleanly on pass one.",
    },
    devin: {
      overview:
        "Devin operates as an asynchronous cloud software engineer provisioned with its own persistent Linux shell, code editor, and web browser. Teams tag Devin in Slack, Linear, or GitHub Issues to tackle dependency upgrades, flaky tests, or well-scoped bug tickets in the background. It posts progress logs, screenshots, and ready-to-review pull requests.",
      features: [
        "Persistent cloud VM environment reproduces bugs, runs full CI pipelines, and verifies fixes.",
        "Interactive session playback lets engineers jump in and steer the terminal mid-task.",
        "Integrates straight into Slack, GitHub PR comments, and Linear issue workflows.",
      ],
      proTip:
        "Treat Devin like a junior contractor: assign well-scoped tickets with clear reproduction steps and acceptance tests rather than vague open-ended redesigns.",
    },
    openhands: {
      overview:
        "OpenHands (formerly OpenDevin) is a leading open-source framework for running autonomous software engineering agents inside isolated Docker sandboxes. Agents read files, execute bash scripts, browse documentation, and submit Git patches without risking your host machine. Engineering teams self-host it for automated triage, research benchmarks, and private-cloud coding automation.",
      features: [
        "Isolated Docker sandbox execution protects local filesystems from destructive commands.",
        "Extensible Python agent architecture supports custom tools, evaluators, and LLM providers.",
        "Includes both a polished browser workspace UI and headless CLI batch execution.",
      ],
      proTip:
        "Run OpenHands inside an isolated container with read-only secrets when experimenting with autonomous multi-step refactors on large repos.",
    },
    marblism: {
      overview:
        "Marblism turns product descriptions into structured full-stack React + Node/PostgreSQL SaaS repositories rather than toy single-page demos. Before generating code, it produces editable entity schemas, user flows, and API contracts you can inspect and refine. The resulting codebase uses familiar industry patterns that engineers can maintain long after initial launch.",
      features: [
        "Generates separated frontend React apps and typed Node/Postgres backend APIs.",
        "Visual architecture step maps database models and page routes prior to code generation.",
        "Full source-code ownership with clean Git export and zero runtime vendor dependency.",
      ],
      proTip:
        "Spend 5 minutes refining Marblism’s generated entity schema before triggering code generation—fixing data models early saves hours of UI rewrites.",
    },
    pythagora: {
      overview:
        "Pythagora brings a disciplined, spec-first engineering loop inside VS Code by separating Specification, Architecture, Task Breakdown, Coding, and Debugging agents. Rather than dumping 20 unverified files at once, it implements one small task at a time and asks you to verify live behavior before moving on. This milestone approach prevents runaway cascading bugs in larger apps.",
      features: [
        "Interactive step-by-step build loop tests each API route and screen incrementally.",
        "Dedicated Troubleshooter agent isolates logs and stack traces during debug checkpoints.",
        "Saves full project specification context so later feature additions stay consistent.",
      ],
      proTip:
        "Never skip Pythagora’s manual verification checkpoints—confirming each route works right away keeps complex full-stack builds rock-solid.",
    },
    "zed-ai": {
      overview:
        "Zed is a GPU-accelerated code editor crafted in Rust for near-zero input latency, combining crisp native performance with a deeply integrated Agent Panel. Its inline edit predictions, context-tagged prompt threads, and fast multi-buffer diffs keep experienced engineers in flow without Electron sluggishness. Supports Anthropic, OpenAI, Gemini, and local Ollama models seamlessly.",
      features: [
        "Rust + Metal/Vulkan GPU rendering handles massive files and split panes effortlessly.",
        "Agent Panel supports @file, @symbol, @diagnostics, and slash commands cleanly.",
        "Built-in collaborative channels let teammates pair inside shared editor buffers live.",
      ],
      proTip:
        "Use @diagnostics inside Zed’s Agent Panel right after TypeScript errors appear to feed exact compiler line numbers without manual copying.",
    },
    trae: {
      overview:
        "Trae is a sleek adaptive AI IDE built on VS Code that pairs multimodal UI understanding with an autonomous Builder mode at zero cost. You can drop design screenshots or error captures straight into chat and let Trae inspect project files, run terminal checks, and preview live changes. Its clean dark UI feels immediately intuitive for fast prototyping.",
      features: [
        "Builder Mode decomposes app ideas into ordered tasks with live terminal execution.",
        "Multimodal image input converts Figma exports or whiteboard sketches into React + CSS.",
        "Native access to top coding models without requiring immediate paid API keys.",
      ],
      proTip:
        "Attach a crisp layout screenshot alongside a 3-bullet behavior spec in Builder Mode to get remarkably accurate first-pass UI structure.",
    },
    "void-editor": {
      overview:
        "Void is a community-driven, open-source Cursor alternative forked from VS Code with strict privacy and zero telemetry guarantees. All prompts travel directly from your machine to your chosen model provider—whether local Ollama weights, Anthropic, OpenAI, or Gemini—without passing through third-party proxy servers. You get inline diffs, codebase chat, and checkpointing cleanly.",
      features: [
        "100% open-source codebase with direct local-to-provider API communication.",
        "Fast inline Ctrl+K edits, multi-file composer diff views, and instant checkpoint restore.",
        "Works seamlessly with existing VS Code themes, keybindings, and marketplace extensions.",
      ],
      proTip:
        "Pair Void with local Qwen-Coder or Llama models via Ollama when working on confidential client repositories under strict NDA.",
    },
    "continue-dev": {
      overview:
        "Continue is an open-source AI code assistant plugin for VS Code and JetBrains built around shareable, declarative YAML configurations. Engineering teams check standardized prompt rules, MCP tools, and custom RAG context providers straight into Git so every developer gets identical AI workflows. Supports tab autocomplete, inline edits, and chat across cloud or self-hosted models.",
      features: [
        "Version-controlled config.yaml shares custom prompts, models, and docs indexes team-wide.",
        "@docs and @codebase context providers ground answers in internal company documentation.",
        "Model-agnostic architecture pairs different LLMs for autocomplete vs. deep chat.",
      ],
      proTip:
        "Index your framework’s official docs URL with Continue’s @docs provider so the model stops hallucinating deprecated API syntax.",
    },
    "augment-code": {
      overview:
        "Augment Code is engineered specifically for production codebases spanning hundreds of thousands of lines where typical AI assistants lose track of callers and shared types. Its real-time semantic indexing engine retrieves exact symbol definitions across monorepos in milliseconds. Developers get accurate multi-file refactors and PR-ready edits grounded in true architectural dependencies.",
      features: [
        "Deep monorepo indexing surfaces cross-service types and callers with minimal latency.",
        "Next Edit guidance highlights cascading updates needed across files after changing an interface.",
        "SOC 2 Type II compliant architecture built for large engineering organizations.",
      ],
      proTip:
        "When modifying a shared API contract or TypeScript interface, use Augment’s Next Edit suggestions to update every downstream consumer cleanly.",
    },
    coderabbit: {
      overview:
        "CodeRabbit connects directly to GitHub and GitLab repositories to review every incoming pull request automatically like a seasoned staff engineer. Within minutes of opening a PR, it posts a concise architectural walkthrough, sequence diagrams, and line-by-line bug or security comments with 1-click commit suggestions. It learns from team feedback via repository-level review rules.",
      features: [
        "Line-by-line PR review catches subtle race conditions, N+1 queries, and missing null checks.",
        "One-click committable suggestions let authors apply verified fixes straight from GitHub.",
        "Interactive PR chat answers follow-up questions and generates unit tests on demand.",
      ],
      proTip:
        "Whenever you vibe-code a large feature branch rapidly, open a draft PR first and let CodeRabbit audit every diff before merging to main.",
    },
    sourcery: {
      overview:
        "Sourcery blends deterministic static analysis with LLM code intelligence to spot complexity spikes, duplicate branches, and subtle security anti-patterns as you code. Available both inside your IDE and as an automated GitHub PR reviewer, it proposes clean, readable refactorings instantly. Python and TypeScript teams rely on it to stop vibe-coded prototypes from degrading into spaghetti.",
      features: [
        "Instant IDE and PR refactoring suggestions simplify nested loops and conditionals cleanly.",
        "Automated security checks flag hardcoded secrets, unsafe evals, and injection risks.",
        "Code quality metrics track complexity trends across pull requests over time.",
      ],
      proTip:
        "Run Sourcery right after an intense AI coding sprint to flatten deeply nested helper functions before teammates review your code.",
    },
    greptile: {
      overview:
        "Greptile builds a live dependency graph of your entire repository—and even adjacent microservice repos—so its PR reviewer traces how one change impacts distant callers. Instead of superficial style nitpicks, it catches broken contract assumptions, missing auth checks, and subtle cross-file regressions. Teams can also query the indexed repo graph via REST API to build internal bots.",
      features: [
        "Full-repository graph indexing traces multi-hop function callers and shared schemas.",
        "High-signal PR comments focus on breaking behavioral regressions rather than lint noise.",
        "Developer API enables custom codebase Q&A, release-note bots, and security triage.",
      ],
      proTip:
        "Connect both your backend API repo and frontend client repo to Greptile so PR reviews flag mismatched payload types across repositories.",
    },
    "openai-codex-cli": {
      overview:
        "OpenAI Codex CLI is an open-source terminal agent built to run safely inside OS-level network and filesystem sandboxes (macOS Seatbelt / Linux container isolation). You point it at a local repository to inspect files, apply clean patches, and run test verification loops with configurable Suggest, Auto-Edit, or Full-Auto approval policies. Ideal for fast scriptable terminal workflows.",
      features: [
        "OS-native sandboxing blocks unauthorized network calls or edits outside the workspace.",
        "Supports multimodal screenshot input straight from the terminal for debugging UI glitches.",
        "Three explicit autonomy modes scale smoothly from manual review to hands-free test loops.",
      ],
      proTip:
        'Use Auto-Edit mode paired with an explicit test command ("fix until npm test passes") so Codex CLI verifies its own patches automatically.',
    },
    "magic-patterns": {
      overview:
        "Magic Patterns is a visual ideation canvas built for product teams and frontend engineers exploring multiple UI directions simultaneously. Entering one prompt generates parallel React + Tailwind variations side-by-side so you can compare layouts, mix components, and iterate interactively. Clean component exports integrate smoothly into existing design systems and codebases.",
      features: [
        "Infinite canvas lets you branch, compare, and remix multiple UI concepts in parallel.",
        "Supports custom component library presets so generated mockups match your brand tokens.",
        "Exports clean React + Tailwind code and shareable interactive prototype links.",
      ],
      proTip:
        "Generate 3–4 layout directions in Magic Patterns first before writing any logic—picking the strongest hierarchy upfront avoids costly rewrites.",
    },

    // ── FREE HOSTING & CLOUD (20) ────────────────────────────────
    vercel: {
      overview:
        "Vercel provides zero-configuration Git deployments paired with a global edge network, automatic HTTPS, and isolated preview URLs on every pull request. Built by the creators of Next.js, it also excels with Vite, React, Astro, and SvelteKit apps plus serverless Node/Edge functions. Its Hobby free tier covers personal projects, portfolios, and early MVPs cleanly.",
      features: [
        "Instant PR preview deployments give every branch a shareable staging URL automatically.",
        "Global Edge CDN with zero-config framework detection for Vite, Next.js, and Astro.",
        "Built-in Analytics, Speed Insights, and environment variable management per branch.",
      ],
      proTip:
        "Set distinct Preview and Production environment variables in Vercel so branch previews never touch your live production database or Stripe keys.",
    },
    netlify: {
      overview:
        "Netlify pioneered modern Git-based static and Jamstack hosting, pairing instant atomic deploys with drag-and-drop folder uploads for rapid static launches. Every deploy snapshot remains immutable so rolling back a broken release takes one click. Built-in serverless functions, form capture, and edge middleware handle dynamic needs without provisioning extra servers.",
      features: [
        "Instant atomic rollbacks restore any previous deploy snapshot in under a second.",
        "Built-in Netlify Forms capture contact/waitlist submissions with zero backend code.",
        "Drag-and-drop Netlify Drop deploys static HTML/CSS/JS folders in seconds.",
      ],
      proTip:
        "Use Netlify Drop during hackathons to publish a static dist/ folder in 5 seconds, then link GitHub once you want automatic CI builds.",
    },
    "github-pages": {
      overview:
        "GitHub Pages serves static HTML, CSS, JavaScript, and compiled Vite/React bundles directly from your repository over HTTPS with zero account setup. Paired with GitHub Actions, any push to main builds and publishes your site automatically to a free github.io subdomain or custom domain. Ideal for open-source directories, documentation, and client-side tools.",
      features: [
        "Free automated TLS/SSL certificates for both github.io and customapex domains.",
        "Native GitHub Actions workflow builds Vite, Astro, or Jekyll bundles on every push.",
        "Zero cold starts and 100% reliability backed by Fastly edge caching.",
      ],
      proTip:
        'Set `base: "./"` in Vite or configure a 404.html fallback if deploying a client-side router app onto a GitHub Pages repository subpath.',
    },
    "cloudflare-pages": {
      overview:
        "Cloudflare Pages delivers static websites and full-stack Pages Functions across 300+ global edge locations with truly unlimited static bandwidth on the free tier. Because there are no surprise bandwidth overage fees, viral launches stay free even under heavy traffic spikes. Adding a `/functions` folder turns static sites into edge TypeScript APIs seamlessly.",
      features: [
        "Unlimited static bandwidth on the free tier eliminates traffic-spike billing anxiety.",
        "Native Workers & Pages Functions execute low-latency TypeScript APIs at the edge.",
        "Direct bindings to Cloudflare D1 (SQLite), KV, and R2 object storage.",
      ],
      proTip:
        "Host viral landing pages and static directories on Cloudflare Pages whenever unpredictable traffic could exhaust 100 GB bandwidth caps elsewhere.",
    },
    render: {
      overview:
        "Render is a clean, developer-friendly cloud host built to run persistent Node.js, Express, Python, Go, and Docker web services alongside static sites. Connecting a GitHub repo deploys full-stack APIs, background workers, and cron jobs with automatic TLS and live log streaming. Its free web service tier lets hobby full-stack apps run with zero credit card.",
      features: [
        "Deploys full-stack Node/Express/Python servers directly from GitHub with zero Docker boilerplate.",
        "Free static site CDN plus free 750 compute hours/month for backend web services.",
        "Clean dashboard for environment groups, PR previews, and private internal networking.",
      ],
      proTip:
        "Remember that Render free web services spin down after 15 minutes of inactivity—keep static frontends on Render Static or Cloudflare for instant loads.",
    },
    railway: {
      overview:
        "Railway gives developers an intuitive visual architecture canvas where web apps, background workers, Postgres, and Redis live together in one project. Pushing code or pasting a Docker template provisions services, internal private URLs, and real-time metrics in seconds. Its $5 trial credit and usage-based model offer a smooth upgrade path from prototype to production.",
      features: [
        "One-click provisioning for PostgreSQL, MySQL, Redis, and template microservices.",
        "Visual service graph links environment variables and private network URLs effortlessly.",
        "Zero-config Nixpacks builder detects Node, Python, Go, and Rust automatically.",
      ],
      proTip:
        "Connect services over Railway’s internal `.railway.internal` private DNS to skip public egress charges and cut database latency.",
    },
    "fly-io": {
      overview:
        "Fly.io runs lightweight Firecracker microVMs holding your full-stack Docker containers close to end users across 30+ global cities. Unlike ephemeral serverless lambdas, Fly Machines support persistent volumes, WebSockets, and SQLite databases backed by Litestream replication. Ideal when full-stack vibe-coded apps need stateful Node servers or real-time sockets.",
      features: [
        "Global Firecracker microVMs boot in milliseconds with scale-to-zero auto-stop/start.",
        "Persistent NVMe volumes support embedded SQLite, PocketBase, and stateful caches.",
        "flyctl CLI deploys any Dockerfile or framework globally in a single command.",
      ],
      proTip:
        "Configure `auto_stop_machines` and `min_machines_running = 0` in fly.toml so idle side-project microVMs consume practically zero credits.",
    },
    coolify: {
      overview:
        "Coolify is an open-source, self-hostable Platform-as-a-Service that turns any $5 Linux VPS into your own private Vercel, Heroku, and Supabase alternative. Through a polished web dashboard, you connect GitHub repos to deploy Next.js, Node, Docker Compose stacks, Postgres, and Redis with automatic Let’s Encrypt SSL. Zero per-seat pricing or platform markups.",
      features: [
        "100% open-source control panel automates Git push deploys, PR previews, and SSL.",
        "One-click installers for Postgres, Redis, MinIO, PocketBase, and Plausible analytics.",
        "Run unlimited apps and team seats for the flat cost of a single commodity VPS.",
      ],
      proTip:
        "Spin up Coolify on a single affordable VPS once your side projects outgrow free hobby tiers—you keep Vercel DX without per-seat or bandwidth surcharges.",
    },
    supabase: {
      overview:
        "Supabase is an open-source backend platform anchored by a real, dedicated PostgreSQL database with built-in Auth, Storage, Edge Functions, and real-time subscriptions. Instead of proprietary NoSQL lock-in, you write standard SQL, foreign keys, and Row Level Security policies enforced right inside Postgres. Its free tier supports two live projects with 50k monthly active users.",
      features: [
        "Full PostgreSQL database with pgvector embeddings, triggers, and visual Table Editor.",
        "Built-in authentication supporting Email, Magic Links, Google, GitHub, and phone OTP.",
        "Auto-generated typed REST/Realtime client SDKs secured via Row Level Security (RLS).",
      ],
      proTip:
        "Enable Row Level Security (RLS) on every new Supabase table immediately—otherwise anyone holding your public anon key can query rows directly.",
    },
    neon: {
      overview:
        "Neon delivers serverless PostgreSQL engineered with separated storage and compute so databases scale down to zero automatically when idle and wake in milliseconds. Its signature Git-like branching feature lets you clone a production schema and test data instantaneously for every pull request or AI experiment. Works seamlessly with Drizzle, Prisma, and standard pg drivers.",
      features: [
        "Instant copy-on-write database branching gives every PR or dev setup an isolated DB.",
        "Scale-to-zero serverless compute saves free-tier quota during quiet hours automatically.",
        "HTTP/WebSocket serverless driver works natively inside Vercel Edge and Cloudflare Workers.",
      ],
      proTip:
        "Create a dedicated Neon branch before running risky AI-generated schema migrations—if anything breaks, simply delete the branch in one click.",
    },
    firebase: {
      overview:
        "Firebase gives web and mobile builders a cohesive Google-backed backend featuring Cloud Firestore, Firebase Auth, Hosting, and Cloud Storage. Real-time client listeners synchronize state changes across devices automatically with offline persistence built in. Its generous Spark free tier includes 50k daily Firestore reads, 10 GB hosting, and free authentication providers.",
      features: [
        "Real-time Firestore listeners push live document updates to clients with offline caching.",
        "Declarative Security Rules validate user identity and payload schemas right at the edge.",
        "Firebase Auth handles Google Sign-In, email links, and multi-factor auth cleanly.",
      ],
      proTip:
        "Always pair Firebase Auth with strict `firestore.rules` validating `request.auth.uid` and field types—never deploy production apps in open test mode.",
    },
    pocketbase: {
      overview:
        "PocketBase packages an embedded SQLite database (in WAL mode), real-time subscriptions, authentication, file storage, and a sleek Admin UI inside a single Go executable. You can run it locally with zero Docker containers or deploy it onto a $4 VPS or Fly.io volume for pennies. Extensible via Go or built-in JavaScript hooks when custom endpoints are needed.",
      features: [
        "Single-file binary ships complete BaaS functionality with zero external database servers.",
        "Built-in Admin Dashboard manages collections, OAuth providers, logs, and S3 backups.",
        "Real-time Server-Sent Events (SSE) push collection updates straight to JS/React clients.",
      ],
      proTip:
        "Enable automated S3/Cloudflare R2 backups inside PocketBase Admin settings so your single-file SQLite database is safely backed up off-server.",
    },
    appwrite: {
      overview:
        "Appwrite is a full-featured open-source Backend-as-a-Service providing databases, authentication, file storage, messaging, and isolated serverless functions. Available via a generous Cloud free tier (75k MAU and 2 GB storage) or self-hosted via Docker Compose, it offers consistent SDKs for React, Next.js, Flutter, and Swift. Ideal for teams wanting an all-in-one open BaaS.",
      features: [
        "Unified console covers Databases, Auth, Storage, Messaging, and Serverless Functions.",
        "Generous Appwrite Cloud free tier includes 75,000 Monthly Active Users and 750k executions.",
        "Granular document- and collection-level permissions protect multi-tenant user records.",
      ],
      proTip:
        "Use Appwrite Sites and Functions together when you want static frontend hosting and backend triggers managed inside one open-source dashboard.",
    },
    turso: {
      overview:
        "Turso runs edge-replicated libSQL (the open-source fork of SQLite) designed for sub-10ms reads and multi-tenant database-per-user architectures. Its free plan gives you 5 GB storage, 500 million row reads, and up to 100 separate databases—making it uniquely suited for SaaS apps isolating each workspace into its own database. Integrates cleanly with Drizzle ORM.",
      features: [
        "Database-per-tenant architecture isolates customer workspaces with near-zero overhead.",
        "Edge replicas and embedded client sync cut read latency dramatically worldwide.",
        "Generous 500M monthly row reads and 5 GB storage completely free without a credit card.",
      ],
      proTip:
        "Pair Turso with Drizzle ORM (`drizzle-orm/libsql`) for full TypeScript type safety and rapid edge deployments without connection-pool limits.",
    },
    upstash: {
      overview:
        "Upstash delivers serverless Redis, QStash message queues, and Vector search accessible via stateless HTTPS REST endpoints rather than persistent TCP sockets. Because it uses standard HTTP fetch under the hood, it runs reliably inside Vercel Edge Functions, Cloudflare Workers, and AWS Lambda without connection exhaustion. Its free tier includes 500k Redis commands monthly.",
      features: [
        "HTTP-based Redis SDK works effortlessly inside serverless and edge runtimes.",
        "Upstash Ratelimit library adds sliding-window API abuse protection in 5 lines of code.",
        "QStash schedules reliable background webhooks and retries without running worker queues.",
      ],
      proTip:
        "Drop `@upstash/ratelimit` onto your `/api/ai/*` proxy endpoints on day one to protect your LLM API credits from scripted spam.",
    },
    clerk: {
      overview:
        "Clerk eliminates weeks of fragile authentication boilerplate by shipping polished prebuilt `<SignIn />`, `<UserButton />`, and `<OrganizationSwitcher />` components alongside secure session middleware. It handles OAuth, passkeys, MFA, and multi-tenant B2B team roles out of the box. Its free tier covers up to 10,000 Monthly Active Users with zero upfront cost.",
      features: [
        "Drop-in React & Next.js components deliver accessible auth flows, MFA, and profile modals.",
        "Built-in Organizations & RBAC simplify multi-tenant B2B workspace permissions.",
        "Verified JWT session middleware works cleanly across Next.js, Express, and Edge routes.",
      ],
      proTip:
        "Read `userId` and `orgId` strictly from Clerk’s verified server-side auth helper on API routes—never trust client-supplied user IDs in request bodies.",
    },
    resend: {
      overview:
        "Resend modernizes transactional email for developers with clean REST/SDK ergonomics, instant deliverability diagnostics, and native integration with React Email. Instead of debugging brittle 1990s HTML tables, you author responsive onboarding, receipt, and magic-link templates as typed React components. Its free tier allows 3,000 emails per month (100/day) with 1 custom domain.",
      features: [
        "Send transactional emails in 3 lines of TypeScript with clear delivery & bounce webhooks.",
        "Pairs seamlessly with React Email so templates share components and design consistency.",
        "Clean domain DNS verification wizard for SPF, DKIM, and DMARC deliverability.",
      ],
      proTip:
        "Verify your own custom domain DNS records immediately—Resend’s sandbox sender only delivers to your own account email during testing.",
    },
    cloudinary: {
      overview:
        "Cloudinary manages media uploads, transformation pipelines, and global CDN delivery through dynamic URL parameters. Simply appending `f_auto,q_auto,w_800` to an asset URL serves crisp WebP or AVIF thumbnails sized automatically for every device without writing server-side Sharp workers. Its free plan includes 25 monthly credits covering storage, bandwidth, and transformations.",
      features: [
        "On-the-fly URL transformations handle resizing, cropping, format conversion, and blur placeholders.",
        "Built-in upload widget supports direct browser-to-cloud uploads without touching your server.",
        "Global multi-CDN caching accelerates hero imagery and user avatars worldwide.",
      ],
      proTip:
        "Always include `f_auto,q_auto` in Cloudinary image URLs to cut image payload sizes by 50–70% automatically across Chrome and Safari.",
    },
    "cloudflare-r2": {
      overview:
        "Cloudflare R2 offers S3-compatible cloud object storage with zero egress bandwidth fees—making it dramatically cheaper than traditional cloud buckets for media-heavy apps. You get 10 GB of storage plus 1 million writes and 10 million reads free every month. Works seamlessly with existing AWS S3 SDK presigned-URL upload flows.",
      features: [
        "Zero egress fees eliminate surprise bandwidth bills when users download images or videos.",
        "100% S3 API compatibility works with `@aws-sdk/client-s3` presigned URLs cleanly.",
        "Public custom-domain buckets integrate straight with Cloudflare global caching.",
      ],
      proTip:
        "Use short-lived S3 presigned PUT URLs from your backend so users upload large files directly to R2 without streaming megabytes through your Node server.",
    },
    uploadthing: {
      overview:
        "UploadThing provides end-to-end type-safe file upload pipelines built specifically for Next.js, React, Remix, and Express TypeScript stacks. You declare file routes on the server specifying max file sizes, MIME types, and auth middleware, and get strongly typed React dropzone hooks on the client. Its free tier includes 2 GB storage with unlimited uploads.",
      features: [
        "Type-safe `FileRouter` enforces MIME allowlists, size limits, and user auth before upload.",
        "Prebuilt `<UploadDropzone />` and `<UploadButton />` components handle progress states cleanly.",
        "Built-in webhook callback updates your database only after storage confirmation succeeds.",
      ],
      proTip:
        "Perform strict session checks inside UploadThing's .middleware() hook so unauthenticated callers can never request presigned upload URLs.",
    },
    "fs-schema-first": {
      summary:
        "Forces AI models to define your database tables and shared TypeScript types before generating any React views. Eliminates mismatched payload bugs, exposed secrets, and silent mock fallbacks across full-stack apps.",
      overview:
        "When vibe-coding full-stack apps, LLMs often invent frontend components before settling on real database fields, resulting in fragile JSON mismatches and broken form submissions. This schema-first prompt reverses the order so every API endpoint and UI form derives strictly from one shared source of truth. It also guarantees explicit loading skeletons, empty states, and recoverable error banners instead of silent failures.",
      features: [
        "Enforces shared TypeScript contracts between database queries, REST endpoints, and UI state.",
        "Guarantees server-only environment variable isolation with zero leaked API keys in browser bundles.",
        "Bans stub handlers, placeholder comments, and fake fallback arrays on failed requests.",
      ],
      proTip:
        "Run this prompt in a fresh planning thread first and approve the generated SQL/TypeScript types before letting your editor scaffold UI pages.",
    },
    "fs-nextjs-app-router": {
      summary:
        "Establishes clean Server Component vs. Client Component boundaries for Next.js App Router applications. Pairs Zod validation with optimistic UI rollbacks so forms and mutations stay resilient under failures.",
      overview:
        "Next.js App Router bugs frequently stem from accidentally importing server-only modules into client bundles or causing hydration errors inside interactive layouts. This blueprint locks down clear serialization boundaries so sensitive queries and authorization checks stay strictly inside Server Components and Server Actions. Every user input passes shared Zod validation returning structured, accessible field errors.",
      features: [
        "Prevents leaked server imports and accidental client-side database exposure.",
        "Pairs optimistic UI responsiveness with automatic rollback if server mutations reject.",
        "Eliminates hydration mismatches caused by non-deterministic client browser reads.",
      ],
      proTip:
        "Paste your existing app/layout.tsx and tsconfig.json alongside this prompt so generated Server Actions follow your project's exact path aliases.",
    },
    "fs-express-react-spa": {
      summary:
        "Structures a clean Express API server and React + Vite SPA running cohesively on port 3000. Separates routes, controllers, and services while equipping the frontend with typed AbortController fetches.",
      overview:
        "Rapidly prompted Express backends easily degrade into tangled 800-line server.ts files where database calls, error formatting, and CORS config collide. This prompt institutes clean layered separation—routes, controllers, and pure services—backed by centralized error middleware. On the client, every request uses a typed fetch wrapper that guards JSON parsing and surfaces real retry controls.",
      features: [
        "Clean route -> controller -> service layering keeps Express endpoints easy to test and extend.",
        "AbortController fetch wrapper prevents hung requests and stale filter overwrites.",
        "Includes /api/health readiness probes and unified typed error envelopes.",
      ],
      proTip:
        "Keep Express middleware inside server.ts rather than vite.config.ts so both dev previews and production node server.ts runs match identically.",
    },
    "fs-realtime-collab": {
      summary:
        "Architects deterministic WebSocket multiplayer sync driven by an authoritative backend state store. Includes typed event schemas, exponential backoff reconnects, and leak-free listener teardown.",
      overview:
        "Real-time apps fail subtly when clients trust local optimistic state blindly or leave stale WebSocket listeners accumulating across route transitions. This blueprint makes the server authoritative over every room mutation, validating incoming events before emitting ordered state diffs. Reconnection backoff and sequence numbers keep collaborative canvases consistent even over flaky mobile networks.",
      features: [
        "Authoritative server validation prevents malformed or out-of-order client state drift.",
        "Exponential-backoff reconnect logic recovers cleanly from transient socket drops.",
        "Deterministic teardown hooks eliminate duplicated event handlers in React Strict Mode.",
      ],
      proTip:
        "Always test WebSocket components under React Strict Mode in dev—if you see duplicate chat or cursor events, inspect your effect cleanup immediately.",
    },
    "fs-file-upload-pipeline": {
      summary:
        "Implements direct-to-object-storage uploads using short-lived presigned URLs instead of choking Node servers. Enforces MIME allowlists, byte caps, and keyboard-accessible drag-and-drop progress UX.",
      overview:
        "Streaming binary uploads through an application backend quickly hits serverless payload caps and wastes memory. This system prompt builds the production presigned-URL pattern: your backend authenticates the user and checks MIME/size bounds, the browser uploads straight to S3/R2, and metadata saves only upon completion. Tabular progress readouts keep users informed throughout.",
      features: [
        "Bypasses server payload limits with short-lived presigned PUT/POST upload signatures.",
        "Sanitizes filenames and enforces strict MIME + byte limits prior to issuing credentials.",
        "Supports full keyboard file selection, drag-and-drop, and in-flight upload cancellation.",
      ],
      proTip:
        "Configure matching CORS origins (PUT, Content-Type) on your R2 or S3 bucket before testing presigned browser uploads.",
    },
    "ui-anti-slop-system": {
      summary:
        "Guides frontend generation away from generic AI templates toward crisp, editorial product craft. Enforces strict 60-30-10 color balance, WCAG AA contrast, tabular numbers, and 40px+ interactive targets.",
      overview:
        "Default LLM UI output often suffers from cluttered pill sandwiches, decorative pulsing dots, unreadable contrast, and inconsistent spacing. This system prompt gives your coding agent concrete, testable aesthetic constraints modeled after high-craft developer software. Every metric aligns with tabular-nums, controls stay single-line, and focus states remain unmistakably clear.",
      features: [
        "Maintains disciplined 60-30-10 surface-to-accent contrast without visual clutter.",
        "Enforces WCAG AA legibility, keyboard focus rings, and touch-friendly control sizing.",
        "Replaces decorative status dots and noisy badges with calm typographic hierarchy.",
      ],
      proTip:
        "Save this prompt inside .cursor/rules or your system instructions so every UI component you generate maintains consistent polish automatically.",
    },
    "ui-bento-dashboard": {
      summary:
        "Constructs an executive SaaS analytics dashboard with a collapsible sidebar, breadcrumbs, and asymmetric Bento KPI grid. Pairs every table and chart with real filters, empty states, and 150ms transitions.",
      overview:
        "Dashboards generated without strict layout rules often cram cards inside nested borders, wrap button labels awkwardly, or invent meaningless fake metrics. This prompt produces clean single-elevation surfaces paired with real interactive filtering, tabular metric alignment, and informative empty states. All hover transitions stick strictly to GPU-composited transform and opacity changes.",
      features: [
        "Asymmetric Bento grid organizes headline KPIs alongside detailed data tables cleanly.",
        "Single-line navigation and toolbar actions prevent awkward button text wrapping.",
        "Every data view includes populated, filtered-empty, and resettable search states.",
      ],
      proTip:
        "Ask the AI to wire table sorting and search filtering against a real dataset first before adding charts so layout proportions stay grounded.",
    },
    "ui-accessible-modal-drawer": {
      summary:
        "Creates a keyboard-first dialog, slide-over drawer, and command palette system with proper ARIA roles. Handles focus trapping, Escape dismissal, body scroll locking, and focus restoration automatically.",
      overview:
        "Custom modals built in a hurry frequently break keyboard navigation—letting Tab escape behind the backdrop or forgetting to return focus when closed. This prompt enforces full WAI-ARIA dialog semantics, Escape/backdrop dismissal, scroll locking, and fuzzy command-palette filtering. Respects prefers-reduced-motion cleanly across every transition.",
      features: [
        "Full keyboard focus trap and focus-restore lifecycle on modal open and close.",
        "Arrow-key navigation and instant fuzzy search inside the command palette view.",
        "Clean background scroll locking with zero layout shift when opening overlays.",
      ],
      proTip:
        "Verify accessibility in 5 seconds after generation by opening the modal via keyboard Enter, pressing Tab three times, and pressing Escape.",
    },
    "ui-multi-step-form": {
      summary:
        "Builds a multi-step onboarding or checkout wizard featuring inline blur validation and persisted draft state. Prevents double-submissions and preserves entered values across backward navigation.",
      overview:
        "Long single-screen forms overwhelm users, while poorly built multi-step wizards wipe user data whenever someone clicks Back. This prompt structures clean step-state persistence, blur-time field validation pairing icons with corrective text, and strict submit-button locking. Mobile ergonomics like proper inputMode and autoComplete attributes come wired out of the box.",
      features: [
        "Persists partial progress cleanly across steps so back-navigation never loses inputs.",
        "Accessible error messaging combines icon, color, and explicit corrective instructions.",
        "Guards payment or account-creation steps against accidental double clicks.",
      ],
      proTip:
        "Use a single unified Zod schema sliced per step (step1Schema, step2Schema) so client step validation and final server submission stay identical.",
    },
    "ui-responsive-tailwind-grid": {
      summary:
        "Guarantees rock-solid Tailwind CSS layout geometry from 375px mobile viewports up to 1440px desktop monitors. Eliminates horizontal scrollbars, crushed cards, and orphan trailing words in headings.",
      overview:
        "Many desktop-first UI prompts look sharp at 1440px but overflow horizontally on a 375px phone screen due to unclipped code blocks or overly tall sticky headers. This prompt enforces strict outer-padding-to-gap math, progressive grid breakpoints, and compact mobile drawer collapses. Applying text-wrap balance keeps multi-line display titles visually symmetrical.",
      features: [
        "Zero horizontal scroll overflow verified across 375px mobile, tablet, and desktop widths.",
        "Maintains container outer padding >= inner grid gaps for balanced visual breathing room.",
        "Prevents mobile sticky navbars from consuming excessive vertical screen space.",
      ],
      proTip:
        "Test generated layouts in browser DevTools at exactly 375px width right away—horizontal overflow almost always reveals itself immediately there.",
    },
    "saas-stripe-billing": {
      summary:
        "Implements Stripe Checkout, Customer Portal, and raw-body signature-verified webhook syncing. Handles idempotent event delivery and past-due recovery cleanly inside account billing settings.",
      overview:
        "Broken webhook verification is one of the highest-risk mistakes in vibe-coded SaaS products, leading to spoofed upgrades or out-of-sync subscription states. This blueprint strictly verifies raw request buffers using stripe.webhooks.constructEvent, records processed event IDs for idempotency, and models upgrade/downgrade/past-due states cleanly. Pricing grids present transparent quotas rather than vague fluff.",
      features: [
        "Raw-buffer HMAC verification ensures forged webhook payloads are rejected immediately.",
        "Idempotency tracking prevents duplicate Stripe webhook retries from corrupting credits.",
        "Includes upgrade, downgrade, cancellation, and failed-payment recovery UI states.",
      ],
      proTip:
        "Run stripe listen --forward-to localhost:3000/api/webhooks/stripe locally to test checkout completion and cancellation events end-to-end before deploying.",
    },
    "saas-rbac-teams": {
      summary:
        "Scaffolds a multi-tenant team workspace with Owner, Admin, and Member permissions plus expiring invite tokens. Enforces authorization inside every backend database query rather than only hiding UI buttons.",
      overview:
        "Adding multi-user teams retroactively to a single-user app often leaves destructive IDOR vulnerabilities where members hit admin endpoints directly. This prompt models organizations, memberships, and single-use invitations from the ground up with server-enforced role checks and last-owner safeguards. Administrative changes record neatly into an audit log.",
      features: [
        "Server-verified organization membership and role gates on every API route and query.",
        "Last-owner protection stops teams from accidentally locking themselves out of billing.",
        "Immutable audit trail logs role updates, invitations, and security-sensitive mutations.",
      ],
      proTip:
        "Store activeOrgId in the URL path or verified session token and re-verify membership in middleware on every request.",
    },
    "saas-onboarding-checklist": {
      summary:
        "Designs an interactive product activation checklist whose progress derives automatically from real database state. Deep-links incomplete steps straight to the target modal or form to boost Day-1 retention.",
      overview:
        "Manual checkboxes that users have to tick themselves feel disconnected from the real product. This pattern computes onboarding completion dynamically from live records—such as whether a workspace logo, API key, or first teammate exists—and provides direct deep links into each action. Users can collapse or dismiss the guide cleanly without cluttering repeat sessions.",
      features: [
        "Completion states derive strictly from live backend records rather than static booleans.",
        "Direct deep-links open the exact setup view or modal needed for each remaining task.",
        "Remembers collapse and dismissal preferences cleanly across browser sessions.",
      ],
      proTip:
        "Cap activation checklists at 3 to 5 genuinely high-value milestones so new signups reach their first core win within two minutes.",
    },
    "saas-usage-metering": {
      summary:
        "Builds a B2B developer API key console with one-time plaintext reveal and hashed token storage. Pairs tabular monthly quota meters with copyable cURL and TypeScript quickstart examples.",
      overview:
        "Shipping a developer-facing API product requires strict key hygiene—never storing raw secrets in plaintext rows or letting users wonder how close they are to rate limits. This prompt generates secure random keys, hashes them server-side (SHA-256 or HMAC), reveals the full key once on creation, and renders crisp usage bars alongside ready-to-paste SDK snippets.",
      features: [
        "One-time key reveal modal paired with masked prefixes and cryptographic hash storage.",
        "Live quota consumption meters formatted in crisp monospace tabular numerals.",
        "Instant one-click key revocation with confirmation guardrails.",
      ],
      proTip:
        "Include a distinctive key prefix like avc_live_ so secret-scanning tools on GitHub can detect and alert users if they accidentally commit a key.",
    },
    "lp-saas-conversion": {
      summary:
        "Crafts a high-clarity SaaS landing page focused on concrete mechanics instead of empty marketing hype. Structures the page cleanly into Hero Proposition, 3-Step Workflow, Pricing Matrix, and Footer.",
      overview:
        "AI-generated landing pages frequently drown visitors in vague phrases and repetitive generic 3-column icon cards. This prompt forces sharp copywriting discipline: a 10-word value headline above the fold, realistic workflow previews, transparent comparison specs, and zero fake social proof. Responsive layout stacking holds cleanly on phones.",
      features: [
        "Leads immediately with concrete audience, problem, and primary CTA above the fold.",
        "Bans generic buzzwords in favor of verifiable mechanics and transparent pricing limits.",
        "Balanced 4-section cadence avoids endless low-signal marketing bloat.",
      ],
      proTip:
        "Draft your 10-word hero headline and 3 concrete workflow steps yourself first, then feed this prompt to generate the layout around real copy.",
    },
    "lp-waitlist-launch": {
      summary:
        "Combines an interactive live mini-demo with a validated email waitlist signup flow. Avoids fake countdown timers and intrusive arrival popups while guiding visitors smoothly to convert.",
      overview:
        "Pre-launch pages earn far higher signups when visitors can touch a working 30-second interactive preview before handing over their email. This prompt pairs a lightweight product sandbox with strict email validation, pending-submit locks, and clear confirmation feedback. Deliberately excludes manipulative urgency timers or fabricated signup counters.",
      features: [
        "Interactive 3-step product walkthrough demonstrates real value prior to email capture.",
        "Duplicate-click prevention and clear inline validation states on the waitlist form.",
        "Clean typographic measure (65ch) keeps launch storytelling effortless to scan.",
      ],
      proTip:
        "Connect your waitlist form action to Resend or Supabase so every signup receives an immediate confirmation email with zero manual export.",
    },
    "lp-devtool-docs-hero": {
      summary:
        "Creates an authentic developer-tool launch page featuring a 1-click copyable CLI install command. Replaces abstract stock art with real syntax-highlighted before/after snippets and benchmark tables.",
      overview:
        "Engineers evaluate CLI tools, SDKs, and APIs within seconds by checking install ergonomics and real code—not marketing fluff. This prompt places a working npx or npm install copy widget right beneath the primary CTA, showcases clean TypeScript usage diffs, and aligns benchmarks using JetBrains Mono tabular figures.",
      features: [
        "Hero terminal install command ships with working clipboard copy and visual confirmation.",
        "Side-by-side syntax-highlighted code snippets prove developer ergonomics concretely.",
        "Clean 3-zone header links straight to Docs, Changelog, and GitHub.",
      ],
      proTip:
        "Keep your hero code example under 12 lines so engineers grasp the entire mental model at a glance without scrolling.",
    },
    "lp-agency-portfolio": {
      summary:
        "Builds a calm, typography-driven technical consultancy showcase centered on three structured case studies. Pairs client constraints and measurable outcomes with a validated project inquiry form.",
      overview:
        "Service agencies and freelance studios stand out through restraint, generous whitespace, and concrete engineering proof rather than flashy visual gimmicks. This prompt frames three detailed case studies around Problem -> Constraint -> Measurable Outcome and pairs them with a focused discovery inquiry flow. Subtle hairline dividers keep visual focus squarely on client work.",
      features: [
        "Structured case-study template pairs real technical constraints with verified delivery metrics.",
        "Clean 3-zone header keeps navigation focused on Work, Capabilities, and Discovery Call.",
        "Validated inquiry form captures project scope, timeline, and instant confirmation.",
      ],
      proTip:
        "Use real before/after metrics (e.g., Cut checkout LCP from 4.1s to 1.2s) in every case study card to build immediate buyer trust.",
    },
    "api-resilient-client": {
      summary:
        "Wraps browser fetch calls inside a strict TypeScript client with AbortController timeouts and JSON error guards. Prevents stale search responses from overwriting newer input and exposes clean Retry triggers.",
      overview:
        "Raw fetch() calls scattered across components leave apps vulnerable to hanging spinners, unparsed HTML 502 responses, and out-of-order search race conditions. This prompt centralizes HTTP communication into one typed wrapper handling request cancellation, timeout bounds, safe error extraction, and mutation double-click locks.",
      features: [
        "Automatic AbortController cancellation drops obsolete in-flight search queries cleanly.",
        "Safely parses non-JSON gateway errors without crashing client components.",
        "Prevents sensitive backend stack traces or internal hosts from surfacing in UI banners.",
      ],
      proTip:
        "Pass the React useEffect AbortSignal straight into your typed fetch wrapper whenever loading data tied to search inputs or filter tabs.",
    },
    "api-webhook-processor": {
      summary:
        "Designs an HTTP webhook ingestion pipeline capable of surviving burst retries safely. Enforces constant-time HMAC verification, event-ID idempotency deduplication, and fast 200/202 acknowledgments.",
      overview:
        "Third-party providers like Stripe, GitHub, and Resend retry webhooks aggressively whenever an endpoint times out or responds slowly. Without signature verification and idempotency storage, a single retry can double-charge credits or trigger duplicate emails. This blueprint separates fast verified ingestion from asynchronous downstream work cleanly.",
      features: [
        "Constant-time crypto.timingSafeEqual HMAC comparison eliminates timing side-channels.",
        "Database-backed event ID table guarantees every webhook executes its side effect once.",
        "Strict schema validation rejects malformed payloads cleanly with explicit 4xx status codes.",
      ],
      proTip:
        "Ensure Express parses /api/webhooks/* with express.raw({ type: 'application/json' }) BEFORE express.json() so HMAC signatures match byte-for-byte.",
    },
    "db-supabase-rls": {
      summary:
        "Generates a normalized PostgreSQL schema with strict Row Level Security (RLS) policies on every table. Adds foreign-key indexes, updated_at triggers, and CHECK constraints to block invalid writes.",
      overview:
        "Relying purely on frontend filters in Supabase leaves your database wide open to anyone calling the public REST API directly. This prompt guarantees every table activates RLS paired with explicit SELECT, INSERT, UPDATE, and DELETE policies tied to auth.uid(). Database constraints enforce data integrity regardless of which client writes rows.",
      features: [
        "Explicit per-operation RLS policies protect single-user and team-scoped rows at the DB layer.",
        "Foreign-key indexes and updated_at triggers prevent slow scans and stale timestamps.",
        "Includes copy-ready SQL migrations alongside matching typed TypeScript queries.",
      ],
      proTip:
        "Write a quick SQL verification test using SET LOCAL role authenticated and mock JWT claims in the Supabase SQL Editor to verify RLS policies.",
    },
    "db-drizzle-migrations": {
      summary:
        "Architects a clean Drizzle ORM data layer with composite indexes, multi-table transactions, and typed pagination. Separates pure repository queries cleanly from HTTP route controllers.",
      overview:
        "Drizzle ORM shines when schema definitions, relations, and query helpers stay neatly organized rather than mixed inside React Server Components or Express handlers. This blueprint creates transactional mutation wrappers—ensuring multi-step writes roll back atomically on error—plus cursor/offset pagination helpers and targeted indexes for hot filter paths.",
      features: [
        "Atomic db.transaction() wrappers prevent half-written records during partial failures.",
        "Composite indexes target real WHERE + ORDER BY patterns cleanly.",
        "Pure repository functions make unit and integration testing straightforward.",
      ],
      proTip:
        "Export inferred $inferSelect and $inferInsert types straight from src/db/schema.ts so UI forms and API routes never drift.",
    },
    "ext-mv3-scaffold": {
      summary:
        "Scaffolds a Chrome Extension on Manifest V3 using TypeScript, Vite, and Tailwind CSS with least-privilege permissions. Replaces fragile background memory with chrome.storage persistence and typed messaging.",
      overview:
        "Manifest V3 service workers terminate automatically after 30 seconds of inactivity, wiping out any global in-memory variables that worked under Manifest V2. This prompt establishes a resilient MV3 architecture using typed chrome.runtime messages, persistent chrome.storage wrappers, and defensive guards around restricted chrome:// tabs.",
      features: [
        "Least-privilege manifest.json permissions speed up Chrome Web Store review approval.",
        "Stateless background worker pattern persists all session data cleanly in chrome.storage.",
        "Strict HTML escaping prevents host-page XSS inside extension popups or side panels.",
      ],
      proTip:
        "Always test your extension on chrome://extensions and PDF viewer tabs early so restricted-URL guards fail gracefully instead of throwing uncaught errors.",
    },
    "ext-sidepanel-ai": {
      summary:
        "Builds a user-triggered Chrome Side Panel assistant that reads active tab text only when invoked. Routes AI calls safely through a backend proxy and supports keyboard shortcuts and 1-click copy.",
      overview:
        "Shipping API keys inside a Chrome Extension bundle exposes your secret instantly to anyone opening DevTools—and scraping every visited page passively violates user trust. This blueprint uses activeTab click-triggered extraction paired with a secure backend proxy, clean streaming UI, and tab-switch synchronization.",
      features: [
        "Respects privacy by extracting page selection or article text strictly on user click.",
        "Routes external AI calls through a backend endpoint so zero secrets ship in the extension.",
        "Keyboard shortcuts (Cmd/Ctrl+Enter, Esc) keep research workflows fast.",
      ],
      proTip:
        "Use chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }) so clicking your toolbar icon opens the Side Panel directly.",
    },
    "ext-dom-overlay": {
      summary:
        "Mounts an injected webpage helper UI inside an isolated Shadow DOM so host site CSS never corrupts layout. Uses debounced MutationObserver checks for clean SPA route handling and teardown.",
      overview:
        "Injecting raw Tailwind classes straight onto third-party sites like GitHub, Notion, or Gmail inevitably clashes with host styles and breaks page layouts. Mounting your widget inside an isolated Shadow DOM encapsulates styles completely, while debounced observers adapt cleanly to client-side SPA navigation without duplicating DOM nodes.",
      features: [
        "Shadow DOM boundary completely shields widget typography and layout from host CSS.",
        "SPA-aware MutationObserver lifecycle mounts and cleans up smoothly across route changes.",
        "Includes per-domain toggle switch persisted safely in chrome.storage.",
      ],
      proTip:
        "Attach pointer-events: none to outer fixed wrapper overlays and pointer-events: auto only on interactive widget elements so host clicks pass through naturally.",
    },
    "mob-expo-router": {
      summary:
        "Structures a cross-platform React Native + Expo Router app tuned for both iOS and Android ergonomics. Enforces 60fps FlashList/FlatList scrolling, SafeArea insets, and expo-secure-store token storage.",
      overview:
        "Mobile apps feel noticeably janky when built like desktop web pages—ignoring notch insets, keyboard overlaps, or storing JWTs inside unencrypted AsyncStorage. This prompt handles SafeAreaView, KeyboardAvoidingView, 44pt+ touch targets, and smooth virtualized scrolling out of the box so generated screens feel genuinely native.",
      features: [
        "Stores auth credentials securely inside OS Keychain/Keystore via expo-secure-store.",
        "Optimized virtualized lists keep scrolling smooth at 60fps with pull-to-refresh.",
        "Clean loading, offline retry, and empty views across iOS and Android.",
      ],
      proTip:
        "Test text-input forms with the on-screen keyboard open on a narrow mobile viewport early to catch buttons hidden beneath KeyboardAvoidingView.",
    },
    "mob-pwa-offline": {
      summary:
        "Designs an installable mobile-first Progressive Web App featuring thumb-zone navigation and offline resilience. Pairs Service Worker asset caching with a subtle offline banner and reconnect sync queue.",
      overview:
        "Mobile web users frequently hit dead spots on trains or elevators where un-cached SPAs display blank white errors. This prompt configures a complete PWA shell: thumb-friendly bottom tabs (max 5 items, 44px+ hit areas), smart Service Worker caching strategies, and non-blocking offline status feedback that avoids hover-only interactions.",
      features: [
        "Ergonomic thumb-zone bottom bar pairs crisp icons and readable labels cleanly.",
        "Service Worker caches app shell assets while refreshing dynamic feeds smoothly.",
        "Zero hover-dependent menus ensure effortless single-handed touch usability.",
      ],
      proTip:
        "Keep your PWA manifest icons in crisp 192x192 and 512x512 PNGs and test installability inside Chrome DevTools -> Application -> Manifest.",
    },
    "mob-gesture-sheets": {
      summary:
        "Implements fluid mobile bottom sheets and swipeable cards with natural snap points and scroll coordination. Locks 16px input font sizing to stop iOS Safari auto-zooming on focus.",
      overview:
        "Nothing ruins mobile touch polish faster than a bottom sheet that fights inner list scrolling or forces iOS Safari to zoom clumsily into a 14px input box. This prompt sets clear gesture boundaries between drag handles and inner scroll containers, keeps close buttons accessible for screen readers, and triggers haptics sparingly on meaningful commits.",
      features: [
        "Coordinated drag-handle vs. scroll-body handling prevents jerky sheet dismissal glitches.",
        "Minimum 16px input font sizing keeps mobile Safari viewport scale rock steady.",
        "Pairs swipe gestures with an explicit close button for full accessibility.",
      ],
      proTip:
        "Always expose snap-point dismissal via an explicit Escape key or close icon too so desktop and VoiceOver users can navigate every sheet easily.",
    },
    "game-canvas-loop": {
      summary:
        "Architects a 60fps HTML5 Canvas 2D game loop with fixed-timestep physics and delta-time clamping. Handles High-DPI devicePixelRatio scaling, dual keyboard/touch controls, and zero-GC entity pools.",
      overview:
        "Vibe-coded Canvas games commonly break on 120Hz monitors or stutter badly from allocating new particle objects every frame. This prompt separates fixed-timestep simulation from rendering, clamps frame deltas on tab switch, scales cleanly for Retina displays, and fits Title, Play, Pause, and Game Over screens smoothly inside one viewport.",
      features: [
        "Fixed-timestep physics + clamped requestAnimationFrame delta ensures identical speed on 60Hz/120Hz screens.",
        "Crisp High-DPI canvas scaling paired with WASD/Arrow keys and mobile touch controls.",
        "Reusable object pools eliminate garbage-collection frame drops during intense action.",
      ],
      proTip:
        "Pause the simulation loop automatically on document.visibilitychange so players never die when switching browser tabs briefly.",
    },
    "game-turn-based-engine": {
      summary:
        "Separates deterministic turn-based game rules cleanly into a pure state reducer independent of the UI. Includes legal-move previews, undo history, Web Audio SFX with Mute toggle, and zero-scroll 100vh fit.",
      overview:
        "Mixing turn rules directly inside React click handlers makes undo history, AI opponents, and win detection error-prone. By modeling moves, turn phases, and board state inside one serializable pure reducer, every feature—from legal-move highlighting to undo stacks and heuristic AI turns—becomes clean and bug-free. Uses built-in Web Audio synthesis so zero audio files ever 404.",
      features: [
        "Pure deterministic reducer cleanly supports full undo history and instant game resets.",
        "Zero external audio dependencies via Web Audio API synthesizer + persistent Mute switch.",
        "Fits board, HUD, and controls neatly within a single 100vh desktop/mobile viewport.",
      ],
      proTip:
        "Write 3 quick unit assertions against your pure reducer (valid move, illegal move rejection, win state) before polishing board animations.",
    },
    "dbg-fix-without-breaking": {
      summary:
        "Constrains the AI to diagnose root causes first and apply the smallest possible diff without touching unrelated code. Prevents the classic vibe-coding loop where fixing one bug silently deletes working features.",
      overview:
        "The most frustrating moment in AI coding happens when asking to fix a minor bug triggers an unsolicited rewrite of half your file, breaking three working flows at once. This surgical prompt bans broad refactors, symbol renames, and stylistic edits—requiring a 2-sentence diagnosis, a minimal targeted diff, and concrete verification edge cases.",
      features: [
        "Restricts edits strictly to the minimum lines necessary to resolve the target defect.",
        "Explicitly forbids renaming existing props, functions, or deleting working branches.",
        "Demands a plain-English root cause diagnosis plus 2 post-fix test cases.",
      ],
      proTip:
        "Stage your working code with git add -A before running any bug-fix prompt so you can inspect the exact diff cleanly in one glance.",
    },
    "dbg-explain-stack-trace": {
      summary:
        "Translates noisy 40-line framework stack traces into plain English tied directly to your source line. Pinpoints the exact runtime trigger condition alongside a minimal verified patch.",
      overview:
        "Modern bundler and React server-component stack traces often bury one trivial mistake beneath dozens of internal framework frames. This prompt filters out library noise and maps the failure directly to the line in your code—identifying whether the culprit is a missing await, undefined null access, stale closure, or blocked CORS response.",
      features: [
        "Strips framework noise to highlight the exact user-code line and state trigger.",
        "Breaks explanations into Plain-English Cause, Trigger Condition, and Exact Fix.",
        "Includes one immediate verification check to confirm the fix worked.",
      ],
      proTip:
        "Always paste the first error in the console rather than cascading downstream errors—fixing the root exception clears the rest immediately.",
    },
    "dbg-hydration-mismatch": {
      summary:
        "Resolves Next.js and SSR hydration errors caused by mismatched server and initial client markup. Catches invalid HTML nesting, Date.now()/Math.random() render calls, and premature window reads.",
      overview:
        "Hydration warnings quietly corrupt event listeners and cause jarring UI flashes on load. This diagnostic scans for non-deterministic render values, localStorage/window checks inside initial JSX, and illegal HTML hierarchies like nested buttons or block elements inside paragraph tags.",
      features: [
        "Detects invalid HTML nesting (button inside button, div inside p) instantly.",
        "Moves client-only reads safely into mounted effects without jarring layout shifts.",
        "Preserves server-rendered SEO markup while hydrating interactive controls cleanly.",
      ],
      proTip:
        "Format dynamic dates or relative timestamps either inside a mounted state or pass a consistent ISO string from the server.",
    },
    "dbg-stale-closure-race": {
      summary:
        "Fixes async race conditions where fast typing or rapid tab switches render stale API responses. Audits useEffect cleanups, AbortController cancellation, and functional React state updates.",
      overview:
        "Async race bugs appear intermittently—only when a slow earlier request resolves after a faster newer request, overwriting fresh search results with old data. This prompt inspects effects and callbacks for missing AbortController teardown or stale closure captures, replacing brittle mutations with safe cleanup and functional updaters.",
      features: [
        "Guarantees aborted or superseded network calls never overwrite current UI state.",
        "Eliminates stale closure values inside intervals, sockets, and debounced callbacks.",
        "Explains exact execution timing so the same bug doesn't return later.",
      ],
      proTip:
        "Whenever testing search inputs or filter tabs, simulate Slow 3G in browser DevTools and click two tabs quickly to verify cancellation works.",
    },
    "dbg-cors-auth-cookies": {
      summary:
        "Pinpoints why browser requests fail with CORS or missing auth cookies even when curl and Postman succeed. Fixes wildcard origin conflicts, OPTIONS preflights, and SameSite/Secure flags.",
      overview:
        "Browsers enforce strict Origin and Cookie rules that CLI tools ignore completely—especially when credentials: include meets wildcard origins or cross-subdomain SameSite flags. This debugger inspects both client fetch options and server CORS/cookie middleware together to produce aligned localhost and HTTPS production headers.",
      features: [
        "Resolves credentialed wildcard CORS mismatches and missing preflight OPTIONS headers.",
        "Aligns SameSite, Secure, and HttpOnly cookie attributes cleanly.",
        "Eliminates local proxy vs. production domain cookie drift.",
      ],
      proTip:
        "When running Vite on port 3000 with Express on the same server (vite.middlewares), serving frontend and /api/* from one origin eliminates CORS entirely.",
    },
    "dbg-css-layout-overflow": {
      summary:
        "Hunts down CSS and Tailwind classes causing horizontal mobile scrollbars, clipped dropdowns, or z-index traps. Fixes missing min-w-0 flex constraints and accidental stacking contexts cleanly.",
      overview:
        "A single un-wrapped URL, overflowing pre block, or missing min-w-0 on a flex child can break responsive layout across an entire page. Likewise, transform or backdrop-filter on a parent card quietly traps child dropdowns behind sibling cards. This diagnostic isolates the exact offending class and patches it minimally.",
      features: [
        "Locates unclipped flex/grid children (min-w-0) and overflowing code blocks quickly.",
        "Identifies unexpected CSS stacking contexts (transform, opacity, backdrop-filter).",
        "Preserves desktop layout geometry while locking 375px mobile fit.",
      ],
      proTip:
        "Temporarily toggle outline debugging in DevTools on 375px mobile width to spot whichever rogue box sticks past the right edge.",
    },
    "ref-messy-ai-code": {
      summary:
        "Transforms bloated 600-line AI-generated files into clean, modular helpers without altering behavior. Flattens deep nesting with early returns and separates data transforms from UI rendering.",
      overview:
        "After ten rounds of rapid feature prompting, files routinely accumulate duplicated handlers, 5-level if/else pyramids, and mixed API/JSX logic. This refactoring blueprint preserves every exported symbol, prop signature, and edge-case branch identically while restoring clarity, pure helper functions, and straightforward testability.",
      features: [
        "Preserves 100% of external props, API contracts, and observable edge-case behaviors.",
        "Replaces deeply nested conditionals with crisp early returns and pure utilities.",
        "Summarizes every structural extraction so code review remains fast and trustworthy.",
      ],
      proTip:
        "Never refactor messy files and add new features in the same prompt—run this cleanup commit first, verify the build, then build new features.",
    },
    "ref-strict-typescript": {
      summary:
        "Eliminates unsafe any, @ts-ignore, and forced casts that hide real runtime null bugs. Replaces loose types with discriminated unions and runtime type guards so tsc --noEmit passes cleanly.",
      overview:
        "When an AI assistant hits a tricky TypeScript error, it often reaches for any or forced casts just to silence red squiggles—pushing crashes to production users instead. This refactor restores strict compiler guarantees, modeling async loading/error/success branches as clean discriminated unions.",
      features: [
        "Replaces unsafe casts with idiomatic discriminated unions and unknown narrowing.",
        "Catches unhandled null/undefined branches before runtime crashes occur.",
        "Passes strict tsc --noEmit without weakening tsconfig.json compiler flags.",
      ],
      proTip:
        "Run npx tsc --noEmit after every major AI refactor to catch silent array/object index or nullability assumptions.",
    },
    "ref-prop-drilling-cleanup": {
      summary:
        "Cleans up deeply threaded prop chains across intermediate components using clean composition first. Introduces focused Context providers only where genuinely shared global state warrants it.",
      overview:
        "Passing 10 state props through four wrapper layers makes every small UI edit painful. Instead of immediately pulling in heavy state libraries, this refactor favors React component composition (children slots) first—eliminating useless pass-through props naturally—and reserves lightweight Context slices strictly for cross-tree state.",
      features: [
        "Prefers clean children composition patterns before introducing extra Context boilerplate.",
        "Splits read/write context values or narrow slices to avoid needless subtree re-renders.",
        "Keeps state flow easy for humans and AI tools to trace across files.",
      ],
      proTip:
        "Check if passing slot children solves prop drilling cleanly before creating a new React Context provider.",
    },
    "ref-legacy-to-hooks": {
      summary:
        "Extracts tangled fetch calls, timers, and event listeners out of UI components into clean custom hooks. Leaves JSX components purely declarative with typed data, isLoading, and error outputs.",
      overview:
        "Mixing 120 lines of useEffect, AbortControllers, and local timers straight above JSX markup makes components difficult to read and nearly impossible to reuse. This prompt isolates side effects into one cohesive, single-purpose custom hook featuring proper unmount cleanup and a crisp declarative interface.",
      features: [
        "Separates async orchestration cleanly from presentational Tailwind JSX.",
        "Verifies timer, subscription, and listener teardown on component unmount.",
        "Exposes clear typed loading, error, and action handler contracts.",
      ],
      proTip:
        "Name extracted hooks around domain intent (useResourceSearch rather than useData) so future prompts immediately understand their responsibility.",
    },
    "ref-dead-code-prune": {
      summary:
        "Audits bloated repositories for unreachable branches, unused imports, duplicate helpers, and stale state. Lists every safe removal explicitly before outputting a tighter, cleaner file.",
      overview:
        "Fast experimentation leaves behind orphaned helper functions, half-abandoned feature flags, and unused npm imports that confuse future AI prompts into reusing dead patterns. This audit carefully distinguishes genuinely unused symbols from subtle DOM/accessibility hooks, documenting every deletion cleanly.",
      features: [
        "Catalogs dead exports, duplicate utilities, and obsolete state variables with rationale.",
        "Protects subtle event listeners, ARIA attributes, and side-effect hooks from accidental removal.",
        "Shrinks file context size so subsequent AI prompts stay sharper and cheaper.",
      ],
      proTip:
        "Run dead-code cleanup whenever you pivot a feature flow—AI models perform significantly better when obsolete code isn't cluttering context.",
    },
    "sec-full-owasp-audit": {
      summary:
        "Runs a practical pre-launch security scan across API routes, auth logic, and database queries. Checks specifically for IDOR, injection, XSS, SSRF, missing rate limits, and leaked secrets with severity patches.",
      overview:
        "Vibe-coded MVPs frequently look polished visually while leaving wide-open backend gaps—like trusting userId from request bodies or returning full user rows containing password hashes. This pragmatic OWASP Top-10 audit inspects real exploitable paths and delivers exact severity-ranked patches rather than vague compliance advice.",
      features: [
        "Targets high-impact bugs: IDOR, SQL/NoSQL injection, XSS, SSRF, and response secret leaks.",
        "Ranks findings clearly (Critical / High / Medium) so urgent fixes ship first.",
        "Provides copy-ready minimal code patches for every discovered vulnerability.",
      ],
      proTip:
        "Run this audit against your server route handlers and database layer before sharing any public demo URL publicly.",
    },
    "sec-idor-authz-check": {
      summary:
        "Verifies that users can never read, edit, or delete another tenant's records by swapping an ID in the URL. Enforces session-derived userId/orgId scoping inside every database query.",
      overview:
        "Broken Object-Level Authorization (IDOR) is the #1 security flaw in rapidly built SaaS apps—checking if a user is logged in without checking if the target record belongs to their workspace. This prompt audits every query to bind ownership strictly from verified server session tokens.",
      features: [
        "Scans read, update, and delete queries for missing user/org ownership clauses.",
        "Rejects untrusted client-supplied userId, role, or orgId fields inside req.body.",
        "Rewrites vulnerable handlers cleanly using authenticated server principals.",
      ],
      proTip:
        "Test IDOR protection manually in 30 seconds by creating two dummy accounts and pasting Account A's resource ID into Account B's edit endpoint.",
    },
    "sec-secret-leak-scan": {
      summary:
        "Catches private API keys, database URLs, or webhook secrets accidentally bundled into client JavaScript. Shows how to move privileged calls safely behind /api/* proxy routes.",
      overview:
        "Prefixing a secret key with VITE_ or NEXT_PUBLIC_—or importing a server config into a React component—embeds private credentials directly inside public browser JS for anyone to extract via View Source. This audit inspects env prefixes and bundle boundaries cleanly, moving privileged SDK calls safely onto server routes.",
      features: [
        "Flags every VITE_* / NEXT_PUBLIC_* misuse and accidental client-side secret import.",
        "Designs clean server-side /api/* proxy handlers keeping credentials strictly in Node env.",
        "Keeps .env.example documented cleanly with zero real keys committed.",
      ],
      proTip:
        "Always run npm run build and search dist/assets/ for the first 6 characters of any sensitive API key before launching publicly.",
    },
    "sec-xss-sanitization": {
      summary:
        "Eliminates unsafe innerHTML, dangerouslySetInnerHTML, and javascript: links across user or LLM output. Enforces textContent escaping, URL protocol allowlists, and strict sanitization.",
      overview:
        "Displaying AI-generated Markdown, user bios, or external webhook snippets via raw innerHTML opens instant Cross-Site Scripting execution—even inside single-page apps. This audit locks down DOM insertion via safe textContent / JSX escaping and validates clickable links strictly against https: / http: protocols.",
      features: [
        "Replaces dangerous raw HTML sinks with safe text escaping or vetted sanitizers.",
        "Blocks javascript: and data: URI injection inside user-supplied anchor tags.",
        "Protects dynamically rendered LLM Markdown and code blocks from script execution.",
      ],
      proTip:
        "Remember that React escapes normal text interpolation automatically—risk enters whenever you add raw HTML injection or unvalidated href URLs.",
    },
    "sec-webhook-rate-limit": {
      summary:
        "Hardens public forms, AI proxy endpoints, and webhook receivers against automated abuse and forged payloads. Combines constant-time HMAC validation with IP/user rate limits and HTTP 429 headers.",
      overview:
        "Public AI endpoints and signup forms without rate limits can drain an entire monthly LLM or email quota in minutes under a single scripted loop. Meanwhile, unverified webhook endpoints allow attackers to fake paid subscription upgrades. This prompt puts payload caps, schema guards, HMAC verification, and clean 429 Retry-After limits in place.",
      features: [
        "Adds token-bucket or sliding-window rate limits keyed by IP and authenticated user.",
        "Enforces strict JSON body size limits and input validation before calling costly APIs.",
        "Verifies webhook signatures against raw payloads using constant-time equality.",
      ],
      proTip:
        "Always rate-limit expensive /api/generate or auth OTP routes before anything else—those two endpoints attract automated bots fastest.",
    },
    "perf-react-rerender": {
      summary:
        "Profiles why typing into search inputs or interacting with tables drops frames in React. Fixes bottlenecked root states and oversized contexts cleanly instead of sprinkling blind useMemo calls everywhere.",
      overview:
        "Putting a search bar's typing state high in a root component forces hundreds of unrelated cards or table rows to re-render on every single keystroke. Rather than cluttering code with ineffective useMemo wrappers, this profiler colocalizes fast input state, splits context read/write providers, and virtualizes long lists cleanly.",
      features: [
        "Colocalizes high-frequency keystroke state away from heavy parent layout trees.",
        "Splits monolithic Context providers so unrelated widgets skip unnecessary renders.",
        "Applies debouncing or list virtualization cleanly when datasets exceed 200 items.",
      ],
      proTip:
        "Use React DevTools Profiler highlight-updates mode to see instantly if typing one letter flashes your entire sidebar and footer.",
    },
    "perf-n-plus-one-queries": {
      summary:
        "Eliminates sequential N+1 database queries and slow request waterfalls slowing down list pages. Consolidates looped queries into single SQL JOINs, WHERE IN (...) batches, and Promise.all calls.",
      overview:
        "Fetching 50 projects and then looping await db.query(...) 50 separate times turns a 20ms dashboard load into a 3-second stall. This optimizer collapses sequential loops into single relational JOINs or batched lookups, parallelizes independent fetches with Promise.all, and trims over-fetched columns.",
      features: [
        "Replaces looped per-item database fetches with single batched SQL JOIN / IN queries.",
        "Parallelizes independent async calls safely using Promise.all.",
        "Trims unused heavy columns (like huge text blobs) from list endpoints.",
      ],
      proTip:
        "Turn on query logging locally for one page load—if you see the same SELECT statement repeating 10+ times in a row, you found an N+1 bottleneck.",
    },
    "perf-core-web-vitals": {
      summary:
        "Optimizes Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP). Adds explicit aspect ratios, preloads hero media, and restricts animations to compositor properties.",
      overview:
        "Janky layout jumps when images finish loading (CLS) and sluggish button feedback (INP) hurt both user trust and search rankings. This checklist locks image dimensions upfront via aspect-ratio containers, removes render-blocking scripts from the critical path, and ensures hover/drawer animations touch only transform and opacity.",
      features: [
        "Eliminates image layout shift (CLS) using explicit aspect-ratio and fallback containers.",
        "Accelerates hero LCP while deferring non-critical scripts cleanly.",
        "Improves responsiveness (INP) by avoiding expensive synchronous main-thread loops.",
      ],
      proTip:
        "Run Chrome Lighthouse in an Incognito window with extensions disabled to measure real baseline Core Web Vitals without extension noise.",
    },
    "perf-bundle-size-audit": {
      summary:
        "Shrinks bloated production JavaScript bundles flagged during Vite or Next.js builds. Replaces oversized libraries with lightweight alternatives and lazy-loads secondary modals, charts, and editors.",
      overview:
        "Installing a massive utility library just to format one date—or importing heavy chart/editor bundles eagerly on the landing page—slows mobile startup dramatically. This audit inspects package.json and top-level imports, switching heavy secondary views to dynamic import() and trimming barrel-file bloat.",
      features: [
        "Flags oversized monolithic packages replaceable with native browser APIs or tiny helpers.",
        "Splits heavy secondary views (charts, code editors, modals) via dynamic import().",
        "Fixes deep barrel-import patterns that defeat bundler tree-shaking.",
      ],
      proTip:
        "Use Intl.DateTimeFormat and Intl.NumberFormat natively in modern browsers before installing heavy formatting packages.",
    },
    "perf-caching-headers": {
      summary:
        "Designs explicit HTTP Cache-Control policies across static assets, public reads, and private API routes. Pairs immutable asset caching with stale-while-revalidate and strict no-store user guards.",
      overview:
        "Incorrect cache headers either force repeat visitors to re-download megabytes of immutable assets on every load—or worse, accidentally cache one user's private /api/me response at the CDN edge. This blueprint maps exact Cache-Control directives safely across fingerprinted static files, public feeds, and authenticated endpoints.",
      features: [
        "Applies public immutable caching safely to hashed JS/CSS build assets.",
        "Speeds up public reads cleanly via stale-while-revalidate edge policies.",
        "Locks private authenticated endpoints strictly to private, no-store.",
      ],
      proTip:
        "Never apply immutable caching to index.html itself—always serve HTML with no-cache revalidation so users receive fresh hashed bundle links immediately after deploy.",
    },
    "anti-hallucination-verify-apis": {
      summary:
        "Stops LLMs from inventing non-existent npm packages, phantom SDK flags, or outdated v1 syntax. Forces every third-party import to be verified strictly against your exact package.json versions.",
      overview:
        "LLMs frequently hallucinate clean-sounding SDK methods from outdated training versions (for example mixing Tailwind v3/v4 syntax or v1 vs v2 SDK methods). By pasting package.json alongside strict verification rules, this prompt forces the model to cite installed versions and flag uncertainty explicitly instead of guessing.",
      features: [
        "Eliminates phantom npm packages and hallucinated method signatures.",
        "Anchors generated imports strictly to versions actually installed in package.json.",
        "Forces explicit uncertainty reporting whenever an API signature isn't verified.",
      ],
      proTip:
        "Whenever adding a rapidly evolving library (like @google/genai, Drizzle, or Tailwind v4), paste both package.json and a few lines from its node_modules type definitions.",
    },
    "anti-hallucination-evidence-first": {
      summary:
        "Prevents coding agents from guessing how unseen files, types, or routes in your repository work. Requires listing observed symbols and requesting missing files before writing any code.",
      overview:
        "One of the biggest causes of broken multi-file edits is an AI guessing prop names or database columns inside files it hasn't opened yet. This evidence-first constraint enforces a simple rule: read first, cite observed file paths and symbol names, flag missing context explicitly, and code only against verified interfaces.",
      features: [
        "Eliminates imaginary imports, guessed component props, and mismatched field names.",
        "Forces transparent inventory of observed files vs. missing definitions before coding.",
        "Saves debugging time across multi-file TypeScript repositories.",
      ],
      proTip:
        "Pair this prompt with @filename mentions in Cursor/Windsurf or upload the related route + schema files together in chat.",
    },
    "anti-hallucination-no-stubs": {
      summary:
        "Bans lazy TODO placeholders, truncated code comments, and silent mock fallbacks. Guarantees every button, form handler, and error path executes complete real logic.",
      overview:
        "Nothing wastes time like copying a 200-line AI component only to discover a TODO stub on line 140—or worse, a catch block silently returning fake hardcoded arrays so failures look like success. This guardrail mandates complete end-to-end execution across every branch.",
      features: [
        "Eliminates incomplete code ellipses, stub callbacks, and unimplemented TODO blocks.",
        "Prohibits silent mock arrays inside catch blocks masking real API failures.",
        "Delivers full, drop-in modules ready to compile immediately.",
      ],
      proTip:
        "Add 'Zero TODOs, zero omitted lines, and zero fake catch fallbacks' at the bottom of any large feature generation prompt.",
    },
    "anti-hallucination-step-check": {
      summary:
        "Inserts a 5-point pre-edit invariant check before risky multi-file AI refactors. Locks existing routes, types, and mobile widths in place and verifies every invariant post-edit.",
      overview:
        "Large multi-file changes carry real regression risk when an agent dives straight into editing ten files simultaneously. Requiring a brief pre-flight checklist—listing intact routes/types, exact files to touch, and edge cases like empty inputs and 375px viewports—catches flawed plans before a single line gets overwritten.",
      features: [
        "Protects existing working routes, types, and UI flows during complex updates.",
        "Clarifies exact file blast radius before edits start.",
        "Explicitly checks empty states, failure recovery, and 375px mobile layouts.",
      ],
      proTip:
        "Run this pre-flight check whenever an upcoming change spans database schema, backend API, and frontend UI together.",
    },
  };

  function hydrateGuides() {
    ["editors", "prompts", "debugging", "hosting"].forEach((group) => {
      VIBE_DATA[group].forEach((item) => {
        const guide = ITEM_GUIDES[item.id];
        if (guide) {
          if (guide.summary) item.summary = guide.summary;
          if (guide.overview) item.overview = guide.overview;
          if (guide.features) item.features = guide.features;
          if (guide.proTip) item.proTip = guide.proTip;
        }
      });
    });
  }
  hydrateGuides();

  if (root) {
    root.VIBE_DATA = VIBE_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = VIBE_DATA;
  }

  // Exit early in non-DOM environments (e.g., Node verification)
  if (typeof document === "undefined") return;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function refreshIcons() {
    if (
      typeof window !== "undefined" &&
      window.lucide &&
      typeof window.lucide.createIcons === "function"
    ) {
      window.lucide.createIcons();
    } else if (
      root &&
      root.lucide &&
      typeof root.lucide.createIcons === "function"
    ) {
      root.lucide.createIcons();
    }
  }

  function initSpotlightCards() {
    document.addEventListener(
      "mousemove",
      (e) => {
        const card = e.target.closest(".spotlight-card");
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      },
      { passive: true },
    );
  }

  function prefersReducedMotion() {
    return (
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function getGsapEngine() {
    if (typeof window === "undefined" || !window.gsap) return null;
    const gsapInstance = window.gsap;
    const stPlugin = window.ScrollTrigger || null;
    if (stPlugin && typeof gsapInstance.registerPlugin === "function") {
      gsapInstance.registerPlugin(stPlugin);
    }
    return { gsap: gsapInstance, ScrollTrigger: stPlugin };
  }

  let siteAnimCtx = null;
  let gridAnimCtx = null;
  let hoverMicroBound = false;

  function animateCollectionGrid(gridEl, isFilterChange) {
    if (!gridEl || prefersReducedMotion()) return;
    const engine = getGsapEngine();
    if (!engine) return;
    const { gsap, ScrollTrigger } = engine;

    if (gridAnimCtx) {
      gridAnimCtx.revert();
      gridAnimCtx = null;
    }

    const cards = Array.from(gridEl.querySelectorAll(".card-shell"));
    if (cards.length === 0) {
      if (ScrollTrigger) {
        requestAnimationFrame(() => ScrollTrigger.refresh());
      }
      return;
    }

    cards.forEach((card) => card.classList.add("gsap-motion-ready"));

    gridAnimCtx = gsap.context(() => {
      if (isFilterChange) {
        const immediateCards = cards.slice(0, 12);
        gsap.fromTo(
          immediateCards,
          { opacity: 0, y: 18, scale: 0.99 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.36,
            stagger: 0.04,
            ease: "power2.out",
            overwrite: "auto",
            clearProps: "transform,opacity",
          },
        );
      } else if (ScrollTrigger) {
        gsap.set(cards, { opacity: 0, y: 24 });
        ScrollTrigger.batch(cards, {
          start: "top 92%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.52,
              stagger: 0.06,
              ease: "power3.out",
              overwrite: "auto",
              clearProps: "transform,opacity",
            });
          },
        });
      } else {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.05,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
        );
      }
    }, gridEl);

    if (ScrollTrigger) {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }
  }

  function initHoverMicroInteractions() {
    if (hoverMicroBound || prefersReducedMotion()) return;
    if (
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }
    const engine = getGsapEngine();
    if (!engine) return;
    const { gsap } = engine;
    hoverMicroBound = true;

    const CARD_SELECTOR = [
      'section[aria-labelledby="bento-heading"] a.spotlight-card',
      ".card-shell",
      'section[aria-labelledby$="workflows-heading"] .spotlight-card',
      'section[aria-labelledby$="faq-heading"] details',
    ].join(", ");

    const BUTTON_SELECTOR = [
      'header a[href*="github.com"]',
      'main section[aria-labelledby="hero-heading"] a',
      ".copy-btn",
      ".accordion-toggle",
      ".preview-btn",
      '.card-shell a[target="_blank"]',
      'footer a[href*="github.com"]',
      'footer a[href*="pulls"]',
    ].join(", ");

    document.addEventListener("pointerover", (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      const btn = e.target.closest(BUTTON_SELECTOR);
      if (btn && (!e.relatedTarget || !btn.contains(e.relatedTarget))) {
        btn.classList.add("gsap-motion-ready");
        gsap.to(btn, {
          y: -1.5,
          scale: 1.02,
          duration: 0.18,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      const card = e.target.closest(CARD_SELECTOR);
      if (card && (!e.relatedTarget || !card.contains(e.relatedTarget))) {
        card.classList.add("gsap-motion-ready");
        card.classList.remove("hover:-translate-y-0.5");
        gsap.to(card, {
          y: -3,
          duration: 0.22,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    });

    document.addEventListener("pointerout", (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      const btn = e.target.closest(BUTTON_SELECTOR);
      if (btn && (!e.relatedTarget || !btn.contains(e.relatedTarget))) {
        gsap.to(btn, {
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
          clearProps: "transform",
        });
      }

      const card = e.target.closest(CARD_SELECTOR);
      if (card && (!e.relatedTarget || !card.contains(e.relatedTarget))) {
        gsap.to(card, {
          y: 0,
          duration: 0.24,
          ease: "power2.out",
          overwrite: "auto",
          clearProps: "y",
        });
      }
    });

    document.addEventListener("pointerdown", (e) => {
      const btn = e.target.closest(BUTTON_SELECTOR);
      if (!btn) return;
      btn.classList.add("gsap-motion-ready");
      gsap.to(btn, {
        scale: 0.97,
        y: 0,
        duration: 0.1,
        ease: "power2.out",
        overwrite: "auto",
      });
    });

    document.addEventListener("pointerup", (e) => {
      const btn = e.target.closest(BUTTON_SELECTOR);
      if (!btn) return;
      gsap.to(btn, {
        scale: 1.02,
        y: -1.5,
        duration: 0.16,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  }

  function initSiteAnimations(pageKey) {
    if (prefersReducedMotion()) return;
    const engine = getGsapEngine();
    if (!engine) return;
    const { gsap, ScrollTrigger } = engine;

    if (siteAnimCtx) {
      siteAnimCtx.revert();
      siteAnimCtx = null;
    }

    siteAnimCtx = gsap.context(() => {
      // 1. Hero / Page Header Initial Entrance
      if (pageKey === "home") {
        const heroSection = document.querySelector(
          'section[aria-labelledby="hero-heading"]',
        );
        if (heroSection) {
          const heroBadge = heroSection.querySelector(".inline-flex.rounded-full");
          const heroTitle = document.getElementById("hero-heading");
          const heroSubtitle = heroSection.querySelector("p.mx-auto");
          const heroSearch = document.getElementById("hero-search-input")?.closest(".relative.mx-auto");
          const heroCtas = heroSection.querySelector(".mt-8.flex");
          const heroTargets = [
            heroBadge,
            heroTitle,
            heroSubtitle,
            heroSearch,
            heroCtas,
          ].filter(Boolean);

          heroTargets.forEach((el) => el.classList.add("gsap-motion-ready"));
          gsap.from(heroTargets, {
            opacity: 0,
            y: 26,
            scale: 0.97,
            duration: 0.65,
            stagger: 0.085,
            ease: "power3.out",
            clearProps: "transform,opacity",
          });
        }
      } else {
        const pageHeader = document.querySelector(
          'section[aria-labelledby="page-heading"]',
        );
        if (pageHeader) {
          const badgeRow = pageHeader.querySelector(".flex.flex-wrap.items-center");
          const pageTitle = document.getElementById("page-heading");
          const pageSubtitle = pageHeader.querySelector("p.mt-3");
          const headerThumb = pageHeader.querySelector(".lg\\:col-span-4");
          const filterArea = pageHeader.querySelector(".mt-8.space-y-4");
          const headerTargets = [
            badgeRow,
            pageTitle,
            pageSubtitle,
            headerThumb,
            filterArea,
          ].filter(Boolean);

          headerTargets.forEach((el) => el.classList.add("gsap-motion-ready"));
          gsap.from(headerTargets, {
            opacity: 0,
            y: 20,
            scale: 0.98,
            duration: 0.56,
            stagger: 0.07,
            ease: "power3.out",
            clearProps: "transform,opacity",
          });
        }
      }

      if (!ScrollTrigger) return;

      // 2. Bento Collection Cards (Home)
      const bentoSection = document.querySelector(
        'section[aria-labelledby="bento-heading"]',
      );
      if (bentoSection) {
        const bentoHeader = bentoSection.firstElementChild;
        const bentoCards = Array.from(
          bentoSection.querySelectorAll("a.spotlight-card"),
        );
        if (bentoHeader) {
          gsap.from(bentoHeader, {
            opacity: 0,
            y: 20,
            duration: 0.52,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: bentoHeader,
              start: "top 90%",
              once: true,
            },
          });
        }
        if (bentoCards.length > 0) {
          bentoCards.forEach((card) => {
            card.classList.add("gsap-motion-ready");
            card.classList.remove("hover:-translate-y-0.5");
          });
          gsap.from(bentoCards, {
            opacity: 0,
            y: 28,
            scale: 0.985,
            duration: 0.6,
            stagger: 0.09,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: bentoCards[0].parentElement,
              start: "top 86%",
              once: true,
            },
          });
        }
      }

      // 3. How-To Guide Sections & Step Cards
      document
        .querySelectorAll(
          'section[aria-labelledby="how-to-heading"], section[aria-labelledby$="howto-heading"]',
        )
        .forEach((sec) => {
          const shell = sec.querySelector(".spotlight-card");
          const steps = Array.from(sec.querySelectorAll(".grid > div"));
          if (shell) {
            shell.classList.add("gsap-motion-ready");
            gsap.from(shell, {
              opacity: 0,
              y: 24,
              duration: 0.55,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: sec,
                start: "top 88%",
                once: true,
              },
            });
          }
          if (steps.length > 0) {
            gsap.from(steps, {
              opacity: 0,
              y: 20,
              duration: 0.48,
              stagger: 0.08,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: steps[0].parentElement,
                start: "top 86%",
                once: true,
              },
            });
          }
        });

      // 4. Pro Workflows Sections
      document
        .querySelectorAll('section[aria-labelledby$="workflows-heading"]')
        .forEach((sec) => {
          const header = sec.firstElementChild;
          const cards = Array.from(sec.querySelectorAll(".spotlight-card"));
          if (header) {
            gsap.from(header, {
              opacity: 0,
              y: 18,
              duration: 0.48,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: header,
                start: "top 90%",
                once: true,
              },
            });
          }
          if (cards.length > 0) {
            cards.forEach((c) => c.classList.add("gsap-motion-ready"));
            gsap.from(cards, {
              opacity: 0,
              y: 24,
              duration: 0.55,
              stagger: 0.09,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: cards[0].parentElement,
                start: "top 86%",
                once: true,
              },
            });
          }
        });

      // 5. Comparison Insights Sections & Rows
      document
        .querySelectorAll('section[aria-labelledby$="comparison-heading"]')
        .forEach((sec) => {
          const shell = sec.querySelector(".spotlight-card");
          const rows = Array.from(sec.querySelectorAll("tbody tr"));
          if (shell) {
            shell.classList.add("gsap-motion-ready");
            gsap.from(shell, {
              opacity: 0,
              y: 24,
              duration: 0.55,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: sec,
                start: "top 88%",
                once: true,
              },
            });
          }
          if (rows.length > 0) {
            gsap.from(rows, {
              opacity: 0,
              y: 14,
              duration: 0.42,
              stagger: 0.06,
              ease: "power2.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: rows[0].closest("table") || sec,
                start: "top 86%",
                once: true,
              },
            });
          }
        });

      // 6. FAQ Accordions
      document
        .querySelectorAll('section[aria-labelledby$="faq-heading"]')
        .forEach((sec) => {
          const header = sec.firstElementChild;
          const faqs = Array.from(sec.querySelectorAll("details"));
          if (header) {
            gsap.from(header, {
              opacity: 0,
              y: 18,
              duration: 0.48,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: header,
                start: "top 90%",
                once: true,
              },
            });
          }
          if (faqs.length > 0) {
            faqs.forEach((d) => {
              d.classList.add("gsap-motion-ready");
              d.addEventListener("toggle", () => {
                setTimeout(() => ScrollTrigger.refresh(), 60);
              });
            });
            gsap.from(faqs, {
              opacity: 0,
              y: 22,
              duration: 0.5,
              stagger: 0.08,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: faqs[0].parentElement,
                start: "top 88%",
                once: true,
              },
            });
          }
        });
    }, document.body);

    initHoverMicroInteractions();
  }

  function initMobileNav() {
    const btn = document.getElementById("mobile-menu-btn");
    const drawer = document.getElementById("mobile-nav");
    if (!btn || !drawer) return;

    const links = Array.from(drawer.querySelectorAll("a"));
    const engine = !prefersReducedMotion() ? getGsapEngine() : null;
    let isOpen = false;
    let menuTl = null;

    if (engine) {
      const { gsap } = engine;
      gsap.set(drawer, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
        transformOrigin: "top center",
      });
      gsap.set(links, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
        transformOrigin: "top center",
      });

      menuTl = gsap.timeline({
        paused: true,
        defaults: { overwrite: "auto" },
        onReverseComplete: () => {
          if (!isOpen) {
            drawer.setAttribute("hidden", "");
            gsap.set(drawer, { clearProps: "boxShadow,opacity,transform" });
            gsap.set(links, { clearProps: "boxShadow,opacity,transform" });
          }
        },
      });

      menuTl
        .fromTo(
          drawer,
          {
            opacity: 0,
            rotateX: -32,
            y: -14,
            scaleY: 0.9,
            transformPerspective: 1000,
            transformOrigin: "top center",
            boxShadow:
              "0 6px 16px rgba(0, 0, 0, 0.45), inset 0 18px 32px rgba(0, 0, 0, 0.7)",
          },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            scaleY: 1,
            duration: 0.34,
            ease: "power3.out",
            boxShadow:
              "0 28px 64px rgba(0, 0, 0, 0.85), inset 0 0px 0px rgba(0, 0, 0, 0)",
          },
        )
        .fromTo(
          links,
          {
            opacity: 0,
            rotateX: -90,
            y: -8,
            transformPerspective: 1000,
            transformOrigin: "top center",
            boxShadow:
              "0 14px 26px -8px rgba(0, 0, 0, 0.8), inset 0 -12px 20px rgba(0, 0, 0, 0.55)",
          },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 0.38,
            stagger: 0.048,
            ease: "back.out(1.2)",
            boxShadow:
              "0 2px 8px rgba(0, 0, 0, 0.16), inset 0 0px 0px rgba(0, 0, 0, 0)",
          },
          "-=0.22",
        );
    }

    function setOpen(open) {
      isOpen = Boolean(open);
      if (isOpen) {
        drawer.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
        btn.innerHTML = '<i data-lucide="x" class="h-5 w-5"></i>';
        refreshIcons();
        if (menuTl) {
          menuTl.timeScale(1).play();
        }
      } else {
        btn.setAttribute("aria-expanded", "false");
        btn.innerHTML = '<i data-lucide="menu" class="h-5 w-5"></i>';
        refreshIcons();
        if (menuTl && menuTl.progress() > 0) {
          menuTl.timeScale(1.35).reverse();
        } else {
          drawer.setAttribute("hidden", "");
        }
      }
      if (engine) {
        engine.gsap.fromTo(
          btn,
          { scale: 0.9 },
          { scale: 1, duration: 0.22, ease: "back.out(2)", overwrite: "auto" },
        );
      }
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      setOpen(!isOpen);
    });

    links.forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("click", (e) => {
      if (isOpen && !drawer.contains(e.target) && !btn.contains(e.target)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) {
        setOpen(false);
        btn.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024 && (isOpen || !drawer.hasAttribute("hidden"))) {
        isOpen = false;
        if (menuTl) {
          menuTl.pause(0);
          engine.gsap.set(drawer, { clearProps: "boxShadow,opacity,transform" });
          engine.gsap.set(links, { clearProps: "boxShadow,opacity,transform" });
        }
        drawer.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
        btn.innerHTML = '<i data-lucide="menu" class="h-5 w-5"></i>';
        refreshIcons();
      }
    });
  }

  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // Fallback below
      }
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (_) {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }

  let toastTimer = null;
  function showToast(message) {
    let toast = document.getElementById("vibe-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "vibe-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      toast.className =
        "pointer-events-none fixed bottom-6 right-6 z-50 translate-y-4 opacity-0 transition-all duration-200";
      toast.innerHTML = `
        <div class="flex items-center gap-2.5 rounded-xl border border-emerald-400/40 bg-zinc-950/95 px-4 py-3 text-sm font-medium text-emerald-200 shadow-[0_12px_36px_rgba(0,0,0,0.65)] backdrop-blur-xl">
          <i data-lucide="check-circle-2" class="h-4 w-4 text-emerald-400 shrink-0"></i>
          <span id="vibe-toast-msg">Copied to clipboard</span>
        </div>
      `;
      document.body.appendChild(toast);
      refreshIcons();
    }
    const msgEl = document.getElementById("vibe-toast-msg");
    if (msgEl) msgEl.textContent = message;
    toast.classList.remove("translate-y-4", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.add("translate-y-4", "opacity-0");
      toast.classList.remove("translate-y-0", "opacity-100");
    }, 2400);
  }

  let modalState = { currentText: "", currentTitle: "", lastTrigger: null };
  let modalEventsBound = false;

  function closePromptModal() {
    const modal = document.getElementById("vibe-prompt-modal");
    if (!modal) return;
    modal.hidden = true;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modal.style.display = "none";
    document.body.style.overflow = "";
    if (
      modalState.lastTrigger &&
      typeof modalState.lastTrigger.focus === "function"
    ) {
      modalState.lastTrigger.focus();
    }
    modalState.lastTrigger = null;
  }

  function initModalEvents() {
    if (modalEventsBound) return;
    modalEventsBound = true;

    document.body.addEventListener("click", async (e) => {
      if (e.target.closest(".preview-btn")) return;

      const modal = document.getElementById("vibe-prompt-modal");
      if (!modal || modal.hidden || modal.style.display === "none") return;

      if (
        e.target.closest("#modal-close-x") ||
        e.target.closest("#modal-close-btn")
      ) {
        e.preventDefault();
        closePromptModal();
        return;
      }

      if (e.target.closest("#vibe-modal-copy")) {
        const ok = await copyToClipboard(modalState.currentText);
        if (ok) {
          showToast(`Copied "${modalState.currentTitle}" to clipboard`);
        }
        return;
      }

      if (
        e.target.closest("#vibe-modal-backdrop") ||
        (modal.contains(e.target) && !e.target.closest("#vibe-modal-box"))
      ) {
        closePromptModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const modal = document.getElementById("vibe-prompt-modal");
        if (modal && !modal.hidden && modal.style.display !== "none") {
          e.preventDefault();
          closePromptModal();
        }
      }
    });
  }

  function ensurePromptModal() {
    initModalEvents();
    let modal = document.getElementById("vibe-prompt-modal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.id = "vibe-prompt-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "vibe-modal-title");
    modal.hidden = true;
    modal.style.display = "none";
    modal.className =
      "fixed inset-0 z-50 hidden items-center justify-center p-4 sm:p-6";
    modal.innerHTML = `
      <div id="vibe-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md"></div>
      <div id="vibe-modal-box" class="relative z-10 flex max-h-[86vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
        <div class="flex items-center justify-between border-b border-white/10 bg-zinc-900/70 px-5 py-3">
          <div class="flex items-center gap-2">
            <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
            <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
            <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
            <span id="vibe-modal-meta" class="ml-2 font-mono text-xs text-cyan-300"></span>
          </div>
          <button
            id="modal-close-x"
            type="button"
            aria-label="Close prompt preview"
            class="inline-flex min-h-[34px] min-w-[34px] items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <i data-lucide="x" class="h-4 w-4 pointer-events-none"></i>
          </button>
        </div>

        <div class="border-b border-white/10 px-6 py-4">
          <h2 id="vibe-modal-title" class="font-display text-lg font-bold text-white sm:text-xl"></h2>
          <p id="vibe-modal-scenario-wrap" hidden class="mt-2 text-xs leading-relaxed text-slate-300">
            <span class="font-semibold text-indigo-300">When to use:</span>
            <span id="vibe-modal-scenario"></span>
          </p>
        </div>

        <div class="overflow-y-auto bg-[#030408] p-6">
          <pre id="vibe-modal-code" class="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-slate-200"></pre>
        </div>

        <div class="flex items-center justify-end gap-3 border-t border-white/10 bg-zinc-900/50 px-6 py-4">
          <button
            id="modal-close-btn"
            type="button"
            class="inline-flex min-h-[40px] items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-white/25 hover:text-white whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Close
          </button>
          <button
            id="vibe-modal-copy"
            type="button"
            class="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.45)] transition-opacity hover:opacity-95 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <i data-lucide="copy" class="h-4 w-4 shrink-0 pointer-events-none"></i>
            <span>Copy Prompt</span>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    refreshIcons();

    return modal;
  }

  function openPromptModal(item, triggerEl) {
    const modal = ensurePromptModal();
    modalState.currentText = item.prompt;
    modalState.currentTitle = item.title;
    modalState.lastTrigger = triggerEl || null;

    document.getElementById("vibe-modal-meta").textContent =
      `${item.tag || "Prompt"} · prompt.md`;
    document.getElementById("vibe-modal-title").textContent = item.title;
    document.getElementById("vibe-modal-code").textContent = item.prompt;

    const scenarioWrap = document.getElementById("vibe-modal-scenario-wrap");
    const scenarioText = document.getElementById("vibe-modal-scenario");
    if (item.scenario) {
      scenarioWrap.hidden = false;
      scenarioText.textContent = item.scenario;
    } else {
      scenarioWrap.hidden = true;
      scenarioText.textContent = "";
    }

    modal.hidden = false;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    refreshIcons();
    const closeBtn = document.getElementById("modal-close-x");
    if (closeBtn) closeBtn.focus();
  }

  function getToolIcon(tag) {
    switch (tag) {
      case "AI IDE":
        return "code-2";
      case "App Builder":
        return "sparkles";
      case "UI Generator":
        return "palette";
      case "CLI Agent":
        return "terminal";
      case "Code Reviewer":
        return "git-pull-request";
      case "Static & Edge":
        return "globe";
      case "Full-Stack":
        return "server";
      case "Database":
        return "database";
      case "Auth & Email":
        return "shield-check";
      case "Storage":
        return "hard-drive";
      case "UI/UX":
        return "layout-grid";
      case "SaaS":
        return "layers";
      case "Landing Page":
        return "megaphone";
      case "APIs":
        return "webhook";
      case "Chrome Extension":
        return "puzzle";
      case "Mobile App":
        return "smartphone";
      case "Game Dev":
        return "gamepad-2";
      case "Debugging":
        return "bug";
      case "Refactoring":
        return "wand-2";
      case "Security Audit":
        return "shield-alert";
      case "Performance":
        return "gauge";
      case "Anti-Hallucination":
        return "brain-circuit";
      default:
        return "cpu";
    }
  }

  function getPageTheme(pageKey) {
    if (pageKey === "editors") {
      return {
        topBar: "from-violet-500 via-purple-500 to-fuchsia-500",
        leftBar: "from-violet-500 via-purple-500 to-fuchsia-500",
        cardHover:
          "hover:border-fuchsia-400/45 hover:shadow-[0_16px_42px_-10px_rgba(168,85,247,0.42)]",
        expandedBorder: "border-fuchsia-400/55",
        slider:
          "border-fuchsia-400/60 bg-gradient-to-r from-violet-600/35 via-purple-600/30 to-fuchsia-600/35 shadow-[0_0_24px_rgba(192,38,211,0.35)]",
        activeCount: "text-fuchsia-200",
        ctaBtn:
          "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:brightness-110 shadow-lg shadow-purple-500/30 text-white font-semibold focus-visible:ring-fuchsia-300",
        toggleHover: "hover:border-fuchsia-400/55",
        titleHover: "group-hover:text-fuchsia-200",
        promptLabel: "text-fuchsia-300",
        linkColor:
          "text-fuchsia-300 decoration-fuchsia-400/40 hover:text-fuchsia-200",
      };
    }
    if (pageKey === "debugging") {
      return {
        topBar: "from-amber-400 via-orange-500 to-rose-600",
        leftBar: "from-amber-400 via-orange-500 to-rose-600",
        cardHover:
          "hover:border-orange-400/45 hover:shadow-[0_16px_42px_-10px_rgba(249,115,22,0.42)]",
        expandedBorder: "border-amber-400/55",
        slider:
          "border-orange-400/60 bg-gradient-to-r from-amber-500/35 via-orange-500/30 to-rose-600/35 shadow-[0_0_24px_rgba(249,115,22,0.38)]",
        activeCount: "text-amber-200",
        ctaBtn:
          "bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:brightness-110 shadow-lg shadow-orange-500/30 text-white font-semibold focus-visible:ring-amber-300",
        toggleHover: "hover:border-orange-400/55",
        titleHover: "group-hover:text-amber-200",
        promptLabel: "text-amber-300",
        linkColor:
          "text-amber-300 decoration-amber-400/40 hover:text-amber-200",
      };
    }
    if (pageKey === "hosting") {
      return {
        topBar: "from-emerald-400 via-teal-400 to-cyan-400",
        leftBar: "from-emerald-400 via-teal-400 to-cyan-400",
        cardHover:
          "hover:border-emerald-400/45 hover:shadow-[0_16px_42px_-10px_rgba(16,185,129,0.42)]",
        expandedBorder: "border-emerald-400/55",
        slider:
          "border-emerald-400/60 bg-gradient-to-r from-emerald-500/35 via-teal-500/30 to-cyan-500/30 shadow-[0_0_24px_rgba(16,185,129,0.35)]",
        activeCount: "text-emerald-200",
        ctaBtn:
          "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:brightness-110 shadow-lg shadow-emerald-500/30 text-white font-semibold focus-visible:ring-emerald-300",
        toggleHover: "hover:border-emerald-400/55",
        titleHover: "group-hover:text-emerald-200",
        promptLabel: "text-emerald-300",
        linkColor:
          "text-emerald-300 decoration-emerald-400/40 hover:text-emerald-200",
      };
    }
    return {
      topBar: "from-cyan-400 via-sky-500 to-blue-600",
      leftBar: "from-cyan-400 via-sky-500 to-blue-600",
      cardHover:
        "hover:border-cyan-400/45 hover:shadow-[0_16px_42px_-10px_rgba(6,182,212,0.42)]",
      expandedBorder: "border-cyan-400/55",
      slider:
        "border-cyan-400/60 bg-gradient-to-r from-cyan-500/35 via-sky-500/30 to-blue-600/35 shadow-[0_0_24px_rgba(6,182,212,0.35)]",
      activeCount: "text-cyan-200",
      ctaBtn:
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 shadow-lg shadow-purple-500/25 text-white font-semibold focus-visible:ring-pink-300",
      toggleHover: "hover:border-cyan-400/55",
      titleHover: "group-hover:text-cyan-200",
      promptLabel: "text-cyan-300",
      linkColor: "text-cyan-300 decoration-cyan-400/40 hover:text-cyan-200",
    };
  }

  function getCategoryAccent(tag, pricing, pageKey) {
    if (pageKey === "debugging") {
      if (tag === "Security Audit") {
        return {
          iconHalo:
            "border-rose-400/45 bg-gradient-to-br from-rose-500/30 via-pink-500/20 to-orange-500/25 text-rose-200 shadow-[0_0_26px_rgba(244,63,94,0.35)]",
          numBadge:
            "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/30",
          tagPill:
            "bg-gradient-to-r from-rose-500/90 to-pink-600/90 text-white shadow-sm shadow-rose-500/25 border-rose-300/30",
          labelText: "text-rose-300",
          bulletIcon: "text-rose-400",
          tipBox:
            "border-rose-400/30 bg-gradient-to-br from-rose-500/15 to-orange-500/5",
          tipLabel: "text-rose-300",
          scenarioLabel: "text-rose-300",
        };
      }
      if (tag === "Performance") {
        return {
          iconHalo:
            "border-amber-400/45 bg-gradient-to-br from-amber-500/30 via-yellow-500/20 to-orange-500/25 text-amber-200 shadow-[0_0_26px_rgba(245,158,11,0.35)]",
          numBadge:
            "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/30",
          tagPill:
            "bg-gradient-to-r from-amber-500/90 to-orange-600/90 text-white shadow-sm shadow-amber-500/25 border-amber-300/30",
          labelText: "text-amber-300",
          bulletIcon: "text-amber-400",
          tipBox:
            "border-amber-400/30 bg-gradient-to-br from-amber-500/15 to-orange-500/5",
          tipLabel: "text-amber-300",
          scenarioLabel: "text-amber-300",
        };
      }
      if (tag === "Refactoring") {
        return {
          iconHalo:
            "border-orange-400/45 bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-rose-500/25 text-orange-200 shadow-[0_0_26px_rgba(249,115,22,0.35)]",
          numBadge:
            "bg-gradient-to-r from-orange-500 to-rose-600 text-white shadow-md shadow-orange-500/30",
          tagPill:
            "bg-gradient-to-r from-orange-500/90 to-rose-500/90 text-white shadow-sm shadow-orange-500/25 border-orange-300/30",
          labelText: "text-orange-300",
          bulletIcon: "text-orange-400",
          tipBox:
            "border-orange-400/30 bg-gradient-to-br from-orange-500/15 to-amber-500/5",
          tipLabel: "text-orange-300",
          scenarioLabel: "text-orange-300",
        };
      }
      if (tag === "Anti-Hallucination") {
        return {
          iconHalo:
            "border-fuchsia-400/45 bg-gradient-to-br from-rose-500/30 via-fuchsia-500/20 to-amber-500/25 text-rose-200 shadow-[0_0_26px_rgba(225,29,72,0.35)]",
          numBadge:
            "bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white shadow-md shadow-rose-500/30",
          tagPill:
            "bg-gradient-to-r from-rose-600/90 via-pink-600/90 to-amber-500/90 text-white shadow-sm shadow-rose-500/25 border-rose-300/30",
          labelText: "text-amber-300",
          bulletIcon: "text-orange-400",
          tipBox:
            "border-amber-400/30 bg-gradient-to-br from-amber-500/15 to-rose-500/10",
          tipLabel: "text-amber-300",
          scenarioLabel: "text-amber-300",
        };
      }
      return {
        iconHalo:
          "border-amber-400/45 bg-gradient-to-br from-amber-500/30 via-orange-500/20 to-rose-500/25 text-amber-200 shadow-[0_0_26px_rgba(249,115,22,0.35)]",
        numBadge:
          "bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-md shadow-orange-500/30",
        tagPill:
          "bg-gradient-to-r from-amber-500/90 to-rose-600/90 text-white shadow-sm shadow-orange-500/25 border-amber-300/30",
        labelText: "text-amber-300",
        bulletIcon: "text-amber-400",
        tipBox:
          "border-amber-400/30 bg-gradient-to-br from-amber-500/15 to-rose-500/5",
        tipLabel: "text-amber-300",
        scenarioLabel: "text-amber-300",
      };
    }

    if (
      pageKey === "hosting" ||
      tag === "Static & Edge" ||
      tag === "Storage" ||
      tag === "Database" ||
      tag === "Auth & Email"
    ) {
      if (tag === "Database") {
        return {
          iconHalo:
            "border-teal-400/45 bg-gradient-to-br from-teal-500/30 via-emerald-500/20 to-cyan-500/25 text-teal-200 shadow-[0_0_26px_rgba(20,184,166,0.35)]",
          numBadge:
            "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-md shadow-teal-500/30",
          tagPill:
            "bg-gradient-to-r from-teal-500/90 to-cyan-600/90 text-white shadow-sm shadow-teal-500/25 border-teal-300/30",
          labelText: "text-teal-300",
          bulletIcon: "text-teal-400",
          tipBox:
            "border-teal-400/30 bg-gradient-to-br from-teal-500/15 to-emerald-500/5",
          tipLabel: "text-teal-300",
          scenarioLabel: "text-teal-300",
        };
      }
      return {
        iconHalo:
          "border-emerald-400/45 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-cyan-500/25 text-emerald-200 shadow-[0_0_26px_rgba(16,185,129,0.35)]",
        numBadge:
          "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/30",
        tagPill:
          "bg-gradient-to-r from-emerald-500/90 to-teal-500/90 text-white shadow-sm shadow-emerald-500/25 border-emerald-300/30",
        labelText: "text-emerald-300",
        bulletIcon: "text-emerald-400",
        tipBox:
          "border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 to-teal-500/5",
        tipLabel: "text-emerald-300",
        scenarioLabel: "text-emerald-300",
      };
    }

    if (
      pageKey === "editors" ||
      [
        "AI IDE",
        "App Builder",
        "UI Generator",
        "CLI Agent",
        "Code Reviewer",
      ].includes(tag)
    ) {
      if (tag === "App Builder" || tag === "UI Generator") {
        return {
          iconHalo:
            "border-fuchsia-400/45 bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-pink-500/25 text-fuchsia-200 shadow-[0_0_26px_rgba(217,70,239,0.35)]",
          numBadge:
            "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-md shadow-fuchsia-500/30",
          tagPill:
            "bg-gradient-to-r from-fuchsia-600/90 to-pink-600/90 text-white shadow-sm shadow-fuchsia-500/25 border-fuchsia-300/30",
          labelText: "text-fuchsia-300",
          bulletIcon: "text-fuchsia-400",
          tipBox:
            "border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-500/15 to-violet-500/5",
          tipLabel: "text-fuchsia-300",
          scenarioLabel: "text-fuchsia-300",
        };
      }
      return {
        iconHalo:
          "border-violet-400/45 bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-fuchsia-500/25 text-violet-200 shadow-[0_0_26px_rgba(139,92,246,0.35)]",
        numBadge:
          "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/30",
        tagPill:
          "bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 text-white shadow-sm shadow-violet-500/25 border-violet-300/30",
        labelText: "text-violet-300",
        bulletIcon: "text-violet-400",
        tipBox:
          "border-violet-400/30 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/5",
        tipLabel: "text-violet-300",
        scenarioLabel: "text-violet-300",
      };
    }

    if (["UI/UX", "SaaS", "Landing Page"].includes(tag)) {
      return {
        iconHalo:
          "border-indigo-400/45 bg-gradient-to-br from-cyan-500/25 via-indigo-500/25 to-purple-500/25 text-cyan-200 shadow-[0_0_26px_rgba(99,102,241,0.35)]",
        numBadge:
          "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/30",
        tagPill:
          "bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-pink-500/90 text-white shadow-sm shadow-purple-500/25 border-purple-300/30",
        labelText: "text-cyan-300",
        bulletIcon: "text-cyan-400",
        tipBox:
          "border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 to-blue-500/5",
        tipLabel: "text-cyan-300",
        scenarioLabel: "text-cyan-300",
      };
    }

    return {
      iconHalo:
        "border-cyan-400/45 bg-gradient-to-br from-cyan-500/30 via-sky-500/20 to-blue-600/25 text-cyan-200 shadow-[0_0_26px_rgba(6,182,212,0.35)]",
      numBadge:
        "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30",
      tagPill:
        "bg-gradient-to-r from-cyan-500/90 to-blue-600/90 text-white shadow-sm shadow-cyan-500/25 border-cyan-300/30",
      labelText: "text-cyan-300",
      bulletIcon: "text-cyan-400",
      tipBox:
        "border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 to-blue-500/5",
      tipLabel: "text-cyan-300",
      scenarioLabel: "text-cyan-300",
    };
  }

  function getPricingBadge(pricing) {
    if (pricing === "Free" || pricing === "Free Tier") {
      return "border-emerald-300/40 bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/25";
    }
    if (pricing === "Paid") {
      return "border-amber-300/40 bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md shadow-amber-500/25";
    }
    return "border-cyan-300/40 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25";
  }

  function initHomePage() {
    const counts = {
      editors: VIBE_DATA.editors.length,
      prompts: VIBE_DATA.prompts.length,
      debugging: VIBE_DATA.debugging.length,
      hosting: VIBE_DATA.hosting.length,
    };
    counts.total =
      counts.editors + counts.prompts + counts.debugging + counts.hosting;

    document.querySelectorAll("[data-home-count]").forEach((el) => {
      const key = el.getAttribute("data-home-count");
      if (key && counts[key] !== undefined) {
        el.textContent = String(counts[key]);
      }
    });

    const heroSearch = document.getElementById("hero-search-input");
    const heroResults = document.getElementById("hero-search-results");
    const heroClear = document.getElementById("hero-search-clear");
    if (!heroSearch || !heroResults) return;

    const allIndex = [
      ...VIBE_DATA.editors.map((x) => ({
        title: x.name,
        meta: `AI Editors · ${x.tag} · ${x.pricing}`,
        href: `editors.html?q=${encodeURIComponent(x.name)}`,
        search:
          `${x.name} ${x.tag} ${x.pricing} ${x.desc} ${x.bestFor || ""} ${x.overview || ""}`.toLowerCase(),
      })),
      ...VIBE_DATA.prompts.map((x) => ({
        title: x.title,
        meta: `System Prompts · ${x.tag}`,
        href: `prompts.html?q=${encodeURIComponent(x.title)}`,
        search:
          `${x.title} ${x.tag} ${x.summary || ""} ${x.prompt}`.toLowerCase(),
      })),
      ...VIBE_DATA.debugging.map((x) => ({
        title: x.title,
        meta: `Debugging · ${x.tag}`,
        href: `debugging.html?q=${encodeURIComponent(x.title)}`,
        search:
          `${x.title} ${x.tag} ${x.scenario} ${x.summary || ""} ${x.prompt}`.toLowerCase(),
      })),
      ...VIBE_DATA.hosting.map((x) => ({
        title: x.name,
        meta: `Free Hosting · ${x.tag}`,
        href: `hosting.html?q=${encodeURIComponent(x.name)}`,
        search:
          `${x.name} ${x.tag} ${x.freeLimit} ${x.desc} ${x.overview || ""}`.toLowerCase(),
      })),
    ];

    function renderHeroSearch() {
      const q = heroSearch.value.trim().toLowerCase();
      if (heroClear) heroClear.classList.toggle("hidden", q.length === 0);

      if (!q) {
        heroResults.hidden = true;
        heroResults.innerHTML = "";
        return;
      }

      const matches = allIndex
        .filter((item) => item.search.includes(q))
        .slice(0, 6);
      heroResults.hidden = false;

      if (matches.length === 0) {
        heroResults.innerHTML = `
          <div class="px-5 py-4 text-sm text-slate-400">
            No direct matches for "<span class="text-white">${escapeHtml(heroSearch.value.trim())}</span>". Try "Cursor", "Stripe", "RLS", or "Cloudflare".
          </div>
        `;
        return;
      }

      heroResults.innerHTML = matches
        .map(
          (m, idx) => `
          <a
            href="${escapeHtml(m.href)}"
            data-hero-idx="${idx}"
            class="flex items-center justify-between gap-4 border-b border-white/5 px-5 py-3.5 text-left transition-colors last:border-b-0 hover:bg-white/[0.06]"
          >
            <div class="min-w-0">
              <p class="text-sm font-semibold leading-snug text-white">${escapeHtml(m.title)}</p>
              <p class="mt-0.5 text-xs leading-snug text-slate-400">${escapeHtml(m.meta)}</p>
            </div>
            <i data-lucide="arrow-up-right" class="h-4 w-4 text-cyan-300 shrink-0"></i>
          </a>
        `,
        )
        .join("");
      refreshIcons();
    }

    heroSearch.addEventListener("input", renderHeroSearch);
    heroSearch.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const firstLink = heroResults.querySelector("a");
        if (firstLink) {
          window.location.href = firstLink.getAttribute("href");
        }
      }
      if (e.key === "Escape") {
        heroSearch.value = "";
        renderHeroSearch();
        heroSearch.blur();
      }
    });

    if (heroClear) {
      heroClear.addEventListener("click", () => {
        heroSearch.value = "";
        heroSearch.focus();
        renderHeroSearch();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (
        e.key === "/" &&
        document.activeElement !== heroSearch &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(
          document.activeElement?.tagName || "",
        )
      ) {
        e.preventDefault();
        heroSearch.focus();
      }
    });
  }

  function renderDetailsDrawerBody(item, accent, type, theme) {
    const overview = escapeHtml(
      item.overview || item.desc || item.summary || "",
    );
    const features = Array.isArray(item.features) ? item.features : [];
    const proTip = escapeHtml(item.proTip || "");

    const isSpecCard = type === "editors" || type === "hosting";

    const keyFeaturesHtml =
      features.length > 0
        ? `
        <div>
          <h3 class="font-mono text-[11px] font-semibold uppercase tracking-wider ${accent.labelText}">
            Key Features
          </h3>
          <ul class="mt-2 space-y-2">
            ${features
              .map(
                (feat) => `
              <li class="flex items-start gap-2.5 text-xs leading-relaxed text-slate-300 sm:text-[13px]">
                <i data-lucide="check-circle-2" class="mt-0.5 h-3.5 w-3.5 shrink-0 ${accent.bulletIcon}"></i>
                <span>${escapeHtml(feat)}</span>
              </li>
            `,
              )
              .join("")}
          </ul>
        </div>
      `
        : "";

    let leftColumnHtml = `
      <div>
        <h3 class="font-mono text-[11px] font-semibold uppercase tracking-wider ${accent.labelText}">
          Detailed Overview
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-200">
          ${overview}
        </p>
      </div>
    `;

    let rightColumnHtml = "";
    if (type === "editors") {
      if (item.bestFor) {
        leftColumnHtml += `
          <div class="rounded-xl border border-white/10 bg-zinc-900/55 px-4 py-3">
            <h3 class="font-mono text-[11px] font-semibold uppercase tracking-wider ${accent.labelText}">
              Ideal Use Case
            </h3>
            <p class="mt-1.5 text-xs leading-relaxed text-slate-200 sm:text-[13px]">
              ${escapeHtml(item.bestFor)}
            </p>
          </div>
        `;
      }

      rightColumnHtml = `
        <div>
          <h3 class="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider ${accent.labelText}">
            Platform Specifications
          </h3>
          <div class="grid grid-cols-1 gap-3 rounded-xl border border-white/15 bg-zinc-900/75 p-4 text-xs sm:grid-cols-2">
            <div>
              <span class="text-slate-400">Category:</span>
              <span class="ml-1.5 font-medium text-slate-100">${escapeHtml(item.tag)}</span>
            </div>
            <div>
              <span class="text-slate-400">Pricing Tier:</span>
              <span class="ml-1.5 font-medium text-slate-100">${escapeHtml(item.pricing)}</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-slate-400">Official Site:</span>
              <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="ml-1.5 font-mono ${theme.linkColor} underline underline-offset-4 break-all">${escapeHtml(item.url)}</a>
            </div>
          </div>
        </div>
        ${keyFeaturesHtml}
      `;
    } else if (type === "hosting") {
      rightColumnHtml = `
        <div>
          <h3 class="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider ${accent.labelText}">
            Cloud Tier Specifications
          </h3>
          <div class="grid grid-cols-1 gap-3 rounded-xl border border-white/15 bg-zinc-900/75 p-4 text-xs sm:grid-cols-2">
            <div>
              <span class="text-slate-400">Stack Layer:</span>
              <span class="ml-1.5 font-medium text-slate-100">${escapeHtml(item.tag)}</span>
            </div>
            <div>
              <span class="text-slate-400">Official Site:</span>
              <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="ml-1.5 font-mono ${theme.linkColor} underline underline-offset-4 break-all">${escapeHtml(item.url)}</a>
            </div>
            <div class="sm:col-span-2">
              <span class="text-slate-400">Free-Tier Spec:</span>
              <span class="ml-1.5 font-mono text-emerald-300">${escapeHtml(item.freeLimit)}</span>
            </div>
          </div>
        </div>
        ${keyFeaturesHtml}
      `;
    } else {
      leftColumnHtml += keyFeaturesHtml;

      const fileLabel = `${item.id}.prompt`;
      rightColumnHtml = `
        <div>
          <div class="mb-2 flex items-center justify-between gap-2">
            <p class="font-mono text-[11px] font-semibold uppercase tracking-wider ${theme.promptLabel}">Full Prompt</p>
            <button
              type="button"
              data-preview-id="${escapeHtml(item.id)}"
              class="preview-btn inline-flex min-h-[32px] items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-slate-100 transition-colors ${theme.toggleHover} hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <i data-lucide="maximize-2" class="h-3 w-3 shrink-0"></i>
              <span>Expand Modal</span>
            </button>
          </div>
          <div class="overflow-hidden rounded-xl border border-white/15 bg-[#05060B] shadow-inner">
            <div class="flex items-center justify-between border-b border-white/10 bg-zinc-950/90 px-3.5 py-2">
              <div class="flex items-center gap-1.5" aria-hidden="true">
                <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
              </div>
              <span class="font-mono text-[11px] text-slate-400">${escapeHtml(fileLabel)}</span>
            </div>
            <div class="max-h-80 overflow-y-auto px-4 py-3.5">
              <pre class="whitespace-pre-wrap break-words font-mono text-[12px] leading-relaxed text-slate-200">${escapeHtml(item.prompt)}</pre>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="accordion-panel" data-panel-for="${escapeHtml(item.id)}" data-open="false">
        <div class="accordion-inner">
          <div class="grid grid-cols-1 gap-6 border-t border-white/10 bg-zinc-950/55 p-5 sm:p-6 lg:grid-cols-12">
            <!-- Left Column (40%) -->
            <div class="space-y-5 lg:col-span-5">
              ${leftColumnHtml}
            </div>

            <!-- Right Column (60%) -->
            <div class="${isSpecCard ? "space-y-5 " : ""}lg:col-span-7">
              ${rightColumnHtml}
            </div>

            <!-- Full-Width Bottom Banner: Pro Vibe-Coding Tip -->
            ${
              proTip
                ? `
              <div class="lg:col-span-12">
                <div class="flex flex-col gap-2 rounded-xl border ${accent.tipBox} px-4 py-3.5 sm:flex-row sm:items-start sm:gap-3.5">
                  <p class="flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider shrink-0 sm:pt-0.5 ${accent.tipLabel}">
                    <i data-lucide="lightbulb" class="h-3.5 w-3.5 shrink-0"></i>
                    <span>Pro Vibe-Coding Tip</span>
                  </p>
                  <p class="text-xs leading-relaxed text-slate-200 sm:text-[13px]">
                    ${proTip}
                  </p>
                </div>
              </div>
            `
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }

  function renderEditorCard(item) {
    const theme = getPageTheme("editors");
    const iconName = getToolIcon(item.tag);
    const badgeCls = getPricingBadge(item.pricing);
    const accent = getCategoryAccent(item.tag, item.pricing, "editors");

    return `
      <article
        data-card-id="${escapeHtml(item.id)}"
        data-expanded="false"
        class="spotlight-card card-shell group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.01] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_10px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 ${theme.cardHover}"
      >
        <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${theme.topBar} opacity-85"></div>
        <div aria-hidden="true" class="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b ${theme.leftBar} opacity-75"></div>

        <!-- Horizontal Wide Directory Header -->
        <div class="relative z-10 grid grid-cols-1 gap-x-4 gap-y-3 p-5 pl-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div class="flex min-w-0 items-start gap-4 md:col-start-1 md:row-start-1">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-200 group-hover:scale-105 ${accent.iconHalo}">
              <i data-lucide="${iconName}" class="h-5 w-5"></i>
            </div>

            <div class="flex min-w-0 flex-1 flex-wrap items-center gap-2 self-center">
              <h2 class="font-display text-base font-bold leading-snug text-white transition-colors ${theme.titleHover} sm:text-lg">
                ${escapeHtml(item.name)}
              </h2>
              <span class="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap shrink-0 ${accent.tagPill}">
                ${escapeHtml(item.tag)}
              </span>
              <span class="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap shrink-0 ${badgeCls}">
                ${escapeHtml(item.pricing)}
              </span>
            </div>
          </div>

          <div class="min-w-0 md:col-span-2 md:row-start-2 md:pl-[3.75rem]">
            <p class="text-sm leading-relaxed text-slate-300">
              ${escapeHtml(item.desc)}
            </p>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-2.5 pt-0.5 shrink-0 md:col-start-2 md:row-start-1 md:flex-nowrap md:items-start md:justify-end md:pt-0">
            <button
              type="button"
              data-toggle-id="${escapeHtml(item.id)}"
              aria-expanded="false"
              class="accordion-toggle inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-100 transition-colors ${theme.toggleHover} hover:bg-white/[0.12] hover:text-white whitespace-nowrap shrink-0 sm:flex-initial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
            >
              <span>Details &amp; Guide</span>
              <i data-lucide="chevron-down" class="accordion-chevron h-4 w-4 transition-transform duration-200 shrink-0"></i>
            </button>

            <a
              href="${escapeHtml(item.url)}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs transition-all whitespace-nowrap shrink-0 sm:flex-initial focus-visible:outline-none focus-visible:ring-2 ${theme.ctaBtn}"
            >
              <span>Visit Platform</span>
              <i data-lucide="arrow-up-right" class="h-4 w-4 shrink-0"></i>
            </a>
          </div>
        </div>

        <div class="relative z-10">
          ${renderDetailsDrawerBody(item, accent, "editors", theme)}
        </div>
      </article>
    `;
  }

  function renderHostingCard(item) {
    const theme = getPageTheme("hosting");
    const iconName = getToolIcon(item.tag);
    const accent = getCategoryAccent(item.tag, "Free", "hosting");

    return `
      <article
        data-card-id="${escapeHtml(item.id)}"
        data-expanded="false"
        class="spotlight-card card-shell group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.01] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_10px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 ${theme.cardHover}"
      >
        <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${theme.topBar} opacity-85"></div>
        <div aria-hidden="true" class="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b ${theme.leftBar} opacity-75"></div>

        <!-- Horizontal Wide Directory Header -->
        <div class="relative z-10 grid grid-cols-1 gap-x-4 gap-y-3 p-5 pl-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div class="flex min-w-0 items-start gap-4 md:col-start-1 md:row-start-1">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-200 group-hover:scale-105 ${accent.iconHalo}">
              <i data-lucide="${iconName}" class="h-5 w-5"></i>
            </div>

            <div class="flex min-w-0 flex-1 flex-wrap items-center gap-2 self-center">
              <h2 class="font-display text-base font-bold leading-snug text-white transition-colors ${theme.titleHover} sm:text-lg">
                ${escapeHtml(item.name)}
              </h2>
              <span class="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap shrink-0 ${accent.tagPill}">
                ${escapeHtml(item.tag)}
              </span>
              <span class="rounded-full border border-emerald-300/40 bg-gradient-to-r from-emerald-500 to-teal-500 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-md shadow-emerald-500/25 whitespace-nowrap shrink-0">
                Free
              </span>
            </div>
          </div>

          <div class="min-w-0 md:col-span-2 md:row-start-2 md:pl-[3.75rem]">
            <p class="text-sm leading-relaxed text-slate-300">
              ${escapeHtml(item.desc)}
            </p>

            <p class="mt-2 font-mono text-[11px] leading-relaxed text-emerald-300 tabular-nums">
              Free Tier: ${escapeHtml(item.freeLimit)}
            </p>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-2.5 pt-0.5 shrink-0 md:col-start-2 md:row-start-1 md:flex-nowrap md:items-start md:justify-end md:pt-0">
            <button
              type="button"
              data-toggle-id="${escapeHtml(item.id)}"
              aria-expanded="false"
              class="accordion-toggle inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-100 transition-colors ${theme.toggleHover} hover:bg-white/[0.12] hover:text-white whitespace-nowrap shrink-0 sm:flex-initial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span>Details &amp; Guide</span>
              <i data-lucide="chevron-down" class="accordion-chevron h-4 w-4 transition-transform duration-200 shrink-0"></i>
            </button>

            <a
              href="${escapeHtml(item.url)}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs transition-all whitespace-nowrap shrink-0 sm:flex-initial focus-visible:outline-none focus-visible:ring-2 ${theme.ctaBtn}"
            >
              <span>Visit Platform</span>
              <i data-lucide="arrow-up-right" class="h-4 w-4 shrink-0"></i>
            </a>
          </div>
        </div>

        <div class="relative z-10">
          ${renderDetailsDrawerBody(item, accent, "hosting", theme)}
        </div>
      </article>
    `;
  }

  function renderPromptCard(item, index, pageKey) {
    const theme = getPageTheme(pageKey);
    const num = String(index + 1).padStart(2, "0");
    const iconName = getToolIcon(item.tag);
    const accent = getCategoryAccent(item.tag, "", pageKey);
    const summaryText =
      item.summary || item.prompt.split("\n").slice(0, 2).join(" ");

    return `
      <article
        data-card-id="${escapeHtml(item.id)}"
        data-expanded="false"
        class="spotlight-card card-shell group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.01] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_10px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 ${theme.cardHover}"
      >
        <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${theme.topBar} opacity-85"></div>
        <div aria-hidden="true" class="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b ${theme.leftBar} opacity-75"></div>

        <!-- Horizontal Wide Directory Header -->
        <div class="relative z-10 grid grid-cols-1 gap-x-4 gap-y-3 p-5 pl-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div class="flex min-w-0 items-start gap-4 md:col-start-1 md:row-start-1">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-200 group-hover:scale-105 ${accent.iconHalo}">
              <i data-lucide="${iconName}" class="h-5 w-5"></i>
            </div>

            <div class="flex min-w-0 flex-1 flex-wrap items-center gap-2 self-center">
              <span class="inline-flex items-center rounded-lg px-2 py-0.5 font-mono text-[11px] font-bold tabular-nums ${accent.numBadge}">${num}</span>
              <h2 class="font-display text-base font-bold leading-snug text-white transition-colors ${theme.titleHover} sm:text-lg">
                ${escapeHtml(item.title)}
              </h2>
              <span class="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap shrink-0 ${accent.tagPill}">
                ${escapeHtml(item.tag)}
              </span>
            </div>
          </div>

          <div class="min-w-0 md:col-span-2 md:row-start-2 md:pl-[3.75rem]">
            <p class="text-sm leading-relaxed text-slate-300">
              ${escapeHtml(summaryText)}
            </p>

            ${
              item.scenario
                ? `<p class="mt-2 text-xs leading-relaxed text-slate-300"><span class="font-semibold ${accent.scenarioLabel}">When to use:</span> ${escapeHtml(
                    item.scenario,
                  )}</p>`
                : ""
            }
          </div>

          <div class="flex flex-wrap items-center justify-between gap-2.5 pt-0.5 shrink-0 md:col-start-2 md:row-start-1 md:flex-nowrap md:items-start md:justify-end md:pt-0">
            <button
              type="button"
              data-toggle-id="${escapeHtml(item.id)}"
              aria-expanded="false"
              class="accordion-toggle inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-100 transition-colors ${theme.toggleHover} hover:bg-white/[0.12] hover:text-white whitespace-nowrap shrink-0 sm:flex-initial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span>Details &amp; Guide</span>
              <i data-lucide="chevron-down" class="accordion-chevron h-4 w-4 transition-transform duration-200 shrink-0"></i>
            </button>

            <button
              type="button"
              data-copy-id="${escapeHtml(item.id)}"
              class="copy-btn inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs transition-all whitespace-nowrap shrink-0 sm:flex-initial focus-visible:outline-none focus-visible:ring-2 ${theme.ctaBtn}"
            >
              <i data-lucide="copy" class="h-4 w-4 shrink-0"></i>
              <span>Copy Prompt</span>
            </button>
          </div>
        </div>

        <div class="relative z-10">
          ${renderDetailsDrawerBody(item, accent, pageKey, theme)}
        </div>
      </article>
    `;
  }

  function initCollectionPage(pageKey) {
    const dataset = VIBE_DATA[pageKey];
    if (!Array.isArray(dataset)) return;

    const gridEl = document.getElementById("grid-container");
    const filterBar = document.getElementById("filter-bar");
    const searchInput = document.getElementById("search-input");
    const clearSearchBtn = document.getElementById("clear-search");
    const countEl = document.getElementById("result-count");
    const liveStatsEl = document.getElementById("live-stats-pill");
    const emptyEl = document.getElementById("empty-state");
    const resetBtn = document.getElementById("reset-filters");

    if (!gridEl) return;

    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get("q") || "";
    if (searchInput && initialQuery) {
      searchInput.value = initialQuery;
    }

    const tags = [
      "All",
      ...Array.from(new Set(dataset.map((item) => item.tag))),
    ];
    const state = {
      tag: "All",
      query: initialQuery,
      expandedId: null,
    };

    function matches(item, q) {
      if (state.tag !== "All" && item.tag !== state.tag) return false;
      if (!q) return true;
      return Object.values(item)
        .map((v) => (Array.isArray(v) ? v.join(" ") : v))
        .join(" ")
        .toLowerCase()
        .includes(q);
    }

    function positionFilterSlider() {
      if (!filterBar) return;
      const slider = document.getElementById("filter-slider");
      const activePill = filterBar.querySelector(
        '.filter-pill[aria-selected="true"]',
      );
      if (!slider || !activePill) return;
      slider.style.width = `${activePill.offsetWidth}px`;
      slider.style.height = `${activePill.offsetHeight}px`;
      slider.style.transform = `translate3d(${activePill.offsetLeft}px, ${activePill.offsetTop}px, 0)`;
      slider.style.opacity = "1";
    }

    const pageTheme = getPageTheme(pageKey);

    function renderFilterBar(q) {
      if (!filterBar) return;

      const queryMatches = (item) =>
        !q ||
        Object.values(item)
          .map((v) => (Array.isArray(v) ? v.join(" ") : v))
          .join(" ")
          .toLowerCase()
          .includes(q);

      const pillsHtml = tags
        .map((tag) => {
          const count =
            tag === "All"
              ? dataset.filter(queryMatches).length
              : dataset.filter((item) => item.tag === tag && queryMatches(item))
                  .length;

          const active = state.tag === tag;
          const cls = active
            ? "filter-pill relative z-10 inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            : "filter-pill relative z-10 inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium text-slate-400 transition-colors hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

          return `
            <button
              type="button"
              role="tab"
              aria-selected="${active ? "true" : "false"}"
              data-tag="${escapeHtml(tag)}"
              class="${cls}"
            >
              <span>${escapeHtml(tag)}</span>
              <span class="font-mono text-[11px] ${active ? pageTheme.activeCount : "text-slate-500"} tabular-nums">${count}</span>
            </button>
          `;
        })
        .join("");

      filterBar.innerHTML = `
        <span
          id="filter-slider"
          aria-hidden="true"
          class="pointer-events-none absolute left-0 top-0 rounded-xl border ${pageTheme.slider} opacity-0 transition-[transform,width,height,opacity] duration-250 ease-out"
        ></span>
        ${pillsHtml}
      `;

      requestAnimationFrame(positionFilterSlider);
    }

    function setCardExpanded(card, open) {
      if (!card) return;
      const panel = card.querySelector(".accordion-panel");
      const toggle = card.querySelector(".accordion-toggle");
      const chevron = card.querySelector(".accordion-chevron");

      card.setAttribute("data-expanded", open ? "true" : "false");
      if (open) {
        card.classList.add(pageTheme.expandedBorder);
        card.classList.remove("border-white/15");
      } else {
        card.classList.remove(pageTheme.expandedBorder);
        card.classList.add("border-white/15");
      }

      if (panel) panel.setAttribute("data-open", open ? "true" : "false");
      if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (chevron) {
        chevron.classList.toggle("rotate-180", open);
      }
    }

    function toggleAccordion(id) {
      const targetCard = gridEl.querySelector(
        `[data-card-id="${CSS.escape(id)}"]`,
      );
      if (!targetCard) return;

      const isCurrentlyOpen = state.expandedId === id;

      if (state.expandedId && state.expandedId !== id) {
        const prevCard = gridEl.querySelector(
          `[data-card-id="${CSS.escape(state.expandedId)}"]`,
        );
        setCardExpanded(prevCard, false);
      }

      if (isCurrentlyOpen) {
        setCardExpanded(targetCard, false);
        state.expandedId = null;
      } else {
        setCardExpanded(targetCard, true);
        state.expandedId = id;
      }

      if (typeof window !== "undefined" && window.ScrollTrigger) {
        setTimeout(() => window.ScrollTrigger.refresh(), 320);
      }
    }

    let hasRenderedOnce = false;

    function render() {
      const q = state.query.trim().toLowerCase();
      renderFilterBar(q);

      const filtered = dataset.filter((item) => matches(item, q));

      if (
        state.expandedId &&
        !filtered.some((item) => item.id === state.expandedId)
      ) {
        state.expandedId = null;
      }

      if (countEl) {
        countEl.textContent = `${filtered.length} of ${dataset.length} items`;
      }
      if (liveStatsEl) {
        const categoryCount = tags.length - 1;
        liveStatsEl.textContent =
          filtered.length === dataset.length
            ? `${dataset.length} Resources · ${categoryCount} Categories`
            : `${filtered.length} Shown · ${dataset.length} Total`;
      }
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle("hidden", q.length === 0);
      }

      if (filtered.length === 0) {
        gridEl.innerHTML = "";
        if (emptyEl) emptyEl.hidden = false;
        refreshIcons();
        return;
      }

      if (emptyEl) emptyEl.hidden = true;

      if (pageKey === "editors") {
        gridEl.innerHTML = filtered.map(renderEditorCard).join("");
      } else if (pageKey === "hosting") {
        gridEl.innerHTML = filtered.map(renderHostingCard).join("");
      } else {
        gridEl.innerHTML = filtered
          .map((item, idx) => renderPromptCard(item, idx, pageKey))
          .join("");
      }

      if (state.expandedId) {
        const openCard = gridEl.querySelector(
          `[data-card-id="${CSS.escape(state.expandedId)}"]`,
        );
        setCardExpanded(openCard, true);
      }

      refreshIcons();
      animateCollectionGrid(gridEl, hasRenderedOnce);
      hasRenderedOnce = true;
    }

    if (filterBar) {
      filterBar.addEventListener("click", (e) => {
        const pill = e.target.closest(".filter-pill");
        if (!pill) return;
        const nextTag = pill.getAttribute("data-tag") || "All";
        if (nextTag === state.tag) return;
        state.tag = nextTag;
        render();
        requestAnimationFrame(() => {
          const active = filterBar.querySelector(
            '.filter-pill[aria-selected="true"]',
          );
          if (active && typeof active.scrollIntoView === "function") {
            active.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }
        });
      });

      window.addEventListener("resize", () => {
        requestAnimationFrame(positionFilterSlider);
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.query = e.target.value;
        render();
      });

      document.addEventListener("keydown", (e) => {
        if (
          e.key === "/" &&
          document.activeElement !== searchInput &&
          !["INPUT", "TEXTAREA", "SELECT"].includes(
            document.activeElement?.tagName || "",
          )
        ) {
          e.preventDefault();
          searchInput.focus();
        }
      });
    }

    if (clearSearchBtn && searchInput) {
      clearSearchBtn.addEventListener("click", () => {
        state.query = "";
        searchInput.value = "";
        searchInput.focus();
        render();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.tag = "All";
        state.query = "";
        state.expandedId = null;
        if (searchInput) searchInput.value = "";
        render();
      });
    }

    gridEl.addEventListener("click", async (e) => {
      const toggleBtn = e.target.closest(".accordion-toggle");
      if (toggleBtn) {
        const id = toggleBtn.getAttribute("data-toggle-id");
        if (id) toggleAccordion(id);
        return;
      }

      const previewBtn = e.target.closest(".preview-btn");
      if (previewBtn) {
        const id = previewBtn.getAttribute("data-preview-id");
        const item = dataset.find((x) => x.id === id);
        if (item) openPromptModal(item, previewBtn);
        return;
      }

      const copyBtn = e.target.closest(".copy-btn");
      if (!copyBtn) return;

      const id = copyBtn.getAttribute("data-copy-id");
      const item = dataset.find((x) => x.id === id);
      if (!item || !item.prompt) return;

      const ok = await copyToClipboard(item.prompt);
      if (!ok) return;

      const original = copyBtn.dataset.originalHtml || copyBtn.innerHTML;
      const originalClass = copyBtn.dataset.originalClass || copyBtn.className;
      copyBtn.dataset.originalHtml = original;
      copyBtn.dataset.originalClass = originalClass;
      if (copyBtn._timer) clearTimeout(copyBtn._timer);

      copyBtn.className =
        "copy-btn inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-emerald-400/60 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 px-4 py-2 text-xs font-semibold text-emerald-200 shadow-lg shadow-emerald-500/25 transition-all whitespace-nowrap shrink-0 sm:flex-initial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400";
      copyBtn.innerHTML = `
        <i data-lucide="check" class="h-4 w-4 text-emerald-300 shrink-0"></i>
        <span>Copied!</span>
      `;
      refreshIcons();
      showToast(`Copied "${item.title}" to clipboard`);

      copyBtn._timer = setTimeout(() => {
        copyBtn.className = originalClass;
        copyBtn.innerHTML = original;
        refreshIcons();
      }, 2000);
    });

    render();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initSpotlightCards();
    initMobileNav();
    initModalEvents();
    const page = document.body?.dataset?.page || "";
    if (page === "home") {
      initHomePage();
    } else if (["editors", "prompts", "debugging", "hosting"].includes(page)) {
      initCollectionPage(page);
    }
    initSiteAnimations(page);
    refreshIcons();
    window.addEventListener("load", () => {
      refreshIcons();
      if (typeof window !== "undefined" && window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    });
  });
})(typeof window !== "undefined" ? window : globalThis);
