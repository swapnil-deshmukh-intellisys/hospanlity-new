# StayHub Hospitality Management System - Project Management Workbook

Generated on: 2026-06-25  
Project: StayHub Hospitality Management System  
Baseline assumption: current repo is a React/Vite frontend prototype with a partially scaffolded Node/Express/MySQL backend. Future updates should edit this workbook instead of recreating it from scratch.
Latest update: 2026-06-24 to 2026-06-25 frontend progress added for Customers, Rooms, Check-in/out, Housekeeping, and booking modal risk items.

## Step 1 - Project Analysis

| Area | Current Findings |
|---|---|
| Product | Hotel/hospitality management system for hotel owner/manager operations |
| Frontend | React 18, Vite, React Router, React Icons, Recharts used in dashboard/housekeeping |
| Backend | Node.js, Express, MySQL/MySQL2, bcryptjs, JWT dependency present, CORS |
| Current Running Backend | `backend/server.js` exposes only `/register` and `/login` with plaintext password flow |
| Scaffolded Backend | Route/controller files exist for admin, users, hotels, rooms, bookings, reviews, dashboard, but most are empty or not wired |
| Database | No migrations/schema files in repo; code references `users`, `admins`, `hotels`, `rooms`, `bookings` |
| Auth | Frontend currently uses `localStorage`; backend has separate incomplete auth implementations |
| Integrations | Avatar image service, local image assets, MySQL planned, Google login button UI only |
| User Roles | Guest/customer, hotel owner/manager, staff, admin implied |
| Testing | No test framework or tests found |
| Deployment | No CI/CD, environment examples, Docker, hosting config, or production build pipeline found |

## Feature Breakdown

| Feature | Page | Module | Components | Current State | Main Gap |
|---|---|---|---|---|---|
| Registration | `/` | Authentication | Register form, validation, Google button UI | Frontend localStorage prototype | Backend API integration, hashing, validation, duplicate checks |
| Login | `/login` | Authentication | Login form, password toggle, staff login UI | Frontend localStorage prototype | JWT/session auth, role routing, protected routes |
| Owner Dashboard | `/dashboard` | Dashboard | KPI cards, occupancy chart, revenue chart, activities, recent bookings, room status, reviews, subscription | Static/prototype data | API-driven metrics, date filters, real revenue/booking data |
| Booking Popup | Dashboard modal | Bookings | Step 1 customer info | Incomplete multi-step flow | Finish booking/payment/confirmation steps and persist booking |
| Rooms | `/rooms` and dashboard tab | Room Management | Room grid, pagination, add/edit/delete, details modal, gallery | Local state CRUD | Room APIs, image upload, validation, status sync |
| Customers | Dashboard tab | CRM | Customer table, stats, add/edit/delete modal | Local state CRUD | Customer APIs, consistent customer fields, search/filter/export |
| Check-in/out | `/checkinout` and dashboard tab | Front Desk | Guest table, filters, check-in/check-out forms | Local state workflow | Booking lookup, room status update, billing dependency |
| Housekeeping | `/housekeeping` and dashboard tab | Operations | Stats, charts, room cleaning list, staff tasks | Static data | Task assignment, status update APIs, staff linkage |
| Maintenance | `/maintenance` and dashboard tab | Operations | Critical issues, requests, technicians, workload, calendar | Static data | Request lifecycle APIs, assignment, SLA tracking |
| Reviews | Dashboard modal | Reputation | Rating summary, tags, reviews list | Static data | Review APIs, moderation, source linkage |
| Staff/Departments/Attendance | Sidebar only | Staff Management | Navigation labels | Not implemented | Full pages, APIs, tables, permissions |
| Billing/Reports/Revenue | Sidebar only | Finance | Navigation labels and dashboard revenue chart | Mostly not implemented | Billing, invoices, reports, export, analytics |
| Subscription | Dashboard card | SaaS Plan | Basic/Premium toggle | Local state only | Plan table, payment integration, entitlement gates |

## Step 2 - Complete Roadmap

Paste into Google Sheets as tab-separated values.

```tsv
Task ID	Project	Page	Module	Submodule	Task Description	Frontend Work	Backend Work	Database Work	API Work	Testing Work	Priority	Estimated Hours	Start Date	Target Date	Dependencies	Risk Level	Current Status	Completion %	Owner	Expected Output
SH-001	StayHub	All	Architecture	Repo audit	Baseline current frontend/backend/database state	Document current gaps	Review server/routes/controllers	Identify referenced tables	List missing endpoints	Manual smoke review	High	3	2026-06-23	2026-06-23	None	Low	Done	100	Solution Architect	Current-state assessment completed
SH-002	StayHub	Backend	Architecture	Server wiring	Refactor backend server to use route modules	None	Wire routes, env config, error middleware	None	Expose versioned API base	Smoke test endpoints	Critical	5	2026-06-23	2026-06-24	SH-001	High	Planned	0	Backend Developer	Stable Express API shell
SH-003	StayHub	Database	Core Schema	Schema design	Create normalized MySQL schema	None	Map entities and relationships	Create migrations for users, hotels, rooms, bookings, customers, housekeeping, maintenance, reviews, invoices	None	Validate migration execution	Critical	8	2026-06-24	2026-06-25	SH-002	High	Planned	0	Database Engineer	Database schema and migrations
SH-004	StayHub	Auth	Register/Login	Authentication API	Replace localStorage auth with backend auth	Connect forms to API	Implement bcrypt register/login and JWT	Users/admins/staff tables	POST auth/register, POST auth/login	Manual and API validation	Critical	8	2026-06-25	2026-06-26	SH-003	High	Planned	0	Full Stack Developer	Secure login and registration
SH-005	StayHub	All	Auth	Protected routes	Add role-based route protection	Add auth context and guards	JWT middleware	User role columns	GET auth/me	Route access testing	Critical	5	2026-06-26	2026-06-27	SH-004	High	Planned	0	Full Stack Developer	Protected owner/staff/admin routes
SH-006	StayHub	Dashboard	Analytics	KPI integration	Connect dashboard KPIs to backend	Replace hardcoded stats	Aggregate booking, room, revenue queries	Indexes on booking date/status	GET dashboard/summary	API and UI smoke tests	High	6	2026-06-27	2026-06-29	SH-003	Medium	Planned	0	Full Stack Developer	Live dashboard metrics
SH-007	StayHub	Rooms	Room Management	Room CRUD	Persist room management	Add filters, add/edit/delete modal, detail view and pagination	Create room CRUD controller	Rooms and room_images tables	GET/POST/PUT/DELETE rooms	CRUD validation tests	Critical	10	2026-06-29	2026-07-01	SH-003	High	In Progress	35	Full Stack Developer	Room CRUD connected to DB
SH-008	StayHub	Rooms	Room Management	Gallery and amenities	Persist room gallery and amenities	Add room-type gallery, thumbnails, image slider and amenities modal	Implement gallery/amenities logic	room_images, amenities, room_amenities	GET/POST room assets	Manual modal testing	Medium	6	2026-07-01	2026-07-02	SH-007	Medium	In Progress	65	Frontend Developer	Room details with persisted amenities
SH-009	StayHub	Bookings	Booking Flow	Multi-step popup	Complete booking wizard steps	Add booking, room, payment, confirmation steps	Booking creation logic	bookings, booking_guests, payments	POST bookings	Wizard validation tests	Critical	12	2026-07-02	2026-07-04	SH-004, SH-007	High	Planned	0	Full Stack Developer	Complete booking creation flow
SH-010	StayHub	Bookings	Booking List	Recent bookings	Create bookings page/list from real data	Add filters, status badges, actions	Booking list query	booking indexes	GET bookings	Manual list tests	High	8	2026-07-04	2026-07-06	SH-009	Medium	Planned	0	Full Stack Developer	Manage bookings from dashboard
SH-011	StayHub	Customers	CRM	Customer CRUD	Persist customers module	Add overview cards, filter panel, customer modal, edit/delete and age/city autofill	Customer controller	customers table	GET/POST/PUT/DELETE customers	CRUD tests	High	8	2026-07-06	2026-07-08	SH-003	Medium	In Progress	55	Full Stack Developer	Customer management persisted
SH-012	StayHub	Check-in/out	Front Desk	Check-in workflow	Connect check-in to booking and room status	Add guest table, status filters, guest detail/edit modal and check-in form	Update booking and room status	booking_events table	POST checkins	Workflow tests	Critical	10	2026-07-08	2026-07-10	SH-009, SH-007	High	In Progress	45	Full Stack Developer	Check-in updates booking and room
SH-013	StayHub	Check-in/out	Front Desk	Check-out workflow	Connect check-out to billing and room status	Add checkout form, payment validation and checked-out status transition	invoices/payments linkage	POST checkouts	Workflow tests	Critical	10	2026-07-10	2026-07-12	SH-012	High	In Progress	40	Full Stack Developer	Check-out with payment guard
SH-014	StayHub	Housekeeping	Operations	Task assignment	Add assign/update housekeeping task flow	Add status overview, clickable status distribution, manual SVG trend, status summary and room task list	Housekeeping controller	housekeeping_tasks table	GET/POST/PATCH housekeeping	Manual status tests	High	9	2026-07-13	2026-07-15	SH-007, SH-013	Medium	In Progress	45	Full Stack Developer	Housekeeping tasks managed
SH-015	StayHub	Maintenance	Operations	Request lifecycle	Add maintenance CRUD and assignment	Add new request modal and status actions	Maintenance controller	maintenance_requests table	GET/POST/PATCH maintenance	Manual request tests	High	9	2026-07-15	2026-07-17	SH-003	Medium	Planned	0	Full Stack Developer	Maintenance workflow persisted
SH-016	StayHub	Reviews	Reputation	Review management	Persist review list and rating summaries	Connect modal to API	Review controller	reviews table	GET/POST reviews	Manual filter tests	Medium	5	2026-07-17	2026-07-18	SH-003	Low	Planned	0	Full Stack Developer	Review dashboard from database
SH-017	StayHub	Staff	Staff Management	Staff pages	Implement staff, departments, attendance pages	Create sidebar routes/pages	Staff controllers	staff, departments, attendance tables	Staff CRUD and attendance APIs	Manual page tests	High	16	2026-07-20	2026-07-24	SH-005	Medium	Planned	0	Full Stack Developer	Staff management module
SH-018	StayHub	Finance	Billing	Invoices and payments	Implement billing page and invoices	Add invoice UI, payment statuses	Billing controller	invoices, payments tables	Billing APIs	Billing workflow tests	High	14	2026-07-24	2026-07-29	SH-009, SH-013	High	Planned	0	Full Stack Developer	Billing module ready
SH-019	StayHub	Reports	Reports	Revenue reports	Create reports and export views	Add date filters and export buttons	Report aggregation queries	Add indexes for reporting	GET reports/revenue	Report accuracy tests	Medium	12	2026-07-29	2026-08-03	SH-018	Medium	Planned	0	Full Stack Developer	Operational reports and revenue analytics
SH-020	StayHub	All	UX	Responsive cleanup	Fix layout, encoding, empty states, loading states	Update CSS and copy	None	None	None	Cross-page manual QA	High	12	2026-08-03	2026-08-07	Feature APIs	Medium	Planned	0	Frontend Developer	Polished responsive UI
SH-021	StayHub	Backend	Security	Auth hardening	Add security middleware and validation	Show clear auth errors	Input validation, CORS, rate limiting, JWT expiry	None	All secured endpoints	Security smoke tests	Critical	10	2026-08-10	2026-08-12	SH-005	High	Planned	0	Backend Developer	Secure API baseline
SH-022	StayHub	All	Testing	Test setup	Add automated test framework	Add component tests where useful	Add API tests	Create test DB seed strategy	Test scripts	Unit/integration tests	Critical	16	2026-08-12	2026-08-18	Core APIs	High	Planned	0	QA Lead	Repeatable test suite
SH-023	StayHub	All	DevOps	Environment setup	Add env examples and config cleanup	Show setup docs	Use dotenv config	DB env variables	None	Start/build smoke tests	High	6	2026-08-18	2026-08-19	SH-002	Medium	Planned	0	DevOps Lead	Developer setup standardized
SH-024	StayHub	All	DevOps	CI/CD	Add lint/build/test pipeline	Build frontend in CI	Run backend tests	Use test DB config	None	CI test run	High	10	2026-08-19	2026-08-21	SH-022, SH-023	Medium	Planned	0	DevOps Lead	Automated pipeline
SH-025	StayHub	All	Deployment	Staging deployment	Deploy frontend/backend/database to staging	Configure frontend env	Deploy backend service	Provision DB	Verify public API	Staging smoke test	Critical	12	2026-08-24	2026-08-27	SH-024	High	Planned	0	DevOps Lead	Working staging environment
SH-026	StayHub	All	QA	System QA	Run full regression and bug triage	Fix frontend defects	Fix backend defects	Validate data integrity	Retest APIs	Regression/UAT	Critical	24	2026-08-27	2026-09-04	SH-025	High	Planned	0	QA Lead	UAT-ready release candidate
SH-027	StayHub	All	Performance	Optimization	Optimize dashboard/API/page loads	Add memo/loading optimizations	Optimize queries/indexes	Add DB indexes	Measure key endpoints	Performance test	Medium	12	2026-09-07	2026-09-10	SH-026	Medium	Planned	0	Engineering Manager	Performance acceptable for launch
SH-028	StayHub	All	Documentation	User and technical docs	Create user workflow notes	API README and env docs	Schema docs	API examples	Doc review	Medium	10	2026-09-10	2026-09-14	SH-026	Low	Planned	0	Technical Writer	Launch documentation
SH-029	StayHub	All	Release	Production readiness	Prepare release checklist and rollback plan	Final build assets	Production config	Backup plan	Production endpoints	Release validation	Critical	10	2026-09-14	2026-09-18	SH-027, SH-028	High	Planned	0	TPM	Production release plan
SH-030	StayHub	All	Launch	Go-live	Production deployment and monitoring	Verify deployed UI	Deploy backend	Deploy DB migrations	Smoke API	Post-release smoke test	Critical	12	2026-09-21	2026-09-23	SH-029	High	Planned	0	DevOps Lead	Production go-live
```

## Timeline View

| Period | Focus |
|---|---|
| Today - 2026-06-23 | Project audit, backend architecture plan, workbook baseline |
| Tomorrow - 2026-06-24 | Wire backend routes, normalize DB connection, start schema |
| Day After Tomorrow - 2026-06-25 | Complete initial DB schema and migrations |
| Next 7 Days | Backend shell, schema, auth, protected routes, dashboard API foundation |
| Week 1 | Architecture, database, auth, dashboard integration |
| Week 2 | Rooms, booking flow, customer CRUD |
| Week 3 | Check-in/out, housekeeping, maintenance, reviews |
| Week 4 | Staff, billing, reports, responsive polish |
| Month 2 | Security, automated testing, CI/CD, staging, QA |
| Month 3 | Performance, documentation, release hardening, production launch |
| Expected Completion | 2026-09-23 |

## Step 3 - Google Sheets Structure

### Sheet 1: Projects_Master

```tsv
Project Name	Owner	Start Date	Target Date	Current Sprint	Overall Progress %	Frontend %	Backend %	Database %	Testing %	Deployment %	Current Status	Health Status	Expected Completion
StayHub Hospitality Management System	Project Owner	2026-06-23	2026-09-23	Sprint 1 - Frontend Prototype Expansion	37	68	10	5	0	0	Frontend modules advanced; backend/API pending	Yellow	2026-09-23
```

### Sheet 2: Daily_Updates

```tsv
Date	Developer	Project	Sprint	Page	Module	Submodule	Task ID	Task Description	Frontend Status	Backend Status	Database Status	API Status	Testing Status	Priority	Estimated Hours	Actual Hours	Completion %	Current Status	Blockers	Start Date	Target Date	Remarks
2026-06-23	Codex	StayHub	Sprint 0	All	Planning	Project audit	SH-001	Baseline codebase analysis	Done	Done	Done	Done	Manual review done	High	3	3	100	Done	None	2026-06-23	2026-06-23	Frontend prototype and backend gaps identified
2026-06-23	Backend Developer	StayHub	Sprint 1	Backend	Architecture	Server wiring	SH-002	Wire route modules into Express	Not Started	Planned	Not Started	Planned	Not Started	Critical	5	0	0	Planned	Route imports currently inconsistent	2026-06-23	2026-06-24	Use config/db and versioned routes
2026-06-24	Database Engineer	StayHub	Sprint 1	Database	Schema	Core tables	SH-003	Create normalized MySQL schema	Not Started	Not Started	Planned	Not Started	Not Started	Critical	8	0	0	Planned	No migrations exist	2026-06-24	2026-06-25	Add migrations and seed data
2026-06-25	Full Stack Developer	StayHub	Sprint 1	Login/Register	Auth	Authentication API	SH-004	Connect frontend auth to backend	Planned	Planned	Planned	Planned	Not Started	Critical	8	0	0	Planned	Frontend uses localStorage	2026-06-25	2026-06-26	Replace prototype auth
2026-06-24	Frontend Developer	StayHub	Sprint 1	Customers	CRM	Customer UI	SH-011	Built customer overview, filters, modal form, edit/delete and city/age autofill	In Progress	Not Started	Not Started	Not Started	Manual review pending	High	6	6	55	In Progress	No backend customer API yet	2026-06-24	2026-06-24	Frontend prototype improved
2026-06-24	Frontend Developer	StayHub	Sprint 1	Rooms	Room Management	Filters and gallery	SH-007/SH-008	Enhanced rooms with type/status/AC/floor filters, gallery images, thumbnails and amenities modal	In Progress	Not Started	Not Started	Not Started	Manual review pending	High	8	8	50	In Progress	No room API persistence yet	2026-06-24	2026-06-24	Room UI feature depth increased
2026-06-25	Frontend Developer	StayHub	Sprint 1	Check-in/out	Front Desk	Local workflow	SH-012/SH-013	Improved guest list filters, guest modal, check-in form and checkout payment validation	In Progress	Not Started	Not Started	Not Started	Build validation needed	Critical	5	5	42	In Progress	handleSave reference must be fixed	2026-06-25	2026-06-25	Check-in/out workflow progressed
2026-06-25	Frontend Developer	StayHub	Sprint 1	Housekeeping	Operations	Status dashboard	SH-014	Rebuilt housekeeping status overview with KPI cards, clickable distribution, trend graph, status summary and task list	In Progress	Not Started	Not Started	Not Started	Build validation needed	High	5	5	45	In Progress	Static data only; API pending	2026-06-25	2026-06-25	Housekeeping UI progressed
```

### Sheet 3: Daily_Task_Planner

```tsv
Task ID	Today's Tasks	Tomorrow Tasks	Day After Tomorrow Tasks	Estimated Hours	Priority	Dependencies	Status
SH-001	Complete project audit			3	High	None	Done
SH-002	Start backend route wiring	Complete backend route wiring		5	Critical	SH-001	Planned
SH-003		Design DB schema	Complete DB migrations	8	Critical	SH-002	Planned
SH-004			Start secure auth API	8	Critical	SH-003	Planned
SH-006		Document dashboard API requirements	Prepare aggregate queries	Implement first dashboard endpoint	6	High	SH-003	Planned
```

### Sheet 4: Weekly_Roadmap

```tsv
Week Number	Feature	Page	Module	Owner	Planned Hours	Actual Hours	Dependencies	Target Date	Completion %	Status	Remarks
Week 1	Architecture, schema, auth, dashboard API	All	Foundation	Full Stack Team	35	3	None	2026-06-29	8	In Progress	Current app is prototype-heavy
Week 2	Rooms, booking flow, customer CRUD	Rooms/Bookings/Customers	Core Operations	Full Stack Team	44	0	Week 1	2026-07-08	0	Planned	Highest user-value sprint
Week 3	Check-in/out, housekeeping, maintenance, reviews	Operations	Hotel Operations	Full Stack Team	43	0	Week 2	2026-07-18	0	Planned	Requires room/booking status sync
Week 4	Staff, billing, reports, UX polish	Staff/Finance/Reports	Management	Full Stack Team	54	0	Week 3	2026-08-07	0	Planned	Sidebar items become working pages
Month 2	Security, tests, CI/CD, staging	All	Quality/DevOps	QA and DevOps	68	0	Core features	2026-09-04	0	Planned	Release candidate target
Month 3	Performance, docs, production launch	All	Release	TPM and DevOps	44	0	Staging QA	2026-09-23	0	Planned	Go-live readiness
```

### Sheet 5: Sprint_Tracker

```tsv
Sprint	Features	Completed	In Progress	Pending	Bugs	Testing Status	Release Readiness	Health Status
Sprint 0 - Discovery	Project audit and workbook baseline	1	0	0	0	Manual review only	10%	Yellow
Sprint 1 - Foundation	Backend wiring, DB schema, auth, dashboard APIs	0	1	4	0	Not Started	20%	Yellow
Sprint 2 - Core Operations	Rooms, bookings, customers	0	0	5	0	Not Started	35%	Yellow
Sprint 3 - Hotel Operations	Check-in/out, housekeeping, maintenance, reviews	0	0	4	0	Not Started	50%	Yellow
Sprint 4 - Management	Staff, billing, reports, UX polish	0	0	4	0	Not Started	65%	Yellow
Sprint 5 - Release Hardening	Security, tests, CI/CD, staging, QA	0	0	6	0	Not Started	85%	Yellow
Sprint 6 - Launch	Performance, docs, production release	0	0	4	0	Not Started	100%	Yellow
```

### Sheet 6: Feature_Tracker

```tsv
Feature	Frontend	Backend	Database	API	Testing	Deployment	Overall Status	Completion %
Authentication	Prototype	Partial scaffold	Referenced only	Not integrated	None	None	In Progress	30
Owner Dashboard	Prototype	Partial dashboard controller	Referenced only	Not integrated	None	None	In Progress	45
Room Management	Enhanced prototype with filters, local CRUD and gallery	Route scaffold only	Referenced only	Not integrated	None	None	In Progress	58
Booking Management	Incomplete popup	Route scaffold only	Referenced only	Not integrated	None	None	In Progress	25
Customer Management	Enhanced prototype with filters and modal CRUD	Not implemented	Not implemented	Not implemented	None	None	In Progress	55
Check-in/out	Enhanced local workflow with filters and checkout validation	Not implemented	Not implemented	Not implemented	None	None	In Progress	50
Housekeeping	Enhanced static dashboard with status interaction	Not implemented	Not implemented	Not implemented	None	None	In Progress	48
Maintenance	Static dashboard	Not implemented	Not implemented	Not implemented	None	None	In Progress	30
Reviews	Prototype modal	Controller empty	Referenced only	Not implemented	None	None	In Progress	30
Staff Management	Sidebar only	Not implemented	Not implemented	Not implemented	None	None	Not Started	5
Billing/Reports	Sidebar/dashboard partial	Not implemented	Not implemented	Not implemented	None	None	Not Started	5
Deployment	Not configured	Not configured	Not configured	Not configured	None	None	Not Started	0
```

### Sheet 7: Frontend_Tracker

```tsv
Page	Module	Components	Framework	Status	Completion %
/	Registration	Register form, validation, Google button UI	React/Vite	Prototype	65
/login	Login	Login form, password visibility, staff button UI	React/Vite	Prototype	60
/dashboard	Owner Dashboard	Sidebar, header, KPIs, charts, cards, popups	React/Vite/Recharts	Prototype	70
/rooms	Room Management	Grid, filters, pagination, add/edit/delete, details modal, gallery, amenities modal	React/Vite	Prototype	78
Dashboard tab	Customers	Table, stats, add/edit/delete popup	React/Vite	Prototype	60
Dashboard tab	Customers	Overview cards, filters, customer list, modal add/edit/delete, city/age autofill	React/Vite	Prototype	75
/checkinout	Check-in/out	Stats, filters, table, guest modal, check-in/out forms, payment validation	React/Vite	Prototype	70
/housekeeping	Housekeeping	Stats, status distribution, manual trend graph, status popup, room/task lists	React/Vite	Prototype	68
/maintenance	Maintenance	Request dashboard, technician table, calendar	React/Vite	Prototype	50
Dashboard popup	Booking	Customer info step only	React/Vite	Incomplete	25
Dashboard popup	Reviews	Rating summary, tag filters, review cards	React/Vite	Prototype	60
Sidebar only	Staff/Finance/Reports	Navigation labels	React/Vite	Not Started	5
```

### Sheet 8: Backend_Tracker

```tsv
Service	Controller	Business Logic	Middleware	Authentication	Status	Completion %
Express Server	server.js has inline register/login only	Basic plaintext auth flow	CORS/bodyParser only	Weak/Insecure	In Progress	20
Admin Service	adminController.js	Admin login using bcryptjs	None	Partial scaffold	In Progress	30
Auth Service	authController.js empty	Missing	Missing	Missing	Not Started	0
User Service	userRoutes.js has bcrypt flow but not wired	Partial route logic	None	Partial	In Progress	20
Hotel Service	hotelRoutes.js scaffold, controller empty	Simple CRUD route only	None	Missing	In Progress	15
Room Service	roomController.js empty	Missing	Missing	Missing	Not Started	0
Booking Service	bookingRoutes.js scaffold, controller empty	Simple insert/list route only	None	Missing	In Progress	15
Dashboard Service	dashboardController.js aggregate query	Partial summary query	None	Depends on auth	Partial	25
Review Service	reviewController.js empty	Missing	Missing	Missing	Not Started	0
Auth Middleware	authMiddleware.js empty	Missing	Missing	Missing	Not Started	0
```

### Sheet 9: Database_Tracker

```tsv
Table	Relationships	Indexes	Migration	Seed Data	Completion %
users	bookings, reviews	email unique needed	Not Created	Not Created	10
admins	admin auth	email unique needed	Not Created	Not Created	10
hotels	rooms, bookings, staff	name/location indexes needed	Not Created	Not Created	10
rooms	hotel, bookings, housekeeping, maintenance	status/type indexes needed	Not Created	Not Created	10
room_images	rooms	room_id index needed	Not Created	Not Created	0
amenities	rooms	name unique needed	Not Created	Not Created	0
bookings	users/customers, hotel, room, payments	checkin/checkout/status indexes needed	Not Created	Not Created	10
customers	bookings	phone/email indexes needed	Not Created	Not Created	0
booking_events	bookings	type/date indexes needed	Not Created	Not Created	0
housekeeping_tasks	rooms, staff	status/date indexes needed	Not Created	Not Created	0
maintenance_requests	rooms, staff	priority/status indexes needed	Not Created	Not Created	0
reviews	users/customers, hotel, booking	rating/date indexes needed	Not Created	Not Created	0
staff	hotel, department	role/status indexes needed	Not Created	Not Created	0
departments	staff	name unique needed	Not Created	Not Created	0
attendance	staff	date/staff indexes needed	Not Created	Not Created	0
invoices	bookings, payments	status/date indexes needed	Not Created	Not Created	0
payments	invoices	method/status indexes needed	Not Created	Not Created	0
subscriptions	hotel	plan/status indexes needed	Not Created	Not Created	0
```

### Sheet 10: API_Tracker

```tsv
API Name	Endpoint	Method	Integrated	Testing Status	Completion %
Register	/api/auth/register	POST	No	Not Started	10
Login	/api/auth/login	POST	No	Not Started	10
Current User	/api/auth/me	GET	No	Not Started	0
Dashboard Summary	/api/dashboard/summary	GET	No	Not Started	20
Rooms List	/api/rooms	GET	No	Not Started	10
Create Room	/api/rooms	POST	No	Not Started	10
Update Room	/api/rooms/:id	PUT	No	Not Started	0
Delete Room	/api/rooms/:id	DELETE	No	Not Started	0
Bookings List	/api/bookings	GET	No	Not Started	10
Create Booking	/api/bookings	POST	No	Not Started	10
Customers CRUD	/api/customers	GET/POST/PUT/DELETE	No	Not Started	0
Check-in	/api/checkins	POST	No	Not Started	0
Check-out	/api/checkouts	POST	No	Not Started	0
Housekeeping Tasks	/api/housekeeping	GET/POST/PATCH	No	Not Started	0
Maintenance Requests	/api/maintenance	GET/POST/PATCH	No	Not Started	0
Reviews	/api/reviews	GET/POST	No	Not Started	0
Billing	/api/billing	GET/POST	No	Not Started	0
Reports	/api/reports/revenue	GET	No	Not Started	0
```

### Sheet 11: Bug_Tracker

```tsv
Bug ID	Module	Severity	Assigned To	ETA	Status
BUG-001	Backend route imports	High	Backend Developer	2026-06-24	Open
BUG-002	Auth security	High	Backend Developer	2026-06-26	Open
BUG-003	Frontend/backend auth mismatch	High	Full Stack Developer	2026-06-26	Open
BUG-004	BookingPopup onSave not used because component does not accept onSave	Medium	Frontend Developer	2026-07-04	Open
BUG-005	Booking wizard only has step 1 implemented	High	Frontend Developer	2026-07-04	Open
BUG-006	Encoding issues display rupee/check icons incorrectly	Medium	Frontend Developer	2026-08-07	Open
BUG-007	Recharts dependency missing from frontend package.json but used in source	Medium	Frontend Developer	2026-06-24	Open
BUG-008	No database migrations or seed data	High	Database Engineer	2026-06-25	Open
BUG-009	No automated tests	High	QA Lead	2026-08-18	Open
BUG-010	BookingPopup runtime behavior needs verification after commented implementation was found	Medium	Frontend Developer	2026-06-26	Open
BUG-011	CheckInOut.jsx references undefined handleSave in edit modal	High	Frontend Developer	2026-06-26	Open
BUG-012	Several UI files still show broken encoded rupee/icon characters	Medium	Frontend Developer	2026-06-27	Open
```

### Sheet 12: Testing_Tracker

```tsv
Feature	Unit Test	Integration Test	Manual Test	UAT	Status
Authentication	Not Started	Not Started	Needed	Not Started	Open
Dashboard	Not Started	Not Started	Needed	Not Started	Open
Rooms	Not Started	Not Started	Needed	Not Started	Open
Bookings	Not Started	Not Started	Needed	Not Started	Open
Customers	Not Started	Not Started	Needed	Not Started	Open
Check-in/out	Not Started	Not Started	Needed	Not Started	Open
Housekeeping	Not Started	Not Started	Needed	Not Started	Open
Maintenance	Not Started	Not Started	Needed	Not Started	Open
Billing/Reports	Not Started	Not Started	Needed	Not Started	Open
Security	Not Started	Not Started	Needed	Not Started	Open
Deployment	Not Started	Not Started	Needed	Not Started	Open
```

### Sheet 13: Deployment_Tracker

```tsv
Environment	Frontend Version	Backend Version	Database Version	Status
Local Dev	0.0.0	1.0.0	Manual local MySQL reference	Partial
Test	Not Created	Not Created	Not Created	Not Started
Staging	Not Created	Not Created	Not Created	Not Started
Production	Not Created	Not Created	Not Created	Not Started
```

### Sheet 14: Risks_And_Blockers

```tsv
Risk Type	Description	Severity	Owner	Mitigation Plan	Status
Architecture	Backend server does not wire scaffolded route modules	High	Backend Developer	Refactor server with versioned API router	Open
Security	Plaintext password flow exists in current server	High	Backend Developer	Use bcryptjs, JWT, validation, rate limiting	Open
Database	No schema/migration files are present	High	Database Engineer	Create migrations and seed strategy	Open
Integration	Frontend uses localStorage/static state instead of APIs	High	Full Stack Developer	Introduce API service and connect module by module	Open
Quality	No automated tests or CI pipeline	High	QA Lead	Add focused API and UI tests before release	Open
Delivery	Many modules are prototype-only	Medium	Engineering Manager	Prioritize rooms/bookings/auth before staff/finance	Open
UX	Encoding issues show broken symbols in UI	Medium	Frontend Developer	Normalize file encoding and replace broken characters	Open
Dependency	Recharts used but not listed in frontend dependencies	Medium	Frontend Developer	Add dependency to frontend package	Open
Deployment	No staging or production environment defined	High	DevOps Lead	Create env docs, CI, staging deployment	Open
```

### Sheet 15: Team_Productivity

```tsv
Developer	Tasks Completed	Hours Worked	Productivity Score	Remarks
Codex	1	3	90	Completed analysis and project workbook baseline
Frontend Developer	0	0	0	Ready for Sprint 1 UI/API integration tasks
Backend Developer	0	0	0	Ready for server wiring and auth tasks
Database Engineer	0	0	0	Ready for schema and migration tasks
QA Lead	0	0	0	Testing framework not started
DevOps Lead	0	0	0	Deployment pipeline not started
Project Owner	0	0	0	Needs priorities and acceptance criteria confirmation
```

## Step 4 - Daily Report

| Metric | Report |
|---|---|
| Date | 2026-06-25 |
| Completed Tasks | 2-day frontend progress added for Customers, Rooms, Check-in/out, Housekeeping |
| Tasks In Progress | SH-007, SH-008, SH-011, SH-012, SH-013, SH-014 |
| Pending Tasks | Backend APIs, database schema, auth integration, tests, deployment |
| Blockers | No DB migrations, backend routes not wired, frontend still uses static/local state, BookingPopup runtime needs verification, CheckInOut has undefined handleSave when edit mode saves |
| Bug Fixes | No verified bug fixes; new bugs BUG-010 to BUG-012 logged |
| Hours Worked | 24 estimated frontend hours across 2026-06-24 to 2026-06-25 |
| Today's Progress % | 45% for active frontend module updates |
| Overall Project % | 37% |
| Tomorrow's Deliverables | Fix BookingPopup export, fix CheckInOut handleSave, run build, start backend route/API integration |
| Health Status | Yellow |

## Step 5 - Weekly Report

| Field | Report |
|---|---|
| Week 1 Summary | Foundation sprint should complete server wiring, schema, auth, protected routes, and dashboard summary API |
| Week 2 Summary | Core operations sprint should complete rooms, booking flow, and customers |
| Completed Features | Frontend prototypes for dashboard, rooms, customers, check-in/out, housekeeping, maintenance, reviews |
| Pending Features | API integration, database persistence, staff, billing, reports, deployment |
| Delays | Backend and database are behind frontend prototype maturity |
| Dependencies | MySQL schema is dependency for most backend work; auth is dependency for protected workflows |
| Risks | Security/auth mismatch, no tests, no deployment pipeline |
| Testing Status | Not started |
| Overall Completion % | 37% |
| Expected Completion Date | 2026-09-23 |
| Health Status | Yellow |

## Step 6 - Release Report

| Area | Status |
|---|---|
| Frontend Completion % | 68 |
| Backend Completion % | 10 |
| Database Completion % | 5 |
| API Completion % | 5 |
| Testing Completion % | 0 |
| Deployment Completion % | 0 |
| Security Status | Not release-ready; plaintext auth and missing middleware must be fixed |
| Performance Optimization | Not started |
| CI/CD Status | Not started |
| Known Issues | Backend not wired, no migrations, static frontend data, incomplete booking wizard, no tests |
| Release Readiness % | 18 |
| Confidence Level % | 38 |
| Ready For Deployment | NO |

## Step 7 - Continuous Memory Rule

| Rule | Current Baseline |
|---|---|
| Roadmap Persistence | Update this file on each progress update; do not recreate from scratch |
| Progress Updates | Move task statuses from Planned to In Progress to Done and adjust completion percentages |
| Daily Planning | Refresh Sheet 2 and Sheet 3 each workday |
| Sprint Health | Update Sheet 5 after every completed task or blocker |
| Release Readiness | Update Step 6 after tests, security, CI/CD, and staging progress |
| Overall Progress Baseline | Updated to 37% on 2026-06-25 after 2-day frontend progress |
